'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.streamControllerProvider = undefined;

var _awilix = require('awilix');

var _streamController = require('./streamController');

var _streamController2 = _interopRequireDefault(_streamController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var streamControllerProvider = exports.streamControllerProvider = {
    streamController: (0, _awilix.asClass)(_streamController2.default).singleton()
};