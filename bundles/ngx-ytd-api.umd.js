(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-ytd-api/comments'), require('ngx-ytd-api/core'), require('ngx-ytd-api/common'), require('ngx-ytd-api/search'), require('ngx-ytd-api/videos')) :
	typeof define === 'function' && define.amd ? define('ngx-ytd-api', ['exports', 'ngx-ytd-api/comments', 'ngx-ytd-api/core', 'ngx-ytd-api/common', 'ngx-ytd-api/search', 'ngx-ytd-api/videos'], factory) :
	(global = global || self, factory(global['ngx-ytd-api'] = {}, global['ngx-ytd-api'].comments, global['ngx-ytd-api'].core, global['ngx-ytd-api'].common, global['ngx-ytd-api'].search, global['ngx-ytd-api'].videos));
}(this, function (exports, comments, core, common, search, videos) { 'use strict';

	Object.keys(comments).forEach(function (key) {
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function () {
				return comments[key];
			}
		});
	});
	Object.keys(core).forEach(function (key) {
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function () {
				return core[key];
			}
		});
	});
	Object.keys(common).forEach(function (key) {
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function () {
				return common[key];
			}
		});
	});
	Object.keys(search).forEach(function (key) {
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function () {
				return search[key];
			}
		});
	});
	Object.keys(videos).forEach(function (key) {
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function () {
				return videos[key];
			}
		});
	});

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-ytd-api.umd.js.map
