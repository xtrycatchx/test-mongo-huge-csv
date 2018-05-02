"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.close = exports.get = exports.connect = undefined;

var _mongodb = require("mongodb");

var _config = require("./config");

var state = {
    db: null
};

var connect = exports.connect = function connect(done) {
    if (state.db) return done();
    _mongodb.MongoClient.connect(_config.mongoUrl, function (err, client) {
        if (err) return done(err);
        state.db = client.db(_config.dbName);
        done();
    });
};

var get = exports.get = function get() {
    return state.db;
};

var close = exports.close = function close(done) {
    if (state.db) {
        state.db.close(function (err, result) {
            state.db = null;
            state.mode = null;
            done(err);
        });
    }
};