/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/ytd-api-core.service";
var NgxYtdApiCommentService = /** @class */ (function () {
    function NgxYtdApiCommentService(core) {
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
    NgxYtdApiCommentService.prototype.list = /**
     * Retrieves comments
     * @param {?} opts Options for the API
     * @return {?} Results of the search as a stream for subscribing to
     */
    function (opts) {
        return this.core.createHttpGet(this.core.ngxYtdCommentsApiUrl, opts);
    };
    NgxYtdApiCommentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxYtdApiCommentService.ctorParameters = function () { return [
        { type: NgxYtdApiCoreService }
    ]; };
    /** @nocollapse */ NgxYtdApiCommentService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiCommentService_Factory() { return new NgxYtdApiCommentService(i0.inject(i1.NgxYtdApiCoreService)); }, token: NgxYtdApiCommentService, providedIn: "root" });
    return NgxYtdApiCommentService;
}());
export { NgxYtdApiCommentService };
if (false) {
    /** @type {?} */
    NgxYtdApiCommentService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJjb21tZW50cy95dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUV4RDtJQUlFLGlDQUNVLElBQTBCO1FBQTFCLFNBQUksR0FBSixJQUFJLENBQXNCO0lBQ2hDLENBQUM7SUFDTDs7OztPQUlHOzs7Ozs7SUFDSCxzQ0FBSTs7Ozs7SUFBSixVQUFLLElBQThCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQXVELElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0gsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxvQkFBb0I7OztrQ0FIN0I7Q0FvQkMsQUFmRCxJQWVDO1NBWlksdUJBQXVCOzs7SUFFaEMsdUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbWVudExpc3RPcHRzLCBOZ3hZdGRBcGlDb21tZW50TGlzdFJlc3VsdCB9IGZyb20gJy4veXRkLWFwaS1jb21tZW50cy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29yZVNlcnZpY2UgfSBmcm9tICduZ3gteXRkLWFwaS9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29tbWVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmU6IE5neFl0ZEFwaUNvcmVTZXJ2aWNlXG4gICkgeyB9XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgY29tbWVudHNcbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbSBmb3Igc3Vic2NyaWJpbmcgdG9cbiAgICovXG4gIGxpc3Qob3B0czogTmd4WXRkQXBpQ29tbWVudExpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlDb21tZW50TGlzdFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cEdldDxOZ3hZdGRBcGlDb21tZW50TGlzdFJlc3VsdCwgTmd4WXRkQXBpQ29tbWVudExpc3RPcHRzPih0aGlzLmNvcmUubmd4WXRkQ29tbWVudHNBcGlVcmwsIG9wdHMpO1xuICB9XG59XG4iXX0=