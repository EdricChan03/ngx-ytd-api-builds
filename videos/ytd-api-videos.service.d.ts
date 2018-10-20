import { NgxYtdApiVideosGetRatingOpts, NgxYtdApiVideosGetRatingResult, NgxYtdApiVideosListOpts, NgxYtdApiVideosListResult } from './ytd-api-videos.interface';
import { Observable } from 'rxjs';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
export declare class NgxYtdApiVideosService {
    private core;
    constructor(core: NgxYtdApiCoreService);
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param opts API parameters for the API
     */
    getRating(opts: NgxYtdApiVideosGetRatingOpts): Observable<NgxYtdApiVideosGetRatingResult>;
    /**
     * Returns a list of videos that match the requested API parameters
     * @param opts API parameters for the API
     */
    list(opts: NgxYtdApiVideosListOpts): Observable<NgxYtdApiVideosListResult>;
}
