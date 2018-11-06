/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var NgxYtdApiCoreService = /** @class */ (function () {
    function NgxYtdApiCoreService(http) {
        this.http = http;
        /**
         * The API URL for the Comments API of the YouTube Data v3 API
         */
        this.ngxYtdCommentsApiUrl = 'https://www.googleapis.com/youtube/v3/comments';
        /**
         * The API URL for the Search API of the YouTube Data v3 API
         */
        this.ngxYtdSearchApiUrl = 'https://www.googleapis.com/youtube/v3/search';
        /**
         * The API URL for the Videos API of the YouTube Data v3 API
         */
        this.ngxYtdVideosApiUrl = 'https://www.googleapis.com/youtube/v3/videos';
    }
    /**
     * Generates the query parameters to be used for a HTTP DELETE request
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to be appended to the API endpoint
     * @return A `HttpClient` instance
     */
    /**
     * Generates the query parameters to be used for a HTTP DELETE request
     * @template P
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @return {?} A `HttpClient` instance
     */
    NgxYtdApiCoreService.prototype.createHttpDelete = /**
     * Generates the query parameters to be used for a HTTP DELETE request
     * @template P
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @return {?} A `HttpClient` instance
     */
    function (apiEndpoint, apiParams) {
        /** @type {?} */
        var params = new HttpParams();
        /** @type {?} */
        var headers;
        for (var prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined && apiParams[prop] !== null) {
                if (prop === 'accessToken') {
                    headers = new HttpHeaders()
                        .set('Authorization', "Bearer " + apiParams[prop]);
                }
                else {
                    params = params.append(prop, apiParams[prop]);
                }
            }
        }
        if (headers) {
            return this.http.delete(apiEndpoint, {
                params: params,
                headers: headers
            });
        }
        else {
            return this.http.delete(apiEndpoint, {
                params: params
            });
        }
    };
    /**
     * Generates the query parameters to be used for a HTTP GET request
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to be appended to the API endpoint
     * @return A `HttpClient` instance
     */
    /**
     * Generates the query parameters to be used for a HTTP GET request
     * @template R, P
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @return {?} A `HttpClient` instance
     */
    NgxYtdApiCoreService.prototype.createHttpGet = /**
     * Generates the query parameters to be used for a HTTP GET request
     * @template R, P
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @return {?} A `HttpClient` instance
     */
    function (apiEndpoint, apiParams) {
        /** @type {?} */
        var params = new HttpParams();
        /** @type {?} */
        var headers;
        for (var prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined && apiParams[prop] !== null) {
                if (prop === 'accessToken') {
                    headers = new HttpHeaders()
                        .set('Authorization', "Bearer " + apiParams[prop]);
                }
                else {
                    params = params.append(prop, apiParams[prop]);
                }
            }
        }
        if (headers) {
            return this.http.get(apiEndpoint, {
                params: params,
                headers: headers
            });
        }
        else {
            return this.http.get(apiEndpoint, {
                params: params
            });
        }
    };
    /**
     * Generates the query parameters to be used with the API endpoint
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to be appended to the API endpoint
     * @param apiBody The request body
     * @return A `HttpClient` instance
     */
    /**
     * Generates the query parameters to be used with the API endpoint
     * @template R, P
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @param {?} apiBody The request body
     * @return {?} A `HttpClient` instance
     */
    NgxYtdApiCoreService.prototype.createHttpPost = /**
     * Generates the query parameters to be used with the API endpoint
     * @template R, P
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @param {?} apiBody The request body
     * @return {?} A `HttpClient` instance
     */
    function (apiEndpoint, apiParams, apiBody) {
        /** @type {?} */
        var params = new HttpParams();
        /** @type {?} */
        var headers;
        for (var prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined && apiParams[prop] !== null) {
                if (prop === 'accessToken') {
                    headers = new HttpHeaders()
                        .set('Authorization', "Bearer " + apiParams[prop]);
                }
                else {
                    params = params.append(prop, apiParams[prop]);
                }
            }
        }
        if (headers) {
            return this.http.post(apiEndpoint, apiBody, {
                params: params,
                headers: headers
            });
        }
        else {
            return this.http.post(apiEndpoint, apiBody, {
                params: params
            });
        }
    };
    /**
     * Generates the query parameters to be used with the API endpoint
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to be appended to the API endpoint
     * @param apiBody The request body
     * @return A `HttpClient` instance
     */
    /**
     * Generates the query parameters to be used with the API endpoint
     * @template R, P
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @param {?} apiBody The request body
     * @return {?} A `HttpClient` instance
     */
    NgxYtdApiCoreService.prototype.createHttpPut = /**
     * Generates the query parameters to be used with the API endpoint
     * @template R, P
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @param {?} apiBody The request body
     * @return {?} A `HttpClient` instance
     */
    function (apiEndpoint, apiParams, apiBody) {
        /** @type {?} */
        var params = new HttpParams();
        /** @type {?} */
        var headers;
        for (var prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined && apiParams[prop] !== null) {
                if (prop === 'accessToken') {
                    headers = new HttpHeaders()
                        .set('Authorization', "Bearer " + apiParams[prop]);
                }
                else {
                    params = params.append(prop, apiParams[prop]);
                }
            }
        }
        if (headers) {
            return this.http.put(apiEndpoint, apiBody, {
                params: params,
                headers: headers
            });
        }
        else {
            return this.http.put(apiEndpoint, apiBody, {
                params: params
            });
        }
    };
    NgxYtdApiCoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxYtdApiCoreService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ NgxYtdApiCoreService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiCoreService_Factory() { return new NgxYtdApiCoreService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiCoreService, providedIn: "root" });
    return NgxYtdApiCoreService;
}());
export { NgxYtdApiCoreService };
if (false) {
    /**
     * The API URL for the Comments API of the YouTube Data v3 API
     * @type {?}
     */
    NgxYtdApiCoreService.prototype.ngxYtdCommentsApiUrl;
    /**
     * The API URL for the Search API of the YouTube Data v3 API
     * @type {?}
     */
    NgxYtdApiCoreService.prototype.ngxYtdSearchApiUrl;
    /**
     * The API URL for the Videos API of the YouTube Data v3 API
     * @type {?}
     */
    NgxYtdApiCoreService.prototype.ngxYtdVideosApiUrl;
    /** @type {?} */
    NgxYtdApiCoreService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteXRkLWFwaS8iLCJzb3VyY2VzIjpbImNvcmUveXRkLWFwaS1jb3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUUzRTtJQUlFLDhCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7O1FBSTNCLHlCQUFvQixHQUFHLGdEQUFnRCxDQUFDOzs7O1FBSXhFLHVCQUFrQixHQUFHLDhDQUE4QyxDQUFDOzs7O1FBSXBFLHVCQUFrQixHQUFHLDhDQUE4QyxDQUFDO0lBWnJDLENBQUM7SUFhekM7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsK0NBQWdCOzs7Ozs7O0lBQWhCLFVBQWdDLFdBQW1CLEVBQUUsU0FBWTs7WUFDM0QsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFOztZQUN6QixPQUFPO1FBQ1gsS0FBSyxJQUFNLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDNUIsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN6RixJQUFJLElBQUksS0FBSyxhQUFhLEVBQUU7b0JBQzFCLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTt5QkFDeEIsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFVLFNBQVMsQ0FBQyxJQUFJLENBQUcsQ0FBQyxDQUFDO2lCQUN0RDtxQkFBTTtvQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDckIsV0FBVyxFQUNYO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNyQixXQUFXLEVBQ1g7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07YUFDZixDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7SUFDRDs7Ozs7T0FLRzs7Ozs7Ozs7SUFDSCw0Q0FBYTs7Ozs7OztJQUFiLFVBQWdDLFdBQW1CLEVBQUUsU0FBWTs7WUFDM0QsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFOztZQUN6QixPQUFPO1FBQ1gsS0FBSyxJQUFNLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDNUIsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN6RixJQUFJLElBQUksS0FBSyxhQUFhLEVBQUU7b0JBQzFCLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTt5QkFDeEIsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFVLFNBQVMsQ0FBQyxJQUFJLENBQUcsQ0FBQyxDQUFDO2lCQUN0RDtxQkFBTTtvQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsV0FBVyxFQUNYO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixXQUFXLEVBQ1g7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07YUFDZixDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7SUFDRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILDZDQUFjOzs7Ozs7OztJQUFkLFVBQWlDLFdBQW1CLEVBQUUsU0FBWSxFQUFFLE9BQVk7O1lBQzFFLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTs7WUFDekIsT0FBTztRQUNYLEtBQUssSUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDekYsSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUMxQixPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7eUJBQ3hCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsWUFBVSxTQUFTLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQztpQkFDdEQ7cUJBQU07b0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMvQzthQUNGO1NBQ0Y7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLFdBQVcsRUFDWCxPQUFPLEVBQ1A7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLFdBQVcsRUFDWCxPQUFPLEVBQ1A7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07YUFDZixDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7SUFDRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILDRDQUFhOzs7Ozs7OztJQUFiLFVBQWdDLFdBQW1CLEVBQUUsU0FBWSxFQUFFLE9BQVk7O1lBQ3pFLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTs7WUFDekIsT0FBTztRQUNYLEtBQUssSUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDekYsSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUMxQixPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7eUJBQ3hCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsWUFBVSxTQUFTLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQztpQkFDdEQ7cUJBQU07b0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMvQzthQUNGO1NBQ0Y7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLFdBQVcsRUFDWCxPQUFPLEVBQ1A7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLFdBQVcsRUFDWCxPQUFPLEVBQ1A7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07YUFDZixDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7O2dCQXRLRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLFVBQVU7OzsrQkFEbkI7Q0EwS0MsQUF2S0QsSUF1S0M7U0FwS1ksb0JBQW9COzs7Ozs7SUFLL0Isb0RBQWlGOzs7OztJQUlqRixrREFBNkU7Ozs7O0lBSTdFLGtEQUE2RTs7SUFaakUsb0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcywgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlDb3JlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG4gIC8qKlxuICAgKiBUaGUgQVBJIFVSTCBmb3IgdGhlIENvbW1lbnRzIEFQSSBvZiB0aGUgWW91VHViZSBEYXRhIHYzIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgbmd4WXRkQ29tbWVudHNBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9jb21tZW50cyc7XG4gIC8qKlxuICAgKiBUaGUgQVBJIFVSTCBmb3IgdGhlIFNlYXJjaCBBUEkgb2YgdGhlIFlvdVR1YmUgRGF0YSB2MyBBUElcbiAgICovXG4gIHJlYWRvbmx5IG5neFl0ZFNlYXJjaEFwaVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaCc7XG4gIC8qKlxuICAgKiBUaGUgQVBJIFVSTCBmb3IgdGhlIFZpZGVvcyBBUEkgb2YgdGhlIFlvdVR1YmUgRGF0YSB2MyBBUElcbiAgICovXG4gIHJlYWRvbmx5IG5neFl0ZFZpZGVvc0FwaVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3ZpZGVvcyc7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgdXNlZCBmb3IgYSBIVFRQIERFTEVURSByZXF1ZXN0XG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlQYXJhbXMgUGFyYW1ldGVycyB0byBiZSBhcHBlbmRlZCB0byB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBEZWxldGU8UCBleHRlbmRzIGFueT4oYXBpRW5kcG9pbnQ6IHN0cmluZywgYXBpUGFyYW1zOiBQKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBsZXQgaGVhZGVycztcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2FjY2Vzc1Rva2VuJykge1xuICAgICAgICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHthcGlQYXJhbXNbcHJvcF19YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgdXNlZCBmb3IgYSBIVFRQIEdFVCByZXF1ZXN0XG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlQYXJhbXMgUGFyYW1ldGVycyB0byBiZSBhcHBlbmRlZCB0byB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBHZXQ8UiwgUCBleHRlbmRzIGFueT4oYXBpRW5kcG9pbnQ6IHN0cmluZywgYXBpUGFyYW1zOiBQKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIHR5cGVvZiBhcGlQYXJhbXNbcHJvcF0gIT09IHVuZGVmaW5lZCAmJiBhcGlQYXJhbXNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdhY2Nlc3NUb2tlbicpIHtcbiAgICAgICAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7YXBpUGFyYW1zW3Byb3BdfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQocHJvcCwgYXBpUGFyYW1zW3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHRvIGJlIHVzZWQgd2l0aCB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlQYXJhbXMgUGFyYW1ldGVycyB0byBiZSBhcHBlbmRlZCB0byB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlCb2R5IFRoZSByZXF1ZXN0IGJvZHlcbiAgICogQHJldHVybiBBIGBIdHRwQ2xpZW50YCBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSHR0cFBvc3Q8UiwgUCBleHRlbmRzIGFueT4oYXBpRW5kcG9pbnQ6IHN0cmluZywgYXBpUGFyYW1zOiBQLCBhcGlCb2R5OiBhbnkpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBsZXQgaGVhZGVycztcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2FjY2Vzc1Rva2VuJykge1xuICAgICAgICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHthcGlQYXJhbXNbcHJvcF19YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICBhcGlCb2R5LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICBhcGlCb2R5LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgcXVlcnkgcGFyYW1ldGVycyB0byBiZSB1c2VkIHdpdGggdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpQm9keSBUaGUgcmVxdWVzdCBib2R5XG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBQdXQ8UiwgUCBleHRlbmRzIGFueT4oYXBpRW5kcG9pbnQ6IHN0cmluZywgYXBpUGFyYW1zOiBQLCBhcGlCb2R5OiBhbnkpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBsZXQgaGVhZGVycztcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2FjY2Vzc1Rva2VuJykge1xuICAgICAgICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHthcGlQYXJhbXNbcHJvcF19YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIGFwaUJvZHksXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgYXBpQm9keSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=