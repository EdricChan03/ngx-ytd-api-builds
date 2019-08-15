(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-ytd-api/comments'), require('ngx-ytd-api/core'), require('ngx-ytd-api/common'), require('ngx-ytd-api/search'), require('ngx-ytd-api/videos')) :
	typeof define === 'function' && define.amd ? define('ngx-ytd-api', ['exports', 'ngx-ytd-api/comments', 'ngx-ytd-api/core', 'ngx-ytd-api/common', 'ngx-ytd-api/search', 'ngx-ytd-api/videos'], factory) :
	(global = global || self, factory(global['ngx-ytd-api'] = {}, global['ngx-ytd-api'].comments, global['ngx-ytd-api'].core, global['ngx-ytd-api'].common, global['ngx-ytd-api'].search, global['ngx-ytd-api'].videos));
}(this, function (exports, comments, core, common, search, videos) { 'use strict';

	// export * from './comments';
	// export * from './search';
	// export * from './videos';

	/**
	 * Generated bundle index. Do not edit.
	 */

	Object.keys(comments).forEach(function (k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return comments[k];
			}
		});
	});
	Object.keys(core).forEach(function (k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return core[k];
			}
		});
	});
	Object.keys(common).forEach(function (k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return common[k];
			}
		});
	});
	Object.keys(search).forEach(function (k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return search[k];
			}
		});
	});
	Object.keys(videos).forEach(function (k) {
		if (k !== 'default') Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return videos[k];
			}
		});
	});

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-ytd-api.umd.js.map
