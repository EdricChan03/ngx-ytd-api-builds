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
     * Generates the query parameters to be used with the API endpoint
     * @return A `HttpClient` instance
     */
    createHttpGet<R, P extends any>(apiEndpoint: string, apiParams: P): Observable<R>;
}
