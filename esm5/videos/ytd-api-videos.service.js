/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SimpleHttpService } from 'ngx-simple-http';
import { HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "ngx-simple-http";
var NgxYtdApiVideosService = /** @class */ (function () {
    function NgxYtdApiVideosService(http) {
        this.http = http;
        /**
         * The API URL for the Videos API of the YouTube Data v3 API
         */
        this.ngxYtdVideosApiUrl = 'https://www.googleapis.com/youtube/v3/videos';
        /**
         * The API URL for the Videos API for uploading a video of the YouTube Data v3 API
         */
        this.ngxYtdVideoUploadsApiUrl = 'https://www.googleapis.com/upload/youtube/v3/videos';
    }
    // Handler for HTTP requests
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
    NgxYtdApiVideosService.prototype._httpHandler = 
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
    /**
     * Deletes a YouTube video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Deletes a YouTube video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.delete = /**
     * Deletes a YouTube video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (opts) {
        return this._httpHandler(this.ngxYtdVideosApiUrl, opts, null, 'delete');
    };
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.getRating = /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (opts) {
        return this._httpHandler(this.ngxYtdVideosApiUrl + "/getRating", opts, null, 'get');
    };
    /**
     * Uploads a video to YouTube and optionally sets the video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Uploads a video to YouTube and optionally sets the video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
     * @param {?} body The HTTP request body
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.insert = /**
     * Uploads a video to YouTube and optionally sets the video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
     * @param {?} body The HTTP request body
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (body, opts) {
        return this._httpHandler(this.ngxYtdVideoUploadsApiUrl, opts, body, 'post');
    };
    /**
     * Returns a list of videos that match the requested API parameters
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list for more info
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Returns a list of videos that match the requested API parameters
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.list = /**
     * Returns a list of videos that match the requested API parameters
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (opts) {
        return this._httpHandler(this.ngxYtdVideosApiUrl, opts, null, 'get');
    };
    /**
     * Add a like or dislike rating to a video or remove a rating from a video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Add a like or dislike rating to a video or remove a rating from a video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.rate = /**
     * Add a like or dislike rating to a video or remove a rating from a video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (opts) {
        return this._httpHandler(this.ngxYtdVideosApiUrl + "/rate", opts, null, 'post');
    };
    /**
     * Reports a video for having abusive content
     *
     * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Reports a video for having abusive content
     *
     * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
     * @param {?} body The HTTP request body
     * @param {?=} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.reportAbuse = /**
     * Reports a video for having abusive content
     *
     * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
     * @param {?} body The HTTP request body
     * @param {?=} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (body, opts) {
        return this._httpHandler(this.ngxYtdVideosApiUrl + "/reportAbuse", opts, body, 'post');
    };
    /**
     * Updates a video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos/update for more info
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Updates a video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos/update for more info
     * @param {?} body The HTTP request body
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.update = /**
     * Updates a video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos/update for more info
     * @param {?} body The HTTP request body
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (body, opts) {
        return this._httpHandler(this.ngxYtdVideosApiUrl, opts, body, 'put');
    };
    NgxYtdApiVideosService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxYtdApiVideosService.ctorParameters = function () { return [
        { type: SimpleHttpService }
    ]; };
    /** @nocollapse */ NgxYtdApiVideosService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiVideosService_Factory() { return new NgxYtdApiVideosService(i0.inject(i1.SimpleHttpService)); }, token: NgxYtdApiVideosService, providedIn: "root" });
    return NgxYtdApiVideosService;
}());
export { NgxYtdApiVideosService };
if (false) {
    /**
     * The API URL for the Videos API of the YouTube Data v3 API
     * @type {?}
     */
    NgxYtdApiVideosService.prototype.ngxYtdVideosApiUrl;
    /**
     * The API URL for the Videos API for uploading a video of the YouTube Data v3 API
     * @type {?}
     */
    NgxYtdApiVideosService.prototype.ngxYtdVideoUploadsApiUrl;
    /**
     * @type {?}
     * @private
     */
    NgxYtdApiVideosService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL3ZpZGVvcy8iLCJzb3VyY2VzIjpbInl0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFlcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFbkQ7SUFJRSxnQ0FDVSxJQUF1QjtRQUF2QixTQUFJLEdBQUosSUFBSSxDQUFtQjs7OztRQUt4Qix1QkFBa0IsR0FBRyw4Q0FBOEMsQ0FBQzs7OztRQUlwRSw2QkFBd0IsR0FBRyxxREFBcUQsQ0FBQztJQVJ0RixDQUFDO0lBU0wsNEJBQTRCOzs7Ozs7Ozs7OztJQUNwQiw2Q0FBWTs7Ozs7Ozs7Ozs7SUFBcEIsVUFDRSxXQUFtQixFQUNuQixJQUFPLEVBQ1AsSUFBYyxFQUNkLFFBQTJDO1FBRDNDLHFCQUFBLEVBQUEsV0FBYzs7WUFHVixPQUFvQjtRQUN4QixJQUFJLGFBQWEsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDckcsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFO2lCQUN4QixHQUFHLENBQUMsZUFBZSxFQUFFLFlBQVUsSUFBSSxDQUFDLGFBQWEsQ0FBRyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxRQUFRLFFBQVEsRUFBRTtZQUNoQixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFPLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ3JFO3FCQUFNO29CQUNMLE9B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QUNKLElBQUksRUFDSixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7SUFDRDs7Ozs7O09BTUc7Ozs7Ozs7O0lBQ0gscUNBQUk7Ozs7Ozs7SUFBSixVQUFLLElBQTZCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FDbkIsSUFBSSxDQUFDLGtCQUFrQixVQUFPLEVBQ2pDLElBQUksRUFDSixJQUFJLEVBQ0osTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRzs7Ozs7Ozs7O0lBQ0gsNENBQVc7Ozs7Ozs7O0lBQVgsVUFBWSxJQUFvQyxFQUFFLElBQXFDO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FDbkIsSUFBSSxDQUFDLGtCQUFrQixpQkFBYyxFQUN4QyxJQUFJLEVBQ0osSUFBSSxFQUNKLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQztJQUNEOzs7Ozs7O09BT0c7Ozs7Ozs7OztJQUNILHVDQUFNOzs7Ozs7OztJQUFOLFVBQU8sSUFBNkIsRUFBRSxJQUErQjtRQUNuRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQ3RCLElBQUksQ0FBQyxrQkFBa0IsRUFDdkIsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7O2dCQWpMRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQW5CUSxpQkFBaUI7OztpQ0FEMUI7Q0FvTUMsQUFsTEQsSUFrTEM7U0EvS1ksc0JBQXNCOzs7Ozs7SUFPakMsb0RBQTZFOzs7OztJQUk3RSwwREFBMEY7Ozs7O0lBVHhGLHNDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpbXBsZUh0dHBTZXJ2aWNlIH0gZnJvbSAnbmd4LXNpbXBsZS1odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIE5neFl0ZEFwaVZpZGVvc0RlbGV0ZU9wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ09wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ1Jlc3VsdCxcbiAgTmd4WXRkQXBpVmlkZW9zSW5zZXJ0T3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zTGlzdE9wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQsXG4gIE5neFl0ZEFwaVZpZGVvc1JhdGVPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZUJvZHksXG4gIE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlT3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2UsXG4gIE5neFl0ZEFwaVZpZGVvc1VwZGF0ZU9wdHNcbn0gZnJvbSAnLi95dGQtYXBpLXZpZGVvcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVZpZGVvc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IFNpbXBsZUh0dHBTZXJ2aWNlXG4gICkgeyB9XG4gIC8qKlxuICAgKiBUaGUgQVBJIFVSTCBmb3IgdGhlIFZpZGVvcyBBUEkgb2YgdGhlIFlvdVR1YmUgRGF0YSB2MyBBUElcbiAgICovXG4gIHJlYWRvbmx5IG5neFl0ZFZpZGVvc0FwaVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3ZpZGVvcyc7XG4gIC8qKlxuICAgKiBUaGUgQVBJIFVSTCBmb3IgdGhlIFZpZGVvcyBBUEkgZm9yIHVwbG9hZGluZyBhIHZpZGVvIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRWaWRlb1VwbG9hZHNBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXBsb2FkL3lvdXR1YmUvdjMvdmlkZW9zJztcbiAgLy8gSGFuZGxlciBmb3IgSFRUUCByZXF1ZXN0c1xuICBwcml2YXRlIF9odHRwSGFuZGxlcjxCIGV4dGVuZHMgYW55LCBQIGV4dGVuZHMgYW55LCBSIGV4dGVuZHMgYW55PihcbiAgICBhcGlFbmRwb2ludDogc3RyaW5nLFxuICAgIG9wdHM6IFAsXG4gICAgYm9keTogQiA9IG51bGwsXG4gICAgaHR0cFR5cGU6ICdkZWxldGUnIHwgJ2dldCcgfCAncG9zdCcgfCAncHV0J1xuICApOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gICAgaWYgKCdhY2Nlc3NUb2tlbicgaW4gb3B0cyAmJiB0eXBlb2Ygb3B0c1snYWNjZXNzVG9rZW4nXSAhPT0gdW5kZWZpbmVkICYmIG9wdHNbJ2FjY2Vzc1Rva2VuJ10gIT09IG51bGwpIHtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke29wdHNbJ2FjY2Vzc1Rva2VuJ119YCk7XG4gICAgfVxuICAgIHN3aXRjaCAoaHR0cFR5cGUpIHtcbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwRGVsZXRlPFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBoZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBEZWxldGU8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICBjYXNlICdnZXQnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cEdldDxQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgaGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwR2V0PFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAncG9zdCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHksIGhlYWRlcnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsLCBoZWFkZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ3B1dCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSwgaGVhZGVycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCwgaGVhZGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogRGVsZXRlcyBhIFlvdVR1YmUgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvZGVsZXRlIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIGRlbGV0ZShvcHRzOiBOZ3hZdGRBcGlWaWRlb3NEZWxldGVPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cEhhbmRsZXI8YW55LCBOZ3hZdGRBcGlWaWRlb3NEZWxldGVPcHRzLCBhbnk+KFxuICAgICAgdGhpcy5uZ3hZdGRWaWRlb3NBcGlVcmwsXG4gICAgICBvcHRzLFxuICAgICAgbnVsbCxcbiAgICAgICdkZWxldGUnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSByYXRpbmdzIHRoYXQgdGhlIGF1dGhvcml6ZWQgdXNlciBnYXZlIHRvIGEgbGlzdCBvZiBzcGVjaWZpZWQgdmlkZW9zXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2dldFJhdGluZyBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBnZXRSYXRpbmcob3B0czogTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBIYW5kbGVyPGFueSwgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cywgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0PihcbiAgICAgIGAke3RoaXMubmd4WXRkVmlkZW9zQXBpVXJsfS9nZXRSYXRpbmdgLFxuICAgICAgb3B0cyxcbiAgICAgIG51bGwsXG4gICAgICAnZ2V0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFVwbG9hZHMgYSB2aWRlbyB0byBZb3VUdWJlIGFuZCBvcHRpb25hbGx5IHNldHMgdGhlIHZpZGVvJ3MgbWV0YWRhdGFcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvaW5zZXJ0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEhUVFAgcmVxdWVzdCBib2R5XG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBpbnNlcnQoYm9keTogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2UsIG9wdHM6IE5neFl0ZEFwaVZpZGVvc0luc2VydE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBIYW5kbGVyPGFueSwgTmd4WXRkQXBpVmlkZW9zSW5zZXJ0T3B0cywgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2U+KFxuICAgICAgdGhpcy5uZ3hZdGRWaWRlb1VwbG9hZHNBcGlVcmwsXG4gICAgICBvcHRzLFxuICAgICAgYm9keSxcbiAgICAgICdwb3N0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHZpZGVvcyB0aGF0IG1hdGNoIHRoZSByZXF1ZXN0ZWQgQVBJIHBhcmFtZXRlcnNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBIYW5kbGVyPGFueSwgTmd4WXRkQXBpVmlkZW9zTGlzdE9wdHMsIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQ+KFxuICAgICAgdGhpcy5uZ3hZdGRWaWRlb3NBcGlVcmwsXG4gICAgICBvcHRzLFxuICAgICAgbnVsbCxcbiAgICAgICdnZXQnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogQWRkIGEgbGlrZSBvciBkaXNsaWtlIHJhdGluZyB0byBhIHZpZGVvIG9yIHJlbW92ZSBhIHJhdGluZyBmcm9tIGEgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvcmF0ZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICByYXRlKG9wdHM6IE5neFl0ZEFwaVZpZGVvc1JhdGVPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cEhhbmRsZXI8YW55LCBOZ3hZdGRBcGlWaWRlb3NSYXRlT3B0cywgYW55PihcbiAgICAgIGAke3RoaXMubmd4WXRkVmlkZW9zQXBpVXJsfS9yYXRlYCxcbiAgICAgIG9wdHMsXG4gICAgICBudWxsLFxuICAgICAgJ3Bvc3QnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmVwb3J0cyBhIHZpZGVvIGZvciBoYXZpbmcgYWJ1c2l2ZSBjb250ZW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL3JlcG9ydEFidXNlIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEhUVFAgcmVxdWVzdCBib2R5XG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICByZXBvcnRBYnVzZShib2R5OiBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZUJvZHksIG9wdHM/OiBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwSGFuZGxlcjxOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZUJvZHksIE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlT3B0cywgYW55PihcbiAgICAgIGAke3RoaXMubmd4WXRkVmlkZW9zQXBpVXJsfS9yZXBvcnRBYnVzZWAsXG4gICAgICBvcHRzLFxuICAgICAgYm9keSxcbiAgICAgICdwb3N0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYSB2aWRlbydzIG1ldGFkYXRhXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL3VwZGF0ZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBib2R5IFRoZSBIVFRQIHJlcXVlc3QgYm9keVxuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgdXBkYXRlKGJvZHk6IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlLCBvcHRzOiBOZ3hZdGRBcGlWaWRlb3NVcGRhdGVPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwSGFuZGxlcjxOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSwgTmd4WXRkQXBpVmlkZW9zVXBkYXRlT3B0cywgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2U+KFxuICAgICAgdGhpcy5uZ3hZdGRWaWRlb3NBcGlVcmwsXG4gICAgICBvcHRzLFxuICAgICAgYm9keSxcbiAgICAgICdwdXQnXG4gICAgKTtcbiAgfVxufVxuIl19