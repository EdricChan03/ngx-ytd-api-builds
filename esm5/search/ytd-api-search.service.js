import * as tslib_1 from "tslib";
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
    NgxYtdApiSearchService.prototype.list = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdSearchApiUrl, this.common.mergeOpts(opts), null, 'get');
    };
    NgxYtdApiSearchService.ctorParameters = function () { return [
        { type: NgxYtdApiCommonService }
    ]; };
    NgxYtdApiSearchService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [NgxYtdApiCommonService])
    ], NgxYtdApiSearchService);
    return NgxYtdApiSearchService;
}());
export { NgxYtdApiSearchService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL3NlYXJjaC8iLCJzb3VyY2VzIjpbInl0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNNUQ7SUFDRSxnQ0FDVSxNQUE4QjtRQUE5QixXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUV4Qzs7V0FFRztRQUNNLHVCQUFrQixHQUFHLDhDQUE4QyxDQUFDO0lBSnpFLENBQUM7SUFLTDs7Ozs7O09BTUc7SUFDSCxxQ0FBSSxHQUFKLFVBQUssSUFBNkI7UUFDaEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBMEIsSUFBSSxDQUFDLEVBQ3BELElBQUksRUFDSixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7O2dCQXBCaUIsc0JBQXNCOztJQUY3QixzQkFBc0I7UUFEbEMsVUFBVSxFQUFFO2lEQUdPLHNCQUFzQjtPQUY3QixzQkFBc0IsQ0F1QmxDO0lBQUQsNkJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXZCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb21tb25TZXJ2aWNlIH0gZnJvbSAnbmd4LXl0ZC1hcGkvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neFl0ZEFwaVNlYXJjaExpc3RPcHRzLCBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLXNlYXJjaC5pbnRlcmZhY2VzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpU2VhcmNoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tbW9uOiBOZ3hZdGRBcGlDb21tb25TZXJ2aWNlXG4gICkgeyB9XG4gIC8qKlxuICAgKiBUaGUgQVBJIFVSTCBmb3IgdGhlIFNlYXJjaCBBUEkgb2YgdGhlIFlvdVR1YmUgRGF0YSB2MyBBUElcbiAgICovXG4gIHJlYWRvbmx5IG5neFl0ZFNlYXJjaEFwaVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaCc7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY29sbGVjdGlvbiBvZiBzZWFyY2ggcmVzdWx0cyB0aGF0IG1hdGNoIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHNwZWNpZmllZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggaGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmNvbW1vbi5zZW5kSHR0cFJlcXVlc3Q8YW55LCBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cywgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdD4oXG4gICAgICB0aGlzLm5neFl0ZFNlYXJjaEFwaVVybCxcbiAgICAgIHRoaXMuY29tbW9uLm1lcmdlT3B0czxOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cz4ob3B0cyksXG4gICAgICBudWxsLFxuICAgICAgJ2dldCdcbiAgICApO1xuICB9XG59XG4iXX0=