/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { SimpleHttpService } from 'ngx-simple-http';
export class NgxYtdApiSearchService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        /**
         * The API URL for the Search API of the YouTube Data v3 API
         */
        this.ngxYtdSearchApiUrl = 'https://www.googleapis.com/youtube/v3/search';
    }
    // Handler for HTTP requests
    /**
     * @private
     * @template B, P, R
     * @param {?} apiEndpoint
     * @param {?} opts
     * @param {?=} body
     * @param {?=} httpType
     * @return {?}
     */
    _httpHandler(apiEndpoint, opts, body = null, httpType) {
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
    /**
     * Returns a collection of search results that match the query parameters specified
     *
     * See https://developers.google.com/youtube/v3/docs/search/list for more info
     * @param {?} opts API parameters for the API
     * @return {?} Results of the search has an `Observable`
     */
    list(opts) {
        return this._httpHandler(this.ngxYtdSearchApiUrl, opts, null, 'get');
    }
}
NgxYtdApiSearchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxYtdApiSearchService.ctorParameters = () => [
    { type: SimpleHttpService }
];
if (false) {
    /**
     * The API URL for the Search API of the YouTube Data v3 API
     * @type {?}
     */
    NgxYtdApiSearchService.prototype.ngxYtdSearchApiUrl;
    /**
     * @type {?}
     * @private
     */
    NgxYtdApiSearchService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL3NlYXJjaC8iLCJzb3VyY2VzIjpbInl0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSS9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3BELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFDakMsWUFDVSxJQUF1QjtRQUF2QixTQUFJLEdBQUosSUFBSSxDQUFtQjs7OztRQUt4Qix1QkFBa0IsR0FBRyw4Q0FBOEMsQ0FBQztJQUp6RSxDQUFDOzs7Ozs7Ozs7OztJQU1HLFlBQVksQ0FDbEIsV0FBbUIsRUFDbkIsSUFBTyxFQUNQLE9BQVUsSUFBSSxFQUNkLFFBQTJDOztZQUV2QyxPQUFvQjtRQUN4QixJQUFJLGFBQWEsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDckcsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFO2lCQUN4QixHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxRDtRQUNELFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssUUFBUTtnQkFDWCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQU8sV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDckU7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFPLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDNUQ7WUFDSCxLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBTyxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUNsRTtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFPLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDekQ7WUFDSCxLQUFLLE1BQU07Z0JBQ1QsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsSUFBSSxJQUFJLEVBQUU7d0JBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBVSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDNUU7eUJBQU07d0JBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBVSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDNUU7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxJQUFJLEVBQUU7d0JBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBVSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNuRTt5QkFBTTt3QkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFVLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ25FO2lCQUNGO1lBQ0gsS0FBSyxLQUFLO2dCQUNSLElBQUksT0FBTyxFQUFFO29CQUNYLElBQUksSUFBSSxFQUFFO3dCQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQVUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQzNFO3lCQUFNO3dCQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQVUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQzNFO2lCQUNGO3FCQUFNO29CQUNMLElBQUksSUFBSSxFQUFFO3dCQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQVUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDbEU7eUJBQU07d0JBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBVSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNsRTtpQkFDRjtTQUNKO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFRRCxJQUFJLENBQUMsSUFBNkI7UUFDaEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUN0QixJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOzs7WUE5RUYsVUFBVTs7OztZQUZGLGlCQUFpQjs7Ozs7OztJQVV4QixvREFBNkU7Ozs7O0lBTDNFLHNDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cywgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdCB9IGZyb20gJy4veXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTaW1wbGVIdHRwU2VydmljZSB9IGZyb20gJ25neC1zaW1wbGUtaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlTZWFyY2hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBTaW1wbGVIdHRwU2VydmljZVxuICApIHsgfVxuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBTZWFyY2ggQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRTZWFyY2hBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2gnO1xuICAvLyBIYW5kbGVyIGZvciBIVFRQIHJlcXVlc3RzXG4gIHByaXZhdGUgX2h0dHBIYW5kbGVyPEIgZXh0ZW5kcyBhbnksIFAgZXh0ZW5kcyBhbnksIFIgZXh0ZW5kcyBhbnk+KFxuICAgIGFwaUVuZHBvaW50OiBzdHJpbmcsXG4gICAgb3B0czogUCxcbiAgICBib2R5OiBCID0gbnVsbCxcbiAgICBodHRwVHlwZTogJ2RlbGV0ZScgfCAnZ2V0JyB8ICdwb3N0JyB8ICdwdXQnXG4gICk6IE9ic2VydmFibGU8Uj4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBpZiAoJ2FjY2Vzc1Rva2VuJyBpbiBvcHRzICYmIHR5cGVvZiBvcHRzWydhY2Nlc3NUb2tlbiddICE9PSB1bmRlZmluZWQgJiYgb3B0c1snYWNjZXNzVG9rZW4nXSAhPT0gbnVsbCkge1xuICAgICAgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7b3B0c1snYWNjZXNzVG9rZW4nXX1gKTtcbiAgICB9XG4gICAgc3dpdGNoIChodHRwVHlwZSkge1xuICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBEZWxldGU8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGhlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cERlbGV0ZTxQLCBSPihhcGlFbmRwb2ludCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ2dldCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwR2V0PFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBoZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBHZXQ8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICBjYXNlICdwb3N0JzpcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSwgaGVhZGVycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwsIGhlYWRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSAncHV0JzpcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBib2R5LCBoZWFkZXJzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsLCBoZWFkZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY29sbGVjdGlvbiBvZiBzZWFyY2ggcmVzdWx0cyB0aGF0IG1hdGNoIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHNwZWNpZmllZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggaGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwSGFuZGxlcjxhbnksIE5neFl0ZEFwaVNlYXJjaExpc3RPcHRzLCBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0PihcbiAgICAgIHRoaXMubmd4WXRkU2VhcmNoQXBpVXJsLFxuICAgICAgb3B0cyxcbiAgICAgIG51bGwsXG4gICAgICAnZ2V0J1xuICAgICk7XG4gIH1cbn1cbiJdfQ==