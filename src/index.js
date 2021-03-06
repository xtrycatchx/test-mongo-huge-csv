import express from 'express'
import methodOverride from 'method-override'
import router from './router'
import { serverPort } from './crap/config'
import Database from './crap/database'
import { mongoUrl, dbName } from './crap/config'

const app = express()

app.use(methodOverride())

app.use('/api', router)

app.listen(serverPort)

export default app
