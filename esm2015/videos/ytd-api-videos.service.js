/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    getRating(opts) {
        /** @type {?} */
        let _hasPartOpt = false;
        /** @type {?} */
        let _apiUrl = `${this.ytdApiVideoBaseApiUrl}`;
        /** @type {?} */
        let _httpHeaders;
        // Loop through every property in the opts object
        for (const prop in opts) {
            // Check if property has a non-null value
            if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
                // Add parameter to the API URL
                _apiUrl += `&${prop}=${encodeURI(opts[prop])}`;
                if (prop === 'part') {
                    _hasPartOpt = true;
                }
                else if (prop === 'accessToken') {
                    _httpHeaders = new HttpHeaders({ 'Authorization': `Bearer ${opts[prop]}` });
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
        /** @type {?} */
        let _httpHeaders;
        // Loop through every property in the opts object
        for (const prop in opts) {
            // Check if property has a non-null value
            if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
                // Add parameter to the API URL
                _apiUrl += `&${prop}=${encodeURI(opts[prop])}`;
                if (prop === 'part') {
                    _hasPartOpt = true;
                }
                else if (prop === 'accessToken') {
                    _httpHeaders = new HttpHeaders({ 'Authorization': `Bearer ${opts[prop]}` });
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
    }
}
NgxYtdApiVideoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsidmlkZW9zL3l0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTS9ELE1BQU07Ozs7SUFHSixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjNCLDBCQUFxQixHQUFHLDhDQUE4QyxDQUFDO0lBRXhDLENBQUM7Ozs7OztJQUt6QyxTQUFTLENBQUMsSUFBa0M7O1lBQ3RDLFdBQVcsR0FBRyxLQUFLOztZQUNuQixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7O1lBQ3pDLFlBQXlCO1FBQzdCLGlEQUFpRDtRQUNqRCxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRTtZQUN2Qix5Q0FBeUM7WUFDekMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3BELCtCQUErQjtnQkFDL0IsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQ25CLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ3BCO3FCQUFNLElBQUksSUFBSSxLQUFLLGFBQWEsRUFBRTtvQkFDakMsWUFBWSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsZUFBZSxFQUFFLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUM3RTthQUNGO1NBQ0Y7UUFDRCw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixPQUFPLElBQUksa0JBQWtCLENBQUM7U0FDL0I7UUFDRCxJQUFJLFlBQVksRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE0QixPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztTQUNyRjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUtELElBQUksQ0FBQyxJQUE2Qjs7WUFDNUIsV0FBVyxHQUFHLEtBQUs7O1lBQ25CLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7WUFDekMsWUFBWTtRQUNoQixpREFBaUQ7UUFDakQsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDdkIseUNBQXlDO1lBQ3pDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUNwRCwrQkFBK0I7Z0JBQy9CLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO29CQUNuQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjtxQkFBTSxJQUFJLElBQUksS0FBSyxhQUFhLEVBQUU7b0JBQ2pDLFlBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLGVBQWUsRUFBRSxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDN0U7YUFDRjtTQUNGO1FBQ0QsOENBQThDO1FBQzlDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsT0FBTyxJQUFJLGtCQUFrQixDQUFDO1NBQy9CO1FBQ0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBNEIsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDckY7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE0QixPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUFsRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFMUSxVQUFVOzs7OztJQU9qQixzREFBZ0Y7O0lBRXBFLHFDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ09wdHMsIE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzLCBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLXZpZGVvcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVZpZGVvU2VydmljZSB7XG4gIHJlYWRvbmx5IHl0ZEFwaVZpZGVvQmFzZUFwaVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3ZpZGVvcyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHZpZGVvcyB0aGF0IG1hdGNoIHRoZSByZXF1ZXN0ZWQgQVBJIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICovXG4gIGdldFJhdGluZyhvcHRzOiBOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0PiB7XG4gICAgbGV0IF9oYXNQYXJ0T3B0ID0gZmFsc2U7XG4gICAgbGV0IF9hcGlVcmwgPSBgJHt0aGlzLnl0ZEFwaVZpZGVvQmFzZUFwaVVybH1gO1xuICAgIGxldCBfaHR0cEhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIC8vIExvb3AgdGhyb3VnaCBldmVyeSBwcm9wZXJ0eSBpbiB0aGUgb3B0cyBvYmplY3RcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gb3B0cykge1xuICAgICAgLy8gQ2hlY2sgaWYgcHJvcGVydHkgaGFzIGEgbm9uLW51bGwgdmFsdWVcbiAgICAgIGlmIChvcHRzLmhhc093blByb3BlcnR5KHByb3ApICYmIG9wdHNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgLy8gQWRkIHBhcmFtZXRlciB0byB0aGUgQVBJIFVSTFxuICAgICAgICBfYXBpVXJsICs9IGAmJHtwcm9wfT0ke2VuY29kZVVSSShvcHRzW3Byb3BdKX1gO1xuICAgICAgICBpZiAocHJvcCA9PT0gJ3BhcnQnKSB7XG4gICAgICAgICAgX2hhc1BhcnRPcHQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdhY2Nlc3NUb2tlbicpIHtcbiAgICAgICAgICBfaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtvcHRzW3Byb3BdfWAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRGVmYXVsdCBpZiBgcGFydGAgcGFyYW1ldGVyIGlzbid0IHNwZWNpZmllZFxuICAgIGlmICghX2hhc1BhcnRPcHQpIHtcbiAgICAgIF9hcGlVcmwgKz0gJyZwYXJ0PXNuaXBwZXQsaWQnO1xuICAgIH1cbiAgICBpZiAoX2h0dHBIZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0PihfYXBpVXJsLCB7IGhlYWRlcnM6IF9odHRwSGVhZGVycyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdD4oX2FwaVVybCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHZpZGVvcyB0aGF0IG1hdGNoIHRoZSByZXF1ZXN0ZWQgQVBJIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICovXG4gIGxpc3Qob3B0czogTmd4WXRkQXBpVmlkZW9zTGlzdE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQ+IHtcbiAgICBsZXQgX2hhc1BhcnRPcHQgPSBmYWxzZTtcbiAgICBsZXQgX2FwaVVybCA9IGAke3RoaXMueXRkQXBpVmlkZW9CYXNlQXBpVXJsfWA7XG4gICAgbGV0IF9odHRwSGVhZGVycztcbiAgICAvLyBMb29wIHRocm91Z2ggZXZlcnkgcHJvcGVydHkgaW4gdGhlIG9wdHMgb2JqZWN0XG4gICAgZm9yIChjb25zdCBwcm9wIGluIG9wdHMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHByb3BlcnR5IGhhcyBhIG5vbi1udWxsIHZhbHVlXG4gICAgICBpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBvcHRzW3Byb3BdICE9PSBudWxsKSB7XG4gICAgICAgIC8vIEFkZCBwYXJhbWV0ZXIgdG8gdGhlIEFQSSBVUkxcbiAgICAgICAgX2FwaVVybCArPSBgJiR7cHJvcH09JHtlbmNvZGVVUkkob3B0c1twcm9wXSl9YDtcbiAgICAgICAgaWYgKHByb3AgPT09ICdwYXJ0Jykge1xuICAgICAgICAgIF9oYXNQYXJ0T3B0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnYWNjZXNzVG9rZW4nKSB7XG4gICAgICAgICAgX2h0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7b3B0c1twcm9wXX1gIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIERlZmF1bHQgaWYgYHBhcnRgIHBhcmFtZXRlciBpc24ndCBzcGVjaWZpZWRcbiAgICBpZiAoIV9oYXNQYXJ0T3B0KSB7XG4gICAgICBfYXBpVXJsICs9ICcmcGFydD1zbmlwcGV0LGlkJztcbiAgICB9XG4gICAgaWYgKF9odHRwSGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Tmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdD4oX2FwaVVybCwgeyBoZWFkZXJzOiBfaHR0cEhlYWRlcnMgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQ+KF9hcGlVcmwpO1xuICB9XG59XG4iXX0=