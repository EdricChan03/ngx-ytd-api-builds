import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { NgxYtdApiCommonModule, NGX_YTD_API_DEFAULT_STANDARD_PARAMS } from 'ngx-ytd-api/common';
import { NgxYtdApiCommentThreadsService } from './ytd-api-comment-threads.service';
var NgxYtdApiCommentThreadsModule = /** @class */ (function () {
    function NgxYtdApiCommentThreadsModule() {
    }
    NgxYtdApiCommentThreadsModule_1 = NgxYtdApiCommentThreadsModule;
    /**
     * Returns the module with the specified standard parameters
     * @param defaultParams The default standard parameters
     * @returns The module with the specified standard parameters
     */
    NgxYtdApiCommentThreadsModule.forRoot = function (defaultParams) {
        return {
            ngModule: NgxYtdApiCommentThreadsModule_1,
            providers: [
                { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
            ]
        };
    };
    var NgxYtdApiCommentThreadsModule_1;
    NgxYtdApiCommentThreadsModule = NgxYtdApiCommentThreadsModule_1 = tslib_1.__decorate([
        NgModule({
            providers: [
                NgxYtdApiCommentThreadsService
            ],
            imports: [
                NgxYtdApiCommonModule
            ]
        })
    ], NgxYtdApiCommentThreadsModule);
    return NgxYtdApiCommentThreadsModule;
}());
export { NgxYtdApiCommentThreadsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50LXRocmVhZHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvY29tbWVudFRocmVhZHMvIiwic291cmNlcyI6WyJ5dGQtYXBpLWNvbW1lbnQtdGhyZWFkcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBMkIsbUNBQW1DLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6SCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVVuRjtJQUFBO0lBZ0JBLENBQUM7c0NBaEJZLDZCQUE2QjtJQUN4Qzs7OztPQUlHO0lBQ0kscUNBQU8sR0FBZCxVQUNFLGFBQXNDO1FBRXRDLE9BQU87WUFDTCxRQUFRLEVBQUUsK0JBQTZCO1lBQ3ZDLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO2FBQzFFO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBZlUsNkJBQTZCO1FBUnpDLFFBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRTtnQkFDVCw4QkFBOEI7YUFDL0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AscUJBQXFCO2FBQ3RCO1NBQ0YsQ0FBQztPQUNXLDZCQUE2QixDQWdCekM7SUFBRCxvQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb21tb25Nb2R1bGUsIE5neFl0ZEFwaVN0YW5kYXJkUGFyYW1zLCBOR1hfWVREX0FQSV9ERUZBVUxUX1NUQU5EQVJEX1BBUkFNUyB9IGZyb20gJ25neC15dGQtYXBpL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb21tZW50VGhyZWFkc1NlcnZpY2UgfSBmcm9tICcuL3l0ZC1hcGktY29tbWVudC10aHJlYWRzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICBOZ3hZdGRBcGlDb21tZW50VGhyZWFkc1NlcnZpY2VcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5neFl0ZEFwaUNvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzTW9kdWxlIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1vZHVsZSB3aXRoIHRoZSBzcGVjaWZpZWQgc3RhbmRhcmQgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gZGVmYXVsdFBhcmFtcyBUaGUgZGVmYXVsdCBzdGFuZGFyZCBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm5zIFRoZSBtb2R1bGUgd2l0aCB0aGUgc3BlY2lmaWVkIHN0YW5kYXJkIHBhcmFtZXRlcnNcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KFxuICAgIGRlZmF1bHRQYXJhbXM6IE5neFl0ZEFwaVN0YW5kYXJkUGFyYW1zXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4WXRkQXBpQ29tbWVudFRocmVhZHNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBOR1hfWVREX0FQSV9ERUZBVUxUX1NUQU5EQVJEX1BBUkFNUywgdXNlVmFsdWU6IGRlZmF1bHRQYXJhbXMgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==