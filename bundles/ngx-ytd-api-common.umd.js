(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('ngx-simple-http')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api/common', ['exports', '@angular/common/http', '@angular/core', 'ngx-simple-http'], factory) :
    (factory((global['ngx-ytd-api'] = global['ngx-ytd-api'] || {}, global['ngx-ytd-api'].common = {}),global.ng.common.http,global.ng.core,global.ngxSimpleHttp));
}(this, (function (exports,http,core,ngxSimpleHttp) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Injection token that can be used to specify the APi's standard options.
     * @type {?}
     */
    var NGX_YTD_API_DEFAULT_STANDARD_OPTIONS = new core.InjectionToken('ngx-ytd-api-default-standard-opts');

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
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxYtdApiCommonService = /** @class */ (function () {
        function NgxYtdApiCommonService(http$$1, defaultOptions) {
            this.http = http$$1;
            this.defaultOptions = defaultOptions;
        }
        /**
         * Merges an API request's options with the default standard options as
         * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
         * @param opts The API request's options
         * @template T A TypeScript interface to type `opts` against
         * @returns The merged API request's options
         */
        /**
         * Merges an API request's options with the default standard options as
         * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
         * @template T
         * @param {?} opts The API request's options
         * @return {?} The merged API request's options
         */
        NgxYtdApiCommonService.prototype.mergeOpts = /**
         * Merges an API request's options with the default standard options as
         * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
         * @template T
         * @param {?} opts The API request's options
         * @return {?} The merged API request's options
         */
            function (opts) {
                if (this.defaultOptions) {
                    return __assign({}, opts, this.defaultOptions);
                }
                else {
                    return opts;
                }
            };
        /**
         * Sends a HTTP request to the specified `apiEndpoint`
         * @param apiEndpoint The API endpoint to send a HTTP request to
         * @param opts Options to append to the endpoint as URL queries
         * @param body The body of the HTTP request
         * @param httpType The type of HTTP request to send
         * @template B A TypeScript interface to type the HTTP request's body to
         * @template P A TypeScript interface to type the HTTP request's options to
         * @template R A TypeScript interface to type the HTTP request's result to
         * @returns The result of the HTTP request
         */
        /**
         * Sends a HTTP request to the specified `apiEndpoint`
         * @template B, P, R
         * @param {?} apiEndpoint The API endpoint to send a HTTP request to
         * @param {?} opts Options to append to the endpoint as URL queries
         * @param {?=} body The body of the HTTP request
         * @param {?=} httpType The type of HTTP request to send
         * @return {?} The result of the HTTP request
         */
        NgxYtdApiCommonService.prototype.sendHttpRequest = /**
         * Sends a HTTP request to the specified `apiEndpoint`
         * @template B, P, R
         * @param {?} apiEndpoint The API endpoint to send a HTTP request to
         * @param {?} opts Options to append to the endpoint as URL queries
         * @param {?=} body The body of the HTTP request
         * @param {?=} httpType The type of HTTP request to send
         * @return {?} The result of the HTTP request
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
        NgxYtdApiCommonService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NgxYtdApiCommonService.ctorParameters = function () {
            return [
                { type: ngxSimpleHttp.SimpleHttpService },
                { type: undefined, decorators: [{ type: core.Inject, args: [NGX_YTD_API_DEFAULT_STANDARD_OPTIONS,] }, { type: core.Optional }] }
            ];
        };
        return NgxYtdApiCommonService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxYtdApiCommonModule = /** @class */ (function () {
        function NgxYtdApiCommonModule() {
        }
        NgxYtdApiCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            ngxSimpleHttp.SimpleHttpModule
                        ],
                        providers: [
                            NgxYtdApiCommonService
                        ]
                    },] }
        ];
        return NgxYtdApiCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NGX_YTD_API_DEFAULT_STANDARD_OPTIONS = NGX_YTD_API_DEFAULT_STANDARD_OPTIONS;
    exports.NgxYtdApiCommonModule = NgxYtdApiCommonModule;
    exports.NgxYtdApiCommonService = NgxYtdApiCommonService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-ytd-api-common.umd.js.map