import { asClass } from 'awilix'
import StreamController from './streamController'

export const streamControllerProvider = {
    streamController: asClass(StreamController).singleton()
}
