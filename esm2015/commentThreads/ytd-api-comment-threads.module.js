import * as tslib_1 from "tslib";
var NgxYtdApiCommentThreadsModule_1;
import { NgModule } from '@angular/core';
import { NgxYtdApiCommonModule, NGX_YTD_API_DEFAULT_STANDARD_PARAMS } from 'ngx-ytd-api/common';
import { NgxYtdApiCommentThreadsService } from './ytd-api-comment-threads.service';
let NgxYtdApiCommentThreadsModule = NgxYtdApiCommentThreadsModule_1 = class NgxYtdApiCommentThreadsModule {
    /**
     * Returns the module with the specified standard parameters
     * @param defaultParams The default standard parameters
     * @returns The module with the specified standard parameters
     */
    static forRoot(defaultParams) {
        return {
            ngModule: NgxYtdApiCommentThreadsModule_1,
            providers: [
                { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
            ]
        };
    }
};
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
export { NgxYtdApiCommentThreadsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50LXRocmVhZHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvY29tbWVudFRocmVhZHMvIiwic291cmNlcyI6WyJ5dGQtYXBpLWNvbW1lbnQtdGhyZWFkcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQTJCLG1DQUFtQyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFVbkYsSUFBYSw2QkFBNkIscUNBQTFDLE1BQWEsNkJBQTZCO0lBQ3hDOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsT0FBTyxDQUNaLGFBQXNDO1FBRXRDLE9BQU87WUFDTCxRQUFRLEVBQUUsK0JBQTZCO1lBQ3ZDLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO2FBQzFFO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBaEJZLDZCQUE2QjtJQVJ6QyxRQUFRLENBQUM7UUFDUixTQUFTLEVBQUU7WUFDVCw4QkFBOEI7U0FDL0I7UUFDRCxPQUFPLEVBQUU7WUFDUCxxQkFBcUI7U0FDdEI7S0FDRixDQUFDO0dBQ1csNkJBQTZCLENBZ0J6QztTQWhCWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbW9uTW9kdWxlLCBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtcywgTkdYX1lURF9BUElfREVGQVVMVF9TVEFOREFSRF9QQVJBTVMgfSBmcm9tICduZ3gteXRkLWFwaS9jb21tb24nO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbWVudFRocmVhZHNTZXJ2aWNlIH0gZnJvbSAnLi95dGQtYXBpLWNvbW1lbnQtdGhyZWFkcy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgTmd4WXRkQXBpQ29tbWVudFRocmVhZHNTZXJ2aWNlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOZ3hZdGRBcGlDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlDb21tZW50VGhyZWFkc01vZHVsZSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtb2R1bGUgd2l0aCB0aGUgc3BlY2lmaWVkIHN0YW5kYXJkIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIGRlZmF1bHRQYXJhbXMgVGhlIGRlZmF1bHQgc3RhbmRhcmQgcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyBUaGUgbW9kdWxlIHdpdGggdGhlIHNwZWNpZmllZCBzdGFuZGFyZCBwYXJhbWV0ZXJzXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBkZWZhdWx0UGFyYW1zOiBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtc1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTkdYX1lURF9BUElfREVGQVVMVF9TVEFOREFSRF9QQVJBTVMsIHVzZVZhbHVlOiBkZWZhdWx0UGFyYW1zIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=