import { __assign } from 'tslib';
import { HttpHeaders } from '@angular/common/http';
import { InjectionToken, Injectable, Inject, Optional, NgModule } from '@angular/core';
import { SimpleHttpService, SimpleHttpModule } from 'ngx-simple-http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to specify the APi's standard options.
 * @type {?}
 */
var NGX_YTD_API_DEFAULT_STANDARD_OPTIONS = new InjectionToken('ngx-ytd-api-default-standard-opts');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxYtdApiCommonService = /** @class */ (function () {
    function NgxYtdApiCommonService(http, defaultOptions) {
        this.http = http;
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
        if (body === void 0) { body = null; }
        /** @type {?} */
        var headers;
        if ('accessToken' in opts && typeof opts['accessToken'] !== undefined && opts['accessToken'] !== null) {
            headers = new HttpHeaders()
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
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxYtdApiCommonService.ctorParameters = function () { return [
        { type: SimpleHttpService },
        { type: undefined, decorators: [{ type: Inject, args: [NGX_YTD_API_DEFAULT_STANDARD_OPTIONS,] }, { type: Optional }] }
    ]; };
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
        { type: NgModule, args: [{
                    imports: [
                        SimpleHttpModule
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

export { NGX_YTD_API_DEFAULT_STANDARD_OPTIONS, NgxYtdApiCommonModule, NgxYtdApiCommonService };

//# sourceMappingURL=ngx-ytd-api-common.js.map