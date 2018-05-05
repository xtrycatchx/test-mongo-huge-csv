
import { MongoClient } from 'mongodb'

export default class Database {

    constructor({ mongoUrl, databaseName }) {
        this.connect(mongoUrl, databaseName)
    }

    connect(url, dbName) {
        return new Promise((resolve, reject) => {
            if (this.db) resolve()
            MongoClient.connect(url, (err, db) => {
                if (err) reject(err)
                this.db = db.db(dbName)
                resolve()
            })
        })
    }

    get() {
        return this.db
    }

    close(done) {
        return new Promise((resolve, reject) => {
            if (this.db) {
                this.db.close((err, result) => {
                    if (err) reject(err)
                    state.db = null
                    state.mode = null
                    resolve()
                })
            } else {
                resolve()
            }
        })
    }
}