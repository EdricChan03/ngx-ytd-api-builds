/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Represents a resource for the comment thread API
 * @see [Resource representation](https://developers.google.com/youtube/v3/docs/commentThreads#resource)
 * @record
 */
export function NgxYtdApiCommentThreadsResource() { }
if (false) {
    /**
     * The ID used by YouTube to uniquely identify the comment thread
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#id)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsResource.prototype.id;
    /**
     * Contains basic details about the comment thread
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#snippet)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsResource.prototype.snippet;
    /**
     * A container that contains a list of replies to the comment (if any exist)
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads#replies)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsResource.prototype.replies;
}
/**
 * Represents parameters for the `list` method of the comment thread API
 * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/list#parameters)
 * @record
 */
export function NgxYtdApiCommentThreadsListParams() { }
if (false) {
    /**
     * Instructs the API to return all comment threads associated with the specified channel
     *
     * Note: This parameter is a *filter*, where only one *filter* should be specified.
     *
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#allThreadsRelatedToChannelId)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListParams.prototype.allThreadsRelatedToChannelId;
    /**
     * Instructs the API to return comment threads containing comments about the specified channel
     *
     * Note: This parameter is a *filter*, where only one *filter* should be specified.
     *
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#channelId)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListParams.prototype.channelId;
    /**
     * A comma-separated list of comment thread IDs for the resources that should be retrieved
     *
     * Note: This parameter is a *filter*, where only one *filter* should be specified.
     *
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#id)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListParams.prototype.id;
    /**
     * Instructs the API to return comment threads associated with the specified video ID
     *
     * Note: This parameter is a *filter*, where only one *filter* should be specified.
     *
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#videoId)
     *
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListParams.prototype.videoId;
    /**
     * Specifies the maximum number of items that should be returned
     * - Accepted values: a number between `1` to `100`
     * - Default value: `20`
     *
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#maxResults)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListParams.prototype.maxResults;
    /**
     * Limits the returned comment threads to a specified moderation state.
     * - Accepted values:
     *   - `heldForReview` - Retrieve comment threads that are awaiting review by a moderator
     *   - `likelySpam` - Retrieve comment threads classified as likely to be spam
     *   - `published` - Retrieve threads of published comments
     * - Default value: `published`
     * - Note: This parameter is not supported with the `id` parameter
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#moderationStatus)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListParams.prototype.moderationStatus;
    /**
     * Specifies the order in which the API should list comment threads
     * - Accepted values:
     *   - `time` - Comment threads are ordered by time
     *   - `relevance` - Comment threads are ordered by relevance
     * - Default value: `time`
     * - Note: This parameter is not supported with the `id` parameter
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#order)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListParams.prototype.order;
    /**
     * Specifies the page that should be returned in the result set
     *
     * Note: This parameter is not supported with the `id` parameter
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#pageToken)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListParams.prototype.pageToken;
    /**
     * Returns comments that contain the specified search terms
     *
     * Note: This parameter is not supported with the `id` parameter
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#searchTerms)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListParams.prototype.searchTerms;
    /**
     * Sets the text format to return the comments in
     * - Accepted values:
     *   - `html` - Returns the comments in HTML
     *   - `plainText` - Returns the comments in plain text format
     * - Default value: `html`
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#textFormat)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListParams.prototype.textFormat;
}
/**
 * @deprecated Use {\@link NgxYtdApiCommentThreadsListParams}
 * @record
 */
export function NgxYtdApiCommentThreadsListOpts() { }
/**
 * Represents the response which is returned when the `list` method of the comment thread API is called
 * @see [Response structure](https://developers.google.com/youtube/v3/docs/commentThreads/list#response)
 * @record
 */
export function NgxYtdApiCommentThreadsListResponse() { }
if (false) {
    /**
     * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the list of results
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#nextPageToken)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListResponse.prototype.nextPageToken;
    /**
     * Contains paging information for the list of results
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#pageInfo)
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListResponse.prototype.pageInfo;
    /**
     * A list of comment threads that match the request criteria
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/commentThreads/list#items[])
     * @type {?|undefined}
     */
    NgxYtdApiCommentThreadsListResponse.prototype.items;
}
/**
 * Represents methods for the `insert` method of the comment thread API
 * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/insert#parameters)
 * @record
 */
export function NgxYtdApiCommentThreadsInsertParams() { }
if (false) {
    /**
     * Represents the properties that should be included in the response
     * @see [Parameter info](https://developers.google.com/youtube/v3/docs/commentThreads/insert#part)
     * @type {?}
     */
    NgxYtdApiCommentThreadsInsertParams.prototype.part;
}
/**
 * @deprecated Use {\@link NgxYtdApiCommentThreadsInsertOpts}
 * @record
 */
export function NgxYtdApiCommentThreadsInsertOpts() { }
/**
 * Represents methods for the `update` method of the comment thread API
 * @see [Parameters table](https://developers.google.com/youtube/v3/docs/commentThreads/insert#parameters)
 * @record
 */
export function NgxYtdApiCommentThreadsUpdateParams() { }
if (false) {
    /**
     * Represents the properties that should be included in the response
     * @see [Parameter info](https://developers.google.com/youtube/v3/docs/commentThreads/insert#part)
     * @type {?}
     */
    NgxYtdApiCommentThreadsUpdateParams.prototype.part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50LXRocmVhZHMuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvY29tbWVudFRocmVhZHMvIiwic291cmNlcyI6WyJ5dGQtYXBpLWNvbW1lbnQtdGhyZWFkcy5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBV0EscURBMERDOzs7Ozs7O0lBckRDLDZDQUFZOzs7Ozs7SUFLWixrREFvQ0U7Ozs7OztJQUtGLGtEQU1FOzs7Ozs7O0FBT0osdURBc0ZDOzs7Ozs7Ozs7O0lBOUVDLHlFQUFzQzs7Ozs7Ozs7O0lBUXRDLHNEQUFtQjs7Ozs7Ozs7O0lBUW5CLCtDQUFZOzs7Ozs7Ozs7O0lBU1osb0RBQWlCOzs7Ozs7Ozs7SUFRakIsdURBQW9COzs7Ozs7Ozs7Ozs7SUFXcEIsNkRBQWdFOzs7Ozs7Ozs7OztJQVVoRSxrREFBNkI7Ozs7Ozs7O0lBTzdCLHNEQUFtQjs7Ozs7Ozs7SUFPbkIsd0RBQXFCOzs7Ozs7Ozs7O0lBU3JCLHVEQUFrQzs7Ozs7O0FBS3BDLHFEQUE4Rjs7Ozs7O0FBTTlGLHlEQTJCQzs7Ozs7OztJQXRCQyw0REFBdUI7Ozs7OztJQUt2Qix1REFXRTs7Ozs7O0lBS0Ysb0RBQTBDOzs7Ozs7O0FBTzVDLHlEQU1DOzs7Ozs7O0lBREMsbURBQWE7Ozs7OztBQUtmLHVEQUFrRzs7Ozs7O0FBTWxHLHlEQU1DOzs7Ozs7O0lBREMsbURBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlIH0gZnJvbSAnbmd4LXl0ZC1hcGkvY29tbWVudHMnO1xuaW1wb3J0IHtcbiAgTmd4WXRkQXBpR2VuZXJpY1Jlc291cmNlLFxuICBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtcyxcbiAgTmd4WXRkQXBpR2VuZXJpY1Jlc3BvbnNlXG59IGZyb20gJ25neC15dGQtYXBpL2NvbW1vbic7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHJlc291cmNlIGZvciB0aGUgY29tbWVudCB0aHJlYWQgQVBJXG4gKiBAc2VlIFtSZXNvdXJjZSByZXByZXNlbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzI3Jlc291cmNlKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzUmVzb3VyY2UgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2Uge1xuICAvKipcbiAgICogVGhlIElEIHVzZWQgYnkgWW91VHViZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGUgY29tbWVudCB0aHJlYWRcbiAgICogQHNlZSBbRGV2ZWxvcGVyIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcyNpZClcbiAgICovXG4gIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogQ29udGFpbnMgYmFzaWMgZGV0YWlscyBhYm91dCB0aGUgY29tbWVudCB0aHJlYWRcbiAgICogQHNlZSBbRGV2ZWxvcGVyIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcyNzbmlwcGV0KVxuICAgKi9cbiAgc25pcHBldD86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgWW91VHViZSBjaGFubmVsIHRoYXQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb21tZW50cyBpbiB0aGUgdGhyZWFkXG4gICAgICpcbiAgICAgKiBOb3RlczpcbiAgICAgKiAtIElmIHRoZSBjb21tZW50cyBhcmUgYWJvdXQgYSB2aWRlbywgdGhlbiB0aGUgdmFsdWUgaWRlbnRpZmllcyB0aGUgY2hhbm5lbCB0aGF0IHVwbG9hZGVkIHRoZSB2aWRlb1xuICAgICAqIChUaGUgYHNuaXBwZXQudmlkZW9JZGAgcHJvcGVydHkgaWRlbnRpZmllcyB0aGUgdmlkZW8pXG4gICAgICogLSBJZiB0aGUgY29tbWVudHMgcmVmZXIgdG8gdGhlIGNoYW5uZWwgaXRzZWxmLCB0aGUgYHNuaXBwZXQudmlkZW9JZGAgcHJvcGVydHkgd2lsbCBub3QgaGF2ZSBhIHZhbHVlXG4gICAgICogQHNlZSBbRGV2ZWxvcGVyIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcyNzbmlwcGV0LmNoYW5uZWxJZClcbiAgICAgKi9cbiAgICBjaGFubmVsSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIElEIG9mIHRoZSB2aWRlbyB0aGF0IHRoZSBjb21tZW50cyByZWZlciB0byAoaWYgYW55KVxuICAgICAqIEBzZWUgW0RldmVsb3BlciBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMjc25pcHBldC52aWRlb0lkKVxuICAgICAqL1xuICAgIHZpZGVvSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRocmVhZCdzIHRvcCBsZXZlbCBjb21tZW50XG4gICAgICogQHNlZSBbRGV2ZWxvcGVyIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcyNzbmlwcGV0LnRvcExldmVsQ29tbWVudClcbiAgICAgKi9cbiAgICB0b3BMZXZlbENvbW1lbnQ/OiBOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IHZpZXdlciBjYW4gcmVwbHkgdG8gdGhlIHRocmVhZFxuICAgICAqIEBzZWUgW0RldmVsb3BlciBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMjc25pcHBldC5jYW5SZXBseSlcbiAgICAgKi9cbiAgICBjYW5SZXBseT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIHRvdGFsIG51bWJlciBvZiByZXBsaWVzIGluIHJlc3BvbnNlIHRvIHRoZSB0b3AgbGV2ZWwgY29tbWVudFxuICAgICAqIEBzZWUgW0RldmVsb3BlciBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMjc25pcHBldC50b3RhbFJlcGx5Q291bnQpXG4gICAgICovXG4gICAgdG90YWxSZXBseUNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB0aHJlYWQgYW5kIGl0J3MgY29udGVudHMgYXJlIHZpc2libGUgdG8gYWxsIFlvdVR1YmUgdXNlcnNcbiAgICAgKiBAc2VlIFtEZXZlbG9wZXIgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzI3NuaXBwZXQuaXNQdWJsaWMpXG4gICAgICovXG4gICAgaXNQdWJsaWM/OiBib29sZWFuO1xuICB9O1xuICAvKipcbiAgICogQSBjb250YWluZXIgdGhhdCBjb250YWlucyBhIGxpc3Qgb2YgcmVwbGllcyB0byB0aGUgY29tbWVudCAoaWYgYW55IGV4aXN0KVxuICAgKiBAc2VlIFtEZXZlbG9wZXIgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzI3JlcGxpZXMpXG4gICAqL1xuICByZXBsaWVzPzoge1xuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBvbmUgb3IgbW9yZSByZXBsaWVzIHRvIHRoZSB0b3AtbGV2ZWwgY29tbWVudFxuICAgICAqIEBzZWUgW0RldmVsb3BlciBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMjcmVwbGllcy5jb21tZW50c1tdKVxuICAgICAqL1xuICAgIGNvbW1lbnRzPzogTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZVtdO1xuICB9O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgcGFyYW1ldGVycyBmb3IgdGhlIGBsaXN0YCBtZXRob2Qgb2YgdGhlIGNvbW1lbnQgdGhyZWFkIEFQSVxuICogQHNlZSBbUGFyYW1ldGVycyB0YWJsZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzL2xpc3QjcGFyYW1ldGVycylcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlDb21tZW50VGhyZWFkc0xpc3RQYXJhbXMgZXh0ZW5kcyBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtcyB7XG4gIC8qKlxuICAgKiBJbnN0cnVjdHMgdGhlIEFQSSB0byByZXR1cm4gYWxsIGNvbW1lbnQgdGhyZWFkcyBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBjaGFubmVsXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGEgKmZpbHRlciosIHdoZXJlIG9ubHkgb25lICpmaWx0ZXIqIHNob3VsZCBiZSBzcGVjaWZpZWQuXG4gICAqXG4gICAqIEBzZWUgW0RldmVsb3BlciBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvbGlzdCNhbGxUaHJlYWRzUmVsYXRlZFRvQ2hhbm5lbElkKVxuICAgKi9cbiAgYWxsVGhyZWFkc1JlbGF0ZWRUb0NoYW5uZWxJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIEluc3RydWN0cyB0aGUgQVBJIHRvIHJldHVybiBjb21tZW50IHRocmVhZHMgY29udGFpbmluZyBjb21tZW50cyBhYm91dCB0aGUgc3BlY2lmaWVkIGNoYW5uZWxcbiAgICpcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgYSAqZmlsdGVyKiwgd2hlcmUgb25seSBvbmUgKmZpbHRlciogc2hvdWxkIGJlIHNwZWNpZmllZC5cbiAgICpcbiAgICogQHNlZSBbRGV2ZWxvcGVyIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy9saXN0I2NoYW5uZWxJZClcbiAgICovXG4gIGNoYW5uZWxJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIEEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgY29tbWVudCB0aHJlYWQgSURzIGZvciB0aGUgcmVzb3VyY2VzIHRoYXQgc2hvdWxkIGJlIHJldHJpZXZlZFxuICAgKlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBhICpmaWx0ZXIqLCB3aGVyZSBvbmx5IG9uZSAqZmlsdGVyKiBzaG91bGQgYmUgc3BlY2lmaWVkLlxuICAgKlxuICAgKiBAc2VlIFtEZXZlbG9wZXIgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzL2xpc3QjaWQpXG4gICAqL1xuICBpZD86IHN0cmluZztcbiAgLyoqXG4gICAqIEluc3RydWN0cyB0aGUgQVBJIHRvIHJldHVybiBjb21tZW50IHRocmVhZHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQgdmlkZW8gSURcbiAgICpcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgYSAqZmlsdGVyKiwgd2hlcmUgb25seSBvbmUgKmZpbHRlciogc2hvdWxkIGJlIHNwZWNpZmllZC5cbiAgICpcbiAgICogQHNlZSBbRGV2ZWxvcGVyIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy9saXN0I3ZpZGVvSWQpXG4gICAqXG4gICAqL1xuICB2aWRlb0lkPzogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyB0aGF0IHNob3VsZCBiZSByZXR1cm5lZFxuICAgKiAtIEFjY2VwdGVkIHZhbHVlczogYSBudW1iZXIgYmV0d2VlbiBgMWAgdG8gYDEwMGBcbiAgICogLSBEZWZhdWx0IHZhbHVlOiBgMjBgXG4gICAqXG4gICAqIEBzZWUgW0RldmVsb3BlciBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvbGlzdCNtYXhSZXN1bHRzKVxuICAgKi9cbiAgbWF4UmVzdWx0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIExpbWl0cyB0aGUgcmV0dXJuZWQgY29tbWVudCB0aHJlYWRzIHRvIGEgc3BlY2lmaWVkIG1vZGVyYXRpb24gc3RhdGUuXG4gICAqIC0gQWNjZXB0ZWQgdmFsdWVzOlxuICAgKiAgIC0gYGhlbGRGb3JSZXZpZXdgIC0gUmV0cmlldmUgY29tbWVudCB0aHJlYWRzIHRoYXQgYXJlIGF3YWl0aW5nIHJldmlldyBieSBhIG1vZGVyYXRvclxuICAgKiAgIC0gYGxpa2VseVNwYW1gIC0gUmV0cmlldmUgY29tbWVudCB0aHJlYWRzIGNsYXNzaWZpZWQgYXMgbGlrZWx5IHRvIGJlIHNwYW1cbiAgICogICAtIGBwdWJsaXNoZWRgIC0gUmV0cmlldmUgdGhyZWFkcyBvZiBwdWJsaXNoZWQgY29tbWVudHNcbiAgICogLSBEZWZhdWx0IHZhbHVlOiBgcHVibGlzaGVkYFxuICAgKiAtIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzdXBwb3J0ZWQgd2l0aCB0aGUgYGlkYCBwYXJhbWV0ZXJcbiAgICogQHNlZSBbRGV2ZWxvcGVyIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy9saXN0I21vZGVyYXRpb25TdGF0dXMpXG4gICAqL1xuICBtb2RlcmF0aW9uU3RhdHVzPzogJ2hlbGRGb3JSZXZpZXcnIHwgJ2xpa2VseVNwYW0nIHwgJ3B1Ymxpc2hlZCc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBBUEkgc2hvdWxkIGxpc3QgY29tbWVudCB0aHJlYWRzXG4gICAqIC0gQWNjZXB0ZWQgdmFsdWVzOlxuICAgKiAgIC0gYHRpbWVgIC0gQ29tbWVudCB0aHJlYWRzIGFyZSBvcmRlcmVkIGJ5IHRpbWVcbiAgICogICAtIGByZWxldmFuY2VgIC0gQ29tbWVudCB0aHJlYWRzIGFyZSBvcmRlcmVkIGJ5IHJlbGV2YW5jZVxuICAgKiAtIERlZmF1bHQgdmFsdWU6IGB0aW1lYFxuICAgKiAtIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzdXBwb3J0ZWQgd2l0aCB0aGUgYGlkYCBwYXJhbWV0ZXJcbiAgICogQHNlZSBbRGV2ZWxvcGVyIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy9saXN0I29yZGVyKVxuICAgKi9cbiAgb3JkZXI/OiAndGltZScgfCAncmVsZXZhbmNlJztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgcGFnZSB0aGF0IHNob3VsZCBiZSByZXR1cm5lZCBpbiB0aGUgcmVzdWx0IHNldFxuICAgKlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBub3Qgc3VwcG9ydGVkIHdpdGggdGhlIGBpZGAgcGFyYW1ldGVyXG4gICAqIEBzZWUgW0RldmVsb3BlciBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvbGlzdCNwYWdlVG9rZW4pXG4gICAqL1xuICBwYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGNvbW1lbnRzIHRoYXQgY29udGFpbiB0aGUgc3BlY2lmaWVkIHNlYXJjaCB0ZXJtc1xuICAgKlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBub3Qgc3VwcG9ydGVkIHdpdGggdGhlIGBpZGAgcGFyYW1ldGVyXG4gICAqIEBzZWUgW0RldmVsb3BlciBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvbGlzdCNzZWFyY2hUZXJtcylcbiAgICovXG4gIHNlYXJjaFRlcm1zPzogc3RyaW5nO1xuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dCBmb3JtYXQgdG8gcmV0dXJuIHRoZSBjb21tZW50cyBpblxuICAgKiAtIEFjY2VwdGVkIHZhbHVlczpcbiAgICogICAtIGBodG1sYCAtIFJldHVybnMgdGhlIGNvbW1lbnRzIGluIEhUTUxcbiAgICogICAtIGBwbGFpblRleHRgIC0gUmV0dXJucyB0aGUgY29tbWVudHMgaW4gcGxhaW4gdGV4dCBmb3JtYXRcbiAgICogLSBEZWZhdWx0IHZhbHVlOiBgaHRtbGBcbiAgICogQHNlZSBbRGV2ZWxvcGVyIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy9saXN0I3RleHRGb3JtYXQpXG4gICAqL1xuICB0ZXh0Rm9ybWF0PzogJ2h0bWwnIHwgJ3BsYWluVGV4dCc7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzTGlzdFBhcmFtc30gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpQ29tbWVudFRocmVhZHNMaXN0T3B0cyBleHRlbmRzIE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzTGlzdFBhcmFtcyB7IH1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSByZXNwb25zZSB3aGljaCBpcyByZXR1cm5lZCB3aGVuIHRoZSBgbGlzdGAgbWV0aG9kIG9mIHRoZSBjb21tZW50IHRocmVhZCBBUEkgaXMgY2FsbGVkXG4gKiBAc2VlIFtSZXNwb25zZSBzdHJ1Y3R1cmVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy9saXN0I3Jlc3BvbnNlKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzTGlzdFJlc3BvbnNlIGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBvZiB0aGUgYHBhZ2VUb2tlbmAgcGFyYW1ldGVyIHRvIHJldHJpZXZlIHRoZSBuZXh0IHBhZ2UgaW4gdGhlIGxpc3Qgb2YgcmVzdWx0c1xuICAgKiBAc2VlIFtEZXZlbG9wZXIgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzL2xpc3QjbmV4dFBhZ2VUb2tlbilcbiAgICovXG4gIG5leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDb250YWlucyBwYWdpbmcgaW5mb3JtYXRpb24gZm9yIHRoZSBsaXN0IG9mIHJlc3VsdHNcbiAgICogQHNlZSBbRGV2ZWxvcGVyIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50VGhyZWFkcy9saXN0I3BhZ2VJbmZvKVxuICAgKi9cbiAgcGFnZUluZm8/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHRvdGFsIG51bWJlciBvZiByZXN1bHRzIGluIHRoZSBsaXN0IG9mIHJlc3VsdHNcbiAgICAgKiBAc2VlIFtEZXZlbG9wZXIgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzL2xpc3QjcGFnZUluZm8udG90YWxSZXN1bHRzKVxuICAgICAqL1xuICAgIHRvdGFsUmVzdWx0cz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHJlc3VsdHMgaW5jbHVkZWQgaW4gdGhlIEFQSSByZXNwb25zZVxuICAgICAqIEBzZWUgW0RldmVsb3BlciBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvbGlzdCNwYWdlSW5mby5yZXN1bHRzUGVyUGFnZSlcbiAgICAgKi9cbiAgICByZXN1bHRzUGVyUGFnZT86IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBjb21tZW50IHRocmVhZHMgdGhhdCBtYXRjaCB0aGUgcmVxdWVzdCBjcml0ZXJpYVxuICAgKiBAc2VlIFtEZXZlbG9wZXIgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzL2xpc3QjaXRlbXNbXSlcbiAgICovXG4gIGl0ZW1zPzogTmd4WXRkQXBpQ29tbWVudFRocmVhZHNSZXNvdXJjZVtdO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgbWV0aG9kcyBmb3IgdGhlIGBpbnNlcnRgIG1ldGhvZCBvZiB0aGUgY29tbWVudCB0aHJlYWQgQVBJXG4gKiBAc2VlIFtQYXJhbWV0ZXJzIHRhYmxlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvaW5zZXJ0I3BhcmFtZXRlcnMpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpQ29tbWVudFRocmVhZHNJbnNlcnRQYXJhbXMgZXh0ZW5kcyBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtcyB7XG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBwcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZVxuICAgKiBAc2VlIFtQYXJhbWV0ZXIgaW5mb10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzL2luc2VydCNwYXJ0KVxuICAgKi9cbiAgcGFydDogc3RyaW5nO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlDb21tZW50VGhyZWFkc0luc2VydE9wdHN9ICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzSW5zZXJ0T3B0cyBleHRlbmRzIE5neFl0ZEFwaUNvbW1lbnRUaHJlYWRzSW5zZXJ0UGFyYW1zIHsgfVxuXG4vKipcbiAqIFJlcHJlc2VudHMgbWV0aG9kcyBmb3IgdGhlIGB1cGRhdGVgIG1ldGhvZCBvZiB0aGUgY29tbWVudCB0aHJlYWQgQVBJXG4gKiBAc2VlIFtQYXJhbWV0ZXJzIHRhYmxlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudFRocmVhZHMvaW5zZXJ0I3BhcmFtZXRlcnMpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpQ29tbWVudFRocmVhZHNVcGRhdGVQYXJhbXMgZXh0ZW5kcyBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtcyB7XG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBwcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSByZXNwb25zZVxuICAgKiBAc2VlIFtQYXJhbWV0ZXIgaW5mb10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRUaHJlYWRzL2luc2VydCNwYXJ0KVxuICAgKi9cbiAgcGFydDogc3RyaW5nO1xufVxuIl19