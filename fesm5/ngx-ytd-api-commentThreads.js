import { __decorate, __metadata } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { NgxYtdApiCommonService, NGX_YTD_API_DEFAULT_STANDARD_PARAMS, NgxYtdApiCommonModule } from 'ngx-ytd-api/common';

var NgxYtdApiCommentThreadsService = /** @class */ (function () {
    function NgxYtdApiCommentThreadsService(common) {
        this.common = common;
        this.ngxYtdApiCommentThreadsApiUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';
    }
    /**
     * Returns a list of comment threads that match the API request parameters
     * @see [CommentThreads: list](https://developers.google.com/youtube/v3/docs/commentThreads/list)
     * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/list#parameters)
     * @see [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/list#response)
     * @see [Examples](https://developers.google.com/youtube/v3/docs/commentThreads/list#examples)
     * @param params Query parameters to be appended to the API endpoint
     * @returns Results of the list as an `Observable`
     */
    NgxYtdApiCommentThreadsService.prototype.list = function (params) {
        return this.common.sendHttpRequest(this.ngxYtdApiCommentThreadsApiUrl, this.common.mergeParamsWithStandardParams(params), null, 'get');
    };
    /**
     * Creates a new top-level comment
     * @see [CommentThreads: insert](https://developers.google.com/youtube/v3/docs/commentThreads/insert)
     * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/insert#parameters)
     * @see [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#response)
     * @see [Request body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#request-body)
     * @see [API Explorer demo](https://developers.google.com/youtube/v3/docs/commentThreads/insert?apix=true)
     * @param body The top-level comment to create
     * (See [request body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#request-body) for more info)
     * @param params Parameters for the API
     * @returns The created comment thread
     */
    NgxYtdApiCommentThreadsService.prototype.insert = function (body, params) {
        return this.common.sendHttpRequest(this.ngxYtdApiCommentThreadsApiUrl, this.common.mergeParamsWithStandardParams(params), body, 'post');
    };
    /**
     * Modifies the top-level comment in a comment thread
     * @see [CommentThreads: update](https://developers.google.com/youtube/v3/docs/commentThreads/update)
     * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/update#parameters)
     * @see [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/update#response)
     * @see [Request body](https://developers.google.com/youtube/v3/docs/commentThreads/update#request-body)
     * @see [API Explorer demo](https://developers.google.com/youtube/v3/docs/commentThreads/update?apix=true)
     * @param body A modified version of the top-level comment
     * @param params Parameters for the API
     * @returns The updated top-level comment
     */
    NgxYtdApiCommentThreadsService.prototype.update = function (body, params) {
        return this.common.sendHttpRequest(this.ngxYtdApiCommentThreadsApiUrl, this.common.mergeParamsWithStandardParams(params), body, 'put');
    };
    NgxYtdApiCommentThreadsService.ctorParameters = function () { return [
        { type: NgxYtdApiCommonService }
    ]; };
    NgxYtdApiCommentThreadsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NgxYtdApiCommonService])
    ], NgxYtdApiCommentThreadsService);
    return NgxYtdApiCommentThreadsService;
}());

var NgxYtdApiCommentThreadsModule = /** @class */ (function () {
    function NgxYtdApiCommentThreadsModule() {
    }
    NgxYtdApiCommentThreadsModule_1 = NgxYtdApiCommentThreadsModule;
    /**
     * Returns the module with the specified standard parameters
     * @param defaultParams The default standard parameters
     * @returns The module with the specified standard parameters
     */
    NgxYtdApiCommentThreadsModule.forRoot = function (defaultParams) {
        return {
            ngModule: NgxYtdApiCommentThreadsModule_1,
            providers: [
                { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
            ]
        };
    };
    var NgxYtdApiCommentThreadsModule_1;
    NgxYtdApiCommentThreadsModule = NgxYtdApiCommentThreadsModule_1 = __decorate([
        NgModule({
            providers: [
                NgxYtdApiCommentThreadsService
            ],
            imports: [
                NgxYtdApiCommonModule
            ]
        })
    ], NgxYtdApiCommentThreadsModule);
    return NgxYtdApiCommentThreadsModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { NgxYtdApiCommentThreadsModule, NgxYtdApiCommentThreadsService };
//# sourceMappingURL=ngx-ytd-api-commentThreads.js.map
