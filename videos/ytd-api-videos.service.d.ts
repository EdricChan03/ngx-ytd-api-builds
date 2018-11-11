import { NgxYtdApiVideosDeleteOpts, NgxYtdApiVideosGetRatingOpts, NgxYtdApiVideosGetRatingResult, NgxYtdApiVideosInsertOpts, NgxYtdApiVideosListOpts, NgxYtdApiVideosListResult, NgxYtdApiVideosRateOpts, NgxYtdApiVideosReportAbuseBody, NgxYtdApiVideosReportAbuseOpts, NgxYtdApiVideosResource, NgxYtdApiVideosUpdateOpts } from './ytd-api-videos.interface';
import { Observable } from 'rxjs';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
export declare class NgxYtdApiVideosService {
    private core;
    constructor(core: NgxYtdApiCoreService);
    /**
     * Deletes a YouTube video
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    delete(opts: NgxYtdApiVideosDeleteOpts): Observable<any>;
    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    getRating(opts: NgxYtdApiVideosGetRatingOpts): Observable<NgxYtdApiVideosGetRatingResult>;
    /**
     * Uploads a video to YouTube and optionally sets the video's metadata
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    insert(body: NgxYtdApiVideosResource, opts: NgxYtdApiVideosInsertOpts): Observable<NgxYtdApiVideosResource>;
    /**
     * Returns a list of videos that match the requested API parameters
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    list(opts: NgxYtdApiVideosListOpts): Observable<NgxYtdApiVideosListResult>;
    /**
     * Add a like or dislike rating to a video or remove a rating from a video
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    rate(opts: NgxYtdApiVideosRateOpts): Observable<any>;
    /**
     * Reports a video for having abusive content
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    reportAbuse(body: NgxYtdApiVideosReportAbuseBody, opts?: NgxYtdApiVideosReportAbuseOpts): Observable<any>;
    /**
     * Updates a video's metadata
     * @param body The HTTP request body
     * @param opts API parameters for the API
     * @return An observable of the HTTP request
     */
    update(body: NgxYtdApiVideosResource, opts: NgxYtdApiVideosUpdateOpts): Observable<NgxYtdApiVideosResource>;
}
