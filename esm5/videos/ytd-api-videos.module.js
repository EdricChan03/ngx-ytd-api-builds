import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { NgxYtdApiCommonModule, NGX_YTD_API_DEFAULT_STANDARD_PARAMS } from 'ngx-ytd-api/common';
import { NgxYtdApiVideosService } from './ytd-api-videos.service';
var NgxYtdApiVideosModule = /** @class */ (function () {
    function NgxYtdApiVideosModule() {
    }
    NgxYtdApiVideosModule_1 = NgxYtdApiVideosModule;
    /**
     * Returns the module with the specified standard parameters
     * @param defaultParams The default standard parameters
     * @returns The module with the specified standard parameters
     */
    NgxYtdApiVideosModule.forRoot = function (defaultParams) {
        return {
            ngModule: NgxYtdApiVideosModule_1,
            providers: [
                { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
            ]
        };
    };
    var NgxYtdApiVideosModule_1;
    NgxYtdApiVideosModule = NgxYtdApiVideosModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [
                NgxYtdApiCommonModule
            ],
            providers: [
                NgxYtdApiVideosService
            ]
        })
    ], NgxYtdApiVideosModule);
    return NgxYtdApiVideosModule;
}());
export { NgxYtdApiVideosModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvdmlkZW9zLyIsInNvdXJjZXMiOlsieXRkLWFwaS12aWRlb3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQTJCLG1DQUFtQyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVbEU7SUFBQTtJQWdCQSxDQUFDOzhCQWhCWSxxQkFBcUI7SUFDaEM7Ozs7T0FJRztJQUNJLDZCQUFPLEdBQWQsVUFDRSxhQUFzQztRQUV0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTthQUMxRTtTQUNGLENBQUM7SUFDSixDQUFDOztJQWZVLHFCQUFxQjtRQVJqQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQXFCO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULHNCQUFzQjthQUN2QjtTQUNGLENBQUM7T0FDVyxxQkFBcUIsQ0FnQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbW9uTW9kdWxlLCBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtcywgTkdYX1lURF9BUElfREVGQVVMVF9TVEFOREFSRF9QQVJBTVMgfSBmcm9tICduZ3gteXRkLWFwaS9jb21tb24nO1xuaW1wb3J0IHsgTmd4WXRkQXBpVmlkZW9zU2VydmljZSB9IGZyb20gJy4veXRkLWFwaS12aWRlb3Muc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOZ3hZdGRBcGlDb21tb25Nb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTmd4WXRkQXBpVmlkZW9zU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVZpZGVvc01vZHVsZSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtb2R1bGUgd2l0aCB0aGUgc3BlY2lmaWVkIHN0YW5kYXJkIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIGRlZmF1bHRQYXJhbXMgVGhlIGRlZmF1bHQgc3RhbmRhcmQgcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyBUaGUgbW9kdWxlIHdpdGggdGhlIHNwZWNpZmllZCBzdGFuZGFyZCBwYXJhbWV0ZXJzXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBkZWZhdWx0UGFyYW1zOiBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtc1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neFl0ZEFwaVZpZGVvc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HWF9ZVERfQVBJX0RFRkFVTFRfU1RBTkRBUkRfUEFSQU1TLCB1c2VWYWx1ZTogZGVmYXVsdFBhcmFtcyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19