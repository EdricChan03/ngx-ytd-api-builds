import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxYtdApiVideoSearchOpts, NgxYtdApiSearchOpts, NgxYtdApiSearchResult } from './ytd-api-search.interfaces';
export declare class NgxYtdApiSearchService {
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
     * @returns Results of the search as a stream
    */
    searchVideos(query: string, opts: NgxYtdApiVideoSearchOpts): Observable<NgxYtdApiSearchResult>;
    /**
     * Searches using the YouTube HTTP Data API
     * @param query The query to search for
     * @param opts Options for searching
     * @returns Results of the search as a stream
     */
    search(query: string, opts: NgxYtdApiSearchOpts): Observable<NgxYtdApiSearchResult>;
}
