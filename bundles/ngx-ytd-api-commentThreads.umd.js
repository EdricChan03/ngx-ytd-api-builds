(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-ytd-api/common')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api/commentThreads', ['exports', '@angular/core', 'ngx-ytd-api/common'], factory) :
    (global = global || self, factory((global['ngx-ytd-api'] = global['ngx-ytd-api'] || {}, global['ngx-ytd-api'].commentThreads = {}), global.ng.core, global['ngx-ytd-api'].common));
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
        NgxYtdApiCommentThreadsService = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [common.NgxYtdApiCommonService])
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
                    { provide: common.NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
                ]
            };
        };
        var NgxYtdApiCommentThreadsModule_1;
        NgxYtdApiCommentThreadsModule = NgxYtdApiCommentThreadsModule_1 = __decorate([
            core.NgModule({
                providers: [
                    NgxYtdApiCommentThreadsService
                ],
                imports: [
                    common.NgxYtdApiCommonModule
                ]
            })
        ], NgxYtdApiCommentThreadsModule);
        return NgxYtdApiCommentThreadsModule;
    }());

    exports.NgxYtdApiCommentThreadsModule = NgxYtdApiCommentThreadsModule;
    exports.NgxYtdApiCommentThreadsService = NgxYtdApiCommentThreadsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-ytd-api-commentThreads.umd.js.map
