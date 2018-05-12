'use strict';

var _util = require('util');

var _path = require('path');

var _fs = require('fs');

var _querystring = require('querystring');

var qs = _interopRequireWildcard(_querystring);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(111111);
(0, _util.promisify)(_fs.readFile)((0, _path.resolve)(__dirname, '../package.json')).then(function (data) {
    data = JSON.parse(data);
    console.log(data.name);
});
//# sourceMappingURL=nodeUseImport.js.map