/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/ytd-api-core.service";
var NgxYtdApiCommentsService = /** @class */ (function () {
    function NgxYtdApiCommentsService(core) {
        this.core = core;
    }
    /**
     * Retrieves comments
     * @param opts Options for the API
     * @return Results of the search as a stream for subscribing to
     */
    /**
     * Retrieves comments
     * @param {?} opts Options for the API
     * @return {?} Results of the search as a stream for subscribing to
     */
    NgxYtdApiCommentsService.prototype.list = /**
     * Retrieves comments
     * @param {?} opts Options for the API
     * @return {?} Results of the search as a stream for subscribing to
     */
    function (opts) {
        return this.core.createHttpGet(this.core.ngxYtdCommentsApiUrl, opts);
    };
    NgxYtdApiCommentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxYtdApiCommentsService.ctorParameters = function () { return [
        { type: NgxYtdApiCoreService }
    ]; };
    /** @nocollapse */ NgxYtdApiCommentsService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiCommentsService_Factory() { return new NgxYtdApiCommentsService(i0.inject(i1.NgxYtdApiCoreService)); }, token: NgxYtdApiCommentsService, providedIn: "root" });
    return NgxYtdApiCommentsService;
}());
export { NgxYtdApiCommentsService };
if (false) {
    /** @type {?} */
    NgxYtdApiCommentsService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJjb21tZW50cy95dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUl4RDtJQUlFLGtDQUNVLElBQTBCO1FBQTFCLFNBQUksR0FBSixJQUFJLENBQXNCO0lBQ2hDLENBQUM7SUFDTDs7OztPQUlHOzs7Ozs7SUFDSCx1Q0FBSTs7Ozs7SUFBSixVQUFLLElBQThCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQXVELElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0gsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxvQkFBb0I7OzttQ0FEN0I7Q0FvQkMsQUFmRCxJQWVDO1NBWlksd0JBQXdCOzs7SUFFakMsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29yZVNlcnZpY2UgfSBmcm9tICduZ3gteXRkLWFwaS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neFl0ZEFwaUNvbW1lbnRMaXN0T3B0cywgTmd4WXRkQXBpQ29tbWVudExpc3RSZXN1bHQgfSBmcm9tICcuL3l0ZC1hcGktY29tbWVudHMuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29tbWVudHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlOiBOZ3hZdGRBcGlDb3JlU2VydmljZVxuICApIHsgfVxuICAvKipcbiAgICogUmV0cmlldmVzIGNvbW1lbnRzXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW0gZm9yIHN1YnNjcmliaW5nIHRvXG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpQ29tbWVudExpc3RSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb3JlLmNyZWF0ZUh0dHBHZXQ8Tmd4WXRkQXBpQ29tbWVudExpc3RSZXN1bHQsIE5neFl0ZEFwaUNvbW1lbnRMaXN0T3B0cz4odGhpcy5jb3JlLm5neFl0ZENvbW1lbnRzQXBpVXJsLCBvcHRzKTtcbiAgfVxufVxuIl19