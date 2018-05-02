'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('./db');

var db = _interopRequireWildcard(_db);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StreamRepository = function () {
    function StreamRepository() {
        _classCallCheck(this, StreamRepository);

        db.connect(function () {
            console.log("connected");
        });
    }

    _createClass(StreamRepository, [{
        key: 'execute',
        value: function execute(res) {

            res.set('Content-Type', 'application/json');
            res.write('[');
            var prevChunk = null;

            var stream = db.get().collection('weird').find().stream();
            stream.on('error', function (err) {
                console.error(err);
            });
            stream.on('data', function (doc) {
                console.log(doc);
                if (prevChunk) {
                    res.write(JSON.stringify(prevChunk) + ',');
                }
                prevChunk = doc;
            });
            stream.on('end', function onEnd() {
                if (prevChunk) {
                    res.write(JSON.stringify(prevChunk));
                }
                res.end(']');
            });
        }
    }]);

    return StreamRepository;
}();

exports.default = StreamRepository;