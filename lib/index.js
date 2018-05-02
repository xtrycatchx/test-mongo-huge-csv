'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _config = require('./crap/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _methodOverride2.default)());

app.use('/api', _router2.default);

app.listen(_config.serverPort);

exports.default = app;