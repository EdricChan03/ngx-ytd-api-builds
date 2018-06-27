/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function NgxYtdApiSearchOpts() { }
function NgxYtdApiSearchOpts_tsickle_Closure_declarations() {
    /**
     * The channel ID to search videos from
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.channelId;
    /**
     * Restricts a search to a particular type of channel.
     * Acceptable values:
     * - `any` - Return all channels
     * - `show` - Only return shows
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.channelType;
    /**
     * Restricts a search to broadcast events
     * Note: If a value is specified for this parameter, the parameter `type`'s value must be set to `video`
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.eventType;
    /**
     * See https://developers.google.com/youtube/v3/docs/search/list#location for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.location;
    /**
     * See https://developers.google.com/youtube/v3/docs/search/list#locationRadius for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.locationRadius;
    /**
     * Maximum results for video searching
     * Allowed values: 0 - 50
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.maxResults;
    /**
     * Used for specifying the order of resources in the response.
     * Default value: `relevance`
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.order;
    /**
     * The page token to get a response from
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.pageToken;
    /**
     * See https://developers.google.com/youtube/v3/docs/search/list#publishedAfter for more info
     * Allowed values: an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.publishedAfter;
    /**
     * See https://developers.google.com/youtube/v3/docs/search/list#publishedBefore for more info
     * Allowed values: an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z)
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.publishedBefore;
    /**
     * The parameter tells the API to return search results for videos that can be viewed in the specific country.
     * Allowed values:
     * an {\@link http://www.iso.org/iso/country_codes/iso_3166_code_lists/country_names_and_code_elements.htm|ISO 3166-1 alpha-2} country code.
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#regionCode|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.regionCode;
    /**
     * This parameter tells the API to return search results that are most relevant to the specified language.
     * Allowed values:
     * an {\@link http://www.loc.gov/standards/iso639-2/php/code_list.php|ISO 639-1 two-letter language code}
     * However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese.
     * Note: Results in other languages will still be returned if they are highly relevant to the search query term.
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#regionCode|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.relevanceLanguage;
    /**
     * Indicates whether the search results should include restriected content as well as standard content.
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#safeSearch|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.safeSearch;
    /**
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#topicId|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.topicId;
    /**
     * Restricts a search query to only return certain resources
     * Note: The value is of a comma-seperated list of resource types.
     * Default: `video,channel,playlist`
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.type;
    /**
     * Whether the API should filter video search results based on whether they have captions.
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoCaption|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.videoCaption;
    /**
     * Filters video search results based on their category.
     * Note: the `type` parameter's value must be set to `video`
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.videoCategoryId;
    /**
     * Restricts a search to only include either high definition/standard definition videos.
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoDefinition|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.videoDefinition;
    /**
     * Restricts a search to only retrieve 2D or 3D videos.
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoDimension|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.videoDimension;
    /**
     * Filters video search results based on their duration.
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoDuration|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.videoDuration;
    /**
     * Restricts a search to only videos that can be embedded on a webpage.
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoEmbeddable|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.videoEmbeddable;
    /**
     * Filters videos to only include videos with a particular license.
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoLicense|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.videoLicense;
    /**
     * Whether to restrict a search to only videos that can be played outside of youtube.com
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoSyndicated|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.videoSyndicated;
    /**
     * Restrict a search to a particulat type of videos
     * Note: the `type` parameter's value must be set to `video`
     * See the {\@link https://developers.google.com/youtube/v3/docs/search/list#videoType|developer docs} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.videoType;
}
/**
 * @record
 */
export function NgxYtdApiSearchResultItemThumbnails() { }
function NgxYtdApiSearchResultItemThumbnails_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [key: string]: NgxYtdApiSearchResultItemThumbnail;
    */
}
/**
 * @record
 */
export function NgxYtdApiSearchResultItemThumbnail() { }
function NgxYtdApiSearchResultItemThumbnail_tsickle_Closure_declarations() {
    /**
     * The URL of the thumbnail
     * @type {?|undefined}
     */
    NgxYtdApiSearchResultItemThumbnail.prototype.url;
    /**
     * The width of the thumbnail
     * @type {?|undefined}
     */
    NgxYtdApiSearchResultItemThumbnail.prototype.width;
    /**
     * The height of the thumbnail
     * @type {?|undefined}
     */
    NgxYtdApiSearchResultItemThumbnail.prototype.height;
}
/**
 * @record
 */
