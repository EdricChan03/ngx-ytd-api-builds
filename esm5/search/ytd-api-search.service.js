/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var NgxYtdApiSearchService = /** @class */ (function () {
    function NgxYtdApiSearchService(http) {
        this.http = http;
        /**
         * The YouTube base API URL
         */
        this.ytdApiBaseUrl = 'https://www.googleapis.com/youtube/v3/';
    }
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
    NgxYtdApiSearchService.prototype.search = /**
     * Searches using the YouTube HTTP Data API
     * @param {?} query The query to search for. See the {\@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    function (query, opts) {
        query = encodeURI(query);
        var /** @type {?} */ _apiUrl = this.ytdApiBaseUrl + "search?q=" + query + "&part=snippet,id";
        // Loop through every property in the opts object
        for (var /** @type {?} */ prop in opts) {
            // Check if property has a non-null value
            if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
                // Add parameter to the API URL
                _apiUrl += "&" + prop + "=" + encodeURI(opts[prop]);
            }
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
function NgxYtdApiSearchService_tsickle_Closure_declarations() {
    /**
     * The YouTube base API URL
     * @type {?}
     */
    NgxYtdApiSearchService.prototype.ytdApiBaseUrl;
    /** @type {?} */
    NgxYtdApiSearchService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0lBYWpELGdDQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7OzZCQURaLHdDQUF3QztLQUN2QjtJQUN6Qzs7Ozs7O09BTUc7Ozs7Ozs7O0lBQ0gsdUNBQU07Ozs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxJQUF5QjtRQUM5QyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLHFCQUFJLE9BQU8sR0FBTSxJQUFJLENBQUMsYUFBYSxpQkFBWSxLQUFLLHFCQUFrQixDQUFDOztRQUV2RSxHQUFHLENBQUMsQ0FBQyxxQkFBTSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs7WUFFekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBRXRELE9BQU8sSUFBSSxNQUFJLElBQUksU0FBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFHLENBQUM7YUFDL0M7U0FDRDtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsT0FBTyxDQUFDLENBQUM7S0FDckQ7O2dCQTVCRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVBRLFVBQVU7OztpQ0FEbkI7O1NBU2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmd4WXRkQXBpU2VhcmNoT3B0cywgTmd4WXRkQXBpU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLXNlYXJjaC5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpU2VhcmNoU2VydmljZSB7XG5cdC8qKlxuXHQgKiBUaGUgWW91VHViZSBiYXNlIEFQSSBVUkxcblx0ICovXG5cdHByaXZhdGUgeXRkQXBpQmFzZVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzLyc7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB1c2luZyB0aGUgWW91VHViZSBIVFRQIERhdGEgQVBJXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvci4gU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3F8ZGV2ZWxvcGVyIGRvY3N9XG5cdCAqIGZvciBtb3JlIGluZm8uXG5cdCAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHNlYXJjaGluZ1xuXHQgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW1cblx0ICovXG5cdHNlYXJjaChxdWVyeTogc3RyaW5nLCBvcHRzOiBOZ3hZdGRBcGlTZWFyY2hPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+IHtcblx0XHRxdWVyeSA9IGVuY29kZVVSSShxdWVyeSk7XG5cdFx0bGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaUJhc2VVcmx9c2VhcmNoP3E9JHtxdWVyeX0mcGFydD1zbmlwcGV0LGlkYDtcblx0XHQvLyBMb29wIHRocm91Z2ggZXZlcnkgcHJvcGVydHkgaW4gdGhlIG9wdHMgb2JqZWN0XG5cdFx0Zm9yIChjb25zdCBwcm9wIGluIG9wdHMpIHtcblx0XHRcdC8vIENoZWNrIGlmIHByb3BlcnR5IGhhcyBhIG5vbi1udWxsIHZhbHVlXG5cdFx0XHRpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBvcHRzW3Byb3BdICE9PSBudWxsKSB7XG5cdFx0XHRcdC8vIEFkZCBwYXJhbWV0ZXIgdG8gdGhlIEFQSSBVUkxcblx0XHRcdFx0X2FwaVVybCArPSBgJiR7cHJvcH09JHtlbmNvZGVVUkkob3B0c1twcm9wXSl9YDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpU2VhcmNoUmVzdWx0PihfYXBpVXJsKTtcblx0fVxufVxuIl19