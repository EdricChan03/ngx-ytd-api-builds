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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL2NvbW1vbi8iLCJzb3VyY2VzIjpbInl0ZC1hcGktY29tbW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR2xGO0lBRUUsZ0NBQ1UsSUFBdUIsRUFDbUMsY0FBcUM7UUFEL0YsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFDbUMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO0lBQ3JHLENBQUM7SUFDTDs7Ozs7O09BTUc7Ozs7Ozs7O0lBQ0gsMENBQVM7Ozs7Ozs7SUFBVCxVQUF5QixJQUFPO1FBQzlCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2Qiw0QkFBWSxJQUFJLEVBQUssSUFBSSxDQUFDLGNBQWMsRUFBRztTQUM1QzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFDRDs7Ozs7Ozs7OztPQVVHOzs7Ozs7Ozs7O0lBQ0gsZ0RBQWU7Ozs7Ozs7OztJQUFmLFVBQ0UsV0FBbUIsRUFDbkIsSUFBTyxFQUNQLElBQWMsRUFDZCxRQUEyQztRQUQzQyxxQkFBQSxFQUFBLFdBQWM7O1lBR1YsT0FBb0I7UUFDeEIsSUFBSSxhQUFhLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3JHLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTtpQkFDeEIsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFVLElBQUksQ0FBQyxhQUFhLENBQUcsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxRQUFRO2dCQUNYLElBQUksT0FBTyxFQUFFO29CQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBTyxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUNyRTtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQU8sV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUM1RDtZQUNILEtBQUssS0FBSztnQkFDUixJQUFJLE9BQU8sRUFBRTtvQkFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFPLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ2xFO3FCQUFNO29CQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQU8sV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN6RDtZQUNILEtBQUssTUFBTTtnQkFDVCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxJQUFJLElBQUksRUFBRTt3QkFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFVLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUM1RTt5QkFBTTt3QkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFVLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUM1RTtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLElBQUksRUFBRTt3QkFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFVLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ25FO3lCQUFNO3dCQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQVUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDbkU7aUJBQ0Y7WUFDSCxLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsSUFBSSxJQUFJLEVBQUU7d0JBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBVSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDM0U7eUJBQU07d0JBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBVSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDM0U7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxJQUFJLEVBQUU7d0JBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBVSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNsRTt5QkFBTTt3QkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFVLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ2xFO2lCQUNGO1NBQ0o7SUFDSCxDQUFDOztnQkFwRkYsVUFBVTs7OztnQkFKRixpQkFBaUI7Z0RBUXJCLE1BQU0sU0FBQyxvQ0FBb0MsY0FBRyxRQUFROztJQWlGM0QsNkJBQUM7Q0FBQSxBQXJGRCxJQXFGQztTQXBGWSxzQkFBc0I7Ozs7OztJQUUvQixzQ0FBK0I7Ozs7O0lBQy9CLGdEQUF1RyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2ltcGxlSHR0cFNlcnZpY2UgfSBmcm9tICduZ3gtc2ltcGxlLWh0dHAnO1xuaW1wb3J0IHsgTkdYX1lURF9BUElfREVGQVVMVF9TVEFOREFSRF9PUFRJT05TIH0gZnJvbSAnLi95dGQtYXBpLWNvbW1vbi5pbmplY3RvcnMnO1xuaW1wb3J0IHsgTmd4WXRkQXBpU3RhbmRhcmRPcHRzIH0gZnJvbSAnLi95dGQtYXBpLWNvbW1vbi5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29tbW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogU2ltcGxlSHR0cFNlcnZpY2UsXG4gICAgQEluamVjdChOR1hfWVREX0FQSV9ERUZBVUxUX1NUQU5EQVJEX09QVElPTlMpIEBPcHRpb25hbCgpIHByaXZhdGUgZGVmYXVsdE9wdGlvbnM6IE5neFl0ZEFwaVN0YW5kYXJkT3B0c1xuICApIHsgfVxuICAvKipcbiAgICogTWVyZ2VzIGFuIEFQSSByZXF1ZXN0J3Mgb3B0aW9ucyB3aXRoIHRoZSBkZWZhdWx0IHN0YW5kYXJkIG9wdGlvbnMgYXNcbiAgICogc3BlY2lmaWVkIHZpYSB0aGUgYE5HWF9ZVERfQVBJX0RFRkFVTFRfU1RBTkRBUkRfT1BUSU9OU2AgaW5qZWN0aW9uIHRva2VuXG4gICAqIEBwYXJhbSBvcHRzIFRoZSBBUEkgcmVxdWVzdCdzIG9wdGlvbnNcbiAgICogQHRlbXBsYXRlIFQgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIGBvcHRzYCBhZ2FpbnN0XG4gICAqIEByZXR1cm5zIFRoZSBtZXJnZWQgQVBJIHJlcXVlc3QncyBvcHRpb25zXG4gICAqL1xuICBtZXJnZU9wdHM8VCBleHRlbmRzIGFueT4ob3B0czogVCk6IFQgJiBOZ3hZdGRBcGlTdGFuZGFyZE9wdHMge1xuICAgIGlmICh0aGlzLmRlZmF1bHRPcHRpb25zKSB7XG4gICAgICByZXR1cm4geyAuLi5vcHRzLCAuLi50aGlzLmRlZmF1bHRPcHRpb25zIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRzO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2VuZHMgYSBIVFRQIHJlcXVlc3QgdG8gdGhlIHNwZWNpZmllZCBgYXBpRW5kcG9pbnRgXG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50IHRvIHNlbmQgYSBIVFRQIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyB0byBhcHBlbmQgdG8gdGhlIGVuZHBvaW50IGFzIFVSTCBxdWVyaWVzXG4gICAqIEBwYXJhbSBib2R5IFRoZSBib2R5IG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIGh0dHBUeXBlIFRoZSB0eXBlIG9mIEhUVFAgcmVxdWVzdCB0byBzZW5kXG4gICAqIEB0ZW1wbGF0ZSBCIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgYm9keSB0b1xuICAgKiBAdGVtcGxhdGUgUCBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIG9wdGlvbnMgdG9cbiAgICogQHRlbXBsYXRlIFIgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyByZXN1bHQgdG9cbiAgICogQHJldHVybnMgVGhlIHJlc3VsdCBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBzZW5kSHR0cFJlcXVlc3Q8QiBleHRlbmRzIGFueSwgUCBleHRlbmRzIGFueSwgUiBleHRlbmRzIGFueT4oXG4gICAgYXBpRW5kcG9pbnQ6IHN0cmluZyxcbiAgICBvcHRzOiBQLFxuICAgIGJvZHk6IEIgPSBudWxsLFxuICAgIGh0dHBUeXBlOiAnZGVsZXRlJyB8ICdnZXQnIHwgJ3Bvc3QnIHwgJ3B1dCdcbiAgKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIGlmICgnYWNjZXNzVG9rZW4nIGluIG9wdHMgJiYgdHlwZW9mIG9wdHNbJ2FjY2Vzc1Rva2VuJ10gIT09IHVuZGVmaW5lZCAmJiBvcHRzWydhY2Nlc3NUb2tlbiddICE9PSBudWxsKSB7XG4gICAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHtvcHRzWydhY2Nlc3NUb2tlbiddfWApO1xuICAgIH1cbiAgICBzd2l0Y2ggKGh0dHBUeXBlKSB7XG4gICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cERlbGV0ZTxQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgaGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwRGVsZXRlPFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAnZ2V0JzpcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBHZXQ8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGhlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cEdldDxQLCBSPihhcGlFbmRwb2ludCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ3Bvc3QnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBib2R5LCBoZWFkZXJzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCwgaGVhZGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBib2R5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlICdwdXQnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHksIGhlYWRlcnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwsIGhlYWRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBib2R5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==