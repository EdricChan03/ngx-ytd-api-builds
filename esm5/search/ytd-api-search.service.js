/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var NgxYtdApiSearchService = /** @class */ (function () {
    /**
     * The YouTube base API URL
     */
    function NgxYtdApiSearchService(http) {
        this.http = http;
        /**
         * The API URL of the YouTube Data v3 Search API
         */
        this.ytdSearchBaseApiUrl = 'https://www.googleapis.com/youtube/v3/search';
    }
    /**
     * Searches using the YouTube HTTP Data API
     * @param query The query to search for. See the {@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param opts Options for searching
     * @deprecated Use {@link NgxYtdApiSearchService#list} instead.
     * @deletion-target 1.0.0-alpha.5
     * @returns Results of the search as a stream
     */
    /**
     * Searches using the YouTube HTTP Data API
     * @deprecated Use {\@link NgxYtdApiSearchService#list} instead.
     * \@deletion-target 1.0.0-alpha.5
     * @param {?} query The query to search for. See the {\@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    NgxYtdApiSearchService.prototype.search = /**
     * Searches using the YouTube HTTP Data API
     * @deprecated Use {\@link NgxYtdApiSearchService#list} instead.
     * \@deletion-target 1.0.0-alpha.5
     * @param {?} query The query to search for. See the {\@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    function (query, opts) {
        return this.list(query, opts);
    };
    /**
     * Searches using the YouTube HTTP Data API
     * @param query The query to search for. See the {@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param opts Options for searching
     * @returns Results of the search as a stream
     */
    /**
     * Searches using the YouTube HTTP Data API
     * @param {?} query The query to search for. See the {\@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    NgxYtdApiSearchService.prototype.list = /**
     * Searches using the YouTube HTTP Data API
     * @param {?} query The query to search for. See the {\@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    function (query, opts) {
        query = encodeURI(query);
        /** @type {?} */
        var _hasPartOpt = false;
        /** @type {?} */
        var _apiUrl = this.ytdSearchBaseApiUrl + "?q=" + query;
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
    NgxYtdApiSearchService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgxYtdApiSearchService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ NgxYtdApiSearchService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiSearchService_Factory() { return new NgxYtdApiSearchService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiSearchService, providedIn: "root" });
    return NgxYtdApiSearchService;
}());
export { NgxYtdApiSearchService };
if (false) {
    /**
     * The API URL of the YouTube Data v3 Search API
     * @type {?}
     */
    NgxYtdApiSearchService.prototype.ytdSearchBaseApiUrl;
    /** @type {?} */
    NgxYtdApiSearchService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0lBU2pEOztPQUVHO0lBQ0gsZ0NBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7Ozs7bUNBSUcsOENBQThDO0tBSjVDO0lBS3pDOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7O0lBQ0gsdUNBQU07Ozs7Ozs7OztJQUFOLFVBQU8sS0FBYSxFQUFFLElBQTZCO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5QjtJQUNEOzs7Ozs7T0FNRzs7Ozs7Ozs7SUFDSCxxQ0FBSTs7Ozs7OztJQUFKLFVBQUssS0FBYSxFQUFFLElBQTZCO1FBQ2hELEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBQ3pCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQzs7UUFDeEIsSUFBSSxPQUFPLEdBQU0sSUFBSSxDQUFDLG1CQUFtQixXQUFNLEtBQU8sQ0FBQzs7UUFFdkQsR0FBRyxDQUFDLENBQUMsSUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs7WUFFekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBRXRELE9BQU8sSUFBSSxNQUFJLElBQUksU0FBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFHLENBQUM7Z0JBQy9DLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjthQUNEO1NBQ0Q7O1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQztTQUM5QjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNEIsT0FBTyxDQUFDLENBQUM7S0FDekQ7O2dCQW5ERCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVBRLFVBQVU7OztpQ0FEbkI7O1NBU2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE5neFl0ZEFwaVNlYXJjaExpc3RPcHRzLCBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLXNlYXJjaC5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpU2VhcmNoU2VydmljZSB7XG5cdC8qKlxuXHQgKiBUaGUgWW91VHViZSBiYXNlIEFQSSBVUkxcblx0ICovXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cdC8qKlxuXHQgKiBUaGUgQVBJIFVSTCBvZiB0aGUgWW91VHViZSBEYXRhIHYzIFNlYXJjaCBBUElcblx0ICovXG5cdHJlYWRvbmx5IHl0ZFNlYXJjaEJhc2VBcGlVcmw6IHN0cmluZyA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaCc7XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB1c2luZyB0aGUgWW91VHViZSBIVFRQIERhdGEgQVBJXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvci4gU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3F8ZGV2ZWxvcGVyIGRvY3N9XG5cdCAqIGZvciBtb3JlIGluZm8uXG5cdCAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHNlYXJjaGluZ1xuXHQgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaVNlYXJjaFNlcnZpY2UjbGlzdH0gaW5zdGVhZC5cblx0ICogQGRlbGV0aW9uLXRhcmdldCAxLjAuMC1hbHBoYS41XG5cdCAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIG9wdHM6IE5neFl0ZEFwaVNlYXJjaExpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0PiB7XG5cdFx0cmV0dXJuIHRoaXMubGlzdChxdWVyeSwgb3B0cyk7XG5cdH1cblx0LyoqXG5cdCAqIFNlYXJjaGVzIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yLiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcXxkZXZlbG9wZXIgZG9jc31cblx0ICogZm9yIG1vcmUgaW5mby5cblx0ICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3Igc2VhcmNoaW5nXG5cdCAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuXHQgKi9cblx0bGlzdChxdWVyeTogc3RyaW5nLCBvcHRzOiBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdD4ge1xuXHRcdHF1ZXJ5ID0gZW5jb2RlVVJJKHF1ZXJ5KTtcblx0XHRsZXQgX2hhc1BhcnRPcHQgPSBmYWxzZTtcblx0XHRsZXQgX2FwaVVybCA9IGAke3RoaXMueXRkU2VhcmNoQmFzZUFwaVVybH0/cT0ke3F1ZXJ5fWA7XG5cdFx0Ly8gTG9vcCB0aHJvdWdoIGV2ZXJ5IHByb3BlcnR5IGluIHRoZSBvcHRzIG9iamVjdFxuXHRcdGZvciAoY29uc3QgcHJvcCBpbiBvcHRzKSB7XG5cdFx0XHQvLyBDaGVjayBpZiBwcm9wZXJ0eSBoYXMgYSBub24tbnVsbCB2YWx1ZVxuXHRcdFx0aWYgKG9wdHMuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgb3B0c1twcm9wXSAhPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBBZGQgcGFyYW1ldGVyIHRvIHRoZSBBUEkgVVJMXG5cdFx0XHRcdF9hcGlVcmwgKz0gYCYke3Byb3B9PSR7ZW5jb2RlVVJJKG9wdHNbcHJvcF0pfWA7XG5cdFx0XHRcdGlmIChwcm9wID09PSAncGFydCcpIHtcblx0XHRcdFx0XHRfaGFzUGFydE9wdCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gRGVmYXVsdCBpZiBgcGFydGAgcGFyYW1ldGVyIGlzbid0IHNwZWNpZmllZFxuXHRcdGlmICghX2hhc1BhcnRPcHQpIHtcblx0XHRcdF9hcGlVcmwgKz0gJyZwYXJ0PXNuaXBwZXQsaWQnO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0PihfYXBpVXJsKTtcblx0fVxufVxuIl19