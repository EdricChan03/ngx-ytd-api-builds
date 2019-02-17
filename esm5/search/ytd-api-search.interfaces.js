/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function NgxYtdApiSearchListOpts() { }
if (false) {
    /**
     * The channel ID to search videos from
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#channelId for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.channelId;
    /**
     * Restricts a search to a particular type of channel.
     * Acceptable values:
     * - `any` - Return all channels
     * - `show` - Only return shows
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#channelType for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.channelType;
    /**
     * Restricts a search to broadcast events
     * Note: If a value is specified for this parameter, the parameter `type`'s value must be set to `video`
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#eventType for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.eventType;
    /**
     * See https://developers.google.com/youtube/v3/docs/search/list#location for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.location;
    /**
     * See https://developers.google.com/youtube/v3/docs/search/list#locationRadius for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.locationRadius;
    /**
     * Maximum results for video searching
     * Allowed values: 0 - 50
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#maxResults for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.maxResults;
    /**
     * Used for specifying the order of resources in the response.
     * Default value: `relevance`
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#order for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.order;
    /**
     * The page token to get a response from
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#pageToken for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.pageToken;
    /**
     * The query to search for
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#q for more info
     * @type {?}
     */
    NgxYtdApiSearchListOpts.prototype.q;
    /**
     * Allowed values: an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#publishedAfter for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.publishedAfter;
    /**
     * Allowed values: an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#publishedBefore for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.publishedBefore;
    /**
     * The parameter tells the API to return search results for videos that can be viewed in the specific country.
     *
     * Allowed values:
     * an [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes/iso_3166_code_lists/country_names_and_code_elements.htm|)
     * country code.
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#regionCode for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.regionCode;
    /**
     * This parameter tells the API to return search results that are most relevant to the specified language.
     *
     * Allowed values:
     * an [ISO 639-1 two-letter language code](http://www.loc.gov/standards/iso639-2/php/code_list.php)
     *
     * However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese.
     *
     * Note: Results in other languages will still be returned if they are highly relevant to the search query term.
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#regionCode for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.relevanceLanguage;
    /**
     * Indicates whether the search results should include restricted content as well as standard content.
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#safeSearch for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.safeSearch;
    /**
     * See https://developers.google.com/youtube/v3/docs/search/list#topicId for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.topicId;
    /**
     * Restricts a search query to only return certain resources
     * Note: The value is of a comma-seperated list of resource types.
     *
     * Default value (if not specified): `video,channel,playlist`
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#type for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.type;
    /**
     * Whether the API should filter video search results based on whether they have captions.
     *
     * Note: the `type` parameter's value must be set to `video`
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#videoCaption for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoCaption;
    /**
     * Filters video search results based on their category.
     *
     * Note: the `type` parameter's value must be set to `video`
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#videoCategoryId for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoCategoryId;
    /**
     * Restricts a search to only include either high definition/standard definition videos.
     *
     * Note: the `type` parameter's value must be set to `video`
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#videoDefinition for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoDefinition;
    /**
     * Restricts a search to only retrieve 2D or 3D videos.
     *
     * Note: the `type` parameter's value must be set to `video`
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#videoDimension for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoDimension;
    /**
     * Filters video search results based on their duration.
     *
     * Note: the `type` parameter's value must be set to `video`
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#videoDuration for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoDuration;
    /**
     * Restricts a search to only videos that can be embedded on a webpage.
     *
     * Note: the `type` parameter's value must be set to `video`
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#videoEmbeddable for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoEmbeddable;
    /**
     * Filters videos to only include videos with a particular license.
     *
     * Note: the `type` parameter's value must be set to `video`
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#videoLicense for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoLicense;
    /**
     * Whether to restrict a search to only videos that can be played outside of youtube.com
     *
     * Note: the `type` parameter's value must be set to `video`
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#videoSyndicated for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoSyndicated;
    /**
     * Restrict a search to a particular type of videos
     *
     * Note: the `type` parameter's value must be set to `video`
     *
     * See https://developers.google.com/youtube/v3/docs/search/list#videoType for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoType;
}
/**
 * @record
 */
export function NgxYtdApiSearchResourceThumbnails() { }
/**
 * @record
 */
export function NgxYtdApiSearchResourceThumbnail() { }
if (false) {
    /**
     * The URL of the thumbnail
     *
     * See https://developers.google.com/youtube/v3/docs/search#snippet.thumbnails.(key).url for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchResourceThumbnail.prototype.url;
    /**
     * The width of the thumbnail
     *
     * See https://developers.google.com/youtube/v3/docs/search#snippet.thumbnails.(key).width for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchResourceThumbnail.prototype.width;
    /**
     * The height of the thumbnail
     *
     * See https://developers.google.com/youtube/v3/docs/search#snippet.thumbnails.(key).height for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchResourceThumbnail.prototype.height;
}
/**
 * @deprecated Use {\@link NgxYtdApiSearchResourceThumbnail} instead
 * @record
 */
export function NgxYtdApiSearchListResultItemThumbnail() { }
/**
 * @deprecated Use {\@link NgxYtdApiSearchResourceThumbnails} instead
 * @record
 */
export function NgxYtdApiSearchListResultItemThumbnails() { }
/**
 * @record
 */
export function NgxYtdApiSearchResource() { }
if (false) {
    /**
     * The id object contains info which can be used for uniquely identifing the resource
     *
     * See https://developers.google.com/youtube/v3/docs/search#id for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchResource.prototype.id;
    /**
     * The `snippet` object contains info on the search result
     * @type {?|undefined}
     */
    NgxYtdApiSearchResource.prototype.snippet;
}
/**
 * @deprecated Use {\@link NgxYtdApiSearchResource} instead
 * @record
 */
export function NgxYtdApiSearchListResultItem() { }
/**
 * @record
 */
export function NgxYtdApiSearchListResult() { }
if (false) {
    /**
     * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
     * @type {?|undefined}
     */
    NgxYtdApiSearchListResult.prototype.nextPageToken;
    /**
     * The token that can be used as the value of the `pageToken` parameter to retrieve the previous page in the result set.
     * @type {?|undefined}
     */
    NgxYtdApiSearchListResult.prototype.prevPageToken;
    /**
     * The region code used for the search query.
     * @type {?|undefined}
     */
    NgxYtdApiSearchListResult.prototype.regionCode;
    /**
     * Paging info about the result
     * @type {?|undefined}
     */
    NgxYtdApiSearchListResult.prototype.pageInfo;
    /**
     * An array of results that match the criteria
     * @type {?|undefined}
     */
    NgxYtdApiSearchListResult.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL3NlYXJjaC8iLCJzb3VyY2VzIjpbInl0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLDZDQXdMQzs7Ozs7Ozs7SUFsTEMsNENBQW1COzs7Ozs7Ozs7O0lBU25CLDhDQUE2Qjs7Ozs7Ozs7SUFPN0IsNENBQThDOzs7OztJQUk5QywyQ0FBa0I7Ozs7O0lBSWxCLGlEQUF3Qjs7Ozs7Ozs7SUFPeEIsNkNBQW9COzs7Ozs7OztJQU9wQix3Q0FBK0U7Ozs7Ozs7SUFNL0UsNENBQW1COzs7Ozs7O0lBTW5CLG9DQUFVOzs7Ozs7O0lBTVYsaURBQXdCOzs7Ozs7O0lBTXhCLGtEQUF5Qjs7Ozs7Ozs7Ozs7SUFVekIsNkNBQW9COzs7Ozs7Ozs7Ozs7OztJQWFwQixvREFBMkI7Ozs7Ozs7SUFNM0IsNkNBQTRDOzs7OztJQUk1QywwQ0FBaUI7Ozs7Ozs7Ozs7SUFTakIsdUNBQWM7Ozs7Ozs7OztJQVFkLCtDQUFnRDs7Ozs7Ozs7O0lBUWhELGtEQUF5Qjs7Ozs7Ozs7O0lBUXpCLGtEQUE4Qzs7Ozs7Ozs7O0lBUTlDLGlEQUFxQzs7Ozs7Ozs7O0lBUXJDLGdEQUFvRDs7Ozs7Ozs7O0lBUXBELGtEQUFpQzs7Ozs7Ozs7O0lBUWpDLCtDQUFvRDs7Ozs7Ozs7O0lBUXBELGtEQUFpQzs7Ozs7Ozs7O0lBUWpDLDRDQUF3Qzs7Ozs7QUFJMUMsdURBRUM7Ozs7QUFDRCxzREFtQkM7Ozs7Ozs7O0lBYkMsK0NBQWE7Ozs7Ozs7SUFNYixpREFBZTs7Ozs7OztJQU1mLGtEQUFnQjs7Ozs7O0FBT2xCLDREQUFvRzs7Ozs7QUFNcEcsNkRBQXNHOzs7O0FBRXRHLDZDQWlFQzs7Ozs7Ozs7SUEzREMscUNBeUJFOzs7OztJQUlGLDBDQTZCRTs7Ozs7O0FBT0osbURBQWtGOzs7O0FBR2xGLCtDQThCQzs7Ozs7O0lBMUJDLGtEQUF1Qjs7Ozs7SUFJdkIsa0RBQXVCOzs7OztJQUl2QiwrQ0FBb0I7Ozs7O0lBSXBCLDZDQVNFOzs7OztJQUlGLDBDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFl0ZEFwaUdlbmVyaWNPcHRzLCBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2UgfSBmcm9tICduZ3gteXRkLWFwaS9jb21tb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaExpc3RPcHRzIGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY09wdHMge1xuICAvKipcbiAgICogVGhlIGNoYW5uZWwgSUQgdG8gc2VhcmNoIHZpZGVvcyBmcm9tXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjY2hhbm5lbElkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGNoYW5uZWxJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFJlc3RyaWN0cyBhIHNlYXJjaCB0byBhIHBhcnRpY3VsYXIgdHlwZSBvZiBjaGFubmVsLlxuICAgKiBBY2NlcHRhYmxlIHZhbHVlczpcbiAgICogLSBgYW55YCAtIFJldHVybiBhbGwgY2hhbm5lbHNcbiAgICogLSBgc2hvd2AgLSBPbmx5IHJldHVybiBzaG93c1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I2NoYW5uZWxUeXBlIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGNoYW5uZWxUeXBlPzogJ2FueScgfCAnc2hvdyc7XG4gIC8qKlxuICAgKiBSZXN0cmljdHMgYSBzZWFyY2ggdG8gYnJvYWRjYXN0IGV2ZW50c1xuICAgKiBOb3RlOiBJZiBhIHZhbHVlIGlzIHNwZWNpZmllZCBmb3IgdGhpcyBwYXJhbWV0ZXIsIHRoZSBwYXJhbWV0ZXIgYHR5cGVgJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I2V2ZW50VHlwZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBldmVudFR5cGU/OiAnY29tcGxldGVkJyB8ICdsaXZlJyB8ICd1cGNvbWluZyc7XG4gIC8qKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I2xvY2F0aW9uIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNsb2NhdGlvblJhZGl1cyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBsb2NhdGlvblJhZGl1cz86IHN0cmluZztcbiAgLyoqXG4gICAqIE1heGltdW0gcmVzdWx0cyBmb3IgdmlkZW8gc2VhcmNoaW5nXG4gICAqIEFsbG93ZWQgdmFsdWVzOiAwIC0gNTBcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNtYXhSZXN1bHRzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG1heFJlc3VsdHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBzcGVjaWZ5aW5nIHRoZSBvcmRlciBvZiByZXNvdXJjZXMgaW4gdGhlIHJlc3BvbnNlLlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgcmVsZXZhbmNlYFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I29yZGVyIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG9yZGVyPzogJ2RhdGUnIHwgJ3JhdGluZycgfCAncmVsZXZhbmNlJyB8ICd0aXRsZScgfCAndmlkZW9Db3VudCcgfCAndmlld0NvdW50JztcbiAgLyoqXG4gICAqIFRoZSBwYWdlIHRva2VuIHRvIGdldCBhIHJlc3BvbnNlIGZyb21cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNwYWdlVG9rZW4gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3JcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNxIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHE6IHN0cmluZztcbiAgLyoqXG4gICAqIEFsbG93ZWQgdmFsdWVzOiBhbiBSRkMgMzMzOSBmb3JtYXR0ZWQgZGF0ZS10aW1lIHZhbHVlICgxOTcwLTAxLTAxVDAwOjAwOjAwWilcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNwdWJsaXNoZWRBZnRlciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwdWJsaXNoZWRBZnRlcj86IHN0cmluZztcbiAgLyoqXG4gICAqIEFsbG93ZWQgdmFsdWVzOiBhbiBSRkMgMzMzOSBmb3JtYXR0ZWQgZGF0ZS10aW1lIHZhbHVlICgxOTcwLTAxLTAxVDAwOjAwOjAwWilcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNwdWJsaXNoZWRCZWZvcmUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcHVibGlzaGVkQmVmb3JlPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB0ZWxscyB0aGUgQVBJIHRvIHJldHVybiBzZWFyY2ggcmVzdWx0cyBmb3IgdmlkZW9zIHRoYXQgY2FuIGJlIHZpZXdlZCBpbiB0aGUgc3BlY2lmaWMgY291bnRyeS5cbiAgICpcbiAgICogQWxsb3dlZCB2YWx1ZXM6XG4gICAqIGFuIFtJU08gMzE2Ni0xIGFscGhhLTJdKGh0dHA6Ly93d3cuaXNvLm9yZy9pc28vY291bnRyeV9jb2Rlcy9pc29fMzE2Nl9jb2RlX2xpc3RzL2NvdW50cnlfbmFtZXNfYW5kX2NvZGVfZWxlbWVudHMuaHRtfClcbiAgICogY291bnRyeSBjb2RlLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3JlZ2lvbkNvZGUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcmVnaW9uQ29kZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoaXMgcGFyYW1ldGVyIHRlbGxzIHRoZSBBUEkgdG8gcmV0dXJuIHNlYXJjaCByZXN1bHRzIHRoYXQgYXJlIG1vc3QgcmVsZXZhbnQgdG8gdGhlIHNwZWNpZmllZCBsYW5ndWFnZS5cbiAgICpcbiAgICogQWxsb3dlZCB2YWx1ZXM6XG4gICAqIGFuIFtJU08gNjM5LTEgdHdvLWxldHRlciBsYW5ndWFnZSBjb2RlXShodHRwOi8vd3d3LmxvYy5nb3Yvc3RhbmRhcmRzL2lzbzYzOS0yL3BocC9jb2RlX2xpc3QucGhwKVxuICAgKlxuICAgKiBIb3dldmVyLCB5b3Ugc2hvdWxkIHVzZSB0aGUgdmFsdWVzIHpoLUhhbnMgZm9yIHNpbXBsaWZpZWQgQ2hpbmVzZSBhbmQgemgtSGFudCBmb3IgdHJhZGl0aW9uYWwgQ2hpbmVzZS5cbiAgICpcbiAgICogTm90ZTogUmVzdWx0cyBpbiBvdGhlciBsYW5ndWFnZXMgd2lsbCBzdGlsbCBiZSByZXR1cm5lZCBpZiB0aGV5IGFyZSBoaWdobHkgcmVsZXZhbnQgdG8gdGhlIHNlYXJjaCBxdWVyeSB0ZXJtLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3JlZ2lvbkNvZGUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcmVsZXZhbmNlTGFuZ3VhZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc2VhcmNoIHJlc3VsdHMgc2hvdWxkIGluY2x1ZGUgcmVzdHJpY3RlZCBjb250ZW50IGFzIHdlbGwgYXMgc3RhbmRhcmQgY29udGVudC5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNzYWZlU2VhcmNoIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHNhZmVTZWFyY2g/OiAnbW9kZXJhdGUnIHwgJ25vbmUnIHwgJ3N0cmljdCc7XG4gIC8qKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3RvcGljSWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdG9waWNJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFJlc3RyaWN0cyBhIHNlYXJjaCBxdWVyeSB0byBvbmx5IHJldHVybiBjZXJ0YWluIHJlc291cmNlc1xuICAgKiBOb3RlOiBUaGUgdmFsdWUgaXMgb2YgYSBjb21tYS1zZXBlcmF0ZWQgbGlzdCBvZiByZXNvdXJjZSB0eXBlcy5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZSAoaWYgbm90IHNwZWNpZmllZCk6IGB2aWRlbyxjaGFubmVsLHBsYXlsaXN0YFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3R5cGUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIEFQSSBzaG91bGQgZmlsdGVyIHZpZGVvIHNlYXJjaCByZXN1bHRzIGJhc2VkIG9uIHdoZXRoZXIgdGhleSBoYXZlIGNhcHRpb25zLlxuICAgKlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0NhcHRpb24gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9DYXB0aW9uPzogJ2FueScgfCAnY2xvc2VkY2FwdGlvbicgfCAnbm9uZSc7XG4gIC8qKlxuICAgKiBGaWx0ZXJzIHZpZGVvIHNlYXJjaCByZXN1bHRzIGJhc2VkIG9uIHRoZWlyIGNhdGVnb3J5LlxuICAgKlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0NhdGVnb3J5SWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9DYXRlZ29yeUlkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHRvIG9ubHkgaW5jbHVkZSBlaXRoZXIgaGlnaCBkZWZpbml0aW9uL3N0YW5kYXJkIGRlZmluaXRpb24gdmlkZW9zLlxuICAgKlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0RlZmluaXRpb24gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9EZWZpbml0aW9uPzogJ2FueScgfCAnaGlnaCcgfCAnc3RhbmRhcmQnO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHRvIG9ubHkgcmV0cmlldmUgMkQgb3IgM0QgdmlkZW9zLlxuICAgKlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0RpbWVuc2lvbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0RpbWVuc2lvbj86ICdhbnknIHwgJzJkJyB8ICczZCc7XG4gIC8qKlxuICAgKiBGaWx0ZXJzIHZpZGVvIHNlYXJjaCByZXN1bHRzIGJhc2VkIG9uIHRoZWlyIGR1cmF0aW9uLlxuICAgKlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0R1cmF0aW9uIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvRHVyYXRpb24/OiAnYW55JyB8ICdsb25nJyB8ICdtZWRpdW0nIHwgJ3Nob3J0JztcbiAgLyoqXG4gICAqIFJlc3RyaWN0cyBhIHNlYXJjaCB0byBvbmx5IHZpZGVvcyB0aGF0IGNhbiBiZSBlbWJlZGRlZCBvbiBhIHdlYnBhZ2UuXG4gICAqXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvRW1iZWRkYWJsZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0VtYmVkZGFibGU/OiAnYW55JyB8ICd0cnVlJztcbiAgLyoqXG4gICAqIEZpbHRlcnMgdmlkZW9zIHRvIG9ubHkgaW5jbHVkZSB2aWRlb3Mgd2l0aCBhIHBhcnRpY3VsYXIgbGljZW5zZS5cbiAgICpcbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9MaWNlbnNlIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvTGljZW5zZT86ICdhbnknIHwgJ2NyZWF0aXZlQ29tbW9uJyB8ICd5b3V0dWJlJztcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVzdHJpY3QgYSBzZWFyY2ggdG8gb25seSB2aWRlb3MgdGhhdCBjYW4gYmUgcGxheWVkIG91dHNpZGUgb2YgeW91dHViZS5jb21cbiAgICpcbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9TeW5kaWNhdGVkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvU3luZGljYXRlZD86ICdhbnknIHwgJ3RydWUnO1xuICAvKipcbiAgICogUmVzdHJpY3QgYSBzZWFyY2ggdG8gYSBwYXJ0aWN1bGFyIHR5cGUgb2YgdmlkZW9zXG4gICAqXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvVHlwZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb1R5cGU/OiAnYW55JyB8ICdlcGlzb2RlJyB8ICdtb3ZpZSc7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVRodW1ibmFpbHMge1xuICBba2V5OiBzdHJpbmddOiBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVRodW1ibmFpbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2VUaHVtYm5haWwge1xuICAvKipcbiAgICogVGhlIFVSTCBvZiB0aGUgdGh1bWJuYWlsXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoI3NuaXBwZXQudGh1bWJuYWlscy4oa2V5KS51cmwgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSB0aHVtYm5haWxcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjc25pcHBldC50aHVtYm5haWxzLihrZXkpLndpZHRoIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgdGh1bWJuYWlsXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoI3NuaXBwZXQudGh1bWJuYWlscy4oa2V5KS5oZWlnaHQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2VUaHVtYm5haWx9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0SXRlbVRodW1ibmFpbCBleHRlbmRzIE5neFl0ZEFwaVNlYXJjaFJlc291cmNlVGh1bWJuYWlsIHsgfVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2VUaHVtYm5haWxzfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdEl0ZW1UaHVtYm5haWxzIGV4dGVuZHMgTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2VUaHVtYm5haWxzIHsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaFJlc291cmNlIGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY1Jlc291cmNlIHtcbiAgLyoqXG4gICAqIFRoZSBpZCBvYmplY3QgY29udGFpbnMgaW5mbyB3aGljaCBjYW4gYmUgdXNlZCBmb3IgdW5pcXVlbHkgaWRlbnRpZmluZyB0aGUgcmVzb3VyY2VcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjaWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaWQ/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIEFQSSByZXNvdXJjZVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjaWQua2luZCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAga2luZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3BlcnR5IHdpbGwgYmUgcHJlc2VudCBpZiB0aGUgYGlkLmtpbmRgIHByb3BlcnR5IGlzIHNldCB0byBgeW91dHViZSN2aWRlb2BcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoI2lkLnZpZGVvSWQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHZpZGVvSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wZXJ0eSB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIGBpZC5raW5kYCBwcm9wZXJ0eSBpcyBzZXQgdG8gYHlvdXR1YmUjY2hhbm5lbGBcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoI2lkLmNoYW5uZWxJZCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY2hhbm5lbElkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoaXMgcHJvcGVydHkgd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBgaWQua2luZGAgcHJvcGVydHkgaXMgc2V0IHRvIGB5b3V0dWJlI3BsYXlsaXN0YFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjaWQucGxheWxpc3RJZCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcGxheWxpc3RJZD86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIFRoZSBgc25pcHBldGAgb2JqZWN0IGNvbnRhaW5zIGluZm8gb24gdGhlIHNlYXJjaCByZXN1bHRcbiAgICovXG4gIHNuaXBwZXQ/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIGNyZWF0aW9uIGRhdGUgYW5kIHRpbWUgb2YgdGhlIHJlc291cmNlLiBUaGUgdmFsdWUgaXMgc3BlY2lmaWVkIGluIElTTyA4NjAxIGAoWVlZWS1NTS1ERFRoaDptbTpzcy5zWilgIGZvcm1hdC5cbiAgICAgKi9cbiAgICBwdWJsaXNoZWRBdD86IHN0cmluZyB8IGFueTtcbiAgICAvKipcbiAgICAgKiBUaGUgY2hhbm5lbCdzIElEXG4gICAgICovXG4gICAgY2hhbm5lbElkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgc2VhcmNoIHJlc3VsdFxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEEgZGVzY3JpcHRpb24gb2YgdGhlIHNlYXJjaCByZXN1bHRcbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3Qgb2YgdGhlIHRodW1ibmFpbHNcbiAgICAgKi9cbiAgICB0aHVtYm5haWxzPzogTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2VUaHVtYm5haWxzO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgY2hhbm5lbCB0aGF0IHB1Ymxpc2hlZCB0aGUgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBjaGFubmVsVGl0bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjc25pcHBldC5saXZlQnJvYWRjYXN0Q29udGVudCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbGl2ZUJyb2FkY2FzdENvbnRlbnQ/OiAndXBjb21pbmcnIHwgJ2xpdmUnIHwgJ25vbmUnO1xuICB9O1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2V9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0SXRlbSBleHRlbmRzIE5neFl0ZEFwaVNlYXJjaFJlc291cmNlIHsgfVxuXG4vLyBSZXN1bHQgaW50ZXJmYWNlc1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0IGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY1Jlc291cmNlIHtcbiAgLyoqXG4gICAqIFRoZSB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBvZiB0aGUgYHBhZ2VUb2tlbmAgcGFyYW1ldGVyIHRvIHJldHJpZXZlIHRoZSBuZXh0IHBhZ2UgaW4gdGhlIHJlc3VsdCBzZXQuXG4gICAqL1xuICBuZXh0UGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIG9mIHRoZSBgcGFnZVRva2VuYCBwYXJhbWV0ZXIgdG8gcmV0cmlldmUgdGhlIHByZXZpb3VzIHBhZ2UgaW4gdGhlIHJlc3VsdCBzZXQuXG4gICAqL1xuICBwcmV2UGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHJlZ2lvbiBjb2RlIHVzZWQgZm9yIHRoZSBzZWFyY2ggcXVlcnkuXG4gICAqL1xuICByZWdpb25Db2RlPzogc3RyaW5nO1xuICAvKipcbiAgICogUGFnaW5nIGluZm8gYWJvdXQgdGhlIHJlc3VsdFxuICAgKi9cbiAgcGFnZUluZm8/OiB7XG4gICAgLyoqXG4gICAgICogVG90YWwgcmVzdWx0cy4gTm90ZSB0aGF0IHRoZSBtYXggdmFsdWUgaXMgYDEwMDAwMDBgIGFuZCBpcyBhcHByb3hpbWF0ZS5cbiAgICAgKi9cbiAgICB0b3RhbFJlc3VsdHM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIHJlc3VsdHMgaW5jbHVkZWQgaW4gcmVzcG9uc2VcbiAgICAgKi9cbiAgICByZXN1bHRzUGVyUGFnZT86IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIHJlc3VsdHMgdGhhdCBtYXRjaCB0aGUgY3JpdGVyaWFcbiAgICovXG4gIGl0ZW1zPzogTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2VbXTtcbn1cbiJdfQ==