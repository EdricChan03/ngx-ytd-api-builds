import { __decorate, __metadata } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { NgxYtdApiCommonService, NGX_YTD_API_DEFAULT_STANDARD_PARAMS, NgxYtdApiCommonModule } from 'ngx-ytd-api/common';

var NgxYtdApiCommentsService = /** @class */ (function () {
    function NgxYtdApiCommentsService(common) {
        this.common = common;
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
    NgxYtdApiCommentsService.prototype.delete = function (opts) {
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
    NgxYtdApiCommentsService.prototype.insert = function (body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), body, 'post');
    };
    /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param opts Options for the API
     * @return Results of the request as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.list = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), null, 'get');
    };
    /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param opts Options for the API
     * @return Results of the request as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.markAsSpam = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl + "/markAsSpam", this.common.mergeOpts(opts), null, 'post');
    };
    /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param opts Options for the API
     * @return Results of the request as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.setModerationStatus = function (opts) {
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
    NgxYtdApiCommentsService.prototype.update = function (body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), body, 'put');
    };
    NgxYtdApiCommentsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NgxYtdApiCommonService])
    ], NgxYtdApiCommentsService);
    return NgxYtdApiCommentsService;
}());

var NgxYtdApiCommentsModule = /** @class */ (function () {
    function NgxYtdApiCommentsModule() {
    }
    NgxYtdApiCommentsModule_1 = NgxYtdApiCommentsModule;
    /**
     * Returns the module with the specified standard parameters
     * @param defaultParams The default standard parameters
     * @returns The module with the specified standard parameters
     */
    NgxYtdApiCommentsModule.forRoot = function (defaultParams) {
        return {
            ngModule: NgxYtdApiCommentsModule_1,
            providers: [
                { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
            ]
        };
    };
    var NgxYtdApiCommentsModule_1;
    NgxYtdApiCommentsModule = NgxYtdApiCommentsModule_1 = __decorate([
        NgModule({
            imports: [
                NgxYtdApiCommonModule
            ],
            providers: [
                NgxYtdApiCommentsService
            ]
        })
    ], NgxYtdApiCommentsModule);
    return NgxYtdApiCommentsModule;
}());

export { NgxYtdApiCommentsModule, NgxYtdApiCommentsService };
//# sourceMappingURL=ngx-ytd-api-comments.js.map
