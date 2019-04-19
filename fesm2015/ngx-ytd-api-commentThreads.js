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
class NgxYtdApiCommentThreadsService {
    /**
     * @param {?} common
     */
    constructor(common) {
        this.common = common;
        this.ngxYtdApiCommentThreadsApiUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';
    }
    /**
     * Returns a list of comment threads that match the API request parameters
     * @see [CommentThreads: list](https://developers.google.com/youtube/v3/docs/commentThreads/list) / [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/list#parameters) / [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/list#response) / [Examples](https://developers.google.com/youtube/v3/docs/commentThreads/list#examples)
     * @param {?} params Query parameters to be appended to the API endpoint
     * @return {?} Results of the list as an `Observable`
     */
    list(params) {
        return this.common.sendHttpRequest(this.ngxYtdApiCommentThreadsApiUrl, this.common.mergeParamsWithStandardParams(params), null, 'get');
    }
    /**
     * Creates a new top-level comment
     * @see [CommentThreads: insert](https://developers.google.com/youtube/v3/docs/commentThreads/insert) / [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/insert#parameters) / [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#response) / [Request body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#request-body) / [API Explorer demo](https://developers.google.com/youtube/v3/docs/commentThreads/insert?apix=true)
     * @param {?} body The top-level comment to create
     * (See [request body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#request-body) for more info)
     * @param {?} params Parameters for the API
     * @return {?} The created comment thread
     */
    insert(body, params) {
        return this.common.sendHttpRequest(this.ngxYtdApiCommentThreadsApiUrl, this.common.mergeParamsWithStandardParams(params), body, 'post');
    }
    /**
     * Modifies the top-level comment in a comment thread
     * @see [CommentThreads: update](https://developers.google.com/youtube/v3/docs/commentThreads/update) / [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/update#parameters) / [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/update#response) / [Request body](https://developers.google.com/youtube/v3/docs/commentThreads/update#request-body) / [API Explorer demo](https://developers.google.com/youtube/v3/docs/commentThreads/update?apix=true)
     * @param {?} body A modified version of the top-level comment
     * @param {?} params Parameters for the API
     * @return {?} The updated top-level comment
     */
    update(body, params) {
        return this.common.sendHttpRequest(this.ngxYtdApiCommentThreadsApiUrl, this.common.mergeParamsWithStandardParams(params), body, 'put');
    }
}
NgxYtdApiCommentThreadsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxYtdApiCommentThreadsService.ctorParameters = () => [
    { type: NgxYtdApiCommonService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxYtdApiCommentThreadsModule {
}
NgxYtdApiCommentThreadsModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    NgxYtdApiCommentThreadsService
                ],
                imports: [
                    NgxYtdApiCommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxYtdApiCommentThreadsModule, NgxYtdApiCommentThreadsService };

//# sourceMappingURL=ngx-ytd-api-commentThreads.js.map