import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NgxYtdApiCommonService } from 'ngx-ytd-api/common';
var NgxYtdApiVideosService = /** @class */ (function () {
    function NgxYtdApiVideosService(common) {
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
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.delete = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl, this.common.mergeOpts(opts), null, 'delete');
    };
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.getRating = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl + "/getRating", this.common.mergeOpts(opts), null, 'get');
    };
    /**
     * Uploads a video to YouTube and optionally sets the video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.insert = function (body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideoUploadsApiUrl, this.common.mergeOpts(opts), body, 'post');
    };
    /**
     * Returns a list of videos that match the requested API parameters
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list for more info
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.list = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl, this.common.mergeOpts(opts), null, 'get');
    };
    /**
     * Add a like or dislike rating to a video or remove a rating from a video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.rate = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl + "/rate", this.common.mergeOpts(opts), null, 'post');
    };
    /**
     * Reports a video for having abusive content
     *
     * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.reportAbuse = function (body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl + "/reportAbuse", this.common.mergeOpts(opts), body, 'post');
    };
    /**
     * Updates a video's metadata
     *
     * See https://developers.google.com/youtube/v3/docs/videos/update for more info
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    NgxYtdApiVideosService.prototype.update = function (body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl, this.common.mergeOpts(opts), body, 'put');
    };
    NgxYtdApiVideosService.ctorParameters = function () { return [
        { type: NgxYtdApiCommonService }
    ]; };
    NgxYtdApiVideosService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [NgxYtdApiCommonService])
    ], NgxYtdApiVideosService);
    return NgxYtdApiVideosService;
}());
export { NgxYtdApiVideosService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL3ZpZGVvcy8iLCJzb3VyY2VzIjpbInl0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFpQjVEO0lBQ0UsZ0NBQ1UsTUFBOEI7UUFBOUIsV0FBTSxHQUFOLE1BQU0sQ0FBd0I7UUFFeEM7O1dBRUc7UUFDTSx1QkFBa0IsR0FBRyw4Q0FBOEMsQ0FBQztRQUM3RTs7V0FFRztRQUNNLDZCQUF3QixHQUFHLHFEQUFxRCxDQUFDO0lBUnRGLENBQUM7SUFTTDs7Ozs7O09BTUc7SUFDSCx1Q0FBTSxHQUFOLFVBQU8sSUFBK0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBNEIsSUFBSSxDQUFDLEVBQ3RELElBQUksRUFDSixRQUFRLENBQ1QsQ0FBQztJQUNKLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSCwwQ0FBUyxHQUFULFVBQVUsSUFBa0M7UUFDMUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDN0IsSUFBSSxDQUFDLGtCQUFrQixlQUFZLEVBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUErQixJQUFJLENBQUMsRUFDekQsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQztJQUNEOzs7Ozs7O09BT0c7SUFDSCx1Q0FBTSxHQUFOLFVBQU8sSUFBNkIsRUFBRSxJQUErQjtRQUNuRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUNoQyxJQUFJLENBQUMsd0JBQXdCLEVBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUE0QixJQUFJLENBQUMsRUFDdEQsSUFBSSxFQUNKLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNILHFDQUFJLEdBQUosVUFBSyxJQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUNoQyxJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUEwQixJQUFJLENBQUMsRUFDcEQsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNILHFDQUFJLEdBQUosVUFBSyxJQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUM3QixJQUFJLENBQUMsa0JBQWtCLFVBQU8sRUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQTBCLElBQUksQ0FBQyxFQUNwRCxJQUFJLEVBQ0osTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRztJQUNILDRDQUFXLEdBQVgsVUFBWSxJQUFvQyxFQUFFLElBQXFDO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQzdCLElBQUksQ0FBQyxrQkFBa0IsaUJBQWMsRUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQWlDLElBQUksQ0FBQyxFQUMzRCxJQUFJLEVBQ0osTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRztJQUNILHVDQUFNLEdBQU4sVUFBTyxJQUE2QixFQUFFLElBQStCO1FBQ25FLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQ2hDLElBQUksQ0FBQyxrQkFBa0IsRUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQTRCLElBQUksQ0FBQyxFQUN0RCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOztnQkFySGlCLHNCQUFzQjs7SUFGN0Isc0JBQXNCO1FBRGxDLFVBQVUsRUFBRTtpREFHTyxzQkFBc0I7T0FGN0Isc0JBQXNCLENBd0hsQztJQUFELDZCQUFDO0NBQUEsQUF4SEQsSUF3SEM7U0F4SFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbW9uU2VydmljZSB9IGZyb20gJ25neC15dGQtYXBpL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBOZ3hZdGRBcGlWaWRlb3NEZWxldGVPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdSZXN1bHQsXG4gIE5neFl0ZEFwaVZpZGVvc0luc2VydE9wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0LFxuICBOZ3hZdGRBcGlWaWRlb3NSYXRlT3B0cyxcbiAgTmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VCb2R5LFxuICBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZU9wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlLFxuICBOZ3hZdGRBcGlWaWRlb3NVcGRhdGVPcHRzXG59IGZyb20gJy4veXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVZpZGVvc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbW1vbjogTmd4WXRkQXBpQ29tbW9uU2VydmljZVxuICApIHsgfVxuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBWaWRlb3MgQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRWaWRlb3NBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My92aWRlb3MnO1xuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBWaWRlb3MgQVBJIGZvciB1cGxvYWRpbmcgYSB2aWRlbyBvZiB0aGUgWW91VHViZSBEYXRhIHYzIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgbmd4WXRkVmlkZW9VcGxvYWRzQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3VwbG9hZC95b3V0dWJlL3YzL3ZpZGVvcyc7XG4gIC8qKlxuICAgKiBEZWxldGVzIGEgWW91VHViZSB2aWRlb1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9kZWxldGUgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgZGVsZXRlKG9wdHM6IE5neFl0ZEFwaVZpZGVvc0RlbGV0ZU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvbW1vbi5zZW5kSHR0cFJlcXVlc3Q8YW55LCBOZ3hZdGRBcGlWaWRlb3NEZWxldGVPcHRzLCBhbnk+KFxuICAgICAgdGhpcy5uZ3hZdGRWaWRlb3NBcGlVcmwsXG4gICAgICB0aGlzLmNvbW1vbi5tZXJnZU9wdHM8Tmd4WXRkQXBpVmlkZW9zRGVsZXRlT3B0cz4ob3B0cyksXG4gICAgICBudWxsLFxuICAgICAgJ2RlbGV0ZSdcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHJhdGluZ3MgdGhhdCB0aGUgYXV0aG9yaXplZCB1c2VyIGdhdmUgdG8gYSBsaXN0IG9mIHNwZWNpZmllZCB2aWRlb3NcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvZ2V0UmF0aW5nIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIGdldFJhdGluZyhvcHRzOiBOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PGFueSwgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cywgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0PihcbiAgICAgIGAke3RoaXMubmd4WXRkVmlkZW9zQXBpVXJsfS9nZXRSYXRpbmdgLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ09wdHM+KG9wdHMpLFxuICAgICAgbnVsbCxcbiAgICAgICdnZXQnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogVXBsb2FkcyBhIHZpZGVvIHRvIFlvdVR1YmUgYW5kIG9wdGlvbmFsbHkgc2V0cyB0aGUgdmlkZW8ncyBtZXRhZGF0YVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9pbnNlcnQgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gYm9keSBUaGUgSFRUUCByZXF1ZXN0IGJvZHlcbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIGluc2VydChib2R5OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSwgb3B0czogTmd4WXRkQXBpVmlkZW9zSW5zZXJ0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zUmVzb3VyY2U+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PGFueSwgTmd4WXRkQXBpVmlkZW9zSW5zZXJ0T3B0cywgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2U+KFxuICAgICAgdGhpcy5uZ3hZdGRWaWRlb1VwbG9hZHNBcGlVcmwsXG4gICAgICB0aGlzLmNvbW1vbi5tZXJnZU9wdHM8Tmd4WXRkQXBpVmlkZW9zSW5zZXJ0T3B0cz4ob3B0cyksXG4gICAgICBib2R5LFxuICAgICAgJ3Bvc3QnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgdmlkZW9zIHRoYXQgbWF0Y2ggdGhlIHJlcXVlc3RlZCBBUEkgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIGxpc3Qob3B0czogTmd4WXRkQXBpVmlkZW9zTGlzdE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PGFueSwgTmd4WXRkQXBpVmlkZW9zTGlzdE9wdHMsIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQ+KFxuICAgICAgdGhpcy5uZ3hZdGRWaWRlb3NBcGlVcmwsXG4gICAgICB0aGlzLmNvbW1vbi5tZXJnZU9wdHM8Tmd4WXRkQXBpVmlkZW9zTGlzdE9wdHM+KG9wdHMpLFxuICAgICAgbnVsbCxcbiAgICAgICdnZXQnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogQWRkIGEgbGlrZSBvciBkaXNsaWtlIHJhdGluZyB0byBhIHZpZGVvIG9yIHJlbW92ZSBhIHJhdGluZyBmcm9tIGEgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvcmF0ZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gQW4gb2JzZXJ2YWJsZSBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICByYXRlKG9wdHM6IE5neFl0ZEFwaVZpZGVvc1JhdGVPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PGFueSwgTmd4WXRkQXBpVmlkZW9zUmF0ZU9wdHMsIGFueT4oXG4gICAgICBgJHt0aGlzLm5neFl0ZFZpZGVvc0FwaVVybH0vcmF0ZWAsXG4gICAgICB0aGlzLmNvbW1vbi5tZXJnZU9wdHM8Tmd4WXRkQXBpVmlkZW9zUmF0ZU9wdHM+KG9wdHMpLFxuICAgICAgbnVsbCxcbiAgICAgICdwb3N0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFJlcG9ydHMgYSB2aWRlbyBmb3IgaGF2aW5nIGFidXNpdmUgY29udGVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9yZXBvcnRBYnVzZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBib2R5IFRoZSBIVFRQIHJlcXVlc3QgYm9keVxuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgcmVwb3J0QWJ1c2UoYm9keTogTmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VCb2R5LCBvcHRzPzogTmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PE5neFl0ZEFwaVZpZGVvc1JlcG9ydEFidXNlQm9keSwgTmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VPcHRzLCBhbnk+KFxuICAgICAgYCR7dGhpcy5uZ3hZdGRWaWRlb3NBcGlVcmx9L3JlcG9ydEFidXNlYCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlT3B0czxOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZU9wdHM+KG9wdHMpLFxuICAgICAgYm9keSxcbiAgICAgICdwb3N0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYSB2aWRlbydzIG1ldGFkYXRhXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL3VwZGF0ZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBib2R5IFRoZSBIVFRQIHJlcXVlc3QgYm9keVxuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIEFuIG9ic2VydmFibGUgb2YgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgdXBkYXRlKGJvZHk6IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlLCBvcHRzOiBOZ3hZdGRBcGlWaWRlb3NVcGRhdGVPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZT4ge1xuICAgIHJldHVybiB0aGlzLmNvbW1vbi5zZW5kSHR0cFJlcXVlc3Q8Tmd4WXRkQXBpVmlkZW9zUmVzb3VyY2UsIE5neFl0ZEFwaVZpZGVvc1VwZGF0ZU9wdHMsIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlPihcbiAgICAgIHRoaXMubmd4WXRkVmlkZW9zQXBpVXJsLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaVZpZGVvc1VwZGF0ZU9wdHM+KG9wdHMpLFxuICAgICAgYm9keSxcbiAgICAgICdwdXQnXG4gICAgKTtcbiAgfVxufVxuIl19