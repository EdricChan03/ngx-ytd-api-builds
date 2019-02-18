/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCommonService } from 'ngx-ytd-api/common';
var NgxYtdApiCommentsService = /** @class */ (function () {
    function NgxYtdApiCommentsService(common) {
        this.common = common;
        /**
         * The API URL for the Comments API of the YouTube Data v3 API
         */
        this.ngxYtdCommentsApiUrl = 'https://www.googleapis.com/youtube/v3/comments';
    }
    /**
     * Deletes a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
     * @param opts Options for the API
     * @return Results of the deletion as an `Observable`
     */
    /**
     * Deletes a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the deletion as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.delete = /**
     * Deletes a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the deletion as an `Observable`
     */
    function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), null, 'delete');
    };
    /**
     * Creates a reply to an existing comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
     * @param body The API body
     * @param opts Options for the API
     * @return Results of the creation as an `Observable`
     */
    /**
     * Creates a reply to an existing comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
     * @param {?} body The API body
     * @param {?} opts Options for the API
     * @return {?} Results of the creation as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.insert = /**
     * Creates a reply to an existing comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
     * @param {?} body The API body
     * @param {?} opts Options for the API
     * @return {?} Results of the creation as an `Observable`
     */
    function (body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), body, 'post');
    };
    /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param opts Options for the API
     * @return Results of the request as an `Observable`
     */
    /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the request as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.list = /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the request as an `Observable`
     */
    function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), null, 'get');
    };
    /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param opts Options for the API
     * @return Results of the request as an `Observable`
     */
    /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the request as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.markAsSpam = /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the request as an `Observable`
     */
    function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl + "/markAsSpam", this.common.mergeOpts(opts), null, 'post');
    };
    /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param opts Options for the API
     * @return Results of the request as an `Observable`
     */
    /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the request as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.setModerationStatus = /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the request as an `Observable`
     */
    function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl + "/setModerationStatus", this.common.mergeOpts(opts), null, 'post');
    };
    /**
     * Modifies a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/update for more info
     * @param body The API body
     * @param opts Options for the API
     * @return Results of the update as an `Observable`
     */
    /**
     * Modifies a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/update for more info
     * @param {?} body The API body
     * @param {?} opts Options for the API
     * @return {?} Results of the update as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.update = /**
     * Modifies a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/update for more info
     * @param {?} body The API body
     * @param {?} opts Options for the API
     * @return {?} Results of the update as an `Observable`
     */
    function (body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), body, 'put');
    };
    NgxYtdApiCommentsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxYtdApiCommentsService.ctorParameters = function () { return [
        { type: NgxYtdApiCommonService }
    ]; };
    return NgxYtdApiCommentsService;
}());
export { NgxYtdApiCommentsService };
if (false) {
    /**
     * The API URL for the Comments API of the YouTube Data v3 API
     * @type {?}
     */
    NgxYtdApiCommentsService.prototype.ngxYtdCommentsApiUrl;
    /**
     * @type {?}
     * @private
     */
    NgxYtdApiCommentsService.prototype.common;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvY29tbWVudHMvIiwic291cmNlcyI6WyJ5dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFhNUQ7SUFFRSxrQ0FDVSxNQUE4QjtRQUE5QixXQUFNLEdBQU4sTUFBTSxDQUF3Qjs7OztRQUsvQix5QkFBb0IsR0FBRyxnREFBZ0QsQ0FBQztJQUo3RSxDQUFDO0lBS0w7Ozs7OztPQU1HOzs7Ozs7OztJQUNILHlDQUFNOzs7Ozs7O0lBQU4sVUFBTyxJQUFpQztRQUN0QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUNoQyxJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUE4QixJQUFJLENBQUMsRUFDeEQsSUFBSSxFQUNKLFFBQVEsQ0FDVCxDQUFDO0lBQ0osQ0FBQztJQUNEOzs7Ozs7O09BT0c7Ozs7Ozs7OztJQUNILHlDQUFNOzs7Ozs7OztJQUFOLFVBQU8sSUFBK0IsRUFBRSxJQUFpQztRQUN2RSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUNoQyxJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUE4QixJQUFJLENBQUMsRUFDeEQsSUFBSSxFQUNKLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQztJQUNEOzs7Ozs7T0FNRzs7Ozs7Ozs7SUFDSCx1Q0FBSTs7Ozs7OztJQUFKLFVBQUssSUFBK0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBNEIsSUFBSSxDQUFDLEVBQ3RELElBQUksRUFDSixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7SUFDRDs7Ozs7O09BTUc7Ozs7Ozs7O0lBQ0gsNkNBQVU7Ozs7Ozs7SUFBVixVQUFXLElBQXFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQzdCLElBQUksQ0FBQyxvQkFBb0IsZ0JBQWEsRUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQWtDLElBQUksQ0FBQyxFQUM1RCxJQUFJLEVBQ0osTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7OztPQU1HOzs7Ozs7OztJQUNILHNEQUFtQjs7Ozs7OztJQUFuQixVQUFvQixJQUE4QztRQUNoRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUM3QixJQUFJLENBQUMsb0JBQW9CLHlCQUFzQixFQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBMkMsSUFBSSxDQUFDLEVBQ3JFLElBQUksRUFDSixNQUFNLENBQ1AsQ0FBQztJQUNKLENBQUM7SUFDRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7SUFDSCx5Q0FBTTs7Ozs7Ozs7SUFBTixVQUFPLElBQStCLEVBQUUsSUFBaUM7UUFDdkUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBOEIsSUFBSSxDQUFDLEVBQ3hELElBQUksRUFDSixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7O2dCQXBHRixVQUFVOzs7O2dCQWJGLHNCQUFzQjs7SUFrSC9CLCtCQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0FwR1ksd0JBQXdCOzs7Ozs7SUFPbkMsd0RBQWlGOzs7OztJQUwvRSwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFl0ZEFwaUNvbW1vblNlcnZpY2UgfSBmcm9tICduZ3gteXRkLWFwaS9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgTmd4WXRkQXBpQ29tbWVudHNEZWxldGVPcHRzLFxuICBOZ3hZdGRBcGlDb21tZW50c0luc2VydE9wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzTGlzdE9wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzTGlzdFJlc3VsdCxcbiAgTmd4WXRkQXBpQ29tbWVudHNNYXJrQXNTcGFtT3B0cyxcbiAgTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSxcbiAgTmd4WXRkQXBpQ29tbWVudHNTZXRNb2RlcmF0aW9uU3RhdHVzT3B0cyxcbiAgTmd4WXRkQXBpQ29tbWVudHNVcGRhdGVPcHRzXG59IGZyb20gJy4veXRkLWFwaS1jb21tZW50cy5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29tbWVudHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21tb246IE5neFl0ZEFwaUNvbW1vblNlcnZpY2VcbiAgKSB7IH1cbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIGZvciB0aGUgQ29tbWVudHMgQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRDb21tZW50c0FwaVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL2NvbW1lbnRzJztcbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjb21tZW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvZGVsZXRlIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIGRlbGV0aW9uIGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgZGVsZXRlKG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzRGVsZXRlT3B0cyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxhbnksIE5neFl0ZEFwaUNvbW1lbnRzRGVsZXRlT3B0cywgYW55PihcbiAgICAgIHRoaXMubmd4WXRkQ29tbWVudHNBcGlVcmwsXG4gICAgICB0aGlzLmNvbW1vbi5tZXJnZU9wdHM8Tmd4WXRkQXBpQ29tbWVudHNEZWxldGVPcHRzPihvcHRzKSxcbiAgICAgIG51bGwsXG4gICAgICAnZGVsZXRlJ1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSByZXBseSB0byBhbiBleGlzdGluZyBjb21tZW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvaW5zZXJ0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEFQSSBib2R5XG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBjcmVhdGlvbiBhcyBhbiBgT2JzZXJ2YWJsZWBcbiAgICovXG4gIGluc2VydChib2R5OiBOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlLCBvcHRzOiBOZ3hZdGRBcGlDb21tZW50c0luc2VydE9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvbW1vbi5zZW5kSHR0cFJlcXVlc3Q8Tmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSwgTmd4WXRkQXBpQ29tbWVudHNJbnNlcnRPcHRzLCBhbnk+KFxuICAgICAgdGhpcy5uZ3hZdGRDb21tZW50c0FwaVVybCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlT3B0czxOZ3hZdGRBcGlDb21tZW50c0luc2VydE9wdHM+KG9wdHMpLFxuICAgICAgYm9keSxcbiAgICAgICdwb3N0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBjb21tZW50c1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2xpc3QgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgcmVxdWVzdCBhcyBhbiBgT2JzZXJ2YWJsZWBcbiAgICovXG4gIGxpc3Qob3B0czogTmd4WXRkQXBpQ29tbWVudHNMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpQ29tbWVudHNMaXN0UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxhbnksIE5neFl0ZEFwaUNvbW1lbnRzTGlzdE9wdHMsIE5neFl0ZEFwaUNvbW1lbnRzTGlzdFJlc3VsdD4oXG4gICAgICB0aGlzLm5neFl0ZENvbW1lbnRzQXBpVXJsLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaUNvbW1lbnRzTGlzdE9wdHM+KG9wdHMpLFxuICAgICAgbnVsbCxcbiAgICAgICdnZXQnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogRmxhZ3Mgb25lIG9yIG1vcmUgY29tbWVudHMgYXMgc3BhbVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL21hcmtBc1NwYW0gZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgcmVxdWVzdCBhcyBhbiBgT2JzZXJ2YWJsZWBcbiAgICovXG4gIG1hcmtBc1NwYW0ob3B0czogTmd4WXRkQXBpQ29tbWVudHNNYXJrQXNTcGFtT3B0cyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxhbnksIE5neFl0ZEFwaUNvbW1lbnRzTWFya0FzU3BhbU9wdHMsIGFueT4oXG4gICAgICBgJHt0aGlzLm5neFl0ZENvbW1lbnRzQXBpVXJsfS9tYXJrQXNTcGFtYCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlT3B0czxOZ3hZdGRBcGlDb21tZW50c01hcmtBc1NwYW1PcHRzPihvcHRzKSxcbiAgICAgIG51bGwsXG4gICAgICAncG9zdCdcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBtb2RlcmF0aW9uIHN0YXR1cyBvZiBvbmUgb3IgbW9yZSBjb21tZW50c1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL3NldE1vZGVyYXRpb25TdGF0dXMgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgcmVxdWVzdCBhcyBhbiBgT2JzZXJ2YWJsZWBcbiAgICovXG4gIHNldE1vZGVyYXRpb25TdGF0dXMob3B0czogTmd4WXRkQXBpQ29tbWVudHNTZXRNb2RlcmF0aW9uU3RhdHVzT3B0cyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxhbnksIE5neFl0ZEFwaUNvbW1lbnRzU2V0TW9kZXJhdGlvblN0YXR1c09wdHMsIGFueT4oXG4gICAgICBgJHt0aGlzLm5neFl0ZENvbW1lbnRzQXBpVXJsfS9zZXRNb2RlcmF0aW9uU3RhdHVzYCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlT3B0czxOZ3hZdGRBcGlDb21tZW50c1NldE1vZGVyYXRpb25TdGF0dXNPcHRzPihvcHRzKSxcbiAgICAgIG51bGwsXG4gICAgICAncG9zdCdcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBNb2RpZmllcyBhIGNvbW1lbnRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy91cGRhdGUgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gYm9keSBUaGUgQVBJIGJvZHlcbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIHVwZGF0ZSBhcyBhbiBgT2JzZXJ2YWJsZWBcbiAgICovXG4gIHVwZGF0ZShib2R5OiBOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlLCBvcHRzOiBOZ3hZdGRBcGlDb21tZW50c1VwZGF0ZU9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2U+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UsIE5neFl0ZEFwaUNvbW1lbnRzVXBkYXRlT3B0cywgTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZT4oXG4gICAgICB0aGlzLm5neFl0ZENvbW1lbnRzQXBpVXJsLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaUNvbW1lbnRzVXBkYXRlT3B0cz4ob3B0cyksXG4gICAgICBib2R5LFxuICAgICAgJ3B1dCdcbiAgICApO1xuICB9XG59XG4iXX0=