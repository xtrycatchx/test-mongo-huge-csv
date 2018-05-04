import { asValue } from 'awilix'
import * as config from './config'

export const mongoUrlProvider = {
    mongoUrl: asValue(config.mongoUrl)
}

export const databaseNameProvider = {
    databaseName: asValue(config.dbName)
}
