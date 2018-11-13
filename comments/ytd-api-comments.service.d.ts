import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import { Observable } from 'rxjs';
import { NgxYtdApiCommentListOpts, NgxYtdApiCommentListResult } from './ytd-api-comments.interface';
export declare class NgxYtdApiCommentsService {
    private core;
    constructor(core: NgxYtdApiCoreService);
    /**
     * Retrieves comments
     * @param opts Options for the API
     * @return Results of the search as a stream for subscribing to
     */
    list(opts: NgxYtdApiCommentListOpts): Observable<NgxYtdApiCommentListResult>;
}
