/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var NgxYtdApiSearchService = /** @class */ (function () {
    /**
     * The YouTube base API URL
     */
    function NgxYtdApiSearchService(http) {
        this.http = http;
        /**
         * The API URL of the YouTube Data v3 Search API
         */
        this.ytdSearchBaseApiUrl = 'https://www.googleapis.com/youtube/v3/search';
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
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    NgxYtdApiSearchService.prototype.list = /**
     * Searches using the YouTube HTTP Data API
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    function (opts) {
        /** @type {?} */
        var query = encodeURI(opts.q);
        /** @type {?} */
        var _hasPartOpt = false;
        /** @type {?} */
        var _apiUrl = this.ytdSearchBaseApiUrl + "?q=" + query;
        /** @type {?} */
        var _httpHeaders;
        // Loop through every property in the opts object
        for (var prop in opts) {
            // Check if property has a non-null value
            // Also checks if the property is not `q` to prevent duplication
            if (opts.hasOwnProperty(prop) && opts[prop] !== null && prop !== 'q') {
                // Add parameter to the API URL
                _apiUrl += "&" + prop + "=" + encodeURI(opts[prop]);
                if (prop === 'part') {
                    _hasPartOpt = true;
                }
                // Special case as the API doesn't accept camcel case for the
                // access token parameter.
                if (prop === 'accessToken') {
                    _httpHeaders = new HttpHeaders({ 'Authorization': "Bearer " + opts[prop] });
                }
            }
        }
        // Default if `part` parameter isn't specified
        if (!_hasPartOpt) {
            _apiUrl += '&part=snippet';
        }
        if (_httpHeaders) {
            return this.http.get(_apiUrl, { headers: _httpHeaders });
        }
        return this.http.get(_apiUrl);
    };
    NgxYtdApiSearchService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NgxYtdApiSearchService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ NgxYtdApiSearchService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiSearchService_Factory() { return new NgxYtdApiSearchService(i0.inject(i1.HttpClient)); }, token: NgxYtdApiSearchService, providedIn: "root" });
    return NgxYtdApiSearchService;
}());
export { NgxYtdApiSearchService };
if (false) {
    /**
     * The API URL of the YouTube Data v3 Search API
     * @type {?}
     */
    NgxYtdApiSearchService.prototype.ytdSearchBaseApiUrl;
    /** @type {?} */
    NgxYtdApiSearchService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBSy9EO0lBSUU7O09BRUc7SUFDSCxnQ0FBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNwQzs7V0FFRztRQUNNLHdCQUFtQixHQUFXLDhDQUE4QyxDQUFDO0lBSjlDLENBQUM7SUFLekM7Ozs7OztPQU1HOzs7Ozs7SUFDSCxxQ0FBSTs7Ozs7SUFBSixVQUFLLElBQTZCOztZQUMxQixLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O1lBQzNCLFdBQVcsR0FBRyxLQUFLOztZQUNuQixPQUFPLEdBQU0sSUFBSSxDQUFDLG1CQUFtQixXQUFNLEtBQU87O1lBQ2xELFlBQVk7UUFDaEIsaURBQWlEO1FBQ2pELEtBQUssSUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3ZCLHlDQUF5QztZQUN6QyxnRUFBZ0U7WUFDaEUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDcEUsK0JBQStCO2dCQUMvQixPQUFPLElBQUksTUFBSSxJQUFJLFNBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRyxDQUFDO2dCQUMvQyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQ25CLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ3BCO2dCQUNELDZEQUE2RDtnQkFDN0QsMEJBQTBCO2dCQUMxQixJQUFJLElBQUksS0FBSyxhQUFhLEVBQUU7b0JBQzFCLFlBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFDLGVBQWUsRUFBRSxZQUFVLElBQUksQ0FBQyxJQUFJLENBQUcsRUFBQyxDQUFDLENBQUM7aUJBQzNFO2FBQ0Y7U0FDRjtRQUNELDhDQUE4QztRQUM5QyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxlQUFlLENBQUM7U0FDNUI7UUFDRCxJQUFJLFlBQVksRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE0QixPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztTQUNuRjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQWpERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBUFEsVUFBVTs7O2lDQURuQjtDQXdEQyxBQWxERCxJQWtEQztTQS9DWSxzQkFBc0I7Ozs7OztJQVFqQyxxREFBc0Y7O0lBSjFFLHNDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cywgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdCB9IGZyb20gJy4veXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVNlYXJjaFNlcnZpY2Uge1xuICAvKipcbiAgICogVGhlIFlvdVR1YmUgYmFzZSBBUEkgVVJMXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICAvKipcbiAgICogVGhlIEFQSSBVUkwgb2YgdGhlIFlvdVR1YmUgRGF0YSB2MyBTZWFyY2ggQVBJXG4gICAqL1xuICByZWFkb25seSB5dGRTZWFyY2hCYXNlQXBpVXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2gnO1xuICAvKipcbiAgICogU2VhcmNoZXMgdXNpbmcgdGhlIFlvdVR1YmUgSFRUUCBEYXRhIEFQSVxuICAgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3IuIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNxfGRldmVsb3BlciBkb2NzfVxuICAgKiBmb3IgbW9yZSBpbmZvLlxuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciBzZWFyY2hpbmdcbiAgICogQHJldHVybnMgUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtXG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaVNlYXJjaExpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0PiB7XG4gICAgY29uc3QgcXVlcnkgPSBlbmNvZGVVUkkob3B0cy5xKTtcbiAgICBsZXQgX2hhc1BhcnRPcHQgPSBmYWxzZTtcbiAgICBsZXQgX2FwaVVybCA9IGAke3RoaXMueXRkU2VhcmNoQmFzZUFwaVVybH0/cT0ke3F1ZXJ5fWA7XG4gICAgbGV0IF9odHRwSGVhZGVycztcbiAgICAvLyBMb29wIHRocm91Z2ggZXZlcnkgcHJvcGVydHkgaW4gdGhlIG9wdHMgb2JqZWN0XG4gICAgZm9yIChjb25zdCBwcm9wIGluIG9wdHMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHByb3BlcnR5IGhhcyBhIG5vbi1udWxsIHZhbHVlXG4gICAgICAvLyBBbHNvIGNoZWNrcyBpZiB0aGUgcHJvcGVydHkgaXMgbm90IGBxYCB0byBwcmV2ZW50IGR1cGxpY2F0aW9uXG4gICAgICBpZiAob3B0cy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBvcHRzW3Byb3BdICE9PSBudWxsICYmIHByb3AgIT09ICdxJykge1xuICAgICAgICAvLyBBZGQgcGFyYW1ldGVyIHRvIHRoZSBBUEkgVVJMXG4gICAgICAgIF9hcGlVcmwgKz0gYCYke3Byb3B9PSR7ZW5jb2RlVVJJKG9wdHNbcHJvcF0pfWA7XG4gICAgICAgIGlmIChwcm9wID09PSAncGFydCcpIHtcbiAgICAgICAgICBfaGFzUGFydE9wdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGFzIHRoZSBBUEkgZG9lc24ndCBhY2NlcHQgY2FtY2VsIGNhc2UgZm9yIHRoZVxuICAgICAgICAvLyBhY2Nlc3MgdG9rZW4gcGFyYW1ldGVyLlxuICAgICAgICBpZiAocHJvcCA9PT0gJ2FjY2Vzc1Rva2VuJykge1xuICAgICAgICAgIF9odHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7J0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7b3B0c1twcm9wXX1gfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRGVmYXVsdCBpZiBgcGFydGAgcGFyYW1ldGVyIGlzbid0IHNwZWNpZmllZFxuICAgIGlmICghX2hhc1BhcnRPcHQpIHtcbiAgICAgIF9hcGlVcmwgKz0gJyZwYXJ0PXNuaXBwZXQnO1xuICAgIH1cbiAgICBpZiAoX2h0dHBIZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0PihfYXBpVXJsLCB7aGVhZGVyczogX2h0dHBIZWFkZXJzfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQ+KF9hcGlVcmwpO1xuICB9XG59XG4iXX0=