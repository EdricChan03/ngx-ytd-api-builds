(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-ytd-api/comments'), require('ngx-ytd-api/common'), require('ngx-ytd-api/search'), require('ngx-ytd-api/videos'), require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('ngx-ytd-api', ['exports', 'ngx-ytd-api/comments', 'ngx-ytd-api/common', 'ngx-ytd-api/search', 'ngx-ytd-api/videos', '@angular/core'], factory) :
	(global = global || self, factory(global['ngx-ytd-api'] = {}, global['ngx-ytd-api'].comments, global['ngx-ytd-api'].common, global['ngx-ytd-api'].search, global['ngx-ytd-api'].videos, global.ng.core));
}(this, function (exports, comments, common, search, videos, core) { 'use strict';

	var VERSION = new core.Version('1.0.0-alpha.4-f5b8908-f5b8908');

	// export * from './comments';
	// export * from './search';
	// export * from './videos';

	/**
	 * Generated bundle index. Do not edit.
	 */

	Object.keys(comments).forEach(function (key) {
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function () {
				return comments[key];
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
	Object.defineProperty(exports, 'VERSION', {
		enumerable: true,
		get: function () {
			return comments.VERSION;
		}
	});

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-ytd-api.umd.js.map
