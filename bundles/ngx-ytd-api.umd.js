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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NgxYtdApiService.ctorParameters = function () {
            return [
                { type: i1.HttpClient, },
            ];
        };
        /** @nocollapse */ NgxYtdApiService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiService_Factory() { return new NgxYtdApiService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiService, providedIn: "root" });
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

    exports.NgxYtdApiService = NgxYtdApiService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXl0ZC1hcGkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gteXRkLWFwaS95dGQtYXBpLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0ICogYXMgeXRkQXBpSW50ZXJmYWNlcyBmcm9tICcuL3l0ZC1hcGkuaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVNlcnZpY2Uge1xuXHQvKipcblx0ICogVGhlIFlvdVR1YmUgYmFzZSBBUEkgVVJMXG5cdCAqL1xuXHRwcml2YXRlIHl0ZEFwaUJhc2VVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My8nO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG5cdC8qKlxuXHQgKiBTZWFyY2hlcyBmb3IgdmlkZW9zIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIFlvdVR1YmUgRGF0YSBBUEkgZm9yIFZpZGVvc1xuXHQgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW1cblx0Ki9cblx0c2VhcmNoVmlkZW9zKHF1ZXJ5OiBzdHJpbmcsIG9wdHM6IHl0ZEFwaUludGVyZmFjZXMuTmd4WXRkQXBpVmlkZW9TZWFyY2hPcHRzKTogT2JzZXJ2YWJsZTx5dGRBcGlJbnRlcmZhY2VzLk5neFl0ZEFwaVNlYXJjaFJlc3VsdD4ge1xuXHRcdC8vIEVuY29kZSB0aGUgcXVlcnlcblx0XHRxdWVyeSA9IGVuY29kZVVSSShxdWVyeSk7XG5cdFx0bGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaUJhc2VVcmx9c2VhcmNoP3E9JHtxdWVyeX0mdHlwZT12aWRlbyZwYXJ0PXNuaXBwZXQsaWQma2V5PSR7b3B0cy5hcGlLZXl9YDtcblx0XHRpZiAob3B0cy5tYXhSZXN1bHRzKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmbWF4UmVzdWx0cz0ke29wdHMubWF4UmVzdWx0c31gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYXBpVXJsICs9ICcmbWF4UmVzdWx0cz01MCc7XG5cdFx0fVxuXHRcdGlmIChvcHRzLnZpZGVvRW1iZWRkYWJsZSkge1xuXHRcdFx0X2FwaVVybCArPSBgJnZpZGVvRW1iZWRkYWJsZT0ke29wdHMudmlkZW9FbWJlZGRhYmxlfWA7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PHl0ZEFwaUludGVyZmFjZXMuTmd4WXRkQXBpU2VhcmNoUmVzdWx0PihfYXBpVXJsKTtcblx0fVxuXHQvKipcblx0ICogU2VhcmNoZXMgdXNpbmcgdGhlIFlvdVR1YmUgSFRUUCBEYXRhIEFQSVxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIG9wdHNcblx0ICogQHJldHVybnMgUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtXG5cdCAqL1xuXHRzZWFyY2gocXVlcnk6IHN0cmluZywgb3B0czogeXRkQXBpSW50ZXJmYWNlcy5OZ3hZdGRBcGlTZWFyY2hPcHRzKTogT2JzZXJ2YWJsZTx5dGRBcGlJbnRlcmZhY2VzLk5neFl0ZEFwaVNlYXJjaFJlc3VsdD4ge1xuXHRcdHF1ZXJ5ID0gZW5jb2RlVVJJKHF1ZXJ5KTtcblx0XHRsZXQgX2FwaVVybCA9IGAke3RoaXMueXRkQXBpQmFzZVVybH1zZWFyY2g/cT0ke3F1ZXJ5fSZ0eXBlPXZpZGVvJnBhcnQ9c25pcHBldCxpZCZrZXk9JHtvcHRzLmFwaUtleX1gO1xuXHRcdGlmIChvcHRzLm1heFJlc3VsdHMpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZtYXhSZXN1bHRzPSR7b3B0cy5tYXhSZXN1bHRzfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9hcGlVcmwgKz0gJyZtYXhSZXN1bHRzPTUwJztcblx0XHR9XG5cdFx0aWYgKG9wdHMuY2hhbm5lbElkKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmY2hhbm5lbElkPSR7b3B0cy5jaGFubmVsSWR9YDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8eXRkQXBpSW50ZXJmYWNlcy5OZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+KF9hcGlVcmwpO1xuXHR9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkh0dHBDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQWNDLDBCQUFvQixJQUFnQjtZQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7O2lDQURaLHdDQUF3QztTQUN2Qjs7Ozs7Ozs7Ozs7OztRQVF6Qyx1Q0FBWTs7Ozs7O1lBQVosVUFBYSxLQUFhLEVBQUUsSUFBK0M7O2dCQUUxRSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixxQkFBSSxPQUFPLEdBQU0sSUFBSSxDQUFDLGFBQWEsaUJBQVksS0FBSyx3Q0FBbUMsSUFBSSxDQUFDLE1BQVEsQ0FBQztnQkFDckcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNwQixPQUFPLElBQUksaUJBQWUsSUFBSSxDQUFDLFVBQVksQ0FBQztpQkFDNUM7cUJBQU07b0JBQ04sT0FBTyxJQUFJLGdCQUFnQixDQUFDO2lCQUM1QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3pCLE9BQU8sSUFBSSxzQkFBb0IsSUFBSSxDQUFDLGVBQWlCLENBQUM7aUJBQ3REO2dCQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXlDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RFOzs7Ozs7Ozs7Ozs7O1FBT0QsaUNBQU07Ozs7OztZQUFOLFVBQU8sS0FBYSxFQUFFLElBQTBDO2dCQUMvRCxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixxQkFBSSxPQUFPLEdBQU0sSUFBSSxDQUFDLGFBQWEsaUJBQVksS0FBSyx3Q0FBbUMsSUFBSSxDQUFDLE1BQVEsQ0FBQztnQkFDckcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNwQixPQUFPLElBQUksaUJBQWUsSUFBSSxDQUFDLFVBQVksQ0FBQztpQkFDNUM7cUJBQU07b0JBQ04sT0FBTyxJQUFJLGdCQUFnQixDQUFDO2lCQUM1QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ25CLE9BQU8sSUFBSSxnQkFBYyxJQUFJLENBQUMsU0FBVyxDQUFDO2lCQUMxQztnQkFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF5QyxPQUFPLENBQUMsQ0FBQzthQUN0RTs7b0JBaEREQSxhQUFVLFNBQUM7d0JBQ1gsVUFBVSxFQUFFLE1BQU07cUJBQ2xCOzs7Ozt3QkFOUUMsYUFBVTs7OzsrQkFGbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9