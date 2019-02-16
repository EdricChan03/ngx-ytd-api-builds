(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-ytd-api/comments'), require('ngx-ytd-api/search'), require('ngx-ytd-api/videos'), require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('ngx-ytd-api', ['exports', 'ngx-ytd-api/comments', 'ngx-ytd-api/search', 'ngx-ytd-api/videos', '@angular/core'], factory) :
	(factory((global['ngx-ytd-api'] = {}),global['ngx-ytd-api'].comments,global['ngx-ytd-api'].search,global['ngx-ytd-api'].videos,global.ng.core));
}(this, (function (exports,comments,search,videos,core) { 'use strict';

	/**
	 * @fileoverview added by tsickle
	 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */
	/** @type {?} */
	var VERSION = new core.Version('1.0.0-alpha.4-4d36116-4d36116');

	/**
	 * @fileoverview added by tsickle
	 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	/**
	 * @fileoverview added by tsickle
	 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	exports.NgxYtdApiCommentsModule = comments.NgxYtdApiCommentsModule;
	exports.NgxYtdApiCommentsService = comments.NgxYtdApiCommentsService;
	exports.NgxYtdApiSearchModule = search.NgxYtdApiSearchModule;
	exports.NgxYtdApiSearchService = search.NgxYtdApiSearchService;
	exports.NgxYtdApiVideosService = videos.NgxYtdApiVideosService;
	exports.NgxYtdApiVideosModule = videos.NgxYtdApiVideosModule;
	exports.VERSION = VERSION;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-ytd-api.umd.js.map