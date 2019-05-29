import { __decorate, __metadata } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { NgxYtdApiCommonService, NgxYtdApiCommonModule } from 'ngx-ytd-api/common';

var NgxYtdApiVideosService = /** @class */ (function () {
    function NgxYtdApiVideosService(common) {
        this.common = common;
        /**
         * The API URL for the Videos API of the YouTube Data v3 API
         */
        this.ngxYtdVideosApiUrl = 'https://www.googleapis.com/youtube/v3/videos';
        /**
         * The API URL for the Videos API for uploading a video of the YouTube Data v3 API
         */
        this.ngxYtdVideoUploadsApiUrl = 'https://www.googleapis.com/upload/youtube/v3/videos';
    }
    /**
     * Deletes a YouTube video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.delete = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl, this.common.mergeOpts(opts), null, 'delete');
    };
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.getRating = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl + "/getRating", this.common.mergeOpts(opts), null, 'get');
    };
    /**
     * Uploads a video to YouTube and optionally sets the video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.insert = function (body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideoUploadsApiUrl, this.common.mergeOpts(opts), body, 'post');
    };
    /**
     * Returns a list of videos that match the requested API parameters
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list for more info
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.list = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl, this.common.mergeOpts(opts), null, 'get');
    };
    /**
     * Add a like or dislike rating to a video or remove a rating from a video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.rate = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl + "/rate", this.common.mergeOpts(opts), null, 'post');
    };
    /**
     * Reports a video for having abusive content
     *
     * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.reportAbuse = function (body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl + "/reportAbuse", this.common.mergeOpts(opts), body, 'post');
    };
    /**
     * Updates a video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos/update for more info
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.update = function (body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl, this.common.mergeOpts(opts), body, 'put');
    };
    NgxYtdApiVideosService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NgxYtdApiCommonService])
    ], NgxYtdApiVideosService);
    return NgxYtdApiVideosService;
}());

var NgxYtdApiVideosModule = /** @class */ (function () {
    function NgxYtdApiVideosModule() {
    }
    NgxYtdApiVideosModule = __decorate([
        NgModule({
            imports: [
                NgxYtdApiCommonModule
            ],
            providers: [
                NgxYtdApiVideosService
            ]
        })
    ], NgxYtdApiVideosModule);
    return NgxYtdApiVideosModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { NgxYtdApiVideosModule, NgxYtdApiVideosService };
//# sourceMappingURL=ngx-ytd-api-videos.js.map
