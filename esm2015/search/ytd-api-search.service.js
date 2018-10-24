/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
export class NgxYtdApiSearchService {
    /**
     * @param {?} core
     */
    constructor(core) {
        this.core = core;
    }
    /**
     * Searches using the YouTube HTTP Data API
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    list(opts) {
        return this.core.createHttpGet(this.core.ngxYtdSearchApiUrl, opts);
    }
}
NgxYtdApiSearchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxYtdApiSearchService.ctorParameters = () => [
    { type: NgxYtdApiCoreService }
];
if (false) {
    /** @type {?} */
    NgxYtdApiSearchService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHeEQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUNqQyxZQUNVLElBQTBCO1FBQTFCLFNBQUksR0FBSixJQUFJLENBQXNCO0lBQ2hDLENBQUM7Ozs7OztJQVFMLElBQUksQ0FBQyxJQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFxRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pILENBQUM7OztZQWRGLFVBQVU7Ozs7WUFGRixvQkFBb0I7Ozs7SUFLekIsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE5neFl0ZEFwaVNlYXJjaExpc3RPcHRzLCBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLXNlYXJjaC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5neFl0ZEFwaUNvcmVTZXJ2aWNlIH0gZnJvbSAnbmd4LXl0ZC1hcGkvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlTZWFyY2hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlOiBOZ3hZdGRBcGlDb3JlU2VydmljZVxuICApIHsgfVxuICAvKipcbiAgICogU2VhcmNoZXMgdXNpbmcgdGhlIFlvdVR1YmUgSFRUUCBEYXRhIEFQSVxuICAgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3IuIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNxfGRldmVsb3BlciBkb2NzfVxuICAgKiBmb3IgbW9yZSBpbmZvLlxuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciBzZWFyY2hpbmdcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYSBzdHJlYW1cbiAgICovXG4gIGxpc3Qob3B0czogTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb3JlLmNyZWF0ZUh0dHBHZXQ8Tmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdCwgTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHM+KHRoaXMuY29yZS5uZ3hZdGRTZWFyY2hBcGlVcmwsIG9wdHMpO1xuICB9XG59XG4iXX0=