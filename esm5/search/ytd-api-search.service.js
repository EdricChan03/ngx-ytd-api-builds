/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
var NgxYtdApiSearchService = /** @class */ (function () {
    function NgxYtdApiSearchService(core) {
        this.core = core;
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
        return this.core.createHttpGet(this.core.ngxYtdSearchApiUrl, opts);
    };
    NgxYtdApiSearchService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxYtdApiSearchService.ctorParameters = function () { return [
        { type: NgxYtdApiCoreService }
    ]; };
    return NgxYtdApiSearchService;
}());
export { NgxYtdApiSearchService };
if (false) {
    /** @type {?} */
    NgxYtdApiSearchService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEQ7SUFFRSxnQ0FDVSxJQUEwQjtRQUExQixTQUFJLEdBQUosSUFBSSxDQUFzQjtJQUNoQyxDQUFDO0lBQ0w7Ozs7OztPQU1HOzs7Ozs7OztJQUNILHFDQUFJOzs7Ozs7O0lBQUosVUFBSyxJQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFxRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pILENBQUM7O2dCQWRGLFVBQVU7Ozs7Z0JBRkYsb0JBQW9COztJQWlCN0IsNkJBQUM7Q0FBQSxBQWZELElBZUM7U0FkWSxzQkFBc0I7OztJQUUvQixzQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHMsIE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQgfSBmcm9tICcuL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29yZVNlcnZpY2UgfSBmcm9tICduZ3gteXRkLWFwaS9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVNlYXJjaFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmU6IE5neFl0ZEFwaUNvcmVTZXJ2aWNlXG4gICkgeyB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY29sbGVjdGlvbiBvZiBzZWFyY2ggcmVzdWx0cyB0aGF0IG1hdGNoIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHNwZWNpZmllZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggaGFzIGFuIGBPYnNlcnZhYmxlYFxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cEdldDxOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0LCBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cz4odGhpcy5jb3JlLm5neFl0ZFNlYXJjaEFwaVVybCwgb3B0cyk7XG4gIH1cbn1cbiJdfQ==