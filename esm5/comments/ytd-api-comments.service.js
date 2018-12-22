/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SimpleHttpService } from 'ngx-simple-http';
import { HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "ngx-simple-http";
var NgxYtdApiCommentsService = /** @class */ (function () {
    function NgxYtdApiCommentsService(http) {
        this.http = http;
        /**
         * The API URL for the Comments API of the YouTube Data v3 API
         */
        this.ngxYtdCommentsApiUrl = 'https://www.googleapis.com/youtube/v3/comments';
    }
    // Handler for HTTP requests
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
    NgxYtdApiCommentsService.prototype._httpHandler = 
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
    function (apiEndpoint, opts, body, httpType) {
        if (body === void 0) { body = null; }
        /** @type {?} */
        var headers;
        if ('accessToken' in opts && typeof opts['accessToken'] !== undefined && opts['accessToken'] !== null) {
            headers = new HttpHeaders()
                .set('Authorization', "Bearer " + opts['accessToken']);
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
    };
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
        return this._httpHandler(this.ngxYtdCommentsApiUrl, opts, null, 'delete');
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
        return this._httpHandler(this.ngxYtdCommentsApiUrl, opts, body, 'post');
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
        return this._httpHandler(this.ngxYtdCommentsApiUrl, opts, null, 'get');
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
        return this._httpHandler(this.ngxYtdCommentsApiUrl + "/markAsSpam", opts, null, 'post');
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
        return this._httpHandler(this.ngxYtdCommentsApiUrl + "/setModerationStatus", opts, null, 'post');
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
        return this._httpHandler(this.ngxYtdCommentsApiUrl, opts, body, 'put');
    };
    NgxYtdApiCommentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxYtdApiCommentsService.ctorParameters = function () { return [
        { type: SimpleHttpService }
    ]; };
    /** @nocollapse */ NgxYtdApiCommentsService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiCommentsService_Factory() { return new NgxYtdApiCommentsService(i0.inject(i1.SimpleHttpService)); }, token: NgxYtdApiCommentsService, providedIn: "root" });
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
    NgxYtdApiCommentsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvY29tbWVudHMvIiwic291cmNlcyI6WyJ5dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFZcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFbkQ7SUFJRSxrQ0FDVSxJQUF1QjtRQUF2QixTQUFJLEdBQUosSUFBSSxDQUFtQjs7OztRQUt4Qix5QkFBb0IsR0FBRyxnREFBZ0QsQ0FBQztJQUo3RSxDQUFDO0lBS0wsNEJBQTRCOzs7Ozs7Ozs7OztJQUNwQiwrQ0FBWTs7Ozs7Ozs7Ozs7SUFBcEIsVUFDRSxXQUFtQixFQUNuQixJQUFPLEVBQ1AsSUFBYyxFQUNkLFFBQTJDO1FBRDNDLHFCQUFBLEVBQUEsV0FBYzs7WUFHVixPQUFvQjtRQUN4QixJQUFJLGFBQWEsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDckcsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFO2lCQUN4QixHQUFHLENBQUMsZUFBZSxFQUFFLFlBQVUsSUFBSSxDQUFDLGFBQWEsQ0FBRyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxRQUFRLFFBQVEsRUFBRTtZQUNoQixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFPLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ3JFO3FCQUFNO29CQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFB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QUM7SUFDSixDQUFDO0lBQ0Q7Ozs7OztPQU1HOzs7Ozs7OztJQUNILHNEQUFtQjs7Ozs7OztJQUFuQixVQUFvQixJQUE4QztRQUNoRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQ25CLElBQUksQ0FBQyxvQkFBb0IseUJBQXNCLEVBQ2xELElBQUksRUFDSixJQUFJLEVBQ0osTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRzs7Ozs7Ozs7O0lBQ0gseUNBQU07Ozs7Ozs7O0lBQU4sVUFBTyxJQUErQixFQUFFLElBQWlDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FDdEIsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLEVBQ0osSUFBSSxFQUNKLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQzs7Z0JBN0pGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBaEJRLGlCQUFpQjs7O21DQUQxQjtDQTZLQyxBQTlKRCxJQThKQztTQTNKWSx3QkFBd0I7Ozs7OztJQU9uQyx3REFBaUY7Ozs7O0lBTC9FLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpbXBsZUh0dHBTZXJ2aWNlIH0gZnJvbSAnbmd4LXNpbXBsZS1odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIE5neFl0ZEFwaUNvbW1lbnRzRGVsZXRlT3B0cyxcbiAgTmd4WXRkQXBpQ29tbWVudHNJbnNlcnRPcHRzLFxuICBOZ3hZdGRBcGlDb21tZW50c0xpc3RPcHRzLFxuICBOZ3hZdGRBcGlDb21tZW50c0xpc3RSZXN1bHQsXG4gIE5neFl0ZEFwaUNvbW1lbnRzTWFya0FzU3BhbU9wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UsXG4gIE5neFl0ZEFwaUNvbW1lbnRzU2V0TW9kZXJhdGlvblN0YXR1c09wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzVXBkYXRlT3B0c1xufSBmcm9tICcuL3l0ZC1hcGktY29tbWVudHMuaW50ZXJmYWNlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlDb21tZW50c1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IFNpbXBsZUh0dHBTZXJ2aWNlXG4gICkgeyB9XG4gIC8qKlxuICAgKiBUaGUgQVBJIFVSTCBmb3IgdGhlIENvbW1lbnRzIEFQSSBvZiB0aGUgWW91VHViZSBEYXRhIHYzIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgbmd4WXRkQ29tbWVudHNBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9jb21tZW50cyc7XG4gIC8vIEhhbmRsZXIgZm9yIEhUVFAgcmVxdWVzdHNcbiAgcHJpdmF0ZSBfaHR0cEhhbmRsZXI8QiBleHRlbmRzIGFueSwgUCBleHRlbmRzIGFueSwgUiBleHRlbmRzIGFueT4oXG4gICAgYXBpRW5kcG9pbnQ6IHN0cmluZyxcbiAgICBvcHRzOiBQLFxuICAgIGJvZHk6IEIgPSBudWxsLFxuICAgIGh0dHBUeXBlOiAnZGVsZXRlJyB8ICdnZXQnIHwgJ3Bvc3QnIHwgJ3B1dCdcbiAgKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIGlmICgnYWNjZXNzVG9rZW4nIGluIG9wdHMgJiYgdHlwZW9mIG9wdHNbJ2FjY2Vzc1Rva2VuJ10gIT09IHVuZGVmaW5lZCAmJiBvcHRzWydhY2Nlc3NUb2tlbiddICE9PSBudWxsKSB7XG4gICAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHtvcHRzWydhY2Nlc3NUb2tlbiddfWApO1xuICAgIH1cbiAgICBzd2l0Y2ggKGh0dHBUeXBlKSB7XG4gICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cERlbGV0ZTxQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgaGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwRGVsZXRlPFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAnZ2V0JzpcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBHZXQ8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGhlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cEdldDxQLCBSPihhcGlFbmRwb2ludCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ3Bvc3QnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBib2R5LCBoZWFkZXJzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCwgaGVhZGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBib2R5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlICdwdXQnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHksIGhlYWRlcnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwsIGhlYWRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBib2R5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjb21tZW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvZGVsZXRlIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIGRlbGV0aW9uIGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgZGVsZXRlKG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzRGVsZXRlT3B0cyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBIYW5kbGVyPGFueSwgTmd4WXRkQXBpQ29tbWVudHNEZWxldGVPcHRzLCBhbnk+KFxuICAgICAgdGhpcy5uZ3hZdGRDb21tZW50c0FwaVVybCxcbiAgICAgIG9wdHMsXG4gICAgICBudWxsLFxuICAgICAgJ2RlbGV0ZSdcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcmVwbHkgdG8gYW4gZXhpc3RpbmcgY29tbWVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2luc2VydCBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBib2R5IFRoZSBBUEkgYm9keVxuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgY3JlYXRpb24gYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBpbnNlcnQoYm9keTogTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSwgb3B0czogTmd4WXRkQXBpQ29tbWVudHNJbnNlcnRPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cEhhbmRsZXI8Tmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSwgTmd4WXRkQXBpQ29tbWVudHNJbnNlcnRPcHRzLCBhbnk+KFxuICAgICAgdGhpcy5uZ3hZdGRDb21tZW50c0FwaVVybCxcbiAgICAgIG9wdHMsXG4gICAgICBib2R5LFxuICAgICAgJ3Bvc3QnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmV0cmlldmVzIGNvbW1lbnRzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvbGlzdCBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSByZXF1ZXN0IGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlDb21tZW50c0xpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlDb21tZW50c0xpc3RSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cEhhbmRsZXI8YW55LCBOZ3hZdGRBcGlDb21tZW50c0xpc3RPcHRzLCBOZ3hZdGRBcGlDb21tZW50c0xpc3RSZXN1bHQ+KFxuICAgICAgdGhpcy5uZ3hZdGRDb21tZW50c0FwaVVybCxcbiAgICAgIG9wdHMsXG4gICAgICBudWxsLFxuICAgICAgJ2dldCdcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBGbGFncyBvbmUgb3IgbW9yZSBjb21tZW50cyBhcyBzcGFtXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvbWFya0FzU3BhbSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSByZXF1ZXN0IGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgbWFya0FzU3BhbShvcHRzOiBOZ3hZdGRBcGlDb21tZW50c01hcmtBc1NwYW1PcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cEhhbmRsZXI8YW55LCBOZ3hZdGRBcGlDb21tZW50c01hcmtBc1NwYW1PcHRzLCBhbnk+KFxuICAgICAgYCR7dGhpcy5uZ3hZdGRDb21tZW50c0FwaVVybH0vbWFya0FzU3BhbWAsXG4gICAgICBvcHRzLFxuICAgICAgbnVsbCxcbiAgICAgICdwb3N0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIG1vZGVyYXRpb24gc3RhdHVzIG9mIG9uZSBvciBtb3JlIGNvbW1lbnRzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvc2V0TW9kZXJhdGlvblN0YXR1cyBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSByZXF1ZXN0IGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgc2V0TW9kZXJhdGlvblN0YXR1cyhvcHRzOiBOZ3hZdGRBcGlDb21tZW50c1NldE1vZGVyYXRpb25TdGF0dXNPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cEhhbmRsZXI8YW55LCBOZ3hZdGRBcGlDb21tZW50c1NldE1vZGVyYXRpb25TdGF0dXNPcHRzLCBhbnk+KFxuICAgICAgYCR7dGhpcy5uZ3hZdGRDb21tZW50c0FwaVVybH0vc2V0TW9kZXJhdGlvblN0YXR1c2AsXG4gICAgICBvcHRzLFxuICAgICAgbnVsbCxcbiAgICAgICdwb3N0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIE1vZGlmaWVzIGEgY29tbWVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL3VwZGF0ZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBib2R5IFRoZSBBUEkgYm9keVxuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgdXBkYXRlIGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgdXBkYXRlKGJvZHk6IE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UsIG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzVXBkYXRlT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwSGFuZGxlcjxOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlLCBOZ3hZdGRBcGlDb21tZW50c1VwZGF0ZU9wdHMsIE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2U+KFxuICAgICAgdGhpcy5uZ3hZdGRDb21tZW50c0FwaVVybCxcbiAgICAgIG9wdHMsXG4gICAgICBib2R5LFxuICAgICAgJ3B1dCdcbiAgICApO1xuICB9XG59XG4iXX0=