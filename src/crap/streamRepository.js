import * as db from './db'

export default class StreamRepository {
    constructor() {
        db.connect(function () {
            console.log("connected")
        })
    }

    execute(res) {

        //TODO use csv format
        
        res.set('Content-Type', 'application/json');
        res.write('[');
        let prevChunk = null;

        const stream = db.get().collection('weird').find().stream()
        stream.on('error', err => {
            console.error(err)
        })
        stream.on('data', doc => {
            console.log(doc)
            if (prevChunk) {
                res.write(JSON.stringify(prevChunk) + ',');
            }
            prevChunk = doc;
        })
        stream.on('end', () => {
            if (prevChunk) {
                res.write(JSON.stringify(prevChunk));
            }
            res.end(']');
        });
    }
}