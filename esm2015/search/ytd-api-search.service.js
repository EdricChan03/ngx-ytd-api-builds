/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NgxYtdApiSearchService {
    /**
     * The YouTube base API URL
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        /**
         * The API URL of the YouTube Data v3 Search API
         */
        this.ytdSearchBaseApiUrl = 'https://www.googleapis.com/youtube/v3/search';
    }
    /**
     * Searches using the YouTube HTTP Data API
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    list(opts) {
        /** @type {?} */
        const query = encodeURI(opts.q);
        /** @type {?} */
        let _hasPartOpt = false;
        /** @type {?} */
        let _apiUrl = `${this.ytdSearchBaseApiUrl}?q=${query}`;
        /** @type {?} */
        let _httpHeaders;
        // Loop through every property in the opts object
        for (const prop in opts) {
            // Check if property has a non-null value
            // Also checks if the property is not `q` to prevent duplication
            if (opts.hasOwnProperty(prop) && opts[prop] !== null && prop !== 'q') {
                // Add parameter to the API URL
                _apiUrl += `&${prop}=${encodeURI(opts[prop])}`;
                if (prop === 'part') {
                    _hasPartOpt = true;
                }
                // Special case as the API doesn't accept camcel case for the
                // access token parameter.
                if (prop === 'accessToken') {
                    _httpHeaders = new HttpHeaders({ 'Authorization': `Bearer ${opts[prop]}` });
                }
            }
        }
        // Default if `part` parameter isn't specified
        if (!_hasPartOpt) {
            _apiUrl += '&part=snippet';
        }
        if (_httpHeaders) {
            return this.http.get(_apiUrl, { headers: _httpHeaders });
        }
        return this.http.get(_apiUrl);
    }
}
NgxYtdApiSearchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgxYtdApiSearchService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ NgxYtdApiSearchService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiSearchService_Factory() { return new NgxYtdApiSearchService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiSearchService, providedIn: "root" });
if (false) {
    /**
     * The API URL of the YouTube Data v3 Search API
     * @type {?}
     */
    NgxYtdApiSearchService.prototype.ytdSearchBaseApiUrl;
    /** @type {?} */
    NgxYtdApiSearchService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBUS9ELE1BQU07Ozs7O0lBSUosWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNwQzs7V0FFRztRQUNNLHdCQUFtQixHQUFXLDhDQUE4QyxDQUFDO0lBSjlDLENBQUM7Ozs7OztJQVl6QyxJQUFJLENBQUMsSUFBNkI7O2NBQzFCLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7WUFDM0IsV0FBVyxHQUFHLEtBQUs7O1lBQ25CLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsTUFBTSxLQUFLLEVBQUU7O1lBQ2xELFlBQVk7UUFDaEIsaURBQWlEO1FBQ2pELEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3ZCLHlDQUF5QztZQUN6QyxnRUFBZ0U7WUFDaEUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDcEUsK0JBQStCO2dCQUMvQixPQUFPLElBQUksSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtvQkFDbkIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDcEI7Z0JBQ0QsNkRBQTZEO2dCQUM3RCwwQkFBMEI7Z0JBQzFCLElBQUksSUFBSSxLQUFLLGFBQWEsRUFBRTtvQkFDMUIsWUFBWSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUMsZUFBZSxFQUFFLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO2lCQUMzRTthQUNGO1NBQ0Y7UUFDRCw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixPQUFPLElBQUksZUFBZSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNEIsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUM7U0FDbkY7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE0QixPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUFqREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFQUSxVQUFVOzs7Ozs7OztJQWdCakIscURBQXNGOztJQUoxRSxzQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHMsIE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQgfSBmcm9tICcuL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlTZWFyY2hTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFRoZSBZb3VUdWJlIGJhc2UgQVBJIFVSTFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgU2VhcmNoIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgeXRkU2VhcmNoQmFzZUFwaVVybDogc3RyaW5nID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoJztcbiAgLyoqXG4gICAqIFNlYXJjaGVzIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcbiAgICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yLiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcXxkZXZlbG9wZXIgZG9jc31cbiAgICogZm9yIG1vcmUgaW5mby5cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3Igc2VhcmNoaW5nXG4gICAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdD4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gZW5jb2RlVVJJKG9wdHMucSk7XG4gICAgbGV0IF9oYXNQYXJ0T3B0ID0gZmFsc2U7XG4gICAgbGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZFNlYXJjaEJhc2VBcGlVcmx9P3E9JHtxdWVyeX1gO1xuICAgIGxldCBfaHR0cEhlYWRlcnM7XG4gICAgLy8gTG9vcCB0aHJvdWdoIGV2ZXJ5IHByb3BlcnR5IGluIHRoZSBvcHRzIG9iamVjdFxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBvcHRzKSB7XG4gICAgICAvLyBDaGVjayBpZiBwcm9wZXJ0eSBoYXMgYSBub24tbnVsbCB2YWx1ZVxuICAgICAgLy8gQWxzbyBjaGVja3MgaWYgdGhlIHByb3BlcnR5IGlzIG5vdCBgcWAgdG8gcHJldmVudCBkdXBsaWNhdGlvblxuICAgICAgaWYgKG9wdHMuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgb3B0c1twcm9wXSAhPT0gbnVsbCAmJiBwcm9wICE9PSAncScpIHtcbiAgICAgICAgLy8gQWRkIHBhcmFtZXRlciB0byB0aGUgQVBJIFVSTFxuICAgICAgICBfYXBpVXJsICs9IGAmJHtwcm9wfT0ke2VuY29kZVVSSShvcHRzW3Byb3BdKX1gO1xuICAgICAgICBpZiAocHJvcCA9PT0gJ3BhcnQnKSB7XG4gICAgICAgICAgX2hhc1BhcnRPcHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNwZWNpYWwgY2FzZSBhcyB0aGUgQVBJIGRvZXNuJ3QgYWNjZXB0IGNhbWNlbCBjYXNlIGZvciB0aGVcbiAgICAgICAgLy8gYWNjZXNzIHRva2VuIHBhcmFtZXRlci5cbiAgICAgICAgaWYgKHByb3AgPT09ICdhY2Nlc3NUb2tlbicpIHtcbiAgICAgICAgICBfaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeydBdXRob3JpemF0aW9uJzogYEJlYXJlciAke29wdHNbcHJvcF19YH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIERlZmF1bHQgaWYgYHBhcnRgIHBhcmFtZXRlciBpc24ndCBzcGVjaWZpZWRcbiAgICBpZiAoIV9oYXNQYXJ0T3B0KSB7XG4gICAgICBfYXBpVXJsICs9ICcmcGFydD1zbmlwcGV0JztcbiAgICB9XG4gICAgaWYgKF9odHRwSGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdD4oX2FwaVVybCwge2hlYWRlcnM6IF9odHRwSGVhZGVyc30pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0PihfYXBpVXJsKTtcbiAgfVxufVxuIl19