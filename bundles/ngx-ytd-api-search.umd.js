(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-ytd-api/common')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api/search', ['exports', '@angular/core', 'ngx-ytd-api/common'], factory) :
    (global = global || self, factory((global['ngx-ytd-api'] = global['ngx-ytd-api'] || {}, global['ngx-ytd-api'].search = {}), global.ng.core, global['ngx-ytd-api'].common));
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

    var NgxYtdApiSearchService = /** @class */ (function () {
        function NgxYtdApiSearchService(common) {
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
        NgxYtdApiSearchService.prototype.list = function (opts) {
            return this.common.sendHttpRequest(this.ngxYtdSearchApiUrl, this.common.mergeOpts(opts), null, 'get');
        };
        NgxYtdApiSearchService = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [common.NgxYtdApiCommonService])
        ], NgxYtdApiSearchService);
        return NgxYtdApiSearchService;
    }());

    var NgxYtdApiSearchModule = /** @class */ (function () {
        function NgxYtdApiSearchModule() {
        }
        NgxYtdApiSearchModule = __decorate([
            core.NgModule({
                imports: [
                    common.NgxYtdApiCommonModule
                ],
                providers: [
                    NgxYtdApiSearchService
                ]
            })
        ], NgxYtdApiSearchModule);
        return NgxYtdApiSearchModule;
    }());

    exports.NgxYtdApiSearchModule = NgxYtdApiSearchModule;
    exports.NgxYtdApiSearchService = NgxYtdApiSearchService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-ytd-api-search.umd.js.map
