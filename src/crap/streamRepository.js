import * as db from './db'

export default class StreamRepository {
    constructor() {
        db.connect(function () {
            console.log("connected")
        })
    }

    execute(res) {
        res.setHeader('Content-disposition', 'attachment; filename=data.csv');
        res.set('Content-Type', 'text/csv');
        res.write('>>>>> HEADERS HERE');
        res.write('\r\n')
        let prevChunk = null;
        const stream = db.get().collection('weird').find().stream()
        stream.on('error', err => {
            console.error(err)
        })
        stream.on('data', doc => {
            if (prevChunk) {
                res.write(Object.values(prevChunk).join(','));
                res.write('\r\n')
            }
            prevChunk = doc;
        })
        stream.on('end', () => {
            if (prevChunk) {
                res.write(Object.values(prevChunk).join(','));
            }
            res.end('\r\n');
        });
    }
}