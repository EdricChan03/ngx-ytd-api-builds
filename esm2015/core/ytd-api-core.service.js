/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * Generates the query parameters to be used with the API endpoint
     * @template R, P
     * @param {?} apiEndpoint
     * @param {?} apiParams
     * @return {?} A `HttpClient` instance
     */
    _generateApiRequest(apiEndpoint, apiParams) {
        /** @type {?} */
        let params = new HttpParams();
        /** @type {?} */
        let headers;
        for (const prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined) {
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
                params: params,
                headers: headers
            });
        }
    }
}
NgxYtdApiCoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteXRkLWFwaS8iLCJzb3VyY2VzIjpbImNvcmUveXRkLWFwaS1jb3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUszRSxNQUFNOzs7O0lBQ0osWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNwQzs7V0FFRztRQUNNLHlCQUFvQixHQUFHLGdEQUFnRCxDQUFDO1FBQ2pGOztXQUVHO1FBQ00sdUJBQWtCLEdBQUcsOENBQThDLENBQUM7UUFDN0U7O1dBRUc7UUFDTSx1QkFBa0IsR0FBRyw4Q0FBOEMsQ0FBQztJQVpyQyxDQUFDOzs7Ozs7OztJQWlCekMsbUJBQW1CLENBQW1CLFdBQW1CLEVBQUUsU0FBWTs7WUFDakUsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFOztZQUN6QixPQUFPO1FBQ1gsS0FBSyxNQUFNLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDNUIsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDN0QsSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUMxQixPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7eUJBQ3hCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDtxQkFBTTtvQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsV0FBVyxFQUNYO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixXQUFXLEVBQ1g7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUFuREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFKUSxVQUFVOzs7Ozs7OztJQVVqQixvREFBaUY7Ozs7O0lBSWpGLGtEQUE2RTs7Ozs7SUFJN0Usa0RBQTZFOztJQVpqRSxvQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaUNvcmVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIGZvciB0aGUgQ29tbWVudHMgQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRDb21tZW50c0FwaVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL2NvbW1lbnRzJztcbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIGZvciB0aGUgU2VhcmNoIEFQSSBvZiB0aGUgWW91VHViZSBEYXRhIHYzIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgbmd4WXRkU2VhcmNoQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoJztcbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIGZvciB0aGUgVmlkZW9zIEFQSSBvZiB0aGUgWW91VHViZSBEYXRhIHYzIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgbmd4WXRkVmlkZW9zQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zJztcbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgcXVlcnkgcGFyYW1ldGVycyB0byBiZSB1c2VkIHdpdGggdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBfZ2VuZXJhdGVBcGlSZXF1ZXN0PFIsIFAgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCk6IE9ic2VydmFibGU8Uj4ge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBhcGlQYXJhbXMpIHtcbiAgICAgIGlmIChwcm9wIGluIGFwaVBhcmFtcyAmJiB0eXBlb2YgYXBpUGFyYW1zW3Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdhY2Nlc3NUb2tlbicpIHtcbiAgICAgICAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7YXBpUGFyYW1zW3Byb3BdfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQocHJvcCwgYXBpUGFyYW1zW3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=