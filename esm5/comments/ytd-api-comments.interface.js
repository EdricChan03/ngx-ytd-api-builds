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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteXRkLWFwaS8iLCJzb3VyY2VzIjpbImNvbW1lbnRzL3l0ZC1hcGktY29tbWVudHMuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSwrQ0ErSEM7Ozs7Ozs7O0lBekhDLHVDQUFZOzs7Ozs7O0lBTVosNENBa0hFOzs7OztBQUdKLGlEQVlDOzs7Ozs7O0lBUEMsa0RBQW9COzs7Ozs7O0lBTXBCLHlDQUFXOzs7OztBQUdiLGlEQVlDOzs7Ozs7O0lBUEMsa0RBQW9COzs7Ozs7O0lBTXBCLDJDQUFhOzs7OztBQUVmLCtDQTJDQzs7Ozs7Ozs7OztJQW5DQyx1Q0FBWTs7Ozs7Ozs7O0lBUVosNkNBQWtCOzs7Ozs7Ozs7O0lBU2xCLCtDQUFvQjs7Ozs7Ozs7O0lBUXBCLDhDQUFtQjs7Ozs7Ozs7OztJQVNuQiwrQ0FBa0M7Ozs7OztBQVFwQyxxREFBc0Y7Ozs7QUFFdEYsaURBd0JDOzs7Ozs7OztJQWxCQyxvREFBdUI7Ozs7O0lBSXZCLCtDQVNFOzs7OztJQUlGLDRDQUFvQzs7Ozs7QUFHdEMscURBWUM7Ozs7Ozs7SUFQQyxzREFBb0I7Ozs7Ozs7SUFNcEIsNkNBQVc7Ozs7O0FBR2IsOERBK0JDOzs7Ozs7O0lBMUJDLCtEQUFvQjs7Ozs7OztJQU1wQixzREFBVzs7Ozs7Ozs7Ozs7O0lBV1gsb0VBQTZEOzs7Ozs7Ozs7SUFRN0QsNkRBQW9COzs7OztBQUd0QixpREFZQzs7Ozs7OztJQVBDLGtEQUFvQjs7Ozs7OztJQU1wQiwyQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFl0ZEFwaUdlbmVyaWNPcHRzLCBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2UsIE5neFl0ZEFwaVN0YW5kYXJkT3B0cyB9IGZyb20gJ25neC15dGQtYXBpL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2Uge1xuICAvKipcbiAgICogVGhlIElEIHRoYXQgWW91VHViZSB1c2VzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoZSBjb21tZW50LlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI2lkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHNuaXBwZXQgb2JqZWN0IGNvbnRhaW5zIGJhc2ljIGRldGFpbHMgYWJvdXQgdGhlIGNvbW1lbnQuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMjc25pcHBldCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBzbmlwcGV0Pzoge1xuICAgIC8qKlxuICAgICAqIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHVzZXIgd2hvIHBvc3RlZCB0aGUgY29tbWVudC5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMjc25pcHBldC5hdXRob3JEaXNwbGF5TmFtZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgYXV0aG9yRGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIFVSTCBmb3IgdGhlIGF2YXRhciBvZiB0aGUgdXNlciB3aG8gcG9zdGVkIHRoZSBjb21tZW50LlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cyNzbmlwcGV0LmF1dGhvclByb2ZpbGVJbWFnZVVybCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgYXV0aG9yUHJvZmlsZUltYWdlVXJsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgb2YgdGhlIGNvbW1lbnQgYXV0aG9yJ3MgWW91VHViZSBjaGFubmVsLCBpZiBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3NuaXBwZXQuYXV0aG9yQ2hhbm5lbFVybCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgYXV0aG9yQ2hhbm5lbFVybD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGlzIG9iamVjdCBlbmNhcHN1bGF0ZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbW1lbnQgYXV0aG9yJ3MgWW91VHViZSBjaGFubmVsLCBpZiBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3NuaXBwZXQuYXV0aG9yQ2hhbm5lbElkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBhdXRob3JDaGFubmVsSWQ/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBJRCBvZiB0aGUgY29tbWVudCBhdXRob3IncyBZb3VUdWJlIGNoYW5uZWwsIGlmIGF2YWlsYWJsZS5cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3NuaXBwZXQuYXV0aG9yQ2hhbm5lbElkLnZhbHVlIGZvciBtb3JlIGluZm9cbiAgICAgICAqL1xuICAgICAgdmFsdWU/OiBzdHJpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGUgWW91VHViZSBjaGFubmVsIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29tbWVudC5cbiAgICAgKiAtIElmIHRoZSBjb21tZW50IGlzIGEgdmlkZW8gY29tbWVudCwgdGhlbiB0aGlzIHByb3BlcnR5IGlkZW50aWZpZXMgdGhlIHZpZGVvJ3MgY2hhbm5lbCxcbiAgICAgKiBhbmQgdGhlIHNuaXBwZXQudmlkZW9JZCBwcm9wZXJ0eSBpZGVudGlmaWVzIHRoZSB2aWRlby5cbiAgICAgKiAtIElmIHRoZSBjb21tZW50IGlzIGEgY2hhbm5lbCBjb21tZW50LCB0aGVuIHRoaXMgcHJvcGVydHkgaWRlbnRpZmllcyB0aGUgY2hhbm5lbCB0aGF0IHRoZSBjb21tZW50IGlzIGFib3V0LlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cyNjaGFubmVsSWQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNoYW5uZWxJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgb2YgdGhlIHZpZGVvIHRoYXQgdGhlIGNvbW1lbnQgcmVmZXJzIHRvLiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgcHJlc2VudCBpZiB0aGUgY29tbWVudCB3YXMgbWFkZSBvbiBhIHZpZGVvLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cyN2aWRlb0lkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB2aWRlb0lkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBjb21tZW50J3MgdGV4dC4gVGhlIHRleHQgY2FuIGJlIHJldHJpZXZlZCBpbiBlaXRoZXIgcGxhaW4gdGV4dCBvciBIVE1MLlxuICAgICAqXG4gICAgICogKFRoZSBgY29tbWVudHMubGlzdGAgYW5kIGBjb21tZW50VGhyZWFkcy5saXN0YCBtZXRob2RzXG4gICAgICogYm90aCBzdXBwb3J0IGEgYHRleHRGb3JtYXRgIHBhcmFtZXRlciwgd2hpY2ggc3BlY2lmaWVzIHRoZSBkZXNpcmVkIHRleHQgZm9ybWF0LilcbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCBldmVuIHRoZSBwbGFpbiB0ZXh0IG1heSBkaWZmZXIgZnJvbSB0aGUgb3JpZ2luYWwgY29tbWVudCB0ZXh0LiBGb3IgZXhhbXBsZSwgaXQgbWF5IHJlcGxhY2UgdmlkZW8gbGlua3Mgd2l0aCB2aWRlbyB0aXRsZXMuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3RleHREaXNwbGF5IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0ZXh0RGlzcGxheT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZ2luYWwsIHJhdyB0ZXh0IG9mIHRoZSBjb21tZW50IGFzIGl0IHdhcyBpbml0aWFsbHkgcG9zdGVkIG9yIGxhc3QgdXBkYXRlZC5cbiAgICAgKiBUaGUgb3JpZ2luYWwgdGV4dCBpcyBvbmx5IHJldHVybmVkIGlmIGl0IGlzIGFjY2Vzc2libGUgdG8gdGhlIGF1dGhlbnRpY2F0ZWQgdXNlcixcbiAgICAgKiB3aGljaCBpcyBvbmx5IGd1YXJhbnRlZWQgaWYgdGhlIHVzZXIgaXMgdGhlIGNvbW1lbnQncyBhdXRob3IuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3RleHRPcmlnaW5hbCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdGV4dE9yaWdpbmFsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB1bmlxdWUgSUQgb2YgdGhlIHBhcmVudCBjb21tZW50LiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgc2V0IGlmIHRoZSBjb21tZW50IHdhcyBzdWJtaXR0ZWQgYXMgYSByZXBseSB0byBhbm90aGVyIGNvbW1lbnQuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3BhcmVudElkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwYXJlbnRJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGlzIHNldHRpbmcgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgdmlld2VyIGNhbiByYXRlIHRoZSBjb21tZW50LlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cyNjYW5SYXRlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjYW5SYXRlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgcmF0aW5nIHRoZSB2aWV3ZXIgaGFzIGdpdmVuIHRvIHRoaXMgY29tbWVudC5cbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBwcm9wZXJ0eSBkb2VzIG5vdCBjdXJyZW50bHkgaWRlbnRpZnkgZGlzbGlrZSByYXRpbmdzLCB0aG91Z2ggdGhpcyBiZWhhdmlvciBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cbiAgICAgKiBJbiB0aGUgbWVhbnRpbWUsIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBsaWtlIGlmIHRoZSB2aWV3ZXIgaGFzIHJhdGVkIHRoZSBjb21tZW50IHBvc2l0aXZlbHkuXG4gICAgICogVGhlIHZhbHVlIGlzIG5vbmUgaW4gYWxsIG90aGVyIGNhc2VzLCBpbmNsdWRpbmcgdGhlIHVzZXIgaGF2aW5nIGdpdmVuIHRoZSBjb21tZW50IGEgbmVnYXRpdmUgcmF0aW5nIG9yIG5vdCBoYXZpbmcgcmF0ZWQgdGhlIGNvbW1lbnQuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3ZpZXdlclJhdGluZyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdmlld2VyUmF0aW5nPzogJ2xpa2UnIHwgJ25vbmUnO1xuICAgIC8qKlxuICAgICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgbGlrZXMgKHBvc2l0aXZlIHJhdGluZ3MpIHRoZSBjb21tZW50IGhhcyByZWNlaXZlZC5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMjbGlrZUNvdW50IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBsaWtlQ291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbW1lbnQncyBtb2RlcmF0aW9uIHN0YXR1cy5cbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgcmV0dXJuZWQgaWYgdGhlIEFQSSByZXF1ZXN0IHdhcyBhdXRob3JpemVkIGJ5IHRoZSBvd25lciBvZiB0aGUgY2hhbm5lbFxuICAgICAqIG9yIHRoZSB2aWRlbyBvbiB3aGljaCB0aGUgcmVxdWVzdGVkIGNvbW1lbnRzIHdlcmUgbWFkZS5cbiAgICAgKiBJbiBhZGRpdGlvbiwgbm90ZSB0aGF0IHRoaXMgcHJvcGVydHkgaXMgbm90IHNldCBpZiB0aGUgQVBJIHJlcXVlc3QgdXNlZCB0aGUgaWQgZmlsdGVyIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMjbW9kZXJhdGlvblN0YXR1cyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbW9kZXJhdGlvblN0YXR1cz86ICdoZWxkRm9yUmV2aWV3JyB8ICdsaWtlbHlTcGFtJyB8ICdwdWJsaXNoZWQnIHwgJ3JlamVjdGVkJztcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBjb21tZW50IHdhcyBvcmlnbmFsbHkgcHVibGlzaGVkLiBUaGUgdmFsdWUgaXMgc3BlY2lmaWVkIGluIElTTyA4NjAxIChZWVlZLU1NLUREVGhoOm1tOnNzLnNaKSBmb3JtYXQuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzI3B1Ymxpc2hlZEF0IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwdWJsaXNoZWRBdD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBjb21tZW50IHdhcyBsYXN0IHVwZGF0ZWQuIFRoZSB2YWx1ZSBpcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDEgKFlZWVktTU0tRERUaGg6bW06c3Muc1opIGZvcm1hdC5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMjdXBkYXRlZEF0IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB1cGRhdGVkQXQ/OiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpQ29tbWVudHNEZWxldGVPcHRzIGV4dGVuZHMgTmd4WXRkQXBpU3RhbmRhcmRPcHRzIHtcbiAgLyoqXG4gICAqIFRoZSBPQXV0aCAyLjAgYWNjZXNzIHRva2VuXG4gICAqIE5vdGU6IFRoZSBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC95b3V0dWJlLmZvcmNlLXNzbGAgc2NvcGUgaXMgcmVxdWlyZWQgdG8gZGVsZXRlIGEgY29tbWVudFxuICAgKi9cbiAgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgY29tbWVudCBJRCBmb3IgdGhlIHJlc291cmNlIHRoYXQgaXMgYmVpbmcgZGVsZXRlZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2RlbGV0ZSNpZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRzSW5zZXJ0T3B0cyBleHRlbmRzIE5neFl0ZEFwaVN0YW5kYXJkT3B0cyB7XG4gIC8qKlxuICAgKiBUaGUgT0F1dGggMi4wIGFjY2VzcyB0b2tlblxuICAgKiBOb3RlOiBUaGUgYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgveW91dHViZS5mb3JjZS1zc2xgIHNjb3BlIGlzIHJlcXVpcmVkIHRvIGRlbGV0ZSBhIGNvbW1lbnRcbiAgICovXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHByb3BlcnRpZXMgdGhhdCB0aGUgQVBJIHdpbGwgaW5jbHVkZVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2luc2VydCNwYXJ0IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHBhcnQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpQ29tbWVudHNMaXN0T3B0cyBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNPcHRzIHtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGNvbW1lbnQgSURzIGZvciB0aGUgcmVzb3VyY2VzIHRoYXQgYXJlIGJlaW5nIHJldHJpZXZlZC5cbiAgICpcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgYSBmaWx0ZXIsIHdoZXJlIG9ubHkgb25lIGZpbHRlciBzaG91bGQgYmUgc3BlY2lmaWVkXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvbGlzdCNpZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgSUQgb2YgdGhlIGNvbW1lbnQgZm9yIHdoaWNoIHJlcGxpZXMgc2hvdWxkIGJlIHJldHJpZXZlZC5cbiAgICpcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgYSBmaWx0ZXIsIHdoZXJlIG9ubHkgb25lIGZpbHRlciBzaG91bGQgYmUgc3BlY2lmaWVkXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvbGlzdCNwYXJlbnRJZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwYXJlbnRJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgdGhhdCBzaG91bGQgYmUgcmV0dXJuZWQgaW4gdGhlIHJlc3VsdHMuXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBpZCBwYXJhbWV0ZXIuXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzIGFyZSAxIHRvIDEwMCwgaW5jbHVzaXZlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAyMC5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9saXN0I21heFJlc3VsdHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgbWF4UmVzdWx0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIElkZW50aWZpZXMgYSBzcGVjaWZpYyBwYWdlIGluIHRoZSByZXN1bHQgc2V0IHRoYXQgc2hvdWxkIGJlIHJldHVybmVkLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBub3Qgc3VwcG9ydGVkIGZvciB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgaWQgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2xpc3QjcGFnZVRva2VuIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHBhZ2VUb2tlbj86IHN0cmluZztcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBBUEkgc2hvdWxkIHJldHVybiBjb21tZW50cyBmb3JtYXR0ZWQgYXMgSFRNTCBvciBhcyBwbGFpbiB0ZXh0LlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIHZhbHVlcyBhcmU6XG4gICAqIC0gaHRtbCDigJMgUmV0dXJucyB0aGUgY29tbWVudHMgaW4gSFRNTCBmb3JtYXQuIFRoaXMgaXMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAqIC0gcGxhaW5UZXh0IOKAkyBSZXR1cm5zIHRoZSBjb21tZW50cyBpbiBwbGFpbiB0ZXh0IGZvcm1hdC5cbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9saXN0I3RleHRGb3JtYXQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdGV4dEZvcm1hdD86ICdodG1sJyB8ICdwbGFpblRleHQnO1xufVxuXG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlDb21tZW50TGlzdFJlc291cmNlfVxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRzTGlzdFJlc3VsdEl0ZW0gZXh0ZW5kcyBOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlIHsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRzTGlzdFJlc3VsdCBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNSZXNvdXJjZSB7XG4gIC8qKlxuICAgKiBUaGUgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGBwYWdlVG9rZW5gIHBhcmFtZXRlciB0byByZXRyaWV2ZSB0aGUgbmV4dCBwYWdlIGluIHRoZSByZXN1bHQgc2V0LlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2xpc3QjbmV4dFBhZ2VUb2tlblxuICAgKi9cbiAgbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBgcGFnZUluZm9gIG9iamVjdCBlbmNhcHN1bGF0ZXMgcGFnaW5nIGluZm9ybWF0aW9uIGZvciB0aGUgcmVzdWx0IHNldC5cbiAgICovXG4gIHBhZ2VJbmZvPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgcmVzdWx0cyBpbiB0aGUgcmVzdWx0IHNldC5cbiAgICAgKi9cbiAgICB0b3RhbFJlc3VsdHM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiByZXN1bHRzIGluY2x1ZGVkIGluIHRoZSBBUEkgcmVzcG9uc2UuXG4gICAgICovXG4gICAgcmVzdWx0c1BlclBhZ2U/OiBudW1iZXI7XG4gIH07XG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgY29tbWVudHMgdGhhdCBtYXRjaCB0aGUgcmVxdWVzdCBjcml0ZXJpYS5cbiAgICovXG4gIGl0ZW1zPzogTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRzTWFya0FzU3BhbU9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlTdGFuZGFyZE9wdHMge1xuICAvKipcbiAgICogVGhlIE9BdXRoIDIuMCBhY2Nlc3MgdG9rZW5cbiAgICogTm90ZTogVGhlIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3lvdXR1YmUuZm9yY2Utc3NsYCBzY29wZSBpcyByZXF1aXJlZCB0byBtYXJrIGEgY29tbWVudCBhcyBzcGFtXG4gICAqL1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgSURzIG9mIGNvbW1lbnRzIHRoYXQgKGFjY29yZGluZyB0byB0aGUgY2FsbGVyKSBzaG91bGQgYmUgY2xhc3NpZmllZCBhcyBzcGFtXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvbWFya0FzU3BhbSNpZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRzU2V0TW9kZXJhdGlvblN0YXR1c09wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlTdGFuZGFyZE9wdHMge1xuICAvKipcbiAgICogVGhlIE9BdXRoIDIuMCBhY2Nlc3MgdG9rZW5cbiAgICogTm90ZTogVGhlIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3lvdXR1YmUuZm9yY2Utc3NsYCBzY29wZSBpcyByZXF1aXJlZCB0byBzZXQgdGhlIG1vZGVyYXRpb24gc3RhdHVzXG4gICAqL1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgSURzIHRoYXQgaWRlbnRpZnkgdGhlIGNvbW1lbnRzIHRvIHVwZGF0ZSB0aGVpciBtb2RlcmF0aW9uIHN0YXR1c1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL3NldE1vZGVyYXRpb25TdGF0dXMjaWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbmV3IG1vZGVyYXRpb24gc3RhdHVzIG9mIHRoZSBzcGVjaWZpZWQgY29tbWVudHNcbiAgICpcbiAgICogQWNjZXB0YWJsZSB2YWx1ZXM6XG4gICAqIC0gYGhlbGRGb3JSZXZpZXdgOiBNYXJrcyBhIGNvbW1lbnQgYXMgYXdhaXRpbmcgcmV2aWV3IGJ5IGEgbW9kZXJhdG9yXG4gICAqIC0gYHB1Ymxpc2hlZGA6IE1hcmtzIGEgY29tbWVudCBhcyBwdWJsaWNcbiAgICogLSBgcmVqZWN0ZWRgOiBSZWplY3RzIGEgY29tbWVudCAoTm90ZTogQWxzbyBoaWRlcyBhbGwgcmVwbGllcyB0byB0aGUgcmVqZWN0ZWQgY29tbWVudClcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9zZXRNb2RlcmF0aW9uU3RhdHVzI21vZGVyYXRpb25TdGF0dXMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgbW9kZXJhdGlvblN0YXR1czogJ2hlbGRGb3JSZXZpZXcnIHwgJ3B1Ymxpc2hlZCcgfCAncmVqZWN0ZWQnO1xuICAvKipcbiAgICogV2hldGhlciB0byBpbmRpY2F0ZSB0aGF0IHlvdSB3YW50IHRvIGF1dG9tYXRpY2FsbHkgcmVqZWN0IGFueSBhZGRpdGlvbmFsIGNvbW1lbnRzIHdyaXR0ZW4gYnkgdGhlIGNvbW1lbnQncyBhdXRob3JcbiAgICpcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgb25seSB2YWxpZCBpZiB0aGUgYG1vZGVyYXRpb25TdGF0dXNgIGlzIGFsc28gc2V0IHRvIGByZWplY3RlZGBcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9zZXRNb2RlcmF0aW9uU3RhdHVzI2JhbkF1dGhvciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBiYW5BdXRob3I/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRzVXBkYXRlT3B0cyBleHRlbmRzIE5neFl0ZEFwaVN0YW5kYXJkT3B0cyB7XG4gIC8qKlxuICAgKiBUaGUgT0F1dGggMi4wIGFjY2VzcyB0b2tlblxuICAgKiBOb3RlOiBUaGUgYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgveW91dHViZS5mb3JjZS1zc2xgIHNjb3BlIGlzIHJlcXVpcmVkIHRvIHNldCB0aGUgbW9kZXJhdGlvbiBzdGF0dXNcbiAgICovXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJZGVudGlmaWVzIHRoZSBwcm9wZXJ0aWVzIHRoYXQgdGhlIEFQSSByZXNwb25zZSB3aWxsIGluY2x1ZGVcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy91cGRhdGUjcGFydCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwYXJ0OiBzdHJpbmc7XG59XG4iXX0=