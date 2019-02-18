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
     * Merges an API request's options with the default standard options as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @template T
     * @param {?} opts The API request's options
     * @return {?} The merged API request's options
     */
    mergeOpts(opts) {
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
        if ('accessToken' in opts && typeof opts['accessToken'] !== undefined && opts['accessToken'] !== null) {
            headers = new HttpHeaders()
                .set('Authorization', `Bearer ${opts['accessToken']}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL2NvbW1vbi8iLCJzb3VyY2VzIjpbInl0ZC1hcGktY29tbW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbEYsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFDakMsWUFDVSxJQUF1QixFQUNtQyxjQUFxQztRQUQvRixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUNtQyxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7SUFDckcsQ0FBQzs7Ozs7Ozs7SUFRTCxTQUFTLENBQWdCLElBQU87UUFDOUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLHlCQUFZLElBQUksRUFBSyxJQUFJLENBQUMsY0FBYyxFQUFHO1NBQzVDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7Ozs7Ozs7OztJQVlELGVBQWUsQ0FDYixXQUFtQixFQUNuQixJQUFPLEVBQ1AsT0FBVSxJQUFJLEVBQ2QsUUFBMkM7O1lBRXZDLE9BQW9CO1FBQ3hCLElBQUksYUFBYSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNyRyxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7aUJBQ3hCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxRQUFRO2dCQUNYLElBQUksT0FBTyxFQUFFO29CQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBTyxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUNyRTtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQU8sV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUM1RDtZQUNILEtBQUssS0FBSztnQkFDUixJQUFJLE9BQU8sRUFBRTtvQkFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFPLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ2xFO3FCQUFNO29CQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQU8sV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN6RDtZQUNILEtBQUssTUFBTTtnQkFDVCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxJQUFJLElBQUksRUFBRTt3QkFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFVLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUM1RTt5QkFBTTt3QkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFVLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUM1RTtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLElBQUksRUFBRTt3QkFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFVLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ25FO3lCQUFNO3dCQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQVUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDbkU7aUJBQ0Y7WUFDSCxLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsSUFBSSxJQUFJLEVBQUU7d0JBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBVSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDM0U7eUJBQU07d0JBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBVSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDM0U7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxJQUFJLEVBQUU7d0JBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBVSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNsRTt5QkFBTTt3QkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFVLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ2xFO2lCQUNGO1NBQ0o7SUFDSCxDQUFDOzs7WUFwRkYsVUFBVTs7OztZQUpGLGlCQUFpQjs0Q0FRckIsTUFBTSxTQUFDLG9DQUFvQyxjQUFHLFFBQVE7Ozs7Ozs7SUFEdkQsc0NBQStCOzs7OztJQUMvQixnREFBdUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNpbXBsZUh0dHBTZXJ2aWNlIH0gZnJvbSAnbmd4LXNpbXBsZS1odHRwJztcbmltcG9ydCB7IE5HWF9ZVERfQVBJX0RFRkFVTFRfU1RBTkRBUkRfT1BUSU9OUyB9IGZyb20gJy4veXRkLWFwaS1jb21tb24uaW5qZWN0b3JzJztcbmltcG9ydCB7IE5neFl0ZEFwaVN0YW5kYXJkT3B0cyB9IGZyb20gJy4veXRkLWFwaS1jb21tb24uaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaUNvbW1vblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IFNpbXBsZUh0dHBTZXJ2aWNlLFxuICAgIEBJbmplY3QoTkdYX1lURF9BUElfREVGQVVMVF9TVEFOREFSRF9PUFRJT05TKSBAT3B0aW9uYWwoKSBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBOZ3hZdGRBcGlTdGFuZGFyZE9wdHNcbiAgKSB7IH1cbiAgLyoqXG4gICAqIE1lcmdlcyBhbiBBUEkgcmVxdWVzdCdzIG9wdGlvbnMgd2l0aCB0aGUgZGVmYXVsdCBzdGFuZGFyZCBvcHRpb25zIGFzXG4gICAqIHNwZWNpZmllZCB2aWEgdGhlIGBOR1hfWVREX0FQSV9ERUZBVUxUX1NUQU5EQVJEX09QVElPTlNgIGluamVjdGlvbiB0b2tlblxuICAgKiBAcGFyYW0gb3B0cyBUaGUgQVBJIHJlcXVlc3QncyBvcHRpb25zXG4gICAqIEB0ZW1wbGF0ZSBUIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSBgb3B0c2AgYWdhaW5zdFxuICAgKiBAcmV0dXJucyBUaGUgbWVyZ2VkIEFQSSByZXF1ZXN0J3Mgb3B0aW9uc1xuICAgKi9cbiAgbWVyZ2VPcHRzPFQgZXh0ZW5kcyBhbnk+KG9wdHM6IFQpOiBUICYgTmd4WXRkQXBpU3RhbmRhcmRPcHRzIHtcbiAgICBpZiAodGhpcy5kZWZhdWx0T3B0aW9ucykge1xuICAgICAgcmV0dXJuIHsgLi4ub3B0cywgLi4udGhpcy5kZWZhdWx0T3B0aW9ucyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0cztcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNlbmRzIGEgSFRUUCByZXF1ZXN0IHRvIHRoZSBzcGVjaWZpZWQgYGFwaUVuZHBvaW50YFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludCB0byBzZW5kIGEgSFRUUCByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgdG8gYXBwZW5kIHRvIHRoZSBlbmRwb2ludCBhcyBVUkwgcXVlcmllc1xuICAgKiBAcGFyYW0gYm9keSBUaGUgYm9keSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSBodHRwVHlwZSBUaGUgdHlwZSBvZiBIVFRQIHJlcXVlc3QgdG8gc2VuZFxuICAgKiBAdGVtcGxhdGUgQiBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIGJvZHkgdG9cbiAgICogQHRlbXBsYXRlIFAgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyBvcHRpb25zIHRvXG4gICAqIEB0ZW1wbGF0ZSBSIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgcmVzdWx0IHRvXG4gICAqIEByZXR1cm5zIFRoZSByZXN1bHQgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgc2VuZEh0dHBSZXF1ZXN0PEIgZXh0ZW5kcyBhbnksIFAgZXh0ZW5kcyBhbnksIFIgZXh0ZW5kcyBhbnk+KFxuICAgIGFwaUVuZHBvaW50OiBzdHJpbmcsXG4gICAgb3B0czogUCxcbiAgICBib2R5OiBCID0gbnVsbCxcbiAgICBodHRwVHlwZTogJ2RlbGV0ZScgfCAnZ2V0JyB8ICdwb3N0JyB8ICdwdXQnXG4gICk6IE9ic2VydmFibGU8Uj4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBpZiAoJ2FjY2Vzc1Rva2VuJyBpbiBvcHRzICYmIHR5cGVvZiBvcHRzWydhY2Nlc3NUb2tlbiddICE9PSB1bmRlZmluZWQgJiYgb3B0c1snYWNjZXNzVG9rZW4nXSAhPT0gbnVsbCkge1xuICAgICAgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7b3B0c1snYWNjZXNzVG9rZW4nXX1gKTtcbiAgICB9XG4gICAgc3dpdGNoIChodHRwVHlwZSkge1xuICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBEZWxldGU8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGhlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cERlbGV0ZTxQLCBSPihhcGlFbmRwb2ludCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ2dldCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwR2V0PFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBoZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBHZXQ8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICBjYXNlICdwb3N0JzpcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSwgaGVhZGVycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwsIGhlYWRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSAncHV0JzpcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBib2R5LCBoZWFkZXJzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsLCBoZWFkZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=