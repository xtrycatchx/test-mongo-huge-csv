
import { MongoClient } from "mongodb"
import { mongoUrl, dbName } from './config'

export default class Database {
    static connect(url) {
        return new Promise((resolve, reject) => {
            if (this.db) resolve()
            MongoClient.connect(url, (err, db) => {
                if (err) reject(err)
                this.db = db.db(dbName)
                resolve()
            })
        })
    }

    static get() {
        return this.db
    }

    static close(done) {
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