import * as tslib_1 from "tslib";
var NgxYtdApiSearchModule_1;
import { NgModule } from '@angular/core';
import { NgxYtdApiCommonModule, NGX_YTD_API_DEFAULT_STANDARD_PARAMS } from 'ngx-ytd-api/common';
import { NgxYtdApiSearchService } from './ytd-api-search.service';
let NgxYtdApiSearchModule = NgxYtdApiSearchModule_1 = class NgxYtdApiSearchModule {
    /**
     * Returns the module with the specified standard parameters
     * @param defaultParams The default standard parameters
     * @returns The module with the specified standard parameters
     */
    static forRoot(defaultParams) {
        return {
            ngModule: NgxYtdApiSearchModule_1,
            providers: [
                { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
            ]
        };
    }
};
NgxYtdApiSearchModule = NgxYtdApiSearchModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [
            NgxYtdApiCommonModule
        ],
        providers: [
            NgxYtdApiSearchService
        ]
    })
], NgxYtdApiSearchModule);
export { NgxYtdApiSearchModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvc2VhcmNoLyIsInNvdXJjZXMiOlsieXRkLWFwaS1zZWFyY2gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUEyQixtQ0FBbUMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVWxFLElBQWEscUJBQXFCLDZCQUFsQyxNQUFhLHFCQUFxQjtJQUNoQzs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FDWixhQUFzQztRQUV0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRTthQUMxRTtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWhCWSxxQkFBcUI7SUFSakMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQXFCO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsc0JBQXNCO1NBQ3ZCO0tBQ0YsQ0FBQztHQUNXLHFCQUFxQixDQWdCakM7U0FoQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFl0ZEFwaUNvbW1vbk1vZHVsZSwgTmd4WXRkQXBpU3RhbmRhcmRQYXJhbXMsIE5HWF9ZVERfQVBJX0RFRkFVTFRfU1RBTkRBUkRfUEFSQU1TIH0gZnJvbSAnbmd4LXl0ZC1hcGkvY29tbW9uJztcbmltcG9ydCB7IE5neFl0ZEFwaVNlYXJjaFNlcnZpY2UgfSBmcm9tICcuL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmd4WXRkQXBpQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5neFl0ZEFwaVNlYXJjaFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlTZWFyY2hNb2R1bGUge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgbW9kdWxlIHdpdGggdGhlIHNwZWNpZmllZCBzdGFuZGFyZCBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBkZWZhdWx0UGFyYW1zIFRoZSBkZWZhdWx0IHN0YW5kYXJkIHBhcmFtZXRlcnNcbiAgICogQHJldHVybnMgVGhlIG1vZHVsZSB3aXRoIHRoZSBzcGVjaWZpZWQgc3RhbmRhcmQgcGFyYW1ldGVyc1xuICAgKi9cbiAgc3RhdGljIGZvclJvb3QoXG4gICAgZGVmYXVsdFBhcmFtczogTmd4WXRkQXBpU3RhbmRhcmRQYXJhbXNcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hZdGRBcGlTZWFyY2hNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBOR1hfWVREX0FQSV9ERUZBVUxUX1NUQU5EQVJEX1BBUkFNUywgdXNlVmFsdWU6IGRlZmF1bHRQYXJhbXMgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==