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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL3NlYXJjaC8iLCJzb3VyY2VzIjpbInl0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLDZDQXdMQzs7Ozs7Ozs7SUFsTEMsNENBQW1COzs7Ozs7Ozs7O0lBU25CLDhDQUE2Qjs7Ozs7Ozs7SUFPN0IsNENBQThDOzs7OztJQUk5QywyQ0FBa0I7Ozs7O0lBSWxCLGlEQUF3Qjs7Ozs7Ozs7SUFPeEIsNkNBQW9COzs7Ozs7OztJQU9wQix3Q0FBK0U7Ozs7Ozs7SUFNL0UsNENBQW1COzs7Ozs7O0lBTW5CLG9DQUFVOzs7Ozs7O0lBTVYsaURBQXdCOzs7Ozs7O0lBTXhCLGtEQUF5Qjs7Ozs7Ozs7Ozs7SUFVekIsNkNBQW9COzs7Ozs7Ozs7Ozs7OztJQWFwQixvREFBMkI7Ozs7Ozs7SUFNM0IsNkNBQTRDOzs7OztJQUk1QywwQ0FBaUI7Ozs7Ozs7Ozs7SUFTakIsdUNBQWM7Ozs7Ozs7OztJQVFkLCtDQUFnRDs7Ozs7Ozs7O0lBUWhELGtEQUF5Qjs7Ozs7Ozs7O0lBUXpCLGtEQUE4Qzs7Ozs7Ozs7O0lBUTlDLGlEQUFxQzs7Ozs7Ozs7O0lBUXJDLGdEQUFvRDs7Ozs7Ozs7O0lBUXBELGtEQUFpQzs7Ozs7Ozs7O0lBUWpDLCtDQUFvRDs7Ozs7Ozs7O0lBUXBELGtEQUFpQzs7Ozs7Ozs7O0lBUWpDLDRDQUF3Qzs7Ozs7QUFJMUMsdURBRUM7Ozs7QUFDRCxzREFtQkM7Ozs7Ozs7O0lBYkMsK0NBQWE7Ozs7Ozs7SUFNYixpREFBZTs7Ozs7OztJQU1mLGtEQUFnQjs7Ozs7O0FBT2xCLDREQUFvRzs7Ozs7QUFNcEcsNkRBQXNHOzs7O0FBRXRHLDZDQWlFQzs7Ozs7Ozs7SUEzREMscUNBeUJFOzs7OztJQUlGLDBDQTZCRTs7Ozs7O0FBT0osbURBQWtGOzs7O0FBR2xGLCtDQThCQzs7Ozs7O0lBMUJDLGtEQUF1Qjs7Ozs7SUFJdkIsa0RBQXVCOzs7OztJQUl2QiwrQ0FBb0I7Ozs7O0lBSXBCLDZDQVNFOzs7OztJQUlGLDBDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFl0ZEFwaUdlbmVyaWNPcHRzLCBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2UgfSBmcm9tICcuL3l0ZC1hcGktY29tbW9uLmludGVyZmFjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljT3B0cyB7XG4gIC8qKlxuICAgKiBUaGUgY2hhbm5lbCBJRCB0byBzZWFyY2ggdmlkZW9zIGZyb21cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNjaGFubmVsSWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgY2hhbm5lbElkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHRvIGEgcGFydGljdWxhciB0eXBlIG9mIGNoYW5uZWwuXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzOlxuICAgKiAtIGBhbnlgIC0gUmV0dXJuIGFsbCBjaGFubmVsc1xuICAgKiAtIGBzaG93YCAtIE9ubHkgcmV0dXJuIHNob3dzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjY2hhbm5lbFR5cGUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgY2hhbm5lbFR5cGU/OiAnYW55JyB8ICdzaG93JztcbiAgLyoqXG4gICAqIFJlc3RyaWN0cyBhIHNlYXJjaCB0byBicm9hZGNhc3QgZXZlbnRzXG4gICAqIE5vdGU6IElmIGEgdmFsdWUgaXMgc3BlY2lmaWVkIGZvciB0aGlzIHBhcmFtZXRlciwgdGhlIHBhcmFtZXRlciBgdHlwZWAncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjZXZlbnRUeXBlIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGV2ZW50VHlwZT86ICdjb21wbGV0ZWQnIHwgJ2xpdmUnIHwgJ3VwY29taW5nJztcbiAgLyoqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjbG9jYXRpb24gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgbG9jYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I2xvY2F0aW9uUmFkaXVzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGxvY2F0aW9uUmFkaXVzPzogc3RyaW5nO1xuICAvKipcbiAgICogTWF4aW11bSByZXN1bHRzIGZvciB2aWRlbyBzZWFyY2hpbmdcbiAgICogQWxsb3dlZCB2YWx1ZXM6IDAgLSA1MFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I21heFJlc3VsdHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgbWF4UmVzdWx0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIHNwZWNpZnlpbmcgdGhlIG9yZGVyIG9mIHJlc291cmNlcyBpbiB0aGUgcmVzcG9uc2UuXG4gICAqIERlZmF1bHQgdmFsdWU6IGByZWxldmFuY2VgXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3Qjb3JkZXIgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgb3JkZXI/OiAnZGF0ZScgfCAncmF0aW5nJyB8ICdyZWxldmFuY2UnIHwgJ3RpdGxlJyB8ICd2aWRlb0NvdW50JyB8ICd2aWV3Q291bnQnO1xuICAvKipcbiAgICogVGhlIHBhZ2UgdG9rZW4gdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3BhZ2VUb2tlbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvclxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3EgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcTogc3RyaW5nO1xuICAvKipcbiAgICogQWxsb3dlZCB2YWx1ZXM6IGFuIFJGQyAzMzM5IGZvcm1hdHRlZCBkYXRlLXRpbWUgdmFsdWUgKDE5NzAtMDEtMDFUMDA6MDA6MDBaKVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3B1Ymxpc2hlZEFmdGVyIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHB1Ymxpc2hlZEFmdGVyPzogc3RyaW5nO1xuICAvKipcbiAgICogQWxsb3dlZCB2YWx1ZXM6IGFuIFJGQyAzMzM5IGZvcm1hdHRlZCBkYXRlLXRpbWUgdmFsdWUgKDE5NzAtMDEtMDFUMDA6MDA6MDBaKVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3B1Ymxpc2hlZEJlZm9yZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwdWJsaXNoZWRCZWZvcmU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcGFyYW1ldGVyIHRlbGxzIHRoZSBBUEkgdG8gcmV0dXJuIHNlYXJjaCByZXN1bHRzIGZvciB2aWRlb3MgdGhhdCBjYW4gYmUgdmlld2VkIGluIHRoZSBzcGVjaWZpYyBjb3VudHJ5LlxuICAgKlxuICAgKiBBbGxvd2VkIHZhbHVlczpcbiAgICogYW4gW0lTTyAzMTY2LTEgYWxwaGEtMl0oaHR0cDovL3d3dy5pc28ub3JnL2lzby9jb3VudHJ5X2NvZGVzL2lzb18zMTY2X2NvZGVfbGlzdHMvY291bnRyeV9uYW1lc19hbmRfY29kZV9lbGVtZW50cy5odG18KVxuICAgKiBjb3VudHJ5IGNvZGUuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcmVnaW9uQ29kZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICByZWdpb25Db2RlPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhpcyBwYXJhbWV0ZXIgdGVsbHMgdGhlIEFQSSB0byByZXR1cm4gc2VhcmNoIHJlc3VsdHMgdGhhdCBhcmUgbW9zdCByZWxldmFudCB0byB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlLlxuICAgKlxuICAgKiBBbGxvd2VkIHZhbHVlczpcbiAgICogYW4gW0lTTyA2MzktMSB0d28tbGV0dGVyIGxhbmd1YWdlIGNvZGVdKGh0dHA6Ly93d3cubG9jLmdvdi9zdGFuZGFyZHMvaXNvNjM5LTIvcGhwL2NvZGVfbGlzdC5waHApXG4gICAqXG4gICAqIEhvd2V2ZXIsIHlvdSBzaG91bGQgdXNlIHRoZSB2YWx1ZXMgemgtSGFucyBmb3Igc2ltcGxpZmllZCBDaGluZXNlIGFuZCB6aC1IYW50IGZvciB0cmFkaXRpb25hbCBDaGluZXNlLlxuICAgKlxuICAgKiBOb3RlOiBSZXN1bHRzIGluIG90aGVyIGxhbmd1YWdlcyB3aWxsIHN0aWxsIGJlIHJldHVybmVkIGlmIHRoZXkgYXJlIGhpZ2hseSByZWxldmFudCB0byB0aGUgc2VhcmNoIHF1ZXJ5IHRlcm0uXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcmVnaW9uQ29kZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICByZWxldmFuY2VMYW5ndWFnZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzZWFyY2ggcmVzdWx0cyBzaG91bGQgaW5jbHVkZSByZXN0cmljdGVkIGNvbnRlbnQgYXMgd2VsbCBhcyBzdGFuZGFyZCBjb250ZW50LlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3NhZmVTZWFyY2ggZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgc2FmZVNlYXJjaD86ICdtb2RlcmF0ZScgfCAnbm9uZScgfCAnc3RyaWN0JztcbiAgLyoqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdG9waWNJZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB0b3BpY0lkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHF1ZXJ5IHRvIG9ubHkgcmV0dXJuIGNlcnRhaW4gcmVzb3VyY2VzXG4gICAqIE5vdGU6IFRoZSB2YWx1ZSBpcyBvZiBhIGNvbW1hLXNlcGVyYXRlZCBsaXN0IG9mIHJlc291cmNlIHR5cGVzLlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlIChpZiBub3Qgc3BlY2lmaWVkKTogYHZpZGVvLGNoYW5uZWwscGxheWxpc3RgXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdHlwZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKipcbiAgICogV2hldGhlciB0aGUgQVBJIHNob3VsZCBmaWx0ZXIgdmlkZW8gc2VhcmNoIHJlc3VsdHMgYmFzZWQgb24gd2hldGhlciB0aGV5IGhhdmUgY2FwdGlvbnMuXG4gICAqXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvQ2FwdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0NhcHRpb24/OiAnYW55JyB8ICdjbG9zZWRjYXB0aW9uJyB8ICdub25lJztcbiAgLyoqXG4gICAqIEZpbHRlcnMgdmlkZW8gc2VhcmNoIHJlc3VsdHMgYmFzZWQgb24gdGhlaXIgY2F0ZWdvcnkuXG4gICAqXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvQ2F0ZWdvcnlJZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0NhdGVnb3J5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZXN0cmljdHMgYSBzZWFyY2ggdG8gb25seSBpbmNsdWRlIGVpdGhlciBoaWdoIGRlZmluaXRpb24vc3RhbmRhcmQgZGVmaW5pdGlvbiB2aWRlb3MuXG4gICAqXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvRGVmaW5pdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0RlZmluaXRpb24/OiAnYW55JyB8ICdoaWdoJyB8ICdzdGFuZGFyZCc7XG4gIC8qKlxuICAgKiBSZXN0cmljdHMgYSBzZWFyY2ggdG8gb25seSByZXRyaWV2ZSAyRCBvciAzRCB2aWRlb3MuXG4gICAqXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvRGltZW5zaW9uIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvRGltZW5zaW9uPzogJ2FueScgfCAnMmQnIHwgJzNkJztcbiAgLyoqXG4gICAqIEZpbHRlcnMgdmlkZW8gc2VhcmNoIHJlc3VsdHMgYmFzZWQgb24gdGhlaXIgZHVyYXRpb24uXG4gICAqXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvRHVyYXRpb24gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9EdXJhdGlvbj86ICdhbnknIHwgJ2xvbmcnIHwgJ21lZGl1bScgfCAnc2hvcnQnO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHRvIG9ubHkgdmlkZW9zIHRoYXQgY2FuIGJlIGVtYmVkZGVkIG9uIGEgd2VicGFnZS5cbiAgICpcbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9FbWJlZGRhYmxlIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvRW1iZWRkYWJsZT86ICdhbnknIHwgJ3RydWUnO1xuICAvKipcbiAgICogRmlsdGVycyB2aWRlb3MgdG8gb25seSBpbmNsdWRlIHZpZGVvcyB3aXRoIGEgcGFydGljdWxhciBsaWNlbnNlLlxuICAgKlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0xpY2Vuc2UgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9MaWNlbnNlPzogJ2FueScgfCAnY3JlYXRpdmVDb21tb24nIHwgJ3lvdXR1YmUnO1xuICAvKipcbiAgICogV2hldGhlciB0byByZXN0cmljdCBhIHNlYXJjaCB0byBvbmx5IHZpZGVvcyB0aGF0IGNhbiBiZSBwbGF5ZWQgb3V0c2lkZSBvZiB5b3V0dWJlLmNvbVxuICAgKlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb1N5bmRpY2F0ZWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9TeW5kaWNhdGVkPzogJ2FueScgfCAndHJ1ZSc7XG4gIC8qKlxuICAgKiBSZXN0cmljdCBhIHNlYXJjaCB0byBhIHBhcnRpY3VsYXIgdHlwZSBvZiB2aWRlb3NcbiAgICpcbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9UeXBlIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvVHlwZT86ICdhbnknIHwgJ2VwaXNvZGUnIHwgJ21vdmllJztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaFJlc291cmNlVGh1bWJuYWlscyB7XG4gIFtrZXk6IHN0cmluZ106IE5neFl0ZEFwaVNlYXJjaFJlc291cmNlVGh1bWJuYWlsO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVRodW1ibmFpbCB7XG4gIC8qKlxuICAgKiBUaGUgVVJMIG9mIHRoZSB0aHVtYm5haWxcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjc25pcHBldC50aHVtYm5haWxzLihrZXkpLnVybCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB1cmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIHRodW1ibmFpbFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNzbmlwcGV0LnRodW1ibmFpbHMuKGtleSkud2lkdGggZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSB0aHVtYm5haWxcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjc25pcHBldC50aHVtYm5haWxzLihrZXkpLmhlaWdodCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVRodW1ibmFpbH0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHRJdGVtVGh1bWJuYWlsIGV4dGVuZHMgTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2VUaHVtYm5haWwgeyB9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVRodW1ibmFpbHN9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0SXRlbVRodW1ibmFpbHMgZXh0ZW5kcyBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVRodW1ibmFpbHMgeyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2UgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2Uge1xuICAvKipcbiAgICogVGhlIGlkIG9iamVjdCBjb250YWlucyBpbmZvIHdoaWNoIGNhbiBiZSB1c2VkIGZvciB1bmlxdWVseSBpZGVudGlmaW5nIHRoZSByZXNvdXJjZVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNpZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpZD86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgQVBJIHJlc291cmNlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNpZC5raW5kIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBraW5kPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoaXMgcHJvcGVydHkgd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBgaWQua2luZGAgcHJvcGVydHkgaXMgc2V0IHRvIGB5b3V0dWJlI3ZpZGVvYFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjaWQudmlkZW9JZCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdmlkZW9JZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3BlcnR5IHdpbGwgYmUgcHJlc2VudCBpZiB0aGUgYGlkLmtpbmRgIHByb3BlcnR5IGlzIHNldCB0byBgeW91dHViZSNjaGFubmVsYFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjaWQuY2hhbm5lbElkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjaGFubmVsSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wZXJ0eSB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIGBpZC5raW5kYCBwcm9wZXJ0eSBpcyBzZXQgdG8gYHlvdXR1YmUjcGxheWxpc3RgXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNpZC5wbGF5bGlzdElkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwbGF5bGlzdElkPzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogVGhlIGBzbmlwcGV0YCBvYmplY3QgY29udGFpbnMgaW5mbyBvbiB0aGUgc2VhcmNoIHJlc3VsdFxuICAgKi9cbiAgc25pcHBldD86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY3JlYXRpb24gZGF0ZSBhbmQgdGltZSBvZiB0aGUgcmVzb3VyY2UuIFRoZSB2YWx1ZSBpcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDEgYChZWVlZLU1NLUREVGhoOm1tOnNzLnNaKWAgZm9ybWF0LlxuICAgICAqL1xuICAgIHB1Ymxpc2hlZEF0Pzogc3RyaW5nIHwgYW55O1xuICAgIC8qKlxuICAgICAqIFRoZSBjaGFubmVsJ3MgSURcbiAgICAgKi9cbiAgICBjaGFubmVsSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSBzZWFyY2ggcmVzdWx0XG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQSBkZXNjcmlwdGlvbiBvZiB0aGUgc2VhcmNoIHJlc3VsdFxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCBvZiB0aGUgdGh1bWJuYWlsc1xuICAgICAqL1xuICAgIHRodW1ibmFpbHM/OiBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVRodW1ibmFpbHM7XG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSBjaGFubmVsIHRoYXQgcHVibGlzaGVkIHRoZSByZXNvdXJjZVxuICAgICAqL1xuICAgIGNoYW5uZWxUaXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNzbmlwcGV0LmxpdmVCcm9hZGNhc3RDb250ZW50IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBsaXZlQnJvYWRjYXN0Q29udGVudD86ICd1cGNvbWluZycgfCAnbGl2ZScgfCAnbm9uZSc7XG4gIH07XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZX0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHRJdGVtIGV4dGVuZHMgTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2UgeyB9XG5cbi8vIFJlc3VsdCBpbnRlcmZhY2VzXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2Uge1xuICAvKipcbiAgICogVGhlIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIG9mIHRoZSBgcGFnZVRva2VuYCBwYXJhbWV0ZXIgdG8gcmV0cmlldmUgdGhlIG5leHQgcGFnZSBpbiB0aGUgcmVzdWx0IHNldC5cbiAgICovXG4gIG5leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGBwYWdlVG9rZW5gIHBhcmFtZXRlciB0byByZXRyaWV2ZSB0aGUgcHJldmlvdXMgcGFnZSBpbiB0aGUgcmVzdWx0IHNldC5cbiAgICovXG4gIHByZXZQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcmVnaW9uIGNvZGUgdXNlZCBmb3IgdGhlIHNlYXJjaCBxdWVyeS5cbiAgICovXG4gIHJlZ2lvbkNvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQYWdpbmcgaW5mbyBhYm91dCB0aGUgcmVzdWx0XG4gICAqL1xuICBwYWdlSW5mbz86IHtcbiAgICAvKipcbiAgICAgKiBUb3RhbCByZXN1bHRzLiBOb3RlIHRoYXQgdGhlIG1heCB2YWx1ZSBpcyBgMTAwMDAwMGAgYW5kIGlzIGFwcHJveGltYXRlLlxuICAgICAqL1xuICAgIHRvdGFsUmVzdWx0cz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgcmVzdWx0cyBpbmNsdWRlZCBpbiByZXNwb25zZVxuICAgICAqL1xuICAgIHJlc3VsdHNQZXJQYWdlPzogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICogQW4gYXJyYXkgb2YgcmVzdWx0cyB0aGF0IG1hdGNoIHRoZSBjcml0ZXJpYVxuICAgKi9cbiAgaXRlbXM/OiBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVtdO1xufVxuIl19