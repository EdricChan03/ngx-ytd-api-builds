/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/ytd-api-core.service";
export class NgxYtdApiCommentService {
    /**
     * @param {?} core
     */
    constructor(core) {
        this.core = core;
    }
    /**
     * Retrieves comments
     * @param {?} opts Options for the API
     * @return {?} Results of the search as a stream for subscribing to
     */
    list(opts) {
        return this.core.createHttpGet(this.core.ngxYtdCommentsApiUrl, opts);
    }
}
NgxYtdApiCommentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxYtdApiCommentService.ctorParameters = () => [
    { type: NgxYtdApiCoreService }
];
/** @nocollapse */ NgxYtdApiCommentService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiCommentService_Factory() { return new NgxYtdApiCommentService(i0.inject(i1.NgxYtdApiCoreService)); }, token: NgxYtdApiCommentService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgxYtdApiCommentService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJjb21tZW50cy95dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUt4RCxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBQ2xDLFlBQ1UsSUFBMEI7UUFBMUIsU0FBSSxHQUFKLElBQUksQ0FBc0I7SUFDaEMsQ0FBQzs7Ozs7O0lBTUwsSUFBSSxDQUFDLElBQThCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQXVELElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0gsQ0FBQzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsb0JBQW9COzs7OztJQU96Qix1Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb21tZW50TGlzdE9wdHMsIE5neFl0ZEFwaUNvbW1lbnRMaXN0UmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLWNvbW1lbnRzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb3JlU2VydmljZSB9IGZyb20gJ25neC15dGQtYXBpL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlDb21tZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZTogTmd4WXRkQXBpQ29yZVNlcnZpY2VcbiAgKSB7IH1cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBjb21tZW50c1xuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtIGZvciBzdWJzY3JpYmluZyB0b1xuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlDb21tZW50TGlzdE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaUNvbW1lbnRMaXN0UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5jcmVhdGVIdHRwR2V0PE5neFl0ZEFwaUNvbW1lbnRMaXN0UmVzdWx0LCBOZ3hZdGRBcGlDb21tZW50TGlzdE9wdHM+KHRoaXMuY29yZS5uZ3hZdGRDb21tZW50c0FwaVVybCwgb3B0cyk7XG4gIH1cbn1cbiJdfQ==