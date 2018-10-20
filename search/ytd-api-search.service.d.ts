import { Observable } from 'rxjs';
import { NgxYtdApiSearchListOpts, NgxYtdApiSearchListResult } from './ytd-api-search.interfaces';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
export declare class NgxYtdApiSearchService {
    private core;
    constructor(core: NgxYtdApiCoreService);
    /**
     * Searches using the YouTube HTTP Data API
     * @param query The query to search for. See the {@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param opts Options for searching
     * @return Results of the search as a stream
     */
    list(opts: NgxYtdApiSearchListOpts): Observable<NgxYtdApiSearchListResult>;
}
