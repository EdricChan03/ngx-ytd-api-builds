import { Observable } from 'rxjs';
import { SimpleHttpService } from 'ngx-simple-http';
import { NgxYtdApiStandardParams } from './ytd-api-common.interface';
export declare class NgxYtdApiCommonService {
    private http;
    private defaultOptions;
    constructor(http: SimpleHttpService, defaultOptions: NgxYtdApiStandardParams);
    /**
     * Checks for the following:
     * 1. The `key` exists in `obj`
     * 2. The key-value of `key` in `obj` is not `null`
     * @param obj The object to check
     * @param key The key to check for in `obj`
     * @template O The TypeScript interface to type `obj` against
     * @returns `true` if all conditions are met, `false` otherwise
     */
    private keyValueExistsAndNonNull;
    /**
     * Merges an API request's options with the default standard options as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @param opts The API request's options
     * @template T A TypeScript interface to type `opts` against
     * @returns The merged API request's options
     * @deprecated Use {@link NgxYtdApiCommonService#mergeParamsWithStandardParams}
     */
    mergeOpts<T extends any>(opts: T): T & NgxYtdApiStandardParams;
    /**
     * Merges an API request's parameters with the default standard parameters as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @param opts The API request's options
     * @template T A TypeScript interface to type `opts` against
     * @returns The merged API request's options
     */
    mergeParamsWithStandardParams<T extends any>(opts: T): T & NgxYtdApiStandardParams;
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
    sendHttpRequest<B extends any, P extends any, R extends any>(apiEndpoint: string, opts: P, body: B, httpType: 'delete' | 'get' | 'post' | 'put'): Observable<R>;
}
