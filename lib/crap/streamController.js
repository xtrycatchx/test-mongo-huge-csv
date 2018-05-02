'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _autoBind = require('auto-bind');

var _autoBind2 = _interopRequireDefault(_autoBind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StreamController = function () {
	function StreamController(_ref) {
		var streamRepository = _ref.streamRepository;

		_classCallCheck(this, StreamController);

		this.streamRepository = streamRepository;
		(0, _autoBind2.default)(this);
	}

	_createClass(StreamController, [{
		key: 'get',
		value: function get(req, res) {
			this.streamRepository.execute(res);
		}
	}]);

	return StreamController;
}();

exports.default = StreamController;