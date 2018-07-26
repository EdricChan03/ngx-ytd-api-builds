/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var NgxYtdApiVideoService = /** @class */ (function () {
    function NgxYtdApiVideoService(http) {
        this.http = http;
        this.ytdApiVideoBaseApiUrl = 'https://www.googleapis.com/youtube/v3/videos';
    }
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
        // Loop through every property in the opts object
        for (var prop in opts) {
            // Check if property has a non-null value
            if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
                // Add parameter to the API URL
                _apiUrl += "&" + prop + "=" + encodeURI(opts[prop]);
                if (prop === 'part') {
                    _hasPartOpt = true;
                }
            }
        }
        // Default if `part` parameter isn't specified
        if (!_hasPartOpt) {
            _apiUrl += '&part=snippet,id';
        }
        return this.http.get(_apiUrl);
    };
    NgxYtdApiVideoService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsidmlkZW9zL3l0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0lBU2hELCtCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO3FDQUZILDhDQUE4QztLQUV0QztJQUN6Qzs7O09BR0c7Ozs7OztJQUNILG9DQUFJOzs7OztJQUFKLFVBQUssSUFBNkI7O1FBQ2hDLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQzs7UUFDeEIsSUFBSSxPQUFPLEdBQUcsS0FBRyxJQUFJLENBQUMscUJBQXVCLENBQUM7O1FBRTlDLEdBQUcsQ0FBQyxDQUFDLElBQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7O1lBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQUVyRCxPQUFPLElBQUksTUFBSSxJQUFJLFNBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRyxDQUFDO2dCQUMvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDcEIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDcEI7YUFDRjtTQUNGOztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqQixPQUFPLElBQUksa0JBQWtCLENBQUM7U0FDL0I7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLE9BQU8sQ0FBQyxDQUFDO0tBQzFEOztnQkE5QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxVQUFVOzs7Z0NBRm5COztTQVFhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzLCBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLXZpZGVvcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpVmlkZW9TZXJ2aWNlIHtcbiAgcmVhZG9ubHkgeXRkQXBpVmlkZW9CYXNlQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgdmlkZW9zIHRoYXQgbWF0Y2ggdGhlIHJlcXVlc3RlZCBBUEkgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdD4ge1xuICAgIGxldCBfaGFzUGFydE9wdCA9IGZhbHNlO1xuICAgIGxldCBfYXBpVXJsID0gYCR7dGhpcy55dGRBcGlWaWRlb0Jhc2VBcGlVcmx9YDtcbiAgICAvLyBMb29wIHRocm91Z2ggZXZlcnkgcHJvcGVydHkgaW4gdGhlIG9wdHMgb2JqZWN0XG4gICAgZm9yIChjb25zdCBwcm9wIGluIG9wdHMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHByb3BlcnR5IGhhcyBhIG5vbi1udWxsIHZhbHVlXG4gICAgICBpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBvcHRzW3Byb3BdICE9PSBudWxsKSB7XG4gICAgICAgIC8vIEFkZCBwYXJhbWV0ZXIgdG8gdGhlIEFQSSBVUkxcbiAgICAgICAgX2FwaVVybCArPSBgJiR7cHJvcH09JHtlbmNvZGVVUkkob3B0c1twcm9wXSl9YDtcbiAgICAgICAgaWYgKHByb3AgPT09ICdwYXJ0Jykge1xuICAgICAgICAgIF9oYXNQYXJ0T3B0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBEZWZhdWx0IGlmIGBwYXJ0YCBwYXJhbWV0ZXIgaXNuJ3Qgc3BlY2lmaWVkXG4gICAgaWYgKCFfaGFzUGFydE9wdCkge1xuICAgICAgX2FwaVVybCArPSAnJnBhcnQ9c25pcHBldCxpZCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQ+KF9hcGlVcmwpO1xuICB9XG59XG4iXX0=