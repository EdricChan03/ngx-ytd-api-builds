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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJjb21tZW50cy95dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0lBWWpELGlDQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7O29DQURKLGdEQUFnRDtLQUN2QztJQUN6Qzs7OztPQUlHOzs7Ozs7SUFDSCxzQ0FBSTs7Ozs7SUFBSixVQUFLLElBQThCOztRQUNsQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7O1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQzs7UUFFeEMsR0FBRyxDQUFDLENBQUMsSUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs7WUFFekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBRXRELE9BQU8sSUFBSSxNQUFJLElBQUksU0FBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFHLENBQUM7Z0JBQy9DLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjthQUNEO1NBQ0Q7O1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQztTQUM5QjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNkIsT0FBTyxDQUFDLENBQUM7S0FDMUQ7O2dCQWpDRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQU5RLFVBQVU7OztrQ0FEbkI7O1NBUWEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neFl0ZEFwaUNvbW1lbnRMaXN0T3B0cywgTmd4WXRkQXBpQ29tbWVudExpc3RSZXN1bHQgfSBmcm9tICcuL3l0ZC1hcGktY29tbWVudHMuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29tbWVudFNlcnZpY2Uge1xuXHQvKipcbiBcdCAqIFRoZSBZb3VUdWJlIGJhc2UgQVBJIFVSTFxuIFx0ICovXG5cdHJlYWRvbmx5IHl0ZENvbW1lbnRCYXNlQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY29tbWVudHMnO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXHQvKipcblx0ICogUmV0cmlldmVzIGNvbW1lbnRzXG5cdCAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcblx0ICogQHJldHVybnMgUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtIGZvciBzdWJzY3JpYmluZyB0b1xuXHQgKi9cblx0bGlzdChvcHRzOiBOZ3hZdGRBcGlDb21tZW50TGlzdE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaUNvbW1lbnRMaXN0UmVzdWx0PiB7XG5cdFx0bGV0IF9oYXNQYXJ0T3B0ID0gZmFsc2U7XG5cdFx0bGV0IF9hcGlVcmwgPSB0aGlzLnl0ZENvbW1lbnRCYXNlQXBpVXJsO1xuXHRcdC8vIExvb3AgdGhyb3VnaCBldmVyeSBwcm9wZXJ0eSBpbiB0aGUgb3B0cyBvYmplY3Rcblx0XHRmb3IgKGNvbnN0IHByb3AgaW4gb3B0cykge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgcHJvcGVydHkgaGFzIGEgbm9uLW51bGwgdmFsdWVcblx0XHRcdGlmIChvcHRzLmhhc093blByb3BlcnR5KHByb3ApICYmIG9wdHNbcHJvcF0gIT09IG51bGwpIHtcblx0XHRcdFx0Ly8gQWRkIHBhcmFtZXRlciB0byB0aGUgQVBJIFVSTFxuXHRcdFx0XHRfYXBpVXJsICs9IGAmJHtwcm9wfT0ke2VuY29kZVVSSShvcHRzW3Byb3BdKX1gO1xuXHRcdFx0XHRpZiAocHJvcCA9PT0gJ3BhcnQnKSB7XG5cdFx0XHRcdFx0X2hhc1BhcnRPcHQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIERlZmF1bHQgaWYgYHBhcnRgIHBhcmFtZXRlciBpc24ndCBzcGVjaWZpZWRcblx0XHRpZiAoIV9oYXNQYXJ0T3B0KSB7XG5cdFx0XHRfYXBpVXJsICs9ICcmcGFydD1zbmlwcGV0LGlkJztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpQ29tbWVudExpc3RSZXN1bHQ+KF9hcGlVcmwpO1xuXHR9XG59XG4iXX0=