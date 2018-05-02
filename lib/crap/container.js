'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.container = undefined;

var _awilix = require('awilix');

var _repositoryModule = require('./repositoryModule');

var repositoryModule = _interopRequireWildcard(_repositoryModule);

var _controllerModule = require('./controllerModule');

var controllerModule = _interopRequireWildcard(_controllerModule);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var container = exports.container = (0, _awilix.createContainer)();

container.register(controllerModule.streamControllerProvider).register(repositoryModule.streamRepositoryProvider);