/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/ytd-api-core.service";
var NgxYtdApiVideosService = /** @class */ (function () {
    function NgxYtdApiVideosService(core) {
        this.core = core;
    }
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param opts API parameters for the API
     */
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param {?} opts API parameters for the API
     * @return {?}
     */
    NgxYtdApiVideosService.prototype.getRating = /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param {?} opts API parameters for the API
     * @return {?}
     */
    function (opts) {
        return this.core.createHttpGet(this.core.ngxYtdVideosApiUrl + "/getRating", opts);
    };
    /**
     * Returns a list of videos that match the requested API parameters
     * @param opts API parameters for the API
     */
    /**
     * Returns a list of videos that match the requested API parameters
     * @param {?} opts API parameters for the API
     * @return {?}
     */
    NgxYtdApiVideosService.prototype.list = /**
     * Returns a list of videos that match the requested API parameters
     * @param {?} opts API parameters for the API
     * @return {?}
     */
    function (opts) {
        return this.core.createHttpGet("" + this.core.ngxYtdVideosApiUrl, opts);
    };
    NgxYtdApiVideosService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NgxYtdApiVideosService.ctorParameters = function () { return [
        { type: NgxYtdApiCoreService }
    ]; };
    /** @nocollapse */ NgxYtdApiVideosService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiVideosService_Factory() { return new NgxYtdApiVideosService(i0.inject(i1.NgxYtdApiCoreService)); }, token: NgxYtdApiVideosService, providedIn: "root" });
    return NgxYtdApiVideosService;
}());
export { NgxYtdApiVideosService };
if (false) {
    /** @type {?} */
    NgxYtdApiVideosService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsidmlkZW9zL3l0ZC1hcGktdmlkZW9zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUV4RDtJQUlFLGdDQUNVLElBQTBCO1FBQTFCLFNBQUksR0FBSixJQUFJLENBQXNCO0lBQ2hDLENBQUM7SUFDTDs7O09BR0c7Ozs7OztJQUNILDBDQUFTOzs7OztJQUFULFVBQVUsSUFBa0M7UUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsZUFBWSxFQUMzQyxJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7SUFDRDs7O09BR0c7Ozs7OztJQUNILHFDQUFJOzs7OztJQUFKLFVBQUssSUFBNkI7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBcUQsS0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlILENBQUM7O2dCQXZCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Z0JBSlEsb0JBQW9COzs7aUNBUjdCO0NBa0NDLEFBeEJELElBd0JDO1NBckJZLHNCQUFzQjs7O0lBRS9CLHNDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ09wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ1Jlc3VsdCxcbiAgTmd4WXRkQXBpVmlkZW9zTGlzdE9wdHMsXG4gIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRcbn0gZnJvbSAnLi95dGQtYXBpLXZpZGVvcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29yZVNlcnZpY2UgfSBmcm9tICduZ3gteXRkLWFwaS9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpVmlkZW9zU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZTogTmd4WXRkQXBpQ29yZVNlcnZpY2VcbiAgKSB7IH1cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgcmF0aW5ncyB0aGF0IHRoZSBhdXRob3JpemVkIHVzZXIgZ2F2ZSB0byBhIGxpc3Qgb2Ygc3BlY2lmaWVkIHZpZGVvc1xuICAgKiBAcGFyYW0gb3B0cyBBUEkgcGFyYW1ldGVycyBmb3IgdGhlIEFQSVxuICAgKi9cbiAgZ2V0UmF0aW5nKG9wdHM6IE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ09wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ1Jlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cEdldDxOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdSZXN1bHQsIE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ09wdHM+KFxuICAgICAgYCR7dGhpcy5jb3JlLm5neFl0ZFZpZGVvc0FwaVVybH0vZ2V0UmF0aW5nYCxcbiAgICAgIG9wdHNcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiB2aWRlb3MgdGhhdCBtYXRjaCB0aGUgcmVxdWVzdGVkIEFQSSBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5jcmVhdGVIdHRwR2V0PE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQsIE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzPihgJHt0aGlzLmNvcmUubmd4WXRkVmlkZW9zQXBpVXJsfWAsIG9wdHMpO1xuICB9XG59XG4iXX0=