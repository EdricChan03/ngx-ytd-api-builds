/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCommonService } from 'ngx-ytd-api/common';
var NgxYtdApiCommentThreadsService = /** @class */ (function () {
    function NgxYtdApiCommentThreadsService(common) {
        this.common = common;
        this.ngxYtdApiCommentThreadsApiUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';
    }
    /**
     * Returns a list of comment threads that match the API request parameters
     * @see [CommentThreads: list](https://developers.google.com/youtube/v3/docs/commentThreads/list)
     * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/list#parameters)
     * @see [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/list#response)
     * @see [Examples](https://developers.google.com/youtube/v3/docs/commentThreads/list#examples)
     * @param params Query parameters to be appended to the API endpoint
     * @returns Results of the list as an `Observable`
     */
    /**
     * Returns a list of comment threads that match the API request parameters
     * @see [CommentThreads: list](https://developers.google.com/youtube/v3/docs/commentThreads/list) / [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/list#parameters) / [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/list#response) / [Examples](https://developers.google.com/youtube/v3/docs/commentThreads/list#examples)
     * @param {?} params Query parameters to be appended to the API endpoint
     * @return {?} Results of the list as an `Observable`
     */
    NgxYtdApiCommentThreadsService.prototype.list = /**
     * Returns a list of comment threads that match the API request parameters
     * @see [CommentThreads: list](https://developers.google.com/youtube/v3/docs/commentThreads/list) / [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/list#parameters) / [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/list#response) / [Examples](https://developers.google.com/youtube/v3/docs/commentThreads/list#examples)
     * @param {?} params Query parameters to be appended to the API endpoint
     * @return {?} Results of the list as an `Observable`
     */
    function (params) {
        return this.common.sendHttpRequest(this.ngxYtdApiCommentThreadsApiUrl, this.common.mergeParamsWithStandardParams(params), null, 'get');
    };
    /**
     * Creates a new top-level comment
     * @see [CommentThreads: insert](https://developers.google.com/youtube/v3/docs/commentThreads/insert)
     * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/insert#parameters)
     * @see [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#response)
     * @see [Request body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#request-body)
     * @see [API Explorer demo](https://developers.google.com/youtube/v3/docs/commentThreads/insert?apix=true)
     * @param body The top-level comment to create
     * (See [request body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#request-body) for more info)
     * @param params Parameters for the API
     * @returns The created comment thread
     */
    /**
     * Creates a new top-level comment
     * @see [CommentThreads: insert](https://developers.google.com/youtube/v3/docs/commentThreads/insert) / [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/insert#parameters) / [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#response) / [Request body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#request-body) / [API Explorer demo](https://developers.google.com/youtube/v3/docs/commentThreads/insert?apix=true)
     * @param {?} body The top-level comment to create
     * (See [request body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#request-body) for more info)
     * @param {?} params Parameters for the API
     * @return {?} The created comment thread
     */
    NgxYtdApiCommentThreadsService.prototype.insert = /**
     * Creates a new top-level comment
     * @see [CommentThreads: insert](https://developers.google.com/youtube/v3/docs/commentThreads/insert) / [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/insert#parameters) / [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#response) / [Request body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#request-body) / [API Explorer demo](https://developers.google.com/youtube/v3/docs/commentThreads/insert?apix=true)
     * @param {?} body The top-level comment to create
     * (See [request body](https://developers.google.com/youtube/v3/docs/commentThreads/insert#request-body) for more info)
     * @param {?} params Parameters for the API
     * @return {?} The created comment thread
     */
    function (body, params) {
        return this.common.sendHttpRequest(this.ngxYtdApiCommentThreadsApiUrl, this.common.mergeParamsWithStandardParams(params), body, 'post');
    };
    /**
     * Modifies the top-level comment in a comment thread
     * @see [CommentThreads: update](https://developers.google.com/youtube/v3/docs/commentThreads/update)
     * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/update#parameters)
     * @see [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/update#response)
     * @see [Request body](https://developers.google.com/youtube/v3/docs/commentThreads/update#request-body)
     * @see [API Explorer demo](https://developers.google.com/youtube/v3/docs/commentThreads/update?apix=true)
     * @param body A modified version of the top-level comment
     * @param params Parameters for the API
     * @returns The updated top-level comment
     */
    /**
     * Modifies the top-level comment in a comment thread
     * @see [CommentThreads: update](https://developers.google.com/youtube/v3/docs/commentThreads/update) / [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/update#parameters) / [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/update#response) / [Request body](https://developers.google.com/youtube/v3/docs/commentThreads/update#request-body) / [API Explorer demo](https://developers.google.com/youtube/v3/docs/commentThreads/update?apix=true)
     * @param {?} body A modified version of the top-level comment
     * @param {?} params Parameters for the API
     * @return {?} The updated top-level comment
     */
    NgxYtdApiCommentThreadsService.prototype.update = /**
     * Modifies the top-level comment in a comment thread
     * @see [CommentThreads: update](https://developers.google.com/youtube/v3/docs/commentThreads/update) / [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/update#parameters) / [Response body](https://developers.google.com/youtube/v3/docs/commentThreads/update#response) / [Request body](https://developers.google.com/youtube/v3/docs/commentThreads/update#request-body) / [API Explorer demo](https://developers.google.com/youtube/v3/docs/commentThreads/update?apix=true)
     * @param {?} body A modified version of the top-level comment
     * @param {?} params Parameters for the API
     * @return {?} The updated top-level comment
     */
    function (body, params) {
        return this.common.sendHttpRequest(this.ngxYtdApiCommentThreadsApiUrl, this.common.mergeParamsWithStandardParams(params), body, 'put');
    };
    NgxYtdApiCommentThreadsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxYtdApiCommentThreadsService.ctorParameters = function () { return [
        { type: NgxYtdApiCommonService }
    ]; };
    return NgxYtdApiCommentThreadsService;
}());
export { NgxYtdApiCommentThreadsService };
if (false) {
    /** @type {?} */
    NgxYtdApiCommentThreadsService.prototype.ngxYtdApiCommentThreadsApiUrl;
    /**
     * @type {?}
     * @private
     */
    NgxYtdApiCommentThreadsService.prototype.common;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50LXRocmVhZHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL2NvbW1lbnRUaHJlYWRzLyIsInNvdXJjZXMiOlsieXRkLWFwaS1jb21tZW50LXRocmVhZHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVU1RDtJQUVFLHdDQUFvQixNQUE4QjtRQUE5QixXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUV6QyxrQ0FBNkIsR0FBRyxzREFBc0QsQ0FBQztJQUYxQyxDQUFDO0lBR3ZEOzs7Ozs7OztPQVFHOzs7Ozs7O0lBQ0gsNkNBQUk7Ozs7OztJQUFKLFVBQUssTUFBeUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLDZCQUE2QixFQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUE2QixDQUFvQyxNQUFNLENBQUMsRUFDcEYsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHOzs7Ozs7Ozs7SUFDSCwrQ0FBTTs7Ozs7Ozs7SUFBTixVQUFPLElBQXFDLEVBQUUsTUFBMkM7UUFDdkYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FJaEMsSUFBSSxDQUFDLDZCQUE2QixFQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUE2QixDQUFzQyxNQUFNLENBQUMsRUFDdEYsSUFBSSxFQUNKLE1BQU0sQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7Ozs7Ozs7O0lBQ0wsK0NBQU07Ozs7Ozs7SUFBTixVQUFPLElBQXFDLEVBQUUsTUFBMkM7UUFDdkYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FLaEMsSUFBSSxDQUFDLDZCQUE2QixFQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxFQUNqRCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOztnQkFyRUYsVUFBVTs7OztnQkFWRixzQkFBc0I7O0lBZ0YvQixxQ0FBQztDQUFBLEFBdEVELElBc0VDO1NBckVZLDhCQUE4Qjs7O0lBR3pDLHVFQUFnRzs7Ozs7SUFGcEYsZ0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbW9uU2VydmljZSB9IGZyb20gJ25neC15dGQtYXBpL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBOZ3hZdGRBcGlDb21tZW50VGhyZWFkc0luc2VydFBhcmFtcyxcbiAgTmd4WXRkQXBpQ29tbWVudFRocmVhZHNMaXN0UGFyYW1zLFxuICBOZ3hZdGRBcGlDb21tZW50VGhyZWFkc0xpc3RSZXNwb25zZSxcbiAgTmd4WXRkQXBpQ29tbWVudFRocmVhZHNSZXNvdXJjZSxcbiAgTmd4WXRkQXBpQ29tbWVudFRocmVhZHNVcGRhdGVQYXJhbXNcbn0gZnJvbSAnLi95dGQtYXBpLWNvbW1lbnQtdGhyZWFkcy5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29tbWVudFRocmVhZHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tb246IE5neFl0ZEFwaUNvbW1vblNlcnZpY2UpIHsgfVxuXG4gIHJlYWRvbmx5IG5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY29tbWVudFRocmVhZHMnO1xuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgY29tbWVudCB0aHJlYWRzIHRoYXQgbWF0Y2ggdGhlIEFQSSByZXF1ZXN0IHBhcmFtZXRlcnNcbiAgICogQHNlZSBbQ29tbWVudFRocmVhZHM6IGxpc3RdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy9saXN0KVxuICAgKiBAc2VlIFtQYXJhbWV0ZXJzIHRhYmxlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvbGlzdCNwYXJhbWV0ZXJzKVxuICAgKiBAc2VlIFtSZXNwb25zZSBib2R5XShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvbGlzdCNyZXNwb25zZSlcbiAgICogQHNlZSBbRXhhbXBsZXNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy9saXN0I2V4YW1wbGVzKVxuICAgKiBAcGFyYW0gcGFyYW1zIFF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBsaXN0IGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgbGlzdChwYXJhbXM6IE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzTGlzdFBhcmFtcyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpQ29tbWVudFRocmVhZHNMaXN0UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PG51bGwsIE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzTGlzdFBhcmFtcywgTmd4WXRkQXBpQ29tbWVudFRocmVhZHNMaXN0UmVzcG9uc2U+KFxuICAgICAgdGhpcy5uZ3hZdGRBcGlDb21tZW50VGhyZWFkc0FwaVVybCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlUGFyYW1zV2l0aFN0YW5kYXJkUGFyYW1zPE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzTGlzdFBhcmFtcz4ocGFyYW1zKSxcbiAgICAgIG51bGwsXG4gICAgICAnZ2V0J1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyB0b3AtbGV2ZWwgY29tbWVudFxuICAgKiBAc2VlIFtDb21tZW50VGhyZWFkczogaW5zZXJ0XShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvaW5zZXJ0KVxuICAgKiBAc2VlIFtQYXJhbWV0ZXJzIHRhYmxlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvaW5zZXJ0I3BhcmFtZXRlcnMpXG4gICAqIEBzZWUgW1Jlc3BvbnNlIGJvZHldKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy9pbnNlcnQjcmVzcG9uc2UpXG4gICAqIEBzZWUgW1JlcXVlc3QgYm9keV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzL2luc2VydCNyZXF1ZXN0LWJvZHkpXG4gICAqIEBzZWUgW0FQSSBFeHBsb3JlciBkZW1vXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvaW5zZXJ0P2FwaXg9dHJ1ZSlcbiAgICogQHBhcmFtIGJvZHkgVGhlIHRvcC1sZXZlbCBjb21tZW50IHRvIGNyZWF0ZVxuICAgKiAoU2VlIFtyZXF1ZXN0IGJvZHldKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy9pbnNlcnQjcmVxdWVzdC1ib2R5KSBmb3IgbW9yZSBpbmZvKVxuICAgKiBAcGFyYW0gcGFyYW1zIFBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybnMgVGhlIGNyZWF0ZWQgY29tbWVudCB0aHJlYWRcbiAgICovXG4gIGluc2VydChib2R5OiBOZ3hZdGRBcGlDb21tZW50VGhyZWFkc1Jlc291cmNlLCBwYXJhbXM6IE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzSW5zZXJ0UGFyYW1zKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlDb21tZW50VGhyZWFkc1Jlc291cmNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxcbiAgICBOZ3hZdGRBcGlDb21tZW50VGhyZWFkc1Jlc291cmNlLFxuICAgIE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzSW5zZXJ0UGFyYW1zLFxuICAgIE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzUmVzb3VyY2U+KFxuICAgICAgdGhpcy5uZ3hZdGRBcGlDb21tZW50VGhyZWFkc0FwaVVybCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlUGFyYW1zV2l0aFN0YW5kYXJkUGFyYW1zPE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzSW5zZXJ0UGFyYW1zPihwYXJhbXMpLFxuICAgICAgYm9keSxcbiAgICAgICdwb3N0J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb2RpZmllcyB0aGUgdG9wLWxldmVsIGNvbW1lbnQgaW4gYSBjb21tZW50IHRocmVhZFxuICAgICAqIEBzZWUgW0NvbW1lbnRUaHJlYWRzOiB1cGRhdGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy91cGRhdGUpXG4gICAgICogQHNlZSBbUGFyYW1ldGVycyB0YWJsZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzL3VwZGF0ZSNwYXJhbWV0ZXJzKVxuICAgICAqIEBzZWUgW1Jlc3BvbnNlIGJvZHldKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy91cGRhdGUjcmVzcG9uc2UpXG4gICAgICogQHNlZSBbUmVxdWVzdCBib2R5XShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvdXBkYXRlI3JlcXVlc3QtYm9keSlcbiAgICAgKiBAc2VlIFtBUEkgRXhwbG9yZXIgZGVtb10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzL3VwZGF0ZT9hcGl4PXRydWUpXG4gICAgICogQHBhcmFtIGJvZHkgQSBtb2RpZmllZCB2ZXJzaW9uIG9mIHRoZSB0b3AtbGV2ZWwgY29tbWVudFxuICAgICAqIEBwYXJhbSBwYXJhbXMgUGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgICAqIEByZXR1cm5zIFRoZSB1cGRhdGVkIHRvcC1sZXZlbCBjb21tZW50XG4gICAgICovXG4gIHVwZGF0ZShib2R5OiBOZ3hZdGRBcGlDb21tZW50VGhyZWFkc1Jlc291cmNlLCBwYXJhbXM6IE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzVXBkYXRlUGFyYW1zKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlDb21tZW50VGhyZWFkc1Jlc291cmNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxcbiAgICAgIE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzUmVzb3VyY2UsXG4gICAgICBOZ3hZdGRBcGlDb21tZW50VGhyZWFkc1VwZGF0ZVBhcmFtcyxcbiAgICAgIE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzUmVzb3VyY2VcbiAgICA+KFxuICAgICAgdGhpcy5uZ3hZdGRBcGlDb21tZW50VGhyZWFkc0FwaVVybCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlUGFyYW1zV2l0aFN0YW5kYXJkUGFyYW1zKHBhcmFtcyksXG4gICAgICBib2R5LFxuICAgICAgJ3B1dCdcbiAgICApO1xuICB9XG59XG4iXX0=