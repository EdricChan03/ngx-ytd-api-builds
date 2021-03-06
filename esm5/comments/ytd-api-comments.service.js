import * as tslib_1 from "tslib";
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
    NgxYtdApiCommentsService.prototype.delete = function (opts) {
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
    NgxYtdApiCommentsService.prototype.insert = function (body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), body, 'post');
    };
    /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param opts Options for the API
     * @return Results of the request as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.list = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), null, 'get');
    };
    /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param opts Options for the API
     * @return Results of the request as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.markAsSpam = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl + "/markAsSpam", this.common.mergeOpts(opts), null, 'post');
    };
    /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param opts Options for the API
     * @return Results of the request as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.setModerationStatus = function (opts) {
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
    NgxYtdApiCommentsService.prototype.update = function (body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), body, 'put');
    };
    NgxYtdApiCommentsService.ctorParameters = function () { return [
        { type: NgxYtdApiCommonService }
    ]; };
    NgxYtdApiCommentsService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [NgxYtdApiCommonService])
    ], NgxYtdApiCommentsService);
    return NgxYtdApiCommentsService;
}());
export { NgxYtdApiCommentsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvY29tbWVudHMvIiwic291cmNlcyI6WyJ5dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFjNUQ7SUFDRSxrQ0FDVSxNQUE4QjtRQUE5QixXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUV4Qzs7V0FFRztRQUNNLHlCQUFvQixHQUFHLGdEQUFnRCxDQUFDO0lBSjdFLENBQUM7SUFLTDs7Ozs7O09BTUc7SUFDSCx5Q0FBTSxHQUFOLFVBQU8sSUFBaUM7UUFDdEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBOEIsSUFBSSxDQUFDLEVBQ3hELElBQUksRUFDSixRQUFRLENBQ1QsQ0FBQztJQUNKLENBQUM7SUFDRDs7Ozs7OztPQU9HO0lBQ0gseUNBQU0sR0FBTixVQUFPLElBQStCLEVBQUUsSUFBaUM7UUFDdkUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBOEIsSUFBSSxDQUFDLEVBQ3hELElBQUksRUFDSixNQUFNLENBQ1AsQ0FBQztJQUNKLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSCx1Q0FBSSxHQUFKLFVBQUssSUFBK0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBNEIsSUFBSSxDQUFDLEVBQ3RELElBQUksRUFDSixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSCw2Q0FBVSxHQUFWLFVBQVcsSUFBcUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDN0IsSUFBSSxDQUFDLG9CQUFvQixnQkFBYSxFQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBa0MsSUFBSSxDQUFDLEVBQzVELElBQUksRUFDSixNQUFNLENBQ1AsQ0FBQztJQUNKLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSCxzREFBbUIsR0FBbkIsVUFBb0IsSUFBOEM7UUFDaEUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDN0IsSUFBSSxDQUFDLG9CQUFvQix5QkFBc0IsRUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQTJDLElBQUksQ0FBQyxFQUNyRSxJQUFJLEVBQ0osTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRztJQUNILHlDQUFNLEdBQU4sVUFBTyxJQUErQixFQUFFLElBQWlDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQ2hDLElBQUksQ0FBQyxvQkFBb0IsRUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQThCLElBQUksQ0FBQyxFQUN4RCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOztnQkFqR2lCLHNCQUFzQjs7SUFGN0Isd0JBQXdCO1FBRHBDLFVBQVUsRUFBRTtpREFHTyxzQkFBc0I7T0FGN0Isd0JBQXdCLENBb0dwQztJQUFELCtCQUFDO0NBQUEsQUFwR0QsSUFvR0M7U0FwR1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb21tb25TZXJ2aWNlIH0gZnJvbSAnbmd4LXl0ZC1hcGkvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIE5neFl0ZEFwaUNvbW1lbnRzRGVsZXRlT3B0cyxcbiAgTmd4WXRkQXBpQ29tbWVudHNJbnNlcnRPcHRzLFxuICBOZ3hZdGRBcGlDb21tZW50c0xpc3RPcHRzLFxuICBOZ3hZdGRBcGlDb21tZW50c0xpc3RSZXN1bHQsXG4gIE5neFl0ZEFwaUNvbW1lbnRzTWFya0FzU3BhbU9wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UsXG4gIE5neFl0ZEFwaUNvbW1lbnRzU2V0TW9kZXJhdGlvblN0YXR1c09wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzVXBkYXRlT3B0c1xufSBmcm9tICcuL3l0ZC1hcGktY29tbWVudHMuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaUNvbW1lbnRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tbW9uOiBOZ3hZdGRBcGlDb21tb25TZXJ2aWNlXG4gICkgeyB9XG4gIC8qKlxuICAgKiBUaGUgQVBJIFVSTCBmb3IgdGhlIENvbW1lbnRzIEFQSSBvZiB0aGUgWW91VHViZSBEYXRhIHYzIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgbmd4WXRkQ29tbWVudHNBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9jb21tZW50cyc7XG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY29tbWVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2RlbGV0ZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBkZWxldGlvbiBhcyBhbiBgT2JzZXJ2YWJsZWBcbiAgICovXG4gIGRlbGV0ZShvcHRzOiBOZ3hZdGRBcGlDb21tZW50c0RlbGV0ZU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvbW1vbi5zZW5kSHR0cFJlcXVlc3Q8YW55LCBOZ3hZdGRBcGlDb21tZW50c0RlbGV0ZU9wdHMsIGFueT4oXG4gICAgICB0aGlzLm5neFl0ZENvbW1lbnRzQXBpVXJsLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaUNvbW1lbnRzRGVsZXRlT3B0cz4ob3B0cyksXG4gICAgICBudWxsLFxuICAgICAgJ2RlbGV0ZSdcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcmVwbHkgdG8gYW4gZXhpc3RpbmcgY29tbWVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2luc2VydCBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBib2R5IFRoZSBBUEkgYm9keVxuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgY3JlYXRpb24gYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBpbnNlcnQoYm9keTogTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSwgb3B0czogTmd4WXRkQXBpQ29tbWVudHNJbnNlcnRPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UsIE5neFl0ZEFwaUNvbW1lbnRzSW5zZXJ0T3B0cywgYW55PihcbiAgICAgIHRoaXMubmd4WXRkQ29tbWVudHNBcGlVcmwsXG4gICAgICB0aGlzLmNvbW1vbi5tZXJnZU9wdHM8Tmd4WXRkQXBpQ29tbWVudHNJbnNlcnRPcHRzPihvcHRzKSxcbiAgICAgIGJvZHksXG4gICAgICAncG9zdCdcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgY29tbWVudHNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9saXN0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIHJlcXVlc3QgYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzTGlzdE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaUNvbW1lbnRzTGlzdFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmNvbW1vbi5zZW5kSHR0cFJlcXVlc3Q8YW55LCBOZ3hZdGRBcGlDb21tZW50c0xpc3RPcHRzLCBOZ3hZdGRBcGlDb21tZW50c0xpc3RSZXN1bHQ+KFxuICAgICAgdGhpcy5uZ3hZdGRDb21tZW50c0FwaVVybCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlT3B0czxOZ3hZdGRBcGlDb21tZW50c0xpc3RPcHRzPihvcHRzKSxcbiAgICAgIG51bGwsXG4gICAgICAnZ2V0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIEZsYWdzIG9uZSBvciBtb3JlIGNvbW1lbnRzIGFzIHNwYW1cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9tYXJrQXNTcGFtIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIHJlcXVlc3QgYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBtYXJrQXNTcGFtKG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzTWFya0FzU3BhbU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvbW1vbi5zZW5kSHR0cFJlcXVlc3Q8YW55LCBOZ3hZdGRBcGlDb21tZW50c01hcmtBc1NwYW1PcHRzLCBhbnk+KFxuICAgICAgYCR7dGhpcy5uZ3hZdGRDb21tZW50c0FwaVVybH0vbWFya0FzU3BhbWAsXG4gICAgICB0aGlzLmNvbW1vbi5tZXJnZU9wdHM8Tmd4WXRkQXBpQ29tbWVudHNNYXJrQXNTcGFtT3B0cz4ob3B0cyksXG4gICAgICBudWxsLFxuICAgICAgJ3Bvc3QnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyB0aGUgbW9kZXJhdGlvbiBzdGF0dXMgb2Ygb25lIG9yIG1vcmUgY29tbWVudHNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9zZXRNb2RlcmF0aW9uU3RhdHVzIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIHJlcXVlc3QgYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBzZXRNb2RlcmF0aW9uU3RhdHVzKG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzU2V0TW9kZXJhdGlvblN0YXR1c09wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvbW1vbi5zZW5kSHR0cFJlcXVlc3Q8YW55LCBOZ3hZdGRBcGlDb21tZW50c1NldE1vZGVyYXRpb25TdGF0dXNPcHRzLCBhbnk+KFxuICAgICAgYCR7dGhpcy5uZ3hZdGRDb21tZW50c0FwaVVybH0vc2V0TW9kZXJhdGlvblN0YXR1c2AsXG4gICAgICB0aGlzLmNvbW1vbi5tZXJnZU9wdHM8Tmd4WXRkQXBpQ29tbWVudHNTZXRNb2RlcmF0aW9uU3RhdHVzT3B0cz4ob3B0cyksXG4gICAgICBudWxsLFxuICAgICAgJ3Bvc3QnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogTW9kaWZpZXMgYSBjb21tZW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvdXBkYXRlIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEFQSSBib2R5XG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSB1cGRhdGUgYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICB1cGRhdGUoYm9keTogTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSwgb3B0czogTmd4WXRkQXBpQ29tbWVudHNVcGRhdGVPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlLCBOZ3hZdGRBcGlDb21tZW50c1VwZGF0ZU9wdHMsIE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2U+KFxuICAgICAgdGhpcy5uZ3hZdGRDb21tZW50c0FwaVVybCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlT3B0czxOZ3hZdGRBcGlDb21tZW50c1VwZGF0ZU9wdHM+KG9wdHMpLFxuICAgICAgYm9keSxcbiAgICAgICdwdXQnXG4gICAgKTtcbiAgfVxufVxuIl19