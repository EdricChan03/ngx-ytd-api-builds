/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Options for {\@link NgxYtdApiVideoService#list}
 * @record
 */
export function NgxYtdApiVideosListOpts() { }
/**
 * Identifies the chart that should be retrieved.
 * Acceptable values:
 * - `mostPopular`: Return the most popular videos for the specified content region and video category.
 * See the {\@link https://developers.google.com/youtube/v3/docs/videos/list#chart|developer docs} for more info.
 * Note: This parameter is a filter and only one filter is allowed
 * @type {?|undefined}
 */
NgxYtdApiVideosListOpts.prototype.chart;
/**
 * Specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved.
 * In a video resource, the `id` property specifies the video's ID.
 * Note: This parameter is a filter and only one filter is allowed
 * @type {?|undefined}
 */
NgxYtdApiVideosListOpts.prototype.id;
/**
 * Specifies the API to return videos that are liked or disliked by the authenticated user
 * Acceptable values:
 * - `dislike`: Returns only videos that are disliked by the authenticated user
 * - `like`: Returns only videos that are liked by the authenticated user
 * Note: This parameter can only be used in a properly authorized request.
 * Note: This parameter is a filter and only one filter is allowed
 * @type {?|undefined}
 */
NgxYtdApiVideosListOpts.prototype.myRating;
/**
 * Specifies the API to return localized resource metadata for a specific language that the YouTube website supports.
 * See the {\@link https://developers.google.com/youtube/v3/docs/videos/list#hl|developer docs} for more info.
 * @type {?|undefined}
 */
NgxYtdApiVideosListOpts.prototype.hl;
/**
 * Specifies the maximum height of the embedded YouTube player returned in the `player.embedHtml` property.
 * This parameter can be used to specify a height appropriate for your app's layout.
 * See the {\@link https://developers.google.com/youtube/v3/docs/videos/list#maxHeight|developer docs} for more info
 * Note: If the `maxWidth` property is also specified, the player may be shorter
 * than the `maxHeight` in order to not violate the maximum width.
 * Acceptable values are 72 to 8192, inclusive.
 * @type {?|undefined}
 */
NgxYtdApiVideosListOpts.prototype.maxHeight;
/**
 * Specifies the maximum results that should be returned.
 * See the {\@link https://developers.google.com/youtube/v3/docs/videos/list#maxResults|developer docs} for more info
 * Note: This parameter is to be used for the `myRating` parameter, but should not
 * be used with the `id` parameter.
 * Acceptable values: 1 to 50, inclusive. 5 is the default number.
 * @type {?|undefined}
 */
NgxYtdApiVideosListOpts.prototype.maxResults;
/**
 * Specifies the maximum width of the embedded YouTube player returned in the `player.embedHtml` property.
 * This parameter can be used to specify a width appropriate for your app's layout.
 * See the {\@link https://developers.google.com/youtube/v3/docs/videos/list#maxWidth|developer docs} for more info
 * Note: If the `maxHeight` property is also specified, the player may be shorter
 * than the `maxWidth` in order to not violate the maximum width.
 * Acceptable values are 72 to 8192, inclusive.
 * @type {?|undefined}
 */
NgxYtdApiVideosListOpts.prototype.maxWidth;
/**
 * Identifies a specific page in the result set that should be returned.
 *
 * See the {\@link https://developers.google.com/youtube/v3/docs/videos/list#pageToken|developer docs} for more info
 * Note: This parameter is to be used with the `myRating` parameter, but is not to be used
 * with the `id` parameter.
 * @type {?|undefined}
 */
NgxYtdApiVideosListOpts.prototype.pageToken;
/**
 * Tells the API to select a video chart available in the specific region.
 * See the {\@link https://developers.google.com/youtube/v3/docs/videos/list#regionCode|developer docs} for more info
 * Note: This parameter is to only be used with the `chart` parameter.
 * @type {?|undefined}
 */
NgxYtdApiVideosListOpts.prototype.regionCode;
/**
 * This property identifies the video category for which the video should be retrieved.
 * See the {\@link https://developers.google.com/youtube/v3/docs/videos/list#regionCode|developer docs} for more info
 * Note: This parameter is to only be used with the `chart` parameter.
 * By default, charts are not restricted to a particular category.
 * The default value is 0.
 * @type {?|undefined}
 */
NgxYtdApiVideosListOpts.prototype.videoCategoryById;
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemSuggestionTagSuggestion() { }
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemSuggestionTagSuggestion.prototype.tag;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemSuggestionTagSuggestion.prototype.categoryRestricts;
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemAudioStream() { }
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemAudioStream.prototype.channelCount;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemAudioStream.prototype.codec;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemAudioStream.prototype.bitrateBps;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemAudioStream.prototype.vendor;
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemVideoStream() { }
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemVideoStream.prototype.widthPixels;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemVideoStream.prototype.heightPixels;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemVideoStream.prototype.frameRateFps;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemVideoStream.prototype.aspectRatio;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemVideoStream.prototype.codec;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemVideoStream.prototype.bitrateBps;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemVideoStream.prototype.rotation;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemVideoStream.prototype.vendor;
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemLocalizations() { }
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemLocalization() { }
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemLocalization.prototype.title;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItemLocalization.prototype.description;
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemThumbnails() { }
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemThumbnail() { }
/**
 * The URL of the thumbnail
 * @type {?|undefined}
 */
NgxYtdApiVideosListResultItemThumbnail.prototype.url;
/**
 * The width of the thumbnail
 * @type {?|undefined}
 */
NgxYtdApiVideosListResultItemThumbnail.prototype.width;
/**
 * The height of the thumbnail
 * @type {?|undefined}
 */
NgxYtdApiVideosListResultItemThumbnail.prototype.height;
/**
 * @record
 */
export function NgxYtdApiVideosListResultItem() { }
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.kind;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.etag;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.id;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.snippet;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.contentDetails;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.status;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.statistics;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.player;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.topicDetails;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.recordingDetails;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.fileDetails;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.processingDetails;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.suggestions;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.liveStreamingDetails;
/** @type {?|undefined} */
NgxYtdApiVideosListResultItem.prototype.localizations;
/**
 * @record
 */
export function NgxYtdApiVideosListResult() { }
/** @type {?|undefined} */
NgxYtdApiVideosListResult.prototype.nextPageToken;
/** @type {?|undefined} */
NgxYtdApiVideosListResult.prototype.prevPageToken;
/** @type {?|undefined} */
NgxYtdApiVideosListResult.prototype.pageInfo;
/** @type {?|undefined} */
NgxYtdApiVideosListResult.prototype.items;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJ2aWRlb3MveXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ3hZdGRBcGlHZW5lcmljT3B0cywgTmd4WXRkQXBpR2VuZXJpY1Jlc3VsdCB9IGZyb20gJ25neC15dGQtYXBpL2NvcmUnO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHtAbGluayBOZ3hZdGRBcGlWaWRlb1NlcnZpY2UjbGlzdH1cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0T3B0cyBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNPcHRzIHtcbiAgLyoqXG4gICAqIElkZW50aWZpZXMgdGhlIGNoYXJ0IHRoYXQgc2hvdWxkIGJlIHJldHJpZXZlZC5cbiAgICogQWNjZXB0YWJsZSB2YWx1ZXM6XG4gICAqIC0gYG1vc3RQb3B1bGFyYDogUmV0dXJuIHRoZSBtb3N0IHBvcHVsYXIgdmlkZW9zIGZvciB0aGUgc3BlY2lmaWVkIGNvbnRlbnQgcmVnaW9uIGFuZCB2aWRlbyBjYXRlZ29yeS5cbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I2NoYXJ0fGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvLlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBhIGZpbHRlciBhbmQgb25seSBvbmUgZmlsdGVyIGlzIGFsbG93ZWRcbiAgICovXG4gIGNoYXJ0PzogJ21vc3RQb3B1bGFyJztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHRoZSBZb3VUdWJlIHZpZGVvIElEKHMpIGZvciB0aGUgcmVzb3VyY2UocykgdGhhdCBhcmUgYmVpbmcgcmV0cmlldmVkLlxuICAgKiBJbiBhIHZpZGVvIHJlc291cmNlLCB0aGUgYGlkYCBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIHZpZGVvJ3MgSUQuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGEgZmlsdGVyIGFuZCBvbmx5IG9uZSBmaWx0ZXIgaXMgYWxsb3dlZFxuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIEFQSSB0byByZXR1cm4gdmlkZW9zIHRoYXQgYXJlIGxpa2VkIG9yIGRpc2xpa2VkIGJ5IHRoZSBhdXRoZW50aWNhdGVkIHVzZXJcbiAgICogQWNjZXB0YWJsZSB2YWx1ZXM6XG4gICAqIC0gYGRpc2xpa2VgOiBSZXR1cm5zIG9ubHkgdmlkZW9zIHRoYXQgYXJlIGRpc2xpa2VkIGJ5IHRoZSBhdXRoZW50aWNhdGVkIHVzZXJcbiAgICogLSBgbGlrZWA6IFJldHVybnMgb25seSB2aWRlb3MgdGhhdCBhcmUgbGlrZWQgYnkgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSB1c2VkIGluIGEgcHJvcGVybHkgYXV0aG9yaXplZCByZXF1ZXN0LlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBhIGZpbHRlciBhbmQgb25seSBvbmUgZmlsdGVyIGlzIGFsbG93ZWRcbiAgICovXG4gIG15UmF0aW5nPzogJ2Rpc2xpa2UnIHwgJ2xpa2UnO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBBUEkgdG8gcmV0dXJuIGxvY2FsaXplZCByZXNvdXJjZSBtZXRhZGF0YSBmb3IgYSBzcGVjaWZpYyBsYW5ndWFnZSB0aGF0IHRoZSBZb3VUdWJlIHdlYnNpdGUgc3VwcG9ydHMuXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNobHxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mby5cbiAgICovXG4gIGhsPzogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtYXhpbXVtIGhlaWdodCBvZiB0aGUgZW1iZWRkZWQgWW91VHViZSBwbGF5ZXIgcmV0dXJuZWQgaW4gdGhlIGBwbGF5ZXIuZW1iZWRIdG1sYCBwcm9wZXJ0eS5cbiAgICogVGhpcyBwYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBhIGhlaWdodCBhcHByb3ByaWF0ZSBmb3IgeW91ciBhcHAncyBsYXlvdXQuXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNtYXhIZWlnaHR8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICogTm90ZTogSWYgdGhlIGBtYXhXaWR0aGAgcHJvcGVydHkgaXMgYWxzbyBzcGVjaWZpZWQsIHRoZSBwbGF5ZXIgbWF5IGJlIHNob3J0ZXJcbiAgICogdGhhbiB0aGUgYG1heEhlaWdodGAgaW4gb3JkZXIgdG8gbm90IHZpb2xhdGUgdGhlIG1heGltdW0gd2lkdGguXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzIGFyZSA3MiB0byA4MTkyLCBpbmNsdXNpdmUuXG4gICAqL1xuICBtYXhIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG1heGltdW0gcmVzdWx0cyB0aGF0IHNob3VsZCBiZSByZXR1cm5lZC5cbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I21heFJlc3VsdHN8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIGBteVJhdGluZ2AgcGFyYW1ldGVyLCBidXQgc2hvdWxkIG5vdFxuICAgKiBiZSB1c2VkIHdpdGggdGhlIGBpZGAgcGFyYW1ldGVyLlxuICAgKiBBY2NlcHRhYmxlIHZhbHVlczogMSB0byA1MCwgaW5jbHVzaXZlLiA1IGlzIHRoZSBkZWZhdWx0IG51bWJlci5cbiAgICovXG4gIG1heFJlc3VsdHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGVtYmVkZGVkIFlvdVR1YmUgcGxheWVyIHJldHVybmVkIGluIHRoZSBgcGxheWVyLmVtYmVkSHRtbGAgcHJvcGVydHkuXG4gICAqIFRoaXMgcGFyYW1ldGVyIGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgYSB3aWR0aCBhcHByb3ByaWF0ZSBmb3IgeW91ciBhcHAncyBsYXlvdXQuXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNtYXhXaWR0aHxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKiBOb3RlOiBJZiB0aGUgYG1heEhlaWdodGAgcHJvcGVydHkgaXMgYWxzbyBzcGVjaWZpZWQsIHRoZSBwbGF5ZXIgbWF5IGJlIHNob3J0ZXJcbiAgICogdGhhbiB0aGUgYG1heFdpZHRoYCBpbiBvcmRlciB0byBub3QgdmlvbGF0ZSB0aGUgbWF4aW11bSB3aWR0aC5cbiAgICogQWNjZXB0YWJsZSB2YWx1ZXMgYXJlIDcyIHRvIDgxOTIsIGluY2x1c2l2ZS5cbiAgICovXG4gIG1heFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogSWRlbnRpZmllcyBhIHNwZWNpZmljIHBhZ2UgaW4gdGhlIHJlc3VsdCBzZXQgdGhhdCBzaG91bGQgYmUgcmV0dXJuZWQuXG4gICAqXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNwYWdlVG9rZW58ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBgbXlSYXRpbmdgIHBhcmFtZXRlciwgYnV0IGlzIG5vdCB0byBiZSB1c2VkXG4gICAqIHdpdGggdGhlIGBpZGAgcGFyYW1ldGVyLlxuICAgKi9cbiAgcGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogVGVsbHMgdGhlIEFQSSB0byBzZWxlY3QgYSB2aWRlbyBjaGFydCBhdmFpbGFibGUgaW4gdGhlIHNwZWNpZmljIHJlZ2lvbi5cbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3JlZ2lvbkNvZGV8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgdG8gb25seSBiZSB1c2VkIHdpdGggdGhlIGBjaGFydGAgcGFyYW1ldGVyLlxuICAgKi9cbiAgcmVnaW9uQ29kZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoaXMgcHJvcGVydHkgaWRlbnRpZmllcyB0aGUgdmlkZW8gY2F0ZWdvcnkgZm9yIHdoaWNoIHRoZSB2aWRlbyBzaG91bGQgYmUgcmV0cmlldmVkLlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjcmVnaW9uQ29kZXxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyB0byBvbmx5IGJlIHVzZWQgd2l0aCB0aGUgYGNoYXJ0YCBwYXJhbWV0ZXIuXG4gICAqIEJ5IGRlZmF1bHQsIGNoYXJ0cyBhcmUgbm90IHJlc3RyaWN0ZWQgdG8gYSBwYXJ0aWN1bGFyIGNhdGVnb3J5LlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwLlxuICAgKi9cbiAgdmlkZW9DYXRlZ29yeUJ5SWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1TdWdnZXN0aW9uVGFnU3VnZ2VzdGlvbiB7XG4gIHRhZz86IHN0cmluZztcbiAgY2F0ZWdvcnlSZXN0cmljdHM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbUF1ZGlvU3RyZWFtIHtcbiAgY2hhbm5lbENvdW50PzogbnVtYmVyO1xuICBjb2RlYz86IHN0cmluZztcbiAgYml0cmF0ZUJwcz86IG51bWJlcjtcbiAgdmVuZG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtVmlkZW9TdHJlYW0ge1xuICB3aWR0aFBpeGVscz86IG51bWJlcjtcbiAgaGVpZ2h0UGl4ZWxzPzogbnVtYmVyO1xuICBmcmFtZVJhdGVGcHM/OiBudW1iZXI7XG4gIGFzcGVjdFJhdGlvPzogbnVtYmVyO1xuICBjb2RlYz86IHN0cmluZztcbiAgYml0cmF0ZUJwcz86IG51bWJlcjtcbiAgcm90YXRpb24/OiBzdHJpbmc7XG4gIHZlbmRvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbUxvY2FsaXphdGlvbnMge1xuICBba2V5OiBzdHJpbmddOiBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbUxvY2FsaXphdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbUxvY2FsaXphdGlvbiB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbVRodW1ibmFpbHMge1xuICBba2V5OiBzdHJpbmddOiBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbVRodW1ibmFpbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbVRodW1ibmFpbCB7XG4gIC8qKlxuICAgKiBUaGUgVVJMIG9mIHRoZSB0aHVtYm5haWxcbiAgICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgdGh1bWJuYWlsXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHRodW1ibmFpbFxuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtIHtcbiAga2luZD86IHN0cmluZztcbiAgZXRhZz86IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG4gIHNuaXBwZXQ/OiB7XG4gICAgcHVibGlzaGVkQXQ/OiBzdHJpbmc7XG4gICAgY2hhbm5lbElkPzogc3RyaW5nO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHRodW1ibmFpbHM/OiBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbVRodW1ibmFpbHM7XG4gICAgY2hhbm5lbFRpdGxlPzogc3RyaW5nO1xuICAgIHRhZ3M/OiBzdHJpbmdbXTtcbiAgICBjYXRlZ29yeUlkPzogc3RyaW5nO1xuICAgIGxpdmVCcm9hZGNhc3RDb250ZW50Pzogc3RyaW5nO1xuICAgIGRlZmF1bHRMYW5ndWFnZT86IHN0cmluZztcbiAgICBsb2NhbGl6ZWQ/OiB7XG4gICAgICB0aXRsZT86IHN0cmluZztcbiAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIH07XG4gICAgZGVmYXVsdEF1ZGlvTGFuZ3VhZ2U/OiBzdHJpbmc7XG4gIH07XG4gIGNvbnRlbnREZXRhaWxzPzoge1xuICAgIGR1cmF0aW9uPzogc3RyaW5nO1xuICAgIGRpbWVuc2lvbj86IHN0cmluZztcbiAgICBkZWZpbml0aW9uPzogc3RyaW5nO1xuICAgIGNhcHRpb24/OiBzdHJpbmc7XG4gICAgbGljZW5zZWRDb250ZW50PzogYm9vbGVhbjtcbiAgICByZWdpb25SZXN0cmljdGlvbj86IHtcbiAgICAgIGFsbG93ZWQ/OiBzdHJpbmdbXTtcbiAgICAgIGJsb2NrZWQ/OiBzdHJpbmdbXTtcbiAgICB9O1xuICAgIGNvbnRlbnRSYXRpbmc/OiB7XG4gICAgICAvLyBUT0RPKEVkcmljKTogQWRkIGJldHRlciBkb2NzIGhlcmVcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIH07XG4gICAgcHJvamVjdGlvbj86IHN0cmluZztcbiAgICBoYXNDdXN0b21UaHVtYm5haWw/OiBib29sZWFuO1xuICB9O1xuICBzdGF0dXM/OiB7XG4gICAgdXBsb2FkU3RhdHVzPzogc3RyaW5nO1xuICAgIGZhaWx1cmVSZWFzb24/OiBzdHJpbmc7XG4gICAgcmVqZWN0aW9uUmVhc29uPzogc3RyaW5nO1xuICAgIHByaXZhY3lQb2xpY3k/OiBzdHJpbmc7XG4gICAgcHVibGlzaEF0Pzogc3RyaW5nO1xuICAgIGxpY2Vuc2U/OiBzdHJpbmc7XG4gICAgZW1iZWRkYWJsZT86IGJvb2xlYW47XG4gICAgcHVibGljU3RhdHNWaWV3YWJsZT86IGJvb2xlYW47XG4gIH07XG4gIHN0YXRpc3RpY3M/OiB7XG4gICAgdmlld0NvdW50PzogbnVtYmVyO1xuICAgIGxpa2VDb3VudD86IG51bWJlcjtcbiAgICBkaXNsaWtlQ291bnQ/OiBudW1iZXI7XG4gICAgZmF2b3JpdGVDb3VudD86IG51bWJlcjtcbiAgICBjb21tZW50Q291bnQ/OiBudW1iZXI7XG4gIH07XG4gIHBsYXllcj86IHtcbiAgICBlbWJlZEh0bWw/OiBzdHJpbmc7XG4gICAgZW1iZWRIZWlnaHQ/OiBudW1iZXI7XG4gICAgZW1iZWRXaWR0aD86IG51bWJlcjtcbiAgfTtcbiAgdG9waWNEZXRhaWxzPzoge1xuICAgIHRvcGljSWRzPzogc3RyaW5nW107XG4gICAgcmVsZXZhbnRUb3BpY0lkcz86IHN0cmluZ1tdO1xuICAgIHRvcGljQ2F0ZWdvcmllcz86IHN0cmluZ1tdO1xuICB9O1xuICByZWNvcmRpbmdEZXRhaWxzPzoge1xuICAgIHJlY29yZGluZ0RhdGU/OiBzdHJpbmc7XG4gIH07XG4gIGZpbGVEZXRhaWxzPzoge1xuICAgIGZpbGVOYW1lPzogc3RyaW5nO1xuICAgIGZpbGVTaXplPzogbnVtYmVyO1xuICAgIGZpbGVUeXBlPzogc3RyaW5nO1xuICAgIGNvbnRhaW5lcj86IHN0cmluZztcbiAgICB2aWRlb1N0cmVhbXM/OiBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbVZpZGVvU3RyZWFtW107XG4gICAgYXVkaW9TdHJlYW1zPzogTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1BdWRpb1N0cmVhbVtdO1xuICAgIGR1cmF0aW9uTXM/OiBudW1iZXI7XG4gICAgYml0cmF0ZUJwcz86IG51bWJlcjtcbiAgICBjcmVhdGlvblRpbWU/OiBzdHJpbmc7XG4gIH07XG4gIHByb2Nlc3NpbmdEZXRhaWxzPzoge1xuICAgIHByb2Nlc3NpbmdTdGF0dXM/OiBzdHJpbmc7XG4gICAgcHJvY2Vzc2luZ1Byb2dyZXNzPzoge1xuICAgICAgcGFydHNUb3RhbD86IG51bWJlcjtcbiAgICAgIHBhcnRzUHJvY2Vzc2VkPzogbnVtYmVyO1xuICAgICAgdGltZUxlZnRNcz86IG51bWJlcjtcbiAgICB9O1xuICAgIHByb2Nlc3NpbmdGYWlsdXJlUmVhc29uPzogc3RyaW5nO1xuICAgIGZpbGVEZXRhaWxzQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICAgIHByb2Nlc3NpbmdJc3N1ZXNBdmFpbGFiaWxpdHk/OiBzdHJpbmc7XG4gICAgdGFnU3VnZ2VzdGlvbnNBdmFpbGFiaWxpdHk/OiBzdHJpbmc7XG4gICAgZWRpdG9yU3VnZ2VzdGlvbnNBdmFpbGFiaWxpdHk/OiBzdHJpbmc7XG4gICAgdGh1bWJuYWlsc0F2YWlsYWJpbGl0eT86IHN0cmluZztcbiAgfTtcbiAgc3VnZ2VzdGlvbnM/OiB7XG4gICAgcHJvY2Vzc2luZ0Vycm9ycz86IHN0cmluZ1tdO1xuICAgIHByb2Nlc3NpbmdXYXJuaW5ncz86IHN0cmluZ1tdO1xuICAgIHByb2Nlc3NpbmdIaW50cz86IHN0cmluZ1tdO1xuICAgIHRhZ1N1Z2dlc3Rpb25zPzogTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1TdWdnZXN0aW9uVGFnU3VnZ2VzdGlvbltdO1xuICAgIGVkaXRvclN1Z2dlc3Rpb25zPzogc3RyaW5nW107XG4gIH07XG4gIGxpdmVTdHJlYW1pbmdEZXRhaWxzPzoge1xuICAgIGFjdHVhbFN0YXJ0VGltZT86IHN0cmluZztcbiAgICBhY3R1YWxFbmRUaW1lPzogc3RyaW5nO1xuICAgIHNjaGVkdWxlZFN0YXJ0VGltZT86IHN0cmluZztcbiAgICBzY2hlZHVsZWRFbmRUaW1lPzogc3RyaW5nO1xuICAgIGNvbmN1cnJlbnRWaWV3ZXJzPzogbnVtYmVyO1xuICAgIGFjdGl2ZUxpdmVDaGF0SWQ/OiBzdHJpbmc7XG4gIH07XG4gIGxvY2FsaXphdGlvbnM/OiBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbUxvY2FsaXphdGlvbnM7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IHtcbiAgbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcbiAgcHJldlBhZ2VUb2tlbj86IHN0cmluZztcbiAgcGFnZUluZm8/OiB7XG4gICAgdG90YWxSZXN1bHRzPzogbnVtYmVyO1xuICAgIHJlc3VsdHNQZXJQYWdlPzogbnVtYmVyO1xuICB9O1xuICBpdGVtcz86IE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtW107XG59XG4iXX0=