/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/ytd-api-core.service";
export class NgxYtdApiVideosService {
    /**
     * @param {?} core
     */
    constructor(core) {
        this.core = core;
    }
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param {?} opts API parameters for the API
     * @return {?}
     */
    getRating(opts) {
        return this.core.createHttpGet(`${this.core.ngxYtdVideosApiUrl}/getRating`, opts);
    }
    /**
     * Returns a list of videos that match the requested API parameters
     * @param {?} opts API parameters for the API
     * @return {?}
     */
    list(opts) {
        return this.core.createHttpGet(`${this.core.ngxYtdVideosApiUrl}`, opts);
    }
}
NgxYtdApiVideosService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxYtdApiVideosService.ctorParameters = () => [
    { type: NgxYtdApiCoreService }
];
/** @nocollapse */ NgxYtdApiVideosService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiVideosService_Factory() { return new NgxYtdApiVideosService(i0.inject(i1.NgxYtdApiCoreService)); }, token: NgxYtdApiVideosService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgxYtdApiVideosService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsidmlkZW9zL3l0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUt4RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBQ2pDLFlBQ1UsSUFBMEI7UUFBMUIsU0FBSSxHQUFKLElBQUksQ0FBc0I7SUFDaEMsQ0FBQzs7Ozs7O0lBS0wsU0FBUyxDQUFDLElBQWtDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQzVCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsWUFBWSxFQUMzQyxJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELElBQUksQ0FBQyxJQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFxRCxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5SCxDQUFDOzs7WUF2QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsb0JBQW9COzs7OztJQU96QixzQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdSZXN1bHQsXG4gIE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzLFxuICBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0XG59IGZyb20gJy4veXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neFl0ZEFwaUNvcmVTZXJ2aWNlIH0gZnJvbSAnbmd4LXl0ZC1hcGkvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVZpZGVvc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmU6IE5neFl0ZEFwaUNvcmVTZXJ2aWNlXG4gICkgeyB9XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHJhdGluZ3MgdGhhdCB0aGUgYXV0aG9yaXplZCB1c2VyIGdhdmUgdG8gYSBsaXN0IG9mIHNwZWNpZmllZCB2aWRlb3NcbiAgICogQHBhcmFtIG9wdHMgQVBJIHBhcmFtZXRlcnMgZm9yIHRoZSBBUElcbiAgICovXG4gIGdldFJhdGluZyhvcHRzOiBOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb3JlLmNyZWF0ZUh0dHBHZXQ8Tmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0LCBOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdPcHRzPihcbiAgICAgIGAke3RoaXMuY29yZS5uZ3hZdGRWaWRlb3NBcGlVcmx9L2dldFJhdGluZ2AsXG4gICAgICBvcHRzXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgdmlkZW9zIHRoYXQgbWF0Y2ggdGhlIHJlcXVlc3RlZCBBUEkgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cyk6IE9ic2VydmFibGU8Tmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cEdldDxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0LCBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cz4oYCR7dGhpcy5jb3JlLm5neFl0ZFZpZGVvc0FwaVVybH1gLCBvcHRzKTtcbiAgfVxufVxuIl19