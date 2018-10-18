/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var NgxYtdApiVideoService = /** @class */ (function () {
    function NgxYtdApiVideoService(http) {
        this.http = http;
        this.ytdApiVideoBaseApiUrl = 'https://www.googleapis.com/youtube/v3/videos';
    }
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param opts API parameters for the API
     */
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param {?} opts API parameters for the API
     * @return {?}
     */
    NgxYtdApiVideoService.prototype.getRating = /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param {?} opts API parameters for the API
     * @return {?}
     */
    function (opts) {
        /** @type {?} */
        var _hasPartOpt = false;
        /** @type {?} */
        var _apiUrl = "" + this.ytdApiVideoBaseApiUrl;
        /** @type {?} */
        var _httpHeaders;
        // Loop through every property in the opts object
        for (var prop in opts) {
            // Check if property has a non-null value
            if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
                // Add parameter to the API URL
                _apiUrl += "&" + prop + "=" + encodeURI(opts[prop]);
                if (prop === 'part') {
                    _hasPartOpt = true;
                }
                else if (prop === 'accessToken') {
                    _httpHeaders = new HttpHeaders({ 'Authorization': "Bearer " + opts[prop] });
                }
            }
        }
        // Default if `part` parameter isn't specified
        if (!_hasPartOpt) {
            _apiUrl += '&part=snippet,id';
        }
        if (_httpHeaders) {
            return this.http.get(_apiUrl, { headers: _httpHeaders });
        }
        return this.http.get(_apiUrl);
    };
    /**
     * Returns a list of videos that match the requested API parameters
     * @param opts API parameters for the API
     */
    /**
     * Returns a list of videos that match the requested API parameters
     * @param {?} opts API parameters for the API
     * @return {?}
     */
    NgxYtdApiVideoService.prototype.list = /**
     * Returns a list of videos that match the requested API parameters
     * @param {?} opts API parameters for the API
     * @return {?}
     */
    function (opts) {
        /** @type {?} */
        var _hasPartOpt = false;
        /** @type {?} */
        var _apiUrl = "" + this.ytdApiVideoBaseApiUrl;
        /** @type {?} */
        var _httpHeaders;
        // Loop through every property in the opts object
        for (var prop in opts) {
            // Check if property has a non-null value
            if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
                // Add parameter to the API URL
                _apiUrl += "&" + prop + "=" + encodeURI(opts[prop]);
                if (prop === 'part') {
                    _hasPartOpt = true;
                }
                else if (prop === 'accessToken') {
                    _httpHeaders = new HttpHeaders({ 'Authorization': "Bearer " + opts[prop] });
                }
            }
        }
        // Default if `part` parameter isn't specified
        if (!_hasPartOpt) {
            _apiUrl += '&part=snippet,id';
        }
        if (_httpHeaders) {
            return this.http.get(_apiUrl, { headers: _httpHeaders });
        }
        return this.http.get(_apiUrl);
    };
    NgxYtdApiVideoService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NgxYtdApiVideoService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ NgxYtdApiVideoService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiVideoService_Factory() { return new NgxYtdApiVideoService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiVideoService, providedIn: "root" });
    return NgxYtdApiVideoService;
}());
export { NgxYtdApiVideoService };
if (false) {
    /** @type {?} */
    NgxYtdApiVideoService.prototype.ytdApiVideoBaseApiUrl;
    /** @type {?} */
    NgxYtdApiVideoService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsidmlkZW9zL3l0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRy9EO0lBTUUsK0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGM0IsMEJBQXFCLEdBQUcsOENBQThDLENBQUM7SUFFeEMsQ0FBQztJQUN6Qzs7O09BR0c7Ozs7OztJQUNILHlDQUFTOzs7OztJQUFULFVBQVUsSUFBa0M7O1lBQ3RDLFdBQVcsR0FBRyxLQUFLOztZQUNuQixPQUFPLEdBQUcsS0FBRyxJQUFJLENBQUMscUJBQXVCOztZQUN6QyxZQUF5QjtRQUM3QixpREFBaUQ7UUFDakQsS0FBSyxJQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDdkIseUNBQXlDO1lBQ3pDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUNwRCwrQkFBK0I7Z0JBQy9CLE9BQU8sSUFBSSxNQUFJLElBQUksU0FBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFHLENBQUM7Z0JBQy9DLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtvQkFDbkIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDcEI7cUJBQU0sSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUNqQyxZQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxlQUFlLEVBQUUsWUFBVSxJQUFJLENBQUMsSUFBSSxDQUFHLEVBQUUsQ0FBQyxDQUFDO2lCQUM3RTthQUNGO1NBQ0Y7UUFDRCw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixPQUFPLElBQUksa0JBQWtCLENBQUM7U0FDL0I7UUFDRCxJQUFJLFlBQVksRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE0QixPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztTQUNyRjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRDs7O09BR0c7Ozs7OztJQUNILG9DQUFJOzs7OztJQUFKLFVBQUssSUFBNkI7O1lBQzVCLFdBQVcsR0FBRyxLQUFLOztZQUNuQixPQUFPLEdBQUcsS0FBRyxJQUFJLENBQUMscUJBQXVCOztZQUN6QyxZQUFZO1FBQ2hCLGlEQUFpRDtRQUNqRCxLQUFLLElBQU0sSUFBSSxJQUFJLElBQUksRUFBRTtZQUN2Qix5Q0FBeUM7WUFDekMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3BELCtCQUErQjtnQkFDL0IsT0FBTyxJQUFJLE1BQUksSUFBSSxTQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUcsQ0FBQztnQkFDL0MsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO29CQUNuQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjtxQkFBTSxJQUFJLElBQUksS0FBSyxhQUFhLEVBQUU7b0JBQ2pDLFlBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLGVBQWUsRUFBRSxZQUFVLElBQUksQ0FBQyxJQUFJLENBQUcsRUFBRSxDQUFDLENBQUM7aUJBQzdFO2FBQ0Y7U0FDRjtRQUNELDhDQUE4QztRQUM5QyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQztTQUMvQjtRQUNELElBQUksWUFBWSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQ3JGO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNEIsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBbEVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztnQkFMUSxVQUFVOzs7Z0NBRm5CO0NBd0VDLEFBbkVELElBbUVDO1NBaEVZLHFCQUFxQjs7O0lBQ2hDLHNEQUFnRjs7SUFFcEUscUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cywgTmd4WXRkQXBpVmlkZW9zTGlzdE9wdHMsIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQgfSBmcm9tICcuL3l0ZC1hcGktdmlkZW9zLmludGVyZmFjZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpVmlkZW9TZXJ2aWNlIHtcbiAgcmVhZG9ubHkgeXRkQXBpVmlkZW9CYXNlQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSByYXRpbmdzIHRoYXQgdGhlIGF1dGhvcml6ZWQgdXNlciBnYXZlIHRvIGEgbGlzdCBvZiBzcGVjaWZpZWQgdmlkZW9zXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqL1xuICBnZXRSYXRpbmcob3B0czogTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdD4ge1xuICAgIGxldCBfaGFzUGFydE9wdCA9IGZhbHNlO1xuICAgIGxldCBfYXBpVXJsID0gYCR7dGhpcy55dGRBcGlWaWRlb0Jhc2VBcGlVcmx9YDtcbiAgICBsZXQgX2h0dHBIZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICAvLyBMb29wIHRocm91Z2ggZXZlcnkgcHJvcGVydHkgaW4gdGhlIG9wdHMgb2JqZWN0XG4gICAgZm9yIChjb25zdCBwcm9wIGluIG9wdHMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHByb3BlcnR5IGhhcyBhIG5vbi1udWxsIHZhbHVlXG4gICAgICBpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBvcHRzW3Byb3BdICE9PSBudWxsKSB7XG4gICAgICAgIC8vIEFkZCBwYXJhbWV0ZXIgdG8gdGhlIEFQSSBVUkxcbiAgICAgICAgX2FwaVVybCArPSBgJiR7cHJvcH09JHtlbmNvZGVVUkkob3B0c1twcm9wXSl9YDtcbiAgICAgICAgaWYgKHByb3AgPT09ICdwYXJ0Jykge1xuICAgICAgICAgIF9oYXNQYXJ0T3B0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnYWNjZXNzVG9rZW4nKSB7XG4gICAgICAgICAgX2h0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7b3B0c1twcm9wXX1gIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIERlZmF1bHQgaWYgYHBhcnRgIHBhcmFtZXRlciBpc24ndCBzcGVjaWZpZWRcbiAgICBpZiAoIV9oYXNQYXJ0T3B0KSB7XG4gICAgICBfYXBpVXJsICs9ICcmcGFydD1zbmlwcGV0LGlkJztcbiAgICB9XG4gICAgaWYgKF9odHRwSGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdD4oX2FwaVVybCwgeyBoZWFkZXJzOiBfaHR0cEhlYWRlcnMgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQ+KF9hcGlVcmwpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiB2aWRlb3MgdGhhdCBtYXRjaCB0aGUgcmVxdWVzdGVkIEFQSSBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0PiB7XG4gICAgbGV0IF9oYXNQYXJ0T3B0ID0gZmFsc2U7XG4gICAgbGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaVZpZGVvQmFzZUFwaVVybH1gO1xuICAgIGxldCBfaHR0cEhlYWRlcnM7XG4gICAgLy8gTG9vcCB0aHJvdWdoIGV2ZXJ5IHByb3BlcnR5IGluIHRoZSBvcHRzIG9iamVjdFxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBvcHRzKSB7XG4gICAgICAvLyBDaGVjayBpZiBwcm9wZXJ0eSBoYXMgYSBub24tbnVsbCB2YWx1ZVxuICAgICAgaWYgKG9wdHMuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgb3B0c1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBBZGQgcGFyYW1ldGVyIHRvIHRoZSBBUEkgVVJMXG4gICAgICAgIF9hcGlVcmwgKz0gYCYke3Byb3B9PSR7ZW5jb2RlVVJJKG9wdHNbcHJvcF0pfWA7XG4gICAgICAgIGlmIChwcm9wID09PSAncGFydCcpIHtcbiAgICAgICAgICBfaGFzUGFydE9wdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2FjY2Vzc1Rva2VuJykge1xuICAgICAgICAgIF9odHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke29wdHNbcHJvcF19YCB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBEZWZhdWx0IGlmIGBwYXJ0YCBwYXJhbWV0ZXIgaXNuJ3Qgc3BlY2lmaWVkXG4gICAgaWYgKCFfaGFzUGFydE9wdCkge1xuICAgICAgX2FwaVVybCArPSAnJnBhcnQ9c25pcHBldCxpZCc7XG4gICAgfVxuICAgIGlmIChfaHR0cEhlYWRlcnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQ+KF9hcGlVcmwsIHsgaGVhZGVyczogX2h0dHBIZWFkZXJzIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0PihfYXBpVXJsKTtcbiAgfVxufVxuIl19