/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NgxYtdApiSearchService {
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
/** @nocollapse */ NgxYtdApiSearchService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiSearchService_Factory() { return new NgxYtdApiSearchService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiSearchService, providedIn: "root" });
function NgxYtdApiSearchService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NgxYtdApiSearchService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NgxYtdApiSearchService.ctorParameters;
    /**
     * The YouTube base API URL
     * @type {?}
     */
    NgxYtdApiSearchService.prototype.ytdApiBaseUrl;
    /** @type {?} */
    NgxYtdApiSearchService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFRbEQsTUFBTTs7OztJQUtMLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7Ozs7NkJBRFosd0NBQXdDO0tBQ3ZCOzs7Ozs7O0lBUXpDLFlBQVksQ0FBQyxLQUFhLEVBQUUsSUFBOEI7O1FBRXpELEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIscUJBQUksT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsWUFBWSxLQUFLLG1DQUFtQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsT0FBTyxJQUFJLGVBQWUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzVDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxPQUFPLElBQUksZ0JBQWdCLENBQUM7U0FDNUI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMxQixPQUFPLElBQUksb0JBQW9CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN0RDtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsT0FBTyxDQUFDLENBQUM7S0FDckQ7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsS0FBYSxFQUFFLElBQXlCO1FBQzlDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIscUJBQUksT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsWUFBWSxLQUFLLG1DQUFtQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsT0FBTyxJQUFJLGVBQWUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzVDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxPQUFPLElBQUksZ0JBQWdCLENBQUM7U0FDNUI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLElBQUksY0FBYyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDMUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXdCLE9BQU8sQ0FBQyxDQUFDO0tBQ3JEOzs7WUFoREQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBUFEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE5neFl0ZEFwaVZpZGVvU2VhcmNoT3B0cywgTmd4WXRkQXBpU2VhcmNoT3B0cywgTmd4WXRkQXBpU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLXNlYXJjaC5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpU2VhcmNoU2VydmljZSB7XG5cdC8qKlxuXHQgKiBUaGUgWW91VHViZSBiYXNlIEFQSSBVUkxcblx0ICovXG5cdHByaXZhdGUgeXRkQXBpQmFzZVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzLyc7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cblx0LyoqXG5cdCAqIFNlYXJjaGVzIGZvciB2aWRlb3MgdXNpbmcgdGhlIFlvdVR1YmUgSFRUUCBEYXRhIEFQSVxuXHQgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3Jcblx0ICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgWW91VHViZSBEYXRhIEFQSSBmb3IgVmlkZW9zXG5cdCAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuXHQqL1xuXHRzZWFyY2hWaWRlb3MocXVlcnk6IHN0cmluZywgb3B0czogTmd4WXRkQXBpVmlkZW9TZWFyY2hPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+IHtcblx0XHQvLyBFbmNvZGUgdGhlIHF1ZXJ5XG5cdFx0cXVlcnkgPSBlbmNvZGVVUkkocXVlcnkpO1xuXHRcdGxldCBfYXBpVXJsID0gYCR7dGhpcy55dGRBcGlCYXNlVXJsfXNlYXJjaD9xPSR7cXVlcnl9JnR5cGU9dmlkZW8mcGFydD1zbmlwcGV0LGlkJmtleT0ke29wdHMuYXBpS2V5fWA7XG5cdFx0aWYgKG9wdHMubWF4UmVzdWx0cykge1xuXHRcdFx0X2FwaVVybCArPSBgJm1heFJlc3VsdHM9JHtvcHRzLm1heFJlc3VsdHN9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2FwaVVybCArPSAnJm1heFJlc3VsdHM9NTAnO1xuXHRcdH1cblx0XHRpZiAob3B0cy52aWRlb0VtYmVkZGFibGUpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZ2aWRlb0VtYmVkZGFibGU9JHtvcHRzLnZpZGVvRW1iZWRkYWJsZX1gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+KF9hcGlVcmwpO1xuXHR9XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB1c2luZyB0aGUgWW91VHViZSBIVFRQIERhdGEgQVBJXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvclxuXHQgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciBzZWFyY2hpbmdcblx0ICogQHJldHVybnMgUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtXG5cdCAqL1xuXHRzZWFyY2gocXVlcnk6IHN0cmluZywgb3B0czogTmd4WXRkQXBpU2VhcmNoT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpU2VhcmNoUmVzdWx0PiB7XG5cdFx0cXVlcnkgPSBlbmNvZGVVUkkocXVlcnkpO1xuXHRcdGxldCBfYXBpVXJsID0gYCR7dGhpcy55dGRBcGlCYXNlVXJsfXNlYXJjaD9xPSR7cXVlcnl9JnR5cGU9dmlkZW8mcGFydD1zbmlwcGV0LGlkJmtleT0ke29wdHMuYXBpS2V5fWA7XG5cdFx0aWYgKG9wdHMubWF4UmVzdWx0cykge1xuXHRcdFx0X2FwaVVybCArPSBgJm1heFJlc3VsdHM9JHtvcHRzLm1heFJlc3VsdHN9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2FwaVVybCArPSAnJm1heFJlc3VsdHM9NTAnO1xuXHRcdH1cblx0XHRpZiAob3B0cy5jaGFubmVsSWQpIHtcblx0XHRcdF9hcGlVcmwgKz0gYCZjaGFubmVsSWQ9JHtvcHRzLmNoYW5uZWxJZH1gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+KF9hcGlVcmwpO1xuXHR9XG59Il19