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
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.channelId;
    /**
     * Restricts a search to a particular type of channel.
     * Acceptable values:
     * - `any` - Return all channels
     * - `show` - Only return shows
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.channelType;
    /**
     * Restricts a search to broadcast events
     * Note: If a value is specified for this parameter, the parameter `type`'s value must be set to `video`
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
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.maxResults;
    /**
     * Used for specifying the order of resources in the response.
     * Default value: `relevance`
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.order;
    /**
     * The page token to get a response from
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.pageToken;
    /**
     * The query to search for
     * @type {?}
     */
    NgxYtdApiSearchListOpts.prototype.q;
    /**
     * See https://developers.google.com/youtube/v3/docs/search/list#publishedAfter for more info
     * Allowed values: an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.publishedAfter;
    /**
     * See https://developers.google.com/youtube/v3/docs/search/list#publishedBefore for more info
     * Allowed values: an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.publishedBefore;
    /**
     * The parameter tells the API to return search results for videos that can be viewed in the specific country.
     * Allowed values:
     * an {\@link http://www.iso.org/iso/country_codes/iso_3166_code_lists/country_names_and_code_elements.htm|ISO 3166-1 alpha-2}
     * country code.
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#regionCode|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.regionCode;
    /**
     * This parameter tells the API to return search results that are most relevant to the specified language.
     * Allowed values:
     * an {\@link http://www.loc.gov/standards/iso639-2/php/code_list.php|ISO 639-1 two-letter language code}
     * However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese.
     * Note: Results in other languages will still be returned if they are highly relevant to the search query term.
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#regionCode|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.relevanceLanguage;
    /**
     * Indicates whether the search results should include restricted content as well as standard content.
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#safeSearch|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.safeSearch;
    /**
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#topicId|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.topicId;
    /**
     * Restricts a search query to only return certain resources
     * Note: The value is of a comma-seperated list of resource types.
     * Default: `video,channel,playlist`
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.type;
    /**
     * Whether the API should filter video search results based on whether they have captions.
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoCaption|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoCaption;
    /**
     * Filters video search results based on their category.
     * Note: the `type` parameter's value must be set to `video`
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoCategoryId;
    /**
     * Restricts a search to only include either high definition/standard definition videos.
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoDefinition|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoDefinition;
    /**
     * Restricts a search to only retrieve 2D or 3D videos.
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoDimension|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoDimension;
    /**
     * Filters video search results based on their duration.
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoDuration|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoDuration;
    /**
     * Restricts a search to only videos that can be embedded on a webpage.
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoEmbeddable|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoEmbeddable;
    /**
     * Filters videos to only include videos with a particular license.
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoLicense|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoLicense;
    /**
     * Whether to restrict a search to only videos that can be played outside of youtube.com
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoSyndicated|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchListOpts.prototype.videoSyndicated;
    /**
     * Restrict a search to a particular type of videos
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoType|developer docs} for more info
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
     * @type {?|undefined}
     */
    NgxYtdApiSearchResourceThumbnail.prototype.url;
    /**
     * The width of the thumbnail
     * @type {?|undefined}
     */
    NgxYtdApiSearchResourceThumbnail.prototype.width;
    /**
     * The height of the thumbnail
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
     * See the [documentation]{\@link https://developers.google.com/youtube/v3/docs/search#id} for more info
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLDZDQTJJQzs7Ozs7O0lBdklDLDRDQUFtQjs7Ozs7Ozs7SUFPbkIsOENBQTZCOzs7Ozs7SUFLN0IsNENBQThDOzs7OztJQUk5QywyQ0FBa0I7Ozs7O0lBSWxCLGlEQUF3Qjs7Ozs7O0lBS3hCLDZDQUFvQjs7Ozs7O0lBS3BCLHdDQUErRTs7Ozs7SUFJL0UsNENBQW1COzs7OztJQUluQixvQ0FBVTs7Ozs7O0lBS1YsaURBQXdCOzs7Ozs7SUFLeEIsa0RBQXlCOzs7Ozs7Ozs7SUFRekIsNkNBQW9COzs7Ozs7Ozs7O0lBU3BCLG9EQUEyQjs7Ozs7O0lBSzNCLDZDQUE0Qzs7Ozs7SUFJNUMsMENBQWlCOzs7Ozs7O0lBTWpCLHVDQUFjOzs7Ozs7O0lBTWQsK0NBQWdEOzs7Ozs7SUFLaEQsa0RBQXlCOzs7Ozs7O0lBTXpCLGtEQUE4Qzs7Ozs7OztJQU05QyxpREFBcUM7Ozs7Ozs7SUFNckMsZ0RBQW9EOzs7Ozs7O0lBTXBELGtEQUFpQzs7Ozs7OztJQU1qQywrQ0FBb0Q7Ozs7Ozs7SUFNcEQsa0RBQWlDOzs7Ozs7O0lBTWpDLDRDQUF3Qzs7Ozs7QUFJMUMsdURBRUM7Ozs7QUFDRCxzREFhQzs7Ozs7O0lBVEMsK0NBQWE7Ozs7O0lBSWIsaURBQWU7Ozs7O0lBSWYsa0RBQWdCOzs7Ozs7QUFPbEIsNERBQW1HOzs7OztBQU1uRyw2REFBcUc7Ozs7QUFFckcsNkNBK0NDOzs7Ozs7O0lBMUNDLHFDQVFFOzs7OztJQUlGLDBDQTZCRTs7Ozs7O0FBT0osbURBQWlGOzs7O0FBR2pGLCtDQThCQzs7Ozs7O0lBMUJDLGtEQUF1Qjs7Ozs7SUFJdkIsa0RBQXVCOzs7OztJQUl2QiwrQ0FBb0I7Ozs7O0lBSXBCLDZDQVNFOzs7OztJQUlGLDBDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFl0ZEFwaUdlbmVyaWNPcHRzLCBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2UgfSBmcm9tICduZ3gteXRkLWFwaS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cyBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNPcHRzIHtcbiAgLyoqXG4gICAqIFRoZSBjaGFubmVsIElEIHRvIHNlYXJjaCB2aWRlb3MgZnJvbVxuICAgKi9cbiAgY2hhbm5lbElkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHRvIGEgcGFydGljdWxhciB0eXBlIG9mIGNoYW5uZWwuXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzOlxuICAgKiAtIGBhbnlgIC0gUmV0dXJuIGFsbCBjaGFubmVsc1xuICAgKiAtIGBzaG93YCAtIE9ubHkgcmV0dXJuIHNob3dzXG4gICAqL1xuICBjaGFubmVsVHlwZT86ICdhbnknIHwgJ3Nob3cnO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHRvIGJyb2FkY2FzdCBldmVudHNcbiAgICogTm90ZTogSWYgYSB2YWx1ZSBpcyBzcGVjaWZpZWQgZm9yIHRoaXMgcGFyYW1ldGVyLCB0aGUgcGFyYW1ldGVyIGB0eXBlYCdzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICovXG4gIGV2ZW50VHlwZT86ICdjb21wbGV0ZWQnIHwgJ2xpdmUnIHwgJ3VwY29taW5nJztcbiAgLyoqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjbG9jYXRpb24gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgbG9jYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I2xvY2F0aW9uUmFkaXVzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGxvY2F0aW9uUmFkaXVzPzogc3RyaW5nO1xuICAvKipcbiAgICogTWF4aW11bSByZXN1bHRzIGZvciB2aWRlbyBzZWFyY2hpbmdcbiAgICogQWxsb3dlZCB2YWx1ZXM6IDAgLSA1MFxuICAgKi9cbiAgbWF4UmVzdWx0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIHNwZWNpZnlpbmcgdGhlIG9yZGVyIG9mIHJlc291cmNlcyBpbiB0aGUgcmVzcG9uc2UuXG4gICAqIERlZmF1bHQgdmFsdWU6IGByZWxldmFuY2VgXG4gICAqL1xuICBvcmRlcj86ICdkYXRlJyB8ICdyYXRpbmcnIHwgJ3JlbGV2YW5jZScgfCAndGl0bGUnIHwgJ3ZpZGVvQ291bnQnIHwgJ3ZpZXdDb3VudCc7XG4gIC8qKlxuICAgKiBUaGUgcGFnZSB0b2tlbiB0byBnZXQgYSByZXNwb25zZSBmcm9tXG4gICAqL1xuICBwYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvclxuICAgKi9cbiAgcTogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNwdWJsaXNoZWRBZnRlciBmb3IgbW9yZSBpbmZvXG4gICAqIEFsbG93ZWQgdmFsdWVzOiBhbiBSRkMgMzMzOSBmb3JtYXR0ZWQgZGF0ZS10aW1lIHZhbHVlICgxOTcwLTAxLTAxVDAwOjAwOjAwWilcbiAgICovXG4gIHB1Ymxpc2hlZEFmdGVyPzogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNwdWJsaXNoZWRCZWZvcmUgZm9yIG1vcmUgaW5mb1xuICAgKiBBbGxvd2VkIHZhbHVlczogYW4gUkZDIDMzMzkgZm9ybWF0dGVkIGRhdGUtdGltZSB2YWx1ZSAoMTk3MC0wMS0wMVQwMDowMDowMFopXG4gICAqL1xuICBwdWJsaXNoZWRCZWZvcmU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcGFyYW1ldGVyIHRlbGxzIHRoZSBBUEkgdG8gcmV0dXJuIHNlYXJjaCByZXN1bHRzIGZvciB2aWRlb3MgdGhhdCBjYW4gYmUgdmlld2VkIGluIHRoZSBzcGVjaWZpYyBjb3VudHJ5LlxuICAgKiBBbGxvd2VkIHZhbHVlczpcbiAgICogYW4ge0BsaW5rIGh0dHA6Ly93d3cuaXNvLm9yZy9pc28vY291bnRyeV9jb2Rlcy9pc29fMzE2Nl9jb2RlX2xpc3RzL2NvdW50cnlfbmFtZXNfYW5kX2NvZGVfZWxlbWVudHMuaHRtfElTTyAzMTY2LTEgYWxwaGEtMn1cbiAgICogY291bnRyeSBjb2RlLlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcmVnaW9uQ29kZXxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcmVnaW9uQ29kZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoaXMgcGFyYW1ldGVyIHRlbGxzIHRoZSBBUEkgdG8gcmV0dXJuIHNlYXJjaCByZXN1bHRzIHRoYXQgYXJlIG1vc3QgcmVsZXZhbnQgdG8gdGhlIHNwZWNpZmllZCBsYW5ndWFnZS5cbiAgICogQWxsb3dlZCB2YWx1ZXM6XG4gICAqIGFuIHtAbGluayBodHRwOi8vd3d3LmxvYy5nb3Yvc3RhbmRhcmRzL2lzbzYzOS0yL3BocC9jb2RlX2xpc3QucGhwfElTTyA2MzktMSB0d28tbGV0dGVyIGxhbmd1YWdlIGNvZGV9XG4gICAqIEhvd2V2ZXIsIHlvdSBzaG91bGQgdXNlIHRoZSB2YWx1ZXMgemgtSGFucyBmb3Igc2ltcGxpZmllZCBDaGluZXNlIGFuZCB6aC1IYW50IGZvciB0cmFkaXRpb25hbCBDaGluZXNlLlxuICAgKiBOb3RlOiBSZXN1bHRzIGluIG90aGVyIGxhbmd1YWdlcyB3aWxsIHN0aWxsIGJlIHJldHVybmVkIGlmIHRoZXkgYXJlIGhpZ2hseSByZWxldmFudCB0byB0aGUgc2VhcmNoIHF1ZXJ5IHRlcm0uXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNyZWdpb25Db2RlfGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICByZWxldmFuY2VMYW5ndWFnZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzZWFyY2ggcmVzdWx0cyBzaG91bGQgaW5jbHVkZSByZXN0cmljdGVkIGNvbnRlbnQgYXMgd2VsbCBhcyBzdGFuZGFyZCBjb250ZW50LlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3Qjc2FmZVNlYXJjaHxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgc2FmZVNlYXJjaD86ICdtb2RlcmF0ZScgfCAnbm9uZScgfCAnc3RyaWN0JztcbiAgLyoqXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN0b3BpY0lkfGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB0b3BpY0lkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHF1ZXJ5IHRvIG9ubHkgcmV0dXJuIGNlcnRhaW4gcmVzb3VyY2VzXG4gICAqIE5vdGU6IFRoZSB2YWx1ZSBpcyBvZiBhIGNvbW1hLXNlcGVyYXRlZCBsaXN0IG9mIHJlc291cmNlIHR5cGVzLlxuICAgKiBEZWZhdWx0OiBgdmlkZW8sY2hhbm5lbCxwbGF5bGlzdGBcbiAgICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBBUEkgc2hvdWxkIGZpbHRlciB2aWRlbyBzZWFyY2ggcmVzdWx0cyBiYXNlZCBvbiB3aGV0aGVyIHRoZXkgaGF2ZSBjYXB0aW9ucy5cbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0NhcHRpb258ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvQ2FwdGlvbj86ICdhbnknIHwgJ2Nsb3NlZGNhcHRpb24nIHwgJ25vbmUnO1xuICAvKipcbiAgICogRmlsdGVycyB2aWRlbyBzZWFyY2ggcmVzdWx0cyBiYXNlZCBvbiB0aGVpciBjYXRlZ29yeS5cbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqL1xuICB2aWRlb0NhdGVnb3J5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZXN0cmljdHMgYSBzZWFyY2ggdG8gb25seSBpbmNsdWRlIGVpdGhlciBoaWdoIGRlZmluaXRpb24vc3RhbmRhcmQgZGVmaW5pdGlvbiB2aWRlb3MuXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9EZWZpbml0aW9ufGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0RlZmluaXRpb24/OiAnYW55JyB8ICdoaWdoJyB8ICdzdGFuZGFyZCc7XG4gIC8qKlxuICAgKiBSZXN0cmljdHMgYSBzZWFyY2ggdG8gb25seSByZXRyaWV2ZSAyRCBvciAzRCB2aWRlb3MuXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9EaW1lbnNpb258ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvRGltZW5zaW9uPzogJ2FueScgfCAnMmQnIHwgJzNkJztcbiAgLyoqXG4gICAqIEZpbHRlcnMgdmlkZW8gc2VhcmNoIHJlc3VsdHMgYmFzZWQgb24gdGhlaXIgZHVyYXRpb24uXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9EdXJhdGlvbnxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9EdXJhdGlvbj86ICdhbnknIHwgJ2xvbmcnIHwgJ21lZGl1bScgfCAnc2hvcnQnO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHRvIG9ubHkgdmlkZW9zIHRoYXQgY2FuIGJlIGVtYmVkZGVkIG9uIGEgd2VicGFnZS5cbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0VtYmVkZGFibGV8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvRW1iZWRkYWJsZT86ICdhbnknIHwgJ3RydWUnO1xuICAvKipcbiAgICogRmlsdGVycyB2aWRlb3MgdG8gb25seSBpbmNsdWRlIHZpZGVvcyB3aXRoIGEgcGFydGljdWxhciBsaWNlbnNlLlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvTGljZW5zZXxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9MaWNlbnNlPzogJ2FueScgfCAnY3JlYXRpdmVDb21tb24nIHwgJ3lvdXR1YmUnO1xuICAvKipcbiAgICogV2hldGhlciB0byByZXN0cmljdCBhIHNlYXJjaCB0byBvbmx5IHZpZGVvcyB0aGF0IGNhbiBiZSBwbGF5ZWQgb3V0c2lkZSBvZiB5b3V0dWJlLmNvbVxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvU3luZGljYXRlZHxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9TeW5kaWNhdGVkPzogJ2FueScgfCAndHJ1ZSc7XG4gIC8qKlxuICAgKiBSZXN0cmljdCBhIHNlYXJjaCB0byBhIHBhcnRpY3VsYXIgdHlwZSBvZiB2aWRlb3NcbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb1R5cGV8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvVHlwZT86ICdhbnknIHwgJ2VwaXNvZGUnIHwgJ21vdmllJztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaFJlc291cmNlVGh1bWJuYWlscyB7XG4gIFtrZXk6IHN0cmluZ106IE5neFl0ZEFwaVNlYXJjaFJlc291cmNlVGh1bWJuYWlsO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVRodW1ibmFpbCB7XG4gIC8qKlxuICAgKiBUaGUgVVJMIG9mIHRoZSB0aHVtYm5haWxcbiAgICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgdGh1bWJuYWlsXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHRodW1ibmFpbFxuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2VUaHVtYm5haWx9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0SXRlbVRodW1ibmFpbCBleHRlbmRzIE5neFl0ZEFwaVNlYXJjaFJlc291cmNlVGh1bWJuYWlsIHt9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVRodW1ibmFpbHN9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0SXRlbVRodW1ibmFpbHMgZXh0ZW5kcyBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVRodW1ibmFpbHMge31cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZSBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNSZXNvdXJjZSB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2JqZWN0IGNvbnRhaW5zIGluZm8gd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHVuaXF1ZWx5IGlkZW50aWZpbmcgdGhlIHJlc291cmNlXG4gICAqIFNlZSB0aGUgW2RvY3VtZW50YXRpb25de0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjaWR9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIGlkPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSByZXNvdXJjZVxuICAgICAqL1xuICAgIGtpbmQ/OiBzdHJpbmc7XG4gICAgdmlkZW9JZD86IHN0cmluZztcbiAgICBjaGFubmVsSWQ/OiBzdHJpbmc7XG4gICAgcGxheWxpc3RJZD86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIFRoZSBgc25pcHBldGAgb2JqZWN0IGNvbnRhaW5zIGluZm8gb24gdGhlIHNlYXJjaCByZXN1bHRcbiAgICovXG4gIHNuaXBwZXQ/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIGNyZWF0aW9uIGRhdGUgYW5kIHRpbWUgb2YgdGhlIHJlc291cmNlLiBUaGUgdmFsdWUgaXMgc3BlY2lmaWVkIGluIElTTyA4NjAxIGAoWVlZWS1NTS1ERFRoaDptbTpzcy5zWilgIGZvcm1hdC5cbiAgICAgKi9cbiAgICBwdWJsaXNoZWRBdD86IHN0cmluZyB8IGFueTtcbiAgICAvKipcbiAgICAgKiBUaGUgY2hhbm5lbCdzIElEXG4gICAgICovXG4gICAgY2hhbm5lbElkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgc2VhcmNoIHJlc3VsdFxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEEgZGVzY3JpcHRpb24gb2YgdGhlIHNlYXJjaCByZXN1bHRcbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3Qgb2YgdGhlIHRodW1ibmFpbHNcbiAgICAgKi9cbiAgICB0aHVtYm5haWxzPzogTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2VUaHVtYm5haWxzO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgY2hhbm5lbCB0aGF0IHB1Ymxpc2hlZCB0aGUgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBjaGFubmVsVGl0bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjc25pcHBldC5saXZlQnJvYWRjYXN0Q29udGVudCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbGl2ZUJyb2FkY2FzdENvbnRlbnQ/OiAndXBjb21pbmcnIHwgJ2xpdmUnIHwgJ25vbmUnO1xuICB9O1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpU2VhcmNoUmVzb3VyY2V9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0SXRlbSBleHRlbmRzIE5neFl0ZEFwaVNlYXJjaFJlc291cmNlIHt9XG5cbi8vIFJlc3VsdCBpbnRlcmZhY2VzXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2Uge1xuICAvKipcbiAgICogVGhlIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIG9mIHRoZSBgcGFnZVRva2VuYCBwYXJhbWV0ZXIgdG8gcmV0cmlldmUgdGhlIG5leHQgcGFnZSBpbiB0aGUgcmVzdWx0IHNldC5cbiAgICovXG4gIG5leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGBwYWdlVG9rZW5gIHBhcmFtZXRlciB0byByZXRyaWV2ZSB0aGUgcHJldmlvdXMgcGFnZSBpbiB0aGUgcmVzdWx0IHNldC5cbiAgICovXG4gIHByZXZQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcmVnaW9uIGNvZGUgdXNlZCBmb3IgdGhlIHNlYXJjaCBxdWVyeS5cbiAgICovXG4gIHJlZ2lvbkNvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQYWdpbmcgaW5mbyBhYm91dCB0aGUgcmVzdWx0XG4gICAqL1xuICBwYWdlSW5mbz86IHtcbiAgICAvKipcbiAgICAgKiBUb3RhbCByZXN1bHRzLiBOb3RlIHRoYXQgdGhlIG1heCB2YWx1ZSBpcyBgMTAwMDAwMGAgYW5kIGlzIGFwcHJveGltYXRlLlxuICAgICAqL1xuICAgIHRvdGFsUmVzdWx0cz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgcmVzdWx0cyBpbmNsdWRlZCBpbiByZXNwb25zZVxuICAgICAqL1xuICAgIHJlc3VsdHNQZXJQYWdlPzogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICogQW4gYXJyYXkgb2YgcmVzdWx0cyB0aGF0IG1hdGNoIHRoZSBjcml0ZXJpYVxuICAgKi9cbiAgaXRlbXM/OiBOZ3hZdGRBcGlTZWFyY2hSZXNvdXJjZVtdO1xufVxuIl19