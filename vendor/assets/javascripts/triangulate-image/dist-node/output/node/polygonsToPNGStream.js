'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (polygons, size, options) {
	var dpr = options && options.dpr ? options.dpr : 1;
	var backgroundColor = options && options.backgroundColor ? options.backgroundColor : false;
	var canvas = new _canvasBrowserify2.default(size.width * dpr, size.height * dpr);
	var ctx = canvas.getContext('2d');

	if (backgroundColor) {
		ctx.fillStyle = backgroundColor;
		ctx.fillRect(0, 0, size.width * dpr, size.height * dpr);
		ctx.fillStyle = 'transparent';
	}

	(0, _drawPolygonsOnContext2.default)(ctx, polygons, size, dpr);

	return canvas.pngStream();
};

var _canvasBrowserify = require('canvas-browserify');

var _canvasBrowserify2 = _interopRequireDefault(_canvasBrowserify);

var _drawPolygonsOnContext = require('../../util/drawPolygonsOnContext');

var _drawPolygonsOnContext2 = _interopRequireDefault(_drawPolygonsOnContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default']; // https://github.com/Automattic/node-canvas#canvaspngstream