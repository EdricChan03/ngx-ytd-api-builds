/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/ytd-api-core.service";
export class NgxYtdApiVideosService {
    /**
     * @param {?} core
     */
    constructor(core) {
        this.core = core;
    }
    /**
     * Deletes a YouTube video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    delete(opts) {
        return this.core.createHttpDelete(this.core.ngxYtdVideosApiUrl, opts);
    }
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    getRating(opts) {
        return this.core.createHttpGet(`${this.core.ngxYtdVideosApiUrl}/getRating`, opts);
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
        return this.core.createHttpPost(this.core.ngxYtdVideoUploadsApiUrl, opts, body);
    }
    /**
     * Returns a list of videos that match the requested API parameters
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    list(opts) {
        return this.core.createHttpGet(`${this.core.ngxYtdVideosApiUrl}`, opts);
    }
    /**
     * Add a like or dislike rating to a video or remove a rating from a video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    rate(opts) {
        return this.core.createHttpPost(`${this.core.ngxYtdVideosApiUrl}/rate`, opts);
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
        return this.core.createHttpPost(`${this.core.ngxYtdVideosApiUrl}/reportAbuse`, opts, body);
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
        return this.core.createHttpPut(this.core.ngxYtdVideosApiUrl, opts, body);
    }
}
NgxYtdApiVideosService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxYtdApiVideosService.ctorParameters = () => [
    { type: NgxYtdApiCoreService }
];
/** @nocollapse */ NgxYtdApiVideosService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiVideosService_Factory() { return new NgxYtdApiVideosService(i0.inject(i1.NgxYtdApiCoreService)); }, token: NgxYtdApiVideosService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxYtdApiVideosService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsidmlkZW9zL3l0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQW1CeEQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUNqQyxZQUNVLElBQTBCO1FBQTFCLFNBQUksR0FBSixJQUFJLENBQXNCO0lBQ2hDLENBQUM7Ozs7Ozs7O0lBUUwsTUFBTSxDQUFDLElBQStCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBNEIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7Ozs7OztJQVFELFNBQVMsQ0FBQyxJQUFrQztRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUM1QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLFlBQVksRUFDM0MsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUFTRCxNQUFNLENBQUMsSUFBNkIsRUFBRSxJQUErQjtRQUNuRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUNsQyxJQUFJLEVBQ0osSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQVFELElBQUksQ0FBQyxJQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFxRCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5SCxDQUFDOzs7Ozs7OztJQVFELElBQUksQ0FBQyxJQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUM3QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLE9BQU8sRUFDdEMsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUFTRCxXQUFXLENBQUMsSUFBb0MsRUFBRSxJQUFxQztRQUNyRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUM3QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLGNBQWMsRUFDN0MsSUFBSSxFQUNKLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBU0QsTUFBTSxDQUFDLElBQTZCLEVBQUUsSUFBK0I7UUFDbkUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFDNUIsSUFBSSxFQUNKLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7O1lBakdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWxCUSxvQkFBb0I7Ozs7Ozs7O0lBcUJ6QixzQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb3JlU2VydmljZSB9IGZyb20gJ25neC15dGQtYXBpL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgTmd4WXRkQXBpVmlkZW9zRGVsZXRlT3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0LFxuICBOZ3hZdGRBcGlWaWRlb3NJbnNlcnRPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdCxcbiAgTmd4WXRkQXBpVmlkZW9zUmF0ZU9wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlQm9keSxcbiAgTmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSxcbiAgTmd4WXRkQXBpVmlkZW9zVXBkYXRlT3B0c1xufSBmcm9tICcuL3l0ZC1hcGktdmlkZW9zLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVZpZGVvc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmU6IE5neFl0ZEFwaUNvcmVTZXJ2aWNlXG4gICkgeyB9XG4gIC8qKlxuICAgKiBEZWxldGVzIGEgWW91VHViZSB2aWRlb1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9kZWxldGUgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgZGVsZXRlKG9wdHM6IE5neFl0ZEFwaVZpZGVvc0RlbGV0ZU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cERlbGV0ZTxOZ3hZdGRBcGlWaWRlb3NEZWxldGVPcHRzPih0aGlzLmNvcmUubmd4WXRkVmlkZW9zQXBpVXJsLCBvcHRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSByYXRpbmdzIHRoYXQgdGhlIGF1dGhvcml6ZWQgdXNlciBnYXZlIHRvIGEgbGlzdCBvZiBzcGVjaWZpZWQgdmlkZW9zXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2dldFJhdGluZyBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBnZXRSYXRpbmcob3B0czogTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5jcmVhdGVIdHRwR2V0PE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ1Jlc3VsdCwgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cz4oXG4gICAgICBgJHt0aGlzLmNvcmUubmd4WXRkVmlkZW9zQXBpVXJsfS9nZXRSYXRpbmdgLFxuICAgICAgb3B0c1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFVwbG9hZHMgYSB2aWRlbyB0byBZb3VUdWJlIGFuZCBvcHRpb25hbGx5IHNldHMgdGhlIHZpZGVvJ3MgbWV0YWRhdGFcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvaW5zZXJ0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEhUVFAgcmVxdWVzdCBib2R5XG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBpbnNlcnQoYm9keTogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2UsIG9wdHM6IE5neFl0ZEFwaVZpZGVvc0luc2VydE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5jcmVhdGVIdHRwUG9zdDxOZ3hZdGRBcGlWaWRlb3NJbnNlcnRPcHRzLCBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZT4oXG4gICAgICB0aGlzLmNvcmUubmd4WXRkVmlkZW9VcGxvYWRzQXBpVXJsLFxuICAgICAgb3B0cyxcbiAgICAgIGJvZHlcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiB2aWRlb3MgdGhhdCBtYXRjaCB0aGUgcmVxdWVzdGVkIEFQSSBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cEdldDxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0LCBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cz4oYCR7dGhpcy5jb3JlLm5neFl0ZFZpZGVvc0FwaVVybH1gLCBvcHRzKTtcbiAgfVxuICAvKipcbiAgICogQWRkIGEgbGlrZSBvciBkaXNsaWtlIHJhdGluZyB0byBhIHZpZGVvIG9yIHJlbW92ZSBhIHJhdGluZyBmcm9tIGEgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvcmF0ZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICByYXRlKG9wdHM6IE5neFl0ZEFwaVZpZGVvc1JhdGVPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb3JlLmNyZWF0ZUh0dHBQb3N0PE5neFl0ZEFwaVZpZGVvc1JhdGVPcHRzLCBhbnk+KFxuICAgICAgYCR7dGhpcy5jb3JlLm5neFl0ZFZpZGVvc0FwaVVybH0vcmF0ZWAsXG4gICAgICBvcHRzXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmVwb3J0cyBhIHZpZGVvIGZvciBoYXZpbmcgYWJ1c2l2ZSBjb250ZW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL3JlcG9ydEFidXNlIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEhUVFAgcmVxdWVzdCBib2R5XG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICByZXBvcnRBYnVzZShib2R5OiBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZUJvZHksIG9wdHM/OiBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cFBvc3Q8Tmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VPcHRzLCBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZUJvZHk+KFxuICAgICAgYCR7dGhpcy5jb3JlLm5neFl0ZFZpZGVvc0FwaVVybH0vcmVwb3J0QWJ1c2VgLFxuICAgICAgb3B0cyxcbiAgICAgIGJvZHlcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGVzIGEgdmlkZW8ncyBtZXRhZGF0YVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy91cGRhdGUgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gYm9keSBUaGUgSFRUUCByZXF1ZXN0IGJvZHlcbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIHVwZGF0ZShib2R5OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSwgb3B0czogTmd4WXRkQXBpVmlkZW9zVXBkYXRlT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zUmVzb3VyY2U+IHtcbiAgICByZXR1cm4gdGhpcy5jb3JlLmNyZWF0ZUh0dHBQdXQ8Tmd4WXRkQXBpVmlkZW9zUmVzb3VyY2UsIE5neFl0ZEFwaVZpZGVvc1VwZGF0ZU9wdHMsIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlPihcbiAgICAgIHRoaXMuY29yZS5uZ3hZdGRWaWRlb3NBcGlVcmwsXG4gICAgICBvcHRzLFxuICAgICAgYm9keVxuICAgICk7XG4gIH1cbn1cbiJdfQ==