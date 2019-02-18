import { Observable } from 'rxjs';
import { SimpleHttpService } from 'ngx-simple-http';
import { NgxYtdApiStandardOpts } from './ytd-api-common.interface';
export declare class NgxYtdApiCommonService {
    private http;
    private defaultOptions;
    constructor(http: SimpleHttpService, defaultOptions: NgxYtdApiStandardOpts);
    /**
     * Merges an API request's options with the default standard options as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @param opts The API request's options
     * @template T A TypeScript interface to type `opts` against
     * @returns The merged API request's options
     */
    mergeOpts<T extends any>(opts: T): T & NgxYtdApiStandardOpts;
    /**
     * Sends a HTTP request to the specified `apiEndpoint`
     * @param apiEndpoint The API endpoint to send a HTTP request to
     * @param opts Options to append to the endpoint as URL queries
     * @param body The body of the HTTP request
     * @param httpType The type of HTTP request to send
     * @template B A TypeScript interface to type the HTTP request's body to
     * @template P A TypeScript interface to type the HTTP request's options to
     * @template R A TypeScript interface to type the HTTP request's result to
     * @returns The result of the HTTP request
     */
    sendHttpRequest<B extends any, P extends any, R extends any>(apiEndpoint: string, opts: P, body: B, httpType: 'delete' | 'get' | 'post' | 'put'): Observable<R>;
}
