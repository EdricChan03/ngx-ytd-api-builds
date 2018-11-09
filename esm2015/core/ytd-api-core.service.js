/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NgxYtdApiCoreService {
    /**
     * @param {?} http
     */
    constructor(http) {
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
     * @template P
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @return {?} A `HttpClient` instance
     */
    createHttpDelete(apiEndpoint, apiParams) {
        /** @type {?} */
        let params = new HttpParams();
        /** @type {?} */
        let headers;
        for (const prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined && apiParams[prop] !== null) {
                if (prop === 'accessToken') {
                    headers = new HttpHeaders()
                        .set('Authorization', `Bearer ${apiParams[prop]}`);
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
    }
    /**
     * Generates the query parameters to be used for a HTTP GET request
     * @template R, P
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @return {?} A `HttpClient` instance
     */
    createHttpGet(apiEndpoint, apiParams) {
        /** @type {?} */
        let params = new HttpParams();
        /** @type {?} */
        let headers;
        for (const prop in apiParams) {
            if (prop in apiParams && apiParams[prop]) {
                if (prop === 'accessToken') {
                    headers = new HttpHeaders()
                        .set('Authorization', `Bearer ${apiParams[prop]}`);
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
    }
    /**
     * Generates the query parameters to be used with the API endpoint
     * @template R, P
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @param {?} apiBody The request body
     * @return {?} A `HttpClient` instance
     */
    createHttpPost(apiEndpoint, apiParams, apiBody) {
        /** @type {?} */
        let params = new HttpParams();
        /** @type {?} */
        let headers;
        for (const prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined && apiParams[prop] !== null) {
                if (prop === 'accessToken') {
                    headers = new HttpHeaders()
                        .set('Authorization', `Bearer ${apiParams[prop]}`);
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
    }
    /**
     * Generates the query parameters to be used with the API endpoint
     * @template R, P
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @param {?} apiBody The request body
     * @return {?} A `HttpClient` instance
     */
    createHttpPut(apiEndpoint, apiParams, apiBody) {
        /** @type {?} */
        let params = new HttpParams();
        /** @type {?} */
        let headers;
        for (const prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined && apiParams[prop] !== null) {
                if (prop === 'accessToken') {
                    headers = new HttpHeaders()
                        .set('Authorization', `Bearer ${apiParams[prop]}`);
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
    }
}
NgxYtdApiCoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxYtdApiCoreService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ NgxYtdApiCoreService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiCoreService_Factory() { return new NgxYtdApiCoreService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiCoreService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteXRkLWFwaS8iLCJzb3VyY2VzIjpbImNvcmUveXRkLWFwaS1jb3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUszRSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7Ozs7UUFJM0IseUJBQW9CLEdBQUcsZ0RBQWdELENBQUM7Ozs7UUFJeEUsdUJBQWtCLEdBQUcsOENBQThDLENBQUM7Ozs7UUFJcEUsdUJBQWtCLEdBQUcsOENBQThDLENBQUM7SUFackMsQ0FBQzs7Ozs7Ozs7SUFtQnpDLGdCQUFnQixDQUFnQixXQUFtQixFQUFFLFNBQVk7O1lBQzNELE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTs7WUFDekIsT0FBTztRQUNYLEtBQUssTUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDekYsSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUMxQixPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7eUJBQ3hCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDtxQkFBTTtvQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDckIsV0FBVyxFQUNYO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNyQixXQUFXLEVBQ1g7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07YUFDZixDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7Ozs7O0lBT0QsYUFBYSxDQUFtQixXQUFtQixFQUFFLFNBQVk7O1lBQzNELE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTs7WUFDekIsT0FBTztRQUNYLEtBQUssTUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksSUFBSSxLQUFLLGFBQWEsRUFBRTtvQkFDMUIsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFO3lCQUN4QixHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVUsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDdEQ7cUJBQU07b0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMvQzthQUNGO1NBQ0Y7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLFdBQVcsRUFDWDtnQkFDRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsT0FBTzthQUNqQixDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsV0FBVyxFQUNYO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7Ozs7SUFRRCxjQUFjLENBQW1CLFdBQW1CLEVBQUUsU0FBWSxFQUFFLE9BQVk7O1lBQzFFLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTs7WUFDekIsT0FBTztRQUNYLEtBQUssTUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDekYsSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUMxQixPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7eUJBQ3hCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDtxQkFBTTtvQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsV0FBVyxFQUNYLE9BQU8sRUFDUDtnQkFDRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsT0FBTzthQUNqQixDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsV0FBVyxFQUNYLE9BQU8sRUFDUDtnQkFDRSxNQUFNLEVBQUUsTUFBTTthQUNmLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7Ozs7O0lBUUQsYUFBYSxDQUFtQixXQUFtQixFQUFFLFNBQVksRUFBRSxPQUFZOztZQUN6RSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7O1lBQ3pCLE9BQU87UUFDWCxLQUFLLE1BQU0sSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUM1QixJQUFJLElBQUksSUFBSSxTQUFTLElBQUksT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3pGLElBQUksSUFBSSxLQUFLLGFBQWEsRUFBRTtvQkFDMUIsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFO3lCQUN4QixHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVUsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDdEQ7cUJBQU07b0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMvQzthQUNGO1NBQ0Y7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLFdBQVcsRUFDWCxPQUFPLEVBQ1A7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLFdBQVcsRUFDWCxPQUFPLEVBQ1A7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07YUFDZixDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7OztZQXRLRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxVQUFVOzs7Ozs7OztJQVVqQixvREFBaUY7Ozs7O0lBSWpGLGtEQUE2RTs7Ozs7SUFJN0Usa0RBQTZFOztJQVpqRSxvQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaUNvcmVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIGZvciB0aGUgQ29tbWVudHMgQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRDb21tZW50c0FwaVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL2NvbW1lbnRzJztcbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIGZvciB0aGUgU2VhcmNoIEFQSSBvZiB0aGUgWW91VHViZSBEYXRhIHYzIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgbmd4WXRkU2VhcmNoQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoJztcbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIGZvciB0aGUgVmlkZW9zIEFQSSBvZiB0aGUgWW91VHViZSBEYXRhIHYzIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgbmd4WXRkVmlkZW9zQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zJztcbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgcXVlcnkgcGFyYW1ldGVycyB0byBiZSB1c2VkIGZvciBhIEhUVFAgREVMRVRFIHJlcXVlc3RcbiAgICogQHBhcmFtIGFwaUVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaVBhcmFtcyBQYXJhbWV0ZXJzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHJldHVybiBBIGBIdHRwQ2xpZW50YCBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSHR0cERlbGV0ZTxQIGV4dGVuZHMgYW55PihhcGlFbmRwb2ludDogc3RyaW5nLCBhcGlQYXJhbXM6IFApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBhcGlQYXJhbXMpIHtcbiAgICAgIGlmIChwcm9wIGluIGFwaVBhcmFtcyAmJiB0eXBlb2YgYXBpUGFyYW1zW3Byb3BdICE9PSB1bmRlZmluZWQgJiYgYXBpUGFyYW1zW3Byb3BdICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChwcm9wID09PSAnYWNjZXNzVG9rZW4nKSB7XG4gICAgICAgICAgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke2FwaVBhcmFtc1twcm9wXX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKHByb3AsIGFwaVBhcmFtc1twcm9wXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgcXVlcnkgcGFyYW1ldGVycyB0byBiZSB1c2VkIGZvciBhIEhUVFAgR0VUIHJlcXVlc3RcbiAgICogQHBhcmFtIGFwaUVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaVBhcmFtcyBQYXJhbWV0ZXJzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHJldHVybiBBIGBIdHRwQ2xpZW50YCBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSHR0cEdldDxSLCBQIGV4dGVuZHMgYW55PihhcGlFbmRwb2ludDogc3RyaW5nLCBhcGlQYXJhbXM6IFApOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBsZXQgaGVhZGVycztcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgYXBpUGFyYW1zW3Byb3BdKSB7XG4gICAgICAgIGlmIChwcm9wID09PSAnYWNjZXNzVG9rZW4nKSB7XG4gICAgICAgICAgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke2FwaVBhcmFtc1twcm9wXX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKHByb3AsIGFwaVBhcmFtc1twcm9wXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgcXVlcnkgcGFyYW1ldGVycyB0byBiZSB1c2VkIHdpdGggdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpQm9keSBUaGUgcmVxdWVzdCBib2R5XG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBQb3N0PFIsIFAgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCwgYXBpQm9keTogYW55KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIHR5cGVvZiBhcGlQYXJhbXNbcHJvcF0gIT09IHVuZGVmaW5lZCAmJiBhcGlQYXJhbXNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdhY2Nlc3NUb2tlbicpIHtcbiAgICAgICAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7YXBpUGFyYW1zW3Byb3BdfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQocHJvcCwgYXBpUGFyYW1zW3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgYXBpQm9keSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgYXBpQm9keSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgdXNlZCB3aXRoIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaVBhcmFtcyBQYXJhbWV0ZXJzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUJvZHkgVGhlIHJlcXVlc3QgYm9keVxuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVIdHRwUHV0PFIsIFAgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCwgYXBpQm9keTogYW55KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIHR5cGVvZiBhcGlQYXJhbXNbcHJvcF0gIT09IHVuZGVmaW5lZCAmJiBhcGlQYXJhbXNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdhY2Nlc3NUb2tlbicpIHtcbiAgICAgICAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7YXBpUGFyYW1zW3Byb3BdfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQocHJvcCwgYXBpUGFyYW1zW3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICBhcGlCb2R5LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIGFwaUJvZHksXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19