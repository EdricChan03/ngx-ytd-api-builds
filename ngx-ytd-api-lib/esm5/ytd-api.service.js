/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var NgxYtdApiService = /** @class */ (function () {
    function NgxYtdApiService(http) {
        this.http = http;
        /**
         * The YouTube base API URL
         */
        this.ytdApiBaseUrl = 'https://www.googleapis.com/youtube/v3/';
    }
    /**
     * Searches for videos using the YouTube HTTP Data API
     * @param query The query to search for
     * @param opts Options for YouTube Data API for Videos
     * @deprecated Use this method from the `search` submodule
     * @returns Results of the search as a stream
    */
    /**
     * Searches for videos using the YouTube HTTP Data API
     * @deprecated Use this method from the `search` submodule
     * @param {?} query The query to search for
     * @param {?} opts Options for YouTube Data API for Videos
     * @return {?} Results of the search as a stream
     */
    NgxYtdApiService.prototype.searchVideos = /**
     * Searches for videos using the YouTube HTTP Data API
     * @deprecated Use this method from the `search` submodule
     * @param {?} query The query to search for
     * @param {?} opts Options for YouTube Data API for Videos
     * @return {?} Results of the search as a stream
     */
    function (query, opts) {
        // Encode the query
        query = encodeURI(query);
        var /** @type {?} */ _apiUrl = this.ytdApiBaseUrl + "search?q=" + query + "&type=video&part=snippet,id&key=" + opts.apiKey;
        if (opts.maxResults) {
            _apiUrl += "&maxResults=" + opts.maxResults;
        }
        else {
            _apiUrl += '&maxResults=50';
        }
        if (opts.videoEmbeddable) {
            _apiUrl += "&videoEmbeddable=" + opts.videoEmbeddable;
        }
        return this.http.get(_apiUrl);
    };
    /**
     * Searches using the YouTube HTTP Data API
     * @param query The query to search for
     * @param opts
     * @deprecated Use this method from the `search` submodule
     * @returns Results of the search as a stream
     */
    /**
     * Searches using the YouTube HTTP Data API
     * @deprecated Use this method from the `search` submodule
     * @param {?} query The query to search for
     * @param {?} opts
     * @return {?} Results of the search as a stream
     */
    NgxYtdApiService.prototype.search = /**
     * Searches using the YouTube HTTP Data API
     * @deprecated Use this method from the `search` submodule
     * @param {?} query The query to search for
     * @param {?} opts
     * @return {?} Results of the search as a stream
     */
    function (query, opts) {
        query = encodeURI(query);
        var /** @type {?} */ _apiUrl = this.ytdApiBaseUrl + "search?q=" + query + "&type=video&part=snippet,id&key=" + opts.apiKey;
        if (opts.maxResults) {
            _apiUrl += "&maxResults=" + opts.maxResults;
        }
        else {
            _apiUrl += '&maxResults=50';
        }
        if (opts.channelId) {
            _apiUrl += "&channelId=" + opts.channelId;
        }
        return this.http.get(_apiUrl);
    };
    NgxYtdApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgxYtdApiService.ctorParameters = function () { return [
        { type: HttpClient, },
    ]; };
    /** @nocollapse */ NgxYtdApiService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiService_Factory() { return new NgxYtdApiService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiService, providedIn: "root" });
    return NgxYtdApiService;
}());
export { NgxYtdApiService };
function NgxYtdApiService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NgxYtdApiService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NgxYtdApiService.ctorParameters;
    /**
     * The YouTube base API URL
     * @type {?}
     */
    NgxYtdApiService.prototype.ytdApiBaseUrl;
    /** @type {?} */
    NgxYtdApiService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJ5dGQtYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0lBWWpELDBCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7OzZCQURaLHdDQUF3QztLQUN2QjtJQUV6Qzs7Ozs7O01BTUU7Ozs7Ozs7O0lBQ0YsdUNBQVk7Ozs7Ozs7SUFBWixVQUFhLEtBQWEsRUFBRSxJQUE4Qjs7UUFFekQsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixxQkFBSSxPQUFPLEdBQU0sSUFBSSxDQUFDLGFBQWEsaUJBQVksS0FBSyx3Q0FBbUMsSUFBSSxDQUFDLE1BQVEsQ0FBQztRQUNyRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNyQixPQUFPLElBQUksaUJBQWUsSUFBSSxDQUFDLFVBQVksQ0FBQztTQUM1QztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsT0FBTyxJQUFJLGdCQUFnQixDQUFDO1NBQzVCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsT0FBTyxJQUFJLHNCQUFvQixJQUFJLENBQUMsZUFBaUIsQ0FBQztTQUN0RDtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsT0FBTyxDQUFDLENBQUM7S0FDckQ7SUFDRDs7Ozs7O09BTUc7Ozs7Ozs7O0lBQ0gsaUNBQU07Ozs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxJQUF5QjtRQUM5QyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLHFCQUFJLE9BQU8sR0FBTSxJQUFJLENBQUMsYUFBYSxpQkFBWSxLQUFLLHdDQUFtQyxJQUFJLENBQUMsTUFBUSxDQUFDO1FBQ3JHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sSUFBSSxpQkFBZSxJQUFJLENBQUMsVUFBWSxDQUFDO1NBQzVDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxPQUFPLElBQUksZ0JBQWdCLENBQUM7U0FDNUI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLElBQUksZ0JBQWMsSUFBSSxDQUFDLFNBQVcsQ0FBQztTQUMxQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsT0FBTyxDQUFDLENBQUM7S0FDckQ7O2dCQWxERCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQU5RLFVBQVU7OzsyQkFGbkI7O1NBU2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgTmd4WXRkQXBpU2VhcmNoUmVzdWx0LCBOZ3hZdGRBcGlTZWFyY2hPcHRzLCBOZ3hZdGRBcGlWaWRlb1NlYXJjaE9wdHMgfSBmcm9tICcuL3NlYXJjaC95dGQtYXBpLXNlYXJjaC5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpU2VydmljZSB7XG5cdC8qKlxuXHQgKiBUaGUgWW91VHViZSBiYXNlIEFQSSBVUkxcblx0ICovXG5cdHByaXZhdGUgeXRkQXBpQmFzZVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzLyc7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cblx0LyoqXG5cdCAqIFNlYXJjaGVzIGZvciB2aWRlb3MgdXNpbmcgdGhlIFlvdVR1YmUgSFRUUCBEYXRhIEFQSVxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgWW91VHViZSBEYXRhIEFQSSBmb3IgVmlkZW9zXG5cdCAqIEBkZXByZWNhdGVkIFVzZSB0aGlzIG1ldGhvZCBmcm9tIHRoZSBgc2VhcmNoYCBzdWJtb2R1bGVcblx0ICogQHJldHVybnMgUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtXG5cdCovXG5cdHNlYXJjaFZpZGVvcyhxdWVyeTogc3RyaW5nLCBvcHRzOiBOZ3hZdGRBcGlWaWRlb1NlYXJjaE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVNlYXJjaFJlc3VsdD4ge1xuXHRcdC8vIEVuY29kZSB0aGUgcXVlcnlcblx0XHRxdWVyeSA9IGVuY29kZVVSSShxdWVyeSk7XG5cdFx0bGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaUJhc2VVcmx9c2VhcmNoP3E9JHtxdWVyeX0mdHlwZT12aWRlbyZwYXJ0PXNuaXBwZXQsaWQma2V5PSR7b3B0cy5hcGlLZXl9YDtcblx0XHRpZiAob3B0cy5tYXhSZXN1bHRzKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmbWF4UmVzdWx0cz0ke29wdHMubWF4UmVzdWx0c31gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYXBpVXJsICs9ICcmbWF4UmVzdWx0cz01MCc7XG5cdFx0fVxuXHRcdGlmIChvcHRzLnZpZGVvRW1iZWRkYWJsZSkge1xuXHRcdFx0X2FwaVVybCArPSBgJnZpZGVvRW1iZWRkYWJsZT0ke29wdHMudmlkZW9FbWJlZGRhYmxlfWA7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PE5neFl0ZEFwaVNlYXJjaFJlc3VsdD4oX2FwaVVybCk7XG5cdH1cblx0LyoqXG5cdCAqIFNlYXJjaGVzIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBvcHRzXG5cdCAqIEBkZXByZWNhdGVkIFVzZSB0aGlzIG1ldGhvZCBmcm9tIHRoZSBgc2VhcmNoYCBzdWJtb2R1bGVcblx0ICogQHJldHVybnMgUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtXG5cdCAqL1xuXHRzZWFyY2gocXVlcnk6IHN0cmluZywgb3B0czogTmd4WXRkQXBpU2VhcmNoT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpU2VhcmNoUmVzdWx0PiB7XG5cdFx0cXVlcnkgPSBlbmNvZGVVUkkocXVlcnkpO1xuXHRcdGxldCBfYXBpVXJsID0gYCR7dGhpcy55dGRBcGlCYXNlVXJsfXNlYXJjaD9xPSR7cXVlcnl9JnR5cGU9dmlkZW8mcGFydD1zbmlwcGV0LGlkJmtleT0ke29wdHMuYXBpS2V5fWA7XG5cdFx0aWYgKG9wdHMubWF4UmVzdWx0cykge1xuXHRcdFx0X2FwaVVybCArPSBgJm1heFJlc3VsdHM9JHtvcHRzLm1heFJlc3VsdHN9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2FwaVVybCArPSAnJm1heFJlc3VsdHM9NTAnO1xuXHRcdH1cblx0XHRpZiAob3B0cy5jaGFubmVsSWQpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZjaGFubmVsSWQ9JHtvcHRzLmNoYW5uZWxJZH1gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+KF9hcGlVcmwpO1xuXHR9XG59XG4iXX0=