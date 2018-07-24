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
     * @deprecated Use {\@link NgxYtdApiSearchService#list} instead.
     * \@deletion-target 1.0.0-alpha.5
     * @param {?} query The query to search for. See the {\@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    search(query, opts) {
        return this.list(query, opts);
    }
    /**
     * Searches using the YouTube HTTP Data API
     * @param {?} query The query to search for. See the {\@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    list(query, opts) {
        query = encodeURI(query);
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
            },] },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFRbEQsTUFBTTs7Ozs7SUFJTCxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7O21DQUlHLDhDQUE4QztLQUo1Qzs7Ozs7Ozs7OztJQWN6QyxNQUFNLENBQUMsS0FBYSxFQUFFLElBQTZCO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7Ozs7Ozs7SUFRRCxJQUFJLENBQUMsS0FBYSxFQUFFLElBQTZCO1FBQ2hELEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBQ3pCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQzs7UUFDeEIsSUFBSSxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLE1BQU0sS0FBSyxFQUFFLENBQUM7O1FBRXZELEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7O1lBRXpCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQUV0RCxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjthQUNEO1NBQ0Q7O1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxlQUFlLENBQUM7U0FDM0I7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLE9BQU8sQ0FBQyxDQUFDO0tBQ3pEOzs7WUFuREQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBUFEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cywgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdCB9IGZyb20gJy4veXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVNlYXJjaFNlcnZpY2Uge1xuXHQvKipcblx0ICogVGhlIFlvdVR1YmUgYmFzZSBBUEkgVVJMXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXHQvKipcblx0ICogVGhlIEFQSSBVUkwgb2YgdGhlIFlvdVR1YmUgRGF0YSB2MyBTZWFyY2ggQVBJXG5cdCAqL1xuXHRyZWFkb25seSB5dGRTZWFyY2hCYXNlQXBpVXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2gnO1xuXHQvKipcblx0ICogU2VhcmNoZXMgdXNpbmcgdGhlIFlvdVR1YmUgSFRUUCBEYXRhIEFQSVxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3IuIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNxfGRldmVsb3BlciBkb2NzfVxuXHQgKiBmb3IgbW9yZSBpbmZvLlxuXHQgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciBzZWFyY2hpbmdcblx0ICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlTZWFyY2hTZXJ2aWNlI2xpc3R9IGluc3RlYWQuXG5cdCAqIEBkZWxldGlvbi10YXJnZXQgMS4wLjAtYWxwaGEuNVxuXHQgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW1cblx0ICovXG5cdHNlYXJjaChxdWVyeTogc3RyaW5nLCBvcHRzOiBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdD4ge1xuXHRcdHJldHVybiB0aGlzLmxpc3QocXVlcnksIG9wdHMpO1xuXHR9XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB1c2luZyB0aGUgWW91VHViZSBIVFRQIERhdGEgQVBJXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvci4gU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3F8ZGV2ZWxvcGVyIGRvY3N9XG5cdCAqIGZvciBtb3JlIGluZm8uXG5cdCAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHNlYXJjaGluZ1xuXHQgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW1cblx0ICovXG5cdGxpc3QocXVlcnk6IHN0cmluZywgb3B0czogTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQ+IHtcblx0XHRxdWVyeSA9IGVuY29kZVVSSShxdWVyeSk7XG5cdFx0bGV0IF9oYXNQYXJ0T3B0ID0gZmFsc2U7XG5cdFx0bGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZFNlYXJjaEJhc2VBcGlVcmx9P3E9JHtxdWVyeX1gO1xuXHRcdC8vIExvb3AgdGhyb3VnaCBldmVyeSBwcm9wZXJ0eSBpbiB0aGUgb3B0cyBvYmplY3Rcblx0XHRmb3IgKGNvbnN0IHByb3AgaW4gb3B0cykge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgcHJvcGVydHkgaGFzIGEgbm9uLW51bGwgdmFsdWVcblx0XHRcdGlmIChvcHRzLmhhc093blByb3BlcnR5KHByb3ApICYmIG9wdHNbcHJvcF0gIT09IG51bGwpIHtcblx0XHRcdFx0Ly8gQWRkIHBhcmFtZXRlciB0byB0aGUgQVBJIFVSTFxuXHRcdFx0XHRfYXBpVXJsICs9IGAmJHtwcm9wfT0ke2VuY29kZVVSSShvcHRzW3Byb3BdKX1gO1xuXHRcdFx0XHRpZiAocHJvcCA9PT0gJ3BhcnQnKSB7XG5cdFx0XHRcdFx0X2hhc1BhcnRPcHQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIERlZmF1bHQgaWYgYHBhcnRgIHBhcmFtZXRlciBpc24ndCBzcGVjaWZpZWRcblx0XHRpZiAoIV9oYXNQYXJ0T3B0KSB7XG5cdFx0XHRfYXBpVXJsICs9ICcmcGFydD1zbmlwcGV0Jztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdD4oX2FwaVVybCk7XG5cdH1cbn1cbiJdfQ==