import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class NgxYtdApiCoreService {
    private http;
    constructor(http: HttpClient);
    /**
     * The API URL for the Comments API of the YouTube Data v3 API
     */
    readonly ngxYtdCommentsApiUrl = "https://www.googleapis.com/youtube/v3/comments";
    /**
     * The API URL for the Search API of the YouTube Data v3 API
     */
    readonly ngxYtdSearchApiUrl = "https://www.googleapis.com/youtube/v3/search";
    /**
     * The API URL for the Videos API of the YouTube Data v3 API
     */
    readonly ngxYtdVideosApiUrl = "https://www.googleapis.com/youtube/v3/videos";
    /**
     * Generates the query parameters to be used for a HTTP DELETE request
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to be appended to the API endpoint
     * @return A `HttpClient` instance
     */
    createHttpDelete<P extends any>(apiEndpoint: string, apiParams: P): Observable<any>;
    /**
     * Generates the query parameters to be used for a HTTP GET request
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to be appended to the API endpoint
     * @return A `HttpClient` instance
     */
    createHttpGet<R, P extends any>(apiEndpoint: string, apiParams: P): Observable<R>;
    /**
     * Generates the query parameters to be used with the API endpoint
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to be appended to the API endpoint
     * @param apiBody The request body
     * @return A `HttpClient` instance
     */
    createHttpPost<R, P extends any>(apiEndpoint: string, apiParams: P, apiBody: any): Observable<R>;
    /**
     * Generates the query parameters to be used with the API endpoint
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to be appended to the API endpoint
     * @param apiBody The request body
     * @return A `HttpClient` instance
     */
    createHttpPut<R, P extends any>(apiEndpoint: string, apiParams: P, apiBody: any): Observable<R>;
}
