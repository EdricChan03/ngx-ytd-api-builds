(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('ngx-simple-http')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api/common', ['exports', '@angular/core', '@angular/common/http', 'ngx-simple-http'], factory) :
    (global = global || self, factory((global['ngx-ytd-api'] = global['ngx-ytd-api'] || {}, global['ngx-ytd-api'].common = {}), global.ng.core, global.ng.common.http, global.ngxSimpleHttp));
}(this, function (exports, core, http, ngxSimpleHttp) { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    /** Injection token that can be used to specify the standard query parameters for all API endpoints. */
    var NGX_YTD_API_DEFAULT_STANDARD_PARAMS = new core.InjectionToken('ngx-ytd-api-default-standard-params');
    /**
     * Injection token that can be used to specify the standard query parameters for all API endpoints.
     * @deprecated Use {@link NGX_YTD_API_DEFAULT_STANDARD_PARAMS}
     */
    var NGX_YTD_API_DEFAULT_STANDARD_OPTIONS = NGX_YTD_API_DEFAULT_STANDARD_PARAMS;

    var NgxYtdApiCommonService = /** @class */ (function () {
        function NgxYtdApiCommonService(http, defaultOptions) {
            this.http = http;
            this.defaultOptions = defaultOptions;
        }
        /**
         * Checks for the following:
         * 1. The `key` exists in `obj`
         * 2. The key-value of `key` in `obj` is not `null`
         * @param obj The object to check
         * @param key The key to check for in `obj`
         * @template O The TypeScript interface to type `obj` against
         * @returns `true` if all conditions are met, `false` otherwise
         */
        NgxYtdApiCommonService.prototype.keyValueExistsAndNonNull = function (obj, key) {
            return key in obj && typeof obj[key] !== null;
        };
        /**
         * Merges an API request's options with the default standard options as
         * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
         * @param opts The API request's options
         * @template T A TypeScript interface to type `opts` against
         * @returns The merged API request's options
         * @deprecated Use {@link NgxYtdApiCommonService#mergeParamsWithStandardParams}
         */
        NgxYtdApiCommonService.prototype.mergeOpts = function (opts) {
            return this.mergeParamsWithStandardParams(opts);
        };
        /**
         * Merges an API request's parameters with the default standard parameters as
         * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
         * @param opts The API request's options
         * @template T A TypeScript interface to type `opts` against
         * @returns The merged API request's options
         */
        NgxYtdApiCommonService.prototype.mergeParamsWithStandardParams = function (opts) {
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
         * @template P A TypeScript interface to type the HTTP request's parameters to
         * @template R A TypeScript interface to type the HTTP request's result to
         * @returns The result of the HTTP request
         */
        NgxYtdApiCommonService.prototype.sendHttpRequest = function (apiEndpoint, opts, body, httpType) {
            if (body === void 0) { body = null; }
            var headers;
            if (this.keyValueExistsAndNonNull(opts, 'accessToken')) {
                if (this.keyValueExistsAndNonNull(opts, 'accessTokenUsesParam') && opts['accessTokenUsesParam']) {
                    // Using parameter
                    opts['access_token'] = opts['accessToken'];
                    delete opts['accessToken'];
                    // We don't want to pass this to the actual API endpoint
                    delete opts['accessTokenUsesParam'];
                }
                else {
                    // Using HTTP headers
                    headers = new http.HttpHeaders()
                        .set('Authorization', "Bearer " + opts['accessToken']);
                }
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
        NgxYtdApiCommonService = __decorate([
            core.Injectable(),
            __param(1, core.Inject(NGX_YTD_API_DEFAULT_STANDARD_OPTIONS)), __param(1, core.Optional()),
            __metadata("design:paramtypes", [ngxSimpleHttp.SimpleHttpService, Object])
        ], NgxYtdApiCommonService);
        return NgxYtdApiCommonService;
    }());

    var NgxYtdApiCommonModule = /** @class */ (function () {
        function NgxYtdApiCommonModule() {
        }
        NgxYtdApiCommonModule = __decorate([
            core.NgModule({
                imports: [
                    ngxSimpleHttp.SimpleHttpModule
                ],
                providers: [
                    NgxYtdApiCommonService
                ]
            })
        ], NgxYtdApiCommonModule);
        return NgxYtdApiCommonModule;
    }());

    exports.NGX_YTD_API_DEFAULT_STANDARD_OPTIONS = NGX_YTD_API_DEFAULT_STANDARD_OPTIONS;
    exports.NGX_YTD_API_DEFAULT_STANDARD_PARAMS = NGX_YTD_API_DEFAULT_STANDARD_PARAMS;
    exports.NgxYtdApiCommonModule = NgxYtdApiCommonModule;
    exports.NgxYtdApiCommonService = NgxYtdApiCommonService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-ytd-api-common.umd.js.map
