import { __decorate, __metadata } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { NgxYtdApiCommonService, NGX_YTD_API_DEFAULT_STANDARD_PARAMS, NgxYtdApiCommonModule } from 'ngx-ytd-api/common';

let NgxYtdApiSearchService = class NgxYtdApiSearchService {
    constructor(common) {
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
    list(opts) {
        return this.common.sendHttpRequest(this.ngxYtdSearchApiUrl, this.common.mergeOpts(opts), null, 'get');
    }
};
NgxYtdApiSearchService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NgxYtdApiCommonService])
], NgxYtdApiSearchService);

var NgxYtdApiSearchModule_1;
let NgxYtdApiSearchModule = NgxYtdApiSearchModule_1 = class NgxYtdApiSearchModule {
    /**
     * Returns the module with the specified standard parameters
     * @param defaultParams The default standard parameters
     * @returns The module with the specified standard parameters
     */
    static forRoot(defaultParams) {
        return {
            ngModule: NgxYtdApiSearchModule_1,
            providers: [
                { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
            ]
        };
    }
};
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

export { NgxYtdApiSearchModule, NgxYtdApiSearchService };
//# sourceMappingURL=ngx-ytd-api-search.js.map
