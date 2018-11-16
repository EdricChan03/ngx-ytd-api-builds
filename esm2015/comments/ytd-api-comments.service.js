/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/ytd-api-core.service";
export class NgxYtdApiCommentsService {
    /**
     * @param {?} core
     */
    constructor(core) {
        this.core = core;
    }
    /**
     * Deletes a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the deletion as an `Observable`
     */
    delete(opts) {
        return this.core.createHttpDelete(this.core.ngxYtdCommentsApiUrl, opts);
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
        return this.core.createHttpPost(this.core.ngxYtdCommentsApiUrl, opts, body);
    }
    /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the search as an `Observable`
     */
    list(opts) {
        return this.core.createHttpGet(this.core.ngxYtdCommentsApiUrl, opts);
    }
    /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the search as an `Observable`
     */
    markAsSpam(opts) {
        return this.core.createHttpPost(`${this.core.ngxYtdCommentsApiUrl}/markAsSpam`, opts);
    }
    /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the search as an `Observable`
     */
    setModerationStatus(opts) {
        return this.core.createHttpPost(`${this.core.ngxYtdCommentsApiUrl}/setModerationStatus`, opts);
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
        return this.core.createHttpPut(this.core.ngxYtdCommentsApiUrl, opts, body);
    }
}
NgxYtdApiCommentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxYtdApiCommentsService.ctorParameters = () => [
    { type: NgxYtdApiCoreService }
];
/** @nocollapse */ NgxYtdApiCommentsService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiCommentsService_Factory() { return new NgxYtdApiCommentsService(i0.inject(i1.NgxYtdApiCoreService)); }, token: NgxYtdApiCommentsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxYtdApiCommentsService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJjb21tZW50cy95dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQWdCeEQsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUNuQyxZQUNVLElBQTBCO1FBQTFCLFNBQUksR0FBSixJQUFJLENBQXNCO0lBQ2hDLENBQUM7Ozs7Ozs7O0lBUUwsTUFBTSxDQUFDLElBQWlDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBOEIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RyxDQUFDOzs7Ozs7Ozs7SUFTRCxNQUFNLENBQUMsSUFBK0IsRUFBRSxJQUFpQztRQUN2RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUM5QixJQUFJLEVBQ0osSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQVFELElBQUksQ0FBQyxJQUErQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUF5RCxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ILENBQUM7Ozs7Ozs7O0lBUUQsVUFBVSxDQUFDLElBQXFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQzdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsYUFBYSxFQUM5QyxJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBUUQsbUJBQW1CLENBQUMsSUFBOEM7UUFDaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FDN0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixzQkFBc0IsRUFDdkQsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUFTRCxNQUFNLENBQUMsSUFBK0IsRUFBRSxJQUFpQztRQUN2RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUM5QixJQUFJLEVBQ0osSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7WUFsRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBZlEsb0JBQW9COzs7Ozs7OztJQWtCekIsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29yZVNlcnZpY2UgfSBmcm9tICduZ3gteXRkLWFwaS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIE5neFl0ZEFwaUNvbW1lbnRzRGVsZXRlT3B0cyxcbiAgTmd4WXRkQXBpQ29tbWVudHNJbnNlcnRPcHRzLFxuICBOZ3hZdGRBcGlDb21tZW50c0xpc3RPcHRzLFxuICBOZ3hZdGRBcGlDb21tZW50c0xpc3RSZXN1bHQsXG4gIE5neFl0ZEFwaUNvbW1lbnRzTWFya0FzU3BhbU9wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UsXG4gIE5neFl0ZEFwaUNvbW1lbnRzU2V0TW9kZXJhdGlvblN0YXR1c09wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzVXBkYXRlT3B0c1xufSBmcm9tICcuL3l0ZC1hcGktY29tbWVudHMuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29tbWVudHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlOiBOZ3hZdGRBcGlDb3JlU2VydmljZVxuICApIHsgfVxuICAvKipcbiAgICogRGVsZXRlcyBhIGNvbW1lbnRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9kZWxldGUgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgZGVsZXRpb24gYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBkZWxldGUob3B0czogTmd4WXRkQXBpQ29tbWVudHNEZWxldGVPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb3JlLmNyZWF0ZUh0dHBEZWxldGU8Tmd4WXRkQXBpQ29tbWVudHNEZWxldGVPcHRzPih0aGlzLmNvcmUubmd4WXRkQ29tbWVudHNBcGlVcmwsIG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcmVwbHkgdG8gYW4gZXhpc3RpbmcgY29tbWVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2luc2VydCBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBib2R5IFRoZSBBUEkgYm9keVxuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgY3JlYXRpb24gYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBpbnNlcnQoYm9keTogTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSwgb3B0czogTmd4WXRkQXBpQ29tbWVudHNJbnNlcnRPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb3JlLmNyZWF0ZUh0dHBQb3N0PE5neFl0ZEFwaUNvbW1lbnRzSW5zZXJ0T3B0cywgTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZT4oXG4gICAgICB0aGlzLmNvcmUubmd4WXRkQ29tbWVudHNBcGlVcmwsXG4gICAgICBvcHRzLFxuICAgICAgYm9keVxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBjb21tZW50c1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2xpc3QgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlDb21tZW50c0xpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlDb21tZW50c0xpc3RSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb3JlLmNyZWF0ZUh0dHBHZXQ8Tmd4WXRkQXBpQ29tbWVudHNMaXN0UmVzdWx0LCBOZ3hZdGRBcGlDb21tZW50c0xpc3RPcHRzPih0aGlzLmNvcmUubmd4WXRkQ29tbWVudHNBcGlVcmwsIG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBGbGFncyBvbmUgb3IgbW9yZSBjb21tZW50cyBhcyBzcGFtXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvbWFya0FzU3BhbSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBtYXJrQXNTcGFtKG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzTWFya0FzU3BhbU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cFBvc3Q8Tmd4WXRkQXBpQ29tbWVudHNNYXJrQXNTcGFtT3B0cywgbnVsbD4oXG4gICAgICBgJHt0aGlzLmNvcmUubmd4WXRkQ29tbWVudHNBcGlVcmx9L21hcmtBc1NwYW1gLFxuICAgICAgb3B0c1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIG1vZGVyYXRpb24gc3RhdHVzIG9mIG9uZSBvciBtb3JlIGNvbW1lbnRzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvc2V0TW9kZXJhdGlvblN0YXR1cyBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBzZXRNb2RlcmF0aW9uU3RhdHVzKG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzU2V0TW9kZXJhdGlvblN0YXR1c09wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cFBvc3Q8Tmd4WXRkQXBpQ29tbWVudHNTZXRNb2RlcmF0aW9uU3RhdHVzT3B0cywgbnVsbD4oXG4gICAgICBgJHt0aGlzLmNvcmUubmd4WXRkQ29tbWVudHNBcGlVcmx9L3NldE1vZGVyYXRpb25TdGF0dXNgLFxuICAgICAgb3B0c1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIE1vZGlmaWVzIGEgY29tbWVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL3VwZGF0ZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBib2R5IFRoZSBBUEkgYm9keVxuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgdXBkYXRlIGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgdXBkYXRlKGJvZHk6IE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UsIG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzVXBkYXRlT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZT4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cFB1dDxOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlLCBOZ3hZdGRBcGlDb21tZW50c1VwZGF0ZU9wdHMsIE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2U+KFxuICAgICAgdGhpcy5jb3JlLm5neFl0ZENvbW1lbnRzQXBpVXJsLFxuICAgICAgb3B0cyxcbiAgICAgIGJvZHlcbiAgICApO1xuICB9XG59XG4iXX0=