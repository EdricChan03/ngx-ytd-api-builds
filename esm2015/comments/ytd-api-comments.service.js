/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCommonService } from 'ngx-ytd-api/common';
export class NgxYtdApiCommentsService {
    /**
     * @param {?} common
     */
    constructor(common) {
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
     * @param {?} opts Options for the API
     * @return {?} Results of the deletion as an `Observable`
     */
    delete(opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), null, 'delete');
    }
    /**
     * Creates a reply to an existing comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
     * @param {?} body The API body
     * @param {?} opts Options for the API
     * @return {?} Results of the creation as an `Observable`
     */
    insert(body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), body, 'post');
    }
    /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the request as an `Observable`
     */
    list(opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), null, 'get');
    }
    /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the request as an `Observable`
     */
    markAsSpam(opts) {
        return this.common.sendHttpRequest(`${this.ngxYtdCommentsApiUrl}/markAsSpam`, this.common.mergeOpts(opts), null, 'post');
    }
    /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the request as an `Observable`
     */
    setModerationStatus(opts) {
        return this.common.sendHttpRequest(`${this.ngxYtdCommentsApiUrl}/setModerationStatus`, this.common.mergeOpts(opts), null, 'post');
    }
    /**
     * Modifies a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/update for more info
     * @param {?} body The API body
     * @param {?} opts Options for the API
     * @return {?} Results of the update as an `Observable`
     */
    update(body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), body, 'put');
    }
}
NgxYtdApiCommentsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxYtdApiCommentsService.ctorParameters = () => [
    { type: NgxYtdApiCommonService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvY29tbWVudHMvIiwic291cmNlcyI6WyJ5dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFjNUQsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUNuQyxZQUNVLE1BQThCO1FBQTlCLFdBQU0sR0FBTixNQUFNLENBQXdCOzs7O1FBSy9CLHlCQUFvQixHQUFHLGdEQUFnRCxDQUFDO0lBSjdFLENBQUM7Ozs7Ozs7O0lBWUwsTUFBTSxDQUFDLElBQWlDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQ2hDLElBQUksQ0FBQyxvQkFBb0IsRUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQThCLElBQUksQ0FBQyxFQUN4RCxJQUFJLEVBQ0osUUFBUSxDQUNULENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUFTRCxNQUFNLENBQUMsSUFBK0IsRUFBRSxJQUFpQztRQUN2RSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUNoQyxJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUE4QixJQUFJLENBQUMsRUFDeEQsSUFBSSxFQUNKLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFRRCxJQUFJLENBQUMsSUFBK0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBNEIsSUFBSSxDQUFDLEVBQ3RELElBQUksRUFDSixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBUUQsVUFBVSxDQUFDLElBQXFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQ2hDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixhQUFhLEVBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFrQyxJQUFJLENBQUMsRUFDNUQsSUFBSSxFQUNKLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFRRCxtQkFBbUIsQ0FBQyxJQUE4QztRQUNoRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUNoQyxHQUFHLElBQUksQ0FBQyxvQkFBb0Isc0JBQXNCLEVBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUEyQyxJQUFJLENBQUMsRUFDckUsSUFBSSxFQUNKLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBU0QsTUFBTSxDQUFDLElBQStCLEVBQUUsSUFBaUM7UUFDdkUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBOEIsSUFBSSxDQUFDLEVBQ3hELElBQUksRUFDSixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7OztZQXBHRixVQUFVOzs7O1lBYkYsc0JBQXNCOzs7Ozs7O0lBcUI3Qix3REFBaUY7Ozs7O0lBTC9FLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbW9uU2VydmljZSB9IGZyb20gJ25neC15dGQtYXBpL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBOZ3hZdGRBcGlDb21tZW50c0RlbGV0ZU9wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzSW5zZXJ0T3B0cyxcbiAgTmd4WXRkQXBpQ29tbWVudHNMaXN0T3B0cyxcbiAgTmd4WXRkQXBpQ29tbWVudHNMaXN0UmVzdWx0LFxuICBOZ3hZdGRBcGlDb21tZW50c01hcmtBc1NwYW1PcHRzLFxuICBOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlLFxuICBOZ3hZdGRBcGlDb21tZW50c1NldE1vZGVyYXRpb25TdGF0dXNPcHRzLFxuICBOZ3hZdGRBcGlDb21tZW50c1VwZGF0ZU9wdHNcbn0gZnJvbSAnLi95dGQtYXBpLWNvbW1lbnRzLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlDb21tZW50c1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbW1vbjogTmd4WXRkQXBpQ29tbW9uU2VydmljZVxuICApIHsgfVxuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBDb21tZW50cyBBUEkgb2YgdGhlIFlvdVR1YmUgRGF0YSB2MyBBUElcbiAgICovXG4gIHJlYWRvbmx5IG5neFl0ZENvbW1lbnRzQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY29tbWVudHMnO1xuICAvKipcbiAgICogRGVsZXRlcyBhIGNvbW1lbnRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9kZWxldGUgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgZGVsZXRpb24gYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBkZWxldGUob3B0czogTmd4WXRkQXBpQ29tbWVudHNEZWxldGVPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PGFueSwgTmd4WXRkQXBpQ29tbWVudHNEZWxldGVPcHRzLCBhbnk+KFxuICAgICAgdGhpcy5uZ3hZdGRDb21tZW50c0FwaVVybCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlT3B0czxOZ3hZdGRBcGlDb21tZW50c0RlbGV0ZU9wdHM+KG9wdHMpLFxuICAgICAgbnVsbCxcbiAgICAgICdkZWxldGUnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlcyBhIHJlcGx5IHRvIGFuIGV4aXN0aW5nIGNvbW1lbnRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9pbnNlcnQgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gYm9keSBUaGUgQVBJIGJvZHlcbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIGNyZWF0aW9uIGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgaW5zZXJ0KGJvZHk6IE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UsIG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzSW5zZXJ0T3B0cyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlLCBOZ3hZdGRBcGlDb21tZW50c0luc2VydE9wdHMsIGFueT4oXG4gICAgICB0aGlzLm5neFl0ZENvbW1lbnRzQXBpVXJsLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaUNvbW1lbnRzSW5zZXJ0T3B0cz4ob3B0cyksXG4gICAgICBib2R5LFxuICAgICAgJ3Bvc3QnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmV0cmlldmVzIGNvbW1lbnRzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvbGlzdCBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSByZXF1ZXN0IGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlDb21tZW50c0xpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlDb21tZW50c0xpc3RSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PGFueSwgTmd4WXRkQXBpQ29tbWVudHNMaXN0T3B0cywgTmd4WXRkQXBpQ29tbWVudHNMaXN0UmVzdWx0PihcbiAgICAgIHRoaXMubmd4WXRkQ29tbWVudHNBcGlVcmwsXG4gICAgICB0aGlzLmNvbW1vbi5tZXJnZU9wdHM8Tmd4WXRkQXBpQ29tbWVudHNMaXN0T3B0cz4ob3B0cyksXG4gICAgICBudWxsLFxuICAgICAgJ2dldCdcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBGbGFncyBvbmUgb3IgbW9yZSBjb21tZW50cyBhcyBzcGFtXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvbWFya0FzU3BhbSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSByZXF1ZXN0IGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgbWFya0FzU3BhbShvcHRzOiBOZ3hZdGRBcGlDb21tZW50c01hcmtBc1NwYW1PcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PGFueSwgTmd4WXRkQXBpQ29tbWVudHNNYXJrQXNTcGFtT3B0cywgYW55PihcbiAgICAgIGAke3RoaXMubmd4WXRkQ29tbWVudHNBcGlVcmx9L21hcmtBc1NwYW1gLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaUNvbW1lbnRzTWFya0FzU3BhbU9wdHM+KG9wdHMpLFxuICAgICAgbnVsbCxcbiAgICAgICdwb3N0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIG1vZGVyYXRpb24gc3RhdHVzIG9mIG9uZSBvciBtb3JlIGNvbW1lbnRzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvc2V0TW9kZXJhdGlvblN0YXR1cyBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSByZXF1ZXN0IGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgc2V0TW9kZXJhdGlvblN0YXR1cyhvcHRzOiBOZ3hZdGRBcGlDb21tZW50c1NldE1vZGVyYXRpb25TdGF0dXNPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PGFueSwgTmd4WXRkQXBpQ29tbWVudHNTZXRNb2RlcmF0aW9uU3RhdHVzT3B0cywgYW55PihcbiAgICAgIGAke3RoaXMubmd4WXRkQ29tbWVudHNBcGlVcmx9L3NldE1vZGVyYXRpb25TdGF0dXNgLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaUNvbW1lbnRzU2V0TW9kZXJhdGlvblN0YXR1c09wdHM+KG9wdHMpLFxuICAgICAgbnVsbCxcbiAgICAgICdwb3N0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIE1vZGlmaWVzIGEgY29tbWVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL3VwZGF0ZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBib2R5IFRoZSBBUEkgYm9keVxuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgdXBkYXRlIGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgdXBkYXRlKGJvZHk6IE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UsIG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzVXBkYXRlT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZT4ge1xuICAgIHJldHVybiB0aGlzLmNvbW1vbi5zZW5kSHR0cFJlcXVlc3Q8Tmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSwgTmd4WXRkQXBpQ29tbWVudHNVcGRhdGVPcHRzLCBOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlPihcbiAgICAgIHRoaXMubmd4WXRkQ29tbWVudHNBcGlVcmwsXG4gICAgICB0aGlzLmNvbW1vbi5tZXJnZU9wdHM8Tmd4WXRkQXBpQ29tbWVudHNVcGRhdGVPcHRzPihvcHRzKSxcbiAgICAgIGJvZHksXG4gICAgICAncHV0J1xuICAgICk7XG4gIH1cbn1cbiJdfQ==