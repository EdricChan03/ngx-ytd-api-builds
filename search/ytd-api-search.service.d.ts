import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxYtdApiSearchListOpts, NgxYtdApiSearchListResult } from './ytd-api-search.interfaces';
export declare class NgxYtdApiSearchService {
    private http;
    /**
     * The YouTube base API URL
     */
    constructor(http: HttpClient);
    /**
     * The API URL of the YouTube Data v3 Search API
     */
    readonly ytdSearchBaseApiUrl: string;
    /**
     * Searches using the YouTube HTTP Data API
     * @param query The query to search for. See the {@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param opts Options for searching
     * @deprecated Use {@link NgxYtdApiSearchService#list} instead.
     * @deletion-target 1.0.0-alpha.5
     * @returns Results of the search as a stream
     */
    search(query: string, opts: NgxYtdApiSearchListOpts): Observable<NgxYtdApiSearchListResult>;
    /**
     * Searches using the YouTube HTTP Data API
     * @param query The query to search for. See the {@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param opts Options for searching
     * @returns Results of the search as a stream
     */
    list(query: string, opts: NgxYtdApiSearchListOpts): Observable<NgxYtdApiSearchListResult>;
}
