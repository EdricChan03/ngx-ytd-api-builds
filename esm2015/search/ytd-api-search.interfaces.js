/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function NgxYtdApiSearchListOpts() { }
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
/**
 * @record
 */
export function NgxYtdApiSearchListResultItemThumbnails() { }
/**
 * @record
 */
export function NgxYtdApiSearchListResultItemThumbnail() { }
/**
 * The URL of the thumbnail
 * @type {?|undefined}
 */
NgxYtdApiSearchListResultItemThumbnail.prototype.url;
/**
 * The width of the thumbnail
 * @type {?|undefined}
 */
NgxYtdApiSearchListResultItemThumbnail.prototype.width;
/**
 * The height of the thumbnail
 * @type {?|undefined}
 */
NgxYtdApiSearchListResultItemThumbnail.prototype.height;
/**
 * @record
 */
export function NgxYtdApiSearchListResultItem() { }
/**
 * The id object contains info which can be used for uniquely identifing the resource
 * See the [documentation]{\@link https://developers.google.com/youtube/v3/docs/search#id} for more info
 * @type {?|undefined}
 */
NgxYtdApiSearchListResultItem.prototype.id;
/**
 * The `snippet` object contains info on the search result
 * @type {?|undefined}
 */
NgxYtdApiSearchListResultItem.prototype.snippet;
/**
 * @record
 */
export function NgxYtdApiSearchListResult() { }
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
NgxYtdApiSearchListResult.prototype.pagingInfo;
/**
 * An array of results that match the criteria
 * @type {?|undefined}
 */
