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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteXRkLWFwaS8iLCJzb3VyY2VzIjpbImNvcmUveXRkLWFwaS1jb3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUszRSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7Ozs7UUFJM0IseUJBQW9CLEdBQUcsZ0RBQWdELENBQUM7Ozs7UUFJeEUsdUJBQWtCLEdBQUcsOENBQThDLENBQUM7Ozs7UUFJcEUsdUJBQWtCLEdBQUcsOENBQThDLENBQUM7SUFackMsQ0FBQzs7Ozs7Ozs7SUFtQnpDLGdCQUFnQixDQUFnQixXQUFtQixFQUFFLFNBQVk7O1lBQzNELE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTs7WUFDekIsT0FBTztRQUNYLEtBQUssTUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDekYsSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUMxQixPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7eUJBQ3hCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDtxQkFBTTtvQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRjtR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QUFFO1lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDekYsSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUMxQixPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7eUJBQ3hCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RDtxQkFBTTtvQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsV0FBVyxFQUNYLE9BQU8sRUFDUDtnQkFDRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsT0FBTzthQUNqQixDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsV0FBVyxFQUNYLE9BQU8sRUFDUDtnQkFDRSxNQUFNLEVBQUUsTUFBTTthQUNmLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBdEtGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLFVBQVU7Ozs7Ozs7O0lBVWpCLG9EQUFpRjs7Ozs7SUFJakYsa0RBQTZFOzs7OztJQUk3RSxrREFBNkU7O0lBWmpFLG9DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29yZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBDb21tZW50cyBBUEkgb2YgdGhlIFlvdVR1YmUgRGF0YSB2MyBBUElcbiAgICovXG4gIHJlYWRvbmx5IG5neFl0ZENvbW1lbnRzQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY29tbWVudHMnO1xuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBTZWFyY2ggQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRTZWFyY2hBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2gnO1xuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBWaWRlb3MgQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRWaWRlb3NBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My92aWRlb3MnO1xuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHRvIGJlIHVzZWQgZm9yIGEgSFRUUCBERUxFVEUgcmVxdWVzdFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVIdHRwRGVsZXRlPFAgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIHR5cGVvZiBhcGlQYXJhbXNbcHJvcF0gIT09IHVuZGVmaW5lZCAmJiBhcGlQYXJhbXNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdhY2Nlc3NUb2tlbicpIHtcbiAgICAgICAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7YXBpUGFyYW1zW3Byb3BdfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQocHJvcCwgYXBpUGFyYW1zW3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHRvIGJlIHVzZWQgZm9yIGEgSFRUUCBHRVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVIdHRwR2V0PFIsIFAgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCk6IE9ic2VydmFibGU8Uj4ge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBhcGlQYXJhbXMpIHtcbiAgICAgIGlmIChwcm9wIGluIGFwaVBhcmFtcyAmJiB0eXBlb2YgYXBpUGFyYW1zW3Byb3BdICE9PSB1bmRlZmluZWQgJiYgYXBpUGFyYW1zW3Byb3BdICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChwcm9wID09PSAnYWNjZXNzVG9rZW4nKSB7XG4gICAgICAgICAgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke2FwaVBhcmFtc1twcm9wXX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKHByb3AsIGFwaVBhcmFtc1twcm9wXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgcXVlcnkgcGFyYW1ldGVycyB0byBiZSB1c2VkIHdpdGggdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpQm9keSBUaGUgcmVxdWVzdCBib2R5XG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBQb3N0PFIsIFAgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCwgYXBpQm9keTogYW55KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIHR5cGVvZiBhcGlQYXJhbXNbcHJvcF0gIT09IHVuZGVmaW5lZCAmJiBhcGlQYXJhbXNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdhY2Nlc3NUb2tlbicpIHtcbiAgICAgICAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7YXBpUGFyYW1zW3Byb3BdfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQocHJvcCwgYXBpUGFyYW1zW3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgYXBpQm9keSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgYXBpQm9keSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgdXNlZCB3aXRoIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaVBhcmFtcyBQYXJhbWV0ZXJzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUJvZHkgVGhlIHJlcXVlc3QgYm9keVxuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVIdHRwUHV0PFIsIFAgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCwgYXBpQm9keTogYW55KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIHR5cGVvZiBhcGlQYXJhbXNbcHJvcF0gIT09IHVuZGVmaW5lZCAmJiBhcGlQYXJhbXNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdhY2Nlc3NUb2tlbicpIHtcbiAgICAgICAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7YXBpUGFyYW1zW3Byb3BdfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQocHJvcCwgYXBpUGFyYW1zW3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICBhcGlCb2R5LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIGFwaUJvZHksXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19