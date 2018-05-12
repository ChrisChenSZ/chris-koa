'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.age = exports.getName2 = exports.name2 = exports.getName = exports.name = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var ini = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return readAsync((0, _path.resolve)(__dirname, '../package.json'));

                    case 2:
                        data = _context.sent;

                        data = JSON.parse(data);
                        console.log(data);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function ini() {
        return _ref.apply(this, arguments);
    };
}();

var _util = require('util');

var _fs = require('fs');

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = 'Luck';
var getName = exports.getName = function getName() {
    return name;
};

var age = 19;

exports.name2 = name;
exports.getName2 = getName;
exports.age = age;


var readAsync = (0, _util.promisify)(_fs.readFile);

ini();
//# sourceMappingURL=ex.js.map