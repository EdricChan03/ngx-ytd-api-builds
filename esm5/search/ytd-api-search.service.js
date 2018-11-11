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
     * Searches using the YouTube HTTP Data API
     * @param query The query to search for. See the [developer docs](https://developers.google.com/youtube/v3/docs/search/list#q)
     * for more info.
     * @param opts Options for searching
     * @return Results of the search as a stream
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEQ7SUFFRSxnQ0FDVSxJQUEwQjtRQUExQixTQUFJLEdBQUosSUFBSSxDQUFzQjtJQUNoQyxDQUFDO0lBQ0w7Ozs7OztPQU1HOzs7Ozs7SUFDSCxxQ0FBSTs7Ozs7SUFBSixVQUFLLElBQTZCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQXFELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekgsQ0FBQzs7Z0JBZEYsVUFBVTs7OztnQkFGRixvQkFBb0I7O0lBaUI3Qiw2QkFBQztDQUFBLEFBZkQsSUFlQztTQWRZLHNCQUFzQjs7O0lBRS9CLHNDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cywgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdCB9IGZyb20gJy4veXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb3JlU2VydmljZSB9IGZyb20gJ25neC15dGQtYXBpL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpU2VhcmNoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZTogTmd4WXRkQXBpQ29yZVNlcnZpY2VcbiAgKSB7IH1cbiAgLyoqXG4gICAqIFNlYXJjaGVzIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcbiAgICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yLiBTZWUgdGhlIFtkZXZlbG9wZXIgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3EpXG4gICAqIGZvciBtb3JlIGluZm8uXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHNlYXJjaGluZ1xuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cEdldDxOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0LCBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cz4odGhpcy5jb3JlLm5neFl0ZFNlYXJjaEFwaVVybCwgb3B0cyk7XG4gIH1cbn1cbiJdfQ==