/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function NgxYtdApiCommentsResource() { }
if (false) {
    /**
     * The ID that YouTube uses to uniquely identify the comment.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#id for more info
     * @type {?|undefined}
     */
    NgxYtdApiCommentsResource.prototype.id;
    /**
     * The snippet object contains basic details about the comment.
     *
     * See https://developers.google.com/youtube/v3/docs/comments#snippet for more info
     * @type {?|undefined}
     */
    NgxYtdApiCommentsResource.prototype.snippet;
}
/**
 * @record
 */
export function NgxYtdApiCommentsDeleteOpts() { }
if (false) {
    /**
     * The OAuth 2.0 access token
     * Note: The `https://www.googleapis.com/auth/youtube.force-ssl` scope is required to delete a comment
     * @type {?}
     */
    NgxYtdApiCommentsDeleteOpts.prototype.accessToken;
    /**
     * Specifies the comment ID for the resource that is being deleted
     *
     * See https://developers.google.com/youtube/v3/docs/comments/delete#id for more info
     * @type {?}
     */
    NgxYtdApiCommentsDeleteOpts.prototype.id;
}
/**
 * @record
 */
export function NgxYtdApiCommentsInsertOpts() { }
if (false) {
    /**
     * The OAuth 2.0 access token
     * Note: The `https://www.googleapis.com/auth/youtube.force-ssl` scope is required to delete a comment
     * @type {?}
     */
    NgxYtdApiCommentsInsertOpts.prototype.accessToken;
    /**
     * Specifies the properties that the API will include
     *
     * See https://developers.google.com/youtube/v3/docs/comments/insert#part for more info
     * @type {?}
     */
    NgxYtdApiCommentsInsertOpts.prototype.part;
}
/**
 * @record
 */
export function NgxYtdApiCommentsListOpts() { }
if (false) {
    /**
     * Specifies a comma-separated list of comment IDs for the resources that are being retrieved.
     *
     * Note: This parameter is a filter, where only one filter should be specified
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list#id for more info
     * @type {?|undefined}
     */
    NgxYtdApiCommentsListOpts.prototype.id;
    /**
     * Specifies the ID of the comment for which replies should be retrieved.
     *
     * Note: This parameter is a filter, where only one filter should be specified
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list#parentId for more info
     * @type {?|undefined}
     */
    NgxYtdApiCommentsListOpts.prototype.parentId;
    /**
     * Specifies the maximum number of items that should be returned in the results.
     *
     * Note: This parameter is not supported for use in conjunction with the id parameter.
     * Acceptable values are 1 to 100, inclusive. The default value is 20.
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list#maxResults for more info
     * @type {?|undefined}
     */
    NgxYtdApiCommentsListOpts.prototype.maxResults;
    /**
     * Identifies a specific page in the result set that should be returned.
     *
     * Note: This parameter is not supported for use in conjunction with the id parameter.
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list#pageToken for more info
     * @type {?|undefined}
     */
    NgxYtdApiCommentsListOpts.prototype.pageToken;
    /**
     * Indicates whether the API should return comments formatted as HTML or as plain text.
     *
     * Acceptable values are:
     * - html – Returns the comments in HTML format. This is the default value.
     * - plainText – Returns the comments in plain text format.
     * See https://developers.google.com/youtube/v3/docs/comments/list#textFormat for more info
     * @type {?|undefined}
     */
    NgxYtdApiCommentsListOpts.prototype.textFormat;
}
/**
 * @deprecated Use {\@link NgxYtdApiCommentListResource}
 * @record
 */
export function NgxYtdApiCommentsListResultItem() { }
/**
 * @record
 */
export function NgxYtdApiCommentsListResult() { }
if (false) {
    /**
     * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list#nextPageToken
     * @type {?|undefined}
     */
    NgxYtdApiCommentsListResult.prototype.nextPageToken;
    /**
     * The `pageInfo` object encapsulates paging information for the result set.
     * @type {?|undefined}
     */
    NgxYtdApiCommentsListResult.prototype.pageInfo;
    /**
     * A list of comments that match the request criteria.
     * @type {?|undefined}
     */
    NgxYtdApiCommentsListResult.prototype.items;
}
/**
 * @record
 */
