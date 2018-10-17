/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Options for {\@link NgxYtdApiVideosService#getRating}
 * @record
 */
export function NgxYtdApiVideosGetRatingOpts() { }
if (false) {
    /**
     * Specifies a comma-separated list of the YouTube video ID(s) for retrieving rating data
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating#id for more info
     * @type {?}
     */
    NgxYtdApiVideosGetRatingOpts.prototype.id;
    /**
     * Note: This parameter is optional.
     * Note: This parameter can only be used in a properly authorized request.
     * Note: This parameter is intended for YouTube Creators.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating#onBehalfOfContentOwner for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosGetRatingOpts.prototype.onBehalfOfContentOwner;
}
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
export function NgxYtdApiVideosResourceSuggestionTagSuggestion() { }
if (false) {
    /**
     * The keyword tag suggested for the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#suggestions.tagSuggestions[].tag for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceSuggestionTagSuggestion.prototype.tag;
    /**
     * An array of video categories for which the tag is relevant
     *
     * See https://developers.google.com/youtube/v3/docs/videos#suggestions.tagSuggestions[].categoryRestricts[] for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceSuggestionTagSuggestion.prototype.categoryRestricts;
}
/**
 * @record
 */
export function NgxYtdApiVideosResourceAudioStream() { }
if (false) {
    /**
     * The number of audio channels that the stream contains
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.audioStreams[].channelCount for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceAudioStream.prototype.channelCount;
    /**
     * The audio codec that the stream uses
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.audioStreams[].codec for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceAudioStream.prototype.codec;
    /**
     * The audio stream's bitrate, in bits per second
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.audioStreams[].bitrateBps for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceAudioStream.prototype.bitrateBps;
    /**
     * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.audioStreams[].vendor for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceAudioStream.prototype.vendor;
}
/**
 * @record
 */
export function NgxYtdApiVideosResourceVideoStream() { }
if (false) {
    /**
     * The encoded video's content width in pixels
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].widthPixels for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceVideoStream.prototype.widthPixels;
    /**
     * The encoded video's content height in pixels
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].heightPixels for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceVideoStream.prototype.heightPixels;
    /**
     * The video's stream rate in frames per second (FPS)
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].frameRateFps for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceVideoStream.prototype.frameRateFps;
    /**
     * The video content's display aspect ratio, which specifies the aspect ratio in which
     * the video should be displayed.
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].aspectRatio for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceVideoStream.prototype.aspectRatio;
    /**
     * The video codec that the stream uses
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].codec for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceVideoStream.prototype.codec;
    /**
     * The video stream's bitrate in bits per second
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].bitrateBps for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceVideoStream.prototype.bitrateBps;
    /**
     * The amount that YouTube needs to rotate the original source content to properly display the video
     * Valid values:
     * - `clockwise`: Indicates that the video needs to be rotated 90° clockwise
     * - `counterClockwise`: Indicates that the video needs to be rotated 90° counter-cockwise
     * - `none`: Indicates that the video does not need to be rotated
     * - `other`: Indicates that the video needs to be rotated in some other, non-trivial way
     * - `upsideDown`: Indicates that the video needs to be rotated upside down
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].rotation for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceVideoStream.prototype.rotation;
    /**
     * A value that uniquely identifies a vendor
     * Note: Typically, the value is a four-letter vendor code
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails.videoStreams[].vendor for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceVideoStream.prototype.vendor;
}
/**
 * @record
 */
export function NgxYtdApiVideosResourceLocalizations() { }
/**
 * @record
 */
export function NgxYtdApiVideosResourceLocalization() { }
if (false) {
    /**
     * The localized video title
     *
     * See https://developers.google.com/youtube/v3/docs/videos#localizations.(key).title for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceLocalization.prototype.title;
    /**
     * The localized video description
     *
     * See https://developers.google.com/youtube/v3/docs/videos#localizations.(key).description for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceLocalization.prototype.description;
}
/**
 * @record
 */
export function NgxYtdApiVideosResourceThumbnails() { }
/**
 * @record
 */
export function NgxYtdApiVideosResourceThumbnail() { }
if (false) {
    /**
     * The URL of the thumbnail
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceThumbnail.prototype.url;
    /**
     * The width of the thumbnail
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceThumbnail.prototype.width;
    /**
     * The height of the thumbnail
     * @type {?|undefined}
     */
    NgxYtdApiVideosResourceThumbnail.prototype.height;
}
/**
 * @deprecated Use {\@link NgxYtdApiVideosResourceAudioStream} instead
 * @record
 */
export function NgxYtdApiVideosListResultItemAudioStream() { }
/**
 * @deprecated Use {\@link NgxYtdApiVideosResourceLocalization} instead
 * @record
 */
export function NgxYtdApiVideosListResultItemLocalization() { }
/**
 * @deprecated Use {\@link NgxYtdApiVideosResourceLocalizations} instead
 * @record
 */
export function NgxYtdApiVideosListResultItemLocalizations() { }
/**
 * @deprecated Use {\@link NgxYtdApiVideosResourceThumbnail} instead
 * @record
 */
export function NgxYtdApiVideosListResultItemThumbnail() { }
/**
 * @deprecated Use {\@link NgxYtdApiVideosResourceThumbnails} instead
 * @record
 */
export function NgxYtdApiVideosListResultItemThumbnails() { }
/**
 * @deprecated Use {\@link NgxYtdApiVideosResourceSuggestionTagSuggestion} instead
 * @record
 */
export function NgxYtdApiVideosListResultItemSuggestionTagSuggestion() { }
/**
 * @deprecated Use {\@link NgxYtdApiVideosResourceVideoStream} instead
 * @record
 */
export function NgxYtdApiVideosListResultItemVideoStream() { }
/**
 * A video resource
 * @record
 */
export function NgxYtdApiVideosResource() { }
if (false) {
    /**
     * Identifies the result's type.
     * (Note: This value should be set to `youtube#video`)
     *
     * See https://developers.google.com/youtube/v3/docs/videos#kind for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.kind;
    /**
     * The Etag of this resource.
     *
     * See https://developers.google.com/youtube/v3/docs/videos#etag for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.etag;
    /**
     * The ID used by YouTube to uniquely identify the video.
     *
     * See https://developers.google.com/youtube/v3/docs/videos#id for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.id;
    /**
     * Contains basic details about the video (e.g. title, description, category)
     *
     * See https://developers.google.com/youtube/v3/docs/videos#snippet for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.snippet;
    /**
     * Contains info about the video content
     *
     * See https://developers.google.com/youtube/v3/docs/videos#contentDetails for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.contentDetails;
    /**
     * Contains info about the video's uploading, processing and privacy statuses
     *
     * See https://developers.google.com/youtube/v3/docs/videos#status for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.status;
    /**
     * Contains statistics about the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#statistics for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.statistics;
    /**
     * Contains information used to play the video in an embedded player
     *
     * See https://developers.google.com/youtube/v3/docs/videos#player for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.player;
    /**
     * Contains information about topics associated with the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#topicDetails for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.topicDetails;
    /**
     * Contains information about the location, date and address where the video was recorded
     *
     * See https://developers.google.com/youtube/v3/docs/videos#recordingDetails for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.recordingDetails;
    /**
     * Contains info about the video file that was uploaded to YouTube (such as the file's resolution,
     * duration, audio, etc.)
     * Note: This data can only be retrieved by the video owner
     *
     * See https://developers.google.com/youtube/v3/docs/videos#fileDetails for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.fileDetails;
    /**
     * Contains info about YouTube's progress in processing the uploaded video file
     *
     * See https://developers.google.com/youtube/v3/docs/videos#processingDetails for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.processingDetails;
    /**
     * Contains suggestions that identify opportunities to improve the video quality or the metadata
     * for the uploaded video
     *
     * See https://developers.google.com/youtube/v3/docs/videos#suggestions for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.suggestions;
    /**
     * Contains metadata about a live video broadcast
     * Note: This will be present if the video is an upcoming, live or completed live broadcast
     *
     * See https://developers.google.com/youtube/v3/docs/videos#liveStreamingDetails for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.liveStreamingDetails;
    /**
     * Contains translations of the video's metadata
     * @type {?|undefined}
     */
    NgxYtdApiVideosResource.prototype.localizations;
}
/**
 * @deprecated Use {\@link NgxYtdApiVideosResource} instead
 * @record
 */
export function NgxYtdApiVideosListResultItem() { }
/**
 * @record
 */
export function NgxYtdApiVideosListResult() { }
if (false) {
    /**
     * The token that can be passed via the `pageToken` parameter to retrieve the next page
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#nextPageToken for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosListResult.prototype.nextPageToken;
    /**
     * The token that can be passed via the `pageToken` parameter to retrieve the previous page
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#prevPageToken for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosListResult.prototype.prevPageToken;
    /**
     * Contains paging info for the results
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#pageInfo fror more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosListResult.prototype.pageInfo;
    /**
     * A list of videos that match the request criteria
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#items[] for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosListResult.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJ2aWRlb3MveXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0Esa0RBZUM7Ozs7Ozs7O0lBVEMsMENBQVc7Ozs7Ozs7OztJQVFYLDhEQUFnQzs7Ozs7O0FBTWxDLDZDQTZFQzs7Ozs7Ozs7OztJQXJFQyx3Q0FBc0I7Ozs7Ozs7SUFNdEIscUNBQVk7Ozs7Ozs7Ozs7SUFTWiwyQ0FBOEI7Ozs7OztJQUs5QixxQ0FBWTs7Ozs7Ozs7OztJQVNaLDRDQUFtQjs7Ozs7Ozs7O0lBUW5CLDZDQUFvQjs7Ozs7Ozs7OztJQVNwQiwyQ0FBa0I7Ozs7Ozs7OztJQVFsQiw0Q0FBbUI7Ozs7Ozs7SUFNbkIsNkNBQW9COzs7Ozs7Ozs7SUFRcEIsb0RBQTJCOzs7OztBQUc3QixvRUFhQzs7Ozs7Ozs7SUFQQyw2REFBYTs7Ozs7OztJQU1iLDJFQUE2Qjs7Ozs7QUFHL0Isd0RBeUJDOzs7Ozs7OztJQW5CQywwREFBc0I7Ozs7Ozs7SUFNdEIsbURBQWU7Ozs7Ozs7SUFNZix3REFBb0I7Ozs7Ozs7SUFNcEIsb0RBQWdCOzs7OztBQUdsQix3REF5REM7Ozs7Ozs7O0lBbkRDLHlEQUFxQjs7Ozs7OztJQU1yQiwwREFBc0I7Ozs7Ozs7SUFNdEIsMERBQXNCOzs7Ozs7OztJQU90Qix5REFBcUI7Ozs7Ozs7SUFNckIsbURBQWU7Ozs7Ozs7SUFNZix3REFBb0I7Ozs7Ozs7Ozs7Ozs7SUFZcEIsc0RBQWtCOzs7Ozs7OztJQU9sQixvREFBZ0I7Ozs7O0FBR2xCLDBEQU9DOzs7O0FBRUQseURBYUM7Ozs7Ozs7O0lBUEMsb0RBQWU7Ozs7Ozs7SUFNZiwwREFBcUI7Ozs7O0FBR3ZCLHVEQWlCQzs7OztBQUVELHNEQWFDOzs7Ozs7SUFUQywrQ0FBYTs7Ozs7SUFJYixpREFBZTs7Ozs7SUFJZixrREFBZ0I7Ozs7OztBQU9sQiw4REFBdUc7Ozs7O0FBTXZHLCtEQUF5Rzs7Ozs7QUFNekcsZ0VBQTJHOzs7OztBQU0zRyw0REFBbUc7Ozs7O0FBTW5HLDZEQUFxRzs7Ozs7QUFNckcsMEVBQStIOzs7OztBQU0vSCw4REFBdUc7Ozs7O0FBSXZHLDZDQXlzQkM7Ozs7Ozs7OztJQWxzQkMsdUNBQWM7Ozs7Ozs7SUFNZCx1Q0FBYzs7Ozs7OztJQU1kLHFDQUFZOzs7Ozs7O0lBTVosMENBa0dFOzs7Ozs7O0lBTUYsaURBMEZFOzs7Ozs7O0lBTUYseUNBbUVFOzs7Ozs7O0lBTUYsNkNBK0JFOzs7Ozs7O0lBTUYseUNBbUJFOzs7Ozs7O0lBTUYsK0NBdUJFOzs7Ozs7O0lBTUYsbURBOENFOzs7Ozs7Ozs7SUFRRiw4Q0ErREU7Ozs7Ozs7SUFNRixvREFpRkU7Ozs7Ozs7O0lBT0YsOENBeURFOzs7Ozs7OztJQU9GLHVEQTRDRTs7Ozs7SUFJRixnREFBcUQ7Ozs7OztBQU12RCxtREFBaUY7Ozs7QUFDakYsK0NBc0NDOzs7Ozs7OztJQWhDQyxrREFBdUI7Ozs7Ozs7SUFNdkIsa0RBQXVCOzs7Ozs7O0lBTXZCLDZDQWFFOzs7Ozs7O0lBTUYsMENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmd4WXRkQXBpR2VuZXJpY09wdHMsIE5neFl0ZEFwaUdlbmVyaWNSZXNvdXJjZSB9IGZyb20gJ25neC15dGQtYXBpL2NvcmUnO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NTZXJ2aWNlI2dldFJhdGluZ31cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdPcHRzIGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY09wdHMge1xuICAvKipcbiAgICogU3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdGhlIFlvdVR1YmUgdmlkZW8gSUQocykgZm9yIHJldHJpZXZpbmcgcmF0aW5nIGRhdGFcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvZ2V0UmF0aW5nI2lkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBvcHRpb25hbC5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgY2FuIG9ubHkgYmUgdXNlZCBpbiBhIHByb3Blcmx5IGF1dGhvcml6ZWQgcmVxdWVzdC5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgaW50ZW5kZWQgZm9yIFlvdVR1YmUgQ3JlYXRvcnMuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2dldFJhdGluZyNvbkJlaGFsZk9mQ29udGVudE93bmVyIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG9uQmVoYWxmT2ZDb250ZW50T3duZXI/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3Ige0BsaW5rIE5neFl0ZEFwaVZpZGVvU2VydmljZSNsaXN0fVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzIGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY09wdHMge1xuICAvKipcbiAgICogSWRlbnRpZmllcyB0aGUgY2hhcnQgdGhhdCBzaG91bGQgYmUgcmV0cmlldmVkLlxuICAgKiBBY2NlcHRhYmxlIHZhbHVlczpcbiAgICogLSBgbW9zdFBvcHVsYXJgOiBSZXR1cm4gdGhlIG1vc3QgcG9wdWxhciB2aWRlb3MgZm9yIHRoZSBzcGVjaWZpZWQgY29udGVudCByZWdpb24gYW5kIHZpZGVvIGNhdGVnb3J5LlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjY2hhcnR8ZGV2ZWxvcGVyIGRvY3N9IGZvciBtb3JlIGluZm8uXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGEgZmlsdGVyIGFuZCBvbmx5IG9uZSBmaWx0ZXIgaXMgYWxsb3dlZFxuICAgKi9cbiAgY2hhcnQ/OiAnbW9zdFBvcHVsYXInO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdGhlIFlvdVR1YmUgdmlkZW8gSUQocykgZm9yIHRoZSByZXNvdXJjZShzKSB0aGF0IGFyZSBiZWluZyByZXRyaWV2ZWQuXG4gICAqIEluIGEgdmlkZW8gcmVzb3VyY2UsIHRoZSBgaWRgIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgdmlkZW8ncyBJRC5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgYSBmaWx0ZXIgYW5kIG9ubHkgb25lIGZpbHRlciBpcyBhbGxvd2VkXG4gICAqL1xuICBpZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgQVBJIHRvIHJldHVybiB2aWRlb3MgdGhhdCBhcmUgbGlrZWQgb3IgZGlzbGlrZWQgYnkgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgKiBBY2NlcHRhYmxlIHZhbHVlczpcbiAgICogLSBgZGlzbGlrZWA6IFJldHVybnMgb25seSB2aWRlb3MgdGhhdCBhcmUgZGlzbGlrZWQgYnkgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgKiAtIGBsaWtlYDogUmV0dXJucyBvbmx5IHZpZGVvcyB0aGF0IGFyZSBsaWtlZCBieSB0aGUgYXV0aGVudGljYXRlZCB1c2VyXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGNhbiBvbmx5IGJlIHVzZWQgaW4gYSBwcm9wZXJseSBhdXRob3JpemVkIHJlcXVlc3QuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGEgZmlsdGVyIGFuZCBvbmx5IG9uZSBmaWx0ZXIgaXMgYWxsb3dlZFxuICAgKi9cbiAgbXlSYXRpbmc/OiAnZGlzbGlrZScgfCAnbGlrZSc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIEFQSSB0byByZXR1cm4gbG9jYWxpemVkIHJlc291cmNlIG1ldGFkYXRhIGZvciBhIHNwZWNpZmljIGxhbmd1YWdlIHRoYXQgdGhlIFlvdVR1YmUgd2Vic2l0ZSBzdXBwb3J0cy5cbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I2hsfGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvLlxuICAgKi9cbiAgaGw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG1heGltdW0gaGVpZ2h0IG9mIHRoZSBlbWJlZGRlZCBZb3VUdWJlIHBsYXllciByZXR1cm5lZCBpbiB0aGUgYHBsYXllci5lbWJlZEh0bWxgIHByb3BlcnR5LlxuICAgKiBUaGlzIHBhcmFtZXRlciBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IGEgaGVpZ2h0IGFwcHJvcHJpYXRlIGZvciB5b3VyIGFwcCdzIGxheW91dC5cbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I21heEhlaWdodHxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKiBOb3RlOiBJZiB0aGUgYG1heFdpZHRoYCBwcm9wZXJ0eSBpcyBhbHNvIHNwZWNpZmllZCwgdGhlIHBsYXllciBtYXkgYmUgc2hvcnRlclxuICAgKiB0aGFuIHRoZSBgbWF4SGVpZ2h0YCBpbiBvcmRlciB0byBub3QgdmlvbGF0ZSB0aGUgbWF4aW11bSB3aWR0aC5cbiAgICogQWNjZXB0YWJsZSB2YWx1ZXMgYXJlIDcyIHRvIDgxOTIsIGluY2x1c2l2ZS5cbiAgICovXG4gIG1heEhlaWdodD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWF4aW11bSByZXN1bHRzIHRoYXQgc2hvdWxkIGJlIHJldHVybmVkLlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjbWF4UmVzdWx0c3xkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyB0byBiZSB1c2VkIGZvciB0aGUgYG15UmF0aW5nYCBwYXJhbWV0ZXIsIGJ1dCBzaG91bGQgbm90XG4gICAqIGJlIHVzZWQgd2l0aCB0aGUgYGlkYCBwYXJhbWV0ZXIuXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzOiAxIHRvIDUwLCBpbmNsdXNpdmUuIDUgaXMgdGhlIGRlZmF1bHQgbnVtYmVyLlxuICAgKi9cbiAgbWF4UmVzdWx0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgZW1iZWRkZWQgWW91VHViZSBwbGF5ZXIgcmV0dXJuZWQgaW4gdGhlIGBwbGF5ZXIuZW1iZWRIdG1sYCBwcm9wZXJ0eS5cbiAgICogVGhpcyBwYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBhIHdpZHRoIGFwcHJvcHJpYXRlIGZvciB5b3VyIGFwcCdzIGxheW91dC5cbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I21heFdpZHRofGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqIE5vdGU6IElmIHRoZSBgbWF4SGVpZ2h0YCBwcm9wZXJ0eSBpcyBhbHNvIHNwZWNpZmllZCwgdGhlIHBsYXllciBtYXkgYmUgc2hvcnRlclxuICAgKiB0aGFuIHRoZSBgbWF4V2lkdGhgIGluIG9yZGVyIHRvIG5vdCB2aW9sYXRlIHRoZSBtYXhpbXVtIHdpZHRoLlxuICAgKiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgNzIgdG8gODE5MiwgaW5jbHVzaXZlLlxuICAgKi9cbiAgbWF4V2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBJZGVudGlmaWVzIGEgc3BlY2lmaWMgcGFnZSBpbiB0aGUgcmVzdWx0IHNldCB0aGF0IHNob3VsZCBiZSByZXR1cm5lZC5cbiAgICpcbiAgICogU2VlIHRoZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3BhZ2VUb2tlbnxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyB0byBiZSB1c2VkIHdpdGggdGhlIGBteVJhdGluZ2AgcGFyYW1ldGVyLCBidXQgaXMgbm90IHRvIGJlIHVzZWRcbiAgICogd2l0aCB0aGUgYGlkYCBwYXJhbWV0ZXIuXG4gICAqL1xuICBwYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUZWxscyB0aGUgQVBJIHRvIHNlbGVjdCBhIHZpZGVvIGNoYXJ0IGF2YWlsYWJsZSBpbiB0aGUgc3BlY2lmaWMgcmVnaW9uLlxuICAgKiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjcmVnaW9uQ29kZXxkZXZlbG9wZXIgZG9jc30gZm9yIG1vcmUgaW5mb1xuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyB0byBvbmx5IGJlIHVzZWQgd2l0aCB0aGUgYGNoYXJ0YCBwYXJhbWV0ZXIuXG4gICAqL1xuICByZWdpb25Db2RlPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhpcyBwcm9wZXJ0eSBpZGVudGlmaWVzIHRoZSB2aWRlbyBjYXRlZ29yeSBmb3Igd2hpY2ggdGhlIHZpZGVvIHNob3VsZCBiZSByZXRyaWV2ZWQuXG4gICAqIFNlZSB0aGUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNyZWdpb25Db2RlfGRldmVsb3BlciBkb2NzfSBmb3IgbW9yZSBpbmZvXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIHRvIG9ubHkgYmUgdXNlZCB3aXRoIHRoZSBgY2hhcnRgIHBhcmFtZXRlci5cbiAgICogQnkgZGVmYXVsdCwgY2hhcnRzIGFyZSBub3QgcmVzdHJpY3RlZCB0byBhIHBhcnRpY3VsYXIgY2F0ZWdvcnkuXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuXG4gICAqL1xuICB2aWRlb0NhdGVnb3J5QnlJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVN1Z2dlc3Rpb25UYWdTdWdnZXN0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBrZXl3b3JkIHRhZyBzdWdnZXN0ZWQgZm9yIHRoZSB2aWRlb1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdWdnZXN0aW9ucy50YWdTdWdnZXN0aW9uc1tdLnRhZyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB0YWc/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiB2aWRlbyBjYXRlZ29yaWVzIGZvciB3aGljaCB0aGUgdGFnIGlzIHJlbGV2YW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N1Z2dlc3Rpb25zLnRhZ1N1Z2dlc3Rpb25zW10uY2F0ZWdvcnlSZXN0cmljdHNbXSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBjYXRlZ29yeVJlc3RyaWN0cz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlQXVkaW9TdHJlYW0ge1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBhdWRpbyBjaGFubmVscyB0aGF0IHRoZSBzdHJlYW0gY29udGFpbnNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuYXVkaW9TdHJlYW1zW10uY2hhbm5lbENvdW50IGZvciBtb3JlIGluZm9cbiAgICovXG4gIGNoYW5uZWxDb3VudD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBhdWRpbyBjb2RlYyB0aGF0IHRoZSBzdHJlYW0gdXNlc1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5hdWRpb1N0cmVhbXNbXS5jb2RlYyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBjb2RlYz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBhdWRpbyBzdHJlYW0ncyBiaXRyYXRlLCBpbiBiaXRzIHBlciBzZWNvbmRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuYXVkaW9TdHJlYW1zW10uYml0cmF0ZUJwcyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBiaXRyYXRlQnBzPzogbnVtYmVyO1xuICAvKipcbiAgICogQSB2YWx1ZSB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgYSB2aWRlbyB2ZW5kb3IuIFR5cGljYWxseSwgdGhlIHZhbHVlIGlzIGEgZm91ci1sZXR0ZXIgdmVuZG9yIGNvZGUuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmF1ZGlvU3RyZWFtc1tdLnZlbmRvciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2ZW5kb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VWaWRlb1N0cmVhbSB7XG4gIC8qKlxuICAgKiBUaGUgZW5jb2RlZCB2aWRlbydzIGNvbnRlbnQgd2lkdGggaW4gcGl4ZWxzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdLndpZHRoUGl4ZWxzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHdpZHRoUGl4ZWxzPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGVuY29kZWQgdmlkZW8ncyBjb250ZW50IGhlaWdodCBpbiBwaXhlbHNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMudmlkZW9TdHJlYW1zW10uaGVpZ2h0UGl4ZWxzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGhlaWdodFBpeGVscz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSB2aWRlbydzIHN0cmVhbSByYXRlIGluIGZyYW1lcyBwZXIgc2Vjb25kIChGUFMpXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdLmZyYW1lUmF0ZUZwcyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBmcmFtZVJhdGVGcHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgdmlkZW8gY29udGVudCdzIGRpc3BsYXkgYXNwZWN0IHJhdGlvLCB3aGljaCBzcGVjaWZpZXMgdGhlIGFzcGVjdCByYXRpbyBpbiB3aGljaFxuICAgKiB0aGUgdmlkZW8gc2hvdWxkIGJlIGRpc3BsYXllZC5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMudmlkZW9TdHJlYW1zW10uYXNwZWN0UmF0aW8gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgYXNwZWN0UmF0aW8/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgdmlkZW8gY29kZWMgdGhhdCB0aGUgc3RyZWFtIHVzZXNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMudmlkZW9TdHJlYW1zW10uY29kZWMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgY29kZWM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdmlkZW8gc3RyZWFtJ3MgYml0cmF0ZSBpbiBiaXRzIHBlciBzZWNvbmRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMudmlkZW9TdHJlYW1zW10uYml0cmF0ZUJwcyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBiaXRyYXRlQnBzPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGFtb3VudCB0aGF0IFlvdVR1YmUgbmVlZHMgdG8gcm90YXRlIHRoZSBvcmlnaW5hbCBzb3VyY2UgY29udGVudCB0byBwcm9wZXJseSBkaXNwbGF5IHRoZSB2aWRlb1xuICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAqIC0gYGNsb2Nrd2lzZWA6IEluZGljYXRlcyB0aGF0IHRoZSB2aWRlbyBuZWVkcyB0byBiZSByb3RhdGVkIDkwwrAgY2xvY2t3aXNlXG4gICAqIC0gYGNvdW50ZXJDbG9ja3dpc2VgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gbmVlZHMgdG8gYmUgcm90YXRlZCA5MMKwIGNvdW50ZXItY29ja3dpc2VcbiAgICogLSBgbm9uZWA6IEluZGljYXRlcyB0aGF0IHRoZSB2aWRlbyBkb2VzIG5vdCBuZWVkIHRvIGJlIHJvdGF0ZWRcbiAgICogLSBgb3RoZXJgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gbmVlZHMgdG8gYmUgcm90YXRlZCBpbiBzb21lIG90aGVyLCBub24tdHJpdmlhbCB3YXlcbiAgICogLSBgdXBzaWRlRG93bmA6IEluZGljYXRlcyB0aGF0IHRoZSB2aWRlbyBuZWVkcyB0byBiZSByb3RhdGVkIHVwc2lkZSBkb3duXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdLnJvdGF0aW9uIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHJvdGF0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogQSB2YWx1ZSB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgYSB2ZW5kb3JcbiAgICogTm90ZTogVHlwaWNhbGx5LCB0aGUgdmFsdWUgaXMgYSBmb3VyLWxldHRlciB2ZW5kb3IgY29kZVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy52aWRlb1N0cmVhbXNbXS52ZW5kb3IgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmVuZG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlTG9jYWxpemF0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIGxvY2FsaXplZCB0ZXh0IGFzc29jaWF0ZWQgd2l0aCB0aGUga2V5IHZhbHVlXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2xvY2FsaXphdGlvbnMuKGtleSkgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VMb2NhbGl6YXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VMb2NhbGl6YXRpb24ge1xuICAvKipcbiAgICogVGhlIGxvY2FsaXplZCB2aWRlbyB0aXRsZVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsb2NhbGl6YXRpb25zLihrZXkpLnRpdGxlIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGxvY2FsaXplZCB2aWRlbyBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsb2NhbGl6YXRpb25zLihrZXkpLmRlc2NyaXB0aW9uIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVGh1bWJuYWlscyB7XG4gIC8qKlxuICAgKiBWYWxpZCBrZXkgdmFsdWVzOlxuICAgKiAtIGBkZWZhdWx0YDogVGhlIGRlZmF1bHQgdGh1bWJuYWlsIGltYWdlXG4gICAqIChEZWZhdWx0IHNpemUgb2YgdmlkZW8gdGh1bWJuYWlsOiAxMjBweCB3aWRlLCA5MHB4IHRhbGw7IGNoYW5uZWwgdGh1bWJuYWlsOiA4OHB4IHdpZGUsIDg4cHggdGFsbClcbiAgICogLSBgbWVkaXVtYDogQSBoaWdoZXIgcmVzb2x1dGlvbiB2ZXJzaW9uIG9mIHRoZSB0aHVtYm5haWwgdGhhbiB0aGUgYGRlZmF1bHRgIHJlc29sdXRpb24gaW1hZ2VcbiAgICogKERlZmF1bHQgc2l6ZSBvZiB2aWRlbyB0aHVtYm5haWw6IDMyMHB4IHdpZGUsIDE4MHB4IHRhbGw7IGNoYW5uZWwgdGh1bWJuYWlsOiAyNDBweCB3aWRlLCAyNDBweCB0YWxsKVxuICAgKiAtIGBoaWdoYDogQSBoaWdoZXIgcmVzb2x1dGlvbiB2ZXJzaW9uIG9mIHRoZSB0aHVtYm5haWwgdGhhbiB0aGUgYG1lZGl1bWAgcmVzb2x1dGlvbiBpbWFnZVxuICAgKiAoRGVmYXVsdCBzaXplIG9mIHZpZGVvIHRodW1ibmFpbDogNDgwcHggd2lkZSwgMzYwcHggdGFsbDsgY2hhbm5lbCB0aHVtYm5haWw6IDgwMHB4IHdpZGUsIDgwMHB4IHRhbGwpXG4gICAqIC0gYHN0YW5kYXJkYDogQSBoaWdoZXIgcmVzb2x1dGlvbiB2ZXJzaW9uIG9mIHRoZSB0aHVtYm5haWwgdGhhbiB0aGUgYGhpZ2hgIHJlc29sdXRpb24gaW1hZ2VcbiAgICogKERlZmF1bHQgc2l6ZSBvZiB2aWRlbyB0aHVtYm5haWw6IDY0MHB4IHdpZGUsIDQ4MHB4IHRhbGwpXG4gICAqIC0gYG1heHJlc2A6IFRoZSBoaWdoZXN0IHJlc29sdXRpb24gdmVyc2lvbiBvZiB0aGUgdGh1bWJuYWlsXG4gICAqIChEZWZhdWx0IHNpemUgb2YgdmlkZW8gdGh1bWJuYWlsOiAxMjgwcHggd2lkZSwgNzIwcHggdGFsbClcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC50aHVtYm5haWxzLihrZXkpIGZvciBtb3JlIGluZm9cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVGh1bWJuYWlsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVGh1bWJuYWlsIHtcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIHRodW1ibmFpbFxuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSB0aHVtYm5haWxcbiAgICovXG4gIHdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgdGh1bWJuYWlsXG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUF1ZGlvU3RyZWFtfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1BdWRpb1N0cmVhbSBleHRlbmRzIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlQXVkaW9TdHJlYW0ge31cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlTG9jYWxpemF0aW9ufSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1Mb2NhbGl6YXRpb24gZXh0ZW5kcyBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUxvY2FsaXphdGlvbiB7fVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VMb2NhbGl6YXRpb25zfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1Mb2NhbGl6YXRpb25zIGV4dGVuZHMgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VMb2NhbGl6YXRpb25zIHt9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbH0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtVGh1bWJuYWlsIGV4dGVuZHMgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VUaHVtYm5haWwge31cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVGh1bWJuYWlsc30gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtVGh1bWJuYWlscyBleHRlbmRzIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVGh1bWJuYWlscyB7fVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VTdWdnZXN0aW9uVGFnU3VnZ2VzdGlvbn0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtU3VnZ2VzdGlvblRhZ1N1Z2dlc3Rpb24gZXh0ZW5kcyBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVN1Z2dlc3Rpb25UYWdTdWdnZXN0aW9uIHt9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVZpZGVvU3RyZWFtfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1WaWRlb1N0cmVhbSBleHRlbmRzIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVmlkZW9TdHJlYW0ge31cbi8qKlxuICogQSB2aWRlbyByZXNvdXJjZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlIHtcbiAgLyoqXG4gICAqIElkZW50aWZpZXMgdGhlIHJlc3VsdCdzIHR5cGUuXG4gICAqIChOb3RlOiBUaGlzIHZhbHVlIHNob3VsZCBiZSBzZXQgdG8gYHlvdXR1YmUjdmlkZW9gKVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNraW5kIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGtpbmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgRXRhZyBvZiB0aGlzIHJlc291cmNlLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNldGFnIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGV0YWc/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgSUQgdXNlZCBieSBZb3VUdWJlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoZSB2aWRlby5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjaWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDb250YWlucyBiYXNpYyBkZXRhaWxzIGFib3V0IHRoZSB2aWRlbyAoZS5nLiB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5KVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHNuaXBwZXQ/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIGRhdGUgYW5kIHRpbWUgdGhhdCB0aGUgdmlkZW8gd2FzIHB1Ymxpc2hlZFxuICAgICAqIE5vdGU6IFRoaXMgdGltZSBjYW4gYmUgZGlmZmVyZW50IHRoYW4gdGhlIHRpbWUgdGhhdCB0aGUgdmlkZW8gd2FzIHVwbG9hZGVkXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LnB1Ymxpc2hlZEF0IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwdWJsaXNoZWRBdD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCBieSBZb3VUdWJlIHRvIGlkZW50aWZ5IHRoZSBjaGFubmVsIHRoYXQgdGhlIHZpZGVvIHdhcyB1cGxvYWRlZCB0b1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5jaGFubmVsSWQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNoYW5uZWxJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdmlkZW8ncyB0aXRsZVxuICAgICAqIE5vdGU6IFRoaXMgdmFsdWUgaGFzIGEgbWF4aW11bSBsZW5ndGggb2YgMTAwIGNoYXJhY3RlcnMgYW5kIG1heSBjb250YWluIGFsbCB2YWxpZFxuICAgICAqIFVURi04IGNoYXJhY3RlcnMgZXhjZXB0IGA8YCBhbmQgYD5gLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC50aXRsZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHZpZGVvJ3MgZGVzY3JpcHRpb25cbiAgICAgKiBOb3RlOiBUaGlzIHZhbHVlIGhhcyBhIG1heGltdW0gbGVuZ3RoIG9mIDUwMDAgY2hhcmFjdGVycyBhbmQgbWF5IGNvbnRhaW4gYWxsIHZhbGlkXG4gICAgICogVVRGLTggY2hhcmFjdGVycyBleGNlcHQgYDxgIGFuZCBgPmAuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmRlc2NyaXB0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiB0aHVtYm5haWwgaW1hZ2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQudGh1bWJuYWlscyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdGh1bWJuYWlscz86IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVGh1bWJuYWlscztcbiAgICAvKipcbiAgICAgKiBUaGUgY2hhbm5lbCB0aXRsZSBvZiB0aGUgY2hhbm5lbCB0aGF0IHRoZSB2aWRlbyBiZWxvbmdzIHRvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmNoYW5uZWxUaXRsZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY2hhbm5lbFRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGtleXdvcmQgdGFncyBhc3NvY2lhdGVkIHdpdGggdGhlIHZpZGVvXG4gICAgICogTm90ZTogVGFncyBjYW4gY29udGFpbiBzcGFjZXMuXG4gICAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSdzIHZhbHVlIGhhcyBhIG1heGltdW0gbGVuZ3RoIG9mIDUwMCBjaGFyYWN0ZXJzLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC50YWdzW10gZm9yIG1vcmUgaW5mby5cbiAgICAgKi9cbiAgICB0YWdzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogVGhlIFlvdVR1YmUgdmlkZW8gY2F0ZWdvcnkgYXNzb2NpYXRlZCB3aXRoIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5jYXRlZ29yeUlkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjYXRlZ29yeUlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiB0aGUgdmlkZW8gaXMgYW4gdXBjb21pbmcvY3VycmVudGx5IGxpdmUgYnJvYWRjYXN0XG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGxpdmVgXG4gICAgICogLSBgbm9uZWBcbiAgICAgKiAtIGB1cGNvbWluZ2BcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQubGl2ZUJyb2FkY2FzdENvbnRlbnQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGxpdmVCcm9hZGNhc3RDb250ZW50Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBsYW5ndWFnZSBvZiB0aGUgdGV4dCBpbiB0aGUgcmVzb3VyY2UncyBgc25pcHBldC50aXRsZWAgYW5kIGBzbmlwcGV0LmRlc2NyaXB0aW9uYCBwcm9wZXJ0aWVzXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmRlZmF1bHRMYW5ndWFnZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZGVmYXVsdExhbmd1YWdlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGVpdGhlciBhIGxvY2FsaXplZCB0aXRsZSBhbmQgZGVzY3JpcHRpb24gZm9yIHRoZSB2aWRlbyBvciB0aGUgdGl0bGUgaW4gdGhlIGRlZmF1bHRcbiAgICAgKiBsYW5ndWFnZSBmb3IgdGhlIHZpZGVvJ3MgbWV0YWRhdGFcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQubG9jYWxpemVkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBsb2NhbGl6ZWQ/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBsb2NhbGl6ZWQgdmlkZW8gdGl0bGVcbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmxvY2FsaXplZC50aXRsZSBmb3IgbW9yZSBpbmZvXG4gICAgICAgKi9cbiAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbG9jYWxpemVkIGRlc2NyaXB0aW9uXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5sb2NhbGl6ZWQuZGVzY3JpcHRpb24gZm9yIG1vcmUgaW5mb1xuICAgICAgICovXG4gICAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgbGFuZ3VhZ2Ugc3Bva2VuIGluIHRoZSB2aWRlbydzIGRlZmF1bHQgYXVkaW8gdHJhY2tcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQuZGVmYXVsdEF1ZGlvTGFuZ3VhZ2UgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGRlZmF1bHRBdWRpb0xhbmd1YWdlPzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgaW5mbyBhYm91dCB0aGUgdmlkZW8gY29udGVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBjb250ZW50RGV0YWlscz86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSB2aWRlbyBpbiBhbiBJU08gODYwMSBkdXJhdGlvblxuICAgICAqXG4gICAgICogU2VlIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLmR1cmF0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkdXJhdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gaXMgYXZhaWxhYmxlIGluIDJEIG9yIDNEXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5kaW1lbnNpb24gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGRpbWVuc2lvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gaXMgYXZhaWxhYmxlIGluIGhpZ2ggZGVmaW5pdGlvbiBvciBvbmx5IGluIHN0YW5kYXJkIGRlZmluaXRpb25cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgaGRgXG4gICAgICogLSBgc2RgXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5kZWZpbml0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkZWZpbml0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGNhcHRpb25zIGFyZSBhdmFpbGFibGUgZm9yIHRoZSB2aWRlb1xuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBmYWxzZWBcbiAgICAgKiAtIGB0cnVlYFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMuY2FwdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY2FwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gcmVwcmVzZW50cyBsaWNlbnNlZCBjb250ZW50LCB3aGljaCBtZWFucyB0aGF0IHRoZSBjb250ZW50XG4gICAgICogd2FzIHVwbG9hZGVkIHRvIGEgY2hhbm5lbCBsaW5rZWQgdG8gYSBZb3VUdWJlIGNvbnRlbnQgcGFydG5lciBhbmQgdGhlbiBjbGFpbWVkIGJ5IHRoYXRcbiAgICAgKiBwYXJ0bmVyLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMubGljZW5zZWRDb250ZW50IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBsaWNlbnNlZENvbnRlbnQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGluZm8gYWJvdXQgdGhlIGNvdW50cmllcyB3aGVyZSBhIHZpZGVvIGlzL2lzIG5vdCB2aWV3YWJsZS5cbiAgICAgKiBOb3RlOiBUaGlzIG9iamVjdCB3aWxsIGVpdGhlciBoYXZlIHRoZSBgYWxsb3dlZGAgcHJvcGVydHkgb3IgdGhlIGBibG9ja2VkYCBwcm9wZXJ0eVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMucmVnaW9uUmVzdHJpY3Rpb25cbiAgICAgKiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcmVnaW9uUmVzdHJpY3Rpb24/OiB7XG4gICAgICAvKipcbiAgICAgICAqIEEgbGlzdCBvZiByZWdpb24gY29kZXMgdGhhdCBpZGVudGlmeSBjb3VudHJpZXMgd2hlcmUgdGhlIHZpZGVvIGlzIHZpZXdhYmxlIGluXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMucmVnaW9uUmVzdHJpY3Rpb24uYWxsb3dlZFtdXG4gICAgICAgKiBmb3IgbW9yZSBpbmZvXG4gICAgICAgKi9cbiAgICAgIGFsbG93ZWQ/OiBzdHJpbmdbXTtcbiAgICAgIC8qKlxuICAgICAgICogQSBsaXN0IG9mIHJlZ2lvbiBjb2RlcyB0aGF0IGlkZW50aWZ5IGNvdW50cmllcyB3aGVyZSB0aGUgdmlkZW8gaXMgYmxvY2tlZFxuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLnJlZ2lvblJlc3RyaWN0aW9uLmJsb2NrZWRbXVxuICAgICAgICogZm9yIG1vcmUgaW5mb1xuICAgICAgICovXG4gICAgICBibG9ja2VkPzogc3RyaW5nW107XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHJhdGluZyB0aGF0IHRoZSB2aWRlbyByZWNlaXZlZCB1bmRlciB2YXJpb3VzIHJhdGluZyBzY2hlbWVzXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5jb250ZW50UmF0aW5nIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjb250ZW50UmF0aW5nPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5jb250ZW50UmF0aW5nIGZvclxuICAgICAgICogYWxsIGF2YWlsYWJsZSByYXRpbmdzXG4gICAgICAgKi9cbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBwcm9qZWN0aW9uIGZvcm1hdCBvZiB0aGUgdmlkZW9cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgMzYwYFxuICAgICAqIC0gYHJlY3Rhbmd1bGFyYFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMucHJvamVjdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJvamVjdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gdXBsb2FkZXIgaGFzIGFkZGVkIGEgY3VzdG9tIHRodW1ibmFpbCBpbWFnZSBmb3IgdGhlIHZpZGVvXG4gICAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IHZpc2libGUgdG8gdGhlIHZpZGVvIHVwbG9hZGVyXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5oYXNDdXN0b21UaHVtYm5haWwgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGhhc0N1c3RvbVRodW1ibmFpbD86IGJvb2xlYW47XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBpbmZvIGFib3V0IHRoZSB2aWRlbydzIHVwbG9hZGluZywgcHJvY2Vzc2luZyBhbmQgcHJpdmFjeSBzdGF0dXNlc1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgc3RhdHVzPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0dXMgb2YgdGhlIHVwbG9hZGVkIHZpZGVvXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGRlbGV0ZWRgXG4gICAgICogLSBgZmFpbGVkYFxuICAgICAqIC0gYHByb2Nlc3NlZGBcbiAgICAgKiAtIGByZWplY3RlZGBcbiAgICAgKiAtIGB1cGxvYWRlZGBcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXR1cy51cGxvYWRTdGF0dXMgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHVwbG9hZFN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGlzIHZhbHVlIGV4cGxhaW5zIHdoeSBhIHZpZGVvIGZhaWxlZCB0byB1cGxvYWRcbiAgICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgcHJlc2VudCBpZiB0aGUgYHVwbG9hZFN0YXR1c2AgcHJvcGVydHkgaW5kaWNhdGVzIHRoYXQgdGhlIHVwbG9hZFxuICAgICAqIGZhaWxlZC5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXR1cy5mYWlsdXJlUmVhc29uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBmYWlsdXJlUmVhc29uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoaXMgdmFsdWUgZXhwbGFpbnMgd2h5IFlvdVR1YmUgcmVqZWN0ZWQgdGhlIHZpZGVvXG4gICAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IHByZXNlbnQgaWYgdGhlIGB1cGxvYWRTdGF0dXNgIHByb3BlcnR5IGluZGljYXRlcyB0aGF0IHRoZSB1cGxvYWRcbiAgICAgKiB3YXMgcmVqZWN0ZWQuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMucmVqZWN0aW9uUmVhc29uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICByZWplY3Rpb25SZWFzb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHZpZGVvJ3MgcHJpdmFjeSBzdGF0dXNcbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgcHJpdmF0ZWBcbiAgICAgKiAtIGBwdWJsaWNgXG4gICAgICogLSBgdW5saXN0ZWRgXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMucHJpdmFjeVN0YXR1cyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJpdmFjeVN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB0aGUgdmlkZW8gaXMgc2NoZWR1bGVkIHRvIHB1Ymxpc2hcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXR1cy5wdWJsaXNoQXQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHB1Ymxpc2hBdD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdmlkZW8ncyBsaWNlbnNlXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGNyZWF0aXZlQ29tbW9uYFxuICAgICAqIC0gYHlvdXR1YmVgXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMubGljZW5zZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbGljZW5zZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gY2FuIGJlIGVtYmVkZGFibGUgb24gYW5vdGhlciB3ZWJzaXRlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMuZW1iZWRkYWJsZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZW1iZWRkYWJsZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGV4dGVuZGVkIHZpZGVvIHN0YXRpc3RpY3Mgb24gdGhlIHZpZGVvJ3Mgd2F0Y2ggcGFnZSBhcmUgcHVibGljbHlcbiAgICAgKiBhY2Nlc3NpYmxlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMucHVibGljU3RhdHNWaWV3YWJsZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHVibGljU3RhdHNWaWV3YWJsZT86IGJvb2xlYW47XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBzdGF0aXN0aWNzIGFib3V0IHRoZSB2aWRlb1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0aXN0aWNzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHN0YXRpc3RpY3M/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgdmlkZW8gaGFzIGJlZW4gdmlld2VkXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0aXN0aWNzLnZpZXdDb3VudCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdmlld0NvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgdXNlcnMgd2hvIGhhdmUgaW5kaWNhdGVkIHRoYXQgdGhleSBoYXZlIGxpa2VkIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdGlzdGljcy5saWtlQ291bnQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGxpa2VDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHVzZXJzIHdobyBoYXZlIGluZGljYXRlZCB0aGF0IHRoZXkgaGF2ZSBkaXNsaWtlZCB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXRpc3RpY3MuZGlzbGlrZUNvdW50IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkaXNsaWtlQ291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdGlzdGljcy5mYXZvcml0ZUNvdW50IGZvciBtb3JlIGluZm9cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDI4IEF1Z3VzdCAyMDE1LCB0aGUgcHJvcGVydHkncyB2YWx1ZSBpcyBhbHdheXMgc2V0IHRvIDBcbiAgICAgKi9cbiAgICBmYXZvcml0ZUNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgY29tbWVudHMgb24gdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0aXN0aWNzLmNvbW1lbnRDb3VudCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY29tbWVudENvdW50PzogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgaW5mb3JtYXRpb24gdXNlZCB0byBwbGF5IHRoZSB2aWRlbyBpbiBhbiBlbWJlZGRlZCBwbGF5ZXJcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcGxheWVyIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHBsYXllcj86IHtcbiAgICAvKipcbiAgICAgKiBBbiBgPGlmcmFtZT5gIHRhZyB0aGF0IGVtYmVkcyBhIHBsYXllciB0aGF0IHBsYXlzIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcGxheWVyLmVtYmVkSHRtbCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZW1iZWRIdG1sPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHBsYXllciByZXR1cm5lZCBpbiB0aGUgYHBsYXllci5lbWJlZEh0bWxgIHByb3BlcnR5XG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwbGF5ZXIuZW1iZWRIZWlnaHQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGVtYmVkSGVpZ2h0PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgcGxheWVyIHJldHVybmVkIGluIHRoZSBgcGxheWVyLmVtYmVkSHRtbGAgcHJvcGVydHlcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3BsYXllci5lbWJlZFdpZHRoIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBlbWJlZFdpZHRoPzogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdG9waWNzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjdG9waWNEZXRhaWxzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHRvcGljRGV0YWlscz86IHtcbiAgICAvKipcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyN0b3BpY0RldGFpbHMudG9waWNJZHNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMTAgTm92ZW1iZXIgMjAxNiwgdGhlIEFQSSBubyBsb25nZXIgcmV0dXJucyB2YWx1ZXMgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICogYW5kIGFueSB0b3BpY3MgYXNzb2NpYXRlZCB3aXRoIGEgdmlkZW8gYXJlIG5vdyByZXR1cm5lZCBieSB0aGVcbiAgICAgKiBgdG9waWNEZXRhaWxzLnJlbGV2YW50VG9waWNJZHNbXWAgcHJvcGVydHkgdmFsdWUuXG4gICAgICovXG4gICAgdG9waWNJZHM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgdG9waWMgSURzIHRoYXQgYXJlIHJlbGV2YW50IHRvIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjdG9waWNEZXRhaWxzLnJlbGV2YW50VG9waWNJZHNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgMTAgTm92ZW1iZXIgMjAxNiBhbmQgaGFzIGJlZW4gdW5zdXBwb3J0ZWQgc2luY2VcbiAgICAgKiAxMCBOb3ZlbWJlciAyMDE3XG4gICAgICovXG4gICAgcmVsZXZhbnRUb3BpY0lkcz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBXaWtpcGVkaWEgVVJMcyB0aGF0IHByb3ZpZGUgYSBoaWdoLWxldmVsIGRlc2NyaXB0aW9uIG9mIHRoZSB2aWRlbydzIGNvbnRlbnRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3RvcGljRGV0YWlscy50b3BpY0NhdGVnb3JpZXNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdG9waWNDYXRlZ29yaWVzPzogc3RyaW5nW107XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbG9jYXRpb24sIGRhdGUgYW5kIGFkZHJlc3Mgd2hlcmUgdGhlIHZpZGVvIHdhcyByZWNvcmRlZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNyZWNvcmRpbmdEZXRhaWxzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHJlY29yZGluZ0RldGFpbHM/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHRleHQgZGVzY3JpcHRpb24gb2YgdGhlIGxvY2F0aW9uIHdoZXJlIHRoZSB2aWRlbyB3YXMgcmVjb3JkZWRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3JlY29yZGluZ0RldGFpbHMubG9jYXRpb25EZXNjcmlwdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxIEp1bmUgMjAxNywgdGhpcyBwcm9wZXJ0eSBoYXMgYmVlbiBkZXByZWNhdGVkLlxuICAgICAqL1xuICAgIGxvY2F0aW9uRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGdlb2xvY2F0aW9uIGluZm9ybWF0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3RvcGljRGV0YWlscy5sb2NhdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbG9jYXRpb24/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBsYXRpdHVkZSBpbiBkZWdyZWVzXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjdG9waWNEZXRhaWxzLmxvY2F0aW9uLmxhdGl0dWRlIGZvciBtb3JlIGluZm9cbiAgICAgICAqXG4gICAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxIEp1bmUgMjAxNywgdGhpcyBwcm9wZXJ0eSBoYXMgYmVlbiBkZXByZWNhdGVkXG4gICAgICAgKi9cbiAgICAgIGxhdGl0dWRlPzogbnVtYmVyO1xuICAgICAgLyoqXG4gICAgICAgKiBMb25naXR1ZGUgaW4gZGVncmVlc1xuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3RvcGljRGV0YWlscy5sb2NhdGlvbi5sb25naXR1ZGUgZm9yIG1vcmUgaW5mb1xuICAgICAgICpcbiAgICAgICAqIEBkZXByZWNhdGVkIFRoaXMgcHJvcGVydHkgaGFzIGJlZW4gZGVwcmVjYXRlZCBzaW5jZSAxIEp1bmUgMjAxN1xuICAgICAgICovXG4gICAgICBsb25naXR1ZGU/OiBudW1iZXI7XG4gICAgICAvKipcbiAgICAgICAqIEFsdGl0dWRlIGFib3ZlIHRoZSByZWZlcmVuY2UgZWxsaXBzb2lkLCBpbiBtZXRlcnMuXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjdG9waWNEZXRhaWxzLmxvY2F0aW9uLmFsdGl0dWRlIGZvciBtb3JlIGluZm9cbiAgICAgICAqXG4gICAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIHByb3BlcnR5IGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgOSBqdWx5IDIwMThcbiAgICAgICAqL1xuICAgICAgYWx0aXR1ZGU/OiBudW1iZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHZpZGVvIHdhcyByZWNvcmRlZCBpbiBJU08gODYwMSBmb3JtYXRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3JlY29yZGluZ0RldGFpbHMucmVjb3JkaW5nRGF0ZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcmVjb3JkaW5nRGF0ZT86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIGluZm8gYWJvdXQgdGhlIHZpZGVvIGZpbGUgdGhhdCB3YXMgdXBsb2FkZWQgdG8gWW91VHViZSAoc3VjaCBhcyB0aGUgZmlsZSdzIHJlc29sdXRpb24sXG4gICAqIGR1cmF0aW9uLCBhdWRpbywgZXRjLilcbiAgICogTm90ZTogVGhpcyBkYXRhIGNhbiBvbmx5IGJlIHJldHJpZXZlZCBieSB0aGUgdmlkZW8gb3duZXJcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgZmlsZURldGFpbHM/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHVwbG9hZGVkIGZpbGUncyBuYW1lXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5maWxlTmFtZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZmlsZU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHVwbG9hZGVkIGZpbGUncyBzaXplIGluIGJ5dGVzXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5maWxlU2l6ZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZmlsZVNpemU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHVwbG9hZGVkIGZpbGUncyB0eXBlIGFzIGRldGVjdGVkIGJ5IFlvdVR1YmUncyB2aWRlbyBwcm9jZXNzaW5nIGVuZ2luZVxuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBhcmNoaXZlYDogSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgaXMgYW4gYXJjaGl2ZSBmaWxlIChlLmcuIGB6aXBgIGZpbGVzKVxuICAgICAqIC0gYGF1ZGlvYDogSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgaXMgYW4gYXVkaW8gZmlsZSAoZS5nLiBgbXAzYCBmaWxlcylcbiAgICAgKiAtIGBkb2N1bWVudGA6IEluZGljYXRlcyB0aGF0IHRoZSBmaWxlIGlzIGEgZG9jdW1lbnQvdGV4dCBmaWxlIChlLmcuIE1TIFdvcmQgZG9jdW1lbnRzKVxuICAgICAqIC0gYGltYWdlYDogSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgaXMgYW4gaW1hZ2UgZmlsZSAoZS5nLiBgLmpwZWdgIGZpbGVzKVxuICAgICAqIC0gYG90aGVyYDogSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgaXMgYW5vdGhlciBub24tdmlkZW8gZmlsZSB0eXBlXG4gICAgICogLSBgcHJvamVjdGA6IEluZGljYXRlcyB0aGF0IHRoZSBmaWxlIGlzIGEgdmlkZW8gcHJvamVjdCBmaWxlIChlLmcuIGEgTWljcm9zb2Z0IFdpbmRvd3MgTW92aWUgTWFrZXIgcHJvamVjdClcbiAgICAgKiAtIGB2aWRlb2A6IEluZGljYXRlcyB0aGF0IHRoZSBmaWxlIGlzIGEga25vd24gdmlkZW8gZmlsZSB0eXBlIChlLmcuIGBtcDRgIGZpbGVzKVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuZmlsZVR5cGUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGZpbGVUeXBlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB1cGxvYWRlZCB2aWRlbyBmaWxlJ3MgY29udGFpbmVyIGZvcm1hdFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuY29udGFpbmVyIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjb250YWluZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgdmlkZW8gc3RyZWFtcyBjb250YWluZWQgaW4gdGhlIHVwbG9hZGVkIHZpZGVvIGZpbGVcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB2aWRlb1N0cmVhbXM/OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVZpZGVvU3RyZWFtW107XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYXVkaW8gc3RyZWFtcyBjb250YWluZWQgaW4gdGhlIHVwbG9hZGVkIHZpZGVvIGZpbGVcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmF1ZGlvU3RyZWFtc1tdIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBhdWRpb1N0cmVhbXM/OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUF1ZGlvU3RyZWFtW107XG4gICAgLyoqXG4gICAgICogVGhlIGxlbmd0aCBvZiB0aGUgdXBsb2FkZWQgdmlkZW8gaW4gbWlsbGlzZWNvbmRzXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5kdXJhdGlvbk1zIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkdXJhdGlvbk1zPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSB1cGxvYWRlZCB2aWRlbyBmaWxlJ3MgY29tYmluZWQgKGF1ZGlvICYgdmlkZW8pIGJpdHJhdGUgaW4gYml0cyBwZXIgc2Vjb25kXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5iaXRyYXRlQnBzIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBiaXRyYXRlQnBzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHVwbG9hZGVkIHZpZGVvIGZpbGUgd2FzIGNyZWF0ZWQgaW4gSVNPIDg2MDEgZm9ybWF0XG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5jcmVhdGlvblRpbWUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNyZWF0aW9uVGltZT86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIGluZm8gYWJvdXQgWW91VHViZSdzIHByb2dyZXNzIGluIHByb2Nlc3NpbmcgdGhlIHVwbG9hZGVkIHZpZGVvIGZpbGVcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcHJvY2Vzc2luZ0RldGFpbHM/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHZpZGVvJ3MgcHJvY2Vzc2luZyBzdGF0dXNcbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgZmFpbGVkYDogSW5kaWNhdGVzIHRoYXQgdGhlIHZpZGVvIHByb2Nlc3NpbmcgaGFzIGZhaWxlZFxuICAgICAqIC0gYHByb2Nlc3NpbmdgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZFxuICAgICAqIC0gYHN1Y2NlZWRlZGA6IEluZGljYXRlcyB0aGF0IHRoZSB2aWRlbyBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcHJvY2Vlc2VkXG4gICAgICogLSBgdGVybWluYXRlZGA6IEluZGljYXRlcyB0aGF0IHByb2Nlc3NpbmcgaW5mb3JtYXRpb24gaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMucHJvY2Vzc2luZ1N0YXR1cyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJvY2Vzc2luZ1N0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBDb250YWlucyBpbmZvIGFib3V0IHRoZSBwcm9ncmVzcyBZb3VUdWJlIGhhcyBtYWRlIGluIHByb2Nlc3NpbmcgdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nUHJvZ3Jlc3MgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByb2Nlc3NpbmdQcm9ncmVzcz86IHtcbiAgICAgIC8qKlxuICAgICAgICogQW4gZXN0aW1hdGUgb2YgdGhlIHRvdGFsIG51bWJlciBvZiBwYXJ0cyB0aGF0IG5lZWQgdG8gYmUgcHJvY2Vzc2VkIGZvciB0aGUgdmlkZW9cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nUHJvZ3Jlc3MucGFydHNUb3RhbCBmb3IgbW9yZSBpbmZvXG4gICAgICAgKi9cbiAgICAgIHBhcnRzVG90YWw/OiBudW1iZXI7XG4gICAgICAvKipcbiAgICAgICAqIFRiZSBudW1iZXIgb2YgcGFydHMgb2YgdGhlIHZpZGVvIHRoYXQgWW91VHViZSBoYXMgYWxyZWFkeSBwcm9jZXNzZWRcbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nUHJvZ3Jlc3MucGFydHNQcm9jZXNzZWQgZm9yIG1vcmUgaW5mb1xuICAgICAgICovXG4gICAgICBwYXJ0c1Byb2Nlc3NlZD86IG51bWJlcjtcbiAgICAgIC8qKlxuICAgICAgICogQW4gZXN0aW1hdGUgb2YgdGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgWW91VHViZSBuZWVkcyB0byBmaW5pc2ggcHJvY2Vzc2luZyB0aGUgdmlkZW9cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nUHJvZ3Jlc3MudGltZUxlZnRNcyBmb3IgbW9yZSBpbmZvXG4gICAgICAgKi9cbiAgICAgIHRpbWVMZWZ0TXM/OiBudW1iZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVhc29uIHRoYXQgWW91VHViZSBmYWlsZWQgdG8gcHJvY2VzcyB0aGUgdmlkZW9cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgb3RoZXJgOiBJbmRpY2F0ZXMgdGhhdCBzb21lIG90aGVyIHByb2Nlc3NpbmcgY29tcG9uZW50IGhhcyBmYWlsZWRcbiAgICAgKiAtIGBzdHJlYW1pbmdGYWlsZWRgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gY291bGQgbm90IGJlIHNlbnQgdG8gc3RyZWFtZXJzXG4gICAgICogLSBgdHJhbnNjb2RlRmFpbGVkYDogSW5kaWNhdGVzIHRoYXQgY29udGVudCB0cmFuc2NvZGluZyBoYXMgZmFpbGVkXG4gICAgICogLSBgdXBsb2FkRmFpbGVkYDogSW5kaWNhdGVzIHRoYXQgZmlsZSBkZWxpdmVyeSBoYXMgZmFpbGVkXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nRmFpbHVyZVJlYXNvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJvY2Vzc2luZ0ZhaWx1cmVSZWFzb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgZmlsZSBkZXRhaWxzIGFyZSBhdmFpbGFibGUgZm9yIHRoZSB1cGxvYWRlZCB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMuZmlsZURldGFpbHNBdmFpbGFiaWxpdHkgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGZpbGVEZXRhaWxzQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB2aWRlbyBwcm9jZXNzaW5nIGVuZ2luZSBoYXMgZ2VuZXJhdGVkIHN1Z2dlc3Rpb25zIHRoYXQgbWlnaHQgaW1wcm92ZVxuICAgICAqIFlvdVR1YmUncyBhYmlsaXR5IHRvIHByb2Nlc3MgdGhlIHZpZGVvLCB3YXJuaW5ncyB0aGF0IGV4cGxhaW4gdmlkZW8gcHJvY2Vzc2luZyBwcm9ibGVtcyxcbiAgICAgKiBvciBlcnJvcnMgdGhhdCBjYXVzZSB2aWRlbyBwcm9jZXNzaW5nIHByb2JsZW1zXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nSXNzdWVzQXZhaWxhYmlsaXR5IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwcm9jZXNzaW5nSXNzdWVzQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGtleXdvcmQgKHRhZykgc3VnZ2VzdGlvbnMgYXJlIGF2YWlsYWJsZSBmb3IgdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy50YWdTdWdnZXN0aW9uc0F2YWlsYWJpbGl0eSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdGFnU3VnZ2VzdGlvbnNBdmFpbGFiaWxpdHk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdmlkZW8gZWRpdGluZyBzdWdnZXN0aW9ucywgd2hpY2ggbWlnaHQgaW1wcm92ZSB2aWRlbyBxdWFsaXR5IG9yIHRoZVxuICAgICAqIHBsYXliYWNrIGV4cGVyaWVuY2UsIGFyZSBhdmFpbGFibGUgZm9yIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMuZWRpdG9yU3VnZ2VzdGlvbnNBdmFpbGFiaWxpdHkgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGVkaXRvclN1Z2dlc3Rpb25zQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRodW1ibmFpbCBpbWFnZXMgaGF2ZSBiZWVuIGdlbmVyYXRlZCBmb3IgdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy50aHVtYm5haWxzQXZhaWxhYmlsaXR5IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0aHVtYm5haWxzQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgc3VnZ2VzdGlvbnMgdGhhdCBpZGVudGlmeSBvcHBvcnR1bml0aWVzIHRvIGltcHJvdmUgdGhlIHZpZGVvIHF1YWxpdHkgb3IgdGhlIG1ldGFkYXRhXG4gICAqIGZvciB0aGUgdXBsb2FkZWQgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3VnZ2VzdGlvbnMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgc3VnZ2VzdGlvbnM/OiB7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgZXJyb3JzIHRoYXQgd2lsbCBwcmV2ZW50IFlvdVR1YmUgZnJvbSBzdWNjZXNzZnVsbHkgcHJvY2Vzc2luZyB0aGUgdmlkZW9cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgYXJjaGl2ZUZpbGVgOiBBbiBhcmNoaXZlIGZpbGUgKGUuZy4gYSB6aXAgYXJjaGl2ZSlcbiAgICAgKiAtIGBhdWRpb0ZpbGVgOiBBbiBhdWRpbyBmaWxlIChlLmcuIGFuIG1wMyBmaWxlKVxuICAgICAqIC0gYGRvY0ZpbGVgOiBBIGRvY3VtZW50L3RleHQgZmlsZSAoZS5nLiBhIE1TIFdvcmQgZG9jdW1lbnQgZmlsZSlcbiAgICAgKiAtIGBpbWFnZUZpbGVgOiBBbiBpbWFnZSBmaWxlIChlLmcuIGEganBlZyBpbWFnZSlcbiAgICAgKiAtIGBub3RBVmlkZW9GaWxlYDogT3RoZXIgbm9uLXZpZGVvIGZpbGVcbiAgICAgKiAtIGBwcm9qZWN0RmlsZWA6IE1vdmllIHByb2plY3QgZmlsZSAoZS5nLiBhIE1pY3Jvc29mdCBXaW5kb3dzIE1vdmllIE1ha2VyIHByb2plY3QpXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdWdnZXN0aW9ucy5wcm9jZXNzaW5nRXJyb3JzW10gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByb2Nlc3NpbmdFcnJvcnM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiByZWFzb25zIHdoeSBZb3VUdWJlIG1heSBoYXZlIGRpZmZpY3VsdHkgdHJhbnNjb2RpbmcgdGhlIHVwbG9hZGVkIHZpZGVvIG9yIHRoYXRcbiAgICAgKiBtaWdodCByZXN1bHQgaW4gYW4gZXJyb25lb3VzIHRyYW5zY29kaW5nXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGhhc0VkaXRsaXN0YDogTm90ZSB0aGF0IGVkaXQgbGlzdHMgYXJlIGN1cnJlbnRseSB1bnN1cHBvcnRlZFxuICAgICAqIC0gYGluY29uc2lzdGVudFJlc29sdXRpb25gOiBDb25mbGljdGluZyBjb250YWluZXIgYW5kIHN0cmVhbSByZXNvbHV0aW9uc1xuICAgICAqIC0gYHByb2JsZW1hdGljQXVkaW9Db2RlY2A6IEFuIGF1ZGlvIGNvZGVjIHRoYXQgaXMga25vd24gdG8gY2F1c2UgcHJvYmxlbXMgd2FzIHVzZWRcbiAgICAgKiAtIGBwcm9ibGVtYXRpY1ZpZGVvQ29kZWNgOiBBIHZpZGVvIGNvZGVjIHRoYXQgaXMga25vd24gdG8gY2F1c2UgcHJvYmxlbXMgd2FzIHVzZWRcbiAgICAgKiAtIGB1bmtub3duQXVkaW9Db2RlY2A6IFVucmVjb2duaXplZCBhdWRpbyBjb2RlYywgdHJhbnNjb2RpbmcgaXMgbGlrZWx5IHRvIGZhaWxcbiAgICAgKiAtIGB1bmtub3duQ29udGFpbmVyYDogVW5yZWNvZ25pemVkIGZpbGUgZm9ybWF0LCB0cmFuc2NvZGluZyBpcyBsaWtlbHkgdG8gZmFpbFxuICAgICAqIC0gYHVua25vd25WaWRlb0NvZGVjYDogVW5yZWNvZ25pemVkIHZpZGVvIGNvZGVjLCB0cmFuc2NvZGluZyBpcyBsaWtlbHkgdG8gZmFpbFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3VnZ2VzdGlvbnMucHJvY2Vzc2luZ1dhcm5pbmdzW10gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByb2Nlc3NpbmdXYXJuaW5ncz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHN1Z2dlc3Rpb25zIHRoYXQgbWF5IGltcHJvdmUgWW91VHViZSdzIGFiaWxpdHkgdG8gcHJvY2VzcyB0aGUgdmlkZW9cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgbm9uU3RyZWFtYWJsZU1vdmA6IFRoZSBNUDQgZmlsZSBpcyBub3Qgc3RyZWFtYWJsZSwgd2hpY2ggd2lsbCBzbG93IGRvd24gdGhlIHByb2Nlc3NpbmdcbiAgICAgKiAtIGBzZW5kQmVzdFF1YWxpdHlWaWRlb2A6IFByb2JhYmx5IGEgYmV0dGVyIHF1YWxpdHkgb2YgdGhlIHZpZGVvIGV4aXN0c1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3VnZ2VzdGlvbnMucHJvY2Vzc2luZ0hpbnRzW10gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByb2Nlc3NpbmdIaW50cz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGtleXdvcmQgdGFncyB0aGF0IGNvdWxkIGJlIGFkZGVkIHRvIHRoZSB2aWRlbydzIG1ldGFkYXRhIHRvIGluY3JlYXNlIHRoZSBjaGFuY2VzXG4gICAgICogdGhhdCB1c2VycyB3aWxsIGZpbmQgeW91ciB2aWRlbyB3aGVuIHNlYXJjaGluZyBvciBicm93c2luZyBvbiBZb3VUdWJlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdWdnZXN0aW9ucy50YWdTdWdnZXN0aW9uc1tdIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0YWdTdWdnZXN0aW9ucz86IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlU3VnZ2VzdGlvblRhZ1N1Z2dlc3Rpb25bXTtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiB2aWRlbyBlZGl0aW5nIHN1Z2dlc3Rpb25zIHRoYXQgbWlnaHQgaW1wcm92ZSB0aGUgdmlkZW8gcXVhbGl0eS9wbGF5YmFja1xuICAgICAqIGV4cGVyaWVuY2Ugb2YgdGhlIHVwbG9hZGVkIHZpZGVvXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGF1ZGlvUXVpZXRBdWRpb1N3YXBgOiBUaGUgYXVkaW8gdHJhY2sgYXBwZWFycyBzaWxlbnQgYW5kIGNvdWxkIGJlIHN3YXBwZWQgd2l0aCBhIGJldHRlciBxdWFsaXR5IG9uZVxuICAgICAqIC0gYHZpZGVvQXV0b0xldmVsc2A6IFBpY3R1cmUgYnJpZ2h0bmVzcyBsZXZlbHMgc2VlbSBvZmYgYW5kIGNvdWxkIGJlIGNvcnJlY3RlZFxuICAgICAqIC0gYHZpZGVvQ3JvcGA6IE1hcmdpbnMgKG1hdHRlcykgZGV0ZWN0ZWQgYXJvdW5kIHRoZSBwaWN0dXJlIGNvdWxkIGJlIGNyb3BwZWRcbiAgICAgKiAtIGB2aWRlb1N0YWJpbGl6ZWA6IFRoZSB2aWRlbyBhcHBlYXJzIHNoYWt5IGFuZCBjb3VsZCBiZSBzdGFiaWxpemVkXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdWdnZXN0aW9ucy5wcm9jZXNzaW5nSGludHNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZWRpdG9yU3VnZ2VzdGlvbnM/OiBzdHJpbmdbXTtcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIG1ldGFkYXRhIGFib3V0IGEgbGl2ZSB2aWRlbyBicm9hZGNhc3RcbiAgICogTm90ZTogVGhpcyB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIHZpZGVvIGlzIGFuIHVwY29taW5nLCBsaXZlIG9yIGNvbXBsZXRlZCBsaXZlIGJyb2FkY2FzdFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsaXZlU3RyZWFtaW5nRGV0YWlscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBsaXZlU3RyZWFtaW5nRGV0YWlscz86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSB0aGF0IHRoZSBicm9hZGNhc3QgYWN0dWFsbHkgc3RhcnRlZCBpbiBJU08gODYwMSBmb3JtYXRcbiAgICAgKiBOb3RlOiBUaGlzIHZhbHVlIHdpbGwgbm90IGJlIGF2YWlsYWJsZSB1bnRpbCB0aGUgYnJvYWRjYXN0IGJlZ2luc1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbGl2ZVN0cmVhbWluZ0RldGFpbHMuYWN0dWFsU3RhcnRUaW1lIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBhY3R1YWxTdGFydFRpbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgdGhhdCB0aGUgYnJvYWRjYXN0IGFjdHVhbGx5IGVuZGVkIGluIElTTyA4NjAxIGZvcm1hdFxuICAgICAqIE5vdGU6IFRoaXMgdmFsdWUgd2lsbCBub3QgYmUgYXZhaWxhYmxlIHVudGlsIHRoZSBicm9hZGNhc3QgYmVnaW5zXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsaXZlU3RyZWFtaW5nRGV0YWlscy5hY3R1YWxFbmRUaW1lIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBhY3R1YWxFbmRUaW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHRoYXQgdGhlIGJyb2FkY2FzdCBpcyBzY2hlZHVsZWQgdG8gYmVnaW4gaW4gSVNPIDg2MDEgZm9ybWF0XG4gICAgICogTm90ZTogVGhpcyB2YWx1ZSB3aWxsIG5vdCBiZSBhdmFpbGFibGUgdW50aWwgdGhlIGJyb2FkY2FzdCBiZWdpbnNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2xpdmVTdHJlYW1pbmdEZXRhaWxzLnNjaGVkdWxlZFN0YXJ0VGltZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgc2NoZWR1bGVkU3RhcnRUaW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHRoYXQgdGhlIGJyb2FkY2FzdCBpcyBzY2hlZHVsZWQgdG8gZW5kIGluIElTTyA4NjAxIGZvcm1hdFxuICAgICAqIE5vdGU6IFRoaXMgdmFsdWUgd2lsbCBub3QgYmUgYXZhaWxhYmxlIHVudGlsIHRoZSBicm9hZGNhc3QgYmVnaW5zXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsaXZlU3RyZWFtaW5nRGV0YWlscy5zY2hlZHVsZWRFbmRUaW1lIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBzY2hlZHVsZWRFbmRUaW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2Ygdmlld2VycyBjdXJyZW50bHkgd2F0Y2hpbmcgdGhlIGJyb2FkY2FzdFxuICAgICAqIE5vdGU6IFRoaXMgcHJvcGVydHkgYW5kIGl0cyB2YWx1ZSB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIGJyb2FkY2FzdCBoYXMgY3VycmVudCB2aWV3ZXJzXG4gICAgICogYW5kIHRoZSBicm9hZGNhc3Qgb3duZXIgaGFzIG5vdCBoaWRkZW4gdGhlIHZpZXdjb3VudCBmb3IgdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsaXZlU3RyZWFtaW5nRGV0YWlscy5zY2hlZHVsZWRFbmRUaW1lIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjb25jdXJyZW50Vmlld2Vycz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgbGl2ZSBjaGF0IGF0dGFjaGVkIHRvIHRoaXMgdmlkZW9cbiAgICAgKiBOb3RlOiBUaGlzIGZpZWxkIGlzIGZpbGxlZCBvbmx5IGlmIHRoZSB2aWRlbyBpcyBhIGN1cnJlbnRseSBsaXZlIGJyb2FkY2FzdCB0aGF0IGhhcyBsaXZlIGNoYXRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2xpdmVTdHJlYW1pbmdEZXRhaWxzLmFjdGl2ZUxpdmVDaGF0SWQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGFjdGl2ZUxpdmVDaGF0SWQ/OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyB0cmFuc2xhdGlvbnMgb2YgdGhlIHZpZGVvJ3MgbWV0YWRhdGFcbiAgICovXG4gIGxvY2FsaXphdGlvbnM/OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUxvY2FsaXphdGlvbnM7XG59XG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2V9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbSBleHRlbmRzIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlIHt9XG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2Uge1xuICAvKipcbiAgICogVGhlIHRva2VuIHRoYXQgY2FuIGJlIHBhc3NlZCB2aWEgdGhlIGBwYWdlVG9rZW5gIHBhcmFtZXRlciB0byByZXRyaWV2ZSB0aGUgbmV4dCBwYWdlXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjbmV4dFBhZ2VUb2tlbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBuZXh0UGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHRva2VuIHRoYXQgY2FuIGJlIHBhc3NlZCB2aWEgdGhlIGBwYWdlVG9rZW5gIHBhcmFtZXRlciB0byByZXRyaWV2ZSB0aGUgcHJldmlvdXMgcGFnZVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3ByZXZQYWdlVG9rZW4gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcHJldlBhZ2VUb2tlbj86IHN0cmluZztcbiAgLyoqXG4gICAqIENvbnRhaW5zIHBhZ2luZyBpbmZvIGZvciB0aGUgcmVzdWx0c1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3BhZ2VJbmZvIGZyb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwYWdlSW5mbz86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdG90YWwgbnVtYmVyIG9mIHJlc3VsdHNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjcGFnZUluZm8udG90YWxSZXN1bHRzIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0b3RhbFJlc3VsdHM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiByZXN1bHRzIGluY2x1ZGVkIHBlciBwYWdlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3BhZ2VJbmZvLnJlc3VsdHNQZXJQYWdlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICByZXN1bHRzUGVyUGFnZT86IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIEEgbGlzdCBvZiB2aWRlb3MgdGhhdCBtYXRjaCB0aGUgcmVxdWVzdCBjcml0ZXJpYVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I2l0ZW1zW10gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaXRlbXM/OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVtdO1xufVxuIl19