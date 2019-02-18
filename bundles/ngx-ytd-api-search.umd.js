(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-ytd-api/common')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api/search', ['exports', '@angular/core', 'ngx-ytd-api/common'], factory) :
    (factory((global['ngx-ytd-api'] = global['ngx-ytd-api'] || {}, global['ngx-ytd-api'].search = {}),global.ng.core,global['ngx-ytd-api'].common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxYtdApiSearchService = /** @class */ (function () {
        function NgxYtdApiSearchService(common$$1) {
            this.common = common$$1;
            /**
             * The API URL for the Search API of the YouTube Data v3 API
             */
            this.ngxYtdSearchApiUrl = 'https://www.googleapis.com/youtube/v3/search';
        }
        /**
         * Returns a collection of search results that match the query parameters specified
         *
         * See https://developers.google.com/youtube/v3/docs/search/list for more info
         * @param opts API parameters for the API
         * @return Results of the search has an `Observable`
         */
        /**
         * Returns a collection of search results that match the query parameters specified
         *
         * See https://developers.google.com/youtube/v3/docs/search/list for more info
         * @param {?} opts API parameters for the API
         * @return {?} Results of the search has an `Observable`
         */
        NgxYtdApiSearchService.prototype.list = /**
         * Returns a collection of search results that match the query parameters specified
         *
         * See https://developers.google.com/youtube/v3/docs/search/list for more info
         * @param {?} opts API parameters for the API
         * @return {?} Results of the search has an `Observable`
         */
            function (opts) {
                return this.common.sendHttpRequest(this.ngxYtdSearchApiUrl, this.common.mergeOpts(opts), null, 'get');
            };
        NgxYtdApiSearchService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NgxYtdApiSearchService.ctorParameters = function () {
            return [
                { type: common.NgxYtdApiCommonService }
            ];
        };
        return NgxYtdApiSearchService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxYtdApiSearchModule = /** @class */ (function () {
        function NgxYtdApiSearchModule() {
        }
        NgxYtdApiSearchModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.NgxYtdApiCommonModule
                        ],
                        providers: [
                            NgxYtdApiSearchService
                        ]
                    },] }
        ];
        return NgxYtdApiSearchModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxYtdApiSearchModule = NgxYtdApiSearchModule;
    exports.NgxYtdApiSearchService = NgxYtdApiSearchService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-ytd-api-search.umd.js.map