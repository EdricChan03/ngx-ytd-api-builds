import { Observable } from 'rxjs';
import { NgxYtdApiCommentListOpts, NgxYtdApiCommentListResult } from './ytd-api-comments.interface';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
export declare class NgxYtdApiCommentService {
    private core;
    constructor(core: NgxYtdApiCoreService);
    /**
     * Retrieves comments
     * @param opts Options for the API
     * @return Results of the search as a stream for subscribing to
     */
    list(opts: NgxYtdApiCommentListOpts): Observable<NgxYtdApiCommentListResult>;
}