NgxYtdApiSearchListResult.prototype.items;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFl0ZEFwaUdlbmVyaWNPcHRzLCBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IH0gZnJvbSAnbmd4LXl0ZC1hcGkvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljT3B0cyB7XG4gIC8qKlxuICAgKiBUaGUgY2hhbm5lbCBJRCB0byBzZWFyY2ggdmlkZW9zIGZyb21cbiAgICovXG4gIGNoYW5uZWxJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFJlc3RyaWN0cyBhIHNlYXJjaCB0byBhIHBhcnRpY3VsYXIgdHlwZSBvZiBjaGFubmVsLlxuICAgKiBBY2NlcHRhYmxlIHZhbHVlczpcbiAgICogLSBgYW55YCAtIFJldHVybiBhbGwgY2hhbm5lbHNcbiAgICogLSBgc2hvd2AgLSBPbmx5IHJldHVybiBzaG93c1xuICAgKi9cbiAgY2hhbm5lbFR5cGU/OiAnYW55JyB8ICdzaG93JztcbiAgLyoqXG4gICAqIFJlc3RyaWN0cyBhIHNlYXJjaCB0byBicm9hZGNhc3QgZXZlbnRzXG4gICAqIE5vdGU6IElmIGEgdmFsdWUgaXMgc3BlY2lmaWVkIGZvciB0aGlzIHBhcmFtZXRlciwgdGhlIHBhcmFtZXRlciBgdHlwZWAncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqL1xuICBldmVudFR5cGU/OiAnY29tcGxldGVkJyB8ICdsaXZlJyB8ICd1cGNvbWluZyc7XG4gIC8qKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I2xvY2F0aW9uIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNsb2NhdGlvblJhZGl1cyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBsb2NhdGlvblJhZGl1cz86IHN0cmluZztcbiAgLyoqXG4gICAqIE1heGltdW0gcmVzdWx0cyBmb3IgdmlkZW8gc2VhcmNoaW5nXG4gICAqIEFsbG93ZWQgdmFsdWVzOiAwIC0gNTBcbiAgICovXG4gIG1heFJlc3VsdHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBzcGVjaWZ5aW5nIHRoZSBvcmRlciBvZiByZXNvdXJjZXMgaW4gdGhlIHJlc3BvbnNlLlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgcmVsZXZhbmNlYFxuICAgKi9cbiAgb3JkZXI/OiAnZGF0ZScgfCAncmF0aW5nJyB8ICdyZWxldmFuY2UnIHwgJ3RpdGxlJyB8ICd2aWRlb0NvdW50JyB8ICd2aWV3Q291bnQnO1xuICAvKipcbiAgICogVGhlIHBhZ2UgdG9rZW4gdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbVxuICAgKi9cbiAgcGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3JcbiAgICovXG4gIHE6IHN0cmluZztcbiAgLyoqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcHVibGlzaGVkQWZ0ZXIgZm9yIG1vcmUgaW5mb1xuICAgKiBBbGxvd2VkIHZhbHVlczogYW4gUkZDIDMzMzkgZm9ybWF0dGVkIGRhdGUtdGltZSB2YWx1ZSAoMTk3MC0wMS0wMVQwMDowMDowMFopXG4gICAqL1xuICBwdWJsaXNoZWRBZnRlcj86IHN0cmluZztcbiAgLyoqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcHVibGlzaGVkQmVmb3JlIGZvciBtb3JlIGluZm9cbiAgICogQWxsb3dlZCB2YWx1ZXM6IGFuIFJGQyAzMzM5IGZvcm1hdHRlZCBkYXRlLXRpbWUgdmFsdWUgKDE5NzAtMDEtMDFUMDA6MDA6MDBaKVxuICAgKi9cbiAgcHVibGlzaGVkQmVmb3JlPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHBhcmFtZXRlciB0ZWxscyB0aGUgQVBJIHRvIHJldHVybiBzZWFyY2ggcmVzdWx0cyBmb3IgdmlkZW9zIHRoYXQgY2FuIGJlIHZpZXdlZCBpbiB0aGUgc3BlY2lmaWMgY291bnRyeS5cbiAgICogQWxsb3dlZCB2YWx1ZXM6XG4gICAqIGFuIHtAbGluayBodHRwOi8vd3d3Lmlzby5vcmcvaXNvL2NvdW50cnlfY29kZXMvaXNvXzMxNjZfY29kZV9saXN0cy9jb3VudHJ5X25hbWVzX2FuZF9jb2RlX2VsZW1lbnRzLmh0bXxJU08gMzE2Ni0xIGFscGhhLTJ9XG4gICAqIGNvdW50cnkgY29kZS5cbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3JlZ2lvbkNvZGV8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHJlZ2lvbkNvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGlzIHBhcmFtZXRlciB0ZWxscyB0aGUgQVBJIHRvIHJldHVybiBzZWFyY2ggcmVzdWx0cyB0aGF0IGFyZSBtb3N0IHJlbGV2YW50IHRvIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2UuXG4gICAqIEFsbG93ZWQgdmFsdWVzOlxuICAgKiBhbiB7QGxpbmsgaHR0cDovL3d3dy5sb2MuZ292L3N0YW5kYXJkcy9pc282MzktMi9waHAvY29kZV9saXN0LnBocHxJU08gNjM5LTEgdHdvLWxldHRlciBsYW5ndWFnZSBjb2RlfVxuICAgKiBIb3dldmVyLCB5b3Ugc2hvdWxkIHVzZSB0aGUgdmFsdWVzIHpoLUhhbnMgZm9yIHNpbXBsaWZpZWQgQ2hpbmVzZSBhbmQgemgtSGFudCBmb3IgdHJhZGl0aW9uYWwgQ2hpbmVzZS5cbiAgICogTm90ZTogUmVzdWx0cyBpbiBvdGhlciBsYW5ndWFnZXMgd2lsbCBzdGlsbCBiZSByZXR1cm5lZCBpZiB0aGV5IGFyZSBoaWdobHkgcmVsZXZhbnQgdG8gdGhlIHNlYXJjaCBxdWVyeSB0ZXJtLlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcmVnaW9uQ29kZXxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcmVsZXZhbmNlTGFuZ3VhZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc2VhcmNoIHJlc3VsdHMgc2hvdWxkIGluY2x1ZGUgcmVzdHJpY3RlZCBjb250ZW50IGFzIHdlbGwgYXMgc3RhbmRhcmQgY29udGVudC5cbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3NhZmVTZWFyY2h8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHNhZmVTZWFyY2g/OiAnbW9kZXJhdGUnIHwgJ25vbmUnIHwgJ3N0cmljdCc7XG4gIC8qKlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdG9waWNJZHxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdG9waWNJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFJlc3RyaWN0cyBhIHNlYXJjaCBxdWVyeSB0byBvbmx5IHJldHVybiBjZXJ0YWluIHJlc291cmNlc1xuICAgKiBOb3RlOiBUaGUgdmFsdWUgaXMgb2YgYSBjb21tYS1zZXBlcmF0ZWQgbGlzdCBvZiByZXNvdXJjZSB0eXBlcy5cbiAgICogRGVmYXVsdDogYHZpZGVvLGNoYW5uZWwscGxheWxpc3RgXG4gICAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKipcbiAgICogV2hldGhlciB0aGUgQVBJIHNob3VsZCBmaWx0ZXIgdmlkZW8gc2VhcmNoIHJlc3VsdHMgYmFzZWQgb24gd2hldGhlciB0aGV5IGhhdmUgY2FwdGlvbnMuXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9DYXB0aW9ufGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0NhcHRpb24/OiAnYW55JyB8ICdjbG9zZWRjYXB0aW9uJyB8ICdub25lJztcbiAgLyoqXG4gICAqIEZpbHRlcnMgdmlkZW8gc2VhcmNoIHJlc3VsdHMgYmFzZWQgb24gdGhlaXIgY2F0ZWdvcnkuXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKi9cbiAgdmlkZW9DYXRlZ29yeUlkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHRvIG9ubHkgaW5jbHVkZSBlaXRoZXIgaGlnaCBkZWZpbml0aW9uL3N0YW5kYXJkIGRlZmluaXRpb24gdmlkZW9zLlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvRGVmaW5pdGlvbnxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9EZWZpbml0aW9uPzogJ2FueScgfCAnaGlnaCcgfCAnc3RhbmRhcmQnO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHRvIG9ubHkgcmV0cmlldmUgMkQgb3IgM0QgdmlkZW9zLlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvRGltZW5zaW9ufGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0RpbWVuc2lvbj86ICdhbnknIHwgJzJkJyB8ICczZCc7XG4gIC8qKlxuICAgKiBGaWx0ZXJzIHZpZGVvIHNlYXJjaCByZXN1bHRzIGJhc2VkIG9uIHRoZWlyIGR1cmF0aW9uLlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvRHVyYXRpb258ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvRHVyYXRpb24/OiAnYW55JyB8ICdsb25nJyB8ICdtZWRpdW0nIHwgJ3Nob3J0JztcbiAgLyoqXG4gICAqIFJlc3RyaWN0cyBhIHNlYXJjaCB0byBvbmx5IHZpZGVvcyB0aGF0IGNhbiBiZSBlbWJlZGRlZCBvbiBhIHdlYnBhZ2UuXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9FbWJlZGRhYmxlfGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0VtYmVkZGFibGU/OiAnYW55JyB8ICd0cnVlJztcbiAgLyoqXG4gICAqIEZpbHRlcnMgdmlkZW9zIHRvIG9ubHkgaW5jbHVkZSB2aWRlb3Mgd2l0aCBhIHBhcnRpY3VsYXIgbGljZW5zZS5cbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0xpY2Vuc2V8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvTGljZW5zZT86ICdhbnknIHwgJ2NyZWF0aXZlQ29tbW9uJyB8ICd5b3V0dWJlJztcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVzdHJpY3QgYSBzZWFyY2ggdG8gb25seSB2aWRlb3MgdGhhdCBjYW4gYmUgcGxheWVkIG91dHNpZGUgb2YgeW91dHViZS5jb21cbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb1N5bmRpY2F0ZWR8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvU3luZGljYXRlZD86ICdhbnknIHwgJ3RydWUnO1xuICAvKipcbiAgICogUmVzdHJpY3QgYSBzZWFyY2ggdG8gYSBwYXJ0aWN1bGFyIHR5cGUgb2YgdmlkZW9zXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9UeXBlfGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb1R5cGU/OiAnYW55JyB8ICdlcGlzb2RlJyB8ICdtb3ZpZSc7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0SXRlbVRodW1ibmFpbHMge1xuICBba2V5OiBzdHJpbmddOiBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0SXRlbVRodW1ibmFpbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdEl0ZW1UaHVtYm5haWwge1xuICAvKipcbiAgICogVGhlIFVSTCBvZiB0aGUgdGh1bWJuYWlsXG4gICAqL1xuICB1cmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIHRodW1ibmFpbFxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSB0aHVtYm5haWxcbiAgICovXG4gIGhlaWdodD86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdEl0ZW0gZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IHtcbiAgLyoqXG4gICAqIFRoZSBpZCBvYmplY3QgY29udGFpbnMgaW5mbyB3aGljaCBjYW4gYmUgdXNlZCBmb3IgdW5pcXVlbHkgaWRlbnRpZmluZyB0aGUgcmVzb3VyY2VcbiAgICogU2VlIHRoZSBbZG9jdW1lbnRhdGlvbl17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNpZH0gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaWQ/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIHJlc291cmNlXG4gICAgICovXG4gICAga2luZD86IHN0cmluZztcbiAgICB2aWRlb0lkPzogc3RyaW5nO1xuICAgIGNoYW5uZWxJZD86IHN0cmluZztcbiAgICBwbGF5bGlzdElkPzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogVGhlIGBzbmlwcGV0YCBvYmplY3QgY29udGFpbnMgaW5mbyBvbiB0aGUgc2VhcmNoIHJlc3VsdFxuICAgKi9cbiAgc25pcHBldD86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY3JlYXRpb24gZGF0ZSBhbmQgdGltZSBvZiB0aGUgcmVzb3VyY2UuIFRoZSB2YWx1ZSBpcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDEgYChZWVlZLU1NLUREVGhoOm1tOnNzLnNaKWAgZm9ybWF0LlxuICAgICAqL1xuICAgIHB1Ymxpc2hlZEF0Pzogc3RyaW5nIHwgYW55O1xuICAgIC8qKlxuICAgICAqIFRoZSBjaGFubmVsJ3MgSURcbiAgICAgKi9cbiAgICBjaGFubmVsSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSBzZWFyY2ggcmVzdWx0XG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQSBkZXNjcmlwdGlvbiBvZiB0aGUgc2VhcmNoIHJlc3VsdFxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCBvZiB0aGUgdGh1bWJuYWlsc1xuICAgICAqL1xuICAgIHRodW1ibmFpbHM/OiBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0SXRlbVRodW1ibmFpbHM7XG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSBjaGFubmVsIHRoYXQgcHVibGlzaGVkIHRoZSByZXNvdXJjZVxuICAgICAqL1xuICAgIGNoYW5uZWxUaXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNzbmlwcGV0LmxpdmVCcm9hZGNhc3RDb250ZW50IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBsaXZlQnJvYWRjYXN0Q29udGVudD86ICd1cGNvbWluZycgfCAnbGl2ZScgfCAnbm9uZSc7XG4gIH07XG59XG5cbi8vIFJlc3VsdCBpbnRlcmZhY2VzXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IHtcbiAgLyoqXG4gICAqIFRoZSB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBvZiB0aGUgYHBhZ2VUb2tlbmAgcGFyYW1ldGVyIHRvIHJldHJpZXZlIHRoZSBuZXh0IHBhZ2UgaW4gdGhlIHJlc3VsdCBzZXQuXG4gICAqL1xuICBuZXh0UGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIG9mIHRoZSBgcGFnZVRva2VuYCBwYXJhbWV0ZXIgdG8gcmV0cmlldmUgdGhlIHByZXZpb3VzIHBhZ2UgaW4gdGhlIHJlc3VsdCBzZXQuXG4gICAqL1xuICBwcmV2UGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHJlZ2lvbiBjb2RlIHVzZWQgZm9yIHRoZSBzZWFyY2ggcXVlcnkuXG4gICAqL1xuICByZWdpb25Db2RlPzogc3RyaW5nO1xuICAvKipcbiAgICogUGFnaW5nIGluZm8gYWJvdXQgdGhlIHJlc3VsdFxuICAgKi9cbiAgcGFnaW5nSW5mbz86IHtcbiAgICAvKipcbiAgICAgKiBUb3RhbCByZXN1bHRzLiBOb3RlIHRoYXQgdGhlIG1heCB2YWx1ZSBpcyBgMTAwMDAwMGAgYW5kIGlzIGFwcHJveGltYXRlLlxuICAgICAqL1xuICAgIHRvdGFsUmVzdWx0cz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgcmVzdWx0cyBpbmNsdWRlZCBpbiByZXNwb25zZVxuICAgICAqL1xuICAgIHJlc3VsdHNQZXJQYWdlPzogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICogQW4gYXJyYXkgb2YgcmVzdWx0cyB0aGF0IG1hdGNoIHRoZSBjcml0ZXJpYVxuICAgKi9cbiAgaXRlbXM/OiBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0SXRlbVtdO1xufVxuIl19