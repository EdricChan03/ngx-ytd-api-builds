import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxYtdApiCommentListOpts, NgxYtdApiCommentListResult } from './ytd-api-comments.interface';
export declare class NgxYtdApiCommentService {
    private http;
    /**
     * The YouTube base API URL
     */
    readonly ytdCommentBaseApiUrl: string;
    constructor(http: HttpClient);
    /**
     * Retrieves comments
     * @param opts Options for the API
     * @returns Results of the search as a stream for subscribing to
     */
    list(opts: NgxYtdApiCommentListOpts): Observable<NgxYtdApiCommentListResult>;
}
