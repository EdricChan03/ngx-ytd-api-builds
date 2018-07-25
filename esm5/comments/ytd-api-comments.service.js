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
        var _apiUrl = this.ytdCommentBaseApiUrl;
        // Loop through every property in the opts object
        for (var prop in opts) {
            // Check if property has a non-null value
            if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
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
                },] },
    ];
    /** @nocollapse */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJjb21tZW50cy95dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0lBWWhELGlDQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7O29DQURKLGdEQUFnRDtLQUN2QztJQUN6Qzs7OztPQUlHOzs7Ozs7SUFDSCxzQ0FBSTs7Ozs7SUFBSixVQUFLLElBQThCOztRQUNqQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7O1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQzs7UUFFeEMsR0FBRyxDQUFDLENBQUMsSUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs7WUFFeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBRXJELE9BQU8sSUFBSSxNQUFJLElBQUksU0FBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFHLENBQUM7Z0JBQy9DLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNwQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjthQUNGO1NBQ0Y7O1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQztTQUMvQjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNkIsT0FBTyxDQUFDLENBQUM7S0FDM0Q7O2dCQWpDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLFVBQVU7OztrQ0FEbkI7O1NBUWEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neFl0ZEFwaUNvbW1lbnRMaXN0T3B0cywgTmd4WXRkQXBpQ29tbWVudExpc3RSZXN1bHQgfSBmcm9tICcuL3l0ZC1hcGktY29tbWVudHMuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29tbWVudFNlcnZpY2Uge1xuICAvKipcbiAgICogVGhlIFlvdVR1YmUgYmFzZSBBUEkgVVJMXG4gICAqL1xuICByZWFkb25seSB5dGRDb21tZW50QmFzZUFwaVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL2NvbW1lbnRzJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBjb21tZW50c1xuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbSBmb3Igc3Vic2NyaWJpbmcgdG9cbiAgICovXG4gIGxpc3Qob3B0czogTmd4WXRkQXBpQ29tbWVudExpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlDb21tZW50TGlzdFJlc3VsdD4ge1xuICAgIGxldCBfaGFzUGFydE9wdCA9IGZhbHNlO1xuICAgIGxldCBfYXBpVXJsID0gdGhpcy55dGRDb21tZW50QmFzZUFwaVVybDtcbiAgICAvLyBMb29wIHRocm91Z2ggZXZlcnkgcHJvcGVydHkgaW4gdGhlIG9wdHMgb2JqZWN0XG4gICAgZm9yIChjb25zdCBwcm9wIGluIG9wdHMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHByb3BlcnR5IGhhcyBhIG5vbi1udWxsIHZhbHVlXG4gICAgICBpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBvcHRzW3Byb3BdICE9PSBudWxsKSB7XG4gICAgICAgIC8vIEFkZCBwYXJhbWV0ZXIgdG8gdGhlIEFQSSBVUkxcbiAgICAgICAgX2FwaVVybCArPSBgJiR7cHJvcH09JHtlbmNvZGVVUkkob3B0c1twcm9wXSl9YDtcbiAgICAgICAgaWYgKHByb3AgPT09ICdwYXJ0Jykge1xuICAgICAgICAgIF9oYXNQYXJ0T3B0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBEZWZhdWx0IGlmIGBwYXJ0YCBwYXJhbWV0ZXIgaXNuJ3Qgc3BlY2lmaWVkXG4gICAgaWYgKCFfaGFzUGFydE9wdCkge1xuICAgICAgX2FwaVVybCArPSAnJnBhcnQ9c25pcHBldCxpZCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE5neFl0ZEFwaUNvbW1lbnRMaXN0UmVzdWx0PihfYXBpVXJsKTtcbiAgfVxufVxuIl19