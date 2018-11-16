/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
        /**
         * The API URL for the Videos API for uploading a video of the YouTube Data v3 API
         */
        this.ngxYtdVideoUploadsApiUrl = 'https://www.googleapis.com/upload/youtube/v3/videos';
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
            if (prop in apiParams && apiParams[prop]) {
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
     * @template P, B
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @param {?=} apiBody The request body
     * @return {?} A `HttpClient` instance
     */
    NgxYtdApiCoreService.prototype.createHttpPost = /**
     * Generates the query parameters to be used with the API endpoint
     * @template P, B
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @param {?=} apiBody The request body
     * @return {?} A `HttpClient` instance
     */
    function (apiEndpoint, apiParams, apiBody) {
        if (apiBody === void 0) { apiBody = null; }
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
            if (apiBody) {
                return this.http.post(apiEndpoint, apiBody, {
                    params: params,
                    headers: headers
                });
            }
            else {
                return this.http.post(apiEndpoint, apiBody, {
                    params: params,
                    headers: headers
                });
            }
        }
        else {
            if (apiBody) {
                return this.http.post(apiEndpoint, apiBody, {
                    params: params
                });
            }
            else {
                return this.http.post(apiEndpoint, {
                    params: params
                });
            }
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
     * @template R, P, B
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to be appended to the API endpoint
     * @param {?} apiBody The request body
     * @return {?} A `HttpClient` instance
     */
    NgxYtdApiCoreService.prototype.createHttpPut = /**
     * Generates the query parameters to be used with the API endpoint
     * @template R, P, B
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
    /**
     * The API URL for the Videos API for uploading a video of the YouTube Data v3 API
     * @type {?}
     */
    NgxYtdApiCoreService.prototype.ngxYtdVideoUploadsApiUrl;
    /**
     * @type {?}
     * @private
     */
    NgxYtdApiCoreService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteXRkLWFwaS8iLCJzb3VyY2VzIjpbImNvcmUveXRkLWFwaS1jb3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUUzQztJQUlFLDhCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7O1FBSTNCLHlCQUFvQixHQUFHLGdEQUFnRCxDQUFDOzs7O1FBSXhFLHVCQUFrQixHQUFHLDhDQUE4QyxDQUFDOzs7O1FBSXBFLHVCQUFrQixHQUFHLDhDQUE4QyxDQUFDOzs7O1FBSXBFLDZCQUF3QixHQUFHLHFEQUFxRCxDQUFDO0lBaEJsRCxDQUFDO0lBaUJ6Qzs7Ozs7T0FLRzs7Ozs7Ozs7SUFDSCwrQ0FBZ0I7Ozs7Ozs7SUFBaEIsVUFBZ0MsV0FBbUIsRUFBRSxTQUFZOztZQUMzRCxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7O1lBQ3pCLE9BQU87UUFDWCxLQUFLLElBQU0sSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUM1QixJQUFJLElBQUksSUFBSSxTQUFTLElBQUksT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3pGLElBQUksSUFBSSxLQUFLLGFBQWEsRUFBRTtvQkFDMUIsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFO3lCQUN4QixHQUFHLENBQUMsZUFBZSxFQUFFLFlBQVUsU0FBUyxDQUFDLElBQUksQ0FBRyxDQUFDLENBQUM7aUJBQ3REO3FCQUFNO29CQUNMLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDL0M7YUFDRjtTQUNGO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNyQixXQUFXLEVBQ1g7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ3JCLFdBQVcsRUFDWDtnQkFDRSxNQUFNLEVBQUUsTUFBTTthQUNmLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUNEOzs7OztPQUtHOzs7Ozs7OztJQUNILDRDQUFhOzs7Ozs7O0lBQWIsVUFBZ0MsV0FBbUIsRUFBRSxTQUFZOztZQUMzRCxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7O1lBQ3pCLE9BQU87UUFDWCxLQUFLLElBQU0sSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUM1QixJQUFJLElBQUksSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLElBQUksS0FBSyxhQUFhLEVBQUU7b0JBQzFCLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTt5QkFDeEIsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFVLFNBQVMsQ0FBQyxJQUFJLENBQUcsQ0FBQyxDQUFDO2lCQUN0RDtxQkFBTTtvQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsV0FBVyxFQUNYO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixXQUFXLEVBQ1g7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07YUFDZixDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7SUFDRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILDZDQUFjOzs7Ozs7OztJQUFkLFVBRXdCLFdBQW1CLEVBQUUsU0FBWSxFQUFFLE9BQWlCO1FBQWpCLHdCQUFBLEVBQUEsY0FBaUI7O1lBQ3RFLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTs7WUFDekIsT0FBTztRQUNYLEtBQUssSUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDekYsSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUMxQixPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7eUJBQ3hCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsWUFBVSxTQUFTLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQztpQkFDdEQ7cUJBQU07b0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMvQzthQUNGO1NBQ0Y7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLFdBQVcsRUFDWCxPQUFPLEVBQ1A7b0JBQ0UsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLE9BQU87aUJBQ2pCLENBQ0YsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLFdBQVcsRUFDWCxPQUFPLEVBQ1A7b0JBQ0UsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLE9BQU87aUJBQ2pCLENBQ0YsQ0FBQzthQUNIO1NBQ0Y7YUFBTTtZQUNMLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLFdBQVcsRUFDWCxPQUFPLEVBQ1A7b0JBQ0UsTUFBTSxFQUFFLE1BQU07aUJBQ2YsQ0FDRixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsV0FBVyxFQUNYO29CQUNFLE1BQU0sRUFBRSxNQUFNO2lCQUNmLENBQ0YsQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDO0lBQ0Q7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCw0Q0FBYTs7Ozs7Ozs7SUFBYixVQUErQyxXQUFtQixFQUFFLFNBQVksRUFBRSxPQUFVOztZQUN0RixNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7O1lBQ3pCLE9BQU87UUFDWCxLQUFLLElBQU0sSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUM1QixJQUFJLElBQUksSUFBSSxTQUFTLElBQUksT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3pGLElBQUksSUFBSSxLQUFLLGFBQWEsRUFBRTtvQkFDMUIsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFO3lCQUN4QixHQUFHLENBQUMsZUFBZSxFQUFFLFlBQVUsU0FBUyxDQUFDLElBQUksQ0FBRyxDQUFDLENBQUM7aUJBQ3REO3FCQUFNO29CQUNMLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDL0M7YUFDRjtTQUNGO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixXQUFXLEVBQ1gsT0FBTyxFQUNQO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixXQUFXLEVBQ1gsT0FBTyxFQUNQO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOztnQkFoTUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxVQUFVOzs7K0JBQW5CO0NBb01DLEFBak1ELElBaU1DO1NBOUxZLG9CQUFvQjs7Ozs7O0lBSy9CLG9EQUFpRjs7Ozs7SUFJakYsa0RBQTZFOzs7OztJQUk3RSxrREFBNkU7Ozs7O0lBSTdFLHdEQUEwRjs7Ozs7SUFoQjlFLG9DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29yZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBDb21tZW50cyBBUEkgb2YgdGhlIFlvdVR1YmUgRGF0YSB2MyBBUElcbiAgICovXG4gIHJlYWRvbmx5IG5neFl0ZENvbW1lbnRzQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY29tbWVudHMnO1xuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBTZWFyY2ggQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRTZWFyY2hBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2gnO1xuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBWaWRlb3MgQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRWaWRlb3NBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My92aWRlb3MnO1xuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBWaWRlb3MgQVBJIGZvciB1cGxvYWRpbmcgYSB2aWRlbyBvZiB0aGUgWW91VHViZSBEYXRhIHYzIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgbmd4WXRkVmlkZW9VcGxvYWRzQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3VwbG9hZC95b3V0dWJlL3YzL3ZpZGVvcyc7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgdXNlZCBmb3IgYSBIVFRQIERFTEVURSByZXF1ZXN0XG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlQYXJhbXMgUGFyYW1ldGVycyB0byBiZSBhcHBlbmRlZCB0byB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBEZWxldGU8UCBleHRlbmRzIGFueT4oYXBpRW5kcG9pbnQ6IHN0cmluZywgYXBpUGFyYW1zOiBQKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBsZXQgaGVhZGVycztcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2FjY2Vzc1Rva2VuJykge1xuICAgICAgICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHthcGlQYXJhbXNbcHJvcF19YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgdXNlZCBmb3IgYSBIVFRQIEdFVCByZXF1ZXN0XG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlQYXJhbXMgUGFyYW1ldGVycyB0byBiZSBhcHBlbmRlZCB0byB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBHZXQ8UiwgUCBleHRlbmRzIGFueT4oYXBpRW5kcG9pbnQ6IHN0cmluZywgYXBpUGFyYW1zOiBQKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIGFwaVBhcmFtc1twcm9wXSkge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2FjY2Vzc1Rva2VuJykge1xuICAgICAgICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHthcGlQYXJhbXNbcHJvcF19YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgdXNlZCB3aXRoIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaVBhcmFtcyBQYXJhbWV0ZXJzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUJvZHkgVGhlIHJlcXVlc3QgYm9keVxuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVIdHRwUG9zdDxcbiAgICBQIGV4dGVuZHMgYW55LFxuICAgIEIgZXh0ZW5kcyBhbnkgfCBudWxsPihhcGlFbmRwb2ludDogc3RyaW5nLCBhcGlQYXJhbXM6IFAsIGFwaUJvZHk6IEIgPSBudWxsKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBsZXQgaGVhZGVycztcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2FjY2Vzc1Rva2VuJykge1xuICAgICAgICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHthcGlQYXJhbXNbcHJvcF19YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICBpZiAoYXBpQm9keSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgICAgYXBpQm9keSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgICAgYXBpQm9keSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhcGlCb2R5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgICBhcGlCb2R5LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHRvIGJlIHVzZWQgd2l0aCB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlQYXJhbXMgUGFyYW1ldGVycyB0byBiZSBhcHBlbmRlZCB0byB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlCb2R5IFRoZSByZXF1ZXN0IGJvZHlcbiAgICogQHJldHVybiBBIGBIdHRwQ2xpZW50YCBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSHR0cFB1dDxSLCBQIGV4dGVuZHMgYW55LCBCIGV4dGVuZHMgYW55PihhcGlFbmRwb2ludDogc3RyaW5nLCBhcGlQYXJhbXM6IFAsIGFwaUJvZHk6IEIpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBsZXQgaGVhZGVycztcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2FjY2Vzc1Rva2VuJykge1xuICAgICAgICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHthcGlQYXJhbXNbcHJvcF19YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIGFwaUJvZHksXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgYXBpQm9keSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=