/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NgxYtdApiVideoService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.ytdApiVideoBaseApiUrl = 'https://www.googleapis.com/youtube/v3/videos';
    }
    /**
     * Returns a list of videos that match the requested API parameters
     * @param {?} opts API parameters for the API
     * @return {?}
     */
    list(opts) {
        /** @type {?} */
        let _hasPartOpt = false;
        /** @type {?} */
        let _apiUrl = `${this.ytdApiVideoBaseApiUrl}`;
        // Loop through every property in the opts object
        for (const prop in opts) {
            // Check if property has a non-null value
            if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
                // Add parameter to the API URL
                _apiUrl += `&${prop}=${encodeURI(opts[prop])}`;
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
    }
}
NgxYtdApiVideoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxYtdApiVideoService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ NgxYtdApiVideoService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiVideoService_Factory() { return new NgxYtdApiVideoService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiVideoService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgxYtdApiVideoService.prototype.ytdApiVideoBaseApiUrl;
    /** @type {?} */
    NgxYtdApiVideoService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsidmlkZW9zL3l0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFNbEQsTUFBTTs7OztJQUdKLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7cUNBRkgsOENBQThDO0tBRXRDOzs7Ozs7SUFLekMsSUFBSSxDQUFDLElBQTZCOztRQUNoQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7O1FBQ3hCLElBQUksT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O1FBRTlDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7O1lBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQUVyRCxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNwQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjthQUNGO1NBQ0Y7O1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQztTQUMvQjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNEIsT0FBTyxDQUFDLENBQUM7S0FDMUQ7OztZQTlCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMUSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WXRkQXBpVmlkZW9zTGlzdE9wdHMsIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQgfSBmcm9tICcuL3l0ZC1hcGktdmlkZW9zLmludGVyZmFjZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlWaWRlb1NlcnZpY2Uge1xuICByZWFkb25seSB5dGRBcGlWaWRlb0Jhc2VBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My92aWRlb3MnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiB2aWRlb3MgdGhhdCBtYXRjaCB0aGUgcmVxdWVzdGVkIEFQSSBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0PiB7XG4gICAgbGV0IF9oYXNQYXJ0T3B0ID0gZmFsc2U7XG4gICAgbGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaVZpZGVvQmFzZUFwaVVybH1gO1xuICAgIC8vIExvb3AgdGhyb3VnaCBldmVyeSBwcm9wZXJ0eSBpbiB0aGUgb3B0cyBvYmplY3RcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gb3B0cykge1xuICAgICAgLy8gQ2hlY2sgaWYgcHJvcGVydHkgaGFzIGEgbm9uLW51bGwgdmFsdWVcbiAgICAgIGlmIChvcHRzLmhhc093blByb3BlcnR5KHByb3ApICYmIG9wdHNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgLy8gQWRkIHBhcmFtZXRlciB0byB0aGUgQVBJIFVSTFxuICAgICAgICBfYXBpVXJsICs9IGAmJHtwcm9wfT0ke2VuY29kZVVSSShvcHRzW3Byb3BdKX1gO1xuICAgICAgICBpZiAocHJvcCA9PT0gJ3BhcnQnKSB7XG4gICAgICAgICAgX2hhc1BhcnRPcHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIERlZmF1bHQgaWYgYHBhcnRgIHBhcmFtZXRlciBpc24ndCBzcGVjaWZpZWRcbiAgICBpZiAoIV9oYXNQYXJ0T3B0KSB7XG4gICAgICBfYXBpVXJsICs9ICcmcGFydD1zbmlwcGV0LGlkJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdD4oX2FwaVVybCk7XG4gIH1cbn1cbiJdfQ==