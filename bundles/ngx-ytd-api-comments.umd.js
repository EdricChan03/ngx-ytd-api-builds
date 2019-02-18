(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-ytd-api/common')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api/comments', ['exports', '@angular/core', 'ngx-ytd-api/common'], factory) :
    (factory((global['ngx-ytd-api'] = global['ngx-ytd-api'] || {}, global['ngx-ytd-api'].comments = {}),global.ng.core,global['ngx-ytd-api'].common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxYtdApiCommentsService = /** @class */ (function () {
        function NgxYtdApiCommentsService(common$$1) {
            this.common = common$$1;
            /**
             * The API URL for the Comments API of the YouTube Data v3 API
             */
            this.ngxYtdCommentsApiUrl = 'https://www.googleapis.com/youtube/v3/comments';
        }
        /**
         * Deletes a comment
         *
         * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
         * @param opts Options for the API
         * @return Results of the deletion as an `Observable`
         */
        /**
         * Deletes a comment
         *
         * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
         * @param {?} opts Options for the API
         * @return {?} Results of the deletion as an `Observable`
         */
        NgxYtdApiCommentsService.prototype.delete = /**
         * Deletes a comment
         *
         * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
         * @param {?} opts Options for the API
         * @return {?} Results of the deletion as an `Observable`
         */
            function (opts) {
                return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), null, 'delete');
            };
        /**
         * Creates a reply to an existing comment
         *
         * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
         * @param body The API body
         * @param opts Options for the API
         * @return Results of the creation as an `Observable`
         */
        /**
         * Creates a reply to an existing comment
         *
         * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
         * @param {?} body The API body
         * @param {?} opts Options for the API
         * @return {?} Results of the creation as an `Observable`
         */
        NgxYtdApiCommentsService.prototype.insert = /**
         * Creates a reply to an existing comment
         *
         * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
         * @param {?} body The API body
         * @param {?} opts Options for the API
         * @return {?} Results of the creation as an `Observable`
         */
            function (body, opts) {
                return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), body, 'post');
            };
        /**
         * Retrieves comments
         *
         * See https://developers.google.com/youtube/v3/docs/comments/list for more info
         * @param opts Options for the API
         * @return Results of the request as an `Observable`
         */
        /**
         * Retrieves comments
         *
         * See https://developers.google.com/youtube/v3/docs/comments/list for more info
         * @param {?} opts Options for the API
         * @return {?} Results of the request as an `Observable`
         */
        NgxYtdApiCommentsService.prototype.list = /**
         * Retrieves comments
         *
         * See https://developers.google.com/youtube/v3/docs/comments/list for more info
         * @param {?} opts Options for the API
         * @return {?} Results of the request as an `Observable`
         */
            function (opts) {
                return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), null, 'get');
            };
        /**
         * Flags one or more comments as spam
         *
         * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
         * @param opts Options for the API
         * @return Results of the request as an `Observable`
         */
        /**
         * Flags one or more comments as spam
         *
         * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
         * @param {?} opts Options for the API
         * @return {?} Results of the request as an `Observable`
         */
        NgxYtdApiCommentsService.prototype.markAsSpam = /**
         * Flags one or more comments as spam
         *
         * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
         * @param {?} opts Options for the API
         * @return {?} Results of the request as an `Observable`
         */
            function (opts) {
                return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl + "/markAsSpam", this.common.mergeOpts(opts), null, 'post');
            };
        /**
         * Sets the moderation status of one or more comments
         *
         * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
         * @param opts Options for the API
         * @return Results of the request as an `Observable`
         */
        /**
         * Sets the moderation status of one or more comments
         *
         * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
         * @param {?} opts Options for the API
         * @return {?} Results of the request as an `Observable`
         */
        NgxYtdApiCommentsService.prototype.setModerationStatus = /**
         * Sets the moderation status of one or more comments
         *
         * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
         * @param {?} opts Options for the API
         * @return {?} Results of the request as an `Observable`
         */
            function (opts) {
                return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl + "/setModerationStatus", this.common.mergeOpts(opts), null, 'post');
            };
        /**
         * Modifies a comment
         *
         * See https://developers.google.com/youtube/v3/docs/comments/update for more info
         * @param body The API body
         * @param opts Options for the API
         * @return Results of the update as an `Observable`
         */
        /**
         * Modifies a comment
         *
         * See https://developers.google.com/youtube/v3/docs/comments/update for more info
         * @param {?} body The API body
         * @param {?} opts Options for the API
         * @return {?} Results of the update as an `Observable`
         */
        NgxYtdApiCommentsService.prototype.update = /**
         * Modifies a comment
         *
         * See https://developers.google.com/youtube/v3/docs/comments/update for more info
         * @param {?} body The API body
         * @param {?} opts Options for the API
         * @return {?} Results of the update as an `Observable`
         */
            function (body, opts) {
                return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), body, 'put');
            };
        NgxYtdApiCommentsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NgxYtdApiCommentsService.ctorParameters = function () {
            return [
                { type: common.NgxYtdApiCommonService }
            ];
        };
        return NgxYtdApiCommentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxYtdApiCommentsModule = /** @class */ (function () {
        function NgxYtdApiCommentsModule() {
        }
        NgxYtdApiCommentsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.NgxYtdApiCommonModule
                        ],
                        providers: [
                            NgxYtdApiCommentsService
                        ]
                    },] }
        ];
        return NgxYtdApiCommentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxYtdApiCommentsModule = NgxYtdApiCommentsModule;
    exports.NgxYtdApiCommentsService = NgxYtdApiCommentsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-ytd-api-comments.umd.js.map