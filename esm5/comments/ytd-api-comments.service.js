/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var NgxYtdApiCommentService = /** @class */ (function () {
    function NgxYtdApiCommentService(http) {
        this.http = http;
        /**
         * The YouTube base API URL
         */
        this.ytdCommentBaseApiUrl = 'https://www.googleapis.com/youtube/v3/comments';
    }
    /**
     * Retrieves comments
     * @param opts Options for the API
     * @returns Results of the search as a stream for subscribing to
     */
    /**
     * Retrieves comments
     * @param {?} opts Options for the API
     * @return {?} Results of the search as a stream for subscribing to
     */
    NgxYtdApiCommentService.prototype.list = /**
     * Retrieves comments
     * @param {?} opts Options for the API
     * @return {?} Results of the search as a stream for subscribing to
     */
    function (opts) {
        /** @type {?} */
        var _hasPartOpt = false;
        /** @type {?} */
        var _apiUrl = this.ytdCommentBaseApiUrl + "?key=" + opts.key;
        // Loop through every property in the opts object
        for (var prop in opts) {
            // Check if property has a non-null value
            // Also checks if the property is not `key` to prevent duplication
            if (opts.hasOwnProperty(prop) && opts[prop] !== null && prop !== 'key') {
                // Add parameter to the API URL
                _apiUrl += "&" + prop + "=" + encodeURI(opts[prop]);
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
    };
    NgxYtdApiCommentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NgxYtdApiCommentService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ NgxYtdApiCommentService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiCommentService_Factory() { return new NgxYtdApiCommentService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiCommentService, providedIn: "root" });
    return NgxYtdApiCommentService;
}());
export { NgxYtdApiCommentService };
if (false) {
    /**
     * The YouTube base API URL
     * @type {?}
     */
    NgxYtdApiCommentService.prototype.ytdCommentBaseApiUrl;
    /** @type {?} */
    NgxYtdApiCommentService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJjb21tZW50cy95dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFJbEQ7SUFRRSxpQ0FBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUpwQzs7V0FFRztRQUNNLHlCQUFvQixHQUFHLGdEQUFnRCxDQUFDO0lBQ3pDLENBQUM7SUFDekM7Ozs7T0FJRzs7Ozs7O0lBQ0gsc0NBQUk7Ozs7O0lBQUosVUFBSyxJQUE4Qjs7WUFDN0IsV0FBVyxHQUFHLEtBQUs7O1lBQ25CLE9BQU8sR0FBTSxJQUFJLENBQUMsb0JBQW9CLGFBQVEsSUFBSSxDQUFDLEdBQUs7UUFDNUQsaURBQWlEO1FBQ2pELEtBQUssSUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3ZCLHlDQUF5QztZQUN6QyxrRUFBa0U7WUFDbEUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRTtnQkFDdEUsK0JBQStCO2dCQUMvQixPQUFPLElBQUksTUFBSSxJQUFJLFNBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRyxDQUFDO2dCQUMvQyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQ25CLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ3BCO2FBQ0Y7U0FDRjtRQUNELDhDQUE4QztRQUM5QyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQztTQUMvQjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTZCLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7O2dCQWxDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBTlEsVUFBVTs7O2tDQURuQjtDQXdDQyxBQW5DRCxJQW1DQztTQWhDWSx1QkFBdUI7Ozs7OztJQUlsQyx1REFBaUY7O0lBQ3JFLHVDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb21tZW50TGlzdE9wdHMsIE5neFl0ZEFwaUNvbW1lbnRMaXN0UmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLWNvbW1lbnRzLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaUNvbW1lbnRTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFRoZSBZb3VUdWJlIGJhc2UgQVBJIFVSTFxuICAgKi9cbiAgcmVhZG9ubHkgeXRkQ29tbWVudEJhc2VBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9jb21tZW50cyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgY29tbWVudHNcbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW0gZm9yIHN1YnNjcmliaW5nIHRvXG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpQ29tbWVudExpc3RSZXN1bHQ+IHtcbiAgICBsZXQgX2hhc1BhcnRPcHQgPSBmYWxzZTtcbiAgICBsZXQgX2FwaVVybCA9IGAke3RoaXMueXRkQ29tbWVudEJhc2VBcGlVcmx9P2tleT0ke29wdHMua2V5fWA7XG4gICAgLy8gTG9vcCB0aHJvdWdoIGV2ZXJ5IHByb3BlcnR5IGluIHRoZSBvcHRzIG9iamVjdFxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBvcHRzKSB7XG4gICAgICAvLyBDaGVjayBpZiBwcm9wZXJ0eSBoYXMgYSBub24tbnVsbCB2YWx1ZVxuICAgICAgLy8gQWxzbyBjaGVja3MgaWYgdGhlIHByb3BlcnR5IGlzIG5vdCBga2V5YCB0byBwcmV2ZW50IGR1cGxpY2F0aW9uXG4gICAgICBpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBvcHRzW3Byb3BdICE9PSBudWxsICYmIHByb3AgIT09ICdrZXknKSB7XG4gICAgICAgIC8vIEFkZCBwYXJhbWV0ZXIgdG8gdGhlIEFQSSBVUkxcbiAgICAgICAgX2FwaVVybCArPSBgJiR7cHJvcH09JHtlbmNvZGVVUkkob3B0c1twcm9wXSl9YDtcbiAgICAgICAgaWYgKHByb3AgPT09ICdwYXJ0Jykge1xuICAgICAgICAgIF9oYXNQYXJ0T3B0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBEZWZhdWx0IGlmIGBwYXJ0YCBwYXJhbWV0ZXIgaXNuJ3Qgc3BlY2lmaWVkXG4gICAgaWYgKCFfaGFzUGFydE9wdCkge1xuICAgICAgX2FwaVVybCArPSAnJnBhcnQ9c25pcHBldCxpZCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE5neFl0ZEFwaUNvbW1lbnRMaXN0UmVzdWx0PihfYXBpVXJsKTtcbiAgfVxufVxuIl19