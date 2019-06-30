import * as tslib_1 from "tslib";
var NgxYtdApiCommentsModule_1;
import { NgModule } from '@angular/core';
import { NgxYtdApiCommonModule, NGX_YTD_API_DEFAULT_STANDARD_PARAMS } from 'ngx-ytd-api/common';
import { NgxYtdApiCommentsService } from './ytd-api-comments.service';
let NgxYtdApiCommentsModule = NgxYtdApiCommentsModule_1 = class NgxYtdApiCommentsModule {
    /**
     * Returns the module with the specified standard parameters
     * @param defaultParams The default standard parameters
     * @returns The module with the specified standard parameters
     */
    static forRoot(defaultParams) {
        return {
            ngModule: NgxYtdApiCommentsModule_1,
            providers: [
                { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
            ]
        };
    }
};
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
export { NgxYtdApiCommentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteXRkLWFwaS9jb21tZW50cy8iLCJzb3VyY2VzIjpbInl0ZC1hcGktY29tbWVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUEyQixtQ0FBbUMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBU3RFLElBQWEsdUJBQXVCLCtCQUFwQyxNQUFhLHVCQUF1QjtJQUNsQzs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FDWixhQUFzQztRQUV0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLHlCQUF1QjtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTthQUMxRTtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWhCWSx1QkFBdUI7SUFSbkMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQXFCO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsd0JBQXdCO1NBQ3pCO0tBQ0YsQ0FBQztHQUNXLHVCQUF1QixDQWdCbkM7U0FoQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFl0ZEFwaUNvbW1vbk1vZHVsZSwgTmd4WXRkQXBpU3RhbmRhcmRQYXJhbXMsIE5HWF9ZVERfQVBJX0RFRkFVTFRfU1RBTkRBUkRfUEFSQU1TIH0gZnJvbSAnbmd4LXl0ZC1hcGkvY29tbW9uJztcbmltcG9ydCB7IE5neFl0ZEFwaUNvbW1lbnRzU2VydmljZSB9IGZyb20gJy4veXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOZ3hZdGRBcGlDb21tb25Nb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTmd4WXRkQXBpQ29tbWVudHNTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29tbWVudHNNb2R1bGUge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgbW9kdWxlIHdpdGggdGhlIHNwZWNpZmllZCBzdGFuZGFyZCBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBkZWZhdWx0UGFyYW1zIFRoZSBkZWZhdWx0IHN0YW5kYXJkIHBhcmFtZXRlcnNcbiAgICogQHJldHVybnMgVGhlIG1vZHVsZSB3aXRoIHRoZSBzcGVjaWZpZWQgc3RhbmRhcmQgcGFyYW1ldGVyc1xuICAgKi9cbiAgc3RhdGljIGZvclJvb3QoXG4gICAgZGVmYXVsdFBhcmFtczogTmd4WXRkQXBpU3RhbmRhcmRQYXJhbXNcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hZdGRBcGlDb21tZW50c01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HWF9ZVERfQVBJX0RFRkFVTFRfU1RBTkRBUkRfUEFSQU1TLCB1c2VWYWx1ZTogZGVmYXVsdFBhcmFtcyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19