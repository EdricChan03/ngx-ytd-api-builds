/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/ytd-api-core.service";
var NgxYtdApiVideosService = /** @class */ (function () {
    function NgxYtdApiVideosService(core) {
        this.core = core;
    }
    /**
     * Deletes a YouTube video
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Deletes a YouTube video
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.delete = /**
     * Deletes a YouTube video
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (opts) {
        return this.core.createHttpDelete(this.core.ngxYtdVideosApiUrl, opts);
    };
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.getRating = /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (opts) {
        return this.core.createHttpGet(this.core.ngxYtdVideosApiUrl + "/getRating", opts);
    };
    /**
     * Uploads a video to YouTube and optionally sets the video's metadata
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Uploads a video to YouTube and optionally sets the video's metadata
     * @param {?} body The HTTP request body
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.insert = /**
     * Uploads a video to YouTube and optionally sets the video's metadata
     * @param {?} body The HTTP request body
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (body, opts) {
        return this.core.createHttpPost(this.core.ngxYtdVideoUploadsApiUrl, opts, body);
    };
    /**
     * Returns a list of videos that match the requested API parameters
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Returns a list of videos that match the requested API parameters
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.list = /**
     * Returns a list of videos that match the requested API parameters
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (opts) {
        return this.core.createHttpGet("" + this.core.ngxYtdVideosApiUrl, opts);
    };
    /**
     * Add a like or dislike rating to a video or remove a rating from a video
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Add a like or dislike rating to a video or remove a rating from a video
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.rate = /**
     * Add a like or dislike rating to a video or remove a rating from a video
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (opts) {
        return this.core.createHttpPost(this.core.ngxYtdVideosApiUrl + "/rate", opts);
    };
    /**
     * Reports a video for having abusive content
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Reports a video for having abusive content
     * @param {?} body The HTTP request body
     * @param {?=} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.reportAbuse = /**
     * Reports a video for having abusive content
     * @param {?} body The HTTP request body
     * @param {?=} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (body, opts) {
        return this.core.createHttpPost(this.core.ngxYtdVideosApiUrl + "/reportAbuse", opts, body);
    };
    /**
     * Updates a video's metadata
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    /**
     * Updates a video's metadata
     * @param {?} body The HTTP request body
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.update = /**
     * Updates a video's metadata
     * @param {?} body The HTTP request body
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    function (body, opts) {
        return this.core.createHttpPut(this.core.ngxYtdVideosApiUrl, opts, body);
    };
    NgxYtdApiVideosService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxYtdApiVideosService.ctorParameters = function () { return [
        { type: NgxYtdApiCoreService }
    ]; };
    /** @nocollapse */ NgxYtdApiVideosService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiVideosService_Factory() { return new NgxYtdApiVideosService(i0.inject(i1.NgxYtdApiCoreService)); }, token: NgxYtdApiVideosService, providedIn: "root" });
    return NgxYtdApiVideosService;
}());
export { NgxYtdApiVideosService };
if (false) {
    /** @type {?} */
    NgxYtdApiVideosService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsidmlkZW9zL3l0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQWdCeEQ7SUFJRSxnQ0FDVSxJQUEwQjtRQUExQixTQUFJLEdBQUosSUFBSSxDQUFzQjtJQUNoQyxDQUFDO0lBQ0w7Ozs7T0FJRzs7Ozs7O0lBQ0gsdUNBQU07Ozs7O0lBQU4sVUFBTyxJQUErQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQTRCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUNEOzs7O09BSUc7Ozs7OztJQUNILDBDQUFTOzs7OztJQUFULFVBQVUsSUFBa0M7UUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsZUFBWSxFQUMzQyxJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7SUFDRDs7Ozs7T0FLRzs7Ozs7OztJQUNILHVDQUFNOzs7Ozs7SUFBTixVQUFPLElBQTZCLEVBQUUsSUFBK0I7UUFDbkUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFDbEMsSUFBSSxFQUNKLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUNEOzs7O09BSUc7Ozs7OztJQUNILHFDQUFJOzs7OztJQUFKLFVBQUssSUFBNkI7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBcUQsS0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlILENBQUM7SUFDRDs7OztPQUlHOzs7Ozs7SUFDSCxxQ0FBSTs7Ozs7SUFBSixVQUFLLElBQTZCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLFVBQU8sRUFDdEMsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7O09BS0c7Ozs7Ozs7SUFDSCw0Q0FBVzs7Ozs7O0lBQVgsVUFBWSxJQUFvQyxFQUFFLElBQXFDO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLGlCQUFjLEVBQzdDLElBQUksRUFDSixJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7SUFDRDs7Ozs7T0FLRzs7Ozs7OztJQUNILHVDQUFNOzs7Ozs7SUFBTixVQUFPLElBQTZCLEVBQUUsSUFBK0I7UUFDbkUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFDNUIsSUFBSSxFQUNKLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7Z0JBbkZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBbEJRLG9CQUFvQjs7O2lDQUQ3QjtDQXFHQyxBQXBGRCxJQW9GQztTQWpGWSxzQkFBc0I7OztJQUUvQixzQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb3JlU2VydmljZSB9IGZyb20gJ25neC15dGQtYXBpL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgTmd4WXRkQXBpVmlkZW9zRGVsZXRlT3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0LFxuICBOZ3hZdGRBcGlWaWRlb3NJbnNlcnRPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdCxcbiAgTmd4WXRkQXBpVmlkZW9zUmF0ZU9wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlQm9keSxcbiAgTmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSxcbiAgTmd4WXRkQXBpVmlkZW9zVXBkYXRlT3B0c1xufSBmcm9tICcuL3l0ZC1hcGktdmlkZW9zLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVZpZGVvc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmU6IE5neFl0ZEFwaUNvcmVTZXJ2aWNlXG4gICkgeyB9XG4gIC8qKlxuICAgKiBEZWxldGVzIGEgWW91VHViZSB2aWRlb1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgZGVsZXRlKG9wdHM6IE5neFl0ZEFwaVZpZGVvc0RlbGV0ZU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cERlbGV0ZTxOZ3hZdGRBcGlWaWRlb3NEZWxldGVPcHRzPih0aGlzLmNvcmUubmd4WXRkVmlkZW9zQXBpVXJsLCBvcHRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSByYXRpbmdzIHRoYXQgdGhlIGF1dGhvcml6ZWQgdXNlciBnYXZlIHRvIGEgbGlzdCBvZiBzcGVjaWZpZWQgdmlkZW9zXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBnZXRSYXRpbmcob3B0czogTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5jcmVhdGVIdHRwR2V0PE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ1Jlc3VsdCwgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cz4oXG4gICAgICBgJHt0aGlzLmNvcmUubmd4WXRkVmlkZW9zQXBpVXJsfS9nZXRSYXRpbmdgLFxuICAgICAgb3B0c1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFVwbG9hZHMgYSB2aWRlbyB0byBZb3VUdWJlIGFuZCBvcHRpb25hbGx5IHNldHMgdGhlIHZpZGVvJ3MgbWV0YWRhdGFcbiAgICogQHBhcmFtIGJvZHkgVGhlIEhUVFAgcmVxdWVzdCBib2R5XG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBpbnNlcnQoYm9keTogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2UsIG9wdHM6IE5neFl0ZEFwaVZpZGVvc0luc2VydE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5jcmVhdGVIdHRwUG9zdDxOZ3hZdGRBcGlWaWRlb3NJbnNlcnRPcHRzLCBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZT4oXG4gICAgICB0aGlzLmNvcmUubmd4WXRkVmlkZW9VcGxvYWRzQXBpVXJsLFxuICAgICAgb3B0cyxcbiAgICAgIGJvZHlcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiB2aWRlb3MgdGhhdCBtYXRjaCB0aGUgcmVxdWVzdGVkIEFQSSBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5jcmVhdGVIdHRwR2V0PE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQsIE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzPihgJHt0aGlzLmNvcmUubmd4WXRkVmlkZW9zQXBpVXJsfWAsIG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgYSBsaWtlIG9yIGRpc2xpa2UgcmF0aW5nIHRvIGEgdmlkZW8gb3IgcmVtb3ZlIGEgcmF0aW5nIGZyb20gYSB2aWRlb1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgcmF0ZShvcHRzOiBOZ3hZdGRBcGlWaWRlb3NSYXRlT3B0cyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5jcmVhdGVIdHRwUG9zdDxOZ3hZdGRBcGlWaWRlb3NSYXRlT3B0cywgYW55PihcbiAgICAgIGAke3RoaXMuY29yZS5uZ3hZdGRWaWRlb3NBcGlVcmx9L3JhdGVgLFxuICAgICAgb3B0c1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFJlcG9ydHMgYSB2aWRlbyBmb3IgaGF2aW5nIGFidXNpdmUgY29udGVudFxuICAgKiBAcGFyYW0gYm9keSBUaGUgSFRUUCByZXF1ZXN0IGJvZHlcbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIHJlcG9ydEFidXNlKGJvZHk6IE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlQm9keSwgb3B0cz86IE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlT3B0cyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5jcmVhdGVIdHRwUG9zdDxOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZU9wdHMsIE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlQm9keT4oXG4gICAgICBgJHt0aGlzLmNvcmUubmd4WXRkVmlkZW9zQXBpVXJsfS9yZXBvcnRBYnVzZWAsXG4gICAgICBvcHRzLFxuICAgICAgYm9keVxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYSB2aWRlbydzIG1ldGFkYXRhXG4gICAqIEBwYXJhbSBib2R5IFRoZSBIVFRQIHJlcXVlc3QgYm9keVxuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgdXBkYXRlKGJvZHk6IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlLCBvcHRzOiBOZ3hZdGRBcGlWaWRlb3NVcGRhdGVPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZT4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cFB1dDxOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSwgTmd4WXRkQXBpVmlkZW9zVXBkYXRlT3B0cywgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2U+KFxuICAgICAgdGhpcy5jb3JlLm5neFl0ZFZpZGVvc0FwaVVybCxcbiAgICAgIG9wdHMsXG4gICAgICBib2R5XG4gICAgKTtcbiAgfVxufVxuIl19