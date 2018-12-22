/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SimpleHttpService } from 'ngx-simple-http';
import { HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "ngx-simple-http";
export class NgxYtdApiVideosService {
    /**
     * @param {?} http
     */
    constructor(http) {
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
     * Deletes a YouTube video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    delete(opts) {
        return this._httpHandler(this.ngxYtdVideosApiUrl, opts, null, 'delete');
    }
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    getRating(opts) {
        return this._httpHandler(`${this.ngxYtdVideosApiUrl}/getRating`, opts, null, 'get');
    }
    /**
     * Uploads a video to YouTube and optionally sets the video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
     * @param {?} body The HTTP request body
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    insert(body, opts) {
        return this._httpHandler(this.ngxYtdVideoUploadsApiUrl, opts, body, 'post');
    }
    /**
     * Returns a list of videos that match the requested API parameters
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    list(opts) {
        return this._httpHandler(this.ngxYtdVideosApiUrl, opts, null, 'get');
    }
    /**
     * Add a like or dislike rating to a video or remove a rating from a video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    rate(opts) {
        return this._httpHandler(`${this.ngxYtdVideosApiUrl}/rate`, opts, null, 'post');
    }
    /**
     * Reports a video for having abusive content
     *
     * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
     * @param {?} body The HTTP request body
     * @param {?=} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    reportAbuse(body, opts) {
        return this._httpHandler(`${this.ngxYtdVideosApiUrl}/reportAbuse`, opts, body, 'post');
    }
    /**
     * Updates a video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos/update for more info
     * @param {?} body The HTTP request body
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    update(body, opts) {
        return this._httpHandler(this.ngxYtdVideosApiUrl, opts, body, 'put');
    }
}
NgxYtdApiVideosService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxYtdApiVideosService.ctorParameters = () => [
    { type: SimpleHttpService }
];
/** @nocollapse */ NgxYtdApiVideosService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiVideosService_Factory() { return new NgxYtdApiVideosService(i0.inject(i1.SimpleHttpService)); }, token: NgxYtdApiVideosService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL3ZpZGVvcy8iLCJzb3VyY2VzIjpbInl0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFlcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFLbkQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUNqQyxZQUNVLElBQXVCO1FBQXZCLFNBQUksR0FBSixJQUFJLENBQW1COzs7O1FBS3hCLHVCQUFrQixHQUFHLDhDQUE4QyxDQUFDOzs7O1FBSXBFLDZCQUF3QixHQUFHLHFEQUFxRCxDQUFDO0lBUnRGLENBQUM7Ozs7Ozs7Ozs7O0lBVUcsWUFBWSxDQUNsQixXQUFtQixFQUNuQixJQUFPLEVBQ1AsT0FBVSxJQUFJLEVBQ2QsUUFBMkM7O1lBRXZDLE9BQW9CO1FBQ3hCLElBQUksYUFBYSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNyRyxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7aUJBQ3hCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxRQUFRO2dCQUNYLElBQUksT0FBTyxFQUFFO29CQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBTyxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUNyRTtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENB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LEVBQ2pDLElBQUksRUFDSixJQUFJLEVBQ0osTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUFTRCxXQUFXLENBQUMsSUFBb0MsRUFBRSxJQUFxQztRQUNyRixPQUFPLElBQUksQ0FBQyxZQUFZLENBQ3RCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixjQUFjLEVBQ3hDLElBQUksRUFDSixJQUFJLEVBQ0osTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUFTRCxNQUFNLENBQUMsSUFBNkIsRUFBRSxJQUErQjtRQUNuRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQ3RCLElBQUksQ0FBQyxrQkFBa0IsRUFDdkIsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7OztZQWpMRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFuQlEsaUJBQWlCOzs7Ozs7OztJQTJCeEIsb0RBQTZFOzs7OztJQUk3RSwwREFBMEY7Ozs7O0lBVHhGLHNDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpbXBsZUh0dHBTZXJ2aWNlIH0gZnJvbSAnbmd4LXNpbXBsZS1odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIE5neFl0ZEFwaVZpZGVvc0RlbGV0ZU9wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ09wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ1Jlc3VsdCxcbiAgTmd4WXRkQXBpVmlkZW9zSW5zZXJ0T3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zTGlzdE9wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQsXG4gIE5neFl0ZEFwaVZpZGVvc1JhdGVPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZUJvZHksXG4gIE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlT3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2UsXG4gIE5neFl0ZEFwaVZpZGVvc1VwZGF0ZU9wdHNcbn0gZnJvbSAnLi95dGQtYXBpLXZpZGVvcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVZpZGVvc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IFNpbXBsZUh0dHBTZXJ2aWNlXG4gICkgeyB9XG4gIC8qKlxuICAgKiBUaGUgQVBJIFVSTCBmb3IgdGhlIFZpZGVvcyBBUEkgb2YgdGhlIFlvdVR1YmUgRGF0YSB2MyBBUElcbiAgICovXG4gIHJlYWRvbmx5IG5neFl0ZFZpZGVvc0FwaVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3ZpZGVvcyc7XG4gIC8qKlxuICAgKiBUaGUgQVBJIFVSTCBmb3IgdGhlIFZpZGVvcyBBUEkgZm9yIHVwbG9hZGluZyBhIHZpZGVvIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRWaWRlb1VwbG9hZHNBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXBsb2FkL3lvdXR1YmUvdjMvdmlkZW9zJztcbiAgLy8gSGFuZGxlciBmb3IgSFRUUCByZXF1ZXN0c1xuICBwcml2YXRlIF9odHRwSGFuZGxlcjxCIGV4dGVuZHMgYW55LCBQIGV4dGVuZHMgYW55LCBSIGV4dGVuZHMgYW55PihcbiAgICBhcGlFbmRwb2ludDogc3RyaW5nLFxuICAgIG9wdHM6IFAsXG4gICAgYm9keTogQiA9IG51bGwsXG4gICAgaHR0cFR5cGU6ICdkZWxldGUnIHwgJ2dldCcgfCAncG9zdCcgfCAncHV0J1xuICApOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gICAgaWYgKCdhY2Nlc3NUb2tlbicgaW4gb3B0cyAmJiB0eXBlb2Ygb3B0c1snYWNjZXNzVG9rZW4nXSAhPT0gdW5kZWZpbmVkICYmIG9wdHNbJ2FjY2Vzc1Rva2VuJ10gIT09IG51bGwpIHtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke29wdHNbJ2FjY2Vzc1Rva2VuJ119YCk7XG4gICAgfVxuICAgIHN3aXRjaCAoaHR0cFR5cGUpIHtcbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwRGVsZXRlPFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBoZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBEZWxldGU8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICBjYXNlICdnZXQnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cEdldDxQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgaGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwR2V0PFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAncG9zdCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHksIGhlYWRlcnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsLCBoZWFkZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ3B1dCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSwgaGVhZGVycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCwgaGVhZGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogRGVsZXRlcyBhIFlvdVR1YmUgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvZGVsZXRlIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIGRlbGV0ZShvcHRzOiBOZ3hZdGRBcGlWaWRlb3NEZWxldGVPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cEhhbmRsZXI8YW55LCBOZ3hZdGRBcGlWaWRlb3NEZWxldGVPcHRzLCBhbnk+KFxuICAgICAgdGhpcy5uZ3hZdGRWaWRlb3NBcGlVcmwsXG4gICAgICBvcHRzLFxuICAgICAgbnVsbCxcbiAgICAgICdkZWxldGUnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSByYXRpbmdzIHRoYXQgdGhlIGF1dGhvcml6ZWQgdXNlciBnYXZlIHRvIGEgbGlzdCBvZiBzcGVjaWZpZWQgdmlkZW9zXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2dldFJhdGluZyBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBnZXRSYXRpbmcob3B0czogTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBIYW5kbGVyPGFueSwgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cywgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0PihcbiAgICAgIGAke3RoaXMubmd4WXRkVmlkZW9zQXBpVXJsfS9nZXRSYXRpbmdgLFxuICAgICAgb3B0cyxcbiAgICAgIG51bGwsXG4gICAgICAnZ2V0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFVwbG9hZHMgYSB2aWRlbyB0byBZb3VUdWJlIGFuZCBvcHRpb25hbGx5IHNldHMgdGhlIHZpZGVvJ3MgbWV0YWRhdGFcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvaW5zZXJ0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEhUVFAgcmVxdWVzdCBib2R5XG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBpbnNlcnQoYm9keTogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2UsIG9wdHM6IE5neFl0ZEFwaVZpZGVvc0luc2VydE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBIYW5kbGVyPGFueSwgTmd4WXRkQXBpVmlkZW9zSW5zZXJ0T3B0cywgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2U+KFxuICAgICAgdGhpcy5uZ3hZdGRWaWRlb1VwbG9hZHNBcGlVcmwsXG4gICAgICBvcHRzLFxuICAgICAgYm9keSxcbiAgICAgICdwb3N0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHZpZGVvcyB0aGF0IG1hdGNoIHRoZSByZXF1ZXN0ZWQgQVBJIHBhcmFtZXRlcnNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBIYW5kbGVyPGFueSwgTmd4WXRkQXBpVmlkZW9zTGlzdE9wdHMsIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQ+KFxuICAgICAgdGhpcy5uZ3hZdGRWaWRlb3NBcGlVcmwsXG4gICAgICBvcHRzLFxuICAgICAgbnVsbCxcbiAgICAgICdnZXQnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogQWRkIGEgbGlrZSBvciBkaXNsaWtlIHJhdGluZyB0byBhIHZpZGVvIG9yIHJlbW92ZSBhIHJhdGluZyBmcm9tIGEgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvcmF0ZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICByYXRlKG9wdHM6IE5neFl0ZEFwaVZpZGVvc1JhdGVPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cEhhbmRsZXI8YW55LCBOZ3hZdGRBcGlWaWRlb3NSYXRlT3B0cywgYW55PihcbiAgICAgIGAke3RoaXMubmd4WXRkVmlkZW9zQXBpVXJsfS9yYXRlYCxcbiAgICAgIG9wdHMsXG4gICAgICBudWxsLFxuICAgICAgJ3Bvc3QnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmVwb3J0cyBhIHZpZGVvIGZvciBoYXZpbmcgYWJ1c2l2ZSBjb250ZW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL3JlcG9ydEFidXNlIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEhUVFAgcmVxdWVzdCBib2R5XG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICByZXBvcnRBYnVzZShib2R5OiBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZUJvZHksIG9wdHM/OiBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwSGFuZGxlcjxOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZUJvZHksIE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlT3B0cywgYW55PihcbiAgICAgIGAke3RoaXMubmd4WXRkVmlkZW9zQXBpVXJsfS9yZXBvcnRBYnVzZWAsXG4gICAgICBvcHRzLFxuICAgICAgYm9keSxcbiAgICAgICdwb3N0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYSB2aWRlbydzIG1ldGFkYXRhXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL3VwZGF0ZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBib2R5IFRoZSBIVFRQIHJlcXVlc3QgYm9keVxuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgdXBkYXRlKGJvZHk6IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlLCBvcHRzOiBOZ3hZdGRBcGlWaWRlb3NVcGRhdGVPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwSGFuZGxlcjxOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSwgTmd4WXRkQXBpVmlkZW9zVXBkYXRlT3B0cywgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2U+KFxuICAgICAgdGhpcy5uZ3hZdGRWaWRlb3NBcGlVcmwsXG4gICAgICBvcHRzLFxuICAgICAgYm9keSxcbiAgICAgICdwdXQnXG4gICAgKTtcbiAgfVxufVxuIl19