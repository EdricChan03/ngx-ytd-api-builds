import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { NgxYtdApiCommonModule, NGX_YTD_API_DEFAULT_STANDARD_PARAMS } from 'ngx-ytd-api/common';
import { NgxYtdApiCommentsService } from './ytd-api-comments.service';
var NgxYtdApiCommentsModule = /** @class */ (function () {
    function NgxYtdApiCommentsModule() {
    }
    NgxYtdApiCommentsModule_1 = NgxYtdApiCommentsModule;
    /**
     * Returns the module with the specified standard parameters
     * @param defaultParams The default standard parameters
     * @returns The module with the specified standard parameters
     */
    NgxYtdApiCommentsModule.forRoot = function (defaultParams) {
        return {
            ngModule: NgxYtdApiCommentsModule_1,
            providers: [
                { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
            ]
        };
    };
    var NgxYtdApiCommentsModule_1;
    NgxYtdApiCommentsModule = NgxYtdApiCommentsModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [
                NgxYtdApiCommonModule
            ],
            providers: [
                NgxYtdApiCommentsService
            ]
        })
    ], NgxYtdApiCommentsModule);
    return NgxYtdApiCommentsModule;
}());
export { NgxYtdApiCommentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteXRkLWFwaS9jb21tZW50cy8iLCJzb3VyY2VzIjpbInl0ZC1hcGktY29tbWVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQTJCLG1DQUFtQyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFTdEU7SUFBQTtJQWdCQSxDQUFDO2dDQWhCWSx1QkFBdUI7SUFDbEM7Ozs7T0FJRztJQUNJLCtCQUFPLEdBQWQsVUFDRSxhQUFzQztRQUV0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLHlCQUF1QjtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTthQUMxRTtTQUNGLENBQUM7SUFDSixDQUFDOztJQWZVLHVCQUF1QjtRQVJuQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQXFCO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULHdCQUF3QjthQUN6QjtTQUNGLENBQUM7T0FDVyx1QkFBdUIsQ0FnQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbW9uTW9kdWxlLCBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtcywgTkdYX1lURF9BUElfREVGQVVMVF9TVEFOREFSRF9QQVJBTVMgfSBmcm9tICduZ3gteXRkLWFwaS9jb21tb24nO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbWVudHNTZXJ2aWNlIH0gZnJvbSAnLi95dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5neFl0ZEFwaUNvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBOZ3hZdGRBcGlDb21tZW50c1NlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlDb21tZW50c01vZHVsZSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtb2R1bGUgd2l0aCB0aGUgc3BlY2lmaWVkIHN0YW5kYXJkIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIGRlZmF1bHRQYXJhbXMgVGhlIGRlZmF1bHQgc3RhbmRhcmQgcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyBUaGUgbW9kdWxlIHdpdGggdGhlIHNwZWNpZmllZCBzdGFuZGFyZCBwYXJhbWV0ZXJzXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBkZWZhdWx0UGFyYW1zOiBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtc1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neFl0ZEFwaUNvbW1lbnRzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTkdYX1lURF9BUElfREVGQVVMVF9TVEFOREFSRF9QQVJBTVMsIHVzZVZhbHVlOiBkZWZhdWx0UGFyYW1zIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=