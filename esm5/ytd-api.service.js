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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJ5dGQtYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0lBWWpELDBCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOzs7OzZCQURaLHdDQUF3QztLQUN2QjtJQUV6Qzs7Ozs7TUFLRTs7Ozs7OztJQUNGLHVDQUFZOzs7Ozs7SUFBWixVQUFhLEtBQWEsRUFBRSxJQUErQzs7UUFFMUUsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixxQkFBSSxPQUFPLEdBQU0sSUFBSSxDQUFDLGFBQWEsaUJBQVksS0FBSyx3Q0FBbUMsSUFBSSxDQUFDLE1BQVEsQ0FBQztRQUNyRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNyQixPQUFPLElBQUksaUJBQWUsSUFBSSxDQUFDLFVBQVksQ0FBQztTQUM1QztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsT0FBTyxJQUFJLGdCQUFnQixDQUFDO1NBQzVCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsT0FBTyxJQUFJLHNCQUFvQixJQUFJLENBQUMsZUFBaUIsQ0FBQztTQUN0RDtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBeUMsT0FBTyxDQUFDLENBQUM7S0FDdEU7SUFDRDs7Ozs7T0FLRzs7Ozs7OztJQUNILGlDQUFNOzs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxJQUEwQztRQUMvRCxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLHFCQUFJLE9BQU8sR0FBTSxJQUFJLENBQUMsYUFBYSxpQkFBWSxLQUFLLHdDQUFtQyxJQUFJLENBQUMsTUFBUSxDQUFDO1FBQ3JHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sSUFBSSxpQkFBZSxJQUFJLENBQUMsVUFBWSxDQUFDO1NBQzVDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxPQUFPLElBQUksZ0JBQWdCLENBQUM7U0FDNUI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLElBQUksZ0JBQWMsSUFBSSxDQUFDLFNBQVcsQ0FBQztTQUMxQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBeUMsT0FBTyxDQUFDLENBQUM7S0FDdEU7O2dCQWhERCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQU5RLFVBQVU7OzsyQkFGbkI7O1NBU2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0ICogYXMgeXRkQXBpSW50ZXJmYWNlcyBmcm9tICcuL3l0ZC1hcGkuaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVNlcnZpY2Uge1xuXHQvKipcblx0ICogVGhlIFlvdVR1YmUgYmFzZSBBUEkgVVJMXG5cdCAqL1xuXHRwcml2YXRlIHl0ZEFwaUJhc2VVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My8nO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG5cdC8qKlxuXHQgKiBTZWFyY2hlcyBmb3IgdmlkZW9zIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIFlvdVR1YmUgRGF0YSBBUEkgZm9yIFZpZGVvc1xuXHQgKiBAcmV0dXJucyBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW1cblx0Ki9cblx0c2VhcmNoVmlkZW9zKHF1ZXJ5OiBzdHJpbmcsIG9wdHM6IHl0ZEFwaUludGVyZmFjZXMuTmd4WXRkQXBpVmlkZW9TZWFyY2hPcHRzKTogT2JzZXJ2YWJsZTx5dGRBcGlJbnRlcmZhY2VzLk5neFl0ZEFwaVNlYXJjaFJlc3VsdD4ge1xuXHRcdC8vIEVuY29kZSB0aGUgcXVlcnlcblx0XHRxdWVyeSA9IGVuY29kZVVSSShxdWVyeSk7XG5cdFx0bGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaUJhc2VVcmx9c2VhcmNoP3E9JHtxdWVyeX0mdHlwZT12aWRlbyZwYXJ0PXNuaXBwZXQsaWQma2V5PSR7b3B0cy5hcGlLZXl9YDtcblx0XHRpZiAob3B0cy5tYXhSZXN1bHRzKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmbWF4UmVzdWx0cz0ke29wdHMubWF4UmVzdWx0c31gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYXBpVXJsICs9ICcmbWF4UmVzdWx0cz01MCc7XG5cdFx0fVxuXHRcdGlmIChvcHRzLnZpZGVvRW1iZWRkYWJsZSkge1xuXHRcdFx0X2FwaVVybCArPSBgJnZpZGVvRW1iZWRkYWJsZT0ke29wdHMudmlkZW9FbWJlZGRhYmxlfWA7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PHl0ZEFwaUludGVyZmFjZXMuTmd4WXRkQXBpU2VhcmNoUmVzdWx0PihfYXBpVXJsKTtcblx0fVxuXHQvKipcblx0ICogU2VhcmNoZXMgdXNpbmcgdGhlIFlvdVR1YmUgSFRUUCBEYXRhIEFQSVxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIG9wdHNcblx0ICogQHJldHVybnMgUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtXG5cdCAqL1xuXHRzZWFyY2gocXVlcnk6IHN0cmluZywgb3B0czogeXRkQXBpSW50ZXJmYWNlcy5OZ3hZdGRBcGlTZWFyY2hPcHRzKTogT2JzZXJ2YWJsZTx5dGRBcGlJbnRlcmZhY2VzLk5neFl0ZEFwaVNlYXJjaFJlc3VsdD4ge1xuXHRcdHF1ZXJ5ID0gZW5jb2RlVVJJKHF1ZXJ5KTtcblx0XHRsZXQgX2FwaVVybCA9IGAke3RoaXMueXRkQXBpQmFzZVVybH1zZWFyY2g/cT0ke3F1ZXJ5fSZ0eXBlPXZpZGVvJnBhcnQ9c25pcHBldCxpZCZrZXk9JHtvcHRzLmFwaUtleX1gO1xuXHRcdGlmIChvcHRzLm1heFJlc3VsdHMpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZtYXhSZXN1bHRzPSR7b3B0cy5tYXhSZXN1bHRzfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9hcGlVcmwgKz0gJyZtYXhSZXN1bHRzPTUwJztcblx0XHR9XG5cdFx0aWYgKG9wdHMuY2hhbm5lbElkKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmY2hhbm5lbElkPSR7b3B0cy5jaGFubmVsSWR9YDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8eXRkQXBpSW50ZXJmYWNlcy5OZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+KF9hcGlVcmwpO1xuXHR9XG59XG4iXX0=