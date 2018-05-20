import { Injectable, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxYtdApiService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        /**
         * The YouTube base API URL
         */
        this.ytdApiBaseUrl = 'https://www.googleapis.com/youtube/v3/';
    }
    /**
     * Searches for videos using the YouTube HTTP Data API
     * @deprecated Use this method from the `search` submodule
     * @param {?} query The query to search for
     * @param {?} opts Options for YouTube Data API for Videos
     * @return {?} Results of the search as a stream
     */
    searchVideos(query, opts) {
        // Encode the query
        query = encodeURI(query);
        let /** @type {?} */ _apiUrl = `${this.ytdApiBaseUrl}search?q=${query}&type=video&part=snippet,id&key=${opts.apiKey}`;
        if (opts.maxResults) {
            _apiUrl += `&maxResults=${opts.maxResults}`;
        }
        else {
            _apiUrl += '&maxResults=50';
        }
        if (opts.videoEmbeddable) {
            _apiUrl += `&videoEmbeddable=${opts.videoEmbeddable}`;
        }
        return this.http.get(_apiUrl);
    }
    /**
     * Searches using the YouTube HTTP Data API
     * @deprecated Use this method from the `search` submodule
     * @param {?} query The query to search for
     * @param {?} opts
     * @return {?} Results of the search as a stream
     */
    search(query, opts) {
        query = encodeURI(query);
        let /** @type {?} */ _apiUrl = `${this.ytdApiBaseUrl}search?q=${query}&type=video&part=snippet,id&key=${opts.apiKey}`;
        if (opts.maxResults) {
            _apiUrl += `&maxResults=${opts.maxResults}`;
        }
        else {
            _apiUrl += '&maxResults=50';
        }
        if (opts.channelId) {
            _apiUrl += `&channelId=${opts.channelId}`;
        }
        return this.http.get(_apiUrl);
    }
}
NgxYtdApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NgxYtdApiService.ctorParameters = () => [
    { type: HttpClient, },
];
/** @nocollapse */ NgxYtdApiService.ngInjectableDef = defineInjectable({ factory: function NgxYtdApiService_Factory() { return new NgxYtdApiService(inject(HttpClient)); }, token: NgxYtdApiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxYtdApiSearchService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        /**
         * The YouTube base API URL
         */
        this.ytdApiBaseUrl = 'https://www.googleapis.com/youtube/v3/';
    }
    /**
     * Searches for videos using the YouTube HTTP Data API
     * @param {?} query The query to search for
     * @param {?} opts Options for YouTube Data API for Videos
     * @return {?} Results of the search as a stream
     */
    searchVideos(query, opts) {
        // Encode the query
        query = encodeURI(query);
        let /** @type {?} */ _apiUrl = `${this.ytdApiBaseUrl}search?q=${query}&type=video&part=snippet,id&key=${opts.apiKey}`;
        if (opts.maxResults) {
            _apiUrl += `&maxResults=${opts.maxResults}`;
        }
        else {
            _apiUrl += '&maxResults=50';
        }
        if (opts.videoEmbeddable) {
            _apiUrl += `&videoEmbeddable=${opts.videoEmbeddable}`;
        }
        return this.http.get(_apiUrl);
    }
    /**
     * Searches using the YouTube HTTP Data API
     * @param {?} query The query to search for
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    search(query, opts) {
        query = encodeURI(query);
        let /** @type {?} */ _apiUrl = `${this.ytdApiBaseUrl}search?q=${query}&type=video&part=snippet,id&key=${opts.apiKey}`;
        if (opts.maxResults) {
            _apiUrl += `&maxResults=${opts.maxResults}`;
        }
        else {
            _apiUrl += '&maxResults=50';
        }
        if (opts.channelId) {
            _apiUrl += `&channelId=${opts.channelId}`;
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
    { type: HttpClient, },
];
/** @nocollapse */ NgxYtdApiSearchService.ngInjectableDef = defineInjectable({ factory: function NgxYtdApiSearchService_Factory() { return new NgxYtdApiSearchService(inject(HttpClient)); }, token: NgxYtdApiSearchService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Interfaces

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgxYtdApiService, NgxYtdApiSearchService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXl0ZC1hcGkuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC15dGQtYXBpL3l0ZC1hcGkuc2VydmljZS50cyIsIm5nOi8vbmd4LXl0ZC1hcGkvc2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgTmd4WXRkQXBpU2VhcmNoUmVzdWx0LCBOZ3hZdGRBcGlTZWFyY2hPcHRzLCBOZ3hZdGRBcGlWaWRlb1NlYXJjaE9wdHMgfSBmcm9tICcuL3NlYXJjaC95dGQtYXBpLXNlYXJjaC5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpU2VydmljZSB7XG5cdC8qKlxuXHQgKiBUaGUgWW91VHViZSBiYXNlIEFQSSBVUkxcblx0ICovXG5cdHByaXZhdGUgeXRkQXBpQmFzZVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzLyc7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cblx0LyoqXG5cdCAqIFNlYXJjaGVzIGZvciB2aWRlb3MgdXNpbmcgdGhlIFlvdVR1YmUgSFRUUCBEYXRhIEFQSVxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgWW91VHViZSBEYXRhIEFQSSBmb3IgVmlkZW9zXG5cdCAqIEBkZXByZWNhdGVkIFVzZSB0aGlzIG1ldGhvZCBmcm9tIHRoZSBgc2VhcmNoYCBzdWJtb2R1bGVcblx0ICogQHJldHVybnMgUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtXG5cdCovXG5cdHNlYXJjaFZpZGVvcyhxdWVyeTogc3RyaW5nLCBvcHRzOiBOZ3hZdGRBcGlWaWRlb1NlYXJjaE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVNlYXJjaFJlc3VsdD4ge1xuXHRcdC8vIEVuY29kZSB0aGUgcXVlcnlcblx0XHRxdWVyeSA9IGVuY29kZVVSSShxdWVyeSk7XG5cdFx0bGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaUJhc2VVcmx9c2VhcmNoP3E9JHtxdWVyeX0mdHlwZT12aWRlbyZwYXJ0PXNuaXBwZXQsaWQma2V5PSR7b3B0cy5hcGlLZXl9YDtcblx0XHRpZiAob3B0cy5tYXhSZXN1bHRzKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmbWF4UmVzdWx0cz0ke29wdHMubWF4UmVzdWx0c31gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYXBpVXJsICs9ICcmbWF4UmVzdWx0cz01MCc7XG5cdFx0fVxuXHRcdGlmIChvcHRzLnZpZGVvRW1iZWRkYWJsZSkge1xuXHRcdFx0X2FwaVVybCArPSBgJnZpZGVvRW1iZWRkYWJsZT0ke29wdHMudmlkZW9FbWJlZGRhYmxlfWA7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PE5neFl0ZEFwaVNlYXJjaFJlc3VsdD4oX2FwaVVybCk7XG5cdH1cblx0LyoqXG5cdCAqIFNlYXJjaGVzIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBvcHRzXG5cdCAqIEBkZXByZWNhdGVkIFVzZSB0aGlzIG1ldGhvZCBmcm9tIHRoZSBgc2VhcmNoYCBzdWJtb2R1bGVcblx0ICogQHJldHVybnMgUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtXG5cdCAqL1xuXHRzZWFyY2gocXVlcnk6IHN0cmluZywgb3B0czogTmd4WXRkQXBpU2VhcmNoT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpU2VhcmNoUmVzdWx0PiB7XG5cdFx0cXVlcnkgPSBlbmNvZGVVUkkocXVlcnkpO1xuXHRcdGxldCBfYXBpVXJsID0gYCR7dGhpcy55dGRBcGlCYXNlVXJsfXNlYXJjaD9xPSR7cXVlcnl9JnR5cGU9dmlkZW8mcGFydD1zbmlwcGV0LGlkJmtleT0ke29wdHMuYXBpS2V5fWA7XG5cdFx0aWYgKG9wdHMubWF4UmVzdWx0cykge1xuXHRcdFx0X2FwaVVybCArPSBgJm1heFJlc3VsdHM9JHtvcHRzLm1heFJlc3VsdHN9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2FwaVVybCArPSAnJm1heFJlc3VsdHM9NTAnO1xuXHRcdH1cblx0XHRpZiAob3B0cy5jaGFubmVsSWQpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZjaGFubmVsSWQ9JHtvcHRzLmNoYW5uZWxJZH1gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+KF9hcGlVcmwpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOZ3hZdGRBcGlWaWRlb1NlYXJjaE9wdHMsIE5neFl0ZEFwaVNlYXJjaE9wdHMsIE5neFl0ZEFwaVNlYXJjaFJlc3VsdCB9IGZyb20gJy4veXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVNlYXJjaFNlcnZpY2Uge1xuXHQvKipcblx0ICogVGhlIFlvdVR1YmUgYmFzZSBBUEkgVVJMXG5cdCAqL1xuXHRwcml2YXRlIHl0ZEFwaUJhc2VVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My8nO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG5cdC8qKlxuXHQgKiBTZWFyY2hlcyBmb3IgdmlkZW9zIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIFlvdVR1YmUgRGF0YSBBUEkgZm9yIFZpZGVvc1xuXHQgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW1cblx0Ki9cblx0c2VhcmNoVmlkZW9zKHF1ZXJ5OiBzdHJpbmcsIG9wdHM6IE5neFl0ZEFwaVZpZGVvU2VhcmNoT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpU2VhcmNoUmVzdWx0PiB7XG5cdFx0Ly8gRW5jb2RlIHRoZSBxdWVyeVxuXHRcdHF1ZXJ5ID0gZW5jb2RlVVJJKHF1ZXJ5KTtcblx0XHRsZXQgX2FwaVVybCA9IGAke3RoaXMueXRkQXBpQmFzZVVybH1zZWFyY2g/cT0ke3F1ZXJ5fSZ0eXBlPXZpZGVvJnBhcnQ9c25pcHBldCxpZCZrZXk9JHtvcHRzLmFwaUtleX1gO1xuXHRcdGlmIChvcHRzLm1heFJlc3VsdHMpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZtYXhSZXN1bHRzPSR7b3B0cy5tYXhSZXN1bHRzfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9hcGlVcmwgKz0gJyZtYXhSZXN1bHRzPTUwJztcblx0XHR9XG5cdFx0aWYgKG9wdHMudmlkZW9FbWJlZGRhYmxlKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmdmlkZW9FbWJlZGRhYmxlPSR7b3B0cy52aWRlb0VtYmVkZGFibGV9YDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpU2VhcmNoUmVzdWx0PihfYXBpVXJsKTtcblx0fVxuXHQvKipcblx0ICogU2VhcmNoZXMgdXNpbmcgdGhlIFlvdVR1YmUgSFRUUCBEYXRhIEFQSVxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3Igc2VhcmNoaW5nXG5cdCAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIG9wdHM6IE5neFl0ZEFwaVNlYXJjaE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVNlYXJjaFJlc3VsdD4ge1xuXHRcdHF1ZXJ5ID0gZW5jb2RlVVJJKHF1ZXJ5KTtcblx0XHRsZXQgX2FwaVVybCA9IGAke3RoaXMueXRkQXBpQmFzZVVybH1zZWFyY2g/cT0ke3F1ZXJ5fSZ0eXBlPXZpZGVvJnBhcnQ9c25pcHBldCxpZCZrZXk9JHtvcHRzLmFwaUtleX1gO1xuXHRcdGlmIChvcHRzLm1heFJlc3VsdHMpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZtYXhSZXN1bHRzPSR7b3B0cy5tYXhSZXN1bHRzfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9hcGlVcmwgKz0gJyZtYXhSZXN1bHRzPTUwJztcblx0XHR9XG5cdFx0aWYgKG9wdHMuY2hhbm5lbElkKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmY2hhbm5lbElkPSR7b3B0cy5jaGFubmVsSWR9YDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpU2VhcmNoUmVzdWx0PihfYXBpVXJsKTtcblx0fVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7SUFjQyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7OzZCQURaLHdDQUF3QztLQUN2Qjs7Ozs7Ozs7SUFTekMsWUFBWSxDQUFDLEtBQWEsRUFBRSxJQUE4Qjs7UUFFekQsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixxQkFBSSxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxZQUFZLEtBQUssbUNBQW1DLElBQUksQ0FB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