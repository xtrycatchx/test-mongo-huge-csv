import * as db from './db'

export default class StreamRepository {
    constructor() {
        db.connect(function () {
            console.log("connected")
        })
    }

    execute(res) {

        res.set('Content-Type', 'application/json');
        res.write('[');
        var prevChunk = null;

        var stream = db.get().collection('weird').find().stream()
        stream.on('error', function (err) {
            console.error(err)
        })
        stream.on('data', function (doc) {
            console.log(doc)
            if (prevChunk) {
                res.write(JSON.stringify(prevChunk) + ',');
            }
            prevChunk = doc;
        })
        stream.on('end', function onEnd() {
            if (prevChunk) {
                res.write(JSON.stringify(prevChunk));
            }
            res.end(']');
        });
    }
}