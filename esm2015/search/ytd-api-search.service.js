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
/** @nocollapse */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFRbEQsTUFBTTs7Ozs7SUFJSixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7O21DQUlHLDhDQUE4QztLQUo1Qzs7Ozs7O0lBWXpDLElBQUksQ0FBQyxJQUE2Qjs7UUFDaEMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFDaEMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDOztRQUN4QixJQUFJLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsTUFBTSxLQUFLLEVBQUUsQ0FBQzs7UUFFdkQsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7O1lBRXZCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFOztnQkFFcEQsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQ25CLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ3BCO2FBQ0Y7U0FDRjs7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxlQUFlLENBQUM7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE0QixPQUFPLENBQUMsQ0FBQztLQUMxRDs7O1lBdkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHMsIE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQgfSBmcm9tICcuL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlTZWFyY2hTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFRoZSBZb3VUdWJlIGJhc2UgQVBJIFVSTFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgU2VhcmNoIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgeXRkU2VhcmNoQmFzZUFwaVVybDogc3RyaW5nID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoJztcbiAgLyoqXG4gICAqIFNlYXJjaGVzIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcbiAgICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yLiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcXxkZXZlbG9wZXIgZG9jc31cbiAgICogZm9yIG1vcmUgaW5mby5cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3Igc2VhcmNoaW5nXG4gICAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdD4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gZW5jb2RlVVJJKG9wdHMucSk7XG4gICAgbGV0IF9oYXNQYXJ0T3B0ID0gZmFsc2U7XG4gICAgbGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZFNlYXJjaEJhc2VBcGlVcmx9P3E9JHtxdWVyeX1gO1xuICAgIC8vIExvb3AgdGhyb3VnaCBldmVyeSBwcm9wZXJ0eSBpbiB0aGUgb3B0cyBvYmplY3RcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gb3B0cykge1xuICAgICAgLy8gQ2hlY2sgaWYgcHJvcGVydHkgaGFzIGEgbm9uLW51bGwgdmFsdWVcbiAgICAgIGlmIChvcHRzLmhhc093blByb3BlcnR5KHByb3ApICYmIG9wdHNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgLy8gQWRkIHBhcmFtZXRlciB0byB0aGUgQVBJIFVSTFxuICAgICAgICBfYXBpVXJsICs9IGAmJHtwcm9wfT0ke2VuY29kZVVSSShvcHRzW3Byb3BdKX1gO1xuICAgICAgICBpZiAocHJvcCA9PT0gJ3BhcnQnKSB7XG4gICAgICAgICAgX2hhc1BhcnRPcHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIERlZmF1bHQgaWYgYHBhcnRgIHBhcmFtZXRlciBpc24ndCBzcGVjaWZpZWRcbiAgICBpZiAoIV9oYXNQYXJ0T3B0KSB7XG4gICAgICBfYXBpVXJsICs9ICcmcGFydD1zbmlwcGV0JztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdD4oX2FwaVVybCk7XG4gIH1cbn1cbiJdfQ==