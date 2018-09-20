/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
            }
        }
        // Default if `part` parameter isn't specified
        if (!_hasPartOpt) {
            _apiUrl += '&part=snippet';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFRbEQsTUFBTTs7Ozs7SUFJSixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ3BDOztXQUVHO1FBQ00sd0JBQW1CLEdBQVcsOENBQThDLENBQUM7SUFKOUMsQ0FBQzs7Ozs7O0lBWXpDLElBQUksQ0FBQyxJQUE2Qjs7Y0FDMUIsS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztZQUMzQixXQUFXLEdBQUcsS0FBSzs7WUFDbkIsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixNQUFNLEtBQUssRUFBRTtRQUN0RCxpREFBaUQ7UUFDakQsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDdkIseUNBQXlDO1lBQ3pDLGdFQUFnRTtZQUNoRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO2dCQUNwRSwrQkFBK0I7Z0JBQy9CLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO29CQUNuQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjthQUNGO1NBQ0Y7UUFDRCw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixPQUFPLElBQUksZUFBZSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNEIsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7O1lBeENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsVUFBVTs7Ozs7Ozs7SUFnQmpCLHFEQUFzRjs7SUFKMUUsc0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE5neFl0ZEFwaVNlYXJjaExpc3RPcHRzLCBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLXNlYXJjaC5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpU2VhcmNoU2VydmljZSB7XG4gIC8qKlxuICAgKiBUaGUgWW91VHViZSBiYXNlIEFQSSBVUkxcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG4gIC8qKlxuICAgKiBUaGUgQVBJIFVSTCBvZiB0aGUgWW91VHViZSBEYXRhIHYzIFNlYXJjaCBBUElcbiAgICovXG4gIHJlYWRvbmx5IHl0ZFNlYXJjaEJhc2VBcGlVcmw6IHN0cmluZyA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaCc7XG4gIC8qKlxuICAgKiBTZWFyY2hlcyB1c2luZyB0aGUgWW91VHViZSBIVFRQIERhdGEgQVBJXG4gICAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvci4gU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3F8ZGV2ZWxvcGVyIGRvY3N9XG4gICAqIGZvciBtb3JlIGluZm8uXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHNlYXJjaGluZ1xuICAgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW1cbiAgICovXG4gIGxpc3Qob3B0czogTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQ+IHtcbiAgICBjb25zdCBxdWVyeSA9IGVuY29kZVVSSShvcHRzLnEpO1xuICAgIGxldCBfaGFzUGFydE9wdCA9IGZhbHNlO1xuICAgIGxldCBfYXBpVXJsID0gYCR7dGhpcy55dGRTZWFyY2hCYXNlQXBpVXJsfT9xPSR7cXVlcnl9YDtcbiAgICAvLyBMb29wIHRocm91Z2ggZXZlcnkgcHJvcGVydHkgaW4gdGhlIG9wdHMgb2JqZWN0XG4gICAgZm9yIChjb25zdCBwcm9wIGluIG9wdHMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHByb3BlcnR5IGhhcyBhIG5vbi1udWxsIHZhbHVlXG4gICAgICAvLyBBbHNvIGNoZWNrcyBpZiB0aGUgcHJvcGVydHkgaXMgbm90IGBxYCB0byBwcmV2ZW50IGR1cGxpY2F0aW9uXG4gICAgICBpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBvcHRzW3Byb3BdICE9PSBudWxsICYmIHByb3AgIT09ICdxJykge1xuICAgICAgICAvLyBBZGQgcGFyYW1ldGVyIHRvIHRoZSBBUEkgVVJMXG4gICAgICAgIF9hcGlVcmwgKz0gYCYke3Byb3B9PSR7ZW5jb2RlVVJJKG9wdHNbcHJvcF0pfWA7XG4gICAgICAgIGlmIChwcm9wID09PSAncGFydCcpIHtcbiAgICAgICAgICBfaGFzUGFydE9wdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRGVmYXVsdCBpZiBgcGFydGAgcGFyYW1ldGVyIGlzbid0IHNwZWNpZmllZFxuICAgIGlmICghX2hhc1BhcnRPcHQpIHtcbiAgICAgIF9hcGlVcmwgKz0gJyZwYXJ0PXNuaXBwZXQnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0PihfYXBpVXJsKTtcbiAgfVxufVxuIl19