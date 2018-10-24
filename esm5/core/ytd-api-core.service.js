/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * Generates the query parameters to be used with the API endpoint
     * @return A `HttpClient` instance
     */
    /**
     * Generates the query parameters to be used with the API endpoint
     * @template R, P
     * @param {?} apiEndpoint
     * @param {?} apiParams
     * @return {?} A `HttpClient` instance
     */
    NgxYtdApiCoreService.prototype.createHttpGet = /**
     * Generates the query parameters to be used with the API endpoint
     * @template R, P
     * @param {?} apiEndpoint
     * @param {?} apiParams
     * @return {?} A `HttpClient` instance
     */
    function (apiEndpoint, apiParams) {
        /** @type {?} */
        var params = new HttpParams();
        /** @type {?} */
        var headers;
        for (var prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined) {
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
                params: params,
                headers: headers
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteXRkLWFwaS8iLCJzb3VyY2VzIjpbImNvcmUveXRkLWFwaS1jb3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUUzRTtJQUlFLDhCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7O1FBSTNCLHlCQUFvQixHQUFHLGdEQUFnRCxDQUFDOzs7O1FBSXhFLHVCQUFrQixHQUFHLDhDQUE4QyxDQUFDOzs7O1FBSXBFLHVCQUFrQixHQUFHLDhDQUE4QyxDQUFDO0lBWnJDLENBQUM7SUFhekM7OztPQUdHOzs7Ozs7OztJQUNILDRDQUFhOzs7Ozs7O0lBQWIsVUFBZ0MsV0FBbUIsRUFBRSxTQUFZOztZQUMzRCxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7O1lBQ3pCLE9BQU87UUFDWCxLQUFLLElBQU0sSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUM1QixJQUFJLElBQUksSUFBSSxTQUFTLElBQUksT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUM3RCxJQUFJLElBQUksS0FBSyxhQUFhLEVBQUU7b0JBQzFCLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTt5QkFDeEIsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFVLFNBQVMsQ0FBQyxJQUFJLENBQUcsQ0FBQyxDQUFDO2lCQUN0RDtxQkFBTTtvQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRjtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsV0FBVyxFQUNYO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixXQUFXLEVBQ1g7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOztnQkFuREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxVQUFVOzs7K0JBRG5CO0NBdURDLEFBcERELElBb0RDO1NBakRZLG9CQUFvQjs7Ozs7O0lBSy9CLG9EQUFpRjs7Ozs7SUFJakYsa0RBQTZFOzs7OztJQUk3RSxrREFBNkU7O0lBWmpFLG9DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29yZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBDb21tZW50cyBBUEkgb2YgdGhlIFlvdVR1YmUgRGF0YSB2MyBBUElcbiAgICovXG4gIHJlYWRvbmx5IG5neFl0ZENvbW1lbnRzQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY29tbWVudHMnO1xuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBTZWFyY2ggQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRTZWFyY2hBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2gnO1xuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBWaWRlb3MgQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRWaWRlb3NBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My92aWRlb3MnO1xuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHRvIGJlIHVzZWQgd2l0aCB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBHZXQ8UiwgUCBleHRlbmRzIGFueT4oYXBpRW5kcG9pbnQ6IHN0cmluZywgYXBpUGFyYW1zOiBQKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIHR5cGVvZiBhcGlQYXJhbXNbcHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2FjY2Vzc1Rva2VuJykge1xuICAgICAgICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHthcGlQYXJhbXNbcHJvcF19YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==