(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (factory((global['ngx-ytd-api'] = {}),global.ng.core,global.ng.common.http));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxYtdApiService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NgxYtdApiService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ NgxYtdApiService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiService_Factory() { return new NgxYtdApiService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiService, providedIn: "root" });
        return NgxYtdApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxYtdApiSearchService = (function () {
        function NgxYtdApiSearchService(http) {
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
        NgxYtdApiSearchService.prototype.searchVideos = /**
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
                if (opts.pageToken) {
                    _apiUrl += "&pageToken=" + opts.pageToken;
                }
                return this.http.get(_apiUrl);
            };
        /**
         * Searches using the YouTube HTTP Data API
         * @param query The query to search for
         * @param opts Options for searching
         * @returns Results of the search as a stream
         */
        /**
         * Searches using the YouTube HTTP Data API
         * @param {?} query The query to search for
         * @param {?} opts Options for searching
         * @return {?} Results of the search as a stream
         */
        NgxYtdApiSearchService.prototype.search = /**
         * Searches using the YouTube HTTP Data API
         * @param {?} query The query to search for
         * @param {?} opts Options for searching
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
        NgxYtdApiSearchService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NgxYtdApiSearchService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ NgxYtdApiSearchService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiSearchService_Factory() { return new NgxYtdApiSearchService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiSearchService, providedIn: "root" });
        return NgxYtdApiSearchService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // Interfaces

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ VERSION = new i0.Version('1.0.0-alpha.2-a051675-a051675');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.NgxYtdApiService = NgxYtdApiService;
    exports.NgxYtdApiSearchService = NgxYtdApiSearchService;
    exports.VERSION = VERSION;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXl0ZC1hcGkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gteXRkLWFwaS95dGQtYXBpLnNlcnZpY2UudHMiLCJuZzovL25neC15dGQtYXBpL3NlYXJjaC95dGQtYXBpLXNlYXJjaC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gteXRkLWFwaS92ZXJzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE5neFl0ZEFwaVNlYXJjaFJlc3VsdCwgTmd4WXRkQXBpU2VhcmNoT3B0cywgTmd4WXRkQXBpVmlkZW9TZWFyY2hPcHRzIH0gZnJvbSAnLi9zZWFyY2gveXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVNlcnZpY2Uge1xuXHQvKipcblx0ICogVGhlIFlvdVR1YmUgYmFzZSBBUEkgVVJMXG5cdCAqL1xuXHRwcml2YXRlIHl0ZEFwaUJhc2VVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My8nO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG5cdC8qKlxuXHQgKiBTZWFyY2hlcyBmb3IgdmlkZW9zIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIFlvdVR1YmUgRGF0YSBBUEkgZm9yIFZpZGVvc1xuXHQgKiBAZGVwcmVjYXRlZCBVc2UgdGhpcyBtZXRob2QgZnJvbSB0aGUgYHNlYXJjaGAgc3VibW9kdWxlXG5cdCAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuXHQqL1xuXHRzZWFyY2hWaWRlb3MocXVlcnk6IHN0cmluZywgb3B0czogTmd4WXRkQXBpVmlkZW9TZWFyY2hPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+IHtcblx0XHQvLyBFbmNvZGUgdGhlIHF1ZXJ5XG5cdFx0cXVlcnkgPSBlbmNvZGVVUkkocXVlcnkpO1xuXHRcdGxldCBfYXBpVXJsID0gYCR7dGhpcy55dGRBcGlCYXNlVXJsfXNlYXJjaD9xPSR7cXVlcnl9JnR5cGU9dmlkZW8mcGFydD1zbmlwcGV0LGlkJmtleT0ke29wdHMuYXBpS2V5fWA7XG5cdFx0aWYgKG9wdHMubWF4UmVzdWx0cykge1xuXHRcdFx0X2FwaVVybCArPSBgJm1heFJlc3VsdHM9JHtvcHRzLm1heFJlc3VsdHN9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2FwaVVybCArPSAnJm1heFJlc3VsdHM9NTAnO1xuXHRcdH1cblx0XHRpZiAob3B0cy52aWRlb0VtYmVkZGFibGUpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZ2aWRlb0VtYmVkZGFibGU9JHtvcHRzLnZpZGVvRW1iZWRkYWJsZX1gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+KF9hcGlVcmwpO1xuXHR9XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB1c2luZyB0aGUgWW91VHViZSBIVFRQIERhdGEgQVBJXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gb3B0c1xuXHQgKiBAZGVwcmVjYXRlZCBVc2UgdGhpcyBtZXRob2QgZnJvbSB0aGUgYHNlYXJjaGAgc3VibW9kdWxlXG5cdCAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIG9wdHM6IE5neFl0ZEFwaVNlYXJjaE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVNlYXJjaFJlc3VsdD4ge1xuXHRcdHF1ZXJ5ID0gZW5jb2RlVVJJKHF1ZXJ5KTtcblx0XHRsZXQgX2FwaVVybCA9IGAke3RoaXMueXRkQXBpQmFzZVVybH1zZWFyY2g/cT0ke3F1ZXJ5fSZ0eXBlPXZpZGVvJnBhcnQ9c25pcHBldCxpZCZrZXk9JHtvcHRzLmFwaUtleX1gO1xuXHRcdGlmIChvcHRzLm1heFJlc3VsdHMpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZtYXhSZXN1bHRzPSR7b3B0cy5tYXhSZXN1bHRzfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9hcGlVcmwgKz0gJyZtYXhSZXN1bHRzPTUwJztcblx0XHR9XG5cdFx0aWYgKG9wdHMuY2hhbm5lbElkKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmY2hhbm5lbElkPSR7b3B0cy5jaGFubmVsSWR9YDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpU2VhcmNoUmVzdWx0PihfYXBpVXJsKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmd4WXRkQXBpVmlkZW9TZWFyY2hPcHRzLCBOZ3hZdGRBcGlTZWFyY2hPcHRzLCBOZ3hZdGRBcGlTZWFyY2hSZXN1bHQgfSBmcm9tICcuL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlTZWFyY2hTZXJ2aWNlIHtcblx0LyoqXG5cdCAqIFRoZSBZb3VUdWJlIGJhc2UgQVBJIFVSTFxuXHQgKi9cblx0cHJpdmF0ZSB5dGRBcGlCYXNlVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvJztcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuXHQvKipcblx0ICogU2VhcmNoZXMgZm9yIHZpZGVvcyB1c2luZyB0aGUgWW91VHViZSBIVFRQIERhdGEgQVBJXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciBZb3VUdWJlIERhdGEgQVBJIGZvciBWaWRlb3Ncblx0ICogQHJldHVybnMgUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtXG5cdCovXG5cdHNlYXJjaFZpZGVvcyhxdWVyeTogc3RyaW5nLCBvcHRzOiBOZ3hZdGRBcGlWaWRlb1NlYXJjaE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVNlYXJjaFJlc3VsdD4ge1xuXHRcdC8vIEVuY29kZSB0aGUgcXVlcnlcblx0XHRxdWVyeSA9IGVuY29kZVVSSShxdWVyeSk7XG5cdFx0bGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaUJhc2VVcmx9c2VhcmNoP3E9JHtxdWVyeX0mdHlwZT12aWRlbyZwYXJ0PXNuaXBwZXQsaWQma2V5PSR7b3B0cy5hcGlLZXl9YDtcblx0XHRpZiAob3B0cy5tYXhSZXN1bHRzKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmbWF4UmVzdWx0cz0ke29wdHMubWF4UmVzdWx0c31gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYXBpVXJsICs9ICcmbWF4UmVzdWx0cz01MCc7XG5cdFx0fVxuXHRcdGlmIChvcHRzLnZpZGVvRW1iZWRkYWJsZSkge1xuXHRcdFx0X2FwaVVybCArPSBgJnZpZGVvRW1iZWRkYWJsZT0ke29wdHMudmlkZW9FbWJlZGRhYmxlfWA7XG5cdFx0fVxuXHRcdGlmIChvcHRzLnBhZ2VUb2tlbikge1xuXHRcdFx0X2FwaVVybCArPSBgJnBhZ2VUb2tlbj0ke29wdHMucGFnZVRva2VufWA7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PE5neFl0ZEFwaVNlYXJjaFJlc3VsdD4oX2FwaVVybCk7XG5cdH1cblx0LyoqXG5cdCAqIFNlYXJjaGVzIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHNlYXJjaGluZ1xuXHQgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW1cblx0ICovXG5cdHNlYXJjaChxdWVyeTogc3RyaW5nLCBvcHRzOiBOZ3hZdGRBcGlTZWFyY2hPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+IHtcblx0XHRxdWVyeSA9IGVuY29kZVVSSShxdWVyeSk7XG5cdFx0bGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaUJhc2VVcmx9c2VhcmNoP3E9JHtxdWVyeX0mdHlwZT12aWRlbyZwYXJ0PXNuaXBwZXQsaWQma2V5PSR7b3B0cy5hcGlLZXl9YDtcblx0XHRpZiAob3B0cy5tYXhSZXN1bHRzKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmbWF4UmVzdWx0cz0ke29wdHMubWF4UmVzdWx0c31gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYXBpVXJsICs9ICcmbWF4UmVzdWx0cz01MCc7XG5cdFx0fVxuXHRcdGlmIChvcHRzLmNoYW5uZWxJZCkge1xuXHRcdFx0X2FwaVVybCArPSBgJmNoYW5uZWxJZD0ke29wdHMuY2hhbm5lbElkfWA7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PE5neFl0ZEFwaVNlYXJjaFJlc3VsdD4oX2FwaVVybCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IFZlcnNpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBuZXcgVmVyc2lvbignMS4wLjAtYWxwaGEuMi1hMDUxNjc1Jyk7XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIs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