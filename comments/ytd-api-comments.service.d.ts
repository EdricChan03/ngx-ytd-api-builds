import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import { Observable } from 'rxjs';
import { NgxYtdApiCommentsDeleteOpts, NgxYtdApiCommentsInsertOpts, NgxYtdApiCommentsListOpts, NgxYtdApiCommentsListResult, NgxYtdApiCommentsMarkAsSpamOpts, NgxYtdApiCommentsResource, NgxYtdApiCommentsSetModerationStatusOpts, NgxYtdApiCommentsUpdateOpts } from './ytd-api-comments.interface';
export declare class NgxYtdApiCommentsService {
    private core;
    constructor(core: NgxYtdApiCoreService);
    /**
     * Deletes a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
     * @param opts Options for the API
     * @return Results of the deletion as an `Observable`
     */
    delete(opts: NgxYtdApiCommentsDeleteOpts): Observable<any>;
    /**
     * Creates a reply to an existing comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
     * @param body The API body
     * @param opts Options for the API
     * @return Results of the creation as an `Observable`
     */
    insert(body: NgxYtdApiCommentsResource, opts: NgxYtdApiCommentsInsertOpts): Observable<any>;
    /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param opts Options for the API
     * @return Results of the search as an `Observable`
     */
    list(opts: NgxYtdApiCommentsListOpts): Observable<NgxYtdApiCommentsListResult>;
    /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param opts Options for the API
     * @return Results of the search as an `Observable`
     */
    markAsSpam(opts: NgxYtdApiCommentsMarkAsSpamOpts): Observable<any>;
    /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param opts Options for the API
     * @return Results of the search as an `Observable`
     */
    setModerationStatus(opts: NgxYtdApiCommentsSetModerationStatusOpts): Observable<any>;
    /**
     * Modifies a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/update for more info
     * @param body The API body
     * @param opts Options for the API
     * @return Results of the update as an `Observable`
     */
    update(body: NgxYtdApiCommentsResource, opts: NgxYtdApiCommentsUpdateOpts): Observable<NgxYtdApiCommentsResource>;
}
