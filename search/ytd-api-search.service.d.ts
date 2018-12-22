import { Observable } from 'rxjs';
import { NgxYtdApiSearchListOpts, NgxYtdApiSearchListResult } from './ytd-api-search.interfaces';
import { SimpleHttpService } from 'ngx-simple-http';
export declare class NgxYtdApiSearchService {
    private http;
    constructor(http: SimpleHttpService);
    /**
     * The API URL for the Search API of the YouTube Data v3 API
     */
    readonly ngxYtdSearchApiUrl = "https://www.googleapis.com/youtube/v3/search";
    private _httpHandler;
    /**
     * Returns a collection of search results that match the query parameters specified
     *
     * See https://developers.google.com/youtube/v3/docs/search/list for more info
     * @param opts API parameters for the API
     * @return Results of the search has an `Observable`
     */
    list(opts: NgxYtdApiSearchListOpts): Observable<NgxYtdApiSearchListResult>;
}
