/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @record
 */
export function NgxYtdApiVideosGetRatingItem() { }
if (false) {
    /**
     * The ID that YouTube uses to to uniquely identify the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating#items[].videoId for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosGetRatingItem.prototype.videoId;
    /**
     * The rating that the authorized user gave to the video
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating#items[].rating for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosGetRatingItem.prototype.rating;
}
/**
 * @record
 */
export function NgxYtdApiVideosGetRatingResult() { }
if (false) {
    /**
     * A list of ratings that match the request criteria
     *
     * See https://developers.google.com/youtube/v3/docs/videos/getRating#items[] for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosGetRatingResult.prototype.items;
}
/**
 * Options for {\@link NgxYtdApiVideosService#list}
 * @record
 */
export function NgxYtdApiVideosListOpts() { }
if (false) {
    /**
     * Identifies the chart that should be retrieved.
     * Acceptable values:
     * - `mostPopular`: Return the most popular videos for the specified content region and video category.
     * Note: This parameter is a filter and only one filter is allowed
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#chart for more info.
     * @type {?|undefined}
     */
    NgxYtdApiVideosListOpts.prototype.chart;
    /**
     * Specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved.
     * In a video resource, the `id` property specifies the video's ID.
     * Note: This parameter is a filter and only one filter is allowed
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#id for more info
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
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#myRating for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosListOpts.prototype.myRating;
    /**
     * Specifies the API to return localized resource metadata for a specific language that the YouTube website supports.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#hl for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosListOpts.prototype.hl;
    /**
     * Specifies the maximum height of the embedded YouTube player returned in the `player.embedHtml` property.
     * This parameter can be used to specify a height appropriate for your app's layout.
     * See https://developers.google.com/youtube/v3/docs/videos/list#maxHeight for more info
     * Note: If the `maxWidth` property is also specified, the player may be shorter
     * than the `maxHeight` in order to not violate the maximum width.
     * Acceptable values are 72 to 8192, inclusive.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#maxHeight for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosListOpts.prototype.maxHeight;
    /**
     * Specifies the maximum results that should be returned.
     * Note: This parameter is to be used for the `myRating` parameter, but should not
     * be used with the `id` parameter.
     * Acceptable values: 1 to 50, inclusive. 5 is the default number.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#maxResults for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosListOpts.prototype.maxResults;
    /**
     * Specifies the maximum width of the embedded YouTube player returned in the `player.embedHtml` property.
     * This parameter can be used to specify a width appropriate for your app's layout.
     * Note: If the `maxHeight` property is also specified, the player may be shorter
     * than the `maxWidth` in order to not violate the maximum width.
     * Acceptable values are 72 to 8192, inclusive.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#maxWidthfor more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosListOpts.prototype.maxWidth;
    /**
     * Indicates that the request's authorization credentials identify a YouTube CMS user who is
     * acting on behalf of the content owner specified in the parameter value.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#onBehalfOfContentOwner for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosListOpts.prototype.onBehalfOfContentOwner;
    /**
     * Identifies a specific page in the result set that should be returned.
     * Note: This parameter is to be used with the `myRating` parameter, but is not to be used
     * with the `id` parameter.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#pageToken for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosListOpts.prototype.pageToken;
    /**
     * Tells the API to select a video chart available in the specific region.
     * Note: This parameter is to only be used with the `chart` parameter.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#regionCode for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosListOpts.prototype.regionCode;
    /**
     * This property identifies the video category for which the video should be retrieved.
     * Note: This parameter is to only be used with the `chart` parameter.
     * By default, charts are not restricted to a particular category.
     * The default value is 0.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/list#regionCode for more info
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJ2aWRlb3MveXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0Esa0RBZUM7Ozs7Ozs7O0lBVEMsMENBQVc7Ozs7Ozs7OztJQVFYLDhEQUFnQzs7Ozs7QUFHbEMsa0RBYUM7Ozs7Ozs7O0lBUEMsK0NBQWlCOzs7Ozs7O0lBTWpCLDhDQUFxRDs7Ozs7QUFFdkQsb0RBT0M7Ozs7Ozs7O0lBREMsK0NBQXVDOzs7Ozs7QUFNekMsNkNBZ0dDOzs7Ozs7Ozs7OztJQXZGQyx3Q0FBc0I7Ozs7Ozs7OztJQVF0QixxQ0FBWTs7Ozs7Ozs7Ozs7O0lBV1osMkNBQThCOzs7Ozs7O0lBTTlCLHFDQUFZOzs7Ozs7Ozs7Ozs7SUFXWiw0Q0FBbUI7Ozs7Ozs7Ozs7SUFTbkIsNkNBQW9COzs7Ozs7Ozs7OztJQVVwQiwyQ0FBa0I7Ozs7Ozs7O0lBT2xCLHlEQUFnQzs7Ozs7Ozs7O0lBUWhDLDRDQUFtQjs7Ozs7Ozs7SUFPbkIsNkNBQW9COzs7Ozs7Ozs7O0lBU3BCLG9EQUEyQjs7Ozs7QUFHN0Isb0VBYUM7Ozs7Ozs7O0lBUEMsNkRBQWE7Ozs7Ozs7SUFNYiwyRUFBNkI7Ozs7O0FBRy9CLHdEQXlCQzs7Ozs7Ozs7SUFuQkMsMERBQXNCOzs7Ozs7O0lBTXRCLG1EQUFlOzs7Ozs7O0lBTWYsd0RBQW9COzs7Ozs7O0lBTXBCLG9EQUFnQjs7Ozs7QUFHbEIsd0RBeURDOzs7Ozs7OztJQW5EQyx5REFBcUI7Ozs7Ozs7SUFNckIsMERBQXNCOzs7Ozs7O0lBTXRCLDBEQUFzQjs7Ozs7Ozs7SUFPdEIseURBQXFCOzs7Ozs7O0lBTXJCLG1EQUFlOzs7Ozs7O0lBTWYsd0RBQW9COzs7Ozs7Ozs7Ozs7O0lBWXBCLHNEQUFrQjs7Ozs7Ozs7SUFPbEIsb0RBQWdCOzs7OztBQUdsQiwwREFPQzs7OztBQUVELHlEQWFDOzs7Ozs7OztJQVBDLG9EQUFlOzs7Ozs7O0lBTWYsMERBQXFCOzs7OztBQUd2Qix1REFpQkM7Ozs7QUFFRCxzREFhQzs7Ozs7O0lBVEMsK0NBQWE7Ozs7O0lBSWIsaURBQWU7Ozs7O0lBSWYsa0RBQWdCOzs7Ozs7QUFPbEIsOERBQXVHOzs7OztBQU12RywrREFBeUc7Ozs7O0FBTXpHLGdFQUEyRzs7Ozs7QUFNM0csNERBQW1HOzs7OztBQU1uRyw2REFBcUc7Ozs7O0FBTXJHLDBFQUErSDs7Ozs7QUFNL0gsOERBQXVHOzs7OztBQUl2Ryw2Q0F5c0JDOzs7Ozs7Ozs7SUFsc0JDLHVDQUFjOzs7Ozs7O0lBTWQsdUNBQWM7Ozs7Ozs7SUFNZCxxQ0FBWTs7Ozs7OztJQU1aLDBDQWtHRTs7Ozs7OztJQU1GLGlEQTBGRTs7Ozs7OztJQU1GLHlDQW1FRTs7Ozs7OztJQU1GLDZDQStCRTs7Ozs7OztJQU1GLHlDQW1CRTs7Ozs7OztJQU1GLCtDQXVCRTs7Ozs7OztJQU1GLG1EQThDRTs7Ozs7Ozs7O0lBUUYsOENBK0RFOzs7Ozs7O0lBTUYsb0RBaUZFOzs7Ozs7OztJQU9GLDhDQXlERTs7Ozs7Ozs7SUFPRix1REE0Q0U7Ozs7O0lBSUYsZ0RBQXFEOzs7Ozs7QUFNdkQsbURBQWlGOzs7O0FBQ2pGLCtDQXNDQzs7Ozs7Ozs7SUFoQ0Msa0RBQXVCOzs7Ozs7O0lBTXZCLGtEQUF1Qjs7Ozs7OztJQU12Qiw2Q0FhRTs7Ozs7OztJQU1GLDBDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFl0ZEFwaUdlbmVyaWNPcHRzLCBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2UgfSBmcm9tICduZ3gteXRkLWFwaS9jb3JlJztcblxuLyoqXG4gKiBPcHRpb25zIGZvciB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zU2VydmljZSNnZXRSYXRpbmd9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cyBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNPcHRzIHtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHRoZSBZb3VUdWJlIHZpZGVvIElEKHMpIGZvciByZXRyaWV2aW5nIHJhdGluZyBkYXRhXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2dldFJhdGluZyNpZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgb3B0aW9uYWwuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGNhbiBvbmx5IGJlIHVzZWQgaW4gYSBwcm9wZXJseSBhdXRob3JpemVkIHJlcXVlc3QuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGludGVuZGVkIGZvciBZb3VUdWJlIENyZWF0b3JzLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9nZXRSYXRpbmcjb25CZWhhbGZPZkNvbnRlbnRPd25lciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBvbkJlaGFsZk9mQ29udGVudE93bmVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ0l0ZW0ge1xuICAvKipcbiAgICogVGhlIElEIHRoYXQgWW91VHViZSB1c2VzIHRvIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoZSB2aWRlb1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9nZXRSYXRpbmcjaXRlbXNbXS52aWRlb0lkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgcmF0aW5nIHRoYXQgdGhlIGF1dGhvcml6ZWQgdXNlciBnYXZlIHRvIHRoZSB2aWRlb1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9nZXRSYXRpbmcjaXRlbXNbXS5yYXRpbmcgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcmF0aW5nPzogJ2Rpc2xpa2UnIHwgJ2xpa2UnIHwgJ25vbmUnIHwgJ3Vuc3BlY2lmaWVkJztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nUmVzdWx0IGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY09wdHMge1xuICAvKipcbiAgICogQSBsaXN0IG9mIHJhdGluZ3MgdGhhdCBtYXRjaCB0aGUgcmVxdWVzdCBjcml0ZXJpYVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9nZXRSYXRpbmcjaXRlbXNbXSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpdGVtcz86IE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ0l0ZW1bXTtcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zU2VydmljZSNsaXN0fVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzIGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY09wdHMge1xuICAvKipcbiAgICogSWRlbnRpZmllcyB0aGUgY2hhcnQgdGhhdCBzaG91bGQgYmUgcmV0cmlldmVkLlxuICAgKiBBY2NlcHRhYmxlIHZhbHVlczpcbiAgICogLSBgbW9zdFBvcHVsYXJgOiBSZXR1cm4gdGhlIG1vc3QgcG9wdWxhciB2aWRlb3MgZm9yIHRoZSBzcGVjaWZpZWQgY29udGVudCByZWdpb24gYW5kIHZpZGVvIGNhdGVnb3J5LlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBhIGZpbHRlciBhbmQgb25seSBvbmUgZmlsdGVyIGlzIGFsbG93ZWRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNjaGFydCBmb3IgbW9yZSBpbmZvLlxuICAgKi9cbiAgY2hhcnQ/OiAnbW9zdFBvcHVsYXInO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdGhlIFlvdVR1YmUgdmlkZW8gSUQocykgZm9yIHRoZSByZXNvdXJjZShzKSB0aGF0IGFyZSBiZWluZyByZXRyaWV2ZWQuXG4gICAqIEluIGEgdmlkZW8gcmVzb3VyY2UsIHRoZSBgaWRgIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgdmlkZW8ncyBJRC5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgYSBmaWx0ZXIgYW5kIG9ubHkgb25lIGZpbHRlciBpcyBhbGxvd2VkXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjaWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIEFQSSB0byByZXR1cm4gdmlkZW9zIHRoYXQgYXJlIGxpa2VkIG9yIGRpc2xpa2VkIGJ5IHRoZSBhdXRoZW50aWNhdGVkIHVzZXJcbiAgICogQWNjZXB0YWJsZSB2YWx1ZXM6XG4gICAqIC0gYGRpc2xpa2VgOiBSZXR1cm5zIG9ubHkgdmlkZW9zIHRoYXQgYXJlIGRpc2xpa2VkIGJ5IHRoZSBhdXRoZW50aWNhdGVkIHVzZXJcbiAgICogLSBgbGlrZWA6IFJldHVybnMgb25seSB2aWRlb3MgdGhhdCBhcmUgbGlrZWQgYnkgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSB1c2VkIGluIGEgcHJvcGVybHkgYXV0aG9yaXplZCByZXF1ZXN0LlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBhIGZpbHRlciBhbmQgb25seSBvbmUgZmlsdGVyIGlzIGFsbG93ZWRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNteVJhdGluZyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBteVJhdGluZz86ICdkaXNsaWtlJyB8ICdsaWtlJztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgQVBJIHRvIHJldHVybiBsb2NhbGl6ZWQgcmVzb3VyY2UgbWV0YWRhdGEgZm9yIGEgc3BlY2lmaWMgbGFuZ3VhZ2UgdGhhdCB0aGUgWW91VHViZSB3ZWJzaXRlIHN1cHBvcnRzLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I2hsIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGhsPzogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtYXhpbXVtIGhlaWdodCBvZiB0aGUgZW1iZWRkZWQgWW91VHViZSBwbGF5ZXIgcmV0dXJuZWQgaW4gdGhlIGBwbGF5ZXIuZW1iZWRIdG1sYCBwcm9wZXJ0eS5cbiAgICogVGhpcyBwYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBhIGhlaWdodCBhcHByb3ByaWF0ZSBmb3IgeW91ciBhcHAncyBsYXlvdXQuXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjbWF4SGVpZ2h0IGZvciBtb3JlIGluZm9cbiAgICogTm90ZTogSWYgdGhlIGBtYXhXaWR0aGAgcHJvcGVydHkgaXMgYWxzbyBzcGVjaWZpZWQsIHRoZSBwbGF5ZXIgbWF5IGJlIHNob3J0ZXJcbiAgICogdGhhbiB0aGUgYG1heEhlaWdodGAgaW4gb3JkZXIgdG8gbm90IHZpb2xhdGUgdGhlIG1heGltdW0gd2lkdGguXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzIGFyZSA3MiB0byA4MTkyLCBpbmNsdXNpdmUuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjbWF4SGVpZ2h0IGZvciBtb3JlIGluZm9cbiAgICovXG4gIG1heEhlaWdodD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWF4aW11bSByZXN1bHRzIHRoYXQgc2hvdWxkIGJlIHJldHVybmVkLlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyB0byBiZSB1c2VkIGZvciB0aGUgYG15UmF0aW5nYCBwYXJhbWV0ZXIsIGJ1dCBzaG91bGQgbm90XG4gICAqIGJlIHVzZWQgd2l0aCB0aGUgYGlkYCBwYXJhbWV0ZXIuXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzOiAxIHRvIDUwLCBpbmNsdXNpdmUuIDUgaXMgdGhlIGRlZmF1bHQgbnVtYmVyLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I21heFJlc3VsdHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgbWF4UmVzdWx0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgZW1iZWRkZWQgWW91VHViZSBwbGF5ZXIgcmV0dXJuZWQgaW4gdGhlIGBwbGF5ZXIuZW1iZWRIdG1sYCBwcm9wZXJ0eS5cbiAgICogVGhpcyBwYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBhIHdpZHRoIGFwcHJvcHJpYXRlIGZvciB5b3VyIGFwcCdzIGxheW91dC5cbiAgICogTm90ZTogSWYgdGhlIGBtYXhIZWlnaHRgIHByb3BlcnR5IGlzIGFsc28gc3BlY2lmaWVkLCB0aGUgcGxheWVyIG1heSBiZSBzaG9ydGVyXG4gICAqIHRoYW4gdGhlIGBtYXhXaWR0aGAgaW4gb3JkZXIgdG8gbm90IHZpb2xhdGUgdGhlIG1heGltdW0gd2lkdGguXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzIGFyZSA3MiB0byA4MTkyLCBpbmNsdXNpdmUuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjbWF4V2lkdGhmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBtYXhXaWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0J3MgYXV0aG9yaXphdGlvbiBjcmVkZW50aWFscyBpZGVudGlmeSBhIFlvdVR1YmUgQ01TIHVzZXIgd2hvIGlzXG4gICAqIGFjdGluZyBvbiBiZWhhbGYgb2YgdGhlIGNvbnRlbnQgb3duZXIgc3BlY2lmaWVkIGluIHRoZSBwYXJhbWV0ZXIgdmFsdWUuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3Qjb25CZWhhbGZPZkNvbnRlbnRPd25lciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBvbkJlaGFsZk9mQ29udGVudE93bmVyPzogc3RyaW5nO1xuICAvKipcbiAgICogSWRlbnRpZmllcyBhIHNwZWNpZmljIHBhZ2UgaW4gdGhlIHJlc3VsdCBzZXQgdGhhdCBzaG91bGQgYmUgcmV0dXJuZWQuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIHRvIGJlIHVzZWQgd2l0aCB0aGUgYG15UmF0aW5nYCBwYXJhbWV0ZXIsIGJ1dCBpcyBub3QgdG8gYmUgdXNlZFxuICAgKiB3aXRoIHRoZSBgaWRgIHBhcmFtZXRlci5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNwYWdlVG9rZW4gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogVGVsbHMgdGhlIEFQSSB0byBzZWxlY3QgYSB2aWRlbyBjaGFydCBhdmFpbGFibGUgaW4gdGhlIHNwZWNpZmljIHJlZ2lvbi5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgdG8gb25seSBiZSB1c2VkIHdpdGggdGhlIGBjaGFydGAgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3JlZ2lvbkNvZGUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcmVnaW9uQ29kZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoaXMgcHJvcGVydHkgaWRlbnRpZmllcyB0aGUgdmlkZW8gY2F0ZWdvcnkgZm9yIHdoaWNoIHRoZSB2aWRlbyBzaG91bGQgYmUgcmV0cmlldmVkLlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyB0byBvbmx5IGJlIHVzZWQgd2l0aCB0aGUgYGNoYXJ0YCBwYXJhbWV0ZXIuXG4gICAqIEJ5IGRlZmF1bHQsIGNoYXJ0cyBhcmUgbm90IHJlc3RyaWN0ZWQgdG8gYSBwYXJ0aWN1bGFyIGNhdGVnb3J5LlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3JlZ2lvbkNvZGUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9DYXRlZ29yeUJ5SWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VTdWdnZXN0aW9uVGFnU3VnZ2VzdGlvbiB7XG4gIC8qKlxuICAgKiBUaGUga2V5d29yZCB0YWcgc3VnZ2VzdGVkIGZvciB0aGUgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3VnZ2VzdGlvbnMudGFnU3VnZ2VzdGlvbnNbXS50YWcgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdGFnPzogc3RyaW5nO1xuICAvKipcbiAgICogQW4gYXJyYXkgb2YgdmlkZW8gY2F0ZWdvcmllcyBmb3Igd2hpY2ggdGhlIHRhZyBpcyByZWxldmFudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdWdnZXN0aW9ucy50YWdTdWdnZXN0aW9uc1tdLmNhdGVnb3J5UmVzdHJpY3RzW10gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgY2F0ZWdvcnlSZXN0cmljdHM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUF1ZGlvU3RyZWFtIHtcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgYXVkaW8gY2hhbm5lbHMgdGhhdCB0aGUgc3RyZWFtIGNvbnRhaW5zXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmF1ZGlvU3RyZWFtc1tdLmNoYW5uZWxDb3VudCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBjaGFubmVsQ291bnQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgYXVkaW8gY29kZWMgdGhhdCB0aGUgc3RyZWFtIHVzZXNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuYXVkaW9TdHJlYW1zW10uY29kZWMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgY29kZWM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgYXVkaW8gc3RyZWFtJ3MgYml0cmF0ZSwgaW4gYml0cyBwZXIgc2Vjb25kXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmF1ZGlvU3RyZWFtc1tdLmJpdHJhdGVCcHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgYml0cmF0ZUJwcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIEEgdmFsdWUgdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIGEgdmlkZW8gdmVuZG9yLiBUeXBpY2FsbHksIHRoZSB2YWx1ZSBpcyBhIGZvdXItbGV0dGVyIHZlbmRvciBjb2RlLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5hdWRpb1N0cmVhbXNbXS52ZW5kb3IgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmVuZG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVmlkZW9TdHJlYW0ge1xuICAvKipcbiAgICogVGhlIGVuY29kZWQgdmlkZW8ncyBjb250ZW50IHdpZHRoIGluIHBpeGVsc1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy52aWRlb1N0cmVhbXNbXS53aWR0aFBpeGVscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB3aWR0aFBpeGVscz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBlbmNvZGVkIHZpZGVvJ3MgY29udGVudCBoZWlnaHQgaW4gcGl4ZWxzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdLmhlaWdodFBpeGVscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBoZWlnaHRQaXhlbHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgdmlkZW8ncyBzdHJlYW0gcmF0ZSBpbiBmcmFtZXMgcGVyIHNlY29uZCAoRlBTKVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy52aWRlb1N0cmVhbXNbXS5mcmFtZVJhdGVGcHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgZnJhbWVSYXRlRnBzPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIHZpZGVvIGNvbnRlbnQncyBkaXNwbGF5IGFzcGVjdCByYXRpbywgd2hpY2ggc3BlY2lmaWVzIHRoZSBhc3BlY3QgcmF0aW8gaW4gd2hpY2hcbiAgICogdGhlIHZpZGVvIHNob3VsZCBiZSBkaXNwbGF5ZWQuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdLmFzcGVjdFJhdGlvIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGFzcGVjdFJhdGlvPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIHZpZGVvIGNvZGVjIHRoYXQgdGhlIHN0cmVhbSB1c2VzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdLmNvZGVjIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGNvZGVjPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHZpZGVvIHN0cmVhbSdzIGJpdHJhdGUgaW4gYml0cyBwZXIgc2Vjb25kXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdLmJpdHJhdGVCcHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgYml0cmF0ZUJwcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBhbW91bnQgdGhhdCBZb3VUdWJlIG5lZWRzIHRvIHJvdGF0ZSB0aGUgb3JpZ2luYWwgc291cmNlIGNvbnRlbnQgdG8gcHJvcGVybHkgZGlzcGxheSB0aGUgdmlkZW9cbiAgICogVmFsaWQgdmFsdWVzOlxuICAgKiAtIGBjbG9ja3dpc2VgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gbmVlZHMgdG8gYmUgcm90YXRlZCA5MMKwIGNsb2Nrd2lzZVxuICAgKiAtIGBjb3VudGVyQ2xvY2t3aXNlYDogSW5kaWNhdGVzIHRoYXQgdGhlIHZpZGVvIG5lZWRzIHRvIGJlIHJvdGF0ZWQgOTDCsCBjb3VudGVyLWNvY2t3aXNlXG4gICAqIC0gYG5vbmVgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gZG9lcyBub3QgbmVlZCB0byBiZSByb3RhdGVkXG4gICAqIC0gYG90aGVyYDogSW5kaWNhdGVzIHRoYXQgdGhlIHZpZGVvIG5lZWRzIHRvIGJlIHJvdGF0ZWQgaW4gc29tZSBvdGhlciwgbm9uLXRyaXZpYWwgd2F5XG4gICAqIC0gYHVwc2lkZURvd25gOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gbmVlZHMgdG8gYmUgcm90YXRlZCB1cHNpZGUgZG93blxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy52aWRlb1N0cmVhbXNbXS5yb3RhdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICByb3RhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIEEgdmFsdWUgdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIGEgdmVuZG9yXG4gICAqIE5vdGU6IFR5cGljYWxseSwgdGhlIHZhbHVlIGlzIGEgZm91ci1sZXR0ZXIgdmVuZG9yIGNvZGVcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMudmlkZW9TdHJlYW1zW10udmVuZG9yIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZlbmRvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUxvY2FsaXphdGlvbnMge1xuICAvKipcbiAgICogVGhlIGxhbmd1YWdlIG9mIHRoZSBsb2NhbGl6ZWQgdGV4dCBhc3NvY2lhdGVkIHdpdGggdGhlIGtleSB2YWx1ZVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsb2NhbGl6YXRpb25zLihrZXkpIGZvciBtb3JlIGluZm9cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlTG9jYWxpemF0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlTG9jYWxpemF0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBsb2NhbGl6ZWQgdmlkZW8gdGl0bGVcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbG9jYWxpemF0aW9ucy4oa2V5KS50aXRsZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBsb2NhbGl6ZWQgdmlkZW8gZGVzY3JpcHRpb25cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbG9jYWxpemF0aW9ucy4oa2V5KS5kZXNjcmlwdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbHMge1xuICAvKipcbiAgICogVmFsaWQga2V5IHZhbHVlczpcbiAgICogLSBgZGVmYXVsdGA6IFRoZSBkZWZhdWx0IHRodW1ibmFpbCBpbWFnZVxuICAgKiAoRGVmYXVsdCBzaXplIG9mIHZpZGVvIHRodW1ibmFpbDogMTIwcHggd2lkZSwgOTBweCB0YWxsOyBjaGFubmVsIHRodW1ibmFpbDogODhweCB3aWRlLCA4OHB4IHRhbGwpXG4gICAqIC0gYG1lZGl1bWA6IEEgaGlnaGVyIHJlc29sdXRpb24gdmVyc2lvbiBvZiB0aGUgdGh1bWJuYWlsIHRoYW4gdGhlIGBkZWZhdWx0YCByZXNvbHV0aW9uIGltYWdlXG4gICAqIChEZWZhdWx0IHNpemUgb2YgdmlkZW8gdGh1bWJuYWlsOiAzMjBweCB3aWRlLCAxODBweCB0YWxsOyBjaGFubmVsIHRodW1ibmFpbDogMjQwcHggd2lkZSwgMjQwcHggdGFsbClcbiAgICogLSBgaGlnaGA6IEEgaGlnaGVyIHJlc29sdXRpb24gdmVyc2lvbiBvZiB0aGUgdGh1bWJuYWlsIHRoYW4gdGhlIGBtZWRpdW1gIHJlc29sdXRpb24gaW1hZ2VcbiAgICogKERlZmF1bHQgc2l6ZSBvZiB2aWRlbyB0aHVtYm5haWw6IDQ4MHB4IHdpZGUsIDM2MHB4IHRhbGw7IGNoYW5uZWwgdGh1bWJuYWlsOiA4MDBweCB3aWRlLCA4MDBweCB0YWxsKVxuICAgKiAtIGBzdGFuZGFyZGA6IEEgaGlnaGVyIHJlc29sdXRpb24gdmVyc2lvbiBvZiB0aGUgdGh1bWJuYWlsIHRoYW4gdGhlIGBoaWdoYCByZXNvbHV0aW9uIGltYWdlXG4gICAqIChEZWZhdWx0IHNpemUgb2YgdmlkZW8gdGh1bWJuYWlsOiA2NDBweCB3aWRlLCA0ODBweCB0YWxsKVxuICAgKiAtIGBtYXhyZXNgOiBUaGUgaGlnaGVzdCByZXNvbHV0aW9uIHZlcnNpb24gb2YgdGhlIHRodW1ibmFpbFxuICAgKiAoRGVmYXVsdCBzaXplIG9mIHZpZGVvIHRodW1ibmFpbDogMTI4MHB4IHdpZGUsIDcyMHB4IHRhbGwpXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQudGh1bWJuYWlscy4oa2V5KSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbCB7XG4gIC8qKlxuICAgKiBUaGUgVVJMIG9mIHRoZSB0aHVtYm5haWxcbiAgICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgdGh1bWJuYWlsXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHRodW1ibmFpbFxuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VBdWRpb1N0cmVhbX0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtQXVkaW9TdHJlYW0gZXh0ZW5kcyBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUF1ZGlvU3RyZWFtIHt9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUxvY2FsaXphdGlvbn0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtTG9jYWxpemF0aW9uIGV4dGVuZHMgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VMb2NhbGl6YXRpb24ge31cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlTG9jYWxpemF0aW9uc30gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtTG9jYWxpemF0aW9ucyBleHRlbmRzIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlTG9jYWxpemF0aW9ucyB7fVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VUaHVtYm5haWx9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbVRodW1ibmFpbCBleHRlbmRzIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVGh1bWJuYWlsIHt9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbHN9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbVRodW1ibmFpbHMgZXh0ZW5kcyBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbHMge31cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlU3VnZ2VzdGlvblRhZ1N1Z2dlc3Rpb259IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbVN1Z2dlc3Rpb25UYWdTdWdnZXN0aW9uIGV4dGVuZHMgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VTdWdnZXN0aW9uVGFnU3VnZ2VzdGlvbiB7fVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VWaWRlb1N0cmVhbX0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtVmlkZW9TdHJlYW0gZXh0ZW5kcyBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVZpZGVvU3RyZWFtIHt9XG4vKipcbiAqIEEgdmlkZW8gcmVzb3VyY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSB7XG4gIC8qKlxuICAgKiBJZGVudGlmaWVzIHRoZSByZXN1bHQncyB0eXBlLlxuICAgKiAoTm90ZTogVGhpcyB2YWx1ZSBzaG91bGQgYmUgc2V0IHRvIGB5b3V0dWJlI3ZpZGVvYClcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mja2luZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBraW5kPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIEV0YWcgb2YgdGhpcyByZXNvdXJjZS5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZXRhZyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBldGFnPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIElEIHVzZWQgYnkgWW91VHViZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGUgdmlkZW8uXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2lkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogQ29udGFpbnMgYmFzaWMgZGV0YWlscyBhYm91dCB0aGUgdmlkZW8gKGUuZy4gdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSlcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBzbmlwcGV0Pzoge1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXRlIGFuZCB0aW1lIHRoYXQgdGhlIHZpZGVvIHdhcyBwdWJsaXNoZWRcbiAgICAgKiBOb3RlOiBUaGlzIHRpbWUgY2FuIGJlIGRpZmZlcmVudCB0aGFuIHRoZSB0aW1lIHRoYXQgdGhlIHZpZGVvIHdhcyB1cGxvYWRlZFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5wdWJsaXNoZWRBdCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHVibGlzaGVkQXQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgYnkgWW91VHViZSB0byBpZGVudGlmeSB0aGUgY2hhbm5lbCB0aGF0IHRoZSB2aWRlbyB3YXMgdXBsb2FkZWQgdG9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQuY2hhbm5lbElkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjaGFubmVsSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHZpZGVvJ3MgdGl0bGVcbiAgICAgKiBOb3RlOiBUaGlzIHZhbHVlIGhhcyBhIG1heGltdW0gbGVuZ3RoIG9mIDEwMCBjaGFyYWN0ZXJzIGFuZCBtYXkgY29udGFpbiBhbGwgdmFsaWRcbiAgICAgKiBVVEYtOCBjaGFyYWN0ZXJzIGV4Y2VwdCBgPGAgYW5kIGA+YC5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQudGl0bGUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB2aWRlbydzIGRlc2NyaXB0aW9uXG4gICAgICogTm90ZTogVGhpcyB2YWx1ZSBoYXMgYSBtYXhpbXVtIGxlbmd0aCBvZiA1MDAwIGNoYXJhY3RlcnMgYW5kIG1heSBjb250YWluIGFsbCB2YWxpZFxuICAgICAqIFVURi04IGNoYXJhY3RlcnMgZXhjZXB0IGA8YCBhbmQgYD5gLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5kZXNjcmlwdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgdGh1bWJuYWlsIGltYWdlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LnRodW1ibmFpbHMgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHRodW1ibmFpbHM/OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbHM7XG4gICAgLyoqXG4gICAgICogVGhlIGNoYW5uZWwgdGl0bGUgb2YgdGhlIGNoYW5uZWwgdGhhdCB0aGUgdmlkZW8gYmVsb25ncyB0b1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5jaGFubmVsVGl0bGUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNoYW5uZWxUaXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBrZXl3b3JkIHRhZ3MgYXNzb2NpYXRlZCB3aXRoIHRoZSB2aWRlb1xuICAgICAqIE5vdGU6IFRhZ3MgY2FuIGNvbnRhaW4gc3BhY2VzLlxuICAgICAqIE5vdGU6IFRoaXMgcHJvcGVydHkncyB2YWx1ZSBoYXMgYSBtYXhpbXVtIGxlbmd0aCBvZiA1MDAgY2hhcmFjdGVycy5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQudGFnc1tdIGZvciBtb3JlIGluZm8uXG4gICAgICovXG4gICAgdGFncz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIFRoZSBZb3VUdWJlIHZpZGVvIGNhdGVnb3J5IGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQuY2F0ZWdvcnlJZCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY2F0ZWdvcnlJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHZpZGVvIGlzIGFuIHVwY29taW5nL2N1cnJlbnRseSBsaXZlIGJyb2FkY2FzdFxuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBsaXZlYFxuICAgICAqIC0gYG5vbmVgXG4gICAgICogLSBgdXBjb21pbmdgXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmxpdmVCcm9hZGNhc3RDb250ZW50IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBsaXZlQnJvYWRjYXN0Q29udGVudD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHRleHQgaW4gdGhlIHJlc291cmNlJ3MgYHNuaXBwZXQudGl0bGVgIGFuZCBgc25pcHBldC5kZXNjcmlwdGlvbmAgcHJvcGVydGllc1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5kZWZhdWx0TGFuZ3VhZ2UgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGRlZmF1bHRMYW5ndWFnZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBDb250YWlucyBlaXRoZXIgYSBsb2NhbGl6ZWQgdGl0bGUgYW5kIGRlc2NyaXB0aW9uIGZvciB0aGUgdmlkZW8gb3IgdGhlIHRpdGxlIGluIHRoZSBkZWZhdWx0XG4gICAgICogbGFuZ3VhZ2UgZm9yIHRoZSB2aWRlbydzIG1ldGFkYXRhXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmxvY2FsaXplZCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbG9jYWxpemVkPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbG9jYWxpemVkIHZpZGVvIHRpdGxlXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5sb2NhbGl6ZWQudGl0bGUgZm9yIG1vcmUgaW5mb1xuICAgICAgICovXG4gICAgICB0aXRsZT86IHN0cmluZztcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxvY2FsaXplZCBkZXNjcmlwdGlvblxuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQubG9jYWxpemVkLmRlc2NyaXB0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgICAqL1xuICAgICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGxhbmd1YWdlIHNwb2tlbiBpbiB0aGUgdmlkZW8ncyBkZWZhdWx0IGF1ZGlvIHRyYWNrXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmRlZmF1bHRBdWRpb0xhbmd1YWdlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkZWZhdWx0QXVkaW9MYW5ndWFnZT86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIGluZm8gYWJvdXQgdGhlIHZpZGVvIGNvbnRlbnRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgY29udGVudERldGFpbHM/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIGxlbmd0aCBvZiB0aGUgdmlkZW8gaW4gYW4gSVNPIDg2MDEgZHVyYXRpb25cbiAgICAgKlxuICAgICAqIFNlZSBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5kdXJhdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZHVyYXRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZpZGVvIGlzIGF2YWlsYWJsZSBpbiAyRCBvciAzRFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMuZGltZW5zaW9uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkaW1lbnNpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZpZGVvIGlzIGF2YWlsYWJsZSBpbiBoaWdoIGRlZmluaXRpb24gb3Igb25seSBpbiBzdGFuZGFyZCBkZWZpbml0aW9uXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGhkYFxuICAgICAqIC0gYHNkYFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMuZGVmaW5pdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZGVmaW5pdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciBjYXB0aW9ucyBhcmUgYXZhaWxhYmxlIGZvciB0aGUgdmlkZW9cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgZmFsc2VgXG4gICAgICogLSBgdHJ1ZWBcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLmNhcHRpb24gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNhcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZpZGVvIHJlcHJlc2VudHMgbGljZW5zZWQgY29udGVudCwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgY29udGVudFxuICAgICAqIHdhcyB1cGxvYWRlZCB0byBhIGNoYW5uZWwgbGlua2VkIHRvIGEgWW91VHViZSBjb250ZW50IHBhcnRuZXIgYW5kIHRoZW4gY2xhaW1lZCBieSB0aGF0XG4gICAgICogcGFydG5lci5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLmxpY2Vuc2VkQ29udGVudCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbGljZW5zZWRDb250ZW50PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBDb250YWlucyBpbmZvIGFib3V0IHRoZSBjb3VudHJpZXMgd2hlcmUgYSB2aWRlbyBpcy9pcyBub3Qgdmlld2FibGUuXG4gICAgICogTm90ZTogVGhpcyBvYmplY3Qgd2lsbCBlaXRoZXIgaGF2ZSB0aGUgYGFsbG93ZWRgIHByb3BlcnR5IG9yIHRoZSBgYmxvY2tlZGAgcHJvcGVydHlcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLnJlZ2lvblJlc3RyaWN0aW9uXG4gICAgICogZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHJlZ2lvblJlc3RyaWN0aW9uPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBBIGxpc3Qgb2YgcmVnaW9uIGNvZGVzIHRoYXQgaWRlbnRpZnkgY291bnRyaWVzIHdoZXJlIHRoZSB2aWRlbyBpcyB2aWV3YWJsZSBpblxuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLnJlZ2lvblJlc3RyaWN0aW9uLmFsbG93ZWRbXVxuICAgICAgICogZm9yIG1vcmUgaW5mb1xuICAgICAgICovXG4gICAgICBhbGxvd2VkPzogc3RyaW5nW107XG4gICAgICAvKipcbiAgICAgICAqIEEgbGlzdCBvZiByZWdpb24gY29kZXMgdGhhdCBpZGVudGlmeSBjb3VudHJpZXMgd2hlcmUgdGhlIHZpZGVvIGlzIGJsb2NrZWRcbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5yZWdpb25SZXN0cmljdGlvbi5ibG9ja2VkW11cbiAgICAgICAqIGZvciBtb3JlIGluZm9cbiAgICAgICAqL1xuICAgICAgYmxvY2tlZD86IHN0cmluZ1tdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSByYXRpbmcgdGhhdCB0aGUgdmlkZW8gcmVjZWl2ZWQgdW5kZXIgdmFyaW91cyByYXRpbmcgc2NoZW1lc1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMuY29udGVudFJhdGluZyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY29udGVudFJhdGluZz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMuY29udGVudFJhdGluZyBmb3JcbiAgICAgICAqIGFsbCBhdmFpbGFibGUgcmF0aW5nc1xuICAgICAgICovXG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgcHJvamVjdGlvbiBmb3JtYXQgb2YgdGhlIHZpZGVvXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYDM2MGBcbiAgICAgKiAtIGByZWN0YW5ndWxhcmBcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLnByb2plY3Rpb24gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByb2plY3Rpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZpZGVvIHVwbG9hZGVyIGhhcyBhZGRlZCBhIGN1c3RvbSB0aHVtYm5haWwgaW1hZ2UgZm9yIHRoZSB2aWRlb1xuICAgICAqIE5vdGU6IFRoaXMgcHJvcGVydHkgaXMgb25seSB2aXNpYmxlIHRvIHRoZSB2aWRlbyB1cGxvYWRlclxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMuaGFzQ3VzdG9tVGh1bWJuYWlsIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBoYXNDdXN0b21UaHVtYm5haWw/OiBib29sZWFuO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgaW5mbyBhYm91dCB0aGUgdmlkZW8ncyB1cGxvYWRpbmcsIHByb2Nlc3NpbmcgYW5kIHByaXZhY3kgc3RhdHVzZXNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdHVzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHN0YXR1cz86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdHVzIG9mIHRoZSB1cGxvYWRlZCB2aWRlb1xuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBkZWxldGVkYFxuICAgICAqIC0gYGZhaWxlZGBcbiAgICAgKiAtIGBwcm9jZXNzZWRgXG4gICAgICogLSBgcmVqZWN0ZWRgXG4gICAgICogLSBgdXBsb2FkZWRgXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMudXBsb2FkU3RhdHVzIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB1cGxvYWRTdGF0dXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhpcyB2YWx1ZSBleHBsYWlucyB3aHkgYSB2aWRlbyBmYWlsZWQgdG8gdXBsb2FkXG4gICAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IHByZXNlbnQgaWYgdGhlIGB1cGxvYWRTdGF0dXNgIHByb3BlcnR5IGluZGljYXRlcyB0aGF0IHRoZSB1cGxvYWRcbiAgICAgKiBmYWlsZWQuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMuZmFpbHVyZVJlYXNvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZmFpbHVyZVJlYXNvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGlzIHZhbHVlIGV4cGxhaW5zIHdoeSBZb3VUdWJlIHJlamVjdGVkIHRoZSB2aWRlb1xuICAgICAqIE5vdGU6IFRoaXMgcHJvcGVydHkgaXMgb25seSBwcmVzZW50IGlmIHRoZSBgdXBsb2FkU3RhdHVzYCBwcm9wZXJ0eSBpbmRpY2F0ZXMgdGhhdCB0aGUgdXBsb2FkXG4gICAgICogd2FzIHJlamVjdGVkLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdHVzLnJlamVjdGlvblJlYXNvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcmVqZWN0aW9uUmVhc29uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB2aWRlbydzIHByaXZhY3kgc3RhdHVzXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYHByaXZhdGVgXG4gICAgICogLSBgcHVibGljYFxuICAgICAqIC0gYHVubGlzdGVkYFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdHVzLnByaXZhY3lTdGF0dXMgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByaXZhY3lTdGF0dXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGRhdGUgYW5kIHRpbWUgdGhlIHZpZGVvIGlzIHNjaGVkdWxlZCB0byBwdWJsaXNoXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMucHVibGlzaEF0IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwdWJsaXNoQXQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHZpZGVvJ3MgbGljZW5zZVxuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBjcmVhdGl2ZUNvbW1vbmBcbiAgICAgKiAtIGB5b3V0dWJlYFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdHVzLmxpY2Vuc2UgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGxpY2Vuc2U/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZpZGVvIGNhbiBiZSBlbWJlZGRhYmxlIG9uIGFub3RoZXIgd2Vic2l0ZVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdHVzLmVtYmVkZGFibGUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGVtYmVkZGFibGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBleHRlbmRlZCB2aWRlbyBzdGF0aXN0aWNzIG9uIHRoZSB2aWRlbydzIHdhdGNoIHBhZ2UgYXJlIHB1YmxpY2x5XG4gICAgICogYWNjZXNzaWJsZVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdHVzLnB1YmxpY1N0YXRzVmlld2FibGUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHB1YmxpY1N0YXRzVmlld2FibGU/OiBib29sZWFuO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgc3RhdGlzdGljcyBhYm91dCB0aGUgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdGlzdGljcyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBzdGF0aXN0aWNzPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgdGltZXMgdGhlIHZpZGVvIGhhcyBiZWVuIHZpZXdlZFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdGlzdGljcy52aWV3Q291bnQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHZpZXdDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHVzZXJzIHdobyBoYXZlIGluZGljYXRlZCB0aGF0IHRoZXkgaGF2ZSBsaWtlZCB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXRpc3RpY3MubGlrZUNvdW50IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBsaWtlQ291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB1c2VycyB3aG8gaGF2ZSBpbmRpY2F0ZWQgdGhhdCB0aGV5IGhhdmUgZGlzbGlrZWQgdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0aXN0aWNzLmRpc2xpa2VDb3VudCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZGlzbGlrZUNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXRpc3RpY3MuZmF2b3JpdGVDb3VudCBmb3IgbW9yZSBpbmZvXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAyOCBBdWd1c3QgMjAxNSwgdGhlIHByb3BlcnR5J3MgdmFsdWUgaXMgYWx3YXlzIHNldCB0byAwXG4gICAgICovXG4gICAgZmF2b3JpdGVDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNvbW1lbnRzIG9uIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdGlzdGljcy5jb21tZW50Q291bnQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNvbW1lbnRDb3VudD86IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIGluZm9ybWF0aW9uIHVzZWQgdG8gcGxheSB0aGUgdmlkZW8gaW4gYW4gZW1iZWRkZWQgcGxheWVyXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3BsYXllciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwbGF5ZXI/OiB7XG4gICAgLyoqXG4gICAgICogQW4gYDxpZnJhbWU+YCB0YWcgdGhhdCBlbWJlZHMgYSBwbGF5ZXIgdGhhdCBwbGF5cyB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3BsYXllci5lbWJlZEh0bWwgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGVtYmVkSHRtbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwbGF5ZXIgcmV0dXJuZWQgaW4gdGhlIGBwbGF5ZXIuZW1iZWRIdG1sYCBwcm9wZXJ0eVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcGxheWVyLmVtYmVkSGVpZ2h0IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBlbWJlZEhlaWdodD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIHBsYXllciByZXR1cm5lZCBpbiB0aGUgYHBsYXllci5lbWJlZEh0bWxgIHByb3BlcnR5XG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwbGF5ZXIuZW1iZWRXaWR0aCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZW1iZWRXaWR0aD86IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRvcGljcyBhc3NvY2lhdGVkIHdpdGggdGhlIHZpZGVvXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3RvcGljRGV0YWlscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB0b3BpY0RldGFpbHM/OiB7XG4gICAgLyoqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjdG9waWNEZXRhaWxzLnRvcGljSWRzW10gZm9yIG1vcmUgaW5mb1xuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEwIE5vdmVtYmVyIDIwMTYsIHRoZSBBUEkgbm8gbG9uZ2VyIHJldHVybnMgdmFsdWVzIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAqIGFuZCBhbnkgdG9waWNzIGFzc29jaWF0ZWQgd2l0aCBhIHZpZGVvIGFyZSBub3cgcmV0dXJuZWQgYnkgdGhlXG4gICAgICogYHRvcGljRGV0YWlscy5yZWxldmFudFRvcGljSWRzW11gIHByb3BlcnR5IHZhbHVlLlxuICAgICAqL1xuICAgIHRvcGljSWRzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogQSBsaXN0IG9mIHRvcGljIElEcyB0aGF0IGFyZSByZWxldmFudCB0byB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3RvcGljRGV0YWlscy5yZWxldmFudFRvcGljSWRzW10gZm9yIG1vcmUgaW5mb1xuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgVGhpcyBoYXMgYmVlbiBkZXByZWNhdGVkIHNpbmNlIDEwIE5vdmVtYmVyIDIwMTYgYW5kIGhhcyBiZWVuIHVuc3VwcG9ydGVkIHNpbmNlXG4gICAgICogMTAgTm92ZW1iZXIgMjAxN1xuICAgICAqL1xuICAgIHJlbGV2YW50VG9waWNJZHM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgV2lraXBlZGlhIFVSTHMgdGhhdCBwcm92aWRlIGEgaGlnaC1sZXZlbCBkZXNjcmlwdGlvbiBvZiB0aGUgdmlkZW8ncyBjb250ZW50XG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyN0b3BpY0RldGFpbHMudG9waWNDYXRlZ29yaWVzW10gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHRvcGljQ2F0ZWdvcmllcz86IHN0cmluZ1tdO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2F0aW9uLCBkYXRlIGFuZCBhZGRyZXNzIHdoZXJlIHRoZSB2aWRlbyB3YXMgcmVjb3JkZWRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcmVjb3JkaW5nRGV0YWlscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICByZWNvcmRpbmdEZXRhaWxzPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IGRlc2NyaXB0aW9uIG9mIHRoZSBsb2NhdGlvbiB3aGVyZSB0aGUgdmlkZW8gd2FzIHJlY29yZGVkXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNyZWNvcmRpbmdEZXRhaWxzLmxvY2F0aW9uRGVzY3JpcHRpb24gZm9yIG1vcmUgaW5mb1xuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMSBKdW5lIDIwMTcsIHRoaXMgcHJvcGVydHkgaGFzIGJlZW4gZGVwcmVjYXRlZC5cbiAgICAgKi9cbiAgICBsb2NhdGlvbkRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBnZW9sb2NhdGlvbiBpbmZvcm1hdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyN0b3BpY0RldGFpbHMubG9jYXRpb24gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGxvY2F0aW9uPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbGF0aXR1ZGUgaW4gZGVncmVlc1xuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3RvcGljRGV0YWlscy5sb2NhdGlvbi5sYXRpdHVkZSBmb3IgbW9yZSBpbmZvXG4gICAgICAgKlxuICAgICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMSBKdW5lIDIwMTcsIHRoaXMgcHJvcGVydHkgaGFzIGJlZW4gZGVwcmVjYXRlZFxuICAgICAgICovXG4gICAgICBsYXRpdHVkZT86IG51bWJlcjtcbiAgICAgIC8qKlxuICAgICAgICogTG9uZ2l0dWRlIGluIGRlZ3JlZXNcbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyN0b3BpY0RldGFpbHMubG9jYXRpb24ubG9uZ2l0dWRlIGZvciBtb3JlIGluZm9cbiAgICAgICAqXG4gICAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIHByb3BlcnR5IGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgMSBKdW5lIDIwMTdcbiAgICAgICAqL1xuICAgICAgbG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgICAgLyoqXG4gICAgICAgKiBBbHRpdHVkZSBhYm92ZSB0aGUgcmVmZXJlbmNlIGVsbGlwc29pZCwgaW4gbWV0ZXJzLlxuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3RvcGljRGV0YWlscy5sb2NhdGlvbi5hbHRpdHVkZSBmb3IgbW9yZSBpbmZvXG4gICAgICAgKlxuICAgICAgICogQGRlcHJlY2F0ZWQgVGhpcyBwcm9wZXJ0eSBoYXMgYmVlbiBkZXByZWNhdGVkIHNpbmNlIDkganVseSAyMDE4XG4gICAgICAgKi9cbiAgICAgIGFsdGl0dWRlPzogbnVtYmVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSB2aWRlbyB3YXMgcmVjb3JkZWQgaW4gSVNPIDg2MDEgZm9ybWF0XG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNyZWNvcmRpbmdEZXRhaWxzLnJlY29yZGluZ0RhdGUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHJlY29yZGluZ0RhdGU/OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBpbmZvIGFib3V0IHRoZSB2aWRlbyBmaWxlIHRoYXQgd2FzIHVwbG9hZGVkIHRvIFlvdVR1YmUgKHN1Y2ggYXMgdGhlIGZpbGUncyByZXNvbHV0aW9uLFxuICAgKiBkdXJhdGlvbiwgYXVkaW8sIGV0Yy4pXG4gICAqIE5vdGU6IFRoaXMgZGF0YSBjYW4gb25seSBiZSByZXRyaWV2ZWQgYnkgdGhlIHZpZGVvIG93bmVyXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGZpbGVEZXRhaWxzPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSB1cGxvYWRlZCBmaWxlJ3MgbmFtZVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuZmlsZU5hbWUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGZpbGVOYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB1cGxvYWRlZCBmaWxlJ3Mgc2l6ZSBpbiBieXRlc1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuZmlsZVNpemUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGZpbGVTaXplPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSB1cGxvYWRlZCBmaWxlJ3MgdHlwZSBhcyBkZXRlY3RlZCBieSBZb3VUdWJlJ3MgdmlkZW8gcHJvY2Vzc2luZyBlbmdpbmVcbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgYXJjaGl2ZWA6IEluZGljYXRlcyB0aGF0IHRoZSBmaWxlIGlzIGFuIGFyY2hpdmUgZmlsZSAoZS5nLiBgemlwYCBmaWxlcylcbiAgICAgKiAtIGBhdWRpb2A6IEluZGljYXRlcyB0aGF0IHRoZSBmaWxlIGlzIGFuIGF1ZGlvIGZpbGUgKGUuZy4gYG1wM2AgZmlsZXMpXG4gICAgICogLSBgZG9jdW1lbnRgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmlsZSBpcyBhIGRvY3VtZW50L3RleHQgZmlsZSAoZS5nLiBNUyBXb3JkIGRvY3VtZW50cylcbiAgICAgKiAtIGBpbWFnZWA6IEluZGljYXRlcyB0aGF0IHRoZSBmaWxlIGlzIGFuIGltYWdlIGZpbGUgKGUuZy4gYC5qcGVnYCBmaWxlcylcbiAgICAgKiAtIGBvdGhlcmA6IEluZGljYXRlcyB0aGF0IHRoZSBmaWxlIGlzIGFub3RoZXIgbm9uLXZpZGVvIGZpbGUgdHlwZVxuICAgICAqIC0gYHByb2plY3RgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmlsZSBpcyBhIHZpZGVvIHByb2plY3QgZmlsZSAoZS5nLiBhIE1pY3Jvc29mdCBXaW5kb3dzIE1vdmllIE1ha2VyIHByb2plY3QpXG4gICAgICogLSBgdmlkZW9gOiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmlsZSBpcyBhIGtub3duIHZpZGVvIGZpbGUgdHlwZSAoZS5nLiBgbXA0YCBmaWxlcylcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmZpbGVUeXBlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBmaWxlVHlwZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdXBsb2FkZWQgdmlkZW8gZmlsZSdzIGNvbnRhaW5lciBmb3JtYXRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmNvbnRhaW5lciBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY29udGFpbmVyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHZpZGVvIHN0cmVhbXMgY29udGFpbmVkIGluIHRoZSB1cGxvYWRlZCB2aWRlbyBmaWxlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy52aWRlb1N0cmVhbXNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdmlkZW9TdHJlYW1zPzogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VWaWRlb1N0cmVhbVtdO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGF1ZGlvIHN0cmVhbXMgY29udGFpbmVkIGluIHRoZSB1cGxvYWRlZCB2aWRlbyBmaWxlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5hdWRpb1N0cmVhbXNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgYXVkaW9TdHJlYW1zPzogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VBdWRpb1N0cmVhbVtdO1xuICAgIC8qKlxuICAgICAqIFRoZSBsZW5ndGggb2YgdGhlIHVwbG9hZGVkIHZpZGVvIGluIG1pbGxpc2Vjb25kc1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuZHVyYXRpb25NcyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZHVyYXRpb25Ncz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgdXBsb2FkZWQgdmlkZW8gZmlsZSdzIGNvbWJpbmVkIChhdWRpbyAmIHZpZGVvKSBiaXRyYXRlIGluIGJpdHMgcGVyIHNlY29uZFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuYml0cmF0ZUJwcyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgYml0cmF0ZUJwcz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSB1cGxvYWRlZCB2aWRlbyBmaWxlIHdhcyBjcmVhdGVkIGluIElTTyA4NjAxIGZvcm1hdFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuY3JlYXRpb25UaW1lIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjcmVhdGlvblRpbWU/OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBpbmZvIGFib3V0IFlvdVR1YmUncyBwcm9ncmVzcyBpbiBwcm9jZXNzaW5nIHRoZSB1cGxvYWRlZCB2aWRlbyBmaWxlXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3Byb2Nlc3NpbmdEZXRhaWxzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHByb2Nlc3NpbmdEZXRhaWxzPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSB2aWRlbydzIHByb2Nlc3Npbmcgc3RhdHVzXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGZhaWxlZGA6IEluZGljYXRlcyB0aGF0IHRoZSB2aWRlbyBwcm9jZXNzaW5nIGhhcyBmYWlsZWRcbiAgICAgKiAtIGBwcm9jZXNzaW5nYDogSW5kaWNhdGVzIHRoYXQgdGhlIHZpZGVvIGlzIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWRcbiAgICAgKiAtIGBzdWNjZWVkZWRgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHByb2NlZXNlZFxuICAgICAqIC0gYHRlcm1pbmF0ZWRgOiBJbmRpY2F0ZXMgdGhhdCBwcm9jZXNzaW5nIGluZm9ybWF0aW9uIGlzIG5vIGxvbmdlciBhdmFpbGFibGVcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3Byb2Nlc3NpbmdEZXRhaWxzLnByb2Nlc3NpbmdTdGF0dXMgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByb2Nlc3NpbmdTdGF0dXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQ29udGFpbnMgaW5mbyBhYm91dCB0aGUgcHJvZ3Jlc3MgWW91VHViZSBoYXMgbWFkZSBpbiBwcm9jZXNzaW5nIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMucHJvY2Vzc2luZ1Byb2dyZXNzIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwcm9jZXNzaW5nUHJvZ3Jlc3M/OiB7XG4gICAgICAvKipcbiAgICAgICAqIEFuIGVzdGltYXRlIG9mIHRoZSB0b3RhbCBudW1iZXIgb2YgcGFydHMgdGhhdCBuZWVkIHRvIGJlIHByb2Nlc3NlZCBmb3IgdGhlIHZpZGVvXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMucHJvY2Vzc2luZ1Byb2dyZXNzLnBhcnRzVG90YWwgZm9yIG1vcmUgaW5mb1xuICAgICAgICovXG4gICAgICBwYXJ0c1RvdGFsPzogbnVtYmVyO1xuICAgICAgLyoqXG4gICAgICAgKiBUYmUgbnVtYmVyIG9mIHBhcnRzIG9mIHRoZSB2aWRlbyB0aGF0IFlvdVR1YmUgaGFzIGFscmVhZHkgcHJvY2Vzc2VkXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMucHJvY2Vzc2luZ1Byb2dyZXNzLnBhcnRzUHJvY2Vzc2VkIGZvciBtb3JlIGluZm9cbiAgICAgICAqL1xuICAgICAgcGFydHNQcm9jZXNzZWQ/OiBudW1iZXI7XG4gICAgICAvKipcbiAgICAgICAqIEFuIGVzdGltYXRlIG9mIHRoZSBhbW91bnQgb2YgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0aGF0IFlvdVR1YmUgbmVlZHMgdG8gZmluaXNoIHByb2Nlc3NpbmcgdGhlIHZpZGVvXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMucHJvY2Vzc2luZ1Byb2dyZXNzLnRpbWVMZWZ0TXMgZm9yIG1vcmUgaW5mb1xuICAgICAgICovXG4gICAgICB0aW1lTGVmdE1zPzogbnVtYmVyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIHJlYXNvbiB0aGF0IFlvdVR1YmUgZmFpbGVkIHRvIHByb2Nlc3MgdGhlIHZpZGVvXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYG90aGVyYDogSW5kaWNhdGVzIHRoYXQgc29tZSBvdGhlciBwcm9jZXNzaW5nIGNvbXBvbmVudCBoYXMgZmFpbGVkXG4gICAgICogLSBgc3RyZWFtaW5nRmFpbGVkYDogSW5kaWNhdGVzIHRoYXQgdGhlIHZpZGVvIGNvdWxkIG5vdCBiZSBzZW50IHRvIHN0cmVhbWVyc1xuICAgICAqIC0gYHRyYW5zY29kZUZhaWxlZGA6IEluZGljYXRlcyB0aGF0IGNvbnRlbnQgdHJhbnNjb2RpbmcgaGFzIGZhaWxlZFxuICAgICAqIC0gYHVwbG9hZEZhaWxlZGA6IEluZGljYXRlcyB0aGF0IGZpbGUgZGVsaXZlcnkgaGFzIGZhaWxlZFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMucHJvY2Vzc2luZ0ZhaWx1cmVSZWFzb24gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByb2Nlc3NpbmdGYWlsdXJlUmVhc29uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGZpbGUgZGV0YWlscyBhcmUgYXZhaWxhYmxlIGZvciB0aGUgdXBsb2FkZWQgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3Byb2Nlc3NpbmdEZXRhaWxzLmZpbGVEZXRhaWxzQXZhaWxhYmlsaXR5IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBmaWxlRGV0YWlsc0F2YWlsYWJpbGl0eT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gcHJvY2Vzc2luZyBlbmdpbmUgaGFzIGdlbmVyYXRlZCBzdWdnZXN0aW9ucyB0aGF0IG1pZ2h0IGltcHJvdmVcbiAgICAgKiBZb3VUdWJlJ3MgYWJpbGl0eSB0byBwcm9jZXNzIHRoZSB2aWRlbywgd2FybmluZ3MgdGhhdCBleHBsYWluIHZpZGVvIHByb2Nlc3NpbmcgcHJvYmxlbXMsXG4gICAgICogb3IgZXJyb3JzIHRoYXQgY2F1c2UgdmlkZW8gcHJvY2Vzc2luZyBwcm9ibGVtc1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMucHJvY2Vzc2luZ0lzc3Vlc0F2YWlsYWJpbGl0eSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJvY2Vzc2luZ0lzc3Vlc0F2YWlsYWJpbGl0eT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciBrZXl3b3JkICh0YWcpIHN1Z2dlc3Rpb25zIGFyZSBhdmFpbGFibGUgZm9yIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMudGFnU3VnZ2VzdGlvbnNBdmFpbGFiaWxpdHkgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHRhZ1N1Z2dlc3Rpb25zQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHZpZGVvIGVkaXRpbmcgc3VnZ2VzdGlvbnMsIHdoaWNoIG1pZ2h0IGltcHJvdmUgdmlkZW8gcXVhbGl0eSBvciB0aGVcbiAgICAgKiBwbGF5YmFjayBleHBlcmllbmNlLCBhcmUgYXZhaWxhYmxlIGZvciB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3Byb2Nlc3NpbmdEZXRhaWxzLmVkaXRvclN1Z2dlc3Rpb25zQXZhaWxhYmlsaXR5IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBlZGl0b3JTdWdnZXN0aW9uc0F2YWlsYWJpbGl0eT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aHVtYm5haWwgaW1hZ2VzIGhhdmUgYmVlbiBnZW5lcmF0ZWQgZm9yIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMudGh1bWJuYWlsc0F2YWlsYWJpbGl0eSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdGh1bWJuYWlsc0F2YWlsYWJpbGl0eT86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIHN1Z2dlc3Rpb25zIHRoYXQgaWRlbnRpZnkgb3Bwb3J0dW5pdGllcyB0byBpbXByb3ZlIHRoZSB2aWRlbyBxdWFsaXR5IG9yIHRoZSBtZXRhZGF0YVxuICAgKiBmb3IgdGhlIHVwbG9hZGVkIHZpZGVvXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N1Z2dlc3Rpb25zIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHN1Z2dlc3Rpb25zPzoge1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGVycm9ycyB0aGF0IHdpbGwgcHJldmVudCBZb3VUdWJlIGZyb20gc3VjY2Vzc2Z1bGx5IHByb2Nlc3NpbmcgdGhlIHZpZGVvXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGFyY2hpdmVGaWxlYDogQW4gYXJjaGl2ZSBmaWxlIChlLmcuIGEgemlwIGFyY2hpdmUpXG4gICAgICogLSBgYXVkaW9GaWxlYDogQW4gYXVkaW8gZmlsZSAoZS5nLiBhbiBtcDMgZmlsZSlcbiAgICAgKiAtIGBkb2NGaWxlYDogQSBkb2N1bWVudC90ZXh0IGZpbGUgKGUuZy4gYSBNUyBXb3JkIGRvY3VtZW50IGZpbGUpXG4gICAgICogLSBgaW1hZ2VGaWxlYDogQW4gaW1hZ2UgZmlsZSAoZS5nLiBhIGpwZWcgaW1hZ2UpXG4gICAgICogLSBgbm90QVZpZGVvRmlsZWA6IE90aGVyIG5vbi12aWRlbyBmaWxlXG4gICAgICogLSBgcHJvamVjdEZpbGVgOiBNb3ZpZSBwcm9qZWN0IGZpbGUgKGUuZy4gYSBNaWNyb3NvZnQgV2luZG93cyBNb3ZpZSBNYWtlciBwcm9qZWN0KVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3VnZ2VzdGlvbnMucHJvY2Vzc2luZ0Vycm9yc1tdIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwcm9jZXNzaW5nRXJyb3JzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgcmVhc29ucyB3aHkgWW91VHViZSBtYXkgaGF2ZSBkaWZmaWN1bHR5IHRyYW5zY29kaW5nIHRoZSB1cGxvYWRlZCB2aWRlbyBvciB0aGF0XG4gICAgICogbWlnaHQgcmVzdWx0IGluIGFuIGVycm9uZW91cyB0cmFuc2NvZGluZ1xuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBoYXNFZGl0bGlzdGA6IE5vdGUgdGhhdCBlZGl0IGxpc3RzIGFyZSBjdXJyZW50bHkgdW5zdXBwb3J0ZWRcbiAgICAgKiAtIGBpbmNvbnNpc3RlbnRSZXNvbHV0aW9uYDogQ29uZmxpY3RpbmcgY29udGFpbmVyIGFuZCBzdHJlYW0gcmVzb2x1dGlvbnNcbiAgICAgKiAtIGBwcm9ibGVtYXRpY0F1ZGlvQ29kZWNgOiBBbiBhdWRpbyBjb2RlYyB0aGF0IGlzIGtub3duIHRvIGNhdXNlIHByb2JsZW1zIHdhcyB1c2VkXG4gICAgICogLSBgcHJvYmxlbWF0aWNWaWRlb0NvZGVjYDogQSB2aWRlbyBjb2RlYyB0aGF0IGlzIGtub3duIHRvIGNhdXNlIHByb2JsZW1zIHdhcyB1c2VkXG4gICAgICogLSBgdW5rbm93bkF1ZGlvQ29kZWNgOiBVbnJlY29nbml6ZWQgYXVkaW8gY29kZWMsIHRyYW5zY29kaW5nIGlzIGxpa2VseSB0byBmYWlsXG4gICAgICogLSBgdW5rbm93bkNvbnRhaW5lcmA6IFVucmVjb2duaXplZCBmaWxlIGZvcm1hdCwgdHJhbnNjb2RpbmcgaXMgbGlrZWx5IHRvIGZhaWxcbiAgICAgKiAtIGB1bmtub3duVmlkZW9Db2RlY2A6IFVucmVjb2duaXplZCB2aWRlbyBjb2RlYywgdHJhbnNjb2RpbmcgaXMgbGlrZWx5IHRvIGZhaWxcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N1Z2dlc3Rpb25zLnByb2Nlc3NpbmdXYXJuaW5nc1tdIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwcm9jZXNzaW5nV2FybmluZ3M/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBzdWdnZXN0aW9ucyB0aGF0IG1heSBpbXByb3ZlIFlvdVR1YmUncyBhYmlsaXR5IHRvIHByb2Nlc3MgdGhlIHZpZGVvXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYG5vblN0cmVhbWFibGVNb3ZgOiBUaGUgTVA0IGZpbGUgaXMgbm90IHN0cmVhbWFibGUsIHdoaWNoIHdpbGwgc2xvdyBkb3duIHRoZSBwcm9jZXNzaW5nXG4gICAgICogLSBgc2VuZEJlc3RRdWFsaXR5VmlkZW9gOiBQcm9iYWJseSBhIGJldHRlciBxdWFsaXR5IG9mIHRoZSB2aWRlbyBleGlzdHNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N1Z2dlc3Rpb25zLnByb2Nlc3NpbmdIaW50c1tdIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwcm9jZXNzaW5nSGludHM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBrZXl3b3JkIHRhZ3MgdGhhdCBjb3VsZCBiZSBhZGRlZCB0byB0aGUgdmlkZW8ncyBtZXRhZGF0YSB0byBpbmNyZWFzZSB0aGUgY2hhbmNlc1xuICAgICAqIHRoYXQgdXNlcnMgd2lsbCBmaW5kIHlvdXIgdmlkZW8gd2hlbiBzZWFyY2hpbmcgb3IgYnJvd3Npbmcgb24gWW91VHViZVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3VnZ2VzdGlvbnMudGFnU3VnZ2VzdGlvbnNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdGFnU3VnZ2VzdGlvbnM/OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVN1Z2dlc3Rpb25UYWdTdWdnZXN0aW9uW107XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgdmlkZW8gZWRpdGluZyBzdWdnZXN0aW9ucyB0aGF0IG1pZ2h0IGltcHJvdmUgdGhlIHZpZGVvIHF1YWxpdHkvcGxheWJhY2tcbiAgICAgKiBleHBlcmllbmNlIG9mIHRoZSB1cGxvYWRlZCB2aWRlb1xuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBhdWRpb1F1aWV0QXVkaW9Td2FwYDogVGhlIGF1ZGlvIHRyYWNrIGFwcGVhcnMgc2lsZW50IGFuZCBjb3VsZCBiZSBzd2FwcGVkIHdpdGggYSBiZXR0ZXIgcXVhbGl0eSBvbmVcbiAgICAgKiAtIGB2aWRlb0F1dG9MZXZlbHNgOiBQaWN0dXJlIGJyaWdodG5lc3MgbGV2ZWxzIHNlZW0gb2ZmIGFuZCBjb3VsZCBiZSBjb3JyZWN0ZWRcbiAgICAgKiAtIGB2aWRlb0Nyb3BgOiBNYXJnaW5zIChtYXR0ZXMpIGRldGVjdGVkIGFyb3VuZCB0aGUgcGljdHVyZSBjb3VsZCBiZSBjcm9wcGVkXG4gICAgICogLSBgdmlkZW9TdGFiaWxpemVgOiBUaGUgdmlkZW8gYXBwZWFycyBzaGFreSBhbmQgY291bGQgYmUgc3RhYmlsaXplZFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3VnZ2VzdGlvbnMucHJvY2Vzc2luZ0hpbnRzW10gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGVkaXRvclN1Z2dlc3Rpb25zPzogc3RyaW5nW107XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBtZXRhZGF0YSBhYm91dCBhIGxpdmUgdmlkZW8gYnJvYWRjYXN0XG4gICAqIE5vdGU6IFRoaXMgd2lsbCBiZSBwcmVzZW50IGlmIHRoZSB2aWRlbyBpcyBhbiB1cGNvbWluZywgbGl2ZSBvciBjb21wbGV0ZWQgbGl2ZSBicm9hZGNhc3RcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbGl2ZVN0cmVhbWluZ0RldGFpbHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgbGl2ZVN0cmVhbWluZ0RldGFpbHM/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgdGhhdCB0aGUgYnJvYWRjYXN0IGFjdHVhbGx5IHN0YXJ0ZWQgaW4gSVNPIDg2MDEgZm9ybWF0XG4gICAgICogTm90ZTogVGhpcyB2YWx1ZSB3aWxsIG5vdCBiZSBhdmFpbGFibGUgdW50aWwgdGhlIGJyb2FkY2FzdCBiZWdpbnNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2xpdmVTdHJlYW1pbmdEZXRhaWxzLmFjdHVhbFN0YXJ0VGltZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgYWN0dWFsU3RhcnRUaW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHRoYXQgdGhlIGJyb2FkY2FzdCBhY3R1YWxseSBlbmRlZCBpbiBJU08gODYwMSBmb3JtYXRcbiAgICAgKiBOb3RlOiBUaGlzIHZhbHVlIHdpbGwgbm90IGJlIGF2YWlsYWJsZSB1bnRpbCB0aGUgYnJvYWRjYXN0IGJlZ2luc1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbGl2ZVN0cmVhbWluZ0RldGFpbHMuYWN0dWFsRW5kVGltZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgYWN0dWFsRW5kVGltZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSB0aGF0IHRoZSBicm9hZGNhc3QgaXMgc2NoZWR1bGVkIHRvIGJlZ2luIGluIElTTyA4NjAxIGZvcm1hdFxuICAgICAqIE5vdGU6IFRoaXMgdmFsdWUgd2lsbCBub3QgYmUgYXZhaWxhYmxlIHVudGlsIHRoZSBicm9hZGNhc3QgYmVnaW5zXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsaXZlU3RyZWFtaW5nRGV0YWlscy5zY2hlZHVsZWRTdGFydFRpbWUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHNjaGVkdWxlZFN0YXJ0VGltZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSB0aGF0IHRoZSBicm9hZGNhc3QgaXMgc2NoZWR1bGVkIHRvIGVuZCBpbiBJU08gODYwMSBmb3JtYXRcbiAgICAgKiBOb3RlOiBUaGlzIHZhbHVlIHdpbGwgbm90IGJlIGF2YWlsYWJsZSB1bnRpbCB0aGUgYnJvYWRjYXN0IGJlZ2luc1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbGl2ZVN0cmVhbWluZ0RldGFpbHMuc2NoZWR1bGVkRW5kVGltZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgc2NoZWR1bGVkRW5kVGltZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHZpZXdlcnMgY3VycmVudGx5IHdhdGNoaW5nIHRoZSBicm9hZGNhc3RcbiAgICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGFuZCBpdHMgdmFsdWUgd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBicm9hZGNhc3QgaGFzIGN1cnJlbnQgdmlld2Vyc1xuICAgICAqIGFuZCB0aGUgYnJvYWRjYXN0IG93bmVyIGhhcyBub3QgaGlkZGVuIHRoZSB2aWV3Y291bnQgZm9yIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbGl2ZVN0cmVhbWluZ0RldGFpbHMuc2NoZWR1bGVkRW5kVGltZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY29uY3VycmVudFZpZXdlcnM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIElEIG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIGxpdmUgY2hhdCBhdHRhY2hlZCB0byB0aGlzIHZpZGVvXG4gICAgICogTm90ZTogVGhpcyBmaWVsZCBpcyBmaWxsZWQgb25seSBpZiB0aGUgdmlkZW8gaXMgYSBjdXJyZW50bHkgbGl2ZSBicm9hZGNhc3QgdGhhdCBoYXMgbGl2ZSBjaGF0XG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsaXZlU3RyZWFtaW5nRGV0YWlscy5hY3RpdmVMaXZlQ2hhdElkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBhY3RpdmVMaXZlQ2hhdElkPzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgdHJhbnNsYXRpb25zIG9mIHRoZSB2aWRlbydzIG1ldGFkYXRhXG4gICAqL1xuICBsb2NhbGl6YXRpb25zPzogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VMb2NhbGl6YXRpb25zO1xufVxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW0gZXh0ZW5kcyBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSB7fVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0IGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY1Jlc291cmNlIHtcbiAgLyoqXG4gICAqIFRoZSB0b2tlbiB0aGF0IGNhbiBiZSBwYXNzZWQgdmlhIHRoZSBgcGFnZVRva2VuYCBwYXJhbWV0ZXIgdG8gcmV0cmlldmUgdGhlIG5leHQgcGFnZVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I25leHRQYWdlVG9rZW4gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgbmV4dFBhZ2VUb2tlbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB0b2tlbiB0aGF0IGNhbiBiZSBwYXNzZWQgdmlhIHRoZSBgcGFnZVRva2VuYCBwYXJhbWV0ZXIgdG8gcmV0cmlldmUgdGhlIHByZXZpb3VzIHBhZ2VcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNwcmV2UGFnZVRva2VuIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHByZXZQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDb250YWlucyBwYWdpbmcgaW5mbyBmb3IgdGhlIHJlc3VsdHNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNwYWdlSW5mbyBmcm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcGFnZUluZm8/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHRvdGFsIG51bWJlciBvZiByZXN1bHRzXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3BhZ2VJbmZvLnRvdGFsUmVzdWx0cyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdG90YWxSZXN1bHRzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgcmVzdWx0cyBpbmNsdWRlZCBwZXIgcGFnZVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNwYWdlSW5mby5yZXN1bHRzUGVyUGFnZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcmVzdWx0c1BlclBhZ2U/OiBudW1iZXI7XG4gIH07XG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgdmlkZW9zIHRoYXQgbWF0Y2ggdGhlIHJlcXVlc3QgY3JpdGVyaWFcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNpdGVtc1tdIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGl0ZW1zPzogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VbXTtcbn1cbiJdfQ==