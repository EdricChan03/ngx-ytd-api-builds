import { NgxYtdApiVideosListOpts, NgxYtdApiVideosListResult } from './ytd-api-videos.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class NgxYtdApiVideoService {
    private http;
    readonly ytdApiVideoBaseApiUrl: string;
    constructor(http: HttpClient);
    /**
     * Returns a list of videos that match the requested API parameters
     * @param opts API parameters for the API
     */
    list(opts: NgxYtdApiVideosListOpts): Observable<NgxYtdApiVideosListResult>;
}
