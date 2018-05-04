import { createContainer } from 'awilix'
import * as repositoryModule from './repositoryModule'
import * as controllerModule from './controllerModule'
import * as configModule from './configModule'
import * as persistenceModule from './persistenceModule'

export const container = createContainer()

container
    .register(persistenceModule.databaseProvider)
    .register(configModule.databaseNameProvider)
    .register(configModule.mongoUrlProvider)
    .register(controllerModule.streamControllerProvider)
    .register(repositoryModule.streamRepositoryProvider)