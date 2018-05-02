import { createContainer } from 'awilix'
import * as repositoryModule from './repositoryModule'
import * as controllerModule from './controllerModule'

export const container = createContainer()

container
    .register(controllerModule.streamControllerProvider)
    .register(repositoryModule.streamRepositoryProvider)