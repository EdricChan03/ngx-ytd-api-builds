/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/ytd-api-core.service";
export class NgxYtdApiCommentsService {
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
NgxYtdApiCommentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxYtdApiCommentsService.ctorParameters = () => [
    { type: NgxYtdApiCoreService }
];
/** @nocollapse */ NgxYtdApiCommentsService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiCommentsService_Factory() { return new NgxYtdApiCommentsService(i0.inject(i1.NgxYtdApiCoreService)); }, token: NgxYtdApiCommentsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgxYtdApiCommentsService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJjb21tZW50cy95dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQU94RCxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBQ25DLFlBQ1UsSUFBMEI7UUFBMUIsU0FBSSxHQUFKLElBQUksQ0FBc0I7SUFDaEMsQ0FBQzs7Ozs7O0lBTUwsSUFBSSxDQUFDLElBQStCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQXlELElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0gsQ0FBQzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsb0JBQW9COzs7OztJQVN6Qix3Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb3JlU2VydmljZSB9IGZyb20gJ25neC15dGQtYXBpL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbWVudHNMaXN0T3B0cywgTmd4WXRkQXBpQ29tbWVudHNMaXN0UmVzdWx0IH0gZnJvbSAnLi95dGQtYXBpLWNvbW1lbnRzLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaUNvbW1lbnRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZTogTmd4WXRkQXBpQ29yZVNlcnZpY2VcbiAgKSB7IH1cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBjb21tZW50c1xuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGFzIGEgc3RyZWFtIGZvciBzdWJzY3JpYmluZyB0b1xuICAgKi9cbiAgbGlzdChvcHRzOiBOZ3hZdGRBcGlDb21tZW50c0xpc3RPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlDb21tZW50c0xpc3RSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb3JlLmNyZWF0ZUh0dHBHZXQ8Tmd4WXRkQXBpQ29tbWVudHNMaXN0UmVzdWx0LCBOZ3hZdGRBcGlDb21tZW50c0xpc3RPcHRzPih0aGlzLmNvcmUubmd4WXRkQ29tbWVudHNBcGlVcmwsIG9wdHMpO1xuICB9XG59XG4iXX0=