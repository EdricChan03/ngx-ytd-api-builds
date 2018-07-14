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
        let _apiUrl = this.ytdCommentBaseApiUrl;
        // Loop through every property in the opts object
        for (const prop in opts) {
            // Check if property has a non-null value
            if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
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
            },] },
];
/** @nocollapse */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJjb21tZW50cy95dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFPbEQsTUFBTTs7OztJQUtMLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7Ozs7b0NBREosZ0RBQWdEO0tBQ3ZDOzs7Ozs7SUFNekMsSUFBSSxDQUFDLElBQThCOztRQUNsQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7O1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQzs7UUFFeEMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs7WUFFekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBRXRELE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Q7U0FDRDs7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbEIsT0FBTyxJQUFJLGtCQUFrQixDQUFDO1NBQzlCO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE2QixPQUFPLENBQUMsQ0FBQztLQUMxRDs7O1lBakNELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQU5RLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbWVudExpc3RPcHRzLCBOZ3hZdGRBcGlDb21tZW50TGlzdFJlc3VsdCB9IGZyb20gJy4veXRkLWFwaS1jb21tZW50cy5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlDb21tZW50U2VydmljZSB7XG5cdC8qKlxuIFx0ICogVGhlIFlvdVR1YmUgYmFzZSBBUEkgVVJMXG4gXHQgKi9cblx0cmVhZG9ubHkgeXRkQ29tbWVudEJhc2VBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9jb21tZW50cyc7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgY29tbWVudHNcblx0ICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuXHQgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW0gZm9yIHN1YnNjcmliaW5nIHRvXG5cdCAqL1xuXHRsaXN0KG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpQ29tbWVudExpc3RSZXN1bHQ+IHtcblx0XHRsZXQgX2hhc1BhcnRPcHQgPSBmYWxzZTtcblx0XHRsZXQgX2FwaVVybCA9IHRoaXMueXRkQ29tbWVudEJhc2VBcGlVcmw7XG5cdFx0Ly8gTG9vcCB0aHJvdWdoIGV2ZXJ5IHByb3BlcnR5IGluIHRoZSBvcHRzIG9iamVjdFxuXHRcdGZvciAoY29uc3QgcHJvcCBpbiBvcHRzKSB7XG5cdFx0XHQvLyBDaGVjayBpZiBwcm9wZXJ0eSBoYXMgYSBub24tbnVsbCB2YWx1ZVxuXHRcdFx0aWYgKG9wdHMuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgb3B0c1twcm9wXSAhPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBBZGQgcGFyYW1ldGVyIHRvIHRoZSBBUEkgVVJMXG5cdFx0XHRcdF9hcGlVcmwgKz0gYCYke3Byb3B9PSR7ZW5jb2RlVVJJKG9wdHNbcHJvcF0pfWA7XG5cdFx0XHRcdGlmIChwcm9wID09PSAncGFydCcpIHtcblx0XHRcdFx0XHRfaGFzUGFydE9wdCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gRGVmYXVsdCBpZiBgcGFydGAgcGFyYW1ldGVyIGlzbid0IHNwZWNpZmllZFxuXHRcdGlmICghX2hhc1BhcnRPcHQpIHtcblx0XHRcdF9hcGlVcmwgKz0gJyZwYXJ0PXNuaXBwZXQsaWQnO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlDb21tZW50TGlzdFJlc3VsdD4oX2FwaVVybCk7XG5cdH1cbn1cbiJdfQ==