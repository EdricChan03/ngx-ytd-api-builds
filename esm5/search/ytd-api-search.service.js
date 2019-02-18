/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCommonService } from 'ngx-ytd-api/common';
var NgxYtdApiSearchService = /** @class */ (function () {
    function NgxYtdApiSearchService(common) {
        this.common = common;
        /**
         * The API URL for the Search API of the YouTube Data v3 API
         */
        this.ngxYtdSearchApiUrl = 'https://www.googleapis.com/youtube/v3/search';
    }
    /**
     * Returns a collection of search results that match the query parameters specified
     *
     * See https://developers.google.com/youtube/v3/docs/search/list for more info
     * @param opts API parameters for the API
     * @return Results of the search has an `Observable`
     */
    /**
     * Returns a collection of search results that match the query parameters specified
     *
     * See https://developers.google.com/youtube/v3/docs/search/list for more info
     * @param {?} opts API parameters for the API
     * @return {?} Results of the search has an `Observable`
     */
    NgxYtdApiSearchService.prototype.list = /**
     * Returns a collection of search results that match the query parameters specified
     *
     * See https://developers.google.com/youtube/v3/docs/search/list for more info
     * @param {?} opts API parameters for the API
     * @return {?} Results of the search has an `Observable`
     */
    function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdSearchApiUrl, this.common.mergeOpts(opts), null, 'get');
    };
    NgxYtdApiSearchService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxYtdApiSearchService.ctorParameters = function () { return [
        { type: NgxYtdApiCommonService }
    ]; };
    return NgxYtdApiSearchService;
}());
export { NgxYtdApiSearchService };
if (false) {
    /**
     * The API URL for the Search API of the YouTube Data v3 API
     * @type {?}
     */
    NgxYtdApiSearchService.prototype.ngxYtdSearchApiUrl;
    /**
     * @type {?}
     * @private
     */
    NgxYtdApiSearchService.prototype.common;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL3NlYXJjaC8iLCJzb3VyY2VzIjpbInl0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLNUQ7SUFFRSxnQ0FDVSxNQUE4QjtRQUE5QixXQUFNLEdBQU4sTUFBTSxDQUF3Qjs7OztRQUsvQix1QkFBa0IsR0FBRyw4Q0FBOEMsQ0FBQztJQUp6RSxDQUFDO0lBS0w7Ozs7OztPQU1HOzs7Ozs7OztJQUNILHFDQUFJOzs7Ozs7O0lBQUosVUFBSyxJQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUNoQyxJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUEwQixJQUFJLENBQUMsRUFDcEQsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQzs7Z0JBdkJGLFVBQVU7Ozs7Z0JBTEYsc0JBQXNCOztJQTZCL0IsNkJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSxzQkFBc0I7Ozs7OztJQU9qQyxvREFBNkU7Ozs7O0lBTDNFLHdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFl0ZEFwaUNvbW1vblNlcnZpY2UgfSBmcm9tICduZ3gteXRkLWFwaS9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHMsIE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQgfSBmcm9tICcuL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlTZWFyY2hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21tb246IE5neFl0ZEFwaUNvbW1vblNlcnZpY2VcbiAgKSB7IH1cbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIGZvciB0aGUgU2VhcmNoIEFQSSBvZiB0aGUgWW91VHViZSBEYXRhIHYzIEFQSVxuICAgKi9cbiAgcmVhZG9ubHkgbmd4WXRkU2VhcmNoQXBpVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoJztcbiAgLyoqXG4gICAqIFJldHVybnMgYSBjb2xsZWN0aW9uIG9mIHNlYXJjaCByZXN1bHRzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgc3BlY2lmaWVkXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBoYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaVNlYXJjaExpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbW9uLnNlbmRIdHRwUmVxdWVzdDxhbnksIE5neFl0ZEFwaVNlYXJjaExpc3RPcHRzLCBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0PihcbiAgICAgIHRoaXMubmd4WXRkU2VhcmNoQXBpVXJsLFxuICAgICAgdGhpcy5jb21tb24ubWVyZ2VPcHRzPE5neFl0ZEFwaVNlYXJjaExpc3RPcHRzPihvcHRzKSxcbiAgICAgIG51bGwsXG4gICAgICAnZ2V0J1xuICAgICk7XG4gIH1cbn1cbiJdfQ==