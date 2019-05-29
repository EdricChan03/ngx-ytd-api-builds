import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { NgxYtdApiCommonService } from './ytd-api-common.service';
import { SimpleHttpModule } from 'ngx-simple-http';
let NgxYtdApiCommonModule = class NgxYtdApiCommonModule {
};
NgxYtdApiCommonModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SimpleHttpModule
        ],
        providers: [
            NgxYtdApiCommonService
        ]
    })
], NgxYtdApiCommonModule);
export { NgxYtdApiCommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvY29tbW9uLyIsInNvdXJjZXMiOlsieXRkLWFwaS1jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBVW5ELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0NBQUksQ0FBQTtBQUF6QixxQkFBcUI7SUFSakMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsZ0JBQWdCO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsc0JBQXNCO1NBQ3ZCO0tBQ0YsQ0FBQztHQUNXLHFCQUFxQixDQUFJO1NBQXpCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi95dGQtYXBpLWNvbW1vbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNpbXBsZUh0dHBNb2R1bGUgfSBmcm9tICduZ3gtc2ltcGxlLWh0dHAnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2ltcGxlSHR0cE1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBOZ3hZdGRBcGlDb21tb25TZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29tbW9uTW9kdWxlIHsgfVxuIl19