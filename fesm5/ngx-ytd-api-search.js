import { __decorate, __metadata } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { NgxYtdApiCommonService, NGX_YTD_API_DEFAULT_STANDARD_PARAMS, NgxYtdApiCommonModule } from 'ngx-ytd-api/common';

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
    NgxYtdApiSearchService.prototype.list = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdSearchApiUrl, this.common.mergeOpts(opts), null, 'get');
    };
    NgxYtdApiSearchService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NgxYtdApiCommonService])
    ], NgxYtdApiSearchService);
    return NgxYtdApiSearchService;
}());

var NgxYtdApiSearchModule = /** @class */ (function () {
    function NgxYtdApiSearchModule() {
    }
    NgxYtdApiSearchModule_1 = NgxYtdApiSearchModule;
    /**
     * Returns the module with the specified standard parameters
     * @param defaultParams The default standard parameters
     * @returns The module with the specified standard parameters
     */
    NgxYtdApiSearchModule.forRoot = function (defaultParams) {
        return {
            ngModule: NgxYtdApiSearchModule_1,
            providers: [
                { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
            ]
        };
    };
    var NgxYtdApiSearchModule_1;
    NgxYtdApiSearchModule = NgxYtdApiSearchModule_1 = __decorate([
        NgModule({
            imports: [
                NgxYtdApiCommonModule
            ],
            providers: [
                NgxYtdApiSearchService
            ]
        })
    ], NgxYtdApiSearchModule);
    return NgxYtdApiSearchModule;
}());

export { NgxYtdApiSearchModule, NgxYtdApiSearchService };
//# sourceMappingURL=ngx-ytd-api-search.js.map
