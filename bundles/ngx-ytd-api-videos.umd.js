(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-ytd-api/common')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api/videos', ['exports', '@angular/core', 'ngx-ytd-api/common'], factory) :
    (global = global || self, factory((global['ngx-ytd-api'] = global['ngx-ytd-api'] || {}, global['ngx-ytd-api'].videos = {}), global.ng.core, global['ngx-ytd-api'].common));
}(this, function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

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
            core.Injectable(),
            __metadata("design:paramtypes", [common.NgxYtdApiCommonService])
        ], NgxYtdApiVideosService);
        return NgxYtdApiVideosService;
    }());

    var NgxYtdApiVideosModule = /** @class */ (function () {
        function NgxYtdApiVideosModule() {
        }
        NgxYtdApiVideosModule = __decorate([
            core.NgModule({
                imports: [
                    common.NgxYtdApiCommonModule
                ],
                providers: [
                    NgxYtdApiVideosService
                ]
            })
        ], NgxYtdApiVideosModule);
        return NgxYtdApiVideosModule;
    }());

    exports.NgxYtdApiVideosModule = NgxYtdApiVideosModule;
    exports.NgxYtdApiVideosService = NgxYtdApiVideosService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-ytd-api-videos.umd.js.map
