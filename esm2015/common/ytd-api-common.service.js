import * as tslib_1 from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, Optional } from '@angular/core';
import { SimpleHttpService } from 'ngx-simple-http';
import { NGX_YTD_API_DEFAULT_STANDARD_OPTIONS } from './ytd-api-common.injectors';
let NgxYtdApiCommonService = class NgxYtdApiCommonService {
    constructor(http, defaultOptions) {
        this.http = http;
        this.defaultOptions = defaultOptions;
    }
    /**
     * Checks for the following:
     * 1. The `key` exists in `obj`
     * 2. The key-value of `key` in `obj` is not `null`
     * @param obj The object to check
     * @param key The key to check for in `obj`
     * @template O The TypeScript interface to type `obj` against
     * @returns `true` if all conditions are met, `false` otherwise
     */
    keyValueExistsAndNonNull(obj, key) {
        return key in obj && typeof obj[key] !== null;
    }
    /**
     * Merges an API request's options with the default standard options as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @param opts The API request's options
     * @template T A TypeScript interface to type `opts` against
     * @returns The merged API request's options
     * @deprecated Use {@link NgxYtdApiCommonService#mergeParamsWithStandardParams}
     */
    mergeOpts(opts) {
        return this.mergeParamsWithStandardParams(opts);
    }
    /**
     * Merges an API request's parameters with the default standard parameters as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @param opts The API request's options
     * @template T A TypeScript interface to type `opts` against
     * @returns The merged API request's options
     */
    mergeParamsWithStandardParams(opts) {
        if (this.defaultOptions) {
            return Object.assign({}, opts, this.defaultOptions);
        }
        else {
            return opts;
        }
    }
    /**
     * Sends a HTTP request to the specified `apiEndpoint`
     * @param apiEndpoint The API endpoint to send a HTTP request to
     * @param opts Options to append to the endpoint as URL queries
     * @param body The body of the HTTP request
     * @param httpType The type of HTTP request to send
     * @template B A TypeScript interface to type the HTTP request's body to
     * @template P A TypeScript interface to type the HTTP request's parameters to
     * @template R A TypeScript interface to type the HTTP request's result to
     * @returns The result of the HTTP request
     */
    sendHttpRequest(apiEndpoint, opts, body = null, httpType) {
        let headers;
        if (this.keyValueExistsAndNonNull(opts, 'accessToken')) {
            if (this.keyValueExistsAndNonNull(opts, 'accessTokenUsesParam') && opts['accessTokenUsesParam']) {
                // Using parameter
                opts['access_token'] = opts['accessToken'];
                delete opts['accessToken'];
                // We don't want to pass this to the actual API endpoint
                delete opts['accessTokenUsesParam'];
            }
            else {
                // Using HTTP headers
                headers = new HttpHeaders()
                    .set('Authorization', `Bearer ${opts['accessToken']}`);
            }
        }
        switch (httpType) {
            case 'delete':
                if (headers) {
                    return this.http.createHttpDelete(apiEndpoint, opts, headers);
                }
                else {
                    return this.http.createHttpDelete(apiEndpoint, opts);
                }
            case 'get':
                if (headers) {
                    return this.http.createHttpGet(apiEndpoint, opts, headers);
                }
                else {
                    return this.http.createHttpGet(apiEndpoint, opts);
                }
            case 'post':
                if (headers) {
                    if (body) {
                        return this.http.createHttpPost(apiEndpoint, opts, body, headers);
                    }
                    else {
                        return this.http.createHttpPost(apiEndpoint, opts, null, headers);
                    }
                }
                else {
                    if (body) {
                        return this.http.createHttpPost(apiEndpoint, opts, body);
                    }
                    else {
                        return this.http.createHttpPost(apiEndpoint, opts, null);
                    }
                }
            case 'put':
                if (headers) {
                    if (body) {
                        return this.http.createHttpPut(apiEndpoint, opts, body, headers);
                    }
                    else {
                        return this.http.createHttpPut(apiEndpoint, opts, null, headers);
                    }
                }
                else {
                    if (body) {
                        return this.http.createHttpPut(apiEndpoint, opts, body);
                    }
                    else {
                        return this.http.createHttpPut(apiEndpoint, opts, null);
                    }
                }
        }
    }
};
NgxYtdApiCommonService.ctorParameters = () => [
    { type: SimpleHttpService },
    { type: undefined, decorators: [{ type: Inject, args: [NGX_YTD_API_DEFAULT_STANDARD_OPTIONS,] }, { type: Optional }] }
];
NgxYtdApiCommonService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(1, Inject(NGX_YTD_API_DEFAULT_STANDARD_OPTIONS)), tslib_1.__param(1, Optional()),
    tslib_1.__metadata("design:paramtypes", [SimpleHttpService, Object])
], NgxYtdApiCommonService);
export { NgxYtdApiCommonService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL2NvbW1vbi8iLCJzb3VyY2VzIjpbInl0ZC1hcGktY29tbW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbEYsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFDakMsWUFDVSxJQUF1QixFQUNtQyxjQUF1QztRQURqRyxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUNtQyxtQkFBYyxHQUFkLGNBQWMsQ0FBeUI7SUFDdkcsQ0FBQztJQUNMOzs7Ozs7OztPQVFHO0lBQ0ssd0JBQXdCLENBQW1CLEdBQU0sRUFBRSxHQUFXO1FBQ3BFLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDaEQsQ0FBQztJQUNEOzs7Ozs7O09BT0c7SUFDSCxTQUFTLENBQUksSUFBTztRQUNsQixPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBSSxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0gsNkJBQTZCLENBQUksSUFBTztRQUN0QyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIseUJBQVksSUFBSSxFQUFLLElBQUksQ0FBQyxjQUFjLEVBQUc7U0FDNUM7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBQ0Q7Ozs7Ozs7Ozs7T0FVRztJQUNILGVBQWUsQ0FDYixXQUFtQixF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RSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ2xFO2lCQUNGO1NBQ0o7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFsSGlCLGlCQUFpQjs0Q0FDOUIsTUFBTSxTQUFDLG9DQUFvQyxjQUFHLFFBQVE7O0FBSDlDLHNCQUFzQjtJQURsQyxVQUFVLEVBQUU7SUFJUixtQkFBQSxNQUFNLENBQUMsb0NBQW9DLENBQUMsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBOzZDQUQzQyxpQkFBaUI7R0FGdEIsc0JBQXNCLENBb0hsQztTQXBIWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNpbXBsZUh0dHBTZXJ2aWNlIH0gZnJvbSAnbmd4LXNpbXBsZS1odHRwJztcbmltcG9ydCB7IE5HWF9ZVERfQVBJX0RFRkFVTFRfU1RBTkRBUkRfT1BUSU9OUyB9IGZyb20gJy4veXRkLWFwaS1jb21tb24uaW5qZWN0b3JzJztcbmltcG9ydCB7IE5neFl0ZEFwaVN0YW5kYXJkUGFyYW1zIH0gZnJvbSAnLi95dGQtYXBpLWNvbW1vbi5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4WXRkQXBpQ29tbW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogU2ltcGxlSHR0cFNlcnZpY2UsXG4gICAgQEluamVjdChOR1hfWVREX0FQSV9ERUZBVUxUX1NUQU5EQVJEX09QVElPTlMpIEBPcHRpb25hbCgpIHByaXZhdGUgZGVmYXVsdE9wdGlvbnM6IE5neFl0ZEFwaVN0YW5kYXJkUGFyYW1zXG4gICkgeyB9XG4gIC8qKlxuICAgKiBDaGVja3MgZm9yIHRoZSBmb2xsb3dpbmc6XG4gICAqIDEuIFRoZSBga2V5YCBleGlzdHMgaW4gYG9iamBcbiAgICogMi4gVGhlIGtleS12YWx1ZSBvZiBga2V5YCBpbiBgb2JqYCBpcyBub3QgYG51bGxgXG4gICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBjaGVja1xuICAgKiBAcGFyYW0ga2V5IFRoZSBrZXkgdG8gY2hlY2sgZm9yIGluIGBvYmpgXG4gICAqIEB0ZW1wbGF0ZSBPIFRoZSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIGBvYmpgIGFnYWluc3RcbiAgICogQHJldHVybnMgYHRydWVgIGlmIGFsbCBjb25kaXRpb25zIGFyZSBtZXQsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBwcml2YXRlIGtleVZhbHVlRXhpc3RzQW5kTm9uTnVsbDxPIGV4dGVuZHMgT2JqZWN0PihvYmo6IE8sIGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGtleSBpbiBvYmogJiYgdHlwZW9mIG9ialtrZXldICE9PSBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBNZXJnZXMgYW4gQVBJIHJlcXVlc3QncyBvcHRpb25zIHdpdGggdGhlIGRlZmF1bHQgc3RhbmRhcmQgb3B0aW9ucyBhc1xuICAgKiBzcGVjaWZpZWQgdmlhIHRoZSBgTkdYX1lURF9BUElfREVGQVVMVF9TVEFOREFSRF9PUFRJT05TYCBpbmplY3Rpb24gdG9rZW5cbiAgICogQHBhcmFtIG9wdHMgVGhlIEFQSSByZXF1ZXN0J3Mgb3B0aW9uc1xuICAgKiBAdGVtcGxhdGUgVCBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgYG9wdHNgIGFnYWluc3RcbiAgICogQHJldHVybnMgVGhlIG1lcmdlZCBBUEkgcmVxdWVzdCdzIG9wdGlvbnNcbiAgICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlDb21tb25TZXJ2aWNlI21lcmdlUGFyYW1zV2l0aFN0YW5kYXJkUGFyYW1zfVxuICAgKi9cbiAgbWVyZ2VPcHRzPFQ+KG9wdHM6IFQpOiBUICYgTmd4WXRkQXBpU3RhbmRhcmRQYXJhbXMge1xuICAgIHJldHVybiB0aGlzLm1lcmdlUGFyYW1zV2l0aFN0YW5kYXJkUGFyYW1zPFQ+KG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBNZXJnZXMgYW4gQVBJIHJlcXVlc3QncyBwYXJhbWV0ZXJzIHdpdGggdGhlIGRlZmF1bHQgc3RhbmRhcmQgcGFyYW1ldGVycyBhc1xuICAgKiBzcGVjaWZpZWQgdmlhIHRoZSBgTkdYX1lURF9BUElfREVGQVVMVF9TVEFOREFSRF9PUFRJT05TYCBpbmplY3Rpb24gdG9rZW5cbiAgICogQHBhcmFtIG9wdHMgVGhlIEFQSSByZXF1ZXN0J3Mgb3B0aW9uc1xuICAgKiBAdGVtcGxhdGUgVCBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgYG9wdHNgIGFnYWluc3RcbiAgICogQHJldHVybnMgVGhlIG1lcmdlZCBBUEkgcmVxdWVzdCdzIG9wdGlvbnNcbiAgICovXG4gIG1lcmdlUGFyYW1zV2l0aFN0YW5kYXJkUGFyYW1zPFQ+KG9wdHM6IFQpOiBUICYgTmd4WXRkQXBpU3RhbmRhcmRQYXJhbXMge1xuICAgIGlmICh0aGlzLmRlZmF1bHRPcHRpb25zKSB7XG4gICAgICByZXR1cm4geyAuLi5vcHRzLCAuLi50aGlzLmRlZmF1bHRPcHRpb25zIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRzO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2VuZHMgYSBIVFRQIHJlcXVlc3QgdG8gdGhlIHNwZWNpZmllZCBgYXBpRW5kcG9pbnRgXG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50IHRvIHNlbmQgYSBIVFRQIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyB0byBhcHBlbmQgdG8gdGhlIGVuZHBvaW50IGFzIFVSTCBxdWVyaWVzXG4gICAqIEBwYXJhbSBib2R5IFRoZSBib2R5IG9mIHRoZSBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIGh0dHBUeXBlIFRoZSB0eXBlIG9mIEhUVFAgcmVxdWVzdCB0byBzZW5kXG4gICAqIEB0ZW1wbGF0ZSBCIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgYm9keSB0b1xuICAgKiBAdGVtcGxhdGUgUCBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIHBhcmFtZXRlcnMgdG9cbiAgICogQHRlbXBsYXRlIFIgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyByZXN1bHQgdG9cbiAgICogQHJldHVybnMgVGhlIHJlc3VsdCBvZiB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBzZW5kSHR0cFJlcXVlc3Q8QiBleHRlbmRzIGFueSwgUCBleHRlbmRzIGFueSwgUiBleHRlbmRzIGFueT4oXG4gICAgYXBpRW5kcG9pbnQ6IHN0cmluZyxcbiAgICBvcHRzOiBQLFxuICAgIGJvZHk6IEIgPSBudWxsLFxuICAgIGh0dHBUeXBlOiAnZGVsZXRlJyB8ICdnZXQnIHwgJ3Bvc3QnIHwgJ3B1dCdcbiAgKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIGlmICh0aGlzLmtleVZhbHVlRXhpc3RzQW5kTm9uTnVsbDxQPihvcHRzLCAnYWNjZXNzVG9rZW4nKSkge1xuICAgICAgaWYgKHRoaXMua2V5VmFsdWVFeGlzdHNBbmROb25OdWxsPFA+KG9wdHMsICdhY2Nlc3NUb2tlblVzZXNQYXJhbScpICYmIG9wdHNbJ2FjY2Vzc1Rva2VuVXNlc1BhcmFtJ10pIHtcbiAgICAgICAgLy8gVXNpbmcgcGFyYW1ldGVyXG4gICAgICAgIG9wdHNbJ2FjY2Vzc190b2tlbiddID0gb3B0c1snYWNjZXNzVG9rZW4nXTtcbiAgICAgICAgZGVsZXRlIG9wdHNbJ2FjY2Vzc1Rva2VuJ107XG4gICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gcGFzcyB0aGlzIHRvIHRoZSBhY3R1YWwgQVBJIGVuZHBvaW50XG4gICAgICAgIGRlbGV0ZSBvcHRzWydhY2Nlc3NUb2tlblVzZXNQYXJhbSddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXNpbmcgSFRUUCBoZWFkZXJzXG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7b3B0c1snYWNjZXNzVG9rZW4nXX1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoIChodHRwVHlwZSkge1xuICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBEZWxldGU8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGhlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cERlbGV0ZTxQLCBSPihhcGlFbmRwb2ludCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ2dldCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwR2V0PFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBoZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBHZXQ8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICBjYXNlICdwb3N0JzpcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSwgaGVhZGVycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwsIGhlYWRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSAncHV0JzpcbiAgICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBib2R5LCBoZWFkZXJzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsLCBoZWFkZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=