import { asClass } from 'awilix'
import Database from './database'

export const databaseProvider = {
    database: asClass(Database).singleton()
}