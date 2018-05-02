import { asClass } from 'awilix'
import StreamRepository from './streamRepository'

export const streamRepositoryProvider = {
    streamRepository: asClass(StreamRepository).singleton()
}