export function NgxYtdApiSearchResultItem() { }
function NgxYtdApiSearchResultItem_tsickle_Closure_declarations() {
    /**
     * The id object contains info which can be used for uniquely identifing the resource
     * See the [documentation]{\@link https://developers.google.com/youtube/v3/docs/search#id} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchResultItem.prototype.id;
    /**
     * The `snippet` object contains info on the search result
     * @type {?|undefined}
     */
    NgxYtdApiSearchResultItem.prototype.snippet;
}
/**
 * @record
 */
export function NgxYtdApiSearchResult() { }
function NgxYtdApiSearchResult_tsickle_Closure_declarations() {
    /**
     * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
     * @type {?|undefined}
     */
    NgxYtdApiSearchResult.prototype.nextPageToken;
    /**
     * The token that can be used as the value of the `pageToken` parameter to retrieve the previous page in the result set.
     * @type {?|undefined}
     */
    NgxYtdApiSearchResult.prototype.prevPageToken;
    /**
     * The region code used for the search query.
     * @type {?|undefined}
     */
    NgxYtdApiSearchResult.prototype.regionCode;
    /**
     * Paging info about the result
     * @type {?|undefined}
     */
    NgxYtdApiSearchResult.prototype.pagingInfo;
    /**
     * An array of results that match the criteria
     * @type {?|undefined}
     */
    NgxYtdApiSearchResult.prototype.items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFl0ZEFwaUdlbmVyaWNPcHRzLCBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IH0gZnJvbSAnLi4veXRkLWFwaS5pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hPcHRzIGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY09wdHMge1xuXHQvKipcblx0ICogVGhlIGNoYW5uZWwgSUQgdG8gc2VhcmNoIHZpZGVvcyBmcm9tXG5cdCAqL1xuXHRjaGFubmVsSWQ/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBSZXN0cmljdHMgYSBzZWFyY2ggdG8gYSBwYXJ0aWN1bGFyIHR5cGUgb2YgY2hhbm5lbC5cblx0ICogQWNjZXB0YWJsZSB2YWx1ZXM6XG5cdCAqIC0gYGFueWAgLSBSZXR1cm4gYWxsIGNoYW5uZWxzXG5cdCAqIC0gYHNob3dgIC0gT25seSByZXR1cm4gc2hvd3Ncblx0ICovXG5cdGNoYW5uZWxUeXBlPzogJ2FueScgfCAnc2hvdyc7XG5cdC8qKlxuXHQgKiBSZXN0cmljdHMgYSBzZWFyY2ggdG8gYnJvYWRjYXN0IGV2ZW50c1xuXHQgKiBOb3RlOiBJZiBhIHZhbHVlIGlzIHNwZWNpZmllZCBmb3IgdGhpcyBwYXJhbWV0ZXIsIHRoZSBwYXJhbWV0ZXIgYHR5cGVgJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuXHQgKi9cblx0ZXZlbnRUeXBlPzogJ2NvbXBsZXRlZCcgfCAnbGl2ZScgfCAndXBjb21pbmcnO1xuXHQvKipcblx0ICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNsb2NhdGlvbiBmb3IgbW9yZSBpbmZvXG5cdCAqL1xuXHRsb2NhdGlvbj86IHN0cmluZztcblx0LyoqXG5cdCAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjbG9jYXRpb25SYWRpdXMgZm9yIG1vcmUgaW5mb1xuXHQgKi9cblx0bG9jYXRpb25SYWRpdXM/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBNYXhpbXVtIHJlc3VsdHMgZm9yIHZpZGVvIHNlYXJjaGluZ1xuXHQgKiBBbGxvd2VkIHZhbHVlczogMCAtIDUwXG5cdCAqL1xuXHRtYXhSZXN1bHRzPzogbnVtYmVyO1xuXHQvKipcblx0ICogVXNlZCBmb3Igc3BlY2lmeWluZyB0aGUgb3JkZXIgb2YgcmVzb3VyY2VzIGluIHRoZSByZXNwb25zZS5cblx0ICogRGVmYXVsdCB2YWx1ZTogYHJlbGV2YW5jZWBcblx0ICovXG5cdG9yZGVyPzogJ2RhdGUnIHwgJ3JhdGluZycgfCAncmVsZXZhbmNlJyB8ICd0aXRsZScgfCAndmlkZW9Db3VudCcgfCAndmlld0NvdW50Jztcblx0LyoqXG5cdCAqIFRoZSBwYWdlIHRva2VuIHRvIGdldCBhIHJlc3BvbnNlIGZyb21cblx0ICovXG5cdHBhZ2VUb2tlbj86IHN0cmluZztcblx0LyoqXG5cdCAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcHVibGlzaGVkQWZ0ZXIgZm9yIG1vcmUgaW5mb1xuXHQgKiBBbGxvd2VkIHZhbHVlczogYW4gUkZDIDMzMzkgZm9ybWF0dGVkIGRhdGUtdGltZSB2YWx1ZSAoMTk3MC0wMS0wMVQwMDowMDowMFopXG5cdCAqL1xuXHRwdWJsaXNoZWRBZnRlcj86IHN0cmluZztcblx0LyoqXG5cdCAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcHVibGlzaGVkQmVmb3JlIGZvciBtb3JlIGluZm9cblx0ICogQWxsb3dlZCB2YWx1ZXM6IGFuIFJGQyAzMzM5IGZvcm1hdHRlZCBkYXRlLXRpbWUgdmFsdWUgKDE5NzAtMDEtMDFUMDA6MDA6MDBaKVxuXHQgKi9cblx0cHVibGlzaGVkQmVmb3JlPzogc3RyaW5nO1xuXHQvKipcblx0ICogVGhlIHBhcmFtZXRlciB0ZWxscyB0aGUgQVBJIHRvIHJldHVybiBzZWFyY2ggcmVzdWx0cyBmb3IgdmlkZW9zIHRoYXQgY2FuIGJlIHZpZXdlZCBpbiB0aGUgc3BlY2lmaWMgY291bnRyeS5cblx0ICogQWxsb3dlZCB2YWx1ZXM6XG5cdCAqIGFuIHtAbGluayBodHRwOi8vd3d3Lmlzby5vcmcvaXNvL2NvdW50cnlfY29kZXMvaXNvXzMxNjZfY29kZV9saXN0cy9jb3VudHJ5X25hbWVzX2FuZF9jb2RlX2VsZW1lbnRzLmh0bXxJU08gMzE2Ni0xIGFscGhhLTJ9IGNvdW50cnkgY29kZS5cblx0ICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3JlZ2lvbkNvZGV8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cblx0ICovXG5cdHJlZ2lvbkNvZGU/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBUaGlzIHBhcmFtZXRlciB0ZWxscyB0aGUgQVBJIHRvIHJldHVybiBzZWFyY2ggcmVzdWx0cyB0aGF0IGFyZSBtb3N0IHJlbGV2YW50IHRvIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2UuXG5cdCAqIEFsbG93ZWQgdmFsdWVzOlxuXHQgKiBhbiB7QGxpbmsgaHR0cDovL3d3dy5sb2MuZ292L3N0YW5kYXJkcy9pc282MzktMi9waHAvY29kZV9saXN0LnBocHxJU08gNjM5LTEgdHdvLWxldHRlciBsYW5ndWFnZSBjb2RlfVxuXHQgKiBIb3dldmVyLCB5b3Ugc2hvdWxkIHVzZSB0aGUgdmFsdWVzIHpoLUhhbnMgZm9yIHNpbXBsaWZpZWQgQ2hpbmVzZSBhbmQgemgtSGFudCBmb3IgdHJhZGl0aW9uYWwgQ2hpbmVzZS5cblx0ICogTm90ZTogUmVzdWx0cyBpbiBvdGhlciBsYW5ndWFnZXMgd2lsbCBzdGlsbCBiZSByZXR1cm5lZCBpZiB0aGV5IGFyZSBoaWdobHkgcmVsZXZhbnQgdG8gdGhlIHNlYXJjaCBxdWVyeSB0ZXJtLlxuXHQgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcmVnaW9uQ29kZXxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuXHQgKi9cblx0cmVsZXZhbmNlTGFuZ3VhZ2U/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc2VhcmNoIHJlc3VsdHMgc2hvdWxkIGluY2x1ZGUgcmVzdHJpZWN0ZWQgY29udGVudCBhcyB3ZWxsIGFzIHN0YW5kYXJkIGNvbnRlbnQuXG5cdCAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNzYWZlU2VhcmNofGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG5cdCAqL1xuXHRzYWZlU2VhcmNoPzogJ21vZGVyYXRlJyB8ICdub25lJyB8ICdzdHJpY3QnO1xuXHQvKipcblx0ICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3RvcGljSWR8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cblx0ICovXG5cdHRvcGljSWQ/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBSZXN0cmljdHMgYSBzZWFyY2ggcXVlcnkgdG8gb25seSByZXR1cm4gY2VydGFpbiByZXNvdXJjZXNcblx0ICogTm90ZTogVGhlIHZhbHVlIGlzIG9mIGEgY29tbWEtc2VwZXJhdGVkIGxpc3Qgb2YgcmVzb3VyY2UgdHlwZXMuXG5cdCAqIERlZmF1bHQ6IGB2aWRlbyxjaGFubmVsLHBsYXlsaXN0YFxuXHQgKi9cblx0dHlwZT86IHN0cmluZztcblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIEFQSSBzaG91bGQgZmlsdGVyIHZpZGVvIHNlYXJjaCByZXN1bHRzIGJhc2VkIG9uIHdoZXRoZXIgdGhleSBoYXZlIGNhcHRpb25zLlxuXHQgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2Bcblx0ICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvQ2FwdGlvbnxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuXHQgKi9cblx0dmlkZW9DYXB0aW9uPzogJ2FueScgfCAnY2xvc2VkY2FwdGlvbicgfCAnbm9uZSc7XG5cdC8qKlxuXHQgKiBGaWx0ZXJzIHZpZGVvIHNlYXJjaCByZXN1bHRzIGJhc2VkIG9uIHRoZWlyIGNhdGVnb3J5LlxuXHQgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2Bcblx0ICovXG5cdHZpZGVvQ2F0ZWdvcnlJZD86IHN0cmluZztcblx0LyoqXG5cdCAqIFJlc3RyaWN0cyBhIHNlYXJjaCB0byBvbmx5IGluY2x1ZGUgZWl0aGVyIGhpZ2ggZGVmaW5pdGlvbi9zdGFuZGFyZCBkZWZpbml0aW9uIHZpZGVvcy5cblx0ICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG5cdCAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0RlZmluaXRpb258ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cblx0ICovXG5cdHZpZGVvRGVmaW5pdGlvbj86ICdhbnknIHwgJ2hpZ2gnIHwgJ3N0YW5kYXJkJztcblx0LyoqXG5cdCAqIFJlc3RyaWN0cyBhIHNlYXJjaCB0byBvbmx5IHJldHJpZXZlIDJEIG9yIDNEIHZpZGVvcy5cblx0ICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG5cdCAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0RpbWVuc2lvbnxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuXHQgKi9cblx0dmlkZW9EaW1lbnNpb24/OiAnYW55JyB8ICcyZCcgfCAnM2QnO1xuXHQvKipcblx0ICogRmlsdGVycyB2aWRlbyBzZWFyY2ggcmVzdWx0cyBiYXNlZCBvbiB0aGVpciBkdXJhdGlvbi5cblx0ICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG5cdCAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0R1cmF0aW9ufGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG5cdCAqL1xuXHR2aWRlb0R1cmF0aW9uPzogJ2FueScgfCAnbG9uZycgfCAnbWVkaXVtJyB8ICdzaG9ydCc7XG5cdC8qKlxuXHQgKiBSZXN0cmljdHMgYSBzZWFyY2ggdG8gb25seSB2aWRlb3MgdGhhdCBjYW4gYmUgZW1iZWRkZWQgb24gYSB3ZWJwYWdlLlxuXHQgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2Bcblx0ICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvRW1iZWRkYWJsZXxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuXHQgKi9cblx0dmlkZW9FbWJlZGRhYmxlPzogJ2FueScgfCAndHJ1ZSc7XG5cdC8qKlxuXHQgKiBGaWx0ZXJzIHZpZGVvcyB0byBvbmx5IGluY2x1ZGUgdmlkZW9zIHdpdGggYSBwYXJ0aWN1bGFyIGxpY2Vuc2UuXG5cdCAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuXHQgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9MaWNlbnNlfGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG5cdCAqL1xuXHR2aWRlb0xpY2Vuc2U/OiAnYW55JyB8ICdjcmVhdGl2ZUNvbW1vbicgfCAneW91dHViZSc7XG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRvIHJlc3RyaWN0IGEgc2VhcmNoIHRvIG9ubHkgdmlkZW9zIHRoYXQgY2FuIGJlIHBsYXllZCBvdXRzaWRlIG9mIHlvdXR1YmUuY29tXG5cdCAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuXHQgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9TeW5kaWNhdGVkfGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG5cdCAqL1xuXHR2aWRlb1N5bmRpY2F0ZWQ/OiAnYW55JyB8ICd0cnVlJztcblx0LyoqXG5cdCAqIFJlc3RyaWN0IGEgc2VhcmNoIHRvIGEgcGFydGljdWxhdCB0eXBlIG9mIHZpZGVvc1xuXHQgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2Bcblx0ICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvVHlwZXxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuXHQgKi9cblx0dmlkZW9UeXBlPzogJ2FueScgfCAnZXBpc29kZScgfCAnbW92aWUnO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoUmVzdWx0SXRlbVRodW1ibmFpbHMge1xuXHRba2V5OiBzdHJpbmddOiBOZ3hZdGRBcGlTZWFyY2hSZXN1bHRJdGVtVGh1bWJuYWlsO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hSZXN1bHRJdGVtVGh1bWJuYWlsIHtcblx0LyoqXG5cdCAqIFRoZSBVUkwgb2YgdGhlIHRodW1ibmFpbFxuXHQgKi9cblx0dXJsPzogc3RyaW5nO1xuXHQvKipcblx0ICogVGhlIHdpZHRoIG9mIHRoZSB0aHVtYm5haWxcblx0ICovXG5cdHdpZHRoPzogbnVtYmVyO1xuXHQvKipcblx0ICogVGhlIGhlaWdodCBvZiB0aGUgdGh1bWJuYWlsXG5cdCAqL1xuXHRoZWlnaHQ/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaFJlc3VsdEl0ZW0gZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IHtcblx0LyoqXG5cdCAqIFRoZSBpZCBvYmplY3QgY29udGFpbnMgaW5mbyB3aGljaCBjYW4gYmUgdXNlZCBmb3IgdW5pcXVlbHkgaWRlbnRpZmluZyB0aGUgcmVzb3VyY2Vcblx0ICogU2VlIHRoZSBbZG9jdW1lbnRhdGlvbl17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNpZH0gZm9yIG1vcmUgaW5mb1xuXHQgKi9cblx0aWQ/OiB7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHR5cGUgb2YgdGhlIHJlc291cmNlXG5cdFx0ICovXG5cdFx0a2luZD86IHN0cmluZztcblx0XHR2aWRlb0lkPzogc3RyaW5nO1xuXHRcdGNoYW5uZWxJZD86IHN0cmluZztcblx0XHRwbGF5bGlzdElkPzogc3RyaW5nO1xuXHR9O1xuXHQvKipcblx0ICogVGhlIGBzbmlwcGV0YCBvYmplY3QgY29udGFpbnMgaW5mbyBvbiB0aGUgc2VhcmNoIHJlc3VsdFxuXHQgKi9cblx0c25pcHBldD86IHtcblx0XHQvKipcblx0XHQgKiBUaGUgY3JlYXRpb24gZGF0ZSBhbmQgdGltZSBvZiB0aGUgcmVzb3VyY2UuIFRoZSB2YWx1ZSBpcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDEgYChZWVlZLU1NLUREVGhoOm1tOnNzLnNaKWAgZm9ybWF0LlxuXHRcdCAqL1xuXHRcdHB1Ymxpc2hlZEF0Pzogc3RyaW5nIHwgYW55O1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBjaGFubmVsJ3MgSURcblx0XHQgKi9cblx0XHRjaGFubmVsSWQ/OiBzdHJpbmc7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHRpdGxlIG9mIHRoZSBzZWFyY2ggcmVzdWx0XG5cdFx0ICovXG5cdFx0dGl0bGU/OiBzdHJpbmc7XG5cdFx0LyoqXG5cdFx0ICogQSBkZXNjcmlwdGlvbiBvZiB0aGUgc2VhcmNoIHJlc3VsdFxuXHRcdCAqL1xuXHRcdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRcdC8qKlxuXHRcdCAqIEFuIG9iamVjdCBvZiB0aGUgdGh1bWJuYWlsc1xuXHRcdCAqL1xuXHRcdHRodW1ibmFpbHM/OiBOZ3hZdGRBcGlTZWFyY2hSZXN1bHRJdGVtVGh1bWJuYWlscztcblx0XHQvKipcblx0XHQgKiBUaGUgdGl0bGUgb2YgdGhlIGNoYW5uZWwgdGhhdCBwdWJsaXNoZWQgdGhlIHJlc291cmNlXG5cdFx0ICovXG5cdFx0Y2hhbm5lbFRpdGxlPzogc3RyaW5nO1xuXHRcdC8qKlxuXHRcdCAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoI3NuaXBwZXQubGl2ZUJyb2FkY2FzdENvbnRlbnQgZm9yIG1vcmUgaW5mb1xuXHRcdCAqL1xuXHRcdGxpdmVCcm9hZGNhc3RDb250ZW50PzogJ3VwY29taW5nJyB8ICdsaXZlJyB8ICdub25lJztcblx0fTtcbn1cblxuLy8gUmVzdWx0IGludGVyZmFjZXNcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoUmVzdWx0IGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY1Jlc3VsdCB7XG5cdC8qKlxuXHQgKiBUaGUgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGBwYWdlVG9rZW5gIHBhcmFtZXRlciB0byByZXRyaWV2ZSB0aGUgbmV4dCBwYWdlIGluIHRoZSByZXN1bHQgc2V0LlxuXHQgKi9cblx0bmV4dFBhZ2VUb2tlbj86IHN0cmluZztcblx0LyoqXG5cdCAqIFRoZSB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBvZiB0aGUgYHBhZ2VUb2tlbmAgcGFyYW1ldGVyIHRvIHJldHJpZXZlIHRoZSBwcmV2aW91cyBwYWdlIGluIHRoZSByZXN1bHQgc2V0LlxuXHQgKi9cblx0cHJldlBhZ2VUb2tlbj86IHN0cmluZztcblx0LyoqXG5cdCAqIFRoZSByZWdpb24gY29kZSB1c2VkIGZvciB0aGUgc2VhcmNoIHF1ZXJ5LlxuXHQgKi9cblx0cmVnaW9uQ29kZT86IHN0cmluZztcblx0LyoqXG5cdCAqIFBhZ2luZyBpbmZvIGFib3V0IHRoZSByZXN1bHRcblx0ICovXG5cdHBhZ2luZ0luZm8/OiB7XG5cdFx0LyoqXG5cdFx0ICogVG90YWwgcmVzdWx0cy4gTm90ZSB0aGF0IHRoZSBtYXggdmFsdWUgaXMgYDEwMDAwMDBgIGFuZCBpcyBhcHByb3hpbWF0ZS5cblx0XHQgKi9cblx0XHR0b3RhbFJlc3VsdHM/OiBudW1iZXI7XG5cdFx0LyoqXG5cdFx0ICogTnVtYmVyIG9mIHJlc3VsdHMgaW5jbHVkZWQgaW4gcmVzcG9uc2Vcblx0XHQgKi9cblx0XHRyZXN1bHRzUGVyUGFnZT86IG51bWJlcjtcblx0fTtcblx0LyoqXG5cdCAqIEFuIGFycmF5IG9mIHJlc3VsdHMgdGhhdCBtYXRjaCB0aGUgY3JpdGVyaWFcblx0ICovXG5cdGl0ZW1zPzogTmd4WXRkQXBpU2VhcmNoUmVzdWx0SXRlbVtdO1xufVxuIl19