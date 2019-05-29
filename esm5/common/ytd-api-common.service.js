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
    NgxYtdApiCommonService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(1, Inject(NGX_YTD_API_DEFAULT_STANDARD_OPTIONS)), tslib_1.__param(1, Optional()),
        tslib_1.__metadata("design:paramtypes", [SimpleHttpService, Object])
    ], NgxYtdApiCommonService);
    return NgxYtdApiCommonService;
}());
export { NgxYtdApiCommonService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL2NvbW1vbi8iLCJzb3VyY2VzIjpbInl0ZC1hcGktY29tbW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbEY7SUFDRSxnQ0FDVSxJQUF1QixFQUNtQyxjQUF1QztRQURqRyxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUNtQyxtQkFBYyxHQUFkLGNBQWMsQ0FBeUI7SUFDdkcsQ0FBQztJQUNMOzs7Ozs7OztPQVFHO0lBQ0sseURBQXdCLEdBQWhDLFVBQW1ELEdBQU0sRUFBRSxHQUFXO1FBQ3BFLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDaEQsQ0FBQztJQUNEOzs7Ozs7O09BT0c7SUFDSCwwQ0FBUyxHQUFULFVBQWEsSUFBTztRQUNsQixPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBSSxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0gsOERBQTZCLEdBQTdCLFVBQWlDLElBQU87UUFDdEMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLDRCQUFZLElBQUksRUFBSyxJQUFJLENBQUMsY0FBYyxFQUFHO1NBQzVDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUNEOzs7Ozs7Ozs7O09BVUc7SUFDSCxnREFBZSxHQUFmLFVBQ0UsV0FBbUIsRUFDbkIs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QVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ2xFO2lCQUNGO1NBQ0o7SUFDSCxDQUFDO0lBbkhVLHNCQUFzQjtRQURsQyxVQUFVLEVBQUU7UUFJUixtQkFBQSxNQUFNLENBQUMsb0NBQW9DLENBQUMsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUQzQyxpQkFBaUI7T0FGdEIsc0JBQXNCLENBb0hsQztJQUFELDZCQUFDO0NBQUEsQUFwSEQsSUFvSEM7U0FwSFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTaW1wbGVIdHRwU2VydmljZSB9IGZyb20gJ25neC1zaW1wbGUtaHR0cCc7XG5pbXBvcnQgeyBOR1hfWVREX0FQSV9ERUZBVUxUX1NUQU5EQVJEX09QVElPTlMgfSBmcm9tICcuL3l0ZC1hcGktY29tbW9uLmluamVjdG9ycyc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtcyB9IGZyb20gJy4veXRkLWFwaS1jb21tb24uaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaUNvbW1vblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IFNpbXBsZUh0dHBTZXJ2aWNlLFxuICAgIEBJbmplY3QoTkdYX1lURF9BUElfREVGQVVMVF9TVEFOREFSRF9PUFRJT05TKSBAT3B0aW9uYWwoKSBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtc1xuICApIHsgfVxuICAvKipcbiAgICogQ2hlY2tzIGZvciB0aGUgZm9sbG93aW5nOlxuICAgKiAxLiBUaGUgYGtleWAgZXhpc3RzIGluIGBvYmpgXG4gICAqIDIuIFRoZSBrZXktdmFsdWUgb2YgYGtleWAgaW4gYG9iamAgaXMgbm90IGBudWxsYFxuICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2tcbiAgICogQHBhcmFtIGtleSBUaGUga2V5IHRvIGNoZWNrIGZvciBpbiBgb2JqYFxuICAgKiBAdGVtcGxhdGUgTyBUaGUgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSBgb2JqYCBhZ2FpbnN0XG4gICAqIEByZXR1cm5zIGB0cnVlYCBpZiBhbGwgY29uZGl0aW9ucyBhcmUgbWV0LCBgZmFsc2VgIG90aGVyd2lzZVxuICAgKi9cbiAgcHJpdmF0ZSBrZXlWYWx1ZUV4aXN0c0FuZE5vbk51bGw8TyBleHRlbmRzIE9iamVjdD4ob2JqOiBPLCBrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBrZXkgaW4gb2JqICYmIHR5cGVvZiBvYmpba2V5XSAhPT0gbnVsbDtcbiAgfVxuICAvKipcbiAgICogTWVyZ2VzIGFuIEFQSSByZXF1ZXN0J3Mgb3B0aW9ucyB3aXRoIHRoZSBkZWZhdWx0IHN0YW5kYXJkIG9wdGlvbnMgYXNcbiAgICogc3BlY2lmaWVkIHZpYSB0aGUgYE5HWF9ZVERfQVBJX0RFRkFVTFRfU1RBTkRBUkRfT1BUSU9OU2AgaW5qZWN0aW9uIHRva2VuXG4gICAqIEBwYXJhbSBvcHRzIFRoZSBBUEkgcmVxdWVzdCdzIG9wdGlvbnNcbiAgICogQHRlbXBsYXRlIFQgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIGBvcHRzYCBhZ2FpbnN0XG4gICAqIEByZXR1cm5zIFRoZSBtZXJnZWQgQVBJIHJlcXVlc3QncyBvcHRpb25zXG4gICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpQ29tbW9uU2VydmljZSNtZXJnZVBhcmFtc1dpdGhTdGFuZGFyZFBhcmFtc31cbiAgICovXG4gIG1lcmdlT3B0czxUPihvcHRzOiBUKTogVCAmIE5neFl0ZEFwaVN0YW5kYXJkUGFyYW1zIHtcbiAgICByZXR1cm4gdGhpcy5tZXJnZVBhcmFtc1dpdGhTdGFuZGFyZFBhcmFtczxUPihvcHRzKTtcbiAgfVxuICAvKipcbiAgICogTWVyZ2VzIGFuIEFQSSByZXF1ZXN0J3MgcGFyYW1ldGVycyB3aXRoIHRoZSBkZWZhdWx0IHN0YW5kYXJkIHBhcmFtZXRlcnMgYXNcbiAgICogc3BlY2lmaWVkIHZpYSB0aGUgYE5HWF9ZVERfQVBJX0RFRkFVTFRfU1RBTkRBUkRfT1BUSU9OU2AgaW5qZWN0aW9uIHRva2VuXG4gICAqIEBwYXJhbSBvcHRzIFRoZSBBUEkgcmVxdWVzdCdzIG9wdGlvbnNcbiAgICogQHRlbXBsYXRlIFQgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIGBvcHRzYCBhZ2FpbnN0XG4gICAqIEByZXR1cm5zIFRoZSBtZXJnZWQgQVBJIHJlcXVlc3QncyBvcHRpb25zXG4gICAqL1xuICBtZXJnZVBhcmFtc1dpdGhTdGFuZGFyZFBhcmFtczxUPihvcHRzOiBUKTogVCAmIE5neFl0ZEFwaVN0YW5kYXJkUGFyYW1zIHtcbiAgICBpZiAodGhpcy5kZWZhdWx0T3B0aW9ucykge1xuICAgICAgcmV0dXJuIHsgLi4ub3B0cywgLi4udGhpcy5kZWZhdWx0T3B0aW9ucyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0cztcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNlbmRzIGEgSFRUUCByZXF1ZXN0IHRvIHRoZSBzcGVjaWZpZWQgYGFwaUVuZHBvaW50YFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludCB0byBzZW5kIGEgSFRUUCByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgdG8gYXBwZW5kIHRvIHRoZSBlbmRwb2ludCBhcyBVUkwgcXVlcmllc1xuICAgKiBAcGFyYW0gYm9keSBUaGUgYm9keSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSBodHRwVHlwZSBUaGUgdHlwZSBvZiBIVFRQIHJlcXVlc3QgdG8gc2VuZFxuICAgKiBAdGVtcGxhdGUgQiBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIGJvZHkgdG9cbiAgICogQHRlbXBsYXRlIFAgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyBwYXJhbWV0ZXJzIHRvXG4gICAqIEB0ZW1wbGF0ZSBSIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgcmVzdWx0IHRvXG4gICAqIEByZXR1cm5zIFRoZSByZXN1bHQgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgc2VuZEh0dHBSZXF1ZXN0PEIgZXh0ZW5kcyBhbnksIFAgZXh0ZW5kcyBhbnksIFIgZXh0ZW5kcyBhbnk+KFxuICAgIGFwaUVuZHBvaW50OiBzdHJpbmcsXG4gICAgb3B0czogUCxcbiAgICBib2R5OiBCID0gbnVsbCxcbiAgICBodHRwVHlwZTogJ2RlbGV0ZScgfCAnZ2V0JyB8ICdwb3N0JyB8ICdwdXQnXG4gICk6IE9ic2VydmFibGU8Uj4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBpZiAodGhpcy5rZXlWYWx1ZUV4aXN0c0FuZE5vbk51bGw8UD4ob3B0cywgJ2FjY2Vzc1Rva2VuJykpIHtcbiAgICAgIGlmICh0aGlzLmtleVZhbHVlRXhpc3RzQW5kTm9uTnVsbDxQPihvcHRzLCAnYWNjZXNzVG9rZW5Vc2VzUGFyYW0nKSAmJiBvcHRzWydhY2Nlc3NUb2tlblVzZXNQYXJhbSddKSB7XG4gICAgICAgIC8vIFVzaW5nIHBhcmFtZXRlclxuICAgICAgICBvcHRzWydhY2Nlc3NfdG9rZW4nXSA9IG9wdHNbJ2FjY2Vzc1Rva2VuJ107XG4gICAgICAgIGRlbGV0ZSBvcHRzWydhY2Nlc3NUb2tlbiddO1xuICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIHBhc3MgdGhpcyB0byB0aGUgYWN0dWFsIEFQSSBlbmRwb2ludFxuICAgICAgICBkZWxldGUgb3B0c1snYWNjZXNzVG9rZW5Vc2VzUGFyYW0nXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzaW5nIEhUVFAgaGVhZGVyc1xuICAgICAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke29wdHNbJ2FjY2Vzc1Rva2VuJ119YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAoaHR0cFR5cGUpIHtcbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwRGVsZXRlPFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBoZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBEZWxldGU8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICBjYXNlICdnZXQnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cEdldDxQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgaGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwR2V0PFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAncG9zdCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHksIGhlYWRlcnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsLCBoZWFkZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ3B1dCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSwgaGVhZGVycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCwgaGVhZGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19