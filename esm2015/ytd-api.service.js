/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NgxYtdApiService {
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
/** @nocollapse */ NgxYtdApiService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiService_Factory() { return new NgxYtdApiService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiService, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJ5dGQtYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFPbEQsTUFBTTs7OztJQUtMLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7Ozs7NkJBRFosd0NBQXdDO0tBQ3ZCOzs7Ozs7O0lBUXpDLFlBQVksQ0FBQyxLQUFhLEVBQUUsSUFBK0M7O1FBRTFFLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIscUJBQUksT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsWUFBWSxLQUFLLG1DQUFtQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsT0FBTyxJQUFJLGVBQWUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzVDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxPQUFPLElBQUksZ0JBQWdCLENBQUM7U0FDNUI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMxQixPQUFPLElBQUksb0JBQW9CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN0RDtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBeUMsT0FBTyxDQUFDLENBQUM7S0FDdEU7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsS0FBYSxFQUFFLElBQTBDO1FBQy9ELEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIscUJBQUksT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsWUFBWSxLQUFLLG1DQUFtQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsT0FBTyxJQUFJLGVBQWUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzVDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxPQUFPLElBQUksZ0JBQWdCLENBQUM7U0FDNUI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLElBQUksY0FBYyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDMUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXlDLE9BQU8sQ0FBQyxDQUFDO0tBQ3RFOzs7WUFoREQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBTlEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCAqIGFzIHl0ZEFwaUludGVyZmFjZXMgZnJvbSAnLi95dGQtYXBpLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlTZXJ2aWNlIHtcblx0LyoqXG5cdCAqIFRoZSBZb3VUdWJlIGJhc2UgQVBJIFVSTFxuXHQgKi9cblx0cHJpdmF0ZSB5dGRBcGlCYXNlVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvJztcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuXHQvKipcblx0ICogU2VhcmNoZXMgZm9yIHZpZGVvcyB1c2luZyB0aGUgWW91VHViZSBIVFRQIERhdGEgQVBJXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciBZb3VUdWJlIERhdGEgQVBJIGZvciBWaWRlb3Ncblx0ICogQHJldHVybnMgUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtXG5cdCovXG5cdHNlYXJjaFZpZGVvcyhxdWVyeTogc3RyaW5nLCBvcHRzOiB5dGRBcGlJbnRlcmZhY2VzLk5neFl0ZEFwaVZpZGVvU2VhcmNoT3B0cyk6IE9ic2VydmFibGU8eXRkQXBpSW50ZXJmYWNlcy5OZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+IHtcblx0XHQvLyBFbmNvZGUgdGhlIHF1ZXJ5XG5cdFx0cXVlcnkgPSBlbmNvZGVVUkkocXVlcnkpO1xuXHRcdGxldCBfYXBpVXJsID0gYCR7dGhpcy55dGRBcGlCYXNlVXJsfXNlYXJjaD9xPSR7cXVlcnl9JnR5cGU9dmlkZW8mcGFydD1zbmlwcGV0LGlkJmtleT0ke29wdHMuYXBpS2V5fWA7XG5cdFx0aWYgKG9wdHMubWF4UmVzdWx0cykge1xuXHRcdFx0X2FwaVVybCArPSBgJm1heFJlc3VsdHM9JHtvcHRzLm1heFJlc3VsdHN9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2FwaVVybCArPSAnJm1heFJlc3VsdHM9NTAnO1xuXHRcdH1cblx0XHRpZiAob3B0cy52aWRlb0VtYmVkZGFibGUpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZ2aWRlb0VtYmVkZGFibGU9JHtvcHRzLnZpZGVvRW1iZWRkYWJsZX1gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDx5dGRBcGlJbnRlcmZhY2VzLk5neFl0ZEFwaVNlYXJjaFJlc3VsdD4oX2FwaVVybCk7XG5cdH1cblx0LyoqXG5cdCAqIFNlYXJjaGVzIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yXG5cdCAqIEBwYXJhbSBvcHRzXG5cdCAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIG9wdHM6IHl0ZEFwaUludGVyZmFjZXMuTmd4WXRkQXBpU2VhcmNoT3B0cyk6IE9ic2VydmFibGU8eXRkQXBpSW50ZXJmYWNlcy5OZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+IHtcblx0XHRxdWVyeSA9IGVuY29kZVVSSShxdWVyeSk7XG5cdFx0bGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaUJhc2VVcmx9c2VhcmNoP3E9JHtxdWVyeX0mdHlwZT12aWRlbyZwYXJ0PXNuaXBwZXQsaWQma2V5PSR7b3B0cy5hcGlLZXl9YDtcblx0XHRpZiAob3B0cy5tYXhSZXN1bHRzKSB7XG5cdFx0XHRfYXBpVXJsICs9IGAmbWF4UmVzdWx0cz0ke29wdHMubWF4UmVzdWx0c31gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYXBpVXJsICs9ICcmbWF4UmVzdWx0cz01MCc7XG5cdFx0fVxuXHRcdGlmIChvcHRzLmNoYW5uZWxJZCkge1xuXHRcdFx0X2FwaVVybCArPSBgJmNoYW5uZWxJZD0ke29wdHMuY2hhbm5lbElkfWA7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PHl0ZEFwaUludGVyZmFjZXMuTmd4WXRkQXBpU2VhcmNoUmVzdWx0PihfYXBpVXJsKTtcblx0fVxufVxuIl19