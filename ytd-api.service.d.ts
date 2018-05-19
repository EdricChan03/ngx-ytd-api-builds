import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as ytdApiInterfaces from './ytd-api.interfaces';
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
     * @returns Results of the search as a stream
    */
    searchVideos(query: string, opts: ytdApiInterfaces.NgxYtdApiVideoSearchOpts): Observable<ytdApiInterfaces.NgxYtdApiSearchResult>;
    /**
     * Searches using the YouTube HTTP Data API
     * @param query The query to search for
     * @param opts
     * @returns Results of the search as a stream
     */
    search(query: string, opts: ytdApiInterfaces.NgxYtdApiSearchOpts): Observable<ytdApiInterfaces.NgxYtdApiSearchResult>;
}
