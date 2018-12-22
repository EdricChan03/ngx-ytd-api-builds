(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('ngx-simple-http')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api/videos', ['exports', '@angular/common/http', '@angular/core', 'ngx-simple-http'], factory) :
    (factory((global['ngx-ytd-api'] = global['ngx-ytd-api'] || {}, global['ngx-ytd-api'].videos = {}),global.ng.common.http,global.ng.core,global.i1));
}(this, (function (exports,http,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxYtdApiVideosService = /** @class */ (function () {
        function NgxYtdApiVideosService(http$$1) {
            this.http = http$$1;
            /**
             * The API URL for the Videos API of the YouTube Data v3 API
             */
            this.ngxYtdVideosApiUrl = 'https://www.googleapis.com/youtube/v3/videos';
            /**
             * The API URL for the Videos API for uploading a video of the YouTube Data v3 API
             */
            this.ngxYtdVideoUploadsApiUrl = 'https://www.googleapis.com/upload/youtube/v3/videos';
        }
        // Handler for HTTP requests
        // Handler for HTTP requests
        /**
         * @private
         * @template B, P, R
         * @param {?} apiEndpoint
         * @param {?} opts
         * @param {?=} body
         * @param {?=} httpType
         * @return {?}
         */
        NgxYtdApiVideosService.prototype._httpHandler =
            // Handler for HTTP requests
            /**
             * @private
             * @template B, P, R
             * @param {?} apiEndpoint
             * @param {?} opts
             * @param {?=} body
             * @param {?=} httpType
             * @return {?}
             */
            function (apiEndpoint, opts, body, httpType) {
                if (body === void 0) {
                    body = null;
                }
                /** @type {?} */
                var headers;
                if ('accessToken' in opts && typeof opts['accessToken'] !== undefined && opts['accessToken'] !== null) {
                    headers = new http.HttpHeaders()
                        .set('Authorization', "Bearer " + opts['accessToken']);
                }
                switch (httpType) {
                    case 'delete':
                        if (headers) {
                            return this.http.createHttpDelete(apiEndpoint, opts, headers);
                        }
                        else {
                            return this.http.createHttpDelete(apiEndpoint, opts);
                        }
                    case 'get':
                        if (headers) {
                            return this.http.createHttpGet(apiEndpoint, opts, headers);
                        }
                        else {
                            return this.http.createHttpGet(apiEndpoint, opts);
                        }
                    case 'post':
                        if (headers) {
                            if (body) {
                                return this.http.createHttpPost(apiEndpoint, opts, body, headers);
                            }
                            else {
                                return this.http.createHttpPost(apiEndpoint, opts, null, headers);
                            }
                        }
                        else {
                            if (body) {
                                return this.http.createHttpPost(apiEndpoint, opts, body);
                            }
                            else {
                                return this.http.createHttpPost(apiEndpoint, opts, null);
                            }
                        }
                    case 'put':
                        if (headers) {
                            if (body) {
                                return this.http.createHttpPut(apiEndpoint, opts, body, headers);
                            }
                            else {
                                return this.http.createHttpPut(apiEndpoint, opts, null, headers);
                            }
                        }
                        else {
                            if (body) {
                                return this.http.createHttpPut(apiEndpoint, opts, body);
                            }
                            else {
                                return this.http.createHttpPut(apiEndpoint, opts, null);
                            }
                        }
                }
            };
        /**
         * Deletes a YouTube video
         *
         * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Deletes a YouTube video
         *
         * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.delete = /**
         * Deletes a YouTube video
         *
         * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (opts) {
                return this._httpHandler(this.ngxYtdVideosApiUrl, opts, null, 'delete');
            };
        /**
         * Retrieves the ratings that the authorized user gave to a list of specified videos
         *
         * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Retrieves the ratings that the authorized user gave to a list of specified videos
         *
         * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.getRating = /**
         * Retrieves the ratings that the authorized user gave to a list of specified videos
         *
         * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (opts) {
                return this._httpHandler(this.ngxYtdVideosApiUrl + "/getRating", opts, null, 'get');
            };
        /**
         * Uploads a video to YouTube and optionally sets the video's metadata
         *
         * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
         * @param body The HTTP request body
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Uploads a video to YouTube and optionally sets the video's metadata
         *
         * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
         * @param {?} body The HTTP request body
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.insert = /**
         * Uploads a video to YouTube and optionally sets the video's metadata
         *
         * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
         * @param {?} body The HTTP request body
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (body, opts) {
                return this._httpHandler(this.ngxYtdVideoUploadsApiUrl, opts, body, 'post');
            };
        /**
         * Returns a list of videos that match the requested API parameters
         *
         * See https://developers.google.com/youtube/v3/docs/videos/list for more info
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Returns a list of videos that match the requested API parameters
         *
         * See https://developers.google.com/youtube/v3/docs/videos/list for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.list = /**
         * Returns a list of videos that match the requested API parameters
         *
         * See https://developers.google.com/youtube/v3/docs/videos/list for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (opts) {
                return this._httpHandler(this.ngxYtdVideosApiUrl, opts, null, 'get');
            };
        /**
         * Add a like or dislike rating to a video or remove a rating from a video
         *
         * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Add a like or dislike rating to a video or remove a rating from a video
         *
         * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.rate = /**
         * Add a like or dislike rating to a video or remove a rating from a video
         *
         * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (opts) {
                return this._httpHandler(this.ngxYtdVideosApiUrl + "/rate", opts, null, 'post');
            };
        /**
         * Reports a video for having abusive content
         *
         * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
         * @param body The HTTP request body
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Reports a video for having abusive content
         *
         * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
         * @param {?} body The HTTP request body
         * @param {?=} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.reportAbuse = /**
         * Reports a video for having abusive content
         *
         * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
         * @param {?} body The HTTP request body
         * @param {?=} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (body, opts) {
                return this._httpHandler(this.ngxYtdVideosApiUrl + "/reportAbuse", opts, body, 'post');
            };
        /**
         * Updates a video's metadata
         *
         * See https://developers.google.com/youtube/v3/docs/videos/update for more info
         * @param body The HTTP request body
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Updates a video's metadata
         *
         * See https://developers.google.com/youtube/v3/docs/videos/update for more info
         * @param {?} body The HTTP request body
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.update = /**
         * Updates a video's metadata
         *
         * See https://developers.google.com/youtube/v3/docs/videos/update for more info
         * @param {?} body The HTTP request body
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (body, opts) {
                return this._httpHandler(this.ngxYtdVideosApiUrl, opts, body, 'put');
            };
        NgxYtdApiVideosService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxYtdApiVideosService.ctorParameters = function () {
            return [
                { type: i1.SimpleHttpService }
            ];
        };
        /** @nocollapse */ NgxYtdApiVideosService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiVideosService_Factory() { return new NgxYtdApiVideosService(i0.inject(i1.SimpleHttpService)); }, token: NgxYtdApiVideosService, providedIn: "root" });
        return NgxYtdApiVideosService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxYtdApiVideosModule = /** @class */ (function () {
        function NgxYtdApiVideosModule() {
        }
        NgxYtdApiVideosModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.SimpleHttpModule
                        ],
                        providers: [
                            NgxYtdApiVideosService
                        ]
                    },] }
        ];
        return NgxYtdApiVideosModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxYtdApiVideosService = NgxYtdApiVideosService;
    exports.NgxYtdApiVideosModule = NgxYtdApiVideosModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-ytd-api-videos.umd.js.map