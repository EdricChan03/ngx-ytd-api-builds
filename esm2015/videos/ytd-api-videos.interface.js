/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
 * @record
 */
export function NgxYtdApiVideosInsertOpts() { }
if (false) {
    /**
     * Indicates whether YouTube should automatically enhance the video's lighting and color.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/insert#autoLevels for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosInsertOpts.prototype.autoLevels;
    /**
     * Indicates whether YouTube should send a notification about the new video to users who
     * subscribe to the video's channel
     *
     * See https://developers.google.com/youtube/v3/docs/videos/insert#notifySubscribers for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosInsertOpts.prototype.notifySubscribers;
    /**
     * Note: This parameter is optional.
     * Note: This parameter can only be used in a properly authorized request.
     * Note: This parameter is intended for YouTube content partners.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/insert#onBehalfOfContentOwner for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosInsertOpts.prototype.onBehalfOfContentOwner;
    /**
     * Note: This parameter is optional.
     * Note: This parameter can only be used in a properly authorized request.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/insert#onBehalfOfContentOwnerChannel for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosInsertOpts.prototype.onBehalfOfContentOwnerChannel;
    /**
     * Indicates whether YouTube should adjust the video to remove shaky camera motions
     *
     * See https://developers.google.com/youtube/v3/docs/videos/insert#stabilize for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosInsertOpts.prototype.stabilize;
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
 * Options for {\@link NgxYtdApiVideosService#delete}
 * @record
 */
export function NgxYtdApiVideosDeleteOpts() { }
if (false) {
    /**
     * Specifies the YouTube video ID for the resource that is being deleted
     *
     * See https://developers.google.com/youtube/v3/docs/videos/delete#id for more info
     * @type {?}
     */
    NgxYtdApiVideosDeleteOpts.prototype.id;
    /**
     * Note: This parameter is optional.
     * Note: This parameter can only be used in a properly authorized request.
     * Note: This parameter is intended for YouTube content partners.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/delete#onBehalfOfContentOwner for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosDeleteOpts.prototype.onBehalfOfContentOwner;
}
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
     * Note: This parameter is intended for YouTube content partners.
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
 * Options for {\@link NgxYtdApiVideosService#rate}
 * @record
 */
export function NgxYtdApiVideosRateOpts() { }
if (false) {
    /**
     * Specifies the YouTube video ID that is being rated or having its rating removed
     *
     * See https://developers.google.com/youtube/v3/docs/videos/rate#id for more info
     * @type {?}
     */
    NgxYtdApiVideosRateOpts.prototype.id;
    /**
     * Specifies the rating to record
     * Acceptable values:
     * - `dislike`: Records that the authenticated user disliked the video
     * - `like`: Records that the authenticated user liked the video
     * - `none`: Removes any rating that the authenticated user previously set for the video
     * @type {?}
     */
    NgxYtdApiVideosRateOpts.prototype.rating;
}
/**
 * Options for {\@link NgxYtdApiVideosService#reportAbuse}
 * @record
 */
export function NgxYtdApiVideosReportAbuseOpts() { }
if (false) {
    /**
     * Note: This parameter is optional.
     * Note: This parameter can only be used in a properly authorized request.
     * Note: This parameter is intended for YouTube content partners.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse#onBehalfOfContentOwner for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosReportAbuseOpts.prototype.onBehalfOfContentOwner;
}
/**
 * Options for the request body of {\@link NgxYtdApiVideosService#reportAbuse}
 * @record
 */
export function NgxYtdApiVideosReportAbuseBody() { }
if (false) {
    /**
     * The video that is being reported for abusive content
     *
     * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse#videoId for more info
     * @type {?}
     */
    NgxYtdApiVideosReportAbuseBody.prototype.videoId;
    /**
     * Specifies the reason that the video is being reported for containing abusive content
     *
     * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse#reasonId for more info
     * @type {?}
     */
    NgxYtdApiVideosReportAbuseBody.prototype.reasonId;
    /**
     * Specifies the secondary reason that the video is being reported for containing abusive content
     *
     * See zhttps://developers.google.com/youtube/v3/docs/videos/reportAbuse#secondaryReasonId for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosReportAbuseBody.prototype.secondaryReasonId;
    /**
     * Provides any additional information that the reporter wants to add
     *
     * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse#comments for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosReportAbuseBody.prototype.comments;
    /**
     * Identifies a language spoken by the reporter
     * @type {?|undefined}
     */
    NgxYtdApiVideosReportAbuseBody.prototype.language;
}
/**
 * @record
 */
export function NgxYtdApiVideosUpdateOpts() { }
if (false) {
    /**
     * Note: This parameter is optional.
     * Note: This parameter can only be used in a properly authorized request.
     * Note: This parameter is intended for YouTube content partners.
     *
     * See https://developers.google.com/youtube/v3/docs/videos/update#onBehalfOfContentOwner for more info
     * @type {?|undefined}
     */
    NgxYtdApiVideosUpdateOpts.prototype.onBehalfOfContentOwner;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvdmlkZW9zLyIsInNvdXJjZXMiOlsieXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxvRUFhQzs7Ozs7Ozs7SUFQQyw2REFBYTs7Ozs7OztJQU1iLDJFQUE2Qjs7Ozs7QUFHL0Isd0RBeUJDOzs7Ozs7OztJQW5CQywwREFBc0I7Ozs7Ozs7SUFNdEIsbURBQWU7Ozs7Ozs7SUFNZix3REFBb0I7Ozs7Ozs7SUFNcEIsb0RBQWdCOzs7OztBQUdsQix3REF5REM7Ozs7Ozs7O0lBbkRDLHlEQUFxQjs7Ozs7OztJQU1yQiwwREFBc0I7Ozs7Ozs7SUFNdEIsMERBQXNCOzs7Ozs7OztJQU90Qix5REFBcUI7Ozs7Ozs7SUFNckIsbURBQWU7Ozs7Ozs7SUFNZix3REFBb0I7Ozs7Ozs7Ozs7Ozs7SUFZcEIsc0RBQWtCOzs7Ozs7OztJQU9sQixvREFBZ0I7Ozs7O0FBR2xCLDBEQU9DOzs7O0FBRUQseURBYUM7Ozs7Ozs7O0lBUEMsb0RBQWU7Ozs7Ozs7SUFNZiwwREFBcUI7Ozs7O0FBR3ZCLHVEQWlCQzs7OztBQUVELHNEQWFDOzs7Ozs7SUFUQywrQ0FBYTs7Ozs7SUFJYixpREFBZTs7Ozs7SUFJZixrREFBZ0I7Ozs7OztBQUtsQiw2Q0F5c0JDOzs7Ozs7Ozs7SUFsc0JDLHVDQUFjOzs7Ozs7O0lBTWQsdUNBQWM7Ozs7Ozs7SUFNZCxxQ0FBWTs7Ozs7OztJQU1aLDBDQWtHRTs7Ozs7OztJQU1GLGlEQTBGRTs7Ozs7OztJQU1GLHlDQW1FRTs7Ozs7OztJQU1GLDZDQStCRTs7Ozs7OztJQU1GLHlDQW1CRTs7Ozs7OztJQU1GLCtDQXVCRTs7Ozs7OztJQU1GLG1EQThDRTs7Ozs7Ozs7O0lBUUYsOENBK0RFOzs7Ozs7O0lBTUYsb0RBaUZFOzs7Ozs7OztJQU9GLDhDQXlERTs7Ozs7Ozs7SUFPRix1REE0Q0U7Ozs7O0lBSUYsZ0RBQXFEOzs7OztBQUV2RCwrQ0FtQ0M7Ozs7Ozs7O0lBN0JDLCtDQUFxQjs7Ozs7Ozs7SUFPckIsc0RBQTRCOzs7Ozs7Ozs7SUFRNUIsMkRBQWdDOzs7Ozs7OztJQU9oQyxrRUFBdUM7Ozs7Ozs7SUFNdkMsOENBQW9COzs7Ozs7QUFNdEIsbURBQWtGOzs7O0FBQ2xGLCtDQXNDQzs7Ozs7Ozs7SUFoQ0Msa0RBQXVCOzs7Ozs7O0lBTXZCLGtEQUF1Qjs7Ozs7OztJQU12Qiw2Q0FhRTs7Ozs7OztJQU1GLDBDQUFrQzs7Ozs7O0FBT3BDLDhEQUF3Rzs7Ozs7QUFNeEcsK0RBQTBHOzs7OztBQU0xRyxnRUFBNEc7Ozs7O0FBTTVHLDREQUFvRzs7Ozs7QUFNcEcsNkRBQXNHOzs7OztBQU10RywwRUFBZ0k7Ozs7O0FBTWhJLDhEQUF3Rzs7Ozs7QUFLeEcsK0NBZUM7Ozs7Ozs7O0lBVEMsdUNBQVc7Ozs7Ozs7OztJQVFYLDJEQUFnQzs7Ozs7O0FBS2xDLGtEQWVDOzs7Ozs7OztJQVRDLDBDQUFXOzs7Ozs7Ozs7SUFRWCw4REFBZ0M7Ozs7O0FBR2xDLGtEQWFDOzs7Ozs7OztJQVBDLCtDQUFpQjs7Ozs7OztJQU1qQiw4Q0FBcUQ7Ozs7O0FBRXZELG9EQU9DOzs7Ozs7OztJQURDLCtDQUF1Qzs7Ozs7O0FBTXpDLDZDQWdHQzs7Ozs7Ozs7Ozs7SUF2RkMsd0NBQXNCOzs7Ozs7Ozs7SUFRdEIscUNBQVk7Ozs7Ozs7Ozs7OztJQVdaLDJDQUE4Qjs7Ozs7OztJQU05QixxQ0FBWTs7Ozs7Ozs7Ozs7O0lBV1osNENBQW1COzs7Ozs7Ozs7O0lBU25CLDZDQUFvQjs7Ozs7Ozs7Ozs7SUFVcEIsMkNBQWtCOzs7Ozs7OztJQU9sQix5REFBZ0M7Ozs7Ozs7OztJQVFoQyw0Q0FBbUI7Ozs7Ozs7O0lBT25CLDZDQUFvQjs7Ozs7Ozs7OztJQVNwQixvREFBMkI7Ozs7OztBQUs3Qiw2Q0FlQzs7Ozs7Ozs7SUFUQyxxQ0FBVzs7Ozs7Ozs7O0lBUVgseUNBQW9DOzs7Ozs7QUFLdEMsb0RBU0M7Ozs7Ozs7Ozs7SUFEQyxnRUFBZ0M7Ozs7OztBQUtsQyxvREE2QkM7Ozs7Ozs7O0lBdkJDLGlEQUFnQjs7Ozs7OztJQU1oQixrREFBaUI7Ozs7Ozs7SUFNakIsMkRBQTJCOzs7Ozs7O0lBTTNCLGtEQUFrQjs7Ozs7SUFJbEIsa0RBQWtCOzs7OztBQUdwQiwrQ0FTQzs7Ozs7Ozs7OztJQURDLDJEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5neFl0ZEFwaUdlbmVyaWNPcHRzLFxuICBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2UsXG4gIE5neFl0ZEFwaVN0YW5kYXJkT3B0c1xufSBmcm9tICduZ3gteXRkLWFwaS9jb21tb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlU3VnZ2VzdGlvblRhZ1N1Z2dlc3Rpb24ge1xuICAvKipcbiAgICogVGhlIGtleXdvcmQgdGFnIHN1Z2dlc3RlZCBmb3IgdGhlIHZpZGVvXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N1Z2dlc3Rpb25zLnRhZ1N1Z2dlc3Rpb25zW10udGFnIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHRhZz86IHN0cmluZztcbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIHZpZGVvIGNhdGVnb3JpZXMgZm9yIHdoaWNoIHRoZSB0YWcgaXMgcmVsZXZhbnRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3VnZ2VzdGlvbnMudGFnU3VnZ2VzdGlvbnNbXS5jYXRlZ29yeVJlc3RyaWN0c1tdIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGNhdGVnb3J5UmVzdHJpY3RzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VBdWRpb1N0cmVhbSB7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGF1ZGlvIGNoYW5uZWxzIHRoYXQgdGhlIHN0cmVhbSBjb250YWluc1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5hdWRpb1N0cmVhbXNbXS5jaGFubmVsQ291bnQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgY2hhbm5lbENvdW50PzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGF1ZGlvIGNvZGVjIHRoYXQgdGhlIHN0cmVhbSB1c2VzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmF1ZGlvU3RyZWFtc1tdLmNvZGVjIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGNvZGVjPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGF1ZGlvIHN0cmVhbSdzIGJpdHJhdGUsIGluIGJpdHMgcGVyIHNlY29uZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5hdWRpb1N0cmVhbXNbXS5iaXRyYXRlQnBzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGJpdHJhdGVCcHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBBIHZhbHVlIHRoYXQgdW5pcXVlbHkgaWRlbnRpZmllcyBhIHZpZGVvIHZlbmRvci4gVHlwaWNhbGx5LCB0aGUgdmFsdWUgaXMgYSBmb3VyLWxldHRlciB2ZW5kb3IgY29kZS5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuYXVkaW9TdHJlYW1zW10udmVuZG9yIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZlbmRvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVZpZGVvU3RyZWFtIHtcbiAgLyoqXG4gICAqIFRoZSBlbmNvZGVkIHZpZGVvJ3MgY29udGVudCB3aWR0aCBpbiBwaXhlbHNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMudmlkZW9TdHJlYW1zW10ud2lkdGhQaXhlbHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgd2lkdGhQaXhlbHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgZW5jb2RlZCB2aWRlbydzIGNvbnRlbnQgaGVpZ2h0IGluIHBpeGVsc1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy52aWRlb1N0cmVhbXNbXS5oZWlnaHRQaXhlbHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaGVpZ2h0UGl4ZWxzPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIHZpZGVvJ3Mgc3RyZWFtIHJhdGUgaW4gZnJhbWVzIHBlciBzZWNvbmQgKEZQUylcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMudmlkZW9TdHJlYW1zW10uZnJhbWVSYXRlRnBzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGZyYW1lUmF0ZUZwcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSB2aWRlbyBjb250ZW50J3MgZGlzcGxheSBhc3BlY3QgcmF0aW8sIHdoaWNoIHNwZWNpZmllcyB0aGUgYXNwZWN0IHJhdGlvIGluIHdoaWNoXG4gICAqIHRoZSB2aWRlbyBzaG91bGQgYmUgZGlzcGxheWVkLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy52aWRlb1N0cmVhbXNbXS5hc3BlY3RSYXRpbyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBhc3BlY3RSYXRpbz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSB2aWRlbyBjb2RlYyB0aGF0IHRoZSBzdHJlYW0gdXNlc1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy52aWRlb1N0cmVhbXNbXS5jb2RlYyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBjb2RlYz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB2aWRlbyBzdHJlYW0ncyBiaXRyYXRlIGluIGJpdHMgcGVyIHNlY29uZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy52aWRlb1N0cmVhbXNbXS5iaXRyYXRlQnBzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGJpdHJhdGVCcHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgYW1vdW50IHRoYXQgWW91VHViZSBuZWVkcyB0byByb3RhdGUgdGhlIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50IHRvIHByb3Blcmx5IGRpc3BsYXkgdGhlIHZpZGVvXG4gICAqIFZhbGlkIHZhbHVlczpcbiAgICogLSBgY2xvY2t3aXNlYDogSW5kaWNhdGVzIHRoYXQgdGhlIHZpZGVvIG5lZWRzIHRvIGJlIHJvdGF0ZWQgOTDCsCBjbG9ja3dpc2VcbiAgICogLSBgY291bnRlckNsb2Nrd2lzZWA6IEluZGljYXRlcyB0aGF0IHRoZSB2aWRlbyBuZWVkcyB0byBiZSByb3RhdGVkIDkwwrAgY291bnRlci1jb2Nrd2lzZVxuICAgKiAtIGBub25lYDogSW5kaWNhdGVzIHRoYXQgdGhlIHZpZGVvIGRvZXMgbm90IG5lZWQgdG8gYmUgcm90YXRlZFxuICAgKiAtIGBvdGhlcmA6IEluZGljYXRlcyB0aGF0IHRoZSB2aWRlbyBuZWVkcyB0byBiZSByb3RhdGVkIGluIHNvbWUgb3RoZXIsIG5vbi10cml2aWFsIHdheVxuICAgKiAtIGB1cHNpZGVEb3duYDogSW5kaWNhdGVzIHRoYXQgdGhlIHZpZGVvIG5lZWRzIHRvIGJlIHJvdGF0ZWQgdXBzaWRlIGRvd25cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMudmlkZW9TdHJlYW1zW10ucm90YXRpb24gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcm90YXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHZhbHVlIHRoYXQgdW5pcXVlbHkgaWRlbnRpZmllcyBhIHZlbmRvclxuICAgKiBOb3RlOiBUeXBpY2FsbHksIHRoZSB2YWx1ZSBpcyBhIGZvdXItbGV0dGVyIHZlbmRvciBjb2RlXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdLnZlbmRvciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2ZW5kb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VMb2NhbGl6YXRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBsYW5ndWFnZSBvZiB0aGUgbG9jYWxpemVkIHRleHQgYXNzb2NpYXRlZCB3aXRoIHRoZSBrZXkgdmFsdWVcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbG9jYWxpemF0aW9ucy4oa2V5KSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUxvY2FsaXphdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUxvY2FsaXphdGlvbiB7XG4gIC8qKlxuICAgKiBUaGUgbG9jYWxpemVkIHZpZGVvIHRpdGxlXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2xvY2FsaXphdGlvbnMuKGtleSkudGl0bGUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbG9jYWxpemVkIHZpZGVvIGRlc2NyaXB0aW9uXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2xvY2FsaXphdGlvbnMuKGtleSkuZGVzY3JpcHRpb24gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VUaHVtYm5haWxzIHtcbiAgLyoqXG4gICAqIFZhbGlkIGtleSB2YWx1ZXM6XG4gICAqIC0gYGRlZmF1bHRgOiBUaGUgZGVmYXVsdCB0aHVtYm5haWwgaW1hZ2VcbiAgICogKERlZmF1bHQgc2l6ZSBvZiB2aWRlbyB0aHVtYm5haWw6IDEyMHB4IHdpZGUsIDkwcHggdGFsbDsgY2hhbm5lbCB0aHVtYm5haWw6IDg4cHggd2lkZSwgODhweCB0YWxsKVxuICAgKiAtIGBtZWRpdW1gOiBBIGhpZ2hlciByZXNvbHV0aW9uIHZlcnNpb24gb2YgdGhlIHRodW1ibmFpbCB0aGFuIHRoZSBgZGVmYXVsdGAgcmVzb2x1dGlvbiBpbWFnZVxuICAgKiAoRGVmYXVsdCBzaXplIG9mIHZpZGVvIHRodW1ibmFpbDogMzIwcHggd2lkZSwgMTgwcHggdGFsbDsgY2hhbm5lbCB0aHVtYm5haWw6IDI0MHB4IHdpZGUsIDI0MHB4IHRhbGwpXG4gICAqIC0gYGhpZ2hgOiBBIGhpZ2hlciByZXNvbHV0aW9uIHZlcnNpb24gb2YgdGhlIHRodW1ibmFpbCB0aGFuIHRoZSBgbWVkaXVtYCByZXNvbHV0aW9uIGltYWdlXG4gICAqIChEZWZhdWx0IHNpemUgb2YgdmlkZW8gdGh1bWJuYWlsOiA0ODBweCB3aWRlLCAzNjBweCB0YWxsOyBjaGFubmVsIHRodW1ibmFpbDogODAwcHggd2lkZSwgODAwcHggdGFsbClcbiAgICogLSBgc3RhbmRhcmRgOiBBIGhpZ2hlciByZXNvbHV0aW9uIHZlcnNpb24gb2YgdGhlIHRodW1ibmFpbCB0aGFuIHRoZSBgaGlnaGAgcmVzb2x1dGlvbiBpbWFnZVxuICAgKiAoRGVmYXVsdCBzaXplIG9mIHZpZGVvIHRodW1ibmFpbDogNjQwcHggd2lkZSwgNDgwcHggdGFsbClcbiAgICogLSBgbWF4cmVzYDogVGhlIGhpZ2hlc3QgcmVzb2x1dGlvbiB2ZXJzaW9uIG9mIHRoZSB0aHVtYm5haWxcbiAgICogKERlZmF1bHQgc2l6ZSBvZiB2aWRlbyB0aHVtYm5haWw6IDEyODBweCB3aWRlLCA3MjBweCB0YWxsKVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LnRodW1ibmFpbHMuKGtleSkgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VUaHVtYm5haWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VUaHVtYm5haWwge1xuICAvKipcbiAgICogVGhlIFVSTCBvZiB0aGUgdGh1bWJuYWlsXG4gICAqL1xuICB1cmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIHRodW1ibmFpbFxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSB0aHVtYm5haWxcbiAgICovXG4gIGhlaWdodD86IG51bWJlcjtcbn1cbi8qKlxuICogQSB2aWRlbyByZXNvdXJjZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlIHtcbiAgLyoqXG4gICAqIElkZW50aWZpZXMgdGhlIHJlc3VsdCdzIHR5cGUuXG4gICAqIChOb3RlOiBUaGlzIHZhbHVlIHNob3VsZCBiZSBzZXQgdG8gYHlvdXR1YmUjdmlkZW9gKVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNraW5kIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGtpbmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgRXRhZyBvZiB0aGlzIHJlc291cmNlLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNldGFnIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGV0YWc/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgSUQgdXNlZCBieSBZb3VUdWJlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoZSB2aWRlby5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjaWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDb250YWlucyBiYXNpYyBkZXRhaWxzIGFib3V0IHRoZSB2aWRlbyAoZS5nLiB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5KVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0IGZvciBtb3JlIGluZm9cbiAgICovXG4gIHNuaXBwZXQ/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIGRhdGUgYW5kIHRpbWUgdGhhdCB0aGUgdmlkZW8gd2FzIHB1Ymxpc2hlZFxuICAgICAqIE5vdGU6IFRoaXMgdGltZSBjYW4gYmUgZGlmZmVyZW50IHRoYW4gdGhlIHRpbWUgdGhhdCB0aGUgdmlkZW8gd2FzIHVwbG9hZGVkXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LnB1Ymxpc2hlZEF0IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwdWJsaXNoZWRBdD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCBieSBZb3VUdWJlIHRvIGlkZW50aWZ5IHRoZSBjaGFubmVsIHRoYXQgdGhlIHZpZGVvIHdhcyB1cGxvYWRlZCB0b1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5jaGFubmVsSWQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNoYW5uZWxJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdmlkZW8ncyB0aXRsZVxuICAgICAqIE5vdGU6IFRoaXMgdmFsdWUgaGFzIGEgbWF4aW11bSBsZW5ndGggb2YgMTAwIGNoYXJhY3RlcnMgYW5kIG1heSBjb250YWluIGFsbCB2YWxpZFxuICAgICAqIFVURi04IGNoYXJhY3RlcnMgZXhjZXB0IGA8YCBhbmQgYD5gLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC50aXRsZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHZpZGVvJ3MgZGVzY3JpcHRpb25cbiAgICAgKiBOb3RlOiBUaGlzIHZhbHVlIGhhcyBhIG1heGltdW0gbGVuZ3RoIG9mIDUwMDAgY2hhcmFjdGVycyBhbmQgbWF5IGNvbnRhaW4gYWxsIHZhbGlkXG4gICAgICogVVRGLTggY2hhcmFjdGVycyBleGNlcHQgYDxgIGFuZCBgPmAuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmRlc2NyaXB0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiB0aHVtYm5haWwgaW1hZ2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQudGh1bWJuYWlscyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdGh1bWJuYWlscz86IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVGh1bWJuYWlscztcbiAgICAvKipcbiAgICAgKiBUaGUgY2hhbm5lbCB0aXRsZSBvZiB0aGUgY2hhbm5lbCB0aGF0IHRoZSB2aWRlbyBiZWxvbmdzIHRvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmNoYW5uZWxUaXRsZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY2hhbm5lbFRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGtleXdvcmQgdGFncyBhc3NvY2lhdGVkIHdpdGggdGhlIHZpZGVvXG4gICAgICogTm90ZTogVGFncyBjYW4gY29udGFpbiBzcGFjZXMuXG4gICAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSdzIHZhbHVlIGhhcyBhIG1heGltdW0gbGVuZ3RoIG9mIDUwMCBjaGFyYWN0ZXJzLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC50YWdzW10gZm9yIG1vcmUgaW5mby5cbiAgICAgKi9cbiAgICB0YWdzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogVGhlIFlvdVR1YmUgdmlkZW8gY2F0ZWdvcnkgYXNzb2NpYXRlZCB3aXRoIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5jYXRlZ29yeUlkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjYXRlZ29yeUlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiB0aGUgdmlkZW8gaXMgYW4gdXBjb21pbmcvY3VycmVudGx5IGxpdmUgYnJvYWRjYXN0XG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGxpdmVgXG4gICAgICogLSBgbm9uZWBcbiAgICAgKiAtIGB1cGNvbWluZ2BcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQubGl2ZUJyb2FkY2FzdENvbnRlbnQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGxpdmVCcm9hZGNhc3RDb250ZW50Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBsYW5ndWFnZSBvZiB0aGUgdGV4dCBpbiB0aGUgcmVzb3VyY2UncyBgc25pcHBldC50aXRsZWAgYW5kIGBzbmlwcGV0LmRlc2NyaXB0aW9uYCBwcm9wZXJ0aWVzXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmRlZmF1bHRMYW5ndWFnZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZGVmYXVsdExhbmd1YWdlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGVpdGhlciBhIGxvY2FsaXplZCB0aXRsZSBhbmQgZGVzY3JpcHRpb24gZm9yIHRoZSB2aWRlbyBvciB0aGUgdGl0bGUgaW4gdGhlIGRlZmF1bHRcbiAgICAgKiBsYW5ndWFnZSBmb3IgdGhlIHZpZGVvJ3MgbWV0YWRhdGFcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQubG9jYWxpemVkIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBsb2NhbGl6ZWQ/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBsb2NhbGl6ZWQgdmlkZW8gdGl0bGVcbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmxvY2FsaXplZC50aXRsZSBmb3IgbW9yZSBpbmZvXG4gICAgICAgKi9cbiAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbG9jYWxpemVkIGRlc2NyaXB0aW9uXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5sb2NhbGl6ZWQuZGVzY3JpcHRpb24gZm9yIG1vcmUgaW5mb1xuICAgICAgICovXG4gICAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgbGFuZ3VhZ2Ugc3Bva2VuIGluIHRoZSB2aWRlbydzIGRlZmF1bHQgYXVkaW8gdHJhY2tcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQuZGVmYXVsdEF1ZGlvTGFuZ3VhZ2UgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGRlZmF1bHRBdWRpb0xhbmd1YWdlPzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgaW5mbyBhYm91dCB0aGUgdmlkZW8gY29udGVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBjb250ZW50RGV0YWlscz86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSB2aWRlbyBpbiBhbiBJU08gODYwMSBkdXJhdGlvblxuICAgICAqXG4gICAgICogU2VlIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLmR1cmF0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkdXJhdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gaXMgYXZhaWxhYmxlIGluIDJEIG9yIDNEXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5kaW1lbnNpb24gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGRpbWVuc2lvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gaXMgYXZhaWxhYmxlIGluIGhpZ2ggZGVmaW5pdGlvbiBvciBvbmx5IGluIHN0YW5kYXJkIGRlZmluaXRpb25cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgaGRgXG4gICAgICogLSBgc2RgXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5kZWZpbml0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkZWZpbml0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGNhcHRpb25zIGFyZSBhdmFpbGFibGUgZm9yIHRoZSB2aWRlb1xuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBmYWxzZWBcbiAgICAgKiAtIGB0cnVlYFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMuY2FwdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY2FwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gcmVwcmVzZW50cyBsaWNlbnNlZCBjb250ZW50LCB3aGljaCBtZWFucyB0aGF0IHRoZSBjb250ZW50XG4gICAgICogd2FzIHVwbG9hZGVkIHRvIGEgY2hhbm5lbCBsaW5rZWQgdG8gYSBZb3VUdWJlIGNvbnRlbnQgcGFydG5lciBhbmQgdGhlbiBjbGFpbWVkIGJ5IHRoYXRcbiAgICAgKiBwYXJ0bmVyLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMubGljZW5zZWRDb250ZW50IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBsaWNlbnNlZENvbnRlbnQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGluZm8gYWJvdXQgdGhlIGNvdW50cmllcyB3aGVyZSBhIHZpZGVvIGlzL2lzIG5vdCB2aWV3YWJsZS5cbiAgICAgKiBOb3RlOiBUaGlzIG9iamVjdCB3aWxsIGVpdGhlciBoYXZlIHRoZSBgYWxsb3dlZGAgcHJvcGVydHkgb3IgdGhlIGBibG9ja2VkYCBwcm9wZXJ0eVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMucmVnaW9uUmVzdHJpY3Rpb25cbiAgICAgKiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcmVnaW9uUmVzdHJpY3Rpb24/OiB7XG4gICAgICAvKipcbiAgICAgICAqIEEgbGlzdCBvZiByZWdpb24gY29kZXMgdGhhdCBpZGVudGlmeSBjb3VudHJpZXMgd2hlcmUgdGhlIHZpZGVvIGlzIHZpZXdhYmxlIGluXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMucmVnaW9uUmVzdHJpY3Rpb24uYWxsb3dlZFtdXG4gICAgICAgKiBmb3IgbW9yZSBpbmZvXG4gICAgICAgKi9cbiAgICAgIGFsbG93ZWQ/OiBzdHJpbmdbXTtcbiAgICAgIC8qKlxuICAgICAgICogQSBsaXN0IG9mIHJlZ2lvbiBjb2RlcyB0aGF0IGlkZW50aWZ5IGNvdW50cmllcyB3aGVyZSB0aGUgdmlkZW8gaXMgYmxvY2tlZFxuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLnJlZ2lvblJlc3RyaWN0aW9uLmJsb2NrZWRbXVxuICAgICAgICogZm9yIG1vcmUgaW5mb1xuICAgICAgICovXG4gICAgICBibG9ja2VkPzogc3RyaW5nW107XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHJhdGluZyB0aGF0IHRoZSB2aWRlbyByZWNlaXZlZCB1bmRlciB2YXJpb3VzIHJhdGluZyBzY2hlbWVzXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5jb250ZW50UmF0aW5nIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjb250ZW50UmF0aW5nPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5jb250ZW50UmF0aW5nIGZvclxuICAgICAgICogYWxsIGF2YWlsYWJsZSByYXRpbmdzXG4gICAgICAgKi9cbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBwcm9qZWN0aW9uIGZvcm1hdCBvZiB0aGUgdmlkZW9cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgMzYwYFxuICAgICAqIC0gYHJlY3Rhbmd1bGFyYFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMucHJvamVjdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJvamVjdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gdXBsb2FkZXIgaGFzIGFkZGVkIGEgY3VzdG9tIHRodW1ibmFpbCBpbWFnZSBmb3IgdGhlIHZpZGVvXG4gICAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IHZpc2libGUgdG8gdGhlIHZpZGVvIHVwbG9hZGVyXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5oYXNDdXN0b21UaHVtYm5haWwgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGhhc0N1c3RvbVRodW1ibmFpbD86IGJvb2xlYW47XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBpbmZvIGFib3V0IHRoZSB2aWRlbydzIHVwbG9hZGluZywgcHJvY2Vzc2luZyBhbmQgcHJpdmFjeSBzdGF0dXNlc1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgc3RhdHVzPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0dXMgb2YgdGhlIHVwbG9hZGVkIHZpZGVvXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGRlbGV0ZWRgXG4gICAgICogLSBgZmFpbGVkYFxuICAgICAqIC0gYHByb2Nlc3NlZGBcbiAgICAgKiAtIGByZWplY3RlZGBcbiAgICAgKiAtIGB1cGxvYWRlZGBcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXR1cy51cGxvYWRTdGF0dXMgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHVwbG9hZFN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGlzIHZhbHVlIGV4cGxhaW5zIHdoeSBhIHZpZGVvIGZhaWxlZCB0byB1cGxvYWRcbiAgICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgcHJlc2VudCBpZiB0aGUgYHVwbG9hZFN0YXR1c2AgcHJvcGVydHkgaW5kaWNhdGVzIHRoYXQgdGhlIHVwbG9hZFxuICAgICAqIGZhaWxlZC5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXR1cy5mYWlsdXJlUmVhc29uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBmYWlsdXJlUmVhc29uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoaXMgdmFsdWUgZXhwbGFpbnMgd2h5IFlvdVR1YmUgcmVqZWN0ZWQgdGhlIHZpZGVvXG4gICAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IHByZXNlbnQgaWYgdGhlIGB1cGxvYWRTdGF0dXNgIHByb3BlcnR5IGluZGljYXRlcyB0aGF0IHRoZSB1cGxvYWRcbiAgICAgKiB3YXMgcmVqZWN0ZWQuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMucmVqZWN0aW9uUmVhc29uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICByZWplY3Rpb25SZWFzb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHZpZGVvJ3MgcHJpdmFjeSBzdGF0dXNcbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgcHJpdmF0ZWBcbiAgICAgKiAtIGBwdWJsaWNgXG4gICAgICogLSBgdW5saXN0ZWRgXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMucHJpdmFjeVN0YXR1cyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJpdmFjeVN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB0aGUgdmlkZW8gaXMgc2NoZWR1bGVkIHRvIHB1Ymxpc2hcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXR1cy5wdWJsaXNoQXQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHB1Ymxpc2hBdD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdmlkZW8ncyBsaWNlbnNlXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGNyZWF0aXZlQ29tbW9uYFxuICAgICAqIC0gYHlvdXR1YmVgXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMubGljZW5zZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbGljZW5zZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmlkZW8gY2FuIGJlIGVtYmVkZGFibGUgb24gYW5vdGhlciB3ZWJzaXRlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMuZW1iZWRkYWJsZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZW1iZWRkYWJsZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGV4dGVuZGVkIHZpZGVvIHN0YXRpc3RpY3Mgb24gdGhlIHZpZGVvJ3Mgd2F0Y2ggcGFnZSBhcmUgcHVibGljbHlcbiAgICAgKiBhY2Nlc3NpYmxlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0dXMucHVibGljU3RhdHNWaWV3YWJsZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHVibGljU3RhdHNWaWV3YWJsZT86IGJvb2xlYW47XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBzdGF0aXN0aWNzIGFib3V0IHRoZSB2aWRlb1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0aXN0aWNzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHN0YXRpc3RpY3M/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgdmlkZW8gaGFzIGJlZW4gdmlld2VkXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0aXN0aWNzLnZpZXdDb3VudCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdmlld0NvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgdXNlcnMgd2hvIGhhdmUgaW5kaWNhdGVkIHRoYXQgdGhleSBoYXZlIGxpa2VkIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdGlzdGljcy5saWtlQ291bnQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGxpa2VDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHVzZXJzIHdobyBoYXZlIGluZGljYXRlZCB0aGF0IHRoZXkgaGF2ZSBkaXNsaWtlZCB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXRpc3RpY3MuZGlzbGlrZUNvdW50IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkaXNsaWtlQ291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdGlzdGljcy5mYXZvcml0ZUNvdW50IGZvciBtb3JlIGluZm9cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDI4IEF1Z3VzdCAyMDE1LCB0aGUgcHJvcGVydHkncyB2YWx1ZSBpcyBhbHdheXMgc2V0IHRvIDBcbiAgICAgKi9cbiAgICBmYXZvcml0ZUNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgY29tbWVudHMgb24gdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0aXN0aWNzLmNvbW1lbnRDb3VudCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY29tbWVudENvdW50PzogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgaW5mb3JtYXRpb24gdXNlZCB0byBwbGF5IHRoZSB2aWRlbyBpbiBhbiBlbWJlZGRlZCBwbGF5ZXJcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcGxheWVyIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHBsYXllcj86IHtcbiAgICAvKipcbiAgICAgKiBBbiBgPGlmcmFtZT5gIHRhZyB0aGF0IGVtYmVkcyBhIHBsYXllciB0aGF0IHBsYXlzIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcGxheWVyLmVtYmVkSHRtbCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZW1iZWRIdG1sPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHBsYXllciByZXR1cm5lZCBpbiB0aGUgYHBsYXllci5lbWJlZEh0bWxgIHByb3BlcnR5XG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwbGF5ZXIuZW1iZWRIZWlnaHQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGVtYmVkSGVpZ2h0PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgcGxheWVyIHJldHVybmVkIGluIHRoZSBgcGxheWVyLmVtYmVkSHRtbGAgcHJvcGVydHlcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3BsYXllci5lbWJlZFdpZHRoIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBlbWJlZFdpZHRoPzogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdG9waWNzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjdG9waWNEZXRhaWxzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHRvcGljRGV0YWlscz86IHtcbiAgICAvKipcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyN0b3BpY0RldGFpbHMudG9waWNJZHNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMTAgTm92ZW1iZXIgMjAxNiwgdGhlIEFQSSBubyBsb25nZXIgcmV0dXJucyB2YWx1ZXMgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICogYW5kIGFueSB0b3BpY3MgYXNzb2NpYXRlZCB3aXRoIGEgdmlkZW8gYXJlIG5vdyByZXR1cm5lZCBieSB0aGVcbiAgICAgKiBgdG9waWNEZXRhaWxzLnJlbGV2YW50VG9waWNJZHNbXWAgcHJvcGVydHkgdmFsdWUuXG4gICAgICovXG4gICAgdG9waWNJZHM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgdG9waWMgSURzIHRoYXQgYXJlIHJlbGV2YW50IHRvIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjdG9waWNEZXRhaWxzLnJlbGV2YW50VG9waWNJZHNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgMTAgTm92ZW1iZXIgMjAxNiBhbmQgaGFzIGJlZW4gdW5zdXBwb3J0ZWQgc2luY2VcbiAgICAgKiAxMCBOb3ZlbWJlciAyMDE3XG4gICAgICovXG4gICAgcmVsZXZhbnRUb3BpY0lkcz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBXaWtpcGVkaWEgVVJMcyB0aGF0IHByb3ZpZGUgYSBoaWdoLWxldmVsIGRlc2NyaXB0aW9uIG9mIHRoZSB2aWRlbydzIGNvbnRlbnRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3RvcGljRGV0YWlscy50b3BpY0NhdGVnb3JpZXNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdG9waWNDYXRlZ29yaWVzPzogc3RyaW5nW107XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbG9jYXRpb24sIGRhdGUgYW5kIGFkZHJlc3Mgd2hlcmUgdGhlIHZpZGVvIHdhcyByZWNvcmRlZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNyZWNvcmRpbmdEZXRhaWxzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHJlY29yZGluZ0RldGFpbHM/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHRleHQgZGVzY3JpcHRpb24gb2YgdGhlIGxvY2F0aW9uIHdoZXJlIHRoZSB2aWRlbyB3YXMgcmVjb3JkZWRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3JlY29yZGluZ0RldGFpbHMubG9jYXRpb25EZXNjcmlwdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxIEp1bmUgMjAxNywgdGhpcyBwcm9wZXJ0eSBoYXMgYmVlbiBkZXByZWNhdGVkLlxuICAgICAqL1xuICAgIGxvY2F0aW9uRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGdlb2xvY2F0aW9uIGluZm9ybWF0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3RvcGljRGV0YWlscy5sb2NhdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbG9jYXRpb24/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBsYXRpdHVkZSBpbiBkZWdyZWVzXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjdG9waWNEZXRhaWxzLmxvY2F0aW9uLmxhdGl0dWRlIGZvciBtb3JlIGluZm9cbiAgICAgICAqXG4gICAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxIEp1bmUgMjAxNywgdGhpcyBwcm9wZXJ0eSBoYXMgYmVlbiBkZXByZWNhdGVkXG4gICAgICAgKi9cbiAgICAgIGxhdGl0dWRlPzogbnVtYmVyO1xuICAgICAgLyoqXG4gICAgICAgKiBMb25naXR1ZGUgaW4gZGVncmVlc1xuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3RvcGljRGV0YWlscy5sb2NhdGlvbi5sb25naXR1ZGUgZm9yIG1vcmUgaW5mb1xuICAgICAgICpcbiAgICAgICAqIEBkZXByZWNhdGVkIFRoaXMgcHJvcGVydHkgaGFzIGJlZW4gZGVwcmVjYXRlZCBzaW5jZSAxIEp1bmUgMjAxN1xuICAgICAgICovXG4gICAgICBsb25naXR1ZGU/OiBudW1iZXI7XG4gICAgICAvKipcbiAgICAgICAqIEFsdGl0dWRlIGFib3ZlIHRoZSByZWZlcmVuY2UgZWxsaXBzb2lkLCBpbiBtZXRlcnMuXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjdG9waWNEZXRhaWxzLmxvY2F0aW9uLmFsdGl0dWRlIGZvciBtb3JlIGluZm9cbiAgICAgICAqXG4gICAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIHByb3BlcnR5IGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgOSBqdWx5IDIwMThcbiAgICAgICAqL1xuICAgICAgYWx0aXR1ZGU/OiBudW1iZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHZpZGVvIHdhcyByZWNvcmRlZCBpbiBJU08gODYwMSBmb3JtYXRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3JlY29yZGluZ0RldGFpbHMucmVjb3JkaW5nRGF0ZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcmVjb3JkaW5nRGF0ZT86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIGluZm8gYWJvdXQgdGhlIHZpZGVvIGZpbGUgdGhhdCB3YXMgdXBsb2FkZWQgdG8gWW91VHViZSAoc3VjaCBhcyB0aGUgZmlsZSdzIHJlc29sdXRpb24sXG4gICAqIGR1cmF0aW9uLCBhdWRpbywgZXRjLilcbiAgICogTm90ZTogVGhpcyBkYXRhIGNhbiBvbmx5IGJlIHJldHJpZXZlZCBieSB0aGUgdmlkZW8gb3duZXJcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgZmlsZURldGFpbHM/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHVwbG9hZGVkIGZpbGUncyBuYW1lXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5maWxlTmFtZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZmlsZU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHVwbG9hZGVkIGZpbGUncyBzaXplIGluIGJ5dGVzXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5maWxlU2l6ZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZmlsZVNpemU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHVwbG9hZGVkIGZpbGUncyB0eXBlIGFzIGRldGVjdGVkIGJ5IFlvdVR1YmUncyB2aWRlbyBwcm9jZXNzaW5nIGVuZ2luZVxuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBhcmNoaXZlYDogSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgaXMgYW4gYXJjaGl2ZSBmaWxlIChlLmcuIGB6aXBgIGZpbGVzKVxuICAgICAqIC0gYGF1ZGlvYDogSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgaXMgYW4gYXVkaW8gZmlsZSAoZS5nLiBgbXAzYCBmaWxlcylcbiAgICAgKiAtIGBkb2N1bWVudGA6IEluZGljYXRlcyB0aGF0IHRoZSBmaWxlIGlzIGEgZG9jdW1lbnQvdGV4dCBmaWxlIChlLmcuIE1TIFdvcmQgZG9jdW1lbnRzKVxuICAgICAqIC0gYGltYWdlYDogSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgaXMgYW4gaW1hZ2UgZmlsZSAoZS5nLiBgLmpwZWdgIGZpbGVzKVxuICAgICAqIC0gYG90aGVyYDogSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgaXMgYW5vdGhlciBub24tdmlkZW8gZmlsZSB0eXBlXG4gICAgICogLSBgcHJvamVjdGA6IEluZGljYXRlcyB0aGF0IHRoZSBmaWxlIGlzIGEgdmlkZW8gcHJvamVjdCBmaWxlIChlLmcuIGEgTWljcm9zb2Z0IFdpbmRvd3MgTW92aWUgTWFrZXIgcHJvamVjdClcbiAgICAgKiAtIGB2aWRlb2A6IEluZGljYXRlcyB0aGF0IHRoZSBmaWxlIGlzIGEga25vd24gdmlkZW8gZmlsZSB0eXBlIChlLmcuIGBtcDRgIGZpbGVzKVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuZmlsZVR5cGUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGZpbGVUeXBlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB1cGxvYWRlZCB2aWRlbyBmaWxlJ3MgY29udGFpbmVyIGZvcm1hdFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuY29udGFpbmVyIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjb250YWluZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgdmlkZW8gc3RyZWFtcyBjb250YWluZWQgaW4gdGhlIHVwbG9hZGVkIHZpZGVvIGZpbGVcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB2aWRlb1N0cmVhbXM/OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVZpZGVvU3RyZWFtW107XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYXVkaW8gc3RyZWFtcyBjb250YWluZWQgaW4gdGhlIHVwbG9hZGVkIHZpZGVvIGZpbGVcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmF1ZGlvU3RyZWFtc1tdIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBhdWRpb1N0cmVhbXM/OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUF1ZGlvU3RyZWFtW107XG4gICAgLyoqXG4gICAgICogVGhlIGxlbmd0aCBvZiB0aGUgdXBsb2FkZWQgdmlkZW8gaW4gbWlsbGlzZWNvbmRzXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5kdXJhdGlvbk1zIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkdXJhdGlvbk1zPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSB1cGxvYWRlZCB2aWRlbyBmaWxlJ3MgY29tYmluZWQgKGF1ZGlvICYgdmlkZW8pIGJpdHJhdGUgaW4gYml0cyBwZXIgc2Vjb25kXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5iaXRyYXRlQnBzIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBiaXRyYXRlQnBzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHVwbG9hZGVkIHZpZGVvIGZpbGUgd2FzIGNyZWF0ZWQgaW4gSVNPIDg2MDEgZm9ybWF0XG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5jcmVhdGlvblRpbWUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNyZWF0aW9uVGltZT86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIGluZm8gYWJvdXQgWW91VHViZSdzIHByb2dyZXNzIGluIHByb2Nlc3NpbmcgdGhlIHVwbG9hZGVkIHZpZGVvIGZpbGVcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcHJvY2Vzc2luZ0RldGFpbHM/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHZpZGVvJ3MgcHJvY2Vzc2luZyBzdGF0dXNcbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgZmFpbGVkYDogSW5kaWNhdGVzIHRoYXQgdGhlIHZpZGVvIHByb2Nlc3NpbmcgaGFzIGZhaWxlZFxuICAgICAqIC0gYHByb2Nlc3NpbmdgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gaXMgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZFxuICAgICAqIC0gYHN1Y2NlZWRlZGA6IEluZGljYXRlcyB0aGF0IHRoZSB2aWRlbyBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcHJvY2Vlc2VkXG4gICAgICogLSBgdGVybWluYXRlZGA6IEluZGljYXRlcyB0aGF0IHByb2Nlc3NpbmcgaW5mb3JtYXRpb24gaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMucHJvY2Vzc2luZ1N0YXR1cyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJvY2Vzc2luZ1N0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBDb250YWlucyBpbmZvIGFib3V0IHRoZSBwcm9ncmVzcyBZb3VUdWJlIGhhcyBtYWRlIGluIHByb2Nlc3NpbmcgdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nUHJvZ3Jlc3MgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByb2Nlc3NpbmdQcm9ncmVzcz86IHtcbiAgICAgIC8qKlxuICAgICAgICogQW4gZXN0aW1hdGUgb2YgdGhlIHRvdGFsIG51bWJlciBvZiBwYXJ0cyB0aGF0IG5lZWQgdG8gYmUgcHJvY2Vzc2VkIGZvciB0aGUgdmlkZW9cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nUHJvZ3Jlc3MucGFydHNUb3RhbCBmb3IgbW9yZSBpbmZvXG4gICAgICAgKi9cbiAgICAgIHBhcnRzVG90YWw/OiBudW1iZXI7XG4gICAgICAvKipcbiAgICAgICAqIFRiZSBudW1iZXIgb2YgcGFydHMgb2YgdGhlIHZpZGVvIHRoYXQgWW91VHViZSBoYXMgYWxyZWFkeSBwcm9jZXNzZWRcbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nUHJvZ3Jlc3MucGFydHNQcm9jZXNzZWQgZm9yIG1vcmUgaW5mb1xuICAgICAgICovXG4gICAgICBwYXJ0c1Byb2Nlc3NlZD86IG51bWJlcjtcbiAgICAgIC8qKlxuICAgICAgICogQW4gZXN0aW1hdGUgb2YgdGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgWW91VHViZSBuZWVkcyB0byBmaW5pc2ggcHJvY2Vzc2luZyB0aGUgdmlkZW9cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nUHJvZ3Jlc3MudGltZUxlZnRNcyBmb3IgbW9yZSBpbmZvXG4gICAgICAgKi9cbiAgICAgIHRpbWVMZWZ0TXM/OiBudW1iZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVhc29uIHRoYXQgWW91VHViZSBmYWlsZWQgdG8gcHJvY2VzcyB0aGUgdmlkZW9cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgb3RoZXJgOiBJbmRpY2F0ZXMgdGhhdCBzb21lIG90aGVyIHByb2Nlc3NpbmcgY29tcG9uZW50IGhhcyBmYWlsZWRcbiAgICAgKiAtIGBzdHJlYW1pbmdGYWlsZWRgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gY291bGQgbm90IGJlIHNlbnQgdG8gc3RyZWFtZXJzXG4gICAgICogLSBgdHJhbnNjb2RlRmFpbGVkYDogSW5kaWNhdGVzIHRoYXQgY29udGVudCB0cmFuc2NvZGluZyBoYXMgZmFpbGVkXG4gICAgICogLSBgdXBsb2FkRmFpbGVkYDogSW5kaWNhdGVzIHRoYXQgZmlsZSBkZWxpdmVyeSBoYXMgZmFpbGVkXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nRmFpbHVyZVJlYXNvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJvY2Vzc2luZ0ZhaWx1cmVSZWFzb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgZmlsZSBkZXRhaWxzIGFyZSBhdmFpbGFibGUgZm9yIHRoZSB1cGxvYWRlZCB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMuZmlsZURldGFpbHNBdmFpbGFiaWxpdHkgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGZpbGVEZXRhaWxzQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB2aWRlbyBwcm9jZXNzaW5nIGVuZ2luZSBoYXMgZ2VuZXJhdGVkIHN1Z2dlc3Rpb25zIHRoYXQgbWlnaHQgaW1wcm92ZVxuICAgICAqIFlvdVR1YmUncyBhYmlsaXR5IHRvIHByb2Nlc3MgdGhlIHZpZGVvLCB3YXJuaW5ncyB0aGF0IGV4cGxhaW4gdmlkZW8gcHJvY2Vzc2luZyBwcm9ibGVtcyxcbiAgICAgKiBvciBlcnJvcnMgdGhhdCBjYXVzZSB2aWRlbyBwcm9jZXNzaW5nIHByb2JsZW1zXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nSXNzdWVzQXZhaWxhYmlsaXR5IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwcm9jZXNzaW5nSXNzdWVzQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGtleXdvcmQgKHRhZykgc3VnZ2VzdGlvbnMgYXJlIGF2YWlsYWJsZSBmb3IgdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy50YWdTdWdnZXN0aW9uc0F2YWlsYWJpbGl0eSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdGFnU3VnZ2VzdGlvbnNBdmFpbGFiaWxpdHk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdmlkZW8gZWRpdGluZyBzdWdnZXN0aW9ucywgd2hpY2ggbWlnaHQgaW1wcm92ZSB2aWRlbyBxdWFsaXR5IG9yIHRoZVxuICAgICAqIHBsYXliYWNrIGV4cGVyaWVuY2UsIGFyZSBhdmFpbGFibGUgZm9yIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcHJvY2Vzc2luZ0RldGFpbHMuZWRpdG9yU3VnZ2VzdGlvbnNBdmFpbGFiaWxpdHkgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGVkaXRvclN1Z2dlc3Rpb25zQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRodW1ibmFpbCBpbWFnZXMgaGF2ZSBiZWVuIGdlbmVyYXRlZCBmb3IgdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy50aHVtYm5haWxzQXZhaWxhYmlsaXR5IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0aHVtYm5haWxzQXZhaWxhYmlsaXR5Pzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgc3VnZ2VzdGlvbnMgdGhhdCBpZGVudGlmeSBvcHBvcnR1bml0aWVzIHRvIGltcHJvdmUgdGhlIHZpZGVvIHF1YWxpdHkgb3IgdGhlIG1ldGFkYXRhXG4gICAqIGZvciB0aGUgdXBsb2FkZWQgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3VnZ2VzdGlvbnMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgc3VnZ2VzdGlvbnM/OiB7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgZXJyb3JzIHRoYXQgd2lsbCBwcmV2ZW50IFlvdVR1YmUgZnJvbSBzdWNjZXNzZnVsbHkgcHJvY2Vzc2luZyB0aGUgdmlkZW9cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgYXJjaGl2ZUZpbGVgOiBBbiBhcmNoaXZlIGZpbGUgKGUuZy4gYSB6aXAgYXJjaGl2ZSlcbiAgICAgKiAtIGBhdWRpb0ZpbGVgOiBBbiBhdWRpbyBmaWxlIChlLmcuIGFuIG1wMyBmaWxlKVxuICAgICAqIC0gYGRvY0ZpbGVgOiBBIGRvY3VtZW50L3RleHQgZmlsZSAoZS5nLiBhIE1TIFdvcmQgZG9jdW1lbnQgZmlsZSlcbiAgICAgKiAtIGBpbWFnZUZpbGVgOiBBbiBpbWFnZSBmaWxlIChlLmcuIGEganBlZyBpbWFnZSlcbiAgICAgKiAtIGBub3RBVmlkZW9GaWxlYDogT3RoZXIgbm9uLXZpZGVvIGZpbGVcbiAgICAgKiAtIGBwcm9qZWN0RmlsZWA6IE1vdmllIHByb2plY3QgZmlsZSAoZS5nLiBhIE1pY3Jvc29mdCBXaW5kb3dzIE1vdmllIE1ha2VyIHByb2plY3QpXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdWdnZXN0aW9ucy5wcm9jZXNzaW5nRXJyb3JzW10gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByb2Nlc3NpbmdFcnJvcnM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiByZWFzb25zIHdoeSBZb3VUdWJlIG1heSBoYXZlIGRpZmZpY3VsdHkgdHJhbnNjb2RpbmcgdGhlIHVwbG9hZGVkIHZpZGVvIG9yIHRoYXRcbiAgICAgKiBtaWdodCByZXN1bHQgaW4gYW4gZXJyb25lb3VzIHRyYW5zY29kaW5nXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGhhc0VkaXRsaXN0YDogTm90ZSB0aGF0IGVkaXQgbGlzdHMgYXJlIGN1cnJlbnRseSB1bnN1cHBvcnRlZFxuICAgICAqIC0gYGluY29uc2lzdGVudFJlc29sdXRpb25gOiBDb25mbGljdGluZyBjb250YWluZXIgYW5kIHN0cmVhbSByZXNvbHV0aW9uc1xuICAgICAqIC0gYHByb2JsZW1hdGljQXVkaW9Db2RlY2A6IEFuIGF1ZGlvIGNvZGVjIHRoYXQgaXMga25vd24gdG8gY2F1c2UgcHJvYmxlbXMgd2FzIHVzZWRcbiAgICAgKiAtIGBwcm9ibGVtYXRpY1ZpZGVvQ29kZWNgOiBBIHZpZGVvIGNvZGVjIHRoYXQgaXMga25vd24gdG8gY2F1c2UgcHJvYmxlbXMgd2FzIHVzZWRcbiAgICAgKiAtIGB1bmtub3duQXVkaW9Db2RlY2A6IFVucmVjb2duaXplZCBhdWRpbyBjb2RlYywgdHJhbnNjb2RpbmcgaXMgbGlrZWx5IHRvIGZhaWxcbiAgICAgKiAtIGB1bmtub3duQ29udGFpbmVyYDogVW5yZWNvZ25pemVkIGZpbGUgZm9ybWF0LCB0cmFuc2NvZGluZyBpcyBsaWtlbHkgdG8gZmFpbFxuICAgICAqIC0gYHVua25vd25WaWRlb0NvZGVjYDogVW5yZWNvZ25pemVkIHZpZGVvIGNvZGVjLCB0cmFuc2NvZGluZyBpcyBsaWtlbHkgdG8gZmFpbFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3VnZ2VzdGlvbnMucHJvY2Vzc2luZ1dhcm5pbmdzW10gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByb2Nlc3NpbmdXYXJuaW5ncz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHN1Z2dlc3Rpb25zIHRoYXQgbWF5IGltcHJvdmUgWW91VHViZSdzIGFiaWxpdHkgdG8gcHJvY2VzcyB0aGUgdmlkZW9cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgbm9uU3RyZWFtYWJsZU1vdmA6IFRoZSBNUDQgZmlsZSBpcyBub3Qgc3RyZWFtYWJsZSwgd2hpY2ggd2lsbCBzbG93IGRvd24gdGhlIHByb2Nlc3NpbmdcbiAgICAgKiAtIGBzZW5kQmVzdFF1YWxpdHlWaWRlb2A6IFByb2JhYmx5IGEgYmV0dGVyIHF1YWxpdHkgb2YgdGhlIHZpZGVvIGV4aXN0c1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3VnZ2VzdGlvbnMucHJvY2Vzc2luZ0hpbnRzW10gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByb2Nlc3NpbmdIaW50cz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGtleXdvcmQgdGFncyB0aGF0IGNvdWxkIGJlIGFkZGVkIHRvIHRoZSB2aWRlbydzIG1ldGFkYXRhIHRvIGluY3JlYXNlIHRoZSBjaGFuY2VzXG4gICAgICogdGhhdCB1c2VycyB3aWxsIGZpbmQgeW91ciB2aWRlbyB3aGVuIHNlYXJjaGluZyBvciBicm93c2luZyBvbiBZb3VUdWJlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdWdnZXN0aW9ucy50YWdTdWdnZXN0aW9uc1tdIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0YWdTdWdnZXN0aW9ucz86IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlU3VnZ2VzdGlvblRhZ1N1Z2dlc3Rpb25bXTtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiB2aWRlbyBlZGl0aW5nIHN1Z2dlc3Rpb25zIHRoYXQgbWlnaHQgaW1wcm92ZSB0aGUgdmlkZW8gcXVhbGl0eS9wbGF5YmFja1xuICAgICAqIGV4cGVyaWVuY2Ugb2YgdGhlIHVwbG9hZGVkIHZpZGVvXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGF1ZGlvUXVpZXRBdWRpb1N3YXBgOiBUaGUgYXVkaW8gdHJhY2sgYXBwZWFycyBzaWxlbnQgYW5kIGNvdWxkIGJlIHN3YXBwZWQgd2l0aCBhIGJldHRlciBxdWFsaXR5IG9uZVxuICAgICAqIC0gYHZpZGVvQXV0b0xldmVsc2A6IFBpY3R1cmUgYnJpZ2h0bmVzcyBsZXZlbHMgc2VlbSBvZmYgYW5kIGNvdWxkIGJlIGNvcnJlY3RlZFxuICAgICAqIC0gYHZpZGVvQ3JvcGA6IE1hcmdpbnMgKG1hdHRlcykgZGV0ZWN0ZWQgYXJvdW5kIHRoZSBwaWN0dXJlIGNvdWxkIGJlIGNyb3BwZWRcbiAgICAgKiAtIGB2aWRlb1N0YWJpbGl6ZWA6IFRoZSB2aWRlbyBhcHBlYXJzIHNoYWt5IGFuZCBjb3VsZCBiZSBzdGFiaWxpemVkXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdWdnZXN0aW9ucy5wcm9jZXNzaW5nSGludHNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZWRpdG9yU3VnZ2VzdGlvbnM/OiBzdHJpbmdbXTtcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIG1ldGFkYXRhIGFib3V0IGEgbGl2ZSB2aWRlbyBicm9hZGNhc3RcbiAgICogTm90ZTogVGhpcyB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIHZpZGVvIGlzIGFuIHVwY29taW5nLCBsaXZlIG9yIGNvbXBsZXRlZCBsaXZlIGJyb2FkY2FzdFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsaXZlU3RyZWFtaW5nRGV0YWlscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBsaXZlU3RyZWFtaW5nRGV0YWlscz86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSB0aGF0IHRoZSBicm9hZGNhc3QgYWN0dWFsbHkgc3RhcnRlZCBpbiBJU08gODYwMSBmb3JtYXRcbiAgICAgKiBOb3RlOiBUaGlzIHZhbHVlIHdpbGwgbm90IGJlIGF2YWlsYWJsZSB1bnRpbCB0aGUgYnJvYWRjYXN0IGJlZ2luc1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbGl2ZVN0cmVhbWluZ0RldGFpbHMuYWN0dWFsU3RhcnRUaW1lIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBhY3R1YWxTdGFydFRpbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgdGhhdCB0aGUgYnJvYWRjYXN0IGFjdHVhbGx5IGVuZGVkIGluIElTTyA4NjAxIGZvcm1hdFxuICAgICAqIE5vdGU6IFRoaXMgdmFsdWUgd2lsbCBub3QgYmUgYXZhaWxhYmxlIHVudGlsIHRoZSBicm9hZGNhc3QgYmVnaW5zXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsaXZlU3RyZWFtaW5nRGV0YWlscy5hY3R1YWxFbmRUaW1lIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBhY3R1YWxFbmRUaW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHRoYXQgdGhlIGJyb2FkY2FzdCBpcyBzY2hlZHVsZWQgdG8gYmVnaW4gaW4gSVNPIDg2MDEgZm9ybWF0XG4gICAgICogTm90ZTogVGhpcyB2YWx1ZSB3aWxsIG5vdCBiZSBhdmFpbGFibGUgdW50aWwgdGhlIGJyb2FkY2FzdCBiZWdpbnNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2xpdmVTdHJlYW1pbmdEZXRhaWxzLnNjaGVkdWxlZFN0YXJ0VGltZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgc2NoZWR1bGVkU3RhcnRUaW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHRoYXQgdGhlIGJyb2FkY2FzdCBpcyBzY2hlZHVsZWQgdG8gZW5kIGluIElTTyA4NjAxIGZvcm1hdFxuICAgICAqIE5vdGU6IFRoaXMgdmFsdWUgd2lsbCBub3QgYmUgYXZhaWxhYmxlIHVudGlsIHRoZSBicm9hZGNhc3QgYmVnaW5zXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsaXZlU3RyZWFtaW5nRGV0YWlscy5zY2hlZHVsZWRFbmRUaW1lIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBzY2hlZHVsZWRFbmRUaW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2Ygdmlld2VycyBjdXJyZW50bHkgd2F0Y2hpbmcgdGhlIGJyb2FkY2FzdFxuICAgICAqIE5vdGU6IFRoaXMgcHJvcGVydHkgYW5kIGl0cyB2YWx1ZSB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIGJyb2FkY2FzdCBoYXMgY3VycmVudCB2aWV3ZXJzXG4gICAgICogYW5kIHRoZSBicm9hZGNhc3Qgb3duZXIgaGFzIG5vdCBoaWRkZW4gdGhlIHZpZXdjb3VudCBmb3IgdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsaXZlU3RyZWFtaW5nRGV0YWlscy5zY2hlZHVsZWRFbmRUaW1lIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjb25jdXJyZW50Vmlld2Vycz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgbGl2ZSBjaGF0IGF0dGFjaGVkIHRvIHRoaXMgdmlkZW9cbiAgICAgKiBOb3RlOiBUaGlzIGZpZWxkIGlzIGZpbGxlZCBvbmx5IGlmIHRoZSB2aWRlbyBpcyBhIGN1cnJlbnRseSBsaXZlIGJyb2FkY2FzdCB0aGF0IGhhcyBsaXZlIGNoYXRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2xpdmVTdHJlYW1pbmdEZXRhaWxzLmFjdGl2ZUxpdmVDaGF0SWQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGFjdGl2ZUxpdmVDaGF0SWQ/OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyB0cmFuc2xhdGlvbnMgb2YgdGhlIHZpZGVvJ3MgbWV0YWRhdGFcbiAgICovXG4gIGxvY2FsaXphdGlvbnM/OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUxvY2FsaXphdGlvbnM7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0luc2VydE9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljT3B0cyB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBZb3VUdWJlIHNob3VsZCBhdXRvbWF0aWNhbGx5IGVuaGFuY2UgdGhlIHZpZGVvJ3MgbGlnaHRpbmcgYW5kIGNvbG9yLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9pbnNlcnQjYXV0b0xldmVscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBhdXRvTGV2ZWxzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIFlvdVR1YmUgc2hvdWxkIHNlbmQgYSBub3RpZmljYXRpb24gYWJvdXQgdGhlIG5ldyB2aWRlbyB0byB1c2VycyB3aG9cbiAgICogc3Vic2NyaWJlIHRvIHRoZSB2aWRlbydzIGNoYW5uZWxcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvaW5zZXJ0I25vdGlmeVN1YnNjcmliZXJzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG5vdGlmeVN1YnNjcmliZXJzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIG9wdGlvbmFsLlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSB1c2VkIGluIGEgcHJvcGVybHkgYXV0aG9yaXplZCByZXF1ZXN0LlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBpbnRlbmRlZCBmb3IgWW91VHViZSBjb250ZW50IHBhcnRuZXJzLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9pbnNlcnQjb25CZWhhbGZPZkNvbnRlbnRPd25lciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBvbkJlaGFsZk9mQ29udGVudE93bmVyPzogc3RyaW5nO1xuICAvKipcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgb3B0aW9uYWwuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGNhbiBvbmx5IGJlIHVzZWQgaW4gYSBwcm9wZXJseSBhdXRob3JpemVkIHJlcXVlc3QuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2luc2VydCNvbkJlaGFsZk9mQ29udGVudE93bmVyQ2hhbm5lbCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBvbkJlaGFsZk9mQ29udGVudE93bmVyQ2hhbm5lbD86IHN0cmluZztcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIFlvdVR1YmUgc2hvdWxkIGFkanVzdCB0aGUgdmlkZW8gdG8gcmVtb3ZlIHNoYWt5IGNhbWVyYSBtb3Rpb25zXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2luc2VydCNzdGFiaWxpemUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgc3RhYmlsaXplPzogYm9vbGVhbjtcbn1cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZX0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtIGV4dGVuZHMgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2UgeyB9XG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHQgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2Uge1xuICAvKipcbiAgICogVGhlIHRva2VuIHRoYXQgY2FuIGJlIHBhc3NlZCB2aWEgdGhlIGBwYWdlVG9rZW5gIHBhcmFtZXRlciB0byByZXRyaWV2ZSB0aGUgbmV4dCBwYWdlXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjbmV4dFBhZ2VUb2tlbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBuZXh0UGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHRva2VuIHRoYXQgY2FuIGJlIHBhc3NlZCB2aWEgdGhlIGBwYWdlVG9rZW5gIHBhcmFtZXRlciB0byByZXRyaWV2ZSB0aGUgcHJldmlvdXMgcGFnZVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3ByZXZQYWdlVG9rZW4gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcHJldlBhZ2VUb2tlbj86IHN0cmluZztcbiAgLyoqXG4gICAqIENvbnRhaW5zIHBhZ2luZyBpbmZvIGZvciB0aGUgcmVzdWx0c1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3BhZ2VJbmZvIGZyb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwYWdlSW5mbz86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdG90YWwgbnVtYmVyIG9mIHJlc3VsdHNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjcGFnZUluZm8udG90YWxSZXN1bHRzIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0b3RhbFJlc3VsdHM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiByZXN1bHRzIGluY2x1ZGVkIHBlciBwYWdlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3BhZ2VJbmZvLnJlc3VsdHNQZXJQYWdlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICByZXN1bHRzUGVyUGFnZT86IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIEEgbGlzdCBvZiB2aWRlb3MgdGhhdCBtYXRjaCB0aGUgcmVxdWVzdCBjcml0ZXJpYVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I2l0ZW1zW10gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaXRlbXM/OiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVtdO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VBdWRpb1N0cmVhbX0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtQXVkaW9TdHJlYW0gZXh0ZW5kcyBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUF1ZGlvU3RyZWFtIHsgfVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VMb2NhbGl6YXRpb259IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbUxvY2FsaXphdGlvbiBleHRlbmRzIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlTG9jYWxpemF0aW9uIHsgfVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VMb2NhbGl6YXRpb25zfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1Mb2NhbGl6YXRpb25zIGV4dGVuZHMgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VMb2NhbGl6YXRpb25zIHsgfVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VUaHVtYm5haWx9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbVRodW1ibmFpbCBleHRlbmRzIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVGh1bWJuYWlsIHsgfVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VUaHVtYm5haWxzfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1UaHVtYm5haWxzIGV4dGVuZHMgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VUaHVtYm5haWxzIHsgfVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VTdWdnZXN0aW9uVGFnU3VnZ2VzdGlvbn0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtU3VnZ2VzdGlvblRhZ1N1Z2dlc3Rpb24gZXh0ZW5kcyBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVN1Z2dlc3Rpb25UYWdTdWdnZXN0aW9uIHsgfVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VWaWRlb1N0cmVhbX0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtVmlkZW9TdHJlYW0gZXh0ZW5kcyBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVZpZGVvU3RyZWFtIHsgfVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NTZXJ2aWNlI2RlbGV0ZX1cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NEZWxldGVPcHRzIGV4dGVuZHMgTmd4WXRkQXBpU3RhbmRhcmRPcHRzIHtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgWW91VHViZSB2aWRlbyBJRCBmb3IgdGhlIHJlc291cmNlIHRoYXQgaXMgYmVpbmcgZGVsZXRlZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9kZWxldGUjaWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIG9wdGlvbmFsLlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSB1c2VkIGluIGEgcHJvcGVybHkgYXV0aG9yaXplZCByZXF1ZXN0LlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBpbnRlbmRlZCBmb3IgWW91VHViZSBjb250ZW50IHBhcnRuZXJzLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9kZWxldGUjb25CZWhhbGZPZkNvbnRlbnRPd25lciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBvbkJlaGFsZk9mQ29udGVudE93bmVyPzogc3RyaW5nO1xufVxuLyoqXG4gKiBPcHRpb25zIGZvciB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zU2VydmljZSNnZXRSYXRpbmd9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nT3B0cyBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNPcHRzIHtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIHRoZSBZb3VUdWJlIHZpZGVvIElEKHMpIGZvciByZXRyaWV2aW5nIHJhdGluZyBkYXRhXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2dldFJhdGluZyNpZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgb3B0aW9uYWwuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGNhbiBvbmx5IGJlIHVzZWQgaW4gYSBwcm9wZXJseSBhdXRob3JpemVkIHJlcXVlc3QuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGludGVuZGVkIGZvciBZb3VUdWJlIGNvbnRlbnQgcGFydG5lcnMuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2dldFJhdGluZyNvbkJlaGFsZk9mQ29udGVudE93bmVyIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG9uQmVoYWxmT2ZDb250ZW50T3duZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nSXRlbSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgdGhhdCBZb3VUdWJlIHVzZXMgdG8gdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhlIHZpZGVvXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2dldFJhdGluZyNpdGVtc1tdLnZpZGVvSWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9JZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSByYXRpbmcgdGhhdCB0aGUgYXV0aG9yaXplZCB1c2VyIGdhdmUgdG8gdGhlIHZpZGVvXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2dldFJhdGluZyNpdGVtc1tdLnJhdGluZyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICByYXRpbmc/OiAnZGlzbGlrZScgfCAnbGlrZScgfCAnbm9uZScgfCAndW5zcGVjaWZpZWQnO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdSZXN1bHQgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2Uge1xuICAvKipcbiAgICogQSBsaXN0IG9mIHJhdGluZ3MgdGhhdCBtYXRjaCB0aGUgcmVxdWVzdCBjcml0ZXJpYVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9nZXRSYXRpbmcjaXRlbXNbXSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpdGVtcz86IE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ0l0ZW1bXTtcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zU2VydmljZSNsaXN0fVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RPcHRzIGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY09wdHMge1xuICAvKipcbiAgICogSWRlbnRpZmllcyB0aGUgY2hhcnQgdGhhdCBzaG91bGQgYmUgcmV0cmlldmVkLlxuICAgKiBBY2NlcHRhYmxlIHZhbHVlczpcbiAgICogLSBgbW9zdFBvcHVsYXJgOiBSZXR1cm4gdGhlIG1vc3QgcG9wdWxhciB2aWRlb3MgZm9yIHRoZSBzcGVjaWZpZWQgY29udGVudCByZWdpb24gYW5kIHZpZGVvIGNhdGVnb3J5LlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBhIGZpbHRlciBhbmQgb25seSBvbmUgZmlsdGVyIGlzIGFsbG93ZWRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNjaGFydCBmb3IgbW9yZSBpbmZvLlxuICAgKi9cbiAgY2hhcnQ/OiAnbW9zdFBvcHVsYXInO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdGhlIFlvdVR1YmUgdmlkZW8gSUQocykgZm9yIHRoZSByZXNvdXJjZShzKSB0aGF0IGFyZSBiZWluZyByZXRyaWV2ZWQuXG4gICAqIEluIGEgdmlkZW8gcmVzb3VyY2UsIHRoZSBgaWRgIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgdmlkZW8ncyBJRC5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgYSBmaWx0ZXIgYW5kIG9ubHkgb25lIGZpbHRlciBpcyBhbGxvd2VkXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjaWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIEFQSSB0byByZXR1cm4gdmlkZW9zIHRoYXQgYXJlIGxpa2VkIG9yIGRpc2xpa2VkIGJ5IHRoZSBhdXRoZW50aWNhdGVkIHVzZXJcbiAgICogQWNjZXB0YWJsZSB2YWx1ZXM6XG4gICAqIC0gYGRpc2xpa2VgOiBSZXR1cm5zIG9ubHkgdmlkZW9zIHRoYXQgYXJlIGRpc2xpa2VkIGJ5IHRoZSBhdXRoZW50aWNhdGVkIHVzZXJcbiAgICogLSBgbGlrZWA6IFJldHVybnMgb25seSB2aWRlb3MgdGhhdCBhcmUgbGlrZWQgYnkgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSB1c2VkIGluIGEgcHJvcGVybHkgYXV0aG9yaXplZCByZXF1ZXN0LlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBhIGZpbHRlciBhbmQgb25seSBvbmUgZmlsdGVyIGlzIGFsbG93ZWRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNteVJhdGluZyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBteVJhdGluZz86ICdkaXNsaWtlJyB8ICdsaWtlJztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgQVBJIHRvIHJldHVybiBsb2NhbGl6ZWQgcmVzb3VyY2UgbWV0YWRhdGEgZm9yIGEgc3BlY2lmaWMgbGFuZ3VhZ2UgdGhhdCB0aGUgWW91VHViZSB3ZWJzaXRlIHN1cHBvcnRzLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I2hsIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGhsPzogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtYXhpbXVtIGhlaWdodCBvZiB0aGUgZW1iZWRkZWQgWW91VHViZSBwbGF5ZXIgcmV0dXJuZWQgaW4gdGhlIGBwbGF5ZXIuZW1iZWRIdG1sYCBwcm9wZXJ0eS5cbiAgICogVGhpcyBwYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBhIGhlaWdodCBhcHByb3ByaWF0ZSBmb3IgeW91ciBhcHAncyBsYXlvdXQuXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjbWF4SGVpZ2h0IGZvciBtb3JlIGluZm9cbiAgICogTm90ZTogSWYgdGhlIGBtYXhXaWR0aGAgcHJvcGVydHkgaXMgYWxzbyBzcGVjaWZpZWQsIHRoZSBwbGF5ZXIgbWF5IGJlIHNob3J0ZXJcbiAgICogdGhhbiB0aGUgYG1heEhlaWdodGAgaW4gb3JkZXIgdG8gbm90IHZpb2xhdGUgdGhlIG1heGltdW0gd2lkdGguXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzIGFyZSA3MiB0byA4MTkyLCBpbmNsdXNpdmUuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjbWF4SGVpZ2h0IGZvciBtb3JlIGluZm9cbiAgICovXG4gIG1heEhlaWdodD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWF4aW11bSByZXN1bHRzIHRoYXQgc2hvdWxkIGJlIHJldHVybmVkLlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyB0byBiZSB1c2VkIGZvciB0aGUgYG15UmF0aW5nYCBwYXJhbWV0ZXIsIGJ1dCBzaG91bGQgbm90XG4gICAqIGJlIHVzZWQgd2l0aCB0aGUgYGlkYCBwYXJhbWV0ZXIuXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzOiAxIHRvIDUwLCBpbmNsdXNpdmUuIDUgaXMgdGhlIGRlZmF1bHQgbnVtYmVyLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I21heFJlc3VsdHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgbWF4UmVzdWx0cz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgZW1iZWRkZWQgWW91VHViZSBwbGF5ZXIgcmV0dXJuZWQgaW4gdGhlIGBwbGF5ZXIuZW1iZWRIdG1sYCBwcm9wZXJ0eS5cbiAgICogVGhpcyBwYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBhIHdpZHRoIGFwcHJvcHJpYXRlIGZvciB5b3VyIGFwcCdzIGxheW91dC5cbiAgICogTm90ZTogSWYgdGhlIGBtYXhIZWlnaHRgIHByb3BlcnR5IGlzIGFsc28gc3BlY2lmaWVkLCB0aGUgcGxheWVyIG1heSBiZSBzaG9ydGVyXG4gICAqIHRoYW4gdGhlIGBtYXhXaWR0aGAgaW4gb3JkZXIgdG8gbm90IHZpb2xhdGUgdGhlIG1heGltdW0gd2lkdGguXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzIGFyZSA3MiB0byA4MTkyLCBpbmNsdXNpdmUuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjbWF4V2lkdGhmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBtYXhXaWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0J3MgYXV0aG9yaXphdGlvbiBjcmVkZW50aWFscyBpZGVudGlmeSBhIFlvdVR1YmUgQ01TIHVzZXIgd2hvIGlzXG4gICAqIGFjdGluZyBvbiBiZWhhbGYgb2YgdGhlIGNvbnRlbnQgb3duZXIgc3BlY2lmaWVkIGluIHRoZSBwYXJhbWV0ZXIgdmFsdWUuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3Qjb25CZWhhbGZPZkNvbnRlbnRPd25lciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBvbkJlaGFsZk9mQ29udGVudE93bmVyPzogc3RyaW5nO1xuICAvKipcbiAgICogSWRlbnRpZmllcyBhIHNwZWNpZmljIHBhZ2UgaW4gdGhlIHJlc3VsdCBzZXQgdGhhdCBzaG91bGQgYmUgcmV0dXJuZWQuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIHRvIGJlIHVzZWQgd2l0aCB0aGUgYG15UmF0aW5nYCBwYXJhbWV0ZXIsIGJ1dCBpcyBub3QgdG8gYmUgdXNlZFxuICAgKiB3aXRoIHRoZSBgaWRgIHBhcmFtZXRlci5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNwYWdlVG9rZW4gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogVGVsbHMgdGhlIEFQSSB0byBzZWxlY3QgYSB2aWRlbyBjaGFydCBhdmFpbGFibGUgaW4gdGhlIHNwZWNpZmljIHJlZ2lvbi5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgdG8gb25seSBiZSB1c2VkIHdpdGggdGhlIGBjaGFydGAgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3JlZ2lvbkNvZGUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcmVnaW9uQ29kZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoaXMgcHJvcGVydHkgaWRlbnRpZmllcyB0aGUgdmlkZW8gY2F0ZWdvcnkgZm9yIHdoaWNoIHRoZSB2aWRlbyBzaG91bGQgYmUgcmV0cmlldmVkLlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyB0byBvbmx5IGJlIHVzZWQgd2l0aCB0aGUgYGNoYXJ0YCBwYXJhbWV0ZXIuXG4gICAqIEJ5IGRlZmF1bHQsIGNoYXJ0cyBhcmUgbm90IHJlc3RyaWN0ZWQgdG8gYSBwYXJ0aWN1bGFyIGNhdGVnb3J5LlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3JlZ2lvbkNvZGUgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmlkZW9DYXRlZ29yeUJ5SWQ/OiBzdHJpbmc7XG59XG4vKipcbiAqIE9wdGlvbnMgZm9yIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NTZXJ2aWNlI3JhdGV9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zUmF0ZU9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlTdGFuZGFyZE9wdHMge1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBZb3VUdWJlIHZpZGVvIElEIHRoYXQgaXMgYmVpbmcgcmF0ZWQgb3IgaGF2aW5nIGl0cyByYXRpbmcgcmVtb3ZlZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9yYXRlI2lkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHJhdGluZyB0byByZWNvcmRcbiAgICogQWNjZXB0YWJsZSB2YWx1ZXM6XG4gICAqIC0gYGRpc2xpa2VgOiBSZWNvcmRzIHRoYXQgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlciBkaXNsaWtlZCB0aGUgdmlkZW9cbiAgICogLSBgbGlrZWA6IFJlY29yZHMgdGhhdCB0aGUgYXV0aGVudGljYXRlZCB1c2VyIGxpa2VkIHRoZSB2aWRlb1xuICAgKiAtIGBub25lYDogUmVtb3ZlcyBhbnkgcmF0aW5nIHRoYXQgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlciBwcmV2aW91c2x5IHNldCBmb3IgdGhlIHZpZGVvXG4gICAqL1xuICByYXRpbmc6ICdkaXNsaWtlJyB8ICdsaWtlJyB8ICdub25lJztcbn1cbi8qKlxuICogT3B0aW9ucyBmb3Ige0BsaW5rIE5neFl0ZEFwaVZpZGVvc1NlcnZpY2UjcmVwb3J0QWJ1c2V9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VPcHRzIGV4dGVuZHMgTmd4WXRkQXBpU3RhbmRhcmRPcHRzIHtcbiAgLyoqXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIG9wdGlvbmFsLlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSB1c2VkIGluIGEgcHJvcGVybHkgYXV0aG9yaXplZCByZXF1ZXN0LlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBpbnRlbmRlZCBmb3IgWW91VHViZSBjb250ZW50IHBhcnRuZXJzLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9yZXBvcnRBYnVzZSNvbkJlaGFsZk9mQ29udGVudE93bmVyIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG9uQmVoYWxmT2ZDb250ZW50T3duZXI/OiBzdHJpbmc7XG59XG4vKipcbiAqIE9wdGlvbnMgZm9yIHRoZSByZXF1ZXN0IGJvZHkgb2Yge0BsaW5rIE5neFl0ZEFwaVZpZGVvc1NlcnZpY2UjcmVwb3J0QWJ1c2V9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zUmVwb3J0QWJ1c2VCb2R5IHtcbiAgLyoqXG4gICAqIFRoZSB2aWRlbyB0aGF0IGlzIGJlaW5nIHJlcG9ydGVkIGZvciBhYnVzaXZlIGNvbnRlbnRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvcmVwb3J0QWJ1c2UjdmlkZW9JZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0lkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHJlYXNvbiB0aGF0IHRoZSB2aWRlbyBpcyBiZWluZyByZXBvcnRlZCBmb3IgY29udGFpbmluZyBhYnVzaXZlIGNvbnRlbnRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvcmVwb3J0QWJ1c2UjcmVhc29uSWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcmVhc29uSWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgc2Vjb25kYXJ5IHJlYXNvbiB0aGF0IHRoZSB2aWRlbyBpcyBiZWluZyByZXBvcnRlZCBmb3IgY29udGFpbmluZyBhYnVzaXZlIGNvbnRlbnRcbiAgICpcbiAgICogU2VlIHpodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL3JlcG9ydEFidXNlI3NlY29uZGFyeVJlYXNvbklkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHNlY29uZGFyeVJlYXNvbklkPzogc3RyaW5nO1xuICAvKipcbiAgICogUHJvdmlkZXMgYW55IGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdGhhdCB0aGUgcmVwb3J0ZXIgd2FudHMgdG8gYWRkXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL3JlcG9ydEFidXNlI2NvbW1lbnRzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGNvbW1lbnRzPzogc3RyaW5nO1xuICAvKipcbiAgICogSWRlbnRpZmllcyBhIGxhbmd1YWdlIHNwb2tlbiBieSB0aGUgcmVwb3J0ZXJcbiAgICovXG4gIGxhbmd1YWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc1VwZGF0ZU9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljT3B0cyB7XG4gIC8qKlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBvcHRpb25hbC5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgY2FuIG9ubHkgYmUgdXNlZCBpbiBhIHByb3Blcmx5IGF1dGhvcml6ZWQgcmVxdWVzdC5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgaW50ZW5kZWQgZm9yIFlvdVR1YmUgY29udGVudCBwYXJ0bmVycy5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvdXBkYXRlI29uQmVoYWxmT2ZDb250ZW50T3duZXIgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgb25CZWhhbGZPZkNvbnRlbnRPd25lcj86IHN0cmluZztcbn1cbiJdfQ==