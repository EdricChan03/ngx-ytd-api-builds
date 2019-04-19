/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, Optional } from '@angular/core';
import { SimpleHttpService } from 'ngx-simple-http';
import { NGX_YTD_API_DEFAULT_STANDARD_OPTIONS } from './ytd-api-common.injectors';
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
    /**
     * Checks for the following:
     * 1. The `key` exists in `obj`
     * 2. The key-value of `key` in `obj` is not `null`
     * @private
     * @template O
     * @param {?} obj The object to check
     * @param {?} key The key to check for in `obj`
     * @return {?} `true` if all conditions are met, `false` otherwise
     */
    NgxYtdApiCommonService.prototype.keyValueExistsAndNonNull = /**
     * Checks for the following:
     * 1. The `key` exists in `obj`
     * 2. The key-value of `key` in `obj` is not `null`
     * @private
     * @template O
     * @param {?} obj The object to check
     * @param {?} key The key to check for in `obj`
     * @return {?} `true` if all conditions are met, `false` otherwise
     */
    function (obj, key) {
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
    /**
     * Merges an API request's options with the default standard options as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @deprecated Use {\@link NgxYtdApiCommonService#mergeParamsWithStandardParams}
     * @template T
     * @param {?} opts The API request's options
     * @return {?} The merged API request's options
     */
    NgxYtdApiCommonService.prototype.mergeOpts = /**
     * Merges an API request's options with the default standard options as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @deprecated Use {\@link NgxYtdApiCommonService#mergeParamsWithStandardParams}
     * @template T
     * @param {?} opts The API request's options
     * @return {?} The merged API request's options
     */
    function (opts) {
        return this.mergeParamsWithStandardParams(opts);
    };
    /**
     * Merges an API request's parameters with the default standard parameters as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @param opts The API request's options
     * @template T A TypeScript interface to type `opts` against
     * @returns The merged API request's options
     */
    /**
     * Merges an API request's parameters with the default standard parameters as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @template T
     * @param {?} opts The API request's options
     * @return {?} The merged API request's options
     */
    NgxYtdApiCommonService.prototype.mergeParamsWithStandardParams = /**
     * Merges an API request's parameters with the default standard parameters as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @template T
     * @param {?} opts The API request's options
     * @return {?} The merged API request's options
     */
    function (opts) {
        if (this.defaultOptions) {
            return tslib_1.__assign({}, opts, this.defaultOptions);
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
export { NgxYtdApiCommonService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxYtdApiCommonService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NgxYtdApiCommonService.prototype.defaultOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL2NvbW1vbi8iLCJzb3VyY2VzIjpbInl0ZC1hcGktY29tbW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR2xGO0lBRUUsZ0NBQ1UsSUFBdUIsRUFDbUMsY0FBdUM7UUFEakcsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFDbUMsbUJBQWMsR0FBZCxjQUFjLENBQXlCO0lBQ3ZHLENBQUM7SUFDTDs7Ozs7Ozs7T0FRRzs7Ozs7Ozs7Ozs7SUFDSyx5REFBd0I7Ozs7Ozs7Ozs7SUFBaEMsVUFBbUQsR0FBTSxFQUFFLEdBQVc7UUFDcEUsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQztJQUNoRCxDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRzs7Ozs7Ozs7O0lBQ0gsMENBQVM7Ozs7Ozs7O0lBQVQsVUFBYSxJQUFPO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLDZCQUE2QixDQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRDs7Ozs7O09BTUc7Ozs7Ozs7O0lBQ0gsOERBQTZCOzs7Ozs7O0lBQTdCLFVBQWlDLElBQU87UUFDdEMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLDRCQUFZLElBQUksRUFBSyxJQUFJLENBQUMsY0FBYyxFQUFHO1NBQzVDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJ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QUM7cUJBQ2xFO3lCQUFNO3dCQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQVUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDbEU7aUJBQ0Y7U0FDSjtJQUNILENBQUM7O2dCQXBIRixVQUFVOzs7O2dCQUpGLGlCQUFpQjtnREFRckIsTUFBTSxTQUFDLG9DQUFvQyxjQUFHLFFBQVE7O0lBaUgzRCw2QkFBQztDQUFBLEFBckhELElBcUhDO1NBcEhZLHNCQUFzQjs7Ozs7O0lBRS9CLHNDQUErQjs7Ozs7SUFDL0IsZ0RBQXlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTaW1wbGVIdHRwU2VydmljZSB9IGZyb20gJ25neC1zaW1wbGUtaHR0cCc7XG5pbXBvcnQgeyBOR1hfWVREX0FQSV9ERUZBVUxUX1NUQU5EQVJEX09QVElPTlMgfSBmcm9tICcuL3l0ZC1hcGktY29tbW9uLmluamVjdG9ycyc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtcyB9IGZyb20gJy4veXRkLWFwaS1jb21tb24uaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaUNvbW1vblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IFNpbXBsZUh0dHBTZXJ2aWNlLFxuICAgIEBJbmplY3QoTkdYX1lURF9BUElfREVGQVVMVF9TVEFOREFSRF9PUFRJT05TKSBAT3B0aW9uYWwoKSBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtc1xuICApIHsgfVxuICAvKipcbiAgICogQ2hlY2tzIGZvciB0aGUgZm9sbG93aW5nOlxuICAgKiAxLiBUaGUgYGtleWAgZXhpc3RzIGluIGBvYmpgXG4gICAqIDIuIFRoZSBrZXktdmFsdWUgb2YgYGtleWAgaW4gYG9iamAgaXMgbm90IGBudWxsYFxuICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2tcbiAgICogQHBhcmFtIGtleSBUaGUga2V5IHRvIGNoZWNrIGZvciBpbiBgb2JqYFxuICAgKiBAdGVtcGxhdGUgTyBUaGUgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSBgb2JqYCBhZ2FpbnN0XG4gICAqIEByZXR1cm5zIGB0cnVlYCBpZiBhbGwgY29uZGl0aW9ucyBhcmUgbWV0LCBgZmFsc2VgIG90aGVyd2lzZVxuICAgKi9cbiAgcHJpdmF0ZSBrZXlWYWx1ZUV4aXN0c0FuZE5vbk51bGw8TyBleHRlbmRzIE9iamVjdD4ob2JqOiBPLCBrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBrZXkgaW4gb2JqICYmIHR5cGVvZiBvYmpba2V5XSAhPT0gbnVsbDtcbiAgfVxuICAvKipcbiAgICogTWVyZ2VzIGFuIEFQSSByZXF1ZXN0J3Mgb3B0aW9ucyB3aXRoIHRoZSBkZWZhdWx0IHN0YW5kYXJkIG9wdGlvbnMgYXNcbiAgICogc3BlY2lmaWVkIHZpYSB0aGUgYE5HWF9ZVERfQVBJX0RFRkFVTFRfU1RBTkRBUkRfT1BUSU9OU2AgaW5qZWN0aW9uIHRva2VuXG4gICAqIEBwYXJhbSBvcHRzIFRoZSBBUEkgcmVxdWVzdCdzIG9wdGlvbnNcbiAgICogQHRlbXBsYXRlIFQgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIGBvcHRzYCBhZ2FpbnN0XG4gICAqIEByZXR1cm5zIFRoZSBtZXJnZWQgQVBJIHJlcXVlc3QncyBvcHRpb25zXG4gICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpQ29tbW9uU2VydmljZSNtZXJnZVBhcmFtc1dpdGhTdGFuZGFyZFBhcmFtc31cbiAgICovXG4gIG1lcmdlT3B0czxUPihvcHRzOiBUKTogVCAmIE5neFl0ZEFwaVN0YW5kYXJkUGFyYW1zIHtcbiAgICByZXR1cm4gdGhpcy5tZXJnZVBhcmFtc1dpdGhTdGFuZGFyZFBhcmFtczxUPihvcHRzKTtcbiAgfVxuICAvKipcbiAgICogTWVyZ2VzIGFuIEFQSSByZXF1ZXN0J3MgcGFyYW1ldGVycyB3aXRoIHRoZSBkZWZhdWx0IHN0YW5kYXJkIHBhcmFtZXRlcnMgYXNcbiAgICogc3BlY2lmaWVkIHZpYSB0aGUgYE5HWF9ZVERfQVBJX0RFRkFVTFRfU1RBTkRBUkRfT1BUSU9OU2AgaW5qZWN0aW9uIHRva2VuXG4gICAqIEBwYXJhbSBvcHRzIFRoZSBBUEkgcmVxdWVzdCdzIG9wdGlvbnNcbiAgICogQHRlbXBsYXRlIFQgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIGBvcHRzYCBhZ2FpbnN0XG4gICAqIEByZXR1cm5zIFRoZSBtZXJnZWQgQVBJIHJlcXVlc3QncyBvcHRpb25zXG4gICAqL1xuICBtZXJnZVBhcmFtc1dpdGhTdGFuZGFyZFBhcmFtczxUPihvcHRzOiBUKTogVCAmIE5neFl0ZEFwaVN0YW5kYXJkUGFyYW1zIHtcbiAgICBpZiAodGhpcy5kZWZhdWx0T3B0aW9ucykge1xuICAgICAgcmV0dXJuIHsgLi4ub3B0cywgLi4udGhpcy5kZWZhdWx0T3B0aW9ucyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0cztcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNlbmRzIGEgSFRUUCByZXF1ZXN0IHRvIHRoZSBzcGVjaWZpZWQgYGFwaUVuZHBvaW50YFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludCB0byBzZW5kIGEgSFRUUCByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgdG8gYXBwZW5kIHRvIHRoZSBlbmRwb2ludCBhcyBVUkwgcXVlcmllc1xuICAgKiBAcGFyYW0gYm9keSBUaGUgYm9keSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSBodHRwVHlwZSBUaGUgdHlwZSBvZiBIVFRQIHJlcXVlc3QgdG8gc2VuZFxuICAgKiBAdGVtcGxhdGUgQiBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIGJvZHkgdG9cbiAgICogQHRlbXBsYXRlIFAgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyBwYXJhbWV0ZXJzIHRvXG4gICAqIEB0ZW1wbGF0ZSBSIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgcmVzdWx0IHRvXG4gICAqIEByZXR1cm5zIFRoZSByZXN1bHQgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgc2VuZEh0dHBSZXF1ZXN0PEIgZXh0ZW5kcyBhbnksIFAgZXh0ZW5kcyBhbnksIFIgZXh0ZW5kcyBhbnk+KFxuICAgIGFwaUVuZHBvaW50OiBzdHJpbmcsXG4gICAgb3B0czogUCxcbiAgICBib2R5OiBCID0gbnVsbCxcbiAgICBodHRwVHlwZTogJ2RlbGV0ZScgfCAnZ2V0JyB8ICdwb3N0JyB8ICdwdXQnXG4gICk6IE9ic2VydmFibGU8Uj4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBpZiAodGhpcy5rZXlWYWx1ZUV4aXN0c0FuZE5vbk51bGw8UD4ob3B0cywgJ2FjY2Vzc1Rva2VuJykpIHtcbiAgICAgIGlmICh0aGlzLmtleVZhbHVlRXhpc3RzQW5kTm9uTnVsbDxQPihvcHRzLCAnYWNjZXNzVG9rZW5Vc2VzUGFyYW0nKSAmJiBvcHRzWydhY2Nlc3NUb2tlblVzZXNQYXJhbSddKSB7XG4gICAgICAgIC8vIFVzaW5nIHBhcmFtZXRlclxuICAgICAgICBvcHRzWydhY2Nlc3NfdG9rZW4nXSA9IG9wdHNbJ2FjY2Vzc1Rva2VuJ107XG4gICAgICAgIGRlbGV0ZSBvcHRzWydhY2Nlc3NUb2tlbiddO1xuICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIHBhc3MgdGhpcyB0byB0aGUgYWN0dWFsIEFQSSBlbmRwb2ludFxuICAgICAgICBkZWxldGUgb3B0c1snYWNjZXNzVG9rZW5Vc2VzUGFyYW0nXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzaW5nIEhUVFAgaGVhZGVyc1xuICAgICAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke29wdHNbJ2FjY2Vzc1Rva2VuJ119YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAoaHR0cFR5cGUpIHtcbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwRGVsZXRlPFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBoZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBEZWxldGU8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICBjYXNlICdnZXQnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cEdldDxQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgaGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwR2V0PFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAncG9zdCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHksIGhlYWRlcnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsLCBoZWFkZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ3B1dCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSwgaGVhZGVycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCwgaGVhZGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19