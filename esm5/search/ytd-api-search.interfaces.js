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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFl0ZEFwaUdlbmVyaWNPcHRzLCBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IH0gZnJvbSAnbmd4LXl0ZC1hcGkvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljT3B0cyB7XG4gIC8qKlxuICAgKiBUaGUgY2hhbm5lbCBJRCB0byBzZWFyY2ggdmlkZW9zIGZyb21cbiAgICovXG4gIGNoYW5uZWxJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFJlc3RyaWN0cyBhIHNlYXJjaCB0byBhIHBhcnRpY3VsYXIgdHlwZSBvZiBjaGFubmVsLlxuICAgKiBBY2NlcHRhYmxlIHZhbHVlczpcbiAgICogLSBgYW55YCAtIFJldHVybiBhbGwgY2hhbm5lbHNcbiAgICogLSBgc2hvd2AgLSBPbmx5IHJldHVybiBzaG93c1xuICAgKi9cbiAgY2hhbm5lbFR5cGU/OiAnYW55JyB8ICdzaG93JztcbiAgLyoqXG4gICAqIFJlc3RyaWN0cyBhIHNlYXJjaCB0byBicm9hZGNhc3QgZXZlbnRzXG4gICAqIE5vdGU6IElmIGEgdmFsdWUgaXMgc3BlY2lmaWVkIGZvciB0aGlzIHBhcmFtZXRlciwgdGhlIHBhcmFtZXRlciBgdHlwZWAncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqL1xuICBldmVudFR5cGU/OiAnY29tcGxldGVkJyB8ICdsaXZlJyB8ICd1cGNvbWluZyc7XG4gIC8qKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I2xvY2F0aW9uIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNsb2NhdGlvblJhZGl1cyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBsb2NhdGlvblJhZGl1cz86IHN0cmluZztcbiAgLyoqXG4gICAqIE1heGltdW0gcmVzdWx0cyBmb3IgdmlkZW8gc2VhcmNoaW5nXG4gICAqIEFsbG93ZWQgdmFsdWVzOiAwIC0gNTBcbiAgICovXG4gIG1heFJlc3VsdHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBzcGVjaWZ5aW5nIHRoZSBvcmRlciBvZiByZXNvdXJjZXMgaW4gdGhlIHJlc3BvbnNlLlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgcmVsZXZhbmNlYFxuICAgKi9cbiAgb3JkZXI/OiAnZGF0ZScgfCAncmF0aW5nJyB8ICdyZWxldmFuY2UnIHwgJ3RpdGxlJyB8ICd2aWRlb0NvdW50JyB8ICd2aWV3Q291bnQnO1xuICAvKipcbiAgICogVGhlIHBhZ2UgdG9rZW4gdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbVxuICAgKi9cbiAgcGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNwdWJsaXNoZWRBZnRlciBmb3IgbW9yZSBpbmZvXG4gICAqIEFsbG93ZWQgdmFsdWVzOiBhbiBSRkMgMzMzOSBmb3JtYXR0ZWQgZGF0ZS10aW1lIHZhbHVlICgxOTcwLTAxLTAxVDAwOjAwOjAwWilcbiAgICovXG4gIHB1Ymxpc2hlZEFmdGVyPzogc3RyaW5nO1xuICAvKipcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNwdWJsaXNoZWRCZWZvcmUgZm9yIG1vcmUgaW5mb1xuICAgKiBBbGxvd2VkIHZhbHVlczogYW4gUkZDIDMzMzkgZm9ybWF0dGVkIGRhdGUtdGltZSB2YWx1ZSAoMTk3MC0wMS0wMVQwMDowMDowMFopXG4gICAqL1xuICBwdWJsaXNoZWRCZWZvcmU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcGFyYW1ldGVyIHRlbGxzIHRoZSBBUEkgdG8gcmV0dXJuIHNlYXJjaCByZXN1bHRzIGZvciB2aWRlb3MgdGhhdCBjYW4gYmUgdmlld2VkIGluIHRoZSBzcGVjaWZpYyBjb3VudHJ5LlxuICAgKiBBbGxvd2VkIHZhbHVlczpcbiAgICogYW4ge0BsaW5rIGh0dHA6Ly93d3cuaXNvLm9yZy9pc28vY291bnRyeV9jb2Rlcy9pc29fMzE2Nl9jb2RlX2xpc3RzL2NvdW50cnlfbmFtZXNfYW5kX2NvZGVfZWxlbWVudHMuaHRtfElTTyAzMTY2LTEgYWxwaGEtMn1cbiAgICogY291bnRyeSBjb2RlLlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcmVnaW9uQ29kZXxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcmVnaW9uQ29kZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoaXMgcGFyYW1ldGVyIHRlbGxzIHRoZSBBUEkgdG8gcmV0dXJuIHNlYXJjaCByZXN1bHRzIHRoYXQgYXJlIG1vc3QgcmVsZXZhbnQgdG8gdGhlIHNwZWNpZmllZCBsYW5ndWFnZS5cbiAgICogQWxsb3dlZCB2YWx1ZXM6XG4gICAqIGFuIHtAbGluayBodHRwOi8vd3d3LmxvYy5nb3Yvc3RhbmRhcmRzL2lzbzYzOS0yL3BocC9jb2RlX2xpc3QucGhwfElTTyA2MzktMSB0d28tbGV0dGVyIGxhbmd1YWdlIGNvZGV9XG4gICAqIEhvd2V2ZXIsIHlvdSBzaG91bGQgdXNlIHRoZSB2YWx1ZXMgemgtSGFucyBmb3Igc2ltcGxpZmllZCBDaGluZXNlIGFuZCB6aC1IYW50IGZvciB0cmFkaXRpb25hbCBDaGluZXNlLlxuICAgKiBOb3RlOiBSZXN1bHRzIGluIG90aGVyIGxhbmd1YWdlcyB3aWxsIHN0aWxsIGJlIHJldHVybmVkIGlmIHRoZXkgYXJlIGhpZ2hseSByZWxldmFudCB0byB0aGUgc2VhcmNoIHF1ZXJ5IHRlcm0uXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCNyZWdpb25Db2RlfGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICByZWxldmFuY2VMYW5ndWFnZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzZWFyY2ggcmVzdWx0cyBzaG91bGQgaW5jbHVkZSByZXN0cmljdGVkIGNvbnRlbnQgYXMgd2VsbCBhcyBzdGFuZGFyZCBjb250ZW50LlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3Qjc2FmZVNlYXJjaHxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgc2FmZVNlYXJjaD86ICdtb2RlcmF0ZScgfCAnbm9uZScgfCAnc3RyaWN0JztcbiAgLyoqXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN0b3BpY0lkfGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB0b3BpY0lkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHF1ZXJ5IHRvIG9ubHkgcmV0dXJuIGNlcnRhaW4gcmVzb3VyY2VzXG4gICAqIE5vdGU6IFRoZSB2YWx1ZSBpcyBvZiBhIGNvbW1hLXNlcGVyYXRlZCBsaXN0IG9mIHJlc291cmNlIHR5cGVzLlxuICAgKiBEZWZhdWx0OiBgdmlkZW8sY2hhbm5lbCxwbGF5bGlzdGBcbiAgICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBBUEkgc2hvdWxkIGZpbHRlciB2aWRlbyBzZWFyY2ggcmVzdWx0cyBiYXNlZCBvbiB3aGV0aGVyIHRoZXkgaGF2ZSBjYXB0aW9ucy5cbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0NhcHRpb258ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvQ2FwdGlvbj86ICdhbnknIHwgJ2Nsb3NlZGNhcHRpb24nIHwgJ25vbmUnO1xuICAvKipcbiAgICogRmlsdGVycyB2aWRlbyBzZWFyY2ggcmVzdWx0cyBiYXNlZCBvbiB0aGVpciBjYXRlZ29yeS5cbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqL1xuICB2aWRlb0NhdGVnb3J5SWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSZXN0cmljdHMgYSBzZWFyY2ggdG8gb25seSBpbmNsdWRlIGVpdGhlciBoaWdoIGRlZmluaXRpb24vc3RhbmRhcmQgZGVmaW5pdGlvbiB2aWRlb3MuXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9EZWZpbml0aW9ufGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0RlZmluaXRpb24/OiAnYW55JyB8ICdoaWdoJyB8ICdzdGFuZGFyZCc7XG4gIC8qKlxuICAgKiBSZXN0cmljdHMgYSBzZWFyY2ggdG8gb25seSByZXRyaWV2ZSAyRCBvciAzRCB2aWRlb3MuXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9EaW1lbnNpb258ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvRGltZW5zaW9uPzogJ2FueScgfCAnMmQnIHwgJzNkJztcbiAgLyoqXG4gICAqIEZpbHRlcnMgdmlkZW8gc2VhcmNoIHJlc3VsdHMgYmFzZWQgb24gdGhlaXIgZHVyYXRpb24uXG4gICAqIE5vdGU6IHRoZSBgdHlwZWAgcGFyYW1ldGVyJ3MgdmFsdWUgbXVzdCBiZSBzZXQgdG8gYHZpZGVvYFxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjdmlkZW9EdXJhdGlvbnxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9EdXJhdGlvbj86ICdhbnknIHwgJ2xvbmcnIHwgJ21lZGl1bScgfCAnc2hvcnQnO1xuICAvKipcbiAgICogUmVzdHJpY3RzIGEgc2VhcmNoIHRvIG9ubHkgdmlkZW9zIHRoYXQgY2FuIGJlIGVtYmVkZGVkIG9uIGEgd2VicGFnZS5cbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb0VtYmVkZGFibGV8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvRW1iZWRkYWJsZT86ICdhbnknIHwgJ3RydWUnO1xuICAvKipcbiAgICogRmlsdGVycyB2aWRlb3MgdG8gb25seSBpbmNsdWRlIHZpZGVvcyB3aXRoIGEgcGFydGljdWxhciBsaWNlbnNlLlxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvTGljZW5zZXxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9MaWNlbnNlPzogJ2FueScgfCAnY3JlYXRpdmVDb21tb24nIHwgJ3lvdXR1YmUnO1xuICAvKipcbiAgICogV2hldGhlciB0byByZXN0cmljdCBhIHNlYXJjaCB0byBvbmx5IHZpZGVvcyB0aGF0IGNhbiBiZSBwbGF5ZWQgb3V0c2lkZSBvZiB5b3V0dWJlLmNvbVxuICAgKiBOb3RlOiB0aGUgYHR5cGVgIHBhcmFtZXRlcidzIHZhbHVlIG11c3QgYmUgc2V0IHRvIGB2aWRlb2BcbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaC9saXN0I3ZpZGVvU3luZGljYXRlZHxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9TeW5kaWNhdGVkPzogJ2FueScgfCAndHJ1ZSc7XG4gIC8qKlxuICAgKiBSZXN0cmljdCBhIHNlYXJjaCB0byBhIHBhcnRpY3VsYXIgdHlwZSBvZiB2aWRlb3NcbiAgICogTm90ZTogdGhlIGB0eXBlYCBwYXJhbWV0ZXIncyB2YWx1ZSBtdXN0IGJlIHNldCB0byBgdmlkZW9gXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCN2aWRlb1R5cGV8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvVHlwZT86ICdhbnknIHwgJ2VwaXNvZGUnIHwgJ21vdmllJztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHRJdGVtVGh1bWJuYWlscyB7XG4gIFtrZXk6IHN0cmluZ106IE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHRJdGVtVGh1bWJuYWlsO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0SXRlbVRodW1ibmFpbCB7XG4gIC8qKlxuICAgKiBUaGUgVVJMIG9mIHRoZSB0aHVtYm5haWxcbiAgICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgdGh1bWJuYWlsXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHRodW1ibmFpbFxuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hMaXN0UmVzdWx0SXRlbSBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNSZXN1bHQge1xuICAvKipcbiAgICogVGhlIGlkIG9iamVjdCBjb250YWlucyBpbmZvIHdoaWNoIGNhbiBiZSB1c2VkIGZvciB1bmlxdWVseSBpZGVudGlmaW5nIHRoZSByZXNvdXJjZVxuICAgKiBTZWUgdGhlIFtkb2N1bWVudGF0aW9uXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoI2lkfSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpZD86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBraW5kPzogc3RyaW5nO1xuICAgIHZpZGVvSWQ/OiBzdHJpbmc7XG4gICAgY2hhbm5lbElkPzogc3RyaW5nO1xuICAgIHBsYXlsaXN0SWQ/OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgYHNuaXBwZXRgIG9iamVjdCBjb250YWlucyBpbmZvIG9uIHRoZSBzZWFyY2ggcmVzdWx0XG4gICAqL1xuICBzbmlwcGV0Pzoge1xuICAgIC8qKlxuICAgICAqIFRoZSBjcmVhdGlvbiBkYXRlIGFuZCB0aW1lIG9mIHRoZSByZXNvdXJjZS4gVGhlIHZhbHVlIGlzIHNwZWNpZmllZCBpbiBJU08gODYwMSBgKFlZWVktTU0tRERUaGg6bW06c3Muc1opYCBmb3JtYXQuXG4gICAgICovXG4gICAgcHVibGlzaGVkQXQ/OiBzdHJpbmcgfCBhbnk7XG4gICAgLyoqXG4gICAgICogVGhlIGNoYW5uZWwncyBJRFxuICAgICAqL1xuICAgIGNoYW5uZWxJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIHNlYXJjaCByZXN1bHRcbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBIGRlc2NyaXB0aW9uIG9mIHRoZSBzZWFyY2ggcmVzdWx0XG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IG9mIHRoZSB0aHVtYm5haWxzXG4gICAgICovXG4gICAgdGh1bWJuYWlscz86IE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHRJdGVtVGh1bWJuYWlscztcbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIGNoYW5uZWwgdGhhdCBwdWJsaXNoZWQgdGhlIHJlc291cmNlXG4gICAgICovXG4gICAgY2hhbm5lbFRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoI3NuaXBwZXQubGl2ZUJyb2FkY2FzdENvbnRlbnQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGxpdmVCcm9hZGNhc3RDb250ZW50PzogJ3VwY29taW5nJyB8ICdsaXZlJyB8ICdub25lJztcbiAgfTtcbn1cblxuLy8gUmVzdWx0IGludGVyZmFjZXNcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdCBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNSZXN1bHQge1xuICAvKipcbiAgICogVGhlIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIG9mIHRoZSBgcGFnZVRva2VuYCBwYXJhbWV0ZXIgdG8gcmV0cmlldmUgdGhlIG5leHQgcGFnZSBpbiB0aGUgcmVzdWx0IHNldC5cbiAgICovXG4gIG5leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGBwYWdlVG9rZW5gIHBhcmFtZXRlciB0byByZXRyaWV2ZSB0aGUgcHJldmlvdXMgcGFnZSBpbiB0aGUgcmVzdWx0IHNldC5cbiAgICovXG4gIHByZXZQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcmVnaW9uIGNvZGUgdXNlZCBmb3IgdGhlIHNlYXJjaCBxdWVyeS5cbiAgICovXG4gIHJlZ2lvbkNvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQYWdpbmcgaW5mbyBhYm91dCB0aGUgcmVzdWx0XG4gICAqL1xuICBwYWdpbmdJbmZvPzoge1xuICAgIC8qKlxuICAgICAqIFRvdGFsIHJlc3VsdHMuIE5vdGUgdGhhdCB0aGUgbWF4IHZhbHVlIGlzIGAxMDAwMDAwYCBhbmQgaXMgYXBwcm94aW1hdGUuXG4gICAgICovXG4gICAgdG90YWxSZXN1bHRzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiByZXN1bHRzIGluY2x1ZGVkIGluIHJlc3BvbnNlXG4gICAgICovXG4gICAgcmVzdWx0c1BlclBhZ2U/OiBudW1iZXI7XG4gIH07XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiByZXN1bHRzIHRoYXQgbWF0Y2ggdGhlIGNyaXRlcmlhXG4gICAqL1xuICBpdGVtcz86IE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHRJdGVtW107XG59XG4iXX0=