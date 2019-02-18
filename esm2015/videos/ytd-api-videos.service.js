/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCommonService } from 'ngx-ytd-api/common';
export class NgxYtdApiVideosService {
    /**
     * @param {?} common
     */
    constructor(common) {
        this.common = common;
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
     * Deletes a YouTube video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    delete(opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl, this.common.mergeOpts(opts), null, 'delete');
    }
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    getRating(opts) {
        return this.common.sendHttpRequest(`${this.ngxYtdVideosApiUrl}/getRating`, this.common.mergeOpts(opts), null, 'get');
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
        return this.common.sendHttpRequest(this.ngxYtdVideoUploadsApiUrl, this.common.mergeOpts(opts), body, 'post');
    }
    /**
     * Returns a list of videos that match the requested API parameters
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    list(opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl, this.common.mergeOpts(opts), null, 'get');
    }
    /**
     * Add a like or dislike rating to a video or remove a rating from a video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
     * @param {?} opts API parameters for the API
     * @return {?} An observable of the HTTP request
     */
    rate(opts) {
        return this.common.sendHttpRequest(`${this.ngxYtdVideosApiUrl}/rate`, this.common.mergeOpts(opts), null, 'post');
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
        return this.common.sendHttpRequest(`${this.ngxYtdVideosApiUrl}/reportAbuse`, this.common.mergeOpts(opts), body, 'post');
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
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl, this.common.mergeOpts(opts), body, 'put');
    }
}
NgxYtdApiVideosService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxYtdApiVideosService.ctorParameters = () => [
    { type: NgxYtdApiCommonService }
];
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
    NgxYtdApiVideosService.prototype.common;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL3ZpZGVvcy8iLCJzb3VyY2VzIjpbInl0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFpQjVELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFDakMsWUFDVSxNQUE4QjtRQUE5QixXQUFNLEdBQU4sTUFBTSxDQUF3Qjs7OztRQUsvQix1QkFBa0IsR0FBRyw4Q0FBOEMsQ0FBQzs7OztRQUlwRSw2QkFBd0IsR0FBRyxxREFBcUQsQ0FBQztJQVJ0RixDQUFDOzs7Ozs7OztJQWdCTCxNQUFNLENBQUMsSUFBK0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBNEIsSUFBSSxDQUFDLEVBQ3RELElBQUksRUFDSixRQUFRLENBQ1QsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBUUQsU0FBUyxDQUFDLElBQWtDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQ2hDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixZQUFZLEVBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUErQixJQUFJLENBQUMsRUFDekQsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBU0QsTUFBTSxDQUFDLElBQTZCLEVBQUUsSUFBK0I7UUFDbkUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLHdCQUF3QixFQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBNEIsSUFBSSxDQUFDLEVBQ3RELElBQUksRUFDSixNQUFNLENBQ1AsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBUUQsSUFBSSxDQUFDLElBQTZCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQ2hDLElBQUksQ0FBQyxrQkFBa0IsRUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQTBCLElBQUksQ0FBQyxFQUNwRCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQVFELElBQUksQ0FBQyxJQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUNoQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsT0FBTyxFQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBMEIsSUFBSSxDQUFDLEVBQ3BELElBQUksRUFDSixNQUFNLENBQ1AsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztJQVNELFdBQVcsQ0FBQyxJQUFvQyxFQUFFLElBQXFDO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQ2hDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixjQUFjLEVBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFpQyxJQUFJLENBQUMsRUFDM0QsSUFBSSxFQUNKLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBU0QsTUFBTSxDQUFDLElBQTZCLEVBQUUsSUFBK0I7UUFDbkUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBNEIsSUFBSSxDQUFDLEVBQ3RELElBQUksRUFDSixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7OztZQXhIRixVQUFVOzs7O1lBaEJGLHNCQUFzQjs7Ozs7OztJQXdCN0Isb0RBQTZFOzs7OztJQUk3RSwwREFBMEY7Ozs7O0lBVHhGLHdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFl0ZEFwaUNvbW1vblNlcnZpY2UgfSBmcm9tICduZ3gteXRkLWFwaS9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgTmd4WXRkQXBpVmlkZW9zRGVsZXRlT3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0LFxuICBOZ3hZdGRBcGlWaWRlb3NJbnNlcnRPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdCxcbiAgTmd4WXRkQXBpVmlkZW9zUmF0ZU9wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlQm9keSxcbiAgTmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSxcbiAgTmd4WXRkQXBpVmlkZW9zVXBkYXRlT3B0c1xufSBmcm9tICcuL3l0ZC1hcGktdmlkZW9zLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlWaWRlb3NTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21tb246IE5neFl0ZEFwaUNvbW1vblNlcnZpY2VcbiAgKSB7IH1cbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIGZvciB0aGUgVmlkZW9zIEFQSSBvZiB0aGUgWW91VHViZSBEYXRhIHYzIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgbmd4WXRkVmlkZW9zQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zJztcbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIGZvciB0aGUgVmlkZW9zIEFQSSBmb3IgdXBsb2FkaW5nIGEgdmlkZW8gb2YgdGhlIFlvdVR1YmUgRGF0YSB2MyBBUElcbiAgICovXG4gIHJlYWRvbmx5IG5neFl0ZFZpZGVvVXBsb2Fkc0FwaVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS91cGxvYWQveW91dHViZS92My92aWRlb3MnO1xuICAvKipcbiAgICogRGVsZXRlcyBhIFlvdVR1YmUgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvZGVsZXRlIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIGRlbGV0ZShvcHRzOiBOZ3hZdGRBcGlWaWRlb3NEZWxldGVPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PGFueSwgTmd4WXRkQXBpVmlkZW9zRGVsZXRlT3B0cywgYW55PihcbiAgICAgIHRoaXMubmd4WXRkVmlkZW9zQXBpVXJsLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaVZpZGVvc0RlbGV0ZU9wdHM+KG9wdHMpLFxuICAgICAgbnVsbCxcbiAgICAgICdkZWxldGUnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSByYXRpbmdzIHRoYXQgdGhlIGF1dGhvcml6ZWQgdXNlciBnYXZlIHRvIGEgbGlzdCBvZiBzcGVjaWZpZWQgdmlkZW9zXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2dldFJhdGluZyBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBnZXRSYXRpbmcob3B0czogTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxhbnksIE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ09wdHMsIE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ1Jlc3VsdD4oXG4gICAgICBgJHt0aGlzLm5neFl0ZFZpZGVvc0FwaVVybH0vZ2V0UmF0aW5nYCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlT3B0czxOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdPcHRzPihvcHRzKSxcbiAgICAgIG51bGwsXG4gICAgICAnZ2V0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFVwbG9hZHMgYSB2aWRlbyB0byBZb3VUdWJlIGFuZCBvcHRpb25hbGx5IHNldHMgdGhlIHZpZGVvJ3MgbWV0YWRhdGFcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvaW5zZXJ0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEhUVFAgcmVxdWVzdCBib2R5XG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBpbnNlcnQoYm9keTogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2UsIG9wdHM6IE5neFl0ZEFwaVZpZGVvc0luc2VydE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxhbnksIE5neFl0ZEFwaVZpZGVvc0luc2VydE9wdHMsIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlPihcbiAgICAgIHRoaXMubmd4WXRkVmlkZW9VcGxvYWRzQXBpVXJsLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaVZpZGVvc0luc2VydE9wdHM+KG9wdHMpLFxuICAgICAgYm9keSxcbiAgICAgICdwb3N0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHZpZGVvcyB0aGF0IG1hdGNoIHRoZSByZXF1ZXN0ZWQgQVBJIHBhcmFtZXRlcnNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxhbnksIE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzLCBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0PihcbiAgICAgIHRoaXMubmd4WXRkVmlkZW9zQXBpVXJsLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzPihvcHRzKSxcbiAgICAgIG51bGwsXG4gICAgICAnZ2V0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIGxpa2Ugb3IgZGlzbGlrZSByYXRpbmcgdG8gYSB2aWRlbyBvciByZW1vdmUgYSByYXRpbmcgZnJvbSBhIHZpZGVvXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL3JhdGUgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgcmF0ZShvcHRzOiBOZ3hZdGRBcGlWaWRlb3NSYXRlT3B0cyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxhbnksIE5neFl0ZEFwaVZpZGVvc1JhdGVPcHRzLCBhbnk+KFxuICAgICAgYCR7dGhpcy5uZ3hZdGRWaWRlb3NBcGlVcmx9L3JhdGVgLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaVZpZGVvc1JhdGVPcHRzPihvcHRzKSxcbiAgICAgIG51bGwsXG4gICAgICAncG9zdCdcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBSZXBvcnRzIGEgdmlkZW8gZm9yIGhhdmluZyBhYnVzaXZlIGNvbnRlbnRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvcmVwb3J0QWJ1c2UgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gYm9keSBUaGUgSFRUUCByZXF1ZXN0IGJvZHlcbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIHJlcG9ydEFidXNlKGJvZHk6IE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlQm9keSwgb3B0cz86IE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlT3B0cyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZUJvZHksIE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlT3B0cywgYW55PihcbiAgICAgIGAke3RoaXMubmd4WXRkVmlkZW9zQXBpVXJsfS9yZXBvcnRBYnVzZWAsXG4gICAgICB0aGlzLmNvbW1vbi5tZXJnZU9wdHM8Tmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VPcHRzPihvcHRzKSxcbiAgICAgIGJvZHksXG4gICAgICAncG9zdCdcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGVzIGEgdmlkZW8ncyBtZXRhZGF0YVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy91cGRhdGUgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gYm9keSBUaGUgSFRUUCByZXF1ZXN0IGJvZHlcbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIHVwZGF0ZShib2R5OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSwgb3B0czogTmd4WXRkQXBpVmlkZW9zVXBkYXRlT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zUmVzb3VyY2U+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlLCBOZ3hZdGRBcGlWaWRlb3NVcGRhdGVPcHRzLCBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZT4oXG4gICAgICB0aGlzLm5neFl0ZFZpZGVvc0FwaVVybCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlT3B0czxOZ3hZdGRBcGlWaWRlb3NVcGRhdGVPcHRzPihvcHRzKSxcbiAgICAgIGJvZHksXG4gICAgICAncHV0J1xuICAgICk7XG4gIH1cbn1cbiJdfQ==