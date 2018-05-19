import { Injectable, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
     * @returns Results of the search as a stream
    */
    /**
     * Searches for videos using the YouTube HTTP Data API
     * @param {?} query The query to search for
     * @param {?} opts Options for YouTube Data API for Videos
     * @return {?} Results of the search as a stream
     */
    NgxYtdApiService.prototype.searchVideos = /**
     * Searches for videos using the YouTube HTTP Data API
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
     * @returns Results of the search as a stream
     */
    /**
     * Searches using the YouTube HTTP Data API
     * @param {?} query The query to search for
     * @param {?} opts
     * @return {?} Results of the search as a stream
     */
    NgxYtdApiService.prototype.search = /**
     * Searches using the YouTube HTTP Data API
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
    /** @nocollapse */ NgxYtdApiService.ngInjectableDef = defineInjectable({ factory: function NgxYtdApiService_Factory() { return new NgxYtdApiService(inject(HttpClient)); }, token: NgxYtdApiService, providedIn: "root" });
    return NgxYtdApiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgxYtdApiService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXl0ZC1hcGkuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC15dGQtYXBpL3l0ZC1hcGkuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgKiBhcyB5dGRBcGlJbnRlcmZhY2VzIGZyb20gJy4veXRkLWFwaS5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpU2VydmljZSB7XG5cdC8qKlxuXHQgKiBUaGUgWW91VHViZSBiYXNlIEFQSSBVUkxcblx0ICovXG5cdHByaXZhdGUgeXRkQXBpQmFzZVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzLyc7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cblx0LyoqXG5cdCAqIFNlYXJjaGVzIGZvciB2aWRlb3MgdXNpbmcgdGhlIFlvdVR1YmUgSFRUUCBEYXRhIEFQSVxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgWW91VHViZSBEYXRhIEFQSSBmb3IgVmlkZW9zXG5cdCAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuXHQqL1xuXHRzZWFyY2hWaWRlb3MocXVlcnk6IHN0cmluZywgb3B0czogeXRkQXBpSW50ZXJmYWNlcy5OZ3hZdGRBcGlWaWRlb1NlYXJjaE9wdHMpOiBPYnNlcnZhYmxlPHl0ZEFwaUludGVyZmFjZXMuTmd4WXRkQXBpU2VhcmNoUmVzdWx0PiB7XG5cdFx0Ly8gRW5jb2RlIHRoZSBxdWVyeVxuXHRcdHF1ZXJ5ID0gZW5jb2RlVVJJKHF1ZXJ5KTtcblx0XHRsZXQgX2FwaVVybCA9IGAke3RoaXMueXRkQXBpQmFzZVVybH1zZWFyY2g/cT0ke3F1ZXJ5fSZ0eXBlPXZpZGVvJnBhcnQ9c25pcHBldCxpZCZrZXk9JHtvcHRzLmFwaUtleX1gO1xuXHRcdGlmIChvcHRzLm1heFJlc3VsdHMpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZtYXhSZXN1bHRzPSR7b3B0cy5tYXhSZXN1bHRzfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9hcGlVcmwgKz0gJyZtYXhSZXN1bHRzPTUwJztcblx0XHR9XG5cdFx0aWYgKG9wdHMudmlkZW9FbWJlZGRhYmxlKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmdmlkZW9FbWJlZGRhYmxlPSR7b3B0cy52aWRlb0VtYmVkZGFibGV9YDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8eXRkQXBpSW50ZXJmYWNlcy5OZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+KF9hcGlVcmwpO1xuXHR9XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB1c2luZyB0aGUgWW91VHViZSBIVFRQIERhdGEgQVBJXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gb3B0c1xuXHQgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW1cblx0ICovXG5cdHNlYXJjaChxdWVyeTogc3RyaW5nLCBvcHRzOiB5dGRBcGlJbnRlcmZhY2VzLk5neFl0ZEFwaVNlYXJjaE9wdHMpOiBPYnNlcnZhYmxlPHl0ZEFwaUludGVyZmFjZXMuTmd4WXRkQXBpU2VhcmNoUmVzdWx0PiB7XG5cdFx0cXVlcnkgPSBlbmNvZGVVUkkocXVlcnkpO1xuXHRcdGxldCBfYXBpVXJsID0gYCR7dGhpcy55dGRBcGlCYXNlVXJsfXNlYXJjaD9xPSR7cXVlcnl9JnR5cGU9dmlkZW8mcGFydD1zbmlwcGV0LGlkJmtleT0ke29wdHMuYXBpS2V5fWA7XG5cdFx0aWYgKG9wdHMubWF4UmVzdWx0cykge1xuXHRcdFx0X2FwaVVybCArPSBgJm1heFJlc3VsdHM9JHtvcHRzLm1heFJlc3VsdHN9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2FwaVVybCArPSAnJm1heFJlc3VsdHM9NTAnO1xuXHRcdH1cblx0XHRpZiAob3B0cy5jaGFubmVsSWQpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZjaGFubmVsSWQ9JHtvcHRzLmNoYW5uZWxJZH1gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDx5dGRBcGlJbnRlcmZhY2VzLk5neFl0ZEFwaVNlYXJjaFJlc3VsdD4oX2FwaVVybCk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFjQywwQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTs7Ozs2QkFEWix3Q0FBd0M7S0FDdkI7Ozs7Ozs7Ozs7Ozs7SUFRekMsdUNBQVk7Ozs7OztJQUFaLFVBQWEsS0FBYSxFQUFFLElBQStDOztRQUUxRSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLHFCQUFJLE9BQU8sR0FBTSxJQUFJLENBQUMsYUFBYSxpQkFBWSxLQUFLLHdDQUFtQyxJQUFJLENBQUMsTUFBUSxDQUFDO1FBQ3JHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPLElBQUksaUJBQWUsSUFBSSxDQUFDLFVBQVksQ0FBQztTQUM1QzthQUFNO1lBQ04sT0FBTyxJQUFJLGdCQUFnQixDQUFDO1NBQzVCO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxzQkFBb0IsSUFBSSxDQUFDLGVBQWlCLENBQUM7U0FDdEQ7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF5QyxPQUFPLENBQUMsQ0FBQztLQUN0RTs7Ozs7Ozs7Ozs7OztJQU9ELGlDQUFNOzs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxJQUEwQztRQUMvRCxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLHFCQUFJLE9BQU8sR0FBTSxJQUFJLENBQUMsYUFBYSxpQkFBWSxLQUFLLHdDQUFtQyxJQUFJLENBQUMsTUFBUSxDQUFDO1FBQ3JHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPLElBQUksaUJBQWUsSUFBSSxDQUFDLFVBQVksQ0FBQztTQUM1QzthQUFNO1lBQ04sT0FBTyxJQUFJLGdCQUFnQixDQUFDO1NBQzVCO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxnQkFBYyxJQUFJLENBQUMsU0FBVyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBeUMsT0FBTyxDQUFDLENBQUM7S0FDdEU7O2dCQWhERCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQU5RLFVBQVU7OzsyQkFGbkI7Ozs7Ozs7Ozs7Ozs7OzsifQ==