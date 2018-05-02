'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.streamRepositoryProvider = undefined;

var _awilix = require('awilix');

var _streamRepository = require('./streamRepository');

var _streamRepository2 = _interopRequireDefault(_streamRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var streamRepositoryProvider = exports.streamRepositoryProvider = {
    streamRepository: (0, _awilix.asClass)(_streamRepository2.default).singleton()
};