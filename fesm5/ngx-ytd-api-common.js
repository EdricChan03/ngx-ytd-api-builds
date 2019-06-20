import { InjectionToken, Injectable, Inject, Optional, NgModule } from '@angular/core';
import { __assign, __decorate, __param, __metadata } from 'tslib';
import { HttpHeaders } from '@angular/common/http';
import { SimpleHttpService, SimpleHttpModule } from 'ngx-simple-http';

/** Injection token that can be used to specify the standard query parameters for all API endpoints. */
var NGX_YTD_API_DEFAULT_STANDARD_PARAMS = new InjectionToken('ngx-ytd-api-default-standard-params');
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
                headers = new HttpHeaders()
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
        Injectable(),
        __param(1, Inject(NGX_YTD_API_DEFAULT_STANDARD_OPTIONS)), __param(1, Optional()),
        __metadata("design:paramtypes", [SimpleHttpService, Object])
    ], NgxYtdApiCommonService);
    return NgxYtdApiCommonService;
}());

var NgxYtdApiCommonModule = /** @class */ (function () {
    function NgxYtdApiCommonModule() {
    }
    NgxYtdApiCommonModule = __decorate([
        NgModule({
            imports: [
                SimpleHttpModule
            ],
            providers: [
                NgxYtdApiCommonService
            ]
        })
    ], NgxYtdApiCommonModule);
    return NgxYtdApiCommonModule;
}());

export { NGX_YTD_API_DEFAULT_STANDARD_OPTIONS, NGX_YTD_API_DEFAULT_STANDARD_PARAMS, NgxYtdApiCommonModule, NgxYtdApiCommonService };
//# sourceMappingURL=ngx-ytd-api-common.js.map
