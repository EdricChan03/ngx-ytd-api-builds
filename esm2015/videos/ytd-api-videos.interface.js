/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Options for {\@link NgxYtdApiVideoService#list}
 * @record
 */
export function NgxYtdApiVideosListOpts() { }
if (false) {
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
}
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemSuggestionTagSuggestion() { }
if (false) {
    /** @type {?|undefined} */
    NgxYtdApiVideosListResultItemSuggestionTagSuggestion.prototype.tag;
    /** @type {?|undefined} */
    NgxYtdApiVideosListResultItemSuggestionTagSuggestion.prototype.categoryRestricts;
}
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemAudioStream() { }
if (false) {
    /** @type {?|undefined} */
    NgxYtdApiVideosListResultItemAudioStream.prototype.channelCount;
    /** @type {?|undefined} */
    NgxYtdApiVideosListResultItemAudioStream.prototype.codec;
    /** @type {?|undefined} */
    NgxYtdApiVideosListResultItemAudioStream.prototype.bitrateBps;
    /** @type {?|undefined} */
    NgxYtdApiVideosListResultItemAudioStream.prototype.vendor;
}
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemVideoStream() { }
if (false) {
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
}
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemLocalizations() { }
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemLocalization() { }
if (false) {
    /** @type {?|undefined} */
    NgxYtdApiVideosListResultItemLocalization.prototype.title;
    /** @type {?|undefined} */
    NgxYtdApiVideosListResultItemLocalization.prototype.description;
}
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemThumbnails() { }
/**
 * @record
 */
export function NgxYtdApiVideosListResultItemThumbnail() { }
if (false) {
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
}
/**
 * @record
 */
export function NgxYtdApiVideosListResultItem() { }
if (false) {
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
}
/**
 * @record
 */
export function NgxYtdApiVideosListResult() { }
if (false) {
    /** @type {?|undefined} */
    NgxYtdApiVideosListResult.prototype.nextPageToken;
    /** @type {?|undefined} */
    NgxYtdApiVideosListResult.prototype.prevPageToken;
    /** @type {?|undefined} */
    NgxYtdApiVideosListResult.prototype.pageInfo;
    /** @type {?|undefined} */
    NgxYtdApiVideosListResult.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJ2aWRlb3MveXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsNkNBNkVDOzs7Ozs7Ozs7O0lBckVDLHdDQUFzQjs7Ozs7OztJQU10QixxQ0FBWTs7Ozs7Ozs7OztJQVNaLDJDQUE4Qjs7Ozs7O0lBSzlCLHFDQUFZOzs7Ozs7Ozs7O0lBU1osNENBQW1COzs7Ozs7Ozs7SUFRbkIsNkNBQW9COzs7Ozs7Ozs7O0lBU3BCLDJDQUFrQjs7Ozs7Ozs7O0lBUWxCLDRDQUFtQjs7Ozs7OztJQU1uQiw2Q0FBb0I7Ozs7Ozs7OztJQVFwQixvREFBMkI7Ozs7O0FBRzdCLDBFQUdDOzs7SUFGQyxtRUFBYTs7SUFDYixpRkFBNkI7Ozs7O0FBRy9CLDhEQUtDOzs7SUFKQyxnRUFBc0I7O0lBQ3RCLHlEQUFlOztJQUNmLDhEQUFvQjs7SUFDcEIsMERBQWdCOzs7OztBQUdsQiw4REFTQzs7O0lBUkMsK0RBQXFCOztJQUNyQixnRUFBc0I7O0lBQ3RCLGdFQUFzQjs7SUFDdEIsK0RBQXFCOztJQUNyQix5REFBZTs7SUFDZiw4REFBb0I7O0lBQ3BCLDREQUFrQjs7SUFDbEIsMERBQWdCOzs7OztBQUdsQixnRUFFQzs7OztBQUVELCtEQUdDOzs7SUFGQywwREFBZTs7SUFDZixnRUFBcUI7Ozs7O0FBR3ZCLDZEQUVDOzs7O0FBRUQsNERBYUM7Ozs7OztJQVRDLHFEQUFhOzs7OztJQUliLHVEQUFlOzs7OztJQUlmLHdEQUFnQjs7Ozs7QUFHbEIsbURBNkdDOzs7SUE1R0MsNkNBQWM7O0lBQ2QsNkNBQWM7O0lBQ2QsMkNBQVk7O0lBQ1osZ0RBZ0JFOztJQUNGLHVEQWdCRTs7SUFDRiwrQ0FTRTs7SUFDRixtREFNRTs7SUFDRiwrQ0FJRTs7SUFDRixxREFJRTs7SUFDRix5REFFRTs7SUFDRixvREFVRTs7SUFDRiwwREFhRTs7SUFDRixvREFNRTs7SUFDRiw2REFPRTs7SUFDRixzREFBMkQ7Ozs7O0FBRTdELCtDQVFDOzs7SUFQQyxrREFBdUI7O0lBQ3ZCLGtEQUF1Qjs7SUFDdkIsNkNBR0U7O0lBQ0YsMENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmd4WXRkQXBpR2VuZXJpY09wdHMsIE5neFl0ZEFwaUdlbmVyaWNSZXN1bHQgfSBmcm9tICduZ3gteXRkLWFwaS9jb3JlJztcblxuLyoqXG4gKiBPcHRpb25zIGZvciB7QGxpbmsgTmd4WXRkQXBpVmlkZW9TZXJ2aWNlI2xpc3R9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdE9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljT3B0cyB7XG4gIC8qKlxuICAgKiBJZGVudGlmaWVzIHRoZSBjaGFydCB0aGF0IHNob3VsZCBiZSByZXRyaWV2ZWQuXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzOlxuICAgKiAtIGBtb3N0UG9wdWxhcmA6IFJldHVybiB0aGUgbW9zdCBwb3B1bGFyIHZpZGVvcyBmb3IgdGhlIHNwZWNpZmllZCBjb250ZW50IHJlZ2lvbiBhbmQgdmlkZW8gY2F0ZWdvcnkuXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNjaGFydHxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mby5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgYSBmaWx0ZXIgYW5kIG9ubHkgb25lIGZpbHRlciBpcyBhbGxvd2VkXG4gICAqL1xuICBjaGFydD86ICdtb3N0UG9wdWxhcic7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB0aGUgWW91VHViZSB2aWRlbyBJRChzKSBmb3IgdGhlIHJlc291cmNlKHMpIHRoYXQgYXJlIGJlaW5nIHJldHJpZXZlZC5cbiAgICogSW4gYSB2aWRlbyByZXNvdXJjZSwgdGhlIGBpZGAgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSB2aWRlbydzIElELlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBhIGZpbHRlciBhbmQgb25seSBvbmUgZmlsdGVyIGlzIGFsbG93ZWRcbiAgICovXG4gIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBBUEkgdG8gcmV0dXJuIHZpZGVvcyB0aGF0IGFyZSBsaWtlZCBvciBkaXNsaWtlZCBieSB0aGUgYXV0aGVudGljYXRlZCB1c2VyXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzOlxuICAgKiAtIGBkaXNsaWtlYDogUmV0dXJucyBvbmx5IHZpZGVvcyB0aGF0IGFyZSBkaXNsaWtlZCBieSB0aGUgYXV0aGVudGljYXRlZCB1c2VyXG4gICAqIC0gYGxpa2VgOiBSZXR1cm5zIG9ubHkgdmlkZW9zIHRoYXQgYXJlIGxpa2VkIGJ5IHRoZSBhdXRoZW50aWNhdGVkIHVzZXJcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgY2FuIG9ubHkgYmUgdXNlZCBpbiBhIHByb3Blcmx5IGF1dGhvcml6ZWQgcmVxdWVzdC5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgYSBmaWx0ZXIgYW5kIG9ubHkgb25lIGZpbHRlciBpcyBhbGxvd2VkXG4gICAqL1xuICBteVJhdGluZz86ICdkaXNsaWtlJyB8ICdsaWtlJztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgQVBJIHRvIHJldHVybiBsb2NhbGl6ZWQgcmVzb3VyY2UgbWV0YWRhdGEgZm9yIGEgc3BlY2lmaWMgbGFuZ3VhZ2UgdGhhdCB0aGUgWW91VHViZSB3ZWJzaXRlIHN1cHBvcnRzLlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjaGx8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm8uXG4gICAqL1xuICBobD86IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWF4aW11bSBoZWlnaHQgb2YgdGhlIGVtYmVkZGVkIFlvdVR1YmUgcGxheWVyIHJldHVybmVkIGluIHRoZSBgcGxheWVyLmVtYmVkSHRtbGAgcHJvcGVydHkuXG4gICAqIFRoaXMgcGFyYW1ldGVyIGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgYSBoZWlnaHQgYXBwcm9wcmlhdGUgZm9yIHlvdXIgYXBwJ3MgbGF5b3V0LlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjbWF4SGVpZ2h0fGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqIE5vdGU6IElmIHRoZSBgbWF4V2lkdGhgIHByb3BlcnR5IGlzIGFsc28gc3BlY2lmaWVkLCB0aGUgcGxheWVyIG1heSBiZSBzaG9ydGVyXG4gICAqIHRoYW4gdGhlIGBtYXhIZWlnaHRgIGluIG9yZGVyIHRvIG5vdCB2aW9sYXRlIHRoZSBtYXhpbXVtIHdpZHRoLlxuICAgKiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgNzIgdG8gODE5MiwgaW5jbHVzaXZlLlxuICAgKi9cbiAgbWF4SGVpZ2h0PzogbnVtYmVyO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtYXhpbXVtIHJlc3VsdHMgdGhhdCBzaG91bGQgYmUgcmV0dXJuZWQuXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNtYXhSZXN1bHRzfGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIHRvIGJlIHVzZWQgZm9yIHRoZSBgbXlSYXRpbmdgIHBhcmFtZXRlciwgYnV0IHNob3VsZCBub3RcbiAgICogYmUgdXNlZCB3aXRoIHRoZSBgaWRgIHBhcmFtZXRlci5cbiAgICogQWNjZXB0YWJsZSB2YWx1ZXM6IDEgdG8gNTAsIGluY2x1c2l2ZS4gNSBpcyB0aGUgZGVmYXVsdCBudW1iZXIuXG4gICAqL1xuICBtYXhSZXN1bHRzPzogbnVtYmVyO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBlbWJlZGRlZCBZb3VUdWJlIHBsYXllciByZXR1cm5lZCBpbiB0aGUgYHBsYXllci5lbWJlZEh0bWxgIHByb3BlcnR5LlxuICAgKiBUaGlzIHBhcmFtZXRlciBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IGEgd2lkdGggYXBwcm9wcmlhdGUgZm9yIHlvdXIgYXBwJ3MgbGF5b3V0LlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjbWF4V2lkdGh8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICogTm90ZTogSWYgdGhlIGBtYXhIZWlnaHRgIHByb3BlcnR5IGlzIGFsc28gc3BlY2lmaWVkLCB0aGUgcGxheWVyIG1heSBiZSBzaG9ydGVyXG4gICAqIHRoYW4gdGhlIGBtYXhXaWR0aGAgaW4gb3JkZXIgdG8gbm90IHZpb2xhdGUgdGhlIG1heGltdW0gd2lkdGguXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzIGFyZSA3MiB0byA4MTkyLCBpbmNsdXNpdmUuXG4gICAqL1xuICBtYXhXaWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIElkZW50aWZpZXMgYSBzcGVjaWZpYyBwYWdlIGluIHRoZSByZXN1bHQgc2V0IHRoYXQgc2hvdWxkIGJlIHJldHVybmVkLlxuICAgKlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjcGFnZVRva2VufGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIHRvIGJlIHVzZWQgd2l0aCB0aGUgYG15UmF0aW5nYCBwYXJhbWV0ZXIsIGJ1dCBpcyBub3QgdG8gYmUgdXNlZFxuICAgKiB3aXRoIHRoZSBgaWRgIHBhcmFtZXRlci5cbiAgICovXG4gIHBhZ2VUb2tlbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRlbGxzIHRoZSBBUEkgdG8gc2VsZWN0IGEgdmlkZW8gY2hhcnQgYXZhaWxhYmxlIGluIHRoZSBzcGVjaWZpYyByZWdpb24uXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNyZWdpb25Db2RlfGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIHRvIG9ubHkgYmUgdXNlZCB3aXRoIHRoZSBgY2hhcnRgIHBhcmFtZXRlci5cbiAgICovXG4gIHJlZ2lvbkNvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGlzIHByb3BlcnR5IGlkZW50aWZpZXMgdGhlIHZpZGVvIGNhdGVnb3J5IGZvciB3aGljaCB0aGUgdmlkZW8gc2hvdWxkIGJlIHJldHJpZXZlZC5cbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3JlZ2lvbkNvZGV8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm9cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgdG8gb25seSBiZSB1c2VkIHdpdGggdGhlIGBjaGFydGAgcGFyYW1ldGVyLlxuICAgKiBCeSBkZWZhdWx0LCBjaGFydHMgYXJlIG5vdCByZXN0cmljdGVkIHRvIGEgcGFydGljdWxhciBjYXRlZ29yeS5cbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgMC5cbiAgICovXG4gIHZpZGVvQ2F0ZWdvcnlCeUlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtU3VnZ2VzdGlvblRhZ1N1Z2dlc3Rpb24ge1xuICB0YWc/OiBzdHJpbmc7XG4gIGNhdGVnb3J5UmVzdHJpY3RzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1BdWRpb1N0cmVhbSB7XG4gIGNoYW5uZWxDb3VudD86IG51bWJlcjtcbiAgY29kZWM/OiBzdHJpbmc7XG4gIGJpdHJhdGVCcHM/OiBudW1iZXI7XG4gIHZlbmRvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbVZpZGVvU3RyZWFtIHtcbiAgd2lkdGhQaXhlbHM/OiBudW1iZXI7XG4gIGhlaWdodFBpeGVscz86IG51bWJlcjtcbiAgZnJhbWVSYXRlRnBzPzogbnVtYmVyO1xuICBhc3BlY3RSYXRpbz86IG51bWJlcjtcbiAgY29kZWM/OiBzdHJpbmc7XG4gIGJpdHJhdGVCcHM/OiBudW1iZXI7XG4gIHJvdGF0aW9uPzogc3RyaW5nO1xuICB2ZW5kb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1Mb2NhbGl6YXRpb25zIHtcbiAgW2tleTogc3RyaW5nXTogTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1Mb2NhbGl6YXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1Mb2NhbGl6YXRpb24ge1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1UaHVtYm5haWxzIHtcbiAgW2tleTogc3RyaW5nXTogTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1UaHVtYm5haWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1UaHVtYm5haWwge1xuICAvKipcbiAgICogVGhlIFVSTCBvZiB0aGUgdGh1bWJuYWlsXG4gICAqL1xuICB1cmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIHRodW1ibmFpbFxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSB0aHVtYm5haWxcbiAgICovXG4gIGhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbSB7XG4gIGtpbmQ/OiBzdHJpbmc7XG4gIGV0YWc/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xuICBzbmlwcGV0Pzoge1xuICAgIHB1Ymxpc2hlZEF0Pzogc3RyaW5nO1xuICAgIGNoYW5uZWxJZD86IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICB0aHVtYm5haWxzPzogTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1UaHVtYm5haWxzO1xuICAgIGNoYW5uZWxUaXRsZT86IHN0cmluZztcbiAgICB0YWdzPzogc3RyaW5nW107XG4gICAgY2F0ZWdvcnlJZD86IHN0cmluZztcbiAgICBsaXZlQnJvYWRjYXN0Q29udGVudD86IHN0cmluZztcbiAgICBkZWZhdWx0TGFuZ3VhZ2U/OiBzdHJpbmc7XG4gICAgbG9jYWxpemVkPzoge1xuICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICB9O1xuICAgIGRlZmF1bHRBdWRpb0xhbmd1YWdlPzogc3RyaW5nO1xuICB9O1xuICBjb250ZW50RGV0YWlscz86IHtcbiAgICBkdXJhdGlvbj86IHN0cmluZztcbiAgICBkaW1lbnNpb24/OiBzdHJpbmc7XG4gICAgZGVmaW5pdGlvbj86IHN0cmluZztcbiAgICBjYXB0aW9uPzogc3RyaW5nO1xuICAgIGxpY2Vuc2VkQ29udGVudD86IGJvb2xlYW47XG4gICAgcmVnaW9uUmVzdHJpY3Rpb24/OiB7XG4gICAgICBhbGxvd2VkPzogc3RyaW5nW107XG4gICAgICBibG9ja2VkPzogc3RyaW5nW107XG4gICAgfTtcbiAgICBjb250ZW50UmF0aW5nPzoge1xuICAgICAgLy8gVE9ETyhFZHJpYyk6IEFkZCBiZXR0ZXIgZG9jcyBoZXJlXG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB9O1xuICAgIHByb2plY3Rpb24/OiBzdHJpbmc7XG4gICAgaGFzQ3VzdG9tVGh1bWJuYWlsPzogYm9vbGVhbjtcbiAgfTtcbiAgc3RhdHVzPzoge1xuICAgIHVwbG9hZFN0YXR1cz86IHN0cmluZztcbiAgICBmYWlsdXJlUmVhc29uPzogc3RyaW5nO1xuICAgIHJlamVjdGlvblJlYXNvbj86IHN0cmluZztcbiAgICBwcml2YWN5U3RhdHVzPzogc3RyaW5nO1xuICAgIHB1Ymxpc2hBdD86IHN0cmluZztcbiAgICBsaWNlbnNlPzogc3RyaW5nO1xuICAgIGVtYmVkZGFibGU/OiBib29sZWFuO1xuICAgIHB1YmxpY1N0YXRzVmlld2FibGU/OiBib29sZWFuO1xuICB9O1xuICBzdGF0aXN0aWNzPzoge1xuICAgIHZpZXdDb3VudD86IG51bWJlcjtcbiAgICBsaWtlQ291bnQ/OiBudW1iZXI7XG4gICAgZGlzbGlrZUNvdW50PzogbnVtYmVyO1xuICAgIGZhdm9yaXRlQ291bnQ/OiBudW1iZXI7XG4gICAgY29tbWVudENvdW50PzogbnVtYmVyO1xuICB9O1xuICBwbGF5ZXI/OiB7XG4gICAgZW1iZWRIdG1sPzogc3RyaW5nO1xuICAgIGVtYmVkSGVpZ2h0PzogbnVtYmVyO1xuICAgIGVtYmVkV2lkdGg/OiBudW1iZXI7XG4gIH07XG4gIHRvcGljRGV0YWlscz86IHtcbiAgICB0b3BpY0lkcz86IHN0cmluZ1tdO1xuICAgIHJlbGV2YW50VG9waWNJZHM/OiBzdHJpbmdbXTtcbiAgICB0b3BpY0NhdGVnb3JpZXM/OiBzdHJpbmdbXTtcbiAgfTtcbiAgcmVjb3JkaW5nRGV0YWlscz86IHtcbiAgICByZWNvcmRpbmdEYXRlPzogc3RyaW5nO1xuICB9O1xuICBmaWxlRGV0YWlscz86IHtcbiAgICBmaWxlTmFtZT86IHN0cmluZztcbiAgICBmaWxlU2l6ZT86IG51bWJlcjtcbiAgICBmaWxlVHlwZT86IHN0cmluZztcbiAgICBjb250YWluZXI/OiBzdHJpbmc7XG4gICAgdmlkZW9TdHJlYW1zPzogTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1WaWRlb1N0cmVhbVtdO1xuICAgIGF1ZGlvU3RyZWFtcz86IE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtQXVkaW9TdHJlYW1bXTtcbiAgICBkdXJhdGlvbk1zPzogbnVtYmVyO1xuICAgIGJpdHJhdGVCcHM/OiBudW1iZXI7XG4gICAgY3JlYXRpb25UaW1lPzogc3RyaW5nO1xuICB9O1xuICBwcm9jZXNzaW5nRGV0YWlscz86IHtcbiAgICBwcm9jZXNzaW5nU3RhdHVzPzogc3RyaW5nO1xuICAgIHByb2Nlc3NpbmdQcm9ncmVzcz86IHtcbiAgICAgIHBhcnRzVG90YWw/OiBudW1iZXI7XG4gICAgICBwYXJ0c1Byb2Nlc3NlZD86IG51bWJlcjtcbiAgICAgIHRpbWVMZWZ0TXM/OiBudW1iZXI7XG4gICAgfTtcbiAgICBwcm9jZXNzaW5nRmFpbHVyZVJlYXNvbj86IHN0cmluZztcbiAgICBmaWxlRGV0YWlsc0F2YWlsYWJpbGl0eT86IHN0cmluZztcbiAgICBwcm9jZXNzaW5nSXNzdWVzQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICAgIHRhZ1N1Z2dlc3Rpb25zQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICAgIGVkaXRvclN1Z2dlc3Rpb25zQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICAgIHRodW1ibmFpbHNBdmFpbGFiaWxpdHk/OiBzdHJpbmc7XG4gIH07XG4gIHN1Z2dlc3Rpb25zPzoge1xuICAgIHByb2Nlc3NpbmdFcnJvcnM/OiBzdHJpbmdbXTtcbiAgICBwcm9jZXNzaW5nV2FybmluZ3M/OiBzdHJpbmdbXTtcbiAgICBwcm9jZXNzaW5nSGludHM/OiBzdHJpbmdbXTtcbiAgICB0YWdTdWdnZXN0aW9ucz86IE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtU3VnZ2VzdGlvblRhZ1N1Z2dlc3Rpb25bXTtcbiAgICBlZGl0b3JTdWdnZXN0aW9ucz86IHN0cmluZ1tdO1xuICB9O1xuICBsaXZlU3RyZWFtaW5nRGV0YWlscz86IHtcbiAgICBhY3R1YWxTdGFydFRpbWU/OiBzdHJpbmc7XG4gICAgYWN0dWFsRW5kVGltZT86IHN0cmluZztcbiAgICBzY2hlZHVsZWRTdGFydFRpbWU/OiBzdHJpbmc7XG4gICAgc2NoZWR1bGVkRW5kVGltZT86IHN0cmluZztcbiAgICBjb25jdXJyZW50Vmlld2Vycz86IG51bWJlcjtcbiAgICBhY3RpdmVMaXZlQ2hhdElkPzogc3RyaW5nO1xuICB9O1xuICBsb2NhbGl6YXRpb25zPzogTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1Mb2NhbGl6YXRpb25zO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0IGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY1Jlc3VsdCB7XG4gIG5leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIHByZXZQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIHBhZ2VJbmZvPzoge1xuICAgIHRvdGFsUmVzdWx0cz86IG51bWJlcjtcbiAgICByZXN1bHRzUGVyUGFnZT86IG51bWJlcjtcbiAgfTtcbiAgaXRlbXM/OiBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbVtdO1xufVxuIl19