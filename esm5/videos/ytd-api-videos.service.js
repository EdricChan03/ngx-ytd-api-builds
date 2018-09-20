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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsidmlkZW9zL3l0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFHbEQ7SUFNRSwrQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUYzQiwwQkFBcUIsR0FBRyw4Q0FBOEMsQ0FBQztJQUV4QyxDQUFDO0lBQ3pDOzs7T0FHRzs7Ozs7O0lBQ0gsb0NBQUk7Ozs7O0lBQUosVUFBSyxJQUE2Qjs7WUFDNUIsV0FBVyxHQUFHLEtBQUs7O1lBQ25CLE9BQU8sR0FBRyxLQUFHLElBQUksQ0FBQyxxQkFBdUI7UUFDN0MsaURBQWlEO1FBQ2pELEtBQUssSUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3ZCLHlDQUF5QztZQUN6QyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDcEQsK0JBQStCO2dCQUMvQixPQUFPLElBQUksTUFBSSxJQUFJLFNBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRyxDQUFDO2dCQUMvQyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQ25CLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ3BCO2FBQ0Y7U0FDRjtRQUNELDhDQUE4QztRQUM5QyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQztTQUMvQjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQTlCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBTFEsVUFBVTs7O2dDQUZuQjtDQW9DQyxBQS9CRCxJQStCQztTQTVCWSxxQkFBcUI7OztJQUNoQyxzREFBZ0Y7O0lBRXBFLHFDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzLCBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLXZpZGVvcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpVmlkZW9TZXJ2aWNlIHtcbiAgcmVhZG9ubHkgeXRkQXBpVmlkZW9CYXNlQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgdmlkZW9zIHRoYXQgbWF0Y2ggdGhlIHJlcXVlc3RlZCBBUEkgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdD4ge1xuICAgIGxldCBfaGFzUGFydE9wdCA9IGZhbHNlO1xuICAgIGxldCBfYXBpVXJsID0gYCR7dGhpcy55dGRBcGlWaWRlb0Jhc2VBcGlVcmx9YDtcbiAgICAvLyBMb29wIHRocm91Z2ggZXZlcnkgcHJvcGVydHkgaW4gdGhlIG9wdHMgb2JqZWN0XG4gICAgZm9yIChjb25zdCBwcm9wIGluIG9wdHMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHByb3BlcnR5IGhhcyBhIG5vbi1udWxsIHZhbHVlXG4gICAgICBpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBvcHRzW3Byb3BdICE9PSBudWxsKSB7XG4gICAgICAgIC8vIEFkZCBwYXJhbWV0ZXIgdG8gdGhlIEFQSSBVUkxcbiAgICAgICAgX2FwaVVybCArPSBgJiR7cHJvcH09JHtlbmNvZGVVUkkob3B0c1twcm9wXSl9YDtcbiAgICAgICAgaWYgKHByb3AgPT09ICdwYXJ0Jykge1xuICAgICAgICAgIF9oYXNQYXJ0T3B0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBEZWZhdWx0IGlmIGBwYXJ0YCBwYXJhbWV0ZXIgaXNuJ3Qgc3BlY2lmaWVkXG4gICAgaWYgKCFfaGFzUGFydE9wdCkge1xuICAgICAgX2FwaVVybCArPSAnJnBhcnQ9c25pcHBldCxpZCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQ+KF9hcGlVcmwpO1xuICB9XG59XG4iXX0=