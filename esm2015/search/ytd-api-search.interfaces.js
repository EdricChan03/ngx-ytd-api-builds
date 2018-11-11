/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLDZDQXdMQzs7Ozs7Ozs7SUFsTEMsNENBQW1COzs7Ozs7Ozs7O0lBU25CLDhDQUE2Qjs7Ozs7Ozs7SUFPN0IsNENBQThDOzs7OztJQUk5QywyQ0FBa0I7Ozs7O0lBSWxCLGlEQUF3Qjs7Ozs7Ozs7SUFPeEIsNkNBQW9COzs7Ozs7OztJQU9wQix3Q0FBK0U7Ozs7Ozs7SUFNL0UsNENBQW1COzs7Ozs7O0lBTW5CLG9DQUFVOzs7Ozs7O0lBTVYsaURBQXdCOzs7Ozs7O0lBTXhCLGtEQUF5Qjs7Ozs7Ozs7Ozs7SUFVekIsNkNBQW9COzs7Ozs7Ozs7Ozs7OztJQWFwQixvREFBMkI7Ozs7Ozs7SUFNM0IsNkNBQTRDOzs7OztJQUk1QywwQ0FBaUI7Ozs7Ozs7Ozs7SUFTakIsdUNBQWM7Ozs7Ozs7OztJQVFkLCtDQUFnRDs7Ozs7Ozs7O0lBUWhELGtEQUF5Qjs7Ozs7Ozs7O0lBUXpCLGtEQUE4Qzs7Ozs7Ozs7O0lBUTlDLGlEQUFxQzs7Ozs7Ozs7O0lBUXJDLGdEQUFvRDs7Ozs7Ozs7O0lBUXBELGtEQUFpQzs7Ozs7Ozs7O0lBUWpDLCtDQUFvRDs7Ozs7Ozs7O0lBUXBELGtEQUFpQzs7Ozs7Ozs7O0lBUWpDLDRDQUF3Qzs7Ozs7QUFJMUMsdURBRUM7Ozs7QUFDRCxzREFtQkM7Ozs7Ozs7O0lBYkMsK0NBQWE7Ozs7Ozs7SUFNYixpREFBZTs7Ozs7OztJQU1mLGtEQUFnQjs7Ozs7O0FBT2xCLDREQUFvRzs7Ozs7QUFNcEcsNkRBQXNHOzs7O0FBRXRHLDZDQWlFQzs7Ozs7Ozs7SUEzREMscUNBeUJFOzs7OztJQUlGLDBDQTZCRTs7Ozs7O0FBT0osbURBQWtGOzs7O0FBR2xGLCtDQThCQzs7Ozs7O0lBMUJDLGtEQUF1Qjs7Ozs7SUFJdkIsa0RBQXVCOzs7OztJQUl2QiwrQ0FBb0I7Ozs7O0lBSXBCLDZDQVNFOzs7OztJQUlGLDBDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFl0ZEFwaUdlbmVyaWNPcHRzLCBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2UgfSBmcm9tICduZ3gteXRkLWFwaS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cyBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNPcHRzIHtcbiAgLyoqXG4gICAqIFRoZSBjaGFubmVsIElEIHRvIHNlYXJjaCB2aWRlb3MgZnJvbVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I2NoYW5uZWxJZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBjaGFubmVsSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZXN0cmljdHMgYSBzZWFyY2ggdG8gYSBwYXJ0aWN1bGFyIHR5cGUgb2YgY2hhbm5lbC5cbiAgICogQWNjZXB0YWJsZSB2YWx1ZXM6XG4gICAqIC0gYGFueWAgLSBSZXR1cm4gYWxsIGNoYW5uZWxzXG4gICAqIC0gYHNob3dgIC0gT25seSByZXR1cm4gc2hvd3NcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNjaGFubmVsVHlwZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBjaGFubmVsVHlwZT86ICdhbnknIHwgJ3Nob3cnO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHRvIGJyb2FkY2FzdCBldmVudHNcbiAgICogTm90ZTogSWYgYSB2YWx1ZSBpcyBzcGVjaWZpZWQgZm9yIHRoaXMgcGFyYW1ldGVyLCB0aGUgcGFyYW1ldGVyIGB0eXBlYCdzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNldmVudFR5cGUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgZXZlbnRUeXBlPzogJ2NvbXBsZXRlZCcgfCAnbGl2ZScgfCAndXBjb21pbmcnO1xuICAvKipcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNsb2NhdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBsb2NhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjbG9jYXRpb25SYWRpdXMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgbG9jYXRpb25SYWRpdXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBNYXhpbXVtIHJlc3VsdHMgZm9yIHZpZGVvIHNlYXJjaGluZ1xuICAgKiBBbGxvd2VkIHZhbHVlczogMCAtIDUwXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjbWF4UmVzdWx0cyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBtYXhSZXN1bHRzPzogbnVtYmVyO1xuICAvKipcbiAgICogVXNlZCBmb3Igc3BlY2lmeWluZyB0aGUgb3JkZXIgb2YgcmVzb3VyY2VzIGluIHRoZSByZXNwb25zZS5cbiAgICogRGVmYXVsdCB2YWx1ZTogYHJlbGV2YW5jZWBcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNvcmRlciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBvcmRlcj86ICdkYXRlJyB8ICdyYXRpbmcnIHwgJ3JlbGV2YW5jZScgfCAndGl0bGUnIHwgJ3ZpZGVvQ291bnQnIHwgJ3ZpZXdDb3VudCc7XG4gIC8qKlxuICAgKiBUaGUgcGFnZSB0b2tlbiB0byBnZXQgYSByZXNwb25zZSBmcm9tXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcGFnZVRva2VuIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHBhZ2VUb2tlbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBxOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbGxvd2VkIHZhbHVlczogYW4gUkZDIDMzMzkgZm9ybWF0dGVkIGRhdGUtdGltZSB2YWx1ZSAoMTk3MC0wMS0wMVQwMDowMDowMFopXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcHVibGlzaGVkQWZ0ZXIgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcHVibGlzaGVkQWZ0ZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbGxvd2VkIHZhbHVlczogYW4gUkZDIDMzMzkgZm9ybWF0dGVkIGRhdGUtdGltZSB2YWx1ZSAoMTk3MC0wMS0wMVQwMDowMDowMFopXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcHVibGlzaGVkQmVmb3JlIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHB1Ymxpc2hlZEJlZm9yZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBwYXJhbWV0ZXIgdGVsbHMgdGhlIEFQSSB0byByZXR1cm4gc2VhcmNoIHJlc3VsdHMgZm9yIHZpZGVvcyB0aGF0IGNhbiBiZSB2aWV3ZWQgaW4gdGhlIHNwZWNpZmljIGNvdW50cnkuXG4gICAqXG4gICAqIEFsbG93ZWQgdmFsdWVzOlxuICAgKiBhbiBbSVNPIDMxNjYtMSBhbHBoYS0yXShodHRwOi8vd3d3Lmlzby5vcmcvaXNvL2NvdW50cnlfY29kZXMvaXNvXzMxNjZfY29kZV9saXN0cy9jb3VudHJ5X25hbWVzX2FuZF9jb2RlX2VsZW1lbnRzLmh0bXwpXG4gICAqIGNvdW50cnkgY29kZS5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNyZWdpb25Db2RlIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHJlZ2lvbkNvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGlzIHBhcmFtZXRlciB0ZWxscyB0aGUgQVBJIHRvIHJldHVybiBzZWFyY2ggcmVzdWx0cyB0aGF0IGFyZSBtb3N0IHJlbGV2YW50IHRvIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2UuXG4gICAqXG4gICAqIEFsbG93ZWQgdmFsdWVzOlxuICAgKiBhbiBbSVNPIDYzOS0xIHR3by1sZXR0ZXIgbGFuZ3VhZ2UgY29kZV0oaHR0cDovL3d3dy5sb2MuZ292L3N0YW5kYXJkcy9pc282MzktMi9waHAvY29kZV9saXN0LnBocClcbiAgICpcbiAgICogSG93ZXZlciwgeW91IHNob3VsZCB1c2UgdGhlIHZhbHVlcyB6aC1IYW5zIGZvciBzaW1wbGlmaWVkIENoaW5lc2UgYW5kIHpoLUhhbnQgZm9yIHRyYWRpdGlvbmFsIENoaW5lc2UuXG4gICAqXG4gICAqIE5vdGU6IFJlc3VsdHMgaW4gb3RoZXIgbGFuZ3VhZ2VzIHdpbGwgc3RpbGwgYmUgcmV0dXJuZWQgaWYgdGhleSBhcmUgaGlnaGx5IHJlbGV2YW50IHRvIHRoZSBzZWFyY2ggcXVlcnkgdGVybS5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNyZWdpb25Db2RlIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHJlbGV2YW5jZUxhbmd1YWdlPzogc3RyaW5nO1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNlYXJjaCByZXN1bHRzIHNob3VsZCBpbmNsdWRlIHJlc3RyaWN0ZWQgY29udGVudCBhcyB3ZWxsIGFzIHN0YW5kYXJkIGNvbnRlbnQuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3Qjc2FmZVNlYXJjaCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBzYWZlU2VhcmNoPzogJ21vZGVyYXRlJyB8ICdub25lJyB8ICdzdHJpY3QnO1xuICAvKipcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN0b3BpY0lkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHRvcGljSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZXN0cmljdHMgYSBzZWFyY2ggcXVlcnkgdG8gb25seSByZXR1cm4gY2VydGFpbiByZXNvdXJjZXNcbiAgICogTm90ZTogVGhlIHZhbHVlIGlzIG9mIGEgY29tbWEtc2VwZXJhdGVkIGxpc3Qgb2YgcmVzb3VyY2UgdHlwZXMuXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWUgKGlmIG5vdCBzcGVjaWZpZWQpOiBgdmlkZW8sY2hhbm5lbCxwbGF5bGlzdGBcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN0eXBlIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBBUEkgc2hvdWxkIGZpbHRlciB2aWRlbyBzZWFyY2ggcmVzdWx0cyBiYXNlZCBvbiB3aGV0aGVyIHRoZXkgaGF2ZSBjYXB0aW9ucy5cbiAgICpcbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9DYXB0aW9uIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvQ2FwdGlvbj86ICdhbnknIHwgJ2Nsb3NlZGNhcHRpb24nIHwgJ25vbmUnO1xuICAvKipcbiAgICogRmlsdGVycyB2aWRlbyBzZWFyY2ggcmVzdWx0cyBiYXNlZCBvbiB0aGVpciBjYXRlZ29yeS5cbiAgICpcbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9DYXRlZ29yeUlkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvQ2F0ZWdvcnlJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFJlc3RyaWN0cyBhIHNlYXJjaCB0byBvbmx5IGluY2x1ZGUgZWl0aGVyIGhpZ2ggZGVmaW5pdGlvbi9zdGFuZGFyZCBkZWZpbml0aW9uIHZpZGVvcy5cbiAgICpcbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9EZWZpbml0aW9uIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvRGVmaW5pdGlvbj86ICdhbnknIHwgJ2hpZ2gnIHwgJ3N0YW5kYXJkJztcbiAgLyoqXG4gICAqIFJlc3RyaWN0cyBhIHNlYXJjaCB0byBvbmx5IHJldHJpZXZlIDJEIG9yIDNEIHZpZGVvcy5cbiAgICpcbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9EaW1lbnNpb24gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9EaW1lbnNpb24/OiAnYW55JyB8ICcyZCcgfCAnM2QnO1xuICAvKipcbiAgICogRmlsdGVycyB2aWRlbyBzZWFyY2ggcmVzdWx0cyBiYXNlZCBvbiB0aGVpciBkdXJhdGlvbi5cbiAgICpcbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9EdXJhdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0R1cmF0aW9uPzogJ2FueScgfCAnbG9uZycgfCAnbWVkaXVtJyB8ICdzaG9ydCc7XG4gIC8qKlxuICAgKiBSZXN0cmljdHMgYSBzZWFyY2ggdG8gb25seSB2aWRlb3MgdGhhdCBjYW4gYmUgZW1iZWRkZWQgb24gYSB3ZWJwYWdlLlxuICAgKlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0VtYmVkZGFibGUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9FbWJlZGRhYmxlPzogJ2FueScgfCAndHJ1ZSc7XG4gIC8qKlxuICAgKiBGaWx0ZXJzIHZpZGVvcyB0byBvbmx5IGluY2x1ZGUgdmlkZW9zIHdpdGggYSBwYXJ0aWN1bGFyIGxpY2Vuc2UuXG4gICAqXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvTGljZW5zZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0xpY2Vuc2U/OiAnYW55JyB8ICdjcmVhdGl2ZUNvbW1vbicgfCAneW91dHViZSc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJlc3RyaWN0IGEgc2VhcmNoIHRvIG9ubHkgdmlkZW9zIHRoYXQgY2FuIGJlIHBsYXllZCBvdXRzaWRlIG9mIHlvdXR1YmUuY29tXG4gICAqXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvU3luZGljYXRlZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb1N5bmRpY2F0ZWQ/OiAnYW55JyB8ICd0cnVlJztcbiAgLyoqXG4gICAqIFJlc3RyaWN0IGEgc2VhcmNoIHRvIGEgcGFydGljdWxhciB0eXBlIG9mIHZpZGVvc1xuICAgKlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb1R5cGUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9UeXBlPzogJ2FueScgfCAnZXBpc29kZScgfCAnbW92aWUnO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2VUaHVtYm5haWxzIHtcbiAgW2tleTogc3RyaW5nXTogTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2VUaHVtYm5haWw7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaFJlc291cmNlVGh1bWJuYWlsIHtcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIHRodW1ibmFpbFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNzbmlwcGV0LnRodW1ibmFpbHMuKGtleSkudXJsIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgdGh1bWJuYWlsXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoI3NuaXBwZXQudGh1bWJuYWlscy4oa2V5KS53aWR0aCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHRodW1ibmFpbFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNzbmlwcGV0LnRodW1ibmFpbHMuKGtleSkuaGVpZ2h0IGZvciBtb3JlIGluZm9cbiAgICovXG4gIGhlaWdodD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaVNlYXJjaFJlc291cmNlVGh1bWJuYWlsfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdEl0ZW1UaHVtYm5haWwgZXh0ZW5kcyBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVRodW1ibmFpbCB7IH1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaVNlYXJjaFJlc291cmNlVGh1bWJuYWlsc30gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHRJdGVtVGh1bWJuYWlscyBleHRlbmRzIE5neFl0ZEFwaVNlYXJjaFJlc291cmNlVGh1bWJuYWlscyB7IH1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZSBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNSZXNvdXJjZSB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2JqZWN0IGNvbnRhaW5zIGluZm8gd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHVuaXF1ZWx5IGlkZW50aWZpbmcgdGhlIHJlc291cmNlXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoI2lkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGlkPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBBUEkgcmVzb3VyY2VcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoI2lkLmtpbmQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGtpbmQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wZXJ0eSB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIGBpZC5raW5kYCBwcm9wZXJ0eSBpcyBzZXQgdG8gYHlvdXR1YmUjdmlkZW9gXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNpZC52aWRlb0lkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB2aWRlb0lkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoaXMgcHJvcGVydHkgd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBgaWQua2luZGAgcHJvcGVydHkgaXMgc2V0IHRvIGB5b3V0dWJlI2NoYW5uZWxgXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNpZC5jaGFubmVsSWQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNoYW5uZWxJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3BlcnR5IHdpbGwgYmUgcHJlc2VudCBpZiB0aGUgYGlkLmtpbmRgIHByb3BlcnR5IGlzIHNldCB0byBgeW91dHViZSNwbGF5bGlzdGBcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoI2lkLnBsYXlsaXN0SWQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHBsYXlsaXN0SWQ/OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgYHNuaXBwZXRgIG9iamVjdCBjb250YWlucyBpbmZvIG9uIHRoZSBzZWFyY2ggcmVzdWx0XG4gICAqL1xuICBzbmlwcGV0Pzoge1xuICAgIC8qKlxuICAgICAqIFRoZSBjcmVhdGlvbiBkYXRlIGFuZCB0aW1lIG9mIHRoZSByZXNvdXJjZS4gVGhlIHZhbHVlIGlzIHNwZWNpZmllZCBpbiBJU08gODYwMSBgKFlZWVktTU0tRERUaGg6bW06c3Muc1opYCBmb3JtYXQuXG4gICAgICovXG4gICAgcHVibGlzaGVkQXQ/OiBzdHJpbmcgfCBhbnk7XG4gICAgLyoqXG4gICAgICogVGhlIGNoYW5uZWwncyBJRFxuICAgICAqL1xuICAgIGNoYW5uZWxJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIHNlYXJjaCByZXN1bHRcbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBzZWFyY2ggcmVzdWx0XG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IG9mIHRoZSB0aHVtYm5haWxzXG4gICAgICovXG4gICAgdGh1bWJuYWlscz86IE5neFl0ZEFwaVNlYXJjaFJlc291cmNlVGh1bWJuYWlscztcbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIGNoYW5uZWwgdGhhdCBwdWJsaXNoZWQgdGhlIHJlc291cmNlXG4gICAgICovXG4gICAgY2hhbm5lbFRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoI3NuaXBwZXQubGl2ZUJyb2FkY2FzdENvbnRlbnQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGxpdmVCcm9hZGNhc3RDb250ZW50PzogJ3VwY29taW5nJyB8ICdsaXZlJyB8ICdub25lJztcbiAgfTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaVNlYXJjaFJlc291cmNlfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdEl0ZW0gZXh0ZW5kcyBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZSB7IH1cblxuLy8gUmVzdWx0IGludGVyZmFjZXNcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdCBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNSZXNvdXJjZSB7XG4gIC8qKlxuICAgKiBUaGUgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGBwYWdlVG9rZW5gIHBhcmFtZXRlciB0byByZXRyaWV2ZSB0aGUgbmV4dCBwYWdlIGluIHRoZSByZXN1bHQgc2V0LlxuICAgKi9cbiAgbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBvZiB0aGUgYHBhZ2VUb2tlbmAgcGFyYW1ldGVyIHRvIHJldHJpZXZlIHRoZSBwcmV2aW91cyBwYWdlIGluIHRoZSByZXN1bHQgc2V0LlxuICAgKi9cbiAgcHJldlBhZ2VUb2tlbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSByZWdpb24gY29kZSB1c2VkIGZvciB0aGUgc2VhcmNoIHF1ZXJ5LlxuICAgKi9cbiAgcmVnaW9uQ29kZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFBhZ2luZyBpbmZvIGFib3V0IHRoZSByZXN1bHRcbiAgICovXG4gIHBhZ2VJbmZvPzoge1xuICAgIC8qKlxuICAgICAqIFRvdGFsIHJlc3VsdHMuIE5vdGUgdGhhdCB0aGUgbWF4IHZhbHVlIGlzIGAxMDAwMDAwYCBhbmQgaXMgYXBwcm94aW1hdGUuXG4gICAgICovXG4gICAgdG90YWxSZXN1bHRzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiByZXN1bHRzIGluY2x1ZGVkIGluIHJlc3BvbnNlXG4gICAgICovXG4gICAgcmVzdWx0c1BlclBhZ2U/OiBudW1iZXI7XG4gIH07XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiByZXN1bHRzIHRoYXQgbWF0Y2ggdGhlIGNyaXRlcmlhXG4gICAqL1xuICBpdGVtcz86IE5neFl0ZEFwaVNlYXJjaFJlc291cmNlW107XG59XG4iXX0=