import { NgxYtdApiVideosGetRatingOpts, NgxYtdApiVideosListOpts, NgxYtdApiVideosListResult } from './ytd-api-videos.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class NgxYtdApiVideoService {
    private http;
    readonly ytdApiVideoBaseApiUrl: string;
    constructor(http: HttpClient);
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param opts API parameters for the API
     */
    getRating(opts: NgxYtdApiVideosGetRatingOpts): Observable<NgxYtdApiVideosListResult>;
    /**
     * Returns a list of videos that match the requested API parameters
     * @param opts API parameters for the API
     */
    list(opts: NgxYtdApiVideosListOpts): Observable<NgxYtdApiVideosListResult>;
}
