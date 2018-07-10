(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (factory((global['ngx-ytd-api'] = {}),global.ng.core,global.ng.common.http));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        NgxYtdApiService.prototype.search = /**
         * Searches using the YouTube HTTP Data API
         * @param {?} query The query to search for. See the {\@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
         * for more info.
         * @param {?} opts Options for searching
         * @return {?} Results of the search as a stream
         */
            function (query, opts) {
                query = encodeURI(query);
                /** @type {?} */
                var _apiUrl = this.ytdApiBaseUrl + "search?q=" + query + "&part=snippet,id";
                // Loop through every property in the opts object
                for (var prop in opts) {
                    // Check if property has a non-null value
                    if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
                        // Add parameter to the API URL
                        _apiUrl += "&" + prop + "=" + encodeURI(opts[prop]);
                    }
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                /** @type {?} */
                var _apiUrl = this.ytdApiBaseUrl + "search?q=" + query + "&part=snippet,id";
                // Loop through every property in the opts object
                for (var prop in opts) {
                    // Check if property has a non-null value
                    if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
                        // Add parameter to the API URL
                        _apiUrl += "&" + prop + "=" + encodeURI(opts[prop]);
                    }
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    // Interfaces

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var VERSION = new i0.Version('1.0.0-alpha.3-c19cdab-c19cdab');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NgxYtdApiService = NgxYtdApiService;
    exports.NgxYtdApiSearchService = NgxYtdApiSearchService;
    exports.VERSION = VERSION;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXl0ZC1hcGkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gteXRkLWFwaS95dGQtYXBpLnNlcnZpY2UudHMiLCJuZzovL25neC15dGQtYXBpL3NlYXJjaC95dGQtYXBpLXNlYXJjaC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gteXRkLWFwaS92ZXJzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE5neFl0ZEFwaVNlYXJjaFJlc3VsdCwgTmd4WXRkQXBpU2VhcmNoT3B0cyB9IGZyb20gJy4vc2VhcmNoL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlTZXJ2aWNlIHtcblx0LyoqXG5cdCAqIFRoZSBZb3VUdWJlIGJhc2UgQVBJIFVSTFxuXHQgKi9cblx0cHJpdmF0ZSB5dGRBcGlCYXNlVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvJztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XG5cdCkgeyB9XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB1c2luZyB0aGUgWW91VHViZSBIVFRQIERhdGEgQVBJXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvci4gU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3F8ZGV2ZWxvcGVyIGRvY3N9XG5cdCAqIGZvciBtb3JlIGluZm8uXG5cdCAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHNlYXJjaGluZ1xuXHQgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW1cblx0ICovXG5cdHNlYXJjaChxdWVyeTogc3RyaW5nLCBvcHRzOiBOZ3hZdGRBcGlTZWFyY2hPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+IHtcblx0XHRxdWVyeSA9IGVuY29kZVVSSShxdWVyeSk7XG5cdFx0bGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaUJhc2VVcmx9c2VhcmNoP3E9JHtxdWVyeX0mcGFydD1zbmlwcGV0LGlkYDtcblx0XHQvLyBMb29wIHRocm91Z2ggZXZlcnkgcHJvcGVydHkgaW4gdGhlIG9wdHMgb2JqZWN0XG5cdFx0Zm9yIChjb25zdCBwcm9wIGluIG9wdHMpIHtcblx0XHRcdC8vIENoZWNrIGlmIHByb3BlcnR5IGhhcyBhIG5vbi1udWxsIHZhbHVlXG5cdFx0XHRpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBvcHRzW3Byb3BdICE9PSBudWxsKSB7XG5cdFx0XHRcdC8vIEFkZCBwYXJhbWV0ZXIgdG8gdGhlIEFQSSBVUkxcblx0XHRcdFx0X2FwaVVybCArPSBgJiR7cHJvcH09JHtlbmNvZGVVUkkob3B0c1twcm9wXSl9YDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpU2VhcmNoUmVzdWx0PihfYXBpVXJsKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmd4WXRkQXBpU2VhcmNoT3B0cywgTmd4WXRkQXBpU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLXNlYXJjaC5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpU2VhcmNoU2VydmljZSB7XG5cdC8qKlxuXHQgKiBUaGUgWW91VHViZSBiYXNlIEFQSSBVUkxcblx0ICovXG5cdHByaXZhdGUgeXRkQXBpQmFzZVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzLyc7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB1c2luZyB0aGUgWW91VHViZSBIVFRQIERhdGEgQVBJXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvci4gU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3F8ZGV2ZWxvcGVyIGRvY3N9XG5cdCAqIGZvciBtb3JlIGluZm8uXG5cdCAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHNlYXJjaGluZ1xuXHQgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW1cblx0ICovXG5cdHNlYXJjaChxdWVyeTogc3RyaW5nLCBvcHRzOiBOZ3hZdGRBcGlTZWFyY2hPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+IHtcblx0XHRxdWVyeSA9IGVuY29kZVVSSShxdWVyeSk7XG5cdFx0bGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaUJhc2VVcmx9c2VhcmNoP3E9JHtxdWVyeX0mcGFydD1zbmlwcGV0LGlkYDtcblx0XHQvLyBMb29wIHRocm91Z2ggZXZlcnkgcHJvcGVydHkgaW4gdGhlIG9wdHMgb2JqZWN0XG5cdFx0Zm9yIChjb25zdCBwcm9wIGluIG9wdHMpIHtcblx0XHRcdC8vIENoZWNrIGlmIHByb3BlcnR5IGhhcyBhIG5vbi1udWxsIHZhbHVlXG5cdFx0XHRpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBvcHRzW3Byb3BdICE9PSBudWxsKSB7XG5cdFx0XHRcdC8vIEFkZCBwYXJhbWV0ZXIgdG8gdGhlIEFQSSBVUkxcblx0XHRcdFx0X2FwaVVybCArPSBgJiR7cHJvcH09JHtlbmNvZGVVUkkob3B0c1twcm9wXSl9YDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpU2VhcmNoUmVzdWx0PihfYXBpVXJsKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgVkVSU0lPTiA9IG5ldyBWZXJzaW9uKCcxLjAuMC1hbHBoYS4zLWMxOWNkYWInKTtcbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiSHR0cENsaWVudCIsIlZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQWNDLDBCQUNTO1lBQUEsU0FBSSxHQUFKLElBQUk7Ozs7aUNBRlcsd0NBQXdDO1NBRzNEOzs7Ozs7Ozs7Ozs7Ozs7UUFRTCxpQ0FBTTs7Ozs7OztZQUFOLFVBQU8sS0FBYSxFQUFFLElBQXlCO2dCQUM5QyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOztnQkFDekIsSUFBSSxPQUFPLEdBQU0sSUFBSSxDQUFDLGFBQWEsaUJBQVksS0FBSyxxQkFBa0IsQ0FBQzs7Z0JBRXZFLEtBQUssSUFBTSxJQUFJLElBQUksSUFBSSxFQUFFOztvQkFFeEIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7O3dCQUVyRCxPQUFPLElBQUksTUFBSSxJQUFJLFNBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRyxDQUFDO3FCQUMvQztpQkFDRDtnQkFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixPQUFPLENBQUMsQ0FBQzthQUNyRDs7b0JBOUJEQSxhQUFVLFNBQUM7d0JBQ1gsVUFBVSxFQUFFLE1BQU07cUJBQ2xCOzs7Ozt3QkFOUUMsYUFBVTs7OzsrQkFGbkI7Ozs7Ozs7QUNBQTtRQWNDLGdDQUFvQixJQUFnQjtZQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7O2lDQURaLHdDQUF3QztTQUN2Qjs7Ozs7Ozs7Ozs7Ozs7O1FBUXpDLHVDQUFNOzs7Ozs7O1lBQU4sVUFBTyxLQUFhLEVBQUUsSUFBeUI7Z0JBQzlDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUN6QixJQUFJLE9BQU8sR0FBTSxJQUFJLENBQUMsYUFBYSxpQkFBWSxLQUFLLHFCQUFrQixDQUFDOztnQkFFdkUsS0FBSyxJQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7O29CQUV4QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTs7d0JBRXJELE9BQU8sSUFBSSxNQUFJLElBQUksU0FBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFHLENBQUM7cUJBQy9DO2lCQUNEO2dCQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXdCLE9BQU8sQ0FBQyxDQUFDO2FBQ3JEOztvQkE1QkRELGFBQVUsU0FBQzt3QkFDWCxVQUFVLEVBQUUsTUFBTTtxQkFDbEI7Ozs7O3dCQVBRQyxhQUFVOzs7O3FDQURuQjs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUEsUUFBYSxPQUFPLEdBQUcsSUFBSUMsVUFBTyxDQUFDLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=