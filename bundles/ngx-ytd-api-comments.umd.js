(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-ytd-api/common')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api/comments', ['exports', '@angular/core', 'ngx-ytd-api/common'], factory) :
    (global = global || self, factory((global['ngx-ytd-api'] = global['ngx-ytd-api'] || {}, global['ngx-ytd-api'].comments = {}), global.ng.core, global['ngx-ytd-api'].common));
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
            core.Injectable(),
            __metadata("design:paramtypes", [common.NgxYtdApiCommonService])
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
                    { provide: common.NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
                ]
            };
        };
        var NgxYtdApiCommentsModule_1;
        NgxYtdApiCommentsModule = NgxYtdApiCommentsModule_1 = __decorate([
            core.NgModule({
                imports: [
                    common.NgxYtdApiCommonModule
                ],
                providers: [
                    NgxYtdApiCommentsService
                ]
            })
        ], NgxYtdApiCommentsModule);
        return NgxYtdApiCommentsModule;
    }());

    exports.NgxYtdApiCommentsModule = NgxYtdApiCommentsModule;
    exports.NgxYtdApiCommentsService = NgxYtdApiCommentsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-ytd-api-comments.umd.js.map
