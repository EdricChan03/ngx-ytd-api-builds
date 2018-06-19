import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxYtdApiSearchOpts, NgxYtdApiSearchResult } from './ytd-api-search.interfaces';
export declare class NgxYtdApiSearchService {
    private http;
    /**
     * The YouTube base API URL
     */
    private ytdApiBaseUrl;
    constructor(http: HttpClient);
    /**
     * Searches using the YouTube HTTP Data API
     * @param query The query to search for. See the {@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param opts Options for searching
     * @returns Results of the search as a stream
     */
    search(query: string, opts: NgxYtdApiSearchOpts): Observable<NgxYtdApiSearchResult>;
}
