/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    delete(opts) {
        return this.core.createHttpDelete(this.core.ngxYtdVideosApiUrl, opts);
    }
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    getRating(opts) {
        return this.core.createHttpGet(`${this.core.ngxYtdVideosApiUrl}/getRating`, opts);
    }
    /**
     * Uploads a video to YouTube and optionally sets the video's metadata
     * @param {?} body The HTTP request body
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    insert(body, opts) {
        return this.core.createHttpPost(this.core.ngxYtdVideoUploadsApiUrl, opts, body);
    }
    /**
     * Returns a list of videos that match the requested API parameters
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    list(opts) {
        return this.core.createHttpGet(`${this.core.ngxYtdVideosApiUrl}`, opts);
    }
    /**
     * Add a like or dislike rating to a video or remove a rating from a video
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    rate(opts) {
        return this.core.createHttpPost(`${this.core.ngxYtdVideosApiUrl}/rate`, opts);
    }
    /**
     * Reports a video for having abusive content
     * @param {?} body The HTTP request body
     * @param {?=} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    reportAbuse(body, opts) {
        return this.core.createHttpPost(`${this.core.ngxYtdVideosApiUrl}/reportAbuse`, opts, body);
    }
    /**
     * Updates a video's metadata
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
    /** @type {?} */
    NgxYtdApiVideosService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsidmlkZW9zL3l0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFlM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUt4RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBQ2pDLFlBQ1UsSUFBMEI7UUFBMUIsU0FBSSxHQUFKLElBQUksQ0FBc0I7SUFDaEMsQ0FBQzs7Ozs7O0lBTUwsTUFBTSxDQUFDLElBQStCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBNEIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7Ozs7SUFNRCxTQUFTLENBQUMsSUFBa0M7UUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FDNUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixZQUFZLEVBQzNDLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQU9ELE1BQU0sQ0FBQyxJQUE2QixFQUFFLElBQStCO1FBQ25FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQ2xDLElBQUksRUFDSixJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7Ozs7OztJQU1ELElBQUksQ0FBQyxJQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFxRCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5SCxDQUFDOzs7Ozs7SUFNRCxJQUFJLENBQUMsSUFBNkI7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FDN0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixPQUFPLEVBQ3RDLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQU9ELFdBQVcsQ0FBQyxJQUFvQyxFQUFFLElBQXFDO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQzdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsY0FBYyxFQUM3QyxJQUFJLEVBQ0osSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBT0QsTUFBTSxDQUFDLElBQTZCLEVBQUUsSUFBK0I7UUFDbkUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFDNUIsSUFBSSxFQUNKLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7O1lBbkZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLG9CQUFvQjs7Ozs7SUFPekIsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTmd4WXRkQXBpVmlkZW9zRGVsZXRlT3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0LFxuICBOZ3hZdGRBcGlWaWRlb3NJbnNlcnRPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdCxcbiAgTmd4WXRkQXBpVmlkZW9zUmF0ZU9wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlQm9keSxcbiAgTmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSxcbiAgTmd4WXRkQXBpVmlkZW9zVXBkYXRlT3B0c1xufSBmcm9tICcuL3l0ZC1hcGktdmlkZW9zLmludGVyZmFjZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb3JlU2VydmljZSB9IGZyb20gJ25neC15dGQtYXBpL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlWaWRlb3NTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlOiBOZ3hZdGRBcGlDb3JlU2VydmljZVxuICApIHsgfVxuICAvKipcbiAgICogRGVsZXRlcyBhIFlvdVR1YmUgdmlkZW9cbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIGRlbGV0ZShvcHRzOiBOZ3hZdGRBcGlWaWRlb3NEZWxldGVPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb3JlLmNyZWF0ZUh0dHBEZWxldGU8Tmd4WXRkQXBpVmlkZW9zRGVsZXRlT3B0cz4odGhpcy5jb3JlLm5neFl0ZFZpZGVvc0FwaVVybCwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgcmF0aW5ncyB0aGF0IHRoZSBhdXRob3JpemVkIHVzZXIgZ2F2ZSB0byBhIGxpc3Qgb2Ygc3BlY2lmaWVkIHZpZGVvc1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgZ2V0UmF0aW5nKG9wdHM6IE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ09wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ1Jlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cEdldDxOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdSZXN1bHQsIE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ09wdHM+KFxuICAgICAgYCR7dGhpcy5jb3JlLm5neFl0ZFZpZGVvc0FwaVVybH0vZ2V0UmF0aW5nYCxcbiAgICAgIG9wdHNcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBVcGxvYWRzIGEgdmlkZW8gdG8gWW91VHViZSBhbmQgb3B0aW9uYWxseSBzZXRzIHRoZSB2aWRlbydzIG1ldGFkYXRhXG4gICAqIEBwYXJhbSBib2R5IFRoZSBIVFRQIHJlcXVlc3QgYm9keVxuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgaW5zZXJ0KGJvZHk6IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlLCBvcHRzOiBOZ3hZdGRBcGlWaWRlb3NJbnNlcnRPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZT4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cFBvc3Q8Tmd4WXRkQXBpVmlkZW9zSW5zZXJ0T3B0cywgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2U+KFxuICAgICAgdGhpcy5jb3JlLm5neFl0ZFZpZGVvVXBsb2Fkc0FwaVVybCxcbiAgICAgIG9wdHMsXG4gICAgICBib2R5XG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgdmlkZW9zIHRoYXQgbWF0Y2ggdGhlIHJlcXVlc3RlZCBBUEkgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cEdldDxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0LCBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cz4oYCR7dGhpcy5jb3JlLm5neFl0ZFZpZGVvc0FwaVVybH1gLCBvcHRzKTtcbiAgfVxuICAvKipcbiAgICogQWRkIGEgbGlrZSBvciBkaXNsaWtlIHJhdGluZyB0byBhIHZpZGVvIG9yIHJlbW92ZSBhIHJhdGluZyBmcm9tIGEgdmlkZW9cbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIHJhdGUob3B0czogTmd4WXRkQXBpVmlkZW9zUmF0ZU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cFBvc3Q8Tmd4WXRkQXBpVmlkZW9zUmF0ZU9wdHMsIGFueT4oXG4gICAgICBgJHt0aGlzLmNvcmUubmd4WXRkVmlkZW9zQXBpVXJsfS9yYXRlYCxcbiAgICAgIG9wdHNcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBSZXBvcnRzIGEgdmlkZW8gZm9yIGhhdmluZyBhYnVzaXZlIGNvbnRlbnRcbiAgICogQHBhcmFtIGJvZHkgVGhlIEhUVFAgcmVxdWVzdCBib2R5XG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICByZXBvcnRBYnVzZShib2R5OiBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZUJvZHksIG9wdHM/OiBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cFBvc3Q8Tmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VPcHRzLCBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZUJvZHk+KFxuICAgICAgYCR7dGhpcy5jb3JlLm5neFl0ZFZpZGVvc0FwaVVybH0vcmVwb3J0QWJ1c2VgLFxuICAgICAgb3B0cyxcbiAgICAgIGJvZHlcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGVzIGEgdmlkZW8ncyBtZXRhZGF0YVxuICAgKiBAcGFyYW0gYm9keSBUaGUgSFRUUCByZXF1ZXN0IGJvZHlcbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIHVwZGF0ZShib2R5OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSwgb3B0czogTmd4WXRkQXBpVmlkZW9zVXBkYXRlT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zUmVzb3VyY2U+IHtcbiAgICByZXR1cm4gdGhpcy5jb3JlLmNyZWF0ZUh0dHBQdXQ8Tmd4WXRkQXBpVmlkZW9zUmVzb3VyY2UsIE5neFl0ZEFwaVZpZGVvc1VwZGF0ZU9wdHMsIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlPihcbiAgICAgIHRoaXMuY29yZS5uZ3hZdGRWaWRlb3NBcGlVcmwsXG4gICAgICBvcHRzLFxuICAgICAgYm9keVxuICAgICk7XG4gIH1cbn1cbiJdfQ==