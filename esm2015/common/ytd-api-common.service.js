/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, Optional } from '@angular/core';
import { SimpleHttpService } from 'ngx-simple-http';
import { NGX_YTD_API_DEFAULT_STANDARD_OPTIONS } from './ytd-api-common.injectors';
export class NgxYtdApiCommonService {
    /**
     * @param {?} http
     * @param {?} defaultOptions
     */
    constructor(http, defaultOptions) {
        this.http = http;
        this.defaultOptions = defaultOptions;
    }
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
    keyValueExistsAndNonNull(obj, key) {
        return key in obj && typeof obj[key] !== null;
    }
    /**
     * Merges an API request's options with the default standard options as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @deprecated Use {\@link NgxYtdApiCommonService#mergeParamsWithStandardParams}
     * @template T
     * @param {?} opts The API request's options
     * @return {?} The merged API request's options
     */
    mergeOpts(opts) {
        return this.mergeParamsWithStandardParams(opts);
    }
    /**
     * Merges an API request's parameters with the default standard parameters as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @template T
     * @param {?} opts The API request's options
     * @return {?} The merged API request's options
     */
    mergeParamsWithStandardParams(opts) {
        if (this.defaultOptions) {
            return Object.assign({}, opts, this.defaultOptions);
        }
        else {
            return opts;
        }
    }
    /**
     * Sends a HTTP request to the specified `apiEndpoint`
     * @template B, P, R
     * @param {?} apiEndpoint The API endpoint to send a HTTP request to
     * @param {?} opts Options to append to the endpoint as URL queries
     * @param {?=} body The body of the HTTP request
     * @param {?=} httpType The type of HTTP request to send
     * @return {?} The result of the HTTP request
     */
    sendHttpRequest(apiEndpoint, opts, body = null, httpType) {
        /** @type {?} */
        let headers;
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
                    .set('Authorization', `Bearer ${opts['accessToken']}`);
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
    }
}
NgxYtdApiCommonService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxYtdApiCommonService.ctorParameters = () => [
    { type: SimpleHttpService },
    { type: undefined, decorators: [{ type: Inject, args: [NGX_YTD_API_DEFAULT_STANDARD_OPTIONS,] }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL2NvbW1vbi8iLCJzb3VyY2VzIjpbInl0ZC1hcGktY29tbW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbEYsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFDakMsWUFDVSxJQUF1QixFQUNtQyxjQUF1QztRQURqRyxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUNtQyxtQkFBYyxHQUFkLGNBQWMsQ0FBeUI7SUFDdkcsQ0FBQzs7Ozs7Ozs7Ozs7SUFVRyx3QkFBd0IsQ0FBbUIsR0FBTSxFQUFFLEdBQVc7UUFDcEUsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQztJQUNoRCxDQUFDOzs7Ozs7Ozs7SUFTRCxTQUFTLENBQWdCLElBQU87UUFDOUIsT0FBTyxJQUFJLENBQUMsNkJBQTZCLENBQUksSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFRRCw2QkFBNkIsQ0FBZ0IsSUFBTztRQUNsRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIseUJBQVksSUFBSSxFQUFLLElBQUksQ0FBQyxjQUFjLEVBQUc7U0FDNUM7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7Ozs7Ozs7O0lBWUQsZUFBZSxDQUNiLFdBQW1CLEVBQ25CLElBQU8sRUFDUCxPQUFVLElBQUksRUFDZCxRQUEyQzs7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QUNILENBQUM7OztZQXBIRixVQUFVOzs7O1lBSkYsaUJBQWlCOzRDQVFyQixNQUFNLFNBQUMsb0NBQW9DLGNBQUcsUUFBUTs7Ozs7OztJQUR2RCxzQ0FBK0I7Ozs7O0lBQy9CLGdEQUF5RyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2ltcGxlSHR0cFNlcnZpY2UgfSBmcm9tICduZ3gtc2ltcGxlLWh0dHAnO1xuaW1wb3J0IHsgTkdYX1lURF9BUElfREVGQVVMVF9TVEFOREFSRF9PUFRJT05TIH0gZnJvbSAnLi95dGQtYXBpLWNvbW1vbi5pbmplY3RvcnMnO1xuaW1wb3J0IHsgTmd4WXRkQXBpU3RhbmRhcmRQYXJhbXMgfSBmcm9tICcuL3l0ZC1hcGktY29tbW9uLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlDb21tb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBTaW1wbGVIdHRwU2VydmljZSxcbiAgICBASW5qZWN0KE5HWF9ZVERfQVBJX0RFRkFVTFRfU1RBTkRBUkRfT1BUSU9OUykgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkZWZhdWx0T3B0aW9uczogTmd4WXRkQXBpU3RhbmRhcmRQYXJhbXNcbiAgKSB7IH1cbiAgLyoqXG4gICAqIENoZWNrcyBmb3IgdGhlIGZvbGxvd2luZzpcbiAgICogMS4gVGhlIGBrZXlgIGV4aXN0cyBpbiBgb2JqYFxuICAgKiAyLiBUaGUga2V5LXZhbHVlIG9mIGBrZXlgIGluIGBvYmpgIGlzIG5vdCBgbnVsbGBcbiAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrXG4gICAqIEBwYXJhbSBrZXkgVGhlIGtleSB0byBjaGVjayBmb3IgaW4gYG9iamBcbiAgICogQHRlbXBsYXRlIE8gVGhlIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgYG9iamAgYWdhaW5zdFxuICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgYWxsIGNvbmRpdGlvbnMgYXJlIG1ldCwgYGZhbHNlYCBvdGhlcndpc2VcbiAgICovXG4gIHByaXZhdGUga2V5VmFsdWVFeGlzdHNBbmROb25OdWxsPE8gZXh0ZW5kcyBPYmplY3Q+KG9iajogTywga2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5IGluIG9iaiAmJiB0eXBlb2Ygb2JqW2tleV0gIT09IG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIE1lcmdlcyBhbiBBUEkgcmVxdWVzdCdzIG9wdGlvbnMgd2l0aCB0aGUgZGVmYXVsdCBzdGFuZGFyZCBvcHRpb25zIGFzXG4gICAqIHNwZWNpZmllZCB2aWEgdGhlIGBOR1hfWVREX0FQSV9ERUZBVUxUX1NUQU5EQVJEX09QVElPTlNgIGluamVjdGlvbiB0b2tlblxuICAgKiBAcGFyYW0gb3B0cyBUaGUgQVBJIHJlcXVlc3QncyBvcHRpb25zXG4gICAqIEB0ZW1wbGF0ZSBUIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSBgb3B0c2AgYWdhaW5zdFxuICAgKiBAcmV0dXJucyBUaGUgbWVyZ2VkIEFQSSByZXF1ZXN0J3Mgb3B0aW9uc1xuICAgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaUNvbW1vblNlcnZpY2UjbWVyZ2VQYXJhbXNXaXRoU3RhbmRhcmRQYXJhbXN9XG4gICAqL1xuICBtZXJnZU9wdHM8VCBleHRlbmRzIGFueT4ob3B0czogVCk6IFQgJiBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtcyB7XG4gICAgcmV0dXJuIHRoaXMubWVyZ2VQYXJhbXNXaXRoU3RhbmRhcmRQYXJhbXM8VD4ob3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIE1lcmdlcyBhbiBBUEkgcmVxdWVzdCdzIHBhcmFtZXRlcnMgd2l0aCB0aGUgZGVmYXVsdCBzdGFuZGFyZCBwYXJhbWV0ZXJzIGFzXG4gICAqIHNwZWNpZmllZCB2aWEgdGhlIGBOR1hfWVREX0FQSV9ERUZBVUxUX1NUQU5EQVJEX09QVElPTlNgIGluamVjdGlvbiB0b2tlblxuICAgKiBAcGFyYW0gb3B0cyBUaGUgQVBJIHJlcXVlc3QncyBvcHRpb25zXG4gICAqIEB0ZW1wbGF0ZSBUIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSBgb3B0c2AgYWdhaW5zdFxuICAgKiBAcmV0dXJucyBUaGUgbWVyZ2VkIEFQSSByZXF1ZXN0J3Mgb3B0aW9uc1xuICAgKi9cbiAgbWVyZ2VQYXJhbXNXaXRoU3RhbmRhcmRQYXJhbXM8VCBleHRlbmRzIGFueT4ob3B0czogVCk6IFQgJiBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtcyB7XG4gICAgaWYgKHRoaXMuZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB7IC4uLm9wdHMsIC4uLnRoaXMuZGVmYXVsdE9wdGlvbnMgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdHM7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZW5kcyBhIEhUVFAgcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIGBhcGlFbmRwb2ludGBcbiAgICogQHBhcmFtIGFwaUVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnQgdG8gc2VuZCBhIEhUVFAgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIHRvIGFwcGVuZCB0byB0aGUgZW5kcG9pbnQgYXMgVVJMIHF1ZXJpZXNcbiAgICogQHBhcmFtIGJvZHkgVGhlIGJvZHkgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0gaHR0cFR5cGUgVGhlIHR5cGUgb2YgSFRUUCByZXF1ZXN0IHRvIHNlbmRcbiAgICogQHRlbXBsYXRlIEIgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyBib2R5IHRvXG4gICAqIEB0ZW1wbGF0ZSBQIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgcGFyYW1ldGVycyB0b1xuICAgKiBAdGVtcGxhdGUgUiBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIHJlc3VsdCB0b1xuICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIHNlbmRIdHRwUmVxdWVzdDxCIGV4dGVuZHMgYW55LCBQIGV4dGVuZHMgYW55LCBSIGV4dGVuZHMgYW55PihcbiAgICBhcGlFbmRwb2ludDogc3RyaW5nLFxuICAgIG9wdHM6IFAsXG4gICAgYm9keTogQiA9IG51bGwsXG4gICAgaHR0cFR5cGU6ICdkZWxldGUnIHwgJ2dldCcgfCAncG9zdCcgfCAncHV0J1xuICApOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gICAgaWYgKHRoaXMua2V5VmFsdWVFeGlzdHNBbmROb25OdWxsPFA+KG9wdHMsICdhY2Nlc3NUb2tlbicpKSB7XG4gICAgICBpZiAodGhpcy5rZXlWYWx1ZUV4aXN0c0FuZE5vbk51bGw8UD4ob3B0cywgJ2FjY2Vzc1Rva2VuVXNlc1BhcmFtJykgJiYgb3B0c1snYWNjZXNzVG9rZW5Vc2VzUGFyYW0nXSkge1xuICAgICAgICAvLyBVc2luZyBwYXJhbWV0ZXJcbiAgICAgICAgb3B0c1snYWNjZXNzX3Rva2VuJ10gPSBvcHRzWydhY2Nlc3NUb2tlbiddO1xuICAgICAgICBkZWxldGUgb3B0c1snYWNjZXNzVG9rZW4nXTtcbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBwYXNzIHRoaXMgdG8gdGhlIGFjdHVhbCBBUEkgZW5kcG9pbnRcbiAgICAgICAgZGVsZXRlIG9wdHNbJ2FjY2Vzc1Rva2VuVXNlc1BhcmFtJ107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVc2luZyBIVFRQIGhlYWRlcnNcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHtvcHRzWydhY2Nlc3NUb2tlbiddfWApO1xuICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKGh0dHBUeXBlKSB7XG4gICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cERlbGV0ZTxQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgaGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwRGVsZXRlPFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAnZ2V0JzpcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBHZXQ8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGhlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cEdldDxQLCBSPihhcGlFbmRwb2ludCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ3Bvc3QnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBib2R5LCBoZWFkZXJzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCwgaGVhZGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBib2R5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlICdwdXQnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHksIGhlYWRlcnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwsIGhlYWRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBib2R5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==