export function NgxYtdApiCommentsMarkAsSpamOpts() { }
if (false) {
    /**
     * The OAuth 2.0 access token
     * Note: The `https://www.googleapis.com/auth/youtube.force-ssl` scope is required to mark a comment as spam
     * @type {?}
     */
    NgxYtdApiCommentsMarkAsSpamOpts.prototype.accessToken;
    /**
     * Specifies a comma-separated list of IDs of comments that (according to the caller) should be classified as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam#id for more info
     * @type {?}
     */
    NgxYtdApiCommentsMarkAsSpamOpts.prototype.id;
}
/**
 * @record
 */
export function NgxYtdApiCommentsSetModerationStatusOpts() { }
if (false) {
    /**
     * The OAuth 2.0 access token
     * Note: The `https://www.googleapis.com/auth/youtube.force-ssl` scope is required to set the moderation status
     * @type {?}
     */
    NgxYtdApiCommentsSetModerationStatusOpts.prototype.accessToken;
    /**
     * Specifies a comma-separated list of IDs that identify the comments to update their moderation status
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus#id for more info
     * @type {?}
     */
    NgxYtdApiCommentsSetModerationStatusOpts.prototype.id;
    /**
     * Specifies the new moderation status of the specified comments
     *
     * Acceptable values:
     * - `heldForReview`: Marks a comment as awaiting review by a moderator
     * - `published`: Marks a comment as public
     * - `rejected`: Rejects a comment (Note: Also hides all replies to the rejected comment)
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus#moderationStatus for more info
     * @type {?}
     */
    NgxYtdApiCommentsSetModerationStatusOpts.prototype.moderationStatus;
    /**
     * Whether to indicate that you want to automatically reject any additional comments written by the comment's author
     *
     * Note: This parameter is only valid if the `moderationStatus` is also set to `rejected`
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus#banAuthor for more info
     * @type {?|undefined}
     */
    NgxYtdApiCommentsSetModerationStatusOpts.prototype.banAuthor;
}
/**
 * @record
 */
export function NgxYtdApiCommentsUpdateOpts() { }
if (false) {
    /**
     * The OAuth 2.0 access token
     * Note: The `https://www.googleapis.com/auth/youtube.force-ssl` scope is required to set the moderation status
     * @type {?}
     */
    NgxYtdApiCommentsUpdateOpts.prototype.accessToken;
    /**
     * Identifies the properties that the API response will include
     *
     * See https://developers.google.com/youtube/v3/docs/comments/update#part for more info
     * @type {?}
     */
    NgxYtdApiCommentsUpdateOpts.prototype.part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteXRkLWFwaS8iLCJzb3VyY2VzIjpbImNvbW1lbnRzL3l0ZC1hcGktY29tbWVudHMuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSwrQ0ErSEM7Ozs7Ozs7O0lBekhDLHVDQUFZOzs7Ozs7O0lBTVosNENBa0hFOzs7OztBQUdKLGlEQVlDOzs7Ozs7O0lBUEMsa0RBQW9COzs7Ozs7O0lBTXBCLHlDQUFXOzs7OztBQUdiLGlEQVlDOzs7Ozs7O0lBUEMsa0RBQW9COzs7Ozs7O0lBTXBCLDJDQUFhOzs7OztBQUVmLCtDQTJDQzs7Ozs7Ozs7OztJQW5DQyx1Q0FBWTs7Ozs7Ozs7O0lBUVosNkNBQWtCOzs7Ozs7Ozs7O0lBU2xCLCtDQUFvQjs7Ozs7Ozs7O0lBUXBCLDhDQUFtQjs7Ozs7Ozs7OztJQVNuQiwrQ0FBa0M7Ozs7OztBQVFwQyxxREFBc0Y7Ozs7QUFFdEYsaURBd0JDOzs7Ozs7OztJQWxCQyxvREFBdUI7Ozs7O0lBSXZCLCtDQVNFOzs7OztJQUlGLDRDQUFvQzs7Ozs7QUFHdEMscURBWUM7Ozs7Ozs7SUFQQyxzREFBb0I7Ozs7Ozs7SUFNcEIsNkNBQVc7Ozs7O0FBR2IsOERBK0JDOzs7Ozs7O0lBMUJDLCtEQUFvQjs7Ozs7OztJQU1wQixzREFBVzs7Ozs7Ozs7Ozs7O0lBV1gsb0VBQTZEOzs7Ozs7Ozs7SUFRN0QsNkRBQW9COzs7OztBQUd0QixpREFZQzs7Ozs7OztJQVBDLGtEQUFvQjs7Ozs7OztJQU1wQiwyQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFl0ZEFwaUdlbmVyaWNPcHRzLCBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2UsIE5neFl0ZEFwaVN0YW5kYXJkT3B0cyB9IGZyb20gJ25neC15dGQtYXBpL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2Uge1xuICAvKipcbiAgICogVGhlIElEIHRoYXQgWW91VHViZSB1c2VzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoZSBjb21tZW50LlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI2lkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHNuaXBwZXQgb2JqZWN0IGNvbnRhaW5zIGJhc2ljIGRldGFpbHMgYWJvdXQgdGhlIGNvbW1lbnQuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMjc25pcHBldCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBzbmlwcGV0Pzoge1xuICAgIC8qKlxuICAgICAqIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHVzZXIgd2hvIHBvc3RlZCB0aGUgY29tbWVudC5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMjc25pcHBldC5hdXRob3JEaXNwbGF5TmFtZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgYXV0aG9yRGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIFVSTCBmb3IgdGhlIGF2YXRhciBvZiB0aGUgdXNlciB3aG8gcG9zdGVkIHRoZSBjb21tZW50LlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cyNzbmlwcGV0LmF1dGhvclByb2ZpbGVJbWFnZVVybCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgYXV0aG9yUHJvZmlsZUltYWdlVXJsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgb2YgdGhlIGNvbW1lbnQgYXV0aG9yJ3MgWW91VHViZSBjaGFubmVsLCBpZiBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3NuaXBwZXQuYXV0aG9yQ2hhbm5lbFVybCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgYXV0aG9yQ2hhbm5lbFVybD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGlzIG9iamVjdCBlbmNhcHN1bGF0ZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbW1lbnQgYXV0aG9yJ3MgWW91VHViZSBjaGFubmVsLCBpZiBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3NuaXBwZXQuYXV0aG9yQ2hhbm5lbElkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBhdXRob3JDaGFubmVsSWQ/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBJRCBvZiB0aGUgY29tbWVudCBhdXRob3IncyBZb3VUdWJlIGNoYW5uZWwsIGlmIGF2YWlsYWJsZS5cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3NuaXBwZXQuYXV0aG9yQ2hhbm5lbElkLnZhbHVlIGZvciBtb3JlIGluZm9cbiAgICAgICAqL1xuICAgICAgdmFsdWU/OiBzdHJpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGUgWW91VHViZSBjaGFubmVsIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29tbWVudC5cbiAgICAgKiAtIElmIHRoZSBjb21tZW50IGlzIGEgdmlkZW8gY29tbWVudCwgdGhlbiB0aGlzIHByb3BlcnR5IGlkZW50aWZpZXMgdGhlIHZpZGVvJ3MgY2hhbm5lbCxcbiAgICAgKiBhbmQgdGhlIHNuaXBwZXQudmlkZW9JZCBwcm9wZXJ0eSBpZGVudGlmaWVzIHRoZSB2aWRlby5cbiAgICAgKiAtIElmIHRoZSBjb21tZW50IGlzIGEgY2hhbm5lbCBjb21tZW50LCB0aGVuIHRoaXMgcHJvcGVydHkgaWRlbnRpZmllcyB0aGUgY2hhbm5lbCB0aGF0IHRoZSBjb21tZW50IGlzIGFib3V0LlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cyNzbmlwcGV0LmNoYW5uZWxJZCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY2hhbm5lbElkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGUgdmlkZW8gdGhhdCB0aGUgY29tbWVudCByZWZlcnMgdG8uIFRoaXMgcHJvcGVydHkgaXMgb25seSBwcmVzZW50IGlmIHRoZSBjb21tZW50IHdhcyBtYWRlIG9uIGEgdmlkZW8uXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3NuaXBwZXQudmlkZW9JZCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdmlkZW9JZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgY29tbWVudCdzIHRleHQuIFRoZSB0ZXh0IGNhbiBiZSByZXRyaWV2ZWQgaW4gZWl0aGVyIHBsYWluIHRleHQgb3IgSFRNTC5cbiAgICAgKlxuICAgICAqIChUaGUgYGNvbW1lbnRzLmxpc3RgIGFuZCBgY29tbWVudFRocmVhZHMubGlzdGAgbWV0aG9kc1xuICAgICAqIGJvdGggc3VwcG9ydCBhIGB0ZXh0Rm9ybWF0YCBwYXJhbWV0ZXIsIHdoaWNoIHNwZWNpZmllcyB0aGUgZGVzaXJlZCB0ZXh0IGZvcm1hdC4pXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgZXZlbiB0aGUgcGxhaW4gdGV4dCBtYXkgZGlmZmVyIGZyb20gdGhlIG9yaWdpbmFsIGNvbW1lbnQgdGV4dC4gRm9yIGV4YW1wbGUsIGl0IG1heSByZXBsYWNlIHZpZGVvIGxpbmtzIHdpdGggdmlkZW8gdGl0bGVzLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cyNzbmlwcGV0LnRleHREaXNwbGF5IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0ZXh0RGlzcGxheT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZ2luYWwsIHJhdyB0ZXh0IG9mIHRoZSBjb21tZW50IGFzIGl0IHdhcyBpbml0aWFsbHkgcG9zdGVkIG9yIGxhc3QgdXBkYXRlZC5cbiAgICAgKiBUaGUgb3JpZ2luYWwgdGV4dCBpcyBvbmx5IHJldHVybmVkIGlmIGl0IGlzIGFjY2Vzc2libGUgdG8gdGhlIGF1dGhlbnRpY2F0ZWQgdXNlcixcbiAgICAgKiB3aGljaCBpcyBvbmx5IGd1YXJhbnRlZWQgaWYgdGhlIHVzZXIgaXMgdGhlIGNvbW1lbnQncyBhdXRob3IuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3NuaXBwZXQudGV4dE9yaWdpbmFsIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0ZXh0T3JpZ2luYWw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHVuaXF1ZSBJRCBvZiB0aGUgcGFyZW50IGNvbW1lbnQuIFRoaXMgcHJvcGVydHkgaXMgb25seSBzZXQgaWYgdGhlIGNvbW1lbnQgd2FzIHN1Ym1pdHRlZCBhcyBhIHJlcGx5IHRvIGFub3RoZXIgY29tbWVudC5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMjc25pcHBldC5wYXJlbnRJZCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcGFyZW50SWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhpcyBzZXR0aW5nIGluZGljYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IHZpZXdlciBjYW4gcmF0ZSB0aGUgY29tbWVudC5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMjc25pcHBldC5jYW5SYXRlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjYW5SYXRlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgcmF0aW5nIHRoZSB2aWV3ZXIgaGFzIGdpdmVuIHRvIHRoaXMgY29tbWVudC5cbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBwcm9wZXJ0eSBkb2VzIG5vdCBjdXJyZW50bHkgaWRlbnRpZnkgZGlzbGlrZSByYXRpbmdzLCB0aG91Z2ggdGhpcyBiZWhhdmlvciBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cbiAgICAgKiBJbiB0aGUgbWVhbnRpbWUsIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBsaWtlIGlmIHRoZSB2aWV3ZXIgaGFzIHJhdGVkIHRoZSBjb21tZW50IHBvc2l0aXZlbHkuXG4gICAgICogVGhlIHZhbHVlIGlzIG5vbmUgaW4gYWxsIG90aGVyIGNhc2VzLCBpbmNsdWRpbmcgdGhlIHVzZXIgaGF2aW5nIGdpdmVuIHRoZSBjb21tZW50IGEgbmVnYXRpdmUgcmF0aW5nIG9yIG5vdCBoYXZpbmcgcmF0ZWQgdGhlIGNvbW1lbnQuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3NuaXBwZXQudmlld2VyUmF0aW5nIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB2aWV3ZXJSYXRpbmc/OiAnbGlrZScgfCAnbm9uZSc7XG4gICAgLyoqXG4gICAgICogVGhlIHRvdGFsIG51bWJlciBvZiBsaWtlcyAocG9zaXRpdmUgcmF0aW5ncykgdGhlIGNvbW1lbnQgaGFzIHJlY2VpdmVkLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cyNzbmlwcGV0Lmxpa2VDb3VudCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbGlrZUNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBjb21tZW50J3MgbW9kZXJhdGlvbiBzdGF0dXMuXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IHJldHVybmVkIGlmIHRoZSBBUEkgcmVxdWVzdCB3YXMgYXV0aG9yaXplZCBieSB0aGUgb3duZXIgb2YgdGhlIGNoYW5uZWxcbiAgICAgKiBvciB0aGUgdmlkZW8gb24gd2hpY2ggdGhlIHJlcXVlc3RlZCBjb21tZW50cyB3ZXJlIG1hZGUuXG4gICAgICogSW4gYWRkaXRpb24sIG5vdGUgdGhhdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBzZXQgaWYgdGhlIEFQSSByZXF1ZXN0IHVzZWQgdGhlIGlkIGZpbHRlciBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3NuaXBwZXQubW9kZXJhdGlvblN0YXR1cyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbW9kZXJhdGlvblN0YXR1cz86ICdoZWxkRm9yUmV2aWV3JyB8ICdsaWtlbHlTcGFtJyB8ICdwdWJsaXNoZWQnIHwgJ3JlamVjdGVkJztcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBjb21tZW50IHdhcyBvcmlnbmFsbHkgcHVibGlzaGVkLiBUaGUgdmFsdWUgaXMgc3BlY2lmaWVkIGluIElTTyA4NjAxIChZWVlZLU1NLUREVGhoOm1tOnNzLnNaKSBmb3JtYXQuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3NuaXBwZXQucHVibGlzaGVkQXQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHB1Ymxpc2hlZEF0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIGNvbW1lbnQgd2FzIGxhc3QgdXBkYXRlZC4gVGhlIHZhbHVlIGlzIHNwZWNpZmllZCBpbiBJU08gODYwMSAoWVlZWS1NTS1ERFRoaDptbTpzcy5zWikgZm9ybWF0LlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cyNzbmlwcGV0LnVwZGF0ZWRBdCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdXBkYXRlZEF0Pzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRzRGVsZXRlT3B0cyBleHRlbmRzIE5neFl0ZEFwaVN0YW5kYXJkT3B0cyB7XG4gIC8qKlxuICAgKiBUaGUgT0F1dGggMi4wIGFjY2VzcyB0b2tlblxuICAgKiBOb3RlOiBUaGUgYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgveW91dHViZS5mb3JjZS1zc2xgIHNjb3BlIGlzIHJlcXVpcmVkIHRvIGRlbGV0ZSBhIGNvbW1lbnRcbiAgICovXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIGNvbW1lbnQgSUQgZm9yIHRoZSByZXNvdXJjZSB0aGF0IGlzIGJlaW5nIGRlbGV0ZWRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9kZWxldGUjaWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlDb21tZW50c0luc2VydE9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlTdGFuZGFyZE9wdHMge1xuICAvKipcbiAgICogVGhlIE9BdXRoIDIuMCBhY2Nlc3MgdG9rZW5cbiAgICogTm90ZTogVGhlIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3lvdXR1YmUuZm9yY2Utc3NsYCBzY29wZSBpcyByZXF1aXJlZCB0byBkZWxldGUgYSBjb21tZW50XG4gICAqL1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBwcm9wZXJ0aWVzIHRoYXQgdGhlIEFQSSB3aWxsIGluY2x1ZGVcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9pbnNlcnQjcGFydCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwYXJ0OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRzTGlzdE9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljT3B0cyB7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBjb21tZW50IElEcyBmb3IgdGhlIHJlc291cmNlcyB0aGF0IGFyZSBiZWluZyByZXRyaWV2ZWQuXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGEgZmlsdGVyLCB3aGVyZSBvbmx5IG9uZSBmaWx0ZXIgc2hvdWxkIGJlIHNwZWNpZmllZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2xpc3QjaWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIElEIG9mIHRoZSBjb21tZW50IGZvciB3aGljaCByZXBsaWVzIHNob3VsZCBiZSByZXRyaWV2ZWQuXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGEgZmlsdGVyLCB3aGVyZSBvbmx5IG9uZSBmaWx0ZXIgc2hvdWxkIGJlIHNwZWNpZmllZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2xpc3QjcGFyZW50SWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcGFyZW50SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIHJldHVybmVkIGluIHRoZSByZXN1bHRzLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBub3Qgc3VwcG9ydGVkIGZvciB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgaWQgcGFyYW1ldGVyLlxuICAgKiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgMSB0byAxMDAsIGluY2x1c2l2ZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjAuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvbGlzdCNtYXhSZXN1bHRzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG1heFJlc3VsdHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBJZGVudGlmaWVzIGEgc3BlY2lmaWMgcGFnZSBpbiB0aGUgcmVzdWx0IHNldCB0aGF0IHNob3VsZCBiZSByZXR1cm5lZC5cbiAgICpcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgbm90IHN1cHBvcnRlZCBmb3IgdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGlkIHBhcmFtZXRlci5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9saXN0I3BhZ2VUb2tlbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgQVBJIHNob3VsZCByZXR1cm4gY29tbWVudHMgZm9ybWF0dGVkIGFzIEhUTUwgb3IgYXMgcGxhaW4gdGV4dC5cbiAgICpcbiAgICogQWNjZXB0YWJsZSB2YWx1ZXMgYXJlOlxuICAgKiAtIGh0bWwg4oCTIFJldHVybnMgdGhlIGNvbW1lbnRzIGluIEhUTUwgZm9ybWF0LiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgKiAtIHBsYWluVGV4dCDigJMgUmV0dXJucyB0aGUgY29tbWVudHMgaW4gcGxhaW4gdGV4dCBmb3JtYXQuXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvbGlzdCN0ZXh0Rm9ybWF0IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHRleHRGb3JtYXQ/OiAnaHRtbCcgfCAncGxhaW5UZXh0Jztcbn1cblxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpQ29tbWVudExpc3RSZXNvdXJjZX1cbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlDb21tZW50c0xpc3RSZXN1bHRJdGVtIGV4dGVuZHMgTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlDb21tZW50c0xpc3RSZXN1bHQgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2Uge1xuICAvKipcbiAgICogVGhlIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIG9mIHRoZSBgcGFnZVRva2VuYCBwYXJhbWV0ZXIgdG8gcmV0cmlldmUgdGhlIG5leHQgcGFnZSBpbiB0aGUgcmVzdWx0IHNldC5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9saXN0I25leHRQYWdlVG9rZW5cbiAgICovXG4gIG5leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgYHBhZ2VJbmZvYCBvYmplY3QgZW5jYXBzdWxhdGVzIHBhZ2luZyBpbmZvcm1hdGlvbiBmb3IgdGhlIHJlc3VsdCBzZXQuXG4gICAqL1xuICBwYWdlSW5mbz86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdG90YWwgbnVtYmVyIG9mIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBzZXQuXG4gICAgICovXG4gICAgdG90YWxSZXN1bHRzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgcmVzdWx0cyBpbmNsdWRlZCBpbiB0aGUgQVBJIHJlc3BvbnNlLlxuICAgICAqL1xuICAgIHJlc3VsdHNQZXJQYWdlPzogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICogQSBsaXN0IG9mIGNvbW1lbnRzIHRoYXQgbWF0Y2ggdGhlIHJlcXVlc3QgY3JpdGVyaWEuXG4gICAqL1xuICBpdGVtcz86IE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2VbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlDb21tZW50c01hcmtBc1NwYW1PcHRzIGV4dGVuZHMgTmd4WXRkQXBpU3RhbmRhcmRPcHRzIHtcbiAgLyoqXG4gICAqIFRoZSBPQXV0aCAyLjAgYWNjZXNzIHRva2VuXG4gICAqIE5vdGU6IFRoZSBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC95b3V0dWJlLmZvcmNlLXNzbGAgc2NvcGUgaXMgcmVxdWlyZWQgdG8gbWFyayBhIGNvbW1lbnQgYXMgc3BhbVxuICAgKi9cbiAgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIElEcyBvZiBjb21tZW50cyB0aGF0IChhY2NvcmRpbmcgdG8gdGhlIGNhbGxlcikgc2hvdWxkIGJlIGNsYXNzaWZpZWQgYXMgc3BhbVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL21hcmtBc1NwYW0jaWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlDb21tZW50c1NldE1vZGVyYXRpb25TdGF0dXNPcHRzIGV4dGVuZHMgTmd4WXRkQXBpU3RhbmRhcmRPcHRzIHtcbiAgLyoqXG4gICAqIFRoZSBPQXV0aCAyLjAgYWNjZXNzIHRva2VuXG4gICAqIE5vdGU6IFRoZSBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC95b3V0dWJlLmZvcmNlLXNzbGAgc2NvcGUgaXMgcmVxdWlyZWQgdG8gc2V0IHRoZSBtb2RlcmF0aW9uIHN0YXR1c1xuICAgKi9cbiAgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIElEcyB0aGF0IGlkZW50aWZ5IHRoZSBjb21tZW50cyB0byB1cGRhdGUgdGhlaXIgbW9kZXJhdGlvbiBzdGF0dXNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9zZXRNb2RlcmF0aW9uU3RhdHVzI2lkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG5ldyBtb2RlcmF0aW9uIHN0YXR1cyBvZiB0aGUgc3BlY2lmaWVkIGNvbW1lbnRzXG4gICAqXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzOlxuICAgKiAtIGBoZWxkRm9yUmV2aWV3YDogTWFya3MgYSBjb21tZW50IGFzIGF3YWl0aW5nIHJldmlldyBieSBhIG1vZGVyYXRvclxuICAgKiAtIGBwdWJsaXNoZWRgOiBNYXJrcyBhIGNvbW1lbnQgYXMgcHVibGljXG4gICAqIC0gYHJlamVjdGVkYDogUmVqZWN0cyBhIGNvbW1lbnQgKE5vdGU6IEFsc28gaGlkZXMgYWxsIHJlcGxpZXMgdG8gdGhlIHJlamVjdGVkIGNvbW1lbnQpXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvc2V0TW9kZXJhdGlvblN0YXR1cyNtb2RlcmF0aW9uU3RhdHVzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG1vZGVyYXRpb25TdGF0dXM6ICdoZWxkRm9yUmV2aWV3JyB8ICdwdWJsaXNoZWQnIHwgJ3JlamVjdGVkJztcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gaW5kaWNhdGUgdGhhdCB5b3Ugd2FudCB0byBhdXRvbWF0aWNhbGx5IHJlamVjdCBhbnkgYWRkaXRpb25hbCBjb21tZW50cyB3cml0dGVuIGJ5IHRoZSBjb21tZW50J3MgYXV0aG9yXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIG9ubHkgdmFsaWQgaWYgdGhlIGBtb2RlcmF0aW9uU3RhdHVzYCBpcyBhbHNvIHNldCB0byBgcmVqZWN0ZWRgXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvc2V0TW9kZXJhdGlvblN0YXR1cyNiYW5BdXRob3IgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgYmFuQXV0aG9yPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlDb21tZW50c1VwZGF0ZU9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlTdGFuZGFyZE9wdHMge1xuICAvKipcbiAgICogVGhlIE9BdXRoIDIuMCBhY2Nlc3MgdG9rZW5cbiAgICogTm90ZTogVGhlIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3lvdXR1YmUuZm9yY2Utc3NsYCBzY29wZSBpcyByZXF1aXJlZCB0byBzZXQgdGhlIG1vZGVyYXRpb24gc3RhdHVzXG4gICAqL1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICAvKipcbiAgICogSWRlbnRpZmllcyB0aGUgcHJvcGVydGllcyB0aGF0IHRoZSBBUEkgcmVzcG9uc2Ugd2lsbCBpbmNsdWRlXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvdXBkYXRlI3BhcnQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcGFydDogc3RyaW5nO1xufVxuIl19