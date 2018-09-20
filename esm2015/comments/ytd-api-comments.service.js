/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NgxYtdApiCommentService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        /**
         * The YouTube base API URL
         */
        this.ytdCommentBaseApiUrl = 'https://www.googleapis.com/youtube/v3/comments';
    }
    /**
     * Retrieves comments
     * @param {?} opts Options for the API
     * @return {?} Results of the search as a stream for subscribing to
     */
    list(opts) {
        /** @type {?} */
        let _hasPartOpt = false;
        /** @type {?} */
        let _apiUrl = `${this.ytdCommentBaseApiUrl}?key=${opts.key}`;
        // Loop through every property in the opts object
        for (const prop in opts) {
            // Check if property has a non-null value
            // Also checks if the property is not `key` to prevent duplication
            if (opts.hasOwnProperty(prop) && opts[prop] !== null && prop !== 'key') {
                // Add parameter to the API URL
                _apiUrl += `&${prop}=${encodeURI(opts[prop])}`;
                if (prop === 'part') {
                    _hasPartOpt = true;
                }
            }
        }
        // Default if `part` parameter isn't specified
        if (!_hasPartOpt) {
            _apiUrl += '&part=snippet,id';
        }
        return this.http.get(_apiUrl);
    }
}
NgxYtdApiCommentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgxYtdApiCommentService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ NgxYtdApiCommentService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiCommentService_Factory() { return new NgxYtdApiCommentService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiCommentService, providedIn: "root" });
if (false) {
    /**
     * The YouTube base API URL
     * @type {?}
     */
    NgxYtdApiCommentService.prototype.ytdCommentBaseApiUrl;
    /** @type {?} */
    NgxYtdApiCommentService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJjb21tZW50cy95dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFPbEQsTUFBTTs7OztJQUtKLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFKcEM7O1dBRUc7UUFDTSx5QkFBb0IsR0FBRyxnREFBZ0QsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFNekMsSUFBSSxDQUFDLElBQThCOztZQUM3QixXQUFXLEdBQUcsS0FBSzs7WUFDbkIsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixRQUFRLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDNUQsaURBQWlEO1FBQ2pELEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3ZCLHlDQUF5QztZQUN6QyxrRUFBa0U7WUFDbEUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRTtnQkFDdEUsK0JBQStCO2dCQUMvQixPQUFPLElBQUksSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtvQkFDbkIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDcEI7YUFDRjtTQUNGO1FBQ0QsOENBQThDO1FBQzlDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsT0FBTyxJQUFJLGtCQUFrQixDQUFDO1NBQy9CO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNkIsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7O1lBbENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTlEsVUFBVTs7Ozs7Ozs7SUFXakIsdURBQWlGOztJQUNyRSx1Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbWVudExpc3RPcHRzLCBOZ3hZdGRBcGlDb21tZW50TGlzdFJlc3VsdCB9IGZyb20gJy4veXRkLWFwaS1jb21tZW50cy5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlDb21tZW50U2VydmljZSB7XG4gIC8qKlxuICAgKiBUaGUgWW91VHViZSBiYXNlIEFQSSBVUkxcbiAgICovXG4gIHJlYWRvbmx5IHl0ZENvbW1lbnRCYXNlQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY29tbWVudHMnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICAvKipcbiAgICogUmV0cmlldmVzIGNvbW1lbnRzXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybnMgUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtIGZvciBzdWJzY3JpYmluZyB0b1xuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlDb21tZW50TGlzdE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaUNvbW1lbnRMaXN0UmVzdWx0PiB7XG4gICAgbGV0IF9oYXNQYXJ0T3B0ID0gZmFsc2U7XG4gICAgbGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZENvbW1lbnRCYXNlQXBpVXJsfT9rZXk9JHtvcHRzLmtleX1gO1xuICAgIC8vIExvb3AgdGhyb3VnaCBldmVyeSBwcm9wZXJ0eSBpbiB0aGUgb3B0cyBvYmplY3RcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gb3B0cykge1xuICAgICAgLy8gQ2hlY2sgaWYgcHJvcGVydHkgaGFzIGEgbm9uLW51bGwgdmFsdWVcbiAgICAgIC8vIEFsc28gY2hlY2tzIGlmIHRoZSBwcm9wZXJ0eSBpcyBub3QgYGtleWAgdG8gcHJldmVudCBkdXBsaWNhdGlvblxuICAgICAgaWYgKG9wdHMuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgb3B0c1twcm9wXSAhPT0gbnVsbCAmJiBwcm9wICE9PSAna2V5Jykge1xuICAgICAgICAvLyBBZGQgcGFyYW1ldGVyIHRvIHRoZSBBUEkgVVJMXG4gICAgICAgIF9hcGlVcmwgKz0gYCYke3Byb3B9PSR7ZW5jb2RlVVJJKG9wdHNbcHJvcF0pfWA7XG4gICAgICAgIGlmIChwcm9wID09PSAncGFydCcpIHtcbiAgICAgICAgICBfaGFzUGFydE9wdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRGVmYXVsdCBpZiBgcGFydGAgcGFyYW1ldGVyIGlzbid0IHNwZWNpZmllZFxuICAgIGlmICghX2hhc1BhcnRPcHQpIHtcbiAgICAgIF9hcGlVcmwgKz0gJyZwYXJ0PXNuaXBwZXQsaWQnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlDb21tZW50TGlzdFJlc3VsdD4oX2FwaVVybCk7XG4gIH1cbn1cbiJdfQ==