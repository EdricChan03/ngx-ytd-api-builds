import { Injectable, NgModule } from '@angular/core';
import { NgxYtdApiCommonService, NgxYtdApiCommonModule } from 'ngx-ytd-api/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxYtdApiSearchService = /** @class */ (function () {
    function NgxYtdApiSearchService(common) {
        this.common = common;
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
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxYtdApiSearchService.ctorParameters = function () { return [
        { type: NgxYtdApiCommonService }
    ]; };
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
        { type: NgModule, args: [{
                    imports: [
                        NgxYtdApiCommonModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxYtdApiSearchModule, NgxYtdApiSearchService };

//# sourceMappingURL=ngx-ytd-api-search.js.map