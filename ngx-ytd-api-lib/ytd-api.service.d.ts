import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxYtdApiSearchResult, NgxYtdApiSearchOpts, NgxYtdApiVideoSearchOpts } from './search/ytd-api-search.interfaces';
export declare class NgxYtdApiService {
    private http;
    /**
     * The YouTube base API URL
     */
    private ytdApiBaseUrl;
    constructor(http: HttpClient);
    /**
     * Searches for videos using the YouTube HTTP Data API
     * @param query The query to search for
     * @param opts Options for YouTube Data API for Videos
     * @deprecated Use this method from the `search` submodule
     * @returns Results of the search as a stream
    */
    searchVideos(query: string, opts: NgxYtdApiVideoSearchOpts): Observable<NgxYtdApiSearchResult>;
    /**
     * Searches using the YouTube HTTP Data API
     * @param query The query to search for
     * @param opts
     * @deprecated Use this method from the `search` submodule
     * @returns Results of the search as a stream
     */
    search(query: string, opts: NgxYtdApiSearchOpts): Observable<NgxYtdApiSearchResult>;
}
