(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('ngx-ytd-api/core', ['exports', '@angular/core'], factory) :
	(global = global || self, factory((global['ngx-ytd-api'] = global['ngx-ytd-api'] || {}, global['ngx-ytd-api'].core = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

	/** Version of ngx-ytd-api */
	var VERSION = new core.Version('1.0.0-alpha.4-9547a5c-9547a5c');

	exports.VERSION = VERSION;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-ytd-api-core.umd.js.map
