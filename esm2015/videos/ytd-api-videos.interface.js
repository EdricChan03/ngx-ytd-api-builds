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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvdmlkZW9zLyIsInNvdXJjZXMiOlsieXRkLWFwaS12aWRlb3MuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxvRUFhQzs7Ozs7Ozs7SUFQQyw2REFBYTs7Ozs7OztJQU1iLDJFQUE2Qjs7Ozs7QUFHL0Isd0RBeUJDOzs7Ozs7OztJQW5CQywwREFBc0I7Ozs7Ozs7SUFNdEIsbURBQWU7Ozs7Ozs7SUFNZix3REFBb0I7Ozs7Ozs7SUFNcEIsb0RBQWdCOzs7OztBQUdsQix3REF5REM7Ozs7Ozs7O0lBbkRDLHlEQUFxQjs7Ozs7OztJQU1yQiwwREFBc0I7Ozs7Ozs7SUFNdEIsMERBQXNCOzs7Ozs7OztJQU90Qix5REFBcUI7Ozs7Ozs7SUFNckIsbURBQWU7Ozs7Ozs7SUFNZix3REFBb0I7Ozs7Ozs7Ozs7Ozs7SUFZcEIsc0RBQWtCOzs7Ozs7OztJQU9sQixvREFBZ0I7Ozs7O0FBR2xCLDBEQU9DOzs7O0FBRUQseURBYUM7Ozs7Ozs7O0lBUEMsb0RBQWU7Ozs7Ozs7SUFNZiwwREFBcUI7Ozs7O0FBR3ZCLHVEQWlCQzs7OztBQUVELHNEQWFDOzs7Ozs7SUFUQywrQ0FBYTs7Ozs7SUFJYixpREFBZTs7Ozs7SUFJZixrREFBZ0I7Ozs7OztBQUtsQiw2Q0F5c0JDOzs7Ozs7Ozs7SUFsc0JDLHVDQUFjOzs7Ozs7O0lBTWQsdUNBQWM7Ozs7Ozs7SUFNZCxxQ0FBWTs7Ozs7OztJQU1aLDBDQWtHRTs7Ozs7OztJQU1GLGlEQTBGRTs7Ozs7OztJQU1GLHlDQW1FRTs7Ozs7OztJQU1GLDZDQStCRTs7Ozs7OztJQU1GLHlDQW1CRTs7Ozs7OztJQU1GLCtDQXVCRTs7Ozs7OztJQU1GLG1EQThDRTs7Ozs7Ozs7O0lBUUYsOENBK0RFOzs7Ozs7O0lBTUYsb0RBaUZFOzs7Ozs7OztJQU9GLDhDQXlERTs7Ozs7Ozs7SUFPRix1REE0Q0U7Ozs7O0lBSUYsZ0RBQXFEOzs7OztBQUV2RCwrQ0FtQ0M7Ozs7Ozs7O0lBN0JDLCtDQUFxQjs7Ozs7Ozs7SUFPckIsc0RBQTRCOzs7Ozs7Ozs7SUFRNUIsMkRBQWdDOzs7Ozs7OztJQU9oQyxrRUFBdUM7Ozs7Ozs7SUFNdkMsOENBQW9COzs7Ozs7QUFNdEIsbURBQWtGOzs7O0FBQ2xGLCtDQXNDQzs7Ozs7Ozs7SUFoQ0Msa0RBQXVCOzs7Ozs7O0lBTXZCLGtEQUF1Qjs7Ozs7OztJQU12Qiw2Q0FhRTs7Ozs7OztJQU1GLDBDQUFrQzs7Ozs7O0FBT3BDLDhEQUF3Rzs7Ozs7QUFNeEcsK0RBQTBHOzs7OztBQU0xRyxnRUFBNEc7Ozs7O0FBTTVHLDREQUFvRzs7Ozs7QUFNcEcsNkRBQXNHOzs7OztBQU10RywwRUFBZ0k7Ozs7O0FBTWhJLDhEQUF3Rzs7Ozs7QUFLeEcsK0NBZUM7Ozs7Ozs7O0lBVEMsdUNBQVc7Ozs7Ozs7OztJQVFYLDJEQUFnQzs7Ozs7O0FBS2xDLGtEQWVDOzs7Ozs7OztJQVRDLDBDQUFXOzs7Ozs7Ozs7SUFRWCw4REFBZ0M7Ozs7O0FBR2xDLGtEQWFDOzs7Ozs7OztJQVBDLCtDQUFpQjs7Ozs7OztJQU1qQiw4Q0FBcUQ7Ozs7O0FBRXZELG9EQU9DOzs7Ozs7OztJQURDLCtDQUF1Qzs7Ozs7O0FBTXpDLDZDQWdHQzs7Ozs7Ozs7Ozs7SUF2RkMsd0NBQXNCOzs7Ozs7Ozs7SUFRdEIscUNBQVk7Ozs7Ozs7Ozs7OztJQVdaLDJDQUE4Qjs7Ozs7OztJQU05QixxQ0FBWTs7Ozs7Ozs7Ozs7O0lBV1osNENBQW1COzs7Ozs7Ozs7O0lBU25CLDZDQUFvQjs7Ozs7Ozs7Ozs7SUFVcEIsMkNBQWtCOzs7Ozs7OztJQU9sQix5REFBZ0M7Ozs7Ozs7OztJQVFoQyw0Q0FBbUI7Ozs7Ozs7O0lBT25CLDZDQUFvQjs7Ozs7Ozs7OztJQVNwQixvREFBMkI7Ozs7OztBQUs3Qiw2Q0FlQzs7Ozs7Ozs7SUFUQyxxQ0FBVzs7Ozs7Ozs7O0lBUVgseUNBQW9DOzs7Ozs7QUFLdEMsb0RBU0M7Ozs7Ozs7Ozs7SUFEQyxnRUFBZ0M7Ozs7OztBQUtsQyxvREE2QkM7Ozs7Ozs7O0lBdkJDLGlEQUFnQjs7Ozs7OztJQU1oQixrREFBaUI7Ozs7Ozs7SUFNakIsMkRBQTJCOzs7Ozs7O0lBTTNCLGtEQUFrQjs7Ozs7SUFJbEIsa0RBQWtCOzs7OztBQUdwQiwrQ0FTQzs7Ozs7Ozs7OztJQURDLDJEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5neFl0ZEFwaUdlbmVyaWNPcHRzLFxuICBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2UsXG4gIE5neFl0ZEFwaVN0YW5kYXJkT3B0c1xufSBmcm9tICcuL3l0ZC1hcGktY29tbW9uLmludGVyZmFjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VTdWdnZXN0aW9uVGFnU3VnZ2VzdGlvbiB7XG4gIC8qKlxuICAgKiBUaGUga2V5d29yZCB0YWcgc3VnZ2VzdGVkIGZvciB0aGUgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3VnZ2VzdGlvbnMudGFnU3VnZ2VzdGlvbnNbXS50YWcgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdGFnPzogc3RyaW5nO1xuICAvKipcbiAgICogQW4gYXJyYXkgb2YgdmlkZW8gY2F0ZWdvcmllcyBmb3Igd2hpY2ggdGhlIHRhZyBpcyByZWxldmFudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdWdnZXN0aW9ucy50YWdTdWdnZXN0aW9uc1tdLmNhdGVnb3J5UmVzdHJpY3RzW10gZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgY2F0ZWdvcnlSZXN0cmljdHM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUF1ZGlvU3RyZWFtIHtcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgYXVkaW8gY2hhbm5lbHMgdGhhdCB0aGUgc3RyZWFtIGNvbnRhaW5zXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmF1ZGlvU3RyZWFtc1tdLmNoYW5uZWxDb3VudCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBjaGFubmVsQ291bnQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgYXVkaW8gY29kZWMgdGhhdCB0aGUgc3RyZWFtIHVzZXNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuYXVkaW9TdHJlYW1zW10uY29kZWMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgY29kZWM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgYXVkaW8gc3RyZWFtJ3MgYml0cmF0ZSwgaW4gYml0cyBwZXIgc2Vjb25kXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmF1ZGlvU3RyZWFtc1tdLmJpdHJhdGVCcHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgYml0cmF0ZUJwcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIEEgdmFsdWUgdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIGEgdmlkZW8gdmVuZG9yLiBUeXBpY2FsbHksIHRoZSB2YWx1ZSBpcyBhIGZvdXItbGV0dGVyIHZlbmRvciBjb2RlLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5hdWRpb1N0cmVhbXNbXS52ZW5kb3IgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdmVuZG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVmlkZW9TdHJlYW0ge1xuICAvKipcbiAgICogVGhlIGVuY29kZWQgdmlkZW8ncyBjb250ZW50IHdpZHRoIGluIHBpeGVsc1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy52aWRlb1N0cmVhbXNbXS53aWR0aFBpeGVscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB3aWR0aFBpeGVscz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBlbmNvZGVkIHZpZGVvJ3MgY29udGVudCBoZWlnaHQgaW4gcGl4ZWxzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdLmhlaWdodFBpeGVscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBoZWlnaHRQaXhlbHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgdmlkZW8ncyBzdHJlYW0gcmF0ZSBpbiBmcmFtZXMgcGVyIHNlY29uZCAoRlBTKVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy52aWRlb1N0cmVhbXNbXS5mcmFtZVJhdGVGcHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgZnJhbWVSYXRlRnBzPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIHZpZGVvIGNvbnRlbnQncyBkaXNwbGF5IGFzcGVjdCByYXRpbywgd2hpY2ggc3BlY2lmaWVzIHRoZSBhc3BlY3QgcmF0aW8gaW4gd2hpY2hcbiAgICogdGhlIHZpZGVvIHNob3VsZCBiZSBkaXNwbGF5ZWQuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdLmFzcGVjdFJhdGlvIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGFzcGVjdFJhdGlvPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIHZpZGVvIGNvZGVjIHRoYXQgdGhlIHN0cmVhbSB1c2VzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdLmNvZGVjIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGNvZGVjPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHZpZGVvIHN0cmVhbSdzIGJpdHJhdGUgaW4gYml0cyBwZXIgc2Vjb25kXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLnZpZGVvU3RyZWFtc1tdLmJpdHJhdGVCcHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgYml0cmF0ZUJwcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBhbW91bnQgdGhhdCBZb3VUdWJlIG5lZWRzIHRvIHJvdGF0ZSB0aGUgb3JpZ2luYWwgc291cmNlIGNvbnRlbnQgdG8gcHJvcGVybHkgZGlzcGxheSB0aGUgdmlkZW9cbiAgICogVmFsaWQgdmFsdWVzOlxuICAgKiAtIGBjbG9ja3dpc2VgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gbmVlZHMgdG8gYmUgcm90YXRlZCA5MMKwIGNsb2Nrd2lzZVxuICAgKiAtIGBjb3VudGVyQ2xvY2t3aXNlYDogSW5kaWNhdGVzIHRoYXQgdGhlIHZpZGVvIG5lZWRzIHRvIGJlIHJvdGF0ZWQgOTDCsCBjb3VudGVyLWNvY2t3aXNlXG4gICAqIC0gYG5vbmVgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gZG9lcyBub3QgbmVlZCB0byBiZSByb3RhdGVkXG4gICAqIC0gYG90aGVyYDogSW5kaWNhdGVzIHRoYXQgdGhlIHZpZGVvIG5lZWRzIHRvIGJlIHJvdGF0ZWQgaW4gc29tZSBvdGhlciwgbm9uLXRyaXZpYWwgd2F5XG4gICAqIC0gYHVwc2lkZURvd25gOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gbmVlZHMgdG8gYmUgcm90YXRlZCB1cHNpZGUgZG93blxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy52aWRlb1N0cmVhbXNbXS5yb3RhdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICByb3RhdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIEEgdmFsdWUgdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIGEgdmVuZG9yXG4gICAqIE5vdGU6IFR5cGljYWxseSwgdGhlIHZhbHVlIGlzIGEgZm91ci1sZXR0ZXIgdmVuZG9yIGNvZGVcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMudmlkZW9TdHJlYW1zW10udmVuZG9yIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZlbmRvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUxvY2FsaXphdGlvbnMge1xuICAvKipcbiAgICogVGhlIGxhbmd1YWdlIG9mIHRoZSBsb2NhbGl6ZWQgdGV4dCBhc3NvY2lhdGVkIHdpdGggdGhlIGtleSB2YWx1ZVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsb2NhbGl6YXRpb25zLihrZXkpIGZvciBtb3JlIGluZm9cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlTG9jYWxpemF0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlTG9jYWxpemF0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBsb2NhbGl6ZWQgdmlkZW8gdGl0bGVcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbG9jYWxpemF0aW9ucy4oa2V5KS50aXRsZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBsb2NhbGl6ZWQgdmlkZW8gZGVzY3JpcHRpb25cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbG9jYWxpemF0aW9ucy4oa2V5KS5kZXNjcmlwdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbHMge1xuICAvKipcbiAgICogVmFsaWQga2V5IHZhbHVlczpcbiAgICogLSBgZGVmYXVsdGA6IFRoZSBkZWZhdWx0IHRodW1ibmFpbCBpbWFnZVxuICAgKiAoRGVmYXVsdCBzaXplIG9mIHZpZGVvIHRodW1ibmFpbDogMTIwcHggd2lkZSwgOTBweCB0YWxsOyBjaGFubmVsIHRodW1ibmFpbDogODhweCB3aWRlLCA4OHB4IHRhbGwpXG4gICAqIC0gYG1lZGl1bWA6IEEgaGlnaGVyIHJlc29sdXRpb24gdmVyc2lvbiBvZiB0aGUgdGh1bWJuYWlsIHRoYW4gdGhlIGBkZWZhdWx0YCByZXNvbHV0aW9uIGltYWdlXG4gICAqIChEZWZhdWx0IHNpemUgb2YgdmlkZW8gdGh1bWJuYWlsOiAzMjBweCB3aWRlLCAxODBweCB0YWxsOyBjaGFubmVsIHRodW1ibmFpbDogMjQwcHggd2lkZSwgMjQwcHggdGFsbClcbiAgICogLSBgaGlnaGA6IEEgaGlnaGVyIHJlc29sdXRpb24gdmVyc2lvbiBvZiB0aGUgdGh1bWJuYWlsIHRoYW4gdGhlIGBtZWRpdW1gIHJlc29sdXRpb24gaW1hZ2VcbiAgICogKERlZmF1bHQgc2l6ZSBvZiB2aWRlbyB0aHVtYm5haWw6IDQ4MHB4IHdpZGUsIDM2MHB4IHRhbGw7IGNoYW5uZWwgdGh1bWJuYWlsOiA4MDBweCB3aWRlLCA4MDBweCB0YWxsKVxuICAgKiAtIGBzdGFuZGFyZGA6IEEgaGlnaGVyIHJlc29sdXRpb24gdmVyc2lvbiBvZiB0aGUgdGh1bWJuYWlsIHRoYW4gdGhlIGBoaWdoYCByZXNvbHV0aW9uIGltYWdlXG4gICAqIChEZWZhdWx0IHNpemUgb2YgdmlkZW8gdGh1bWJuYWlsOiA2NDBweCB3aWRlLCA0ODBweCB0YWxsKVxuICAgKiAtIGBtYXhyZXNgOiBUaGUgaGlnaGVzdCByZXNvbHV0aW9uIHZlcnNpb24gb2YgdGhlIHRodW1ibmFpbFxuICAgKiAoRGVmYXVsdCBzaXplIG9mIHZpZGVvIHRodW1ibmFpbDogMTI4MHB4IHdpZGUsIDcyMHB4IHRhbGwpXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQudGh1bWJuYWlscy4oa2V5KSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbCB7XG4gIC8qKlxuICAgKiBUaGUgVVJMIG9mIHRoZSB0aHVtYm5haWxcbiAgICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgdGh1bWJuYWlsXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHRodW1ibmFpbFxuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuLyoqXG4gKiBBIHZpZGVvIHJlc291cmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2Uge1xuICAvKipcbiAgICogSWRlbnRpZmllcyB0aGUgcmVzdWx0J3MgdHlwZS5cbiAgICogKE5vdGU6IFRoaXMgdmFsdWUgc2hvdWxkIGJlIHNldCB0byBgeW91dHViZSN2aWRlb2ApXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2tpbmQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAga2luZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBFdGFnIG9mIHRoaXMgcmVzb3VyY2UuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2V0YWcgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgZXRhZz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBJRCB1c2VkIGJ5IFlvdVR1YmUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhlIHZpZGVvLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNpZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpZD86IHN0cmluZztcbiAgLyoqXG4gICAqIENvbnRhaW5zIGJhc2ljIGRldGFpbHMgYWJvdXQgdGhlIHZpZGVvIChlLmcuIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgc25pcHBldD86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB0aGF0IHRoZSB2aWRlbyB3YXMgcHVibGlzaGVkXG4gICAgICogTm90ZTogVGhpcyB0aW1lIGNhbiBiZSBkaWZmZXJlbnQgdGhhbiB0aGUgdGltZSB0aGF0IHRoZSB2aWRlbyB3YXMgdXBsb2FkZWRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQucHVibGlzaGVkQXQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHB1Ymxpc2hlZEF0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIGJ5IFlvdVR1YmUgdG8gaWRlbnRpZnkgdGhlIGNoYW5uZWwgdGhhdCB0aGUgdmlkZW8gd2FzIHVwbG9hZGVkIHRvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmNoYW5uZWxJZCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY2hhbm5lbElkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB2aWRlbydzIHRpdGxlXG4gICAgICogTm90ZTogVGhpcyB2YWx1ZSBoYXMgYSBtYXhpbXVtIGxlbmd0aCBvZiAxMDAgY2hhcmFjdGVycyBhbmQgbWF5IGNvbnRhaW4gYWxsIHZhbGlkXG4gICAgICogVVRGLTggY2hhcmFjdGVycyBleGNlcHQgYDxgIGFuZCBgPmAuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LnRpdGxlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdmlkZW8ncyBkZXNjcmlwdGlvblxuICAgICAqIE5vdGU6IFRoaXMgdmFsdWUgaGFzIGEgbWF4aW11bSBsZW5ndGggb2YgNTAwMCBjaGFyYWN0ZXJzIGFuZCBtYXkgY29udGFpbiBhbGwgdmFsaWRcbiAgICAgKiBVVEYtOCBjaGFyYWN0ZXJzIGV4Y2VwdCBgPGAgYW5kIGA+YC5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQuZGVzY3JpcHRpb24gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHRodW1ibmFpbCBpbWFnZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC50aHVtYm5haWxzIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0aHVtYm5haWxzPzogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VUaHVtYm5haWxzO1xuICAgIC8qKlxuICAgICAqIFRoZSBjaGFubmVsIHRpdGxlIG9mIHRoZSBjaGFubmVsIHRoYXQgdGhlIHZpZGVvIGJlbG9uZ3MgdG9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQuY2hhbm5lbFRpdGxlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjaGFubmVsVGl0bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Yga2V5d29yZCB0YWdzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlkZW9cbiAgICAgKiBOb3RlOiBUYWdzIGNhbiBjb250YWluIHNwYWNlcy5cbiAgICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5J3MgdmFsdWUgaGFzIGEgbWF4aW11bSBsZW5ndGggb2YgNTAwIGNoYXJhY3RlcnMuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LnRhZ3NbXSBmb3IgbW9yZSBpbmZvLlxuICAgICAqL1xuICAgIHRhZ3M/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBUaGUgWW91VHViZSB2aWRlbyBjYXRlZ29yeSBhc3NvY2lhdGVkIHdpdGggdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmNhdGVnb3J5SWQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNhdGVnb3J5SWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHRoZSB2aWRlbyBpcyBhbiB1cGNvbWluZy9jdXJyZW50bHkgbGl2ZSBicm9hZGNhc3RcbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgbGl2ZWBcbiAgICAgKiAtIGBub25lYFxuICAgICAqIC0gYHVwY29taW5nYFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5saXZlQnJvYWRjYXN0Q29udGVudCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbGl2ZUJyb2FkY2FzdENvbnRlbnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGxhbmd1YWdlIG9mIHRoZSB0ZXh0IGluIHRoZSByZXNvdXJjZSdzIGBzbmlwcGV0LnRpdGxlYCBhbmQgYHNuaXBwZXQuZGVzY3JpcHRpb25gIHByb3BlcnRpZXNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQuZGVmYXVsdExhbmd1YWdlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBkZWZhdWx0TGFuZ3VhZ2U/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQ29udGFpbnMgZWl0aGVyIGEgbG9jYWxpemVkIHRpdGxlIGFuZCBkZXNjcmlwdGlvbiBmb3IgdGhlIHZpZGVvIG9yIHRoZSB0aXRsZSBpbiB0aGUgZGVmYXVsdFxuICAgICAqIGxhbmd1YWdlIGZvciB0aGUgdmlkZW8ncyBtZXRhZGF0YVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5sb2NhbGl6ZWQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGxvY2FsaXplZD86IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxvY2FsaXplZCB2aWRlbyB0aXRsZVxuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3NuaXBwZXQubG9jYWxpemVkLnRpdGxlIGZvciBtb3JlIGluZm9cbiAgICAgICAqL1xuICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBsb2NhbGl6ZWQgZGVzY3JpcHRpb25cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzbmlwcGV0LmxvY2FsaXplZC5kZXNjcmlwdGlvbiBmb3IgbW9yZSBpbmZvXG4gICAgICAgKi9cbiAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBsYW5ndWFnZSBzcG9rZW4gaW4gdGhlIHZpZGVvJ3MgZGVmYXVsdCBhdWRpbyB0cmFja1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc25pcHBldC5kZWZhdWx0QXVkaW9MYW5ndWFnZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZGVmYXVsdEF1ZGlvTGFuZ3VhZ2U/OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBpbmZvIGFib3V0IHRoZSB2aWRlbyBjb250ZW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGNvbnRlbnREZXRhaWxzPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSBsZW5ndGggb2YgdGhlIHZpZGVvIGluIGFuIElTTyA4NjAxIGR1cmF0aW9uXG4gICAgICpcbiAgICAgKiBTZWUgU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMuZHVyYXRpb24gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGR1cmF0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB2aWRlbyBpcyBhdmFpbGFibGUgaW4gMkQgb3IgM0RcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLmRpbWVuc2lvbiBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZGltZW5zaW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB2aWRlbyBpcyBhdmFpbGFibGUgaW4gaGlnaCBkZWZpbml0aW9uIG9yIG9ubHkgaW4gc3RhbmRhcmQgZGVmaW5pdGlvblxuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBoZGBcbiAgICAgKiAtIGBzZGBcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLmRlZmluaXRpb24gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGRlZmluaXRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgY2FwdGlvbnMgYXJlIGF2YWlsYWJsZSBmb3IgdGhlIHZpZGVvXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGZhbHNlYFxuICAgICAqIC0gYHRydWVgXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5jYXB0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjYXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB2aWRlbyByZXByZXNlbnRzIGxpY2Vuc2VkIGNvbnRlbnQsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIGNvbnRlbnRcbiAgICAgKiB3YXMgdXBsb2FkZWQgdG8gYSBjaGFubmVsIGxpbmtlZCB0byBhIFlvdVR1YmUgY29udGVudCBwYXJ0bmVyIGFuZCB0aGVuIGNsYWltZWQgYnkgdGhhdFxuICAgICAqIHBhcnRuZXIuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5saWNlbnNlZENvbnRlbnQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGxpY2Vuc2VkQ29udGVudD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQ29udGFpbnMgaW5mbyBhYm91dCB0aGUgY291bnRyaWVzIHdoZXJlIGEgdmlkZW8gaXMvaXMgbm90IHZpZXdhYmxlLlxuICAgICAqIE5vdGU6IFRoaXMgb2JqZWN0IHdpbGwgZWl0aGVyIGhhdmUgdGhlIGBhbGxvd2VkYCBwcm9wZXJ0eSBvciB0aGUgYGJsb2NrZWRgIHByb3BlcnR5XG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5yZWdpb25SZXN0cmljdGlvblxuICAgICAqIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICByZWdpb25SZXN0cmljdGlvbj86IHtcbiAgICAgIC8qKlxuICAgICAgICogQSBsaXN0IG9mIHJlZ2lvbiBjb2RlcyB0aGF0IGlkZW50aWZ5IGNvdW50cmllcyB3aGVyZSB0aGUgdmlkZW8gaXMgdmlld2FibGUgaW5cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5yZWdpb25SZXN0cmljdGlvbi5hbGxvd2VkW11cbiAgICAgICAqIGZvciBtb3JlIGluZm9cbiAgICAgICAqL1xuICAgICAgYWxsb3dlZD86IHN0cmluZ1tdO1xuICAgICAgLyoqXG4gICAgICAgKiBBIGxpc3Qgb2YgcmVnaW9uIGNvZGVzIHRoYXQgaWRlbnRpZnkgY291bnRyaWVzIHdoZXJlIHRoZSB2aWRlbyBpcyBibG9ja2VkXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjY29udGVudERldGFpbHMucmVnaW9uUmVzdHJpY3Rpb24uYmxvY2tlZFtdXG4gICAgICAgKiBmb3IgbW9yZSBpbmZvXG4gICAgICAgKi9cbiAgICAgIGJsb2NrZWQ/OiBzdHJpbmdbXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgcmF0aW5nIHRoYXQgdGhlIHZpZGVvIHJlY2VpdmVkIHVuZGVyIHZhcmlvdXMgcmF0aW5nIHNjaGVtZXNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLmNvbnRlbnRSYXRpbmcgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNvbnRlbnRSYXRpbmc/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLmNvbnRlbnRSYXRpbmcgZm9yXG4gICAgICAgKiBhbGwgYXZhaWxhYmxlIHJhdGluZ3NcbiAgICAgICAqL1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHByb2plY3Rpb24gZm9ybWF0IG9mIHRoZSB2aWRlb1xuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGAzNjBgXG4gICAgICogLSBgcmVjdGFuZ3VsYXJgXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNjb250ZW50RGV0YWlscy5wcm9qZWN0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwcm9qZWN0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB2aWRlbyB1cGxvYWRlciBoYXMgYWRkZWQgYSBjdXN0b20gdGh1bWJuYWlsIGltYWdlIGZvciB0aGUgdmlkZW9cbiAgICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgdmlzaWJsZSB0byB0aGUgdmlkZW8gdXBsb2FkZXJcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2NvbnRlbnREZXRhaWxzLmhhc0N1c3RvbVRodW1ibmFpbCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgaGFzQ3VzdG9tVGh1bWJuYWlsPzogYm9vbGVhbjtcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIGluZm8gYWJvdXQgdGhlIHZpZGVvJ3MgdXBsb2FkaW5nLCBwcm9jZXNzaW5nIGFuZCBwcml2YWN5IHN0YXR1c2VzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXR1cyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBzdGF0dXM/OiB7XG4gICAgLyoqXG4gICAgICogVGhlIHN0YXR1cyBvZiB0aGUgdXBsb2FkZWQgdmlkZW9cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgZGVsZXRlZGBcbiAgICAgKiAtIGBmYWlsZWRgXG4gICAgICogLSBgcHJvY2Vzc2VkYFxuICAgICAqIC0gYHJlamVjdGVkYFxuICAgICAqIC0gYHVwbG9hZGVkYFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdHVzLnVwbG9hZFN0YXR1cyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgdXBsb2FkU3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoaXMgdmFsdWUgZXhwbGFpbnMgd2h5IGEgdmlkZW8gZmFpbGVkIHRvIHVwbG9hZFxuICAgICAqIE5vdGU6IFRoaXMgcHJvcGVydHkgaXMgb25seSBwcmVzZW50IGlmIHRoZSBgdXBsb2FkU3RhdHVzYCBwcm9wZXJ0eSBpbmRpY2F0ZXMgdGhhdCB0aGUgdXBsb2FkXG4gICAgICogZmFpbGVkLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdHVzLmZhaWx1cmVSZWFzb24gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGZhaWx1cmVSZWFzb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhpcyB2YWx1ZSBleHBsYWlucyB3aHkgWW91VHViZSByZWplY3RlZCB0aGUgdmlkZW9cbiAgICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgcHJlc2VudCBpZiB0aGUgYHVwbG9hZFN0YXR1c2AgcHJvcGVydHkgaW5kaWNhdGVzIHRoYXQgdGhlIHVwbG9hZFxuICAgICAqIHdhcyByZWplY3RlZC5cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXR1cy5yZWplY3Rpb25SZWFzb24gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHJlamVjdGlvblJlYXNvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdmlkZW8ncyBwcml2YWN5IHN0YXR1c1xuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBwcml2YXRlYFxuICAgICAqIC0gYHB1YmxpY2BcbiAgICAgKiAtIGB1bmxpc3RlZGBcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXR1cy5wcml2YWN5U3RhdHVzIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwcml2YWN5U3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXRlIGFuZCB0aW1lIHRoZSB2aWRlbyBpcyBzY2hlZHVsZWQgdG8gcHVibGlzaFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdHVzLnB1Ymxpc2hBdCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHVibGlzaEF0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB2aWRlbydzIGxpY2Vuc2VcbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgY3JlYXRpdmVDb21tb25gXG4gICAgICogLSBgeW91dHViZWBcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXR1cy5saWNlbnNlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBsaWNlbnNlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB2aWRlbyBjYW4gYmUgZW1iZWRkYWJsZSBvbiBhbm90aGVyIHdlYnNpdGVcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXR1cy5lbWJlZGRhYmxlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBlbWJlZGRhYmxlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZXh0ZW5kZWQgdmlkZW8gc3RhdGlzdGljcyBvbiB0aGUgdmlkZW8ncyB3YXRjaCBwYWdlIGFyZSBwdWJsaWNseVxuICAgICAqIGFjY2Vzc2libGVcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXR1cy5wdWJsaWNTdGF0c1ZpZXdhYmxlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwdWJsaWNTdGF0c1ZpZXdhYmxlPzogYm9vbGVhbjtcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIHN0YXRpc3RpY3MgYWJvdXQgdGhlIHZpZGVvXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXRpc3RpY3MgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgc3RhdGlzdGljcz86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSB2aWRlbyBoYXMgYmVlbiB2aWV3ZWRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXRpc3RpY3Mudmlld0NvdW50IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB2aWV3Q291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB1c2VycyB3aG8gaGF2ZSBpbmRpY2F0ZWQgdGhhdCB0aGV5IGhhdmUgbGlrZWQgdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0aXN0aWNzLmxpa2VDb3VudCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgbGlrZUNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgdXNlcnMgd2hvIGhhdmUgaW5kaWNhdGVkIHRoYXQgdGhleSBoYXZlIGRpc2xpa2VkIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3Mjc3RhdGlzdGljcy5kaXNsaWtlQ291bnQgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGRpc2xpa2VDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdGF0aXN0aWNzLmZhdm9yaXRlQ291bnQgZm9yIG1vcmUgaW5mb1xuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMjggQXVndXN0IDIwMTUsIHRoZSBwcm9wZXJ0eSdzIHZhbHVlIGlzIGFsd2F5cyBzZXQgdG8gMFxuICAgICAqL1xuICAgIGZhdm9yaXRlQ291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBjb21tZW50cyBvbiB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N0YXRpc3RpY3MuY29tbWVudENvdW50IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBjb21tZW50Q291bnQ/OiBudW1iZXI7XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBpbmZvcm1hdGlvbiB1c2VkIHRvIHBsYXkgdGhlIHZpZGVvIGluIGFuIGVtYmVkZGVkIHBsYXllclxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwbGF5ZXIgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcGxheWVyPzoge1xuICAgIC8qKlxuICAgICAqIEFuIGA8aWZyYW1lPmAgdGFnIHRoYXQgZW1iZWRzIGEgcGxheWVyIHRoYXQgcGxheXMgdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwbGF5ZXIuZW1iZWRIdG1sIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBlbWJlZEh0bWw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgcGxheWVyIHJldHVybmVkIGluIHRoZSBgcGxheWVyLmVtYmVkSHRtbGAgcHJvcGVydHlcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3BsYXllci5lbWJlZEhlaWdodCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZW1iZWRIZWlnaHQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBwbGF5ZXIgcmV0dXJuZWQgaW4gdGhlIGBwbGF5ZXIuZW1iZWRIdG1sYCBwcm9wZXJ0eVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcGxheWVyLmVtYmVkV2lkdGggZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGVtYmVkV2lkdGg/OiBudW1iZXI7XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0b3BpY3MgYXNzb2NpYXRlZCB3aXRoIHRoZSB2aWRlb1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyN0b3BpY0RldGFpbHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdG9waWNEZXRhaWxzPzoge1xuICAgIC8qKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3RvcGljRGV0YWlscy50b3BpY0lkc1tdIGZvciBtb3JlIGluZm9cbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxMCBOb3ZlbWJlciAyMDE2LCB0aGUgQVBJIG5vIGxvbmdlciByZXR1cm5zIHZhbHVlcyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgKiBhbmQgYW55IHRvcGljcyBhc3NvY2lhdGVkIHdpdGggYSB2aWRlbyBhcmUgbm93IHJldHVybmVkIGJ5IHRoZVxuICAgICAqIGB0b3BpY0RldGFpbHMucmVsZXZhbnRUb3BpY0lkc1tdYCBwcm9wZXJ0eSB2YWx1ZS5cbiAgICAgKi9cbiAgICB0b3BpY0lkcz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiB0b3BpYyBJRHMgdGhhdCBhcmUgcmVsZXZhbnQgdG8gdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyN0b3BpY0RldGFpbHMucmVsZXZhbnRUb3BpY0lkc1tdIGZvciBtb3JlIGluZm9cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIFRoaXMgaGFzIGJlZW4gZGVwcmVjYXRlZCBzaW5jZSAxMCBOb3ZlbWJlciAyMDE2IGFuZCBoYXMgYmVlbiB1bnN1cHBvcnRlZCBzaW5jZVxuICAgICAqIDEwIE5vdmVtYmVyIDIwMTdcbiAgICAgKi9cbiAgICByZWxldmFudFRvcGljSWRzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogQSBsaXN0IG9mIFdpa2lwZWRpYSBVUkxzIHRoYXQgcHJvdmlkZSBhIGhpZ2gtbGV2ZWwgZGVzY3JpcHRpb24gb2YgdGhlIHZpZGVvJ3MgY29udGVudFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjdG9waWNEZXRhaWxzLnRvcGljQ2F0ZWdvcmllc1tdIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0b3BpY0NhdGVnb3JpZXM/OiBzdHJpbmdbXTtcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBsb2NhdGlvbiwgZGF0ZSBhbmQgYWRkcmVzcyB3aGVyZSB0aGUgdmlkZW8gd2FzIHJlY29yZGVkXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3JlY29yZGluZ0RldGFpbHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcmVjb3JkaW5nRGV0YWlscz86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dCBkZXNjcmlwdGlvbiBvZiB0aGUgbG9jYXRpb24gd2hlcmUgdGhlIHZpZGVvIHdhcyByZWNvcmRlZFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcmVjb3JkaW5nRGV0YWlscy5sb2NhdGlvbkRlc2NyaXB0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEgSnVuZSAyMDE3LCB0aGlzIHByb3BlcnR5IGhhcyBiZWVuIGRlcHJlY2F0ZWQuXG4gICAgICovXG4gICAgbG9jYXRpb25EZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgZ2VvbG9jYXRpb24gaW5mb3JtYXRpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSB2aWRlb1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjdG9waWNEZXRhaWxzLmxvY2F0aW9uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBsb2NhdGlvbj86IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhdGl0dWRlIGluIGRlZ3JlZXNcbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyN0b3BpY0RldGFpbHMubG9jYXRpb24ubGF0aXR1ZGUgZm9yIG1vcmUgaW5mb1xuICAgICAgICpcbiAgICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEgSnVuZSAyMDE3LCB0aGlzIHByb3BlcnR5IGhhcyBiZWVuIGRlcHJlY2F0ZWRcbiAgICAgICAqL1xuICAgICAgbGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgICAvKipcbiAgICAgICAqIExvbmdpdHVkZSBpbiBkZWdyZWVzXG4gICAgICAgKlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjdG9waWNEZXRhaWxzLmxvY2F0aW9uLmxvbmdpdHVkZSBmb3IgbW9yZSBpbmZvXG4gICAgICAgKlxuICAgICAgICogQGRlcHJlY2F0ZWQgVGhpcyBwcm9wZXJ0eSBoYXMgYmVlbiBkZXByZWNhdGVkIHNpbmNlIDEgSnVuZSAyMDE3XG4gICAgICAgKi9cbiAgICAgIGxvbmdpdHVkZT86IG51bWJlcjtcbiAgICAgIC8qKlxuICAgICAgICogQWx0aXR1ZGUgYWJvdmUgdGhlIHJlZmVyZW5jZSBlbGxpcHNvaWQsIGluIG1ldGVycy5cbiAgICAgICAqXG4gICAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyN0b3BpY0RldGFpbHMubG9jYXRpb24uYWx0aXR1ZGUgZm9yIG1vcmUgaW5mb1xuICAgICAgICpcbiAgICAgICAqIEBkZXByZWNhdGVkIFRoaXMgcHJvcGVydHkgaGFzIGJlZW4gZGVwcmVjYXRlZCBzaW5jZSA5IGp1bHkgMjAxOFxuICAgICAgICovXG4gICAgICBhbHRpdHVkZT86IG51bWJlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGRhdGUgYW5kIHRpbWUgd2hlbiB0aGUgdmlkZW8gd2FzIHJlY29yZGVkIGluIElTTyA4NjAxIGZvcm1hdFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjcmVjb3JkaW5nRGV0YWlscy5yZWNvcmRpbmdEYXRlIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICByZWNvcmRpbmdEYXRlPzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgaW5mbyBhYm91dCB0aGUgdmlkZW8gZmlsZSB0aGF0IHdhcyB1cGxvYWRlZCB0byBZb3VUdWJlIChzdWNoIGFzIHRoZSBmaWxlJ3MgcmVzb2x1dGlvbixcbiAgICogZHVyYXRpb24sIGF1ZGlvLCBldGMuKVxuICAgKiBOb3RlOiBUaGlzIGRhdGEgY2FuIG9ubHkgYmUgcmV0cmlldmVkIGJ5IHRoZSB2aWRlbyBvd25lclxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBmaWxlRGV0YWlscz86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdXBsb2FkZWQgZmlsZSdzIG5hbWVcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmZpbGVOYW1lIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBmaWxlTmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdXBsb2FkZWQgZmlsZSdzIHNpemUgaW4gYnl0ZXNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmZpbGVTaXplIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBmaWxlU2l6ZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgdXBsb2FkZWQgZmlsZSdzIHR5cGUgYXMgZGV0ZWN0ZWQgYnkgWW91VHViZSdzIHZpZGVvIHByb2Nlc3NpbmcgZW5naW5lXG4gICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gYGFyY2hpdmVgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmlsZSBpcyBhbiBhcmNoaXZlIGZpbGUgKGUuZy4gYHppcGAgZmlsZXMpXG4gICAgICogLSBgYXVkaW9gOiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmlsZSBpcyBhbiBhdWRpbyBmaWxlIChlLmcuIGBtcDNgIGZpbGVzKVxuICAgICAqIC0gYGRvY3VtZW50YDogSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgaXMgYSBkb2N1bWVudC90ZXh0IGZpbGUgKGUuZy4gTVMgV29yZCBkb2N1bWVudHMpXG4gICAgICogLSBgaW1hZ2VgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmlsZSBpcyBhbiBpbWFnZSBmaWxlIChlLmcuIGAuanBlZ2AgZmlsZXMpXG4gICAgICogLSBgb3RoZXJgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmlsZSBpcyBhbm90aGVyIG5vbi12aWRlbyBmaWxlIHR5cGVcbiAgICAgKiAtIGBwcm9qZWN0YDogSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgaXMgYSB2aWRlbyBwcm9qZWN0IGZpbGUgKGUuZy4gYSBNaWNyb3NvZnQgV2luZG93cyBNb3ZpZSBNYWtlciBwcm9qZWN0KVxuICAgICAqIC0gYHZpZGVvYDogSW5kaWNhdGVzIHRoYXQgdGhlIGZpbGUgaXMgYSBrbm93biB2aWRlbyBmaWxlIHR5cGUgKGUuZy4gYG1wNGAgZmlsZXMpXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5maWxlVHlwZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZmlsZVR5cGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHVwbG9hZGVkIHZpZGVvIGZpbGUncyBjb250YWluZXIgZm9ybWF0XG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNmaWxlRGV0YWlscy5jb250YWluZXIgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNvbnRhaW5lcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiB2aWRlbyBzdHJlYW1zIGNvbnRhaW5lZCBpbiB0aGUgdXBsb2FkZWQgdmlkZW8gZmlsZVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMudmlkZW9TdHJlYW1zW10gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHZpZGVvU3RyZWFtcz86IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVmlkZW9TdHJlYW1bXTtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBhdWRpbyBzdHJlYW1zIGNvbnRhaW5lZCBpbiB0aGUgdXBsb2FkZWQgdmlkZW8gZmlsZVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjZmlsZURldGFpbHMuYXVkaW9TdHJlYW1zW10gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGF1ZGlvU3RyZWFtcz86IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlQXVkaW9TdHJlYW1bXTtcbiAgICAvKipcbiAgICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSB1cGxvYWRlZCB2aWRlbyBpbiBtaWxsaXNlY29uZHNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmR1cmF0aW9uTXMgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGR1cmF0aW9uTXM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHVwbG9hZGVkIHZpZGVvIGZpbGUncyBjb21iaW5lZCAoYXVkaW8gJiB2aWRlbykgYml0cmF0ZSBpbiBiaXRzIHBlciBzZWNvbmRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmJpdHJhdGVCcHMgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGJpdHJhdGVCcHM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGRhdGUgYW5kIHRpbWUgd2hlbiB0aGUgdXBsb2FkZWQgdmlkZW8gZmlsZSB3YXMgY3JlYXRlZCBpbiBJU08gODYwMSBmb3JtYXRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2ZpbGVEZXRhaWxzLmNyZWF0aW9uVGltZSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgY3JlYXRpb25UaW1lPzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgaW5mbyBhYm91dCBZb3VUdWJlJ3MgcHJvZ3Jlc3MgaW4gcHJvY2Vzc2luZyB0aGUgdXBsb2FkZWQgdmlkZW8gZmlsZVxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwcm9jZXNzaW5nRGV0YWlscz86IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdmlkZW8ncyBwcm9jZXNzaW5nIHN0YXR1c1xuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBmYWlsZWRgOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdmlkZW8gcHJvY2Vzc2luZyBoYXMgZmFpbGVkXG4gICAgICogLSBgcHJvY2Vzc2luZ2A6IEluZGljYXRlcyB0aGF0IHRoZSB2aWRlbyBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkXG4gICAgICogLSBgc3VjY2VlZGVkYDogSW5kaWNhdGVzIHRoYXQgdGhlIHZpZGVvIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBwcm9jZWVzZWRcbiAgICAgKiAtIGB0ZXJtaW5hdGVkYDogSW5kaWNhdGVzIHRoYXQgcHJvY2Vzc2luZyBpbmZvcm1hdGlvbiBpcyBubyBsb25nZXIgYXZhaWxhYmxlXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5wcm9jZXNzaW5nU3RhdHVzIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwcm9jZXNzaW5nU3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGluZm8gYWJvdXQgdGhlIHByb2dyZXNzIFlvdVR1YmUgaGFzIG1hZGUgaW4gcHJvY2Vzc2luZyB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3Byb2Nlc3NpbmdEZXRhaWxzLnByb2Nlc3NpbmdQcm9ncmVzcyBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJvY2Vzc2luZ1Byb2dyZXNzPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBBbiBlc3RpbWF0ZSBvZiB0aGUgdG90YWwgbnVtYmVyIG9mIHBhcnRzIHRoYXQgbmVlZCB0byBiZSBwcm9jZXNzZWQgZm9yIHRoZSB2aWRlb1xuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3Byb2Nlc3NpbmdEZXRhaWxzLnByb2Nlc3NpbmdQcm9ncmVzcy5wYXJ0c1RvdGFsIGZvciBtb3JlIGluZm9cbiAgICAgICAqL1xuICAgICAgcGFydHNUb3RhbD86IG51bWJlcjtcbiAgICAgIC8qKlxuICAgICAgICogVGJlIG51bWJlciBvZiBwYXJ0cyBvZiB0aGUgdmlkZW8gdGhhdCBZb3VUdWJlIGhhcyBhbHJlYWR5IHByb2Nlc3NlZFxuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3Byb2Nlc3NpbmdEZXRhaWxzLnByb2Nlc3NpbmdQcm9ncmVzcy5wYXJ0c1Byb2Nlc3NlZCBmb3IgbW9yZSBpbmZvXG4gICAgICAgKi9cbiAgICAgIHBhcnRzUHJvY2Vzc2VkPzogbnVtYmVyO1xuICAgICAgLyoqXG4gICAgICAgKiBBbiBlc3RpbWF0ZSBvZiB0aGUgYW1vdW50IG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCBZb3VUdWJlIG5lZWRzIHRvIGZpbmlzaCBwcm9jZXNzaW5nIHRoZSB2aWRlb1xuICAgICAgICpcbiAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3Byb2Nlc3NpbmdEZXRhaWxzLnByb2Nlc3NpbmdQcm9ncmVzcy50aW1lTGVmdE1zIGZvciBtb3JlIGluZm9cbiAgICAgICAqL1xuICAgICAgdGltZUxlZnRNcz86IG51bWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSByZWFzb24gdGhhdCBZb3VUdWJlIGZhaWxlZCB0byBwcm9jZXNzIHRoZSB2aWRlb1xuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBvdGhlcmA6IEluZGljYXRlcyB0aGF0IHNvbWUgb3RoZXIgcHJvY2Vzc2luZyBjb21wb25lbnQgaGFzIGZhaWxlZFxuICAgICAqIC0gYHN0cmVhbWluZ0ZhaWxlZGA6IEluZGljYXRlcyB0aGF0IHRoZSB2aWRlbyBjb3VsZCBub3QgYmUgc2VudCB0byBzdHJlYW1lcnNcbiAgICAgKiAtIGB0cmFuc2NvZGVGYWlsZWRgOiBJbmRpY2F0ZXMgdGhhdCBjb250ZW50IHRyYW5zY29kaW5nIGhhcyBmYWlsZWRcbiAgICAgKiAtIGB1cGxvYWRGYWlsZWRgOiBJbmRpY2F0ZXMgdGhhdCBmaWxlIGRlbGl2ZXJ5IGhhcyBmYWlsZWRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3Byb2Nlc3NpbmdEZXRhaWxzLnByb2Nlc3NpbmdGYWlsdXJlUmVhc29uIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBwcm9jZXNzaW5nRmFpbHVyZVJlYXNvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciBmaWxlIGRldGFpbHMgYXJlIGF2YWlsYWJsZSBmb3IgdGhlIHVwbG9hZGVkIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5maWxlRGV0YWlsc0F2YWlsYWJpbGl0eSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZmlsZURldGFpbHNBdmFpbGFiaWxpdHk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZpZGVvIHByb2Nlc3NpbmcgZW5naW5lIGhhcyBnZW5lcmF0ZWQgc3VnZ2VzdGlvbnMgdGhhdCBtaWdodCBpbXByb3ZlXG4gICAgICogWW91VHViZSdzIGFiaWxpdHkgdG8gcHJvY2VzcyB0aGUgdmlkZW8sIHdhcm5pbmdzIHRoYXQgZXhwbGFpbiB2aWRlbyBwcm9jZXNzaW5nIHByb2JsZW1zLFxuICAgICAqIG9yIGVycm9ycyB0aGF0IGNhdXNlIHZpZGVvIHByb2Nlc3NpbmcgcHJvYmxlbXNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3Byb2Nlc3NpbmdEZXRhaWxzLnByb2Nlc3NpbmdJc3N1ZXNBdmFpbGFiaWxpdHkgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHByb2Nlc3NpbmdJc3N1ZXNBdmFpbGFiaWxpdHk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIga2V5d29yZCAodGFnKSBzdWdnZXN0aW9ucyBhcmUgYXZhaWxhYmxlIGZvciB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3Byb2Nlc3NpbmdEZXRhaWxzLnRhZ1N1Z2dlc3Rpb25zQXZhaWxhYmlsaXR5IGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICB0YWdTdWdnZXN0aW9uc0F2YWlsYWJpbGl0eT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB2aWRlbyBlZGl0aW5nIHN1Z2dlc3Rpb25zLCB3aGljaCBtaWdodCBpbXByb3ZlIHZpZGVvIHF1YWxpdHkgb3IgdGhlXG4gICAgICogcGxheWJhY2sgZXhwZXJpZW5jZSwgYXJlIGF2YWlsYWJsZSBmb3IgdGhlIHZpZGVvXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNwcm9jZXNzaW5nRGV0YWlscy5lZGl0b3JTdWdnZXN0aW9uc0F2YWlsYWJpbGl0eSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgZWRpdG9yU3VnZ2VzdGlvbnNBdmFpbGFiaWxpdHk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGh1bWJuYWlsIGltYWdlcyBoYXZlIGJlZW4gZ2VuZXJhdGVkIGZvciB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3Byb2Nlc3NpbmdEZXRhaWxzLnRodW1ibmFpbHNBdmFpbGFiaWxpdHkgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHRodW1ibmFpbHNBdmFpbGFiaWxpdHk/OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiBDb250YWlucyBzdWdnZXN0aW9ucyB0aGF0IGlkZW50aWZ5IG9wcG9ydHVuaXRpZXMgdG8gaW1wcm92ZSB0aGUgdmlkZW8gcXVhbGl0eSBvciB0aGUgbWV0YWRhdGFcbiAgICogZm9yIHRoZSB1cGxvYWRlZCB2aWRlb1xuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdWdnZXN0aW9ucyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBzdWdnZXN0aW9ucz86IHtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBlcnJvcnMgdGhhdCB3aWxsIHByZXZlbnQgWW91VHViZSBmcm9tIHN1Y2Nlc3NmdWxseSBwcm9jZXNzaW5nIHRoZSB2aWRlb1xuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBhcmNoaXZlRmlsZWA6IEFuIGFyY2hpdmUgZmlsZSAoZS5nLiBhIHppcCBhcmNoaXZlKVxuICAgICAqIC0gYGF1ZGlvRmlsZWA6IEFuIGF1ZGlvIGZpbGUgKGUuZy4gYW4gbXAzIGZpbGUpXG4gICAgICogLSBgZG9jRmlsZWA6IEEgZG9jdW1lbnQvdGV4dCBmaWxlIChlLmcuIGEgTVMgV29yZCBkb2N1bWVudCBmaWxlKVxuICAgICAqIC0gYGltYWdlRmlsZWA6IEFuIGltYWdlIGZpbGUgKGUuZy4gYSBqcGVnIGltYWdlKVxuICAgICAqIC0gYG5vdEFWaWRlb0ZpbGVgOiBPdGhlciBub24tdmlkZW8gZmlsZVxuICAgICAqIC0gYHByb2plY3RGaWxlYDogTW92aWUgcHJvamVjdCBmaWxlIChlLmcuIGEgTWljcm9zb2Z0IFdpbmRvd3MgTW92aWUgTWFrZXIgcHJvamVjdClcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N1Z2dlc3Rpb25zLnByb2Nlc3NpbmdFcnJvcnNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJvY2Vzc2luZ0Vycm9ycz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHJlYXNvbnMgd2h5IFlvdVR1YmUgbWF5IGhhdmUgZGlmZmljdWx0eSB0cmFuc2NvZGluZyB0aGUgdXBsb2FkZWQgdmlkZW8gb3IgdGhhdFxuICAgICAqIG1pZ2h0IHJlc3VsdCBpbiBhbiBlcnJvbmVvdXMgdHJhbnNjb2RpbmdcbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgaGFzRWRpdGxpc3RgOiBOb3RlIHRoYXQgZWRpdCBsaXN0cyBhcmUgY3VycmVudGx5IHVuc3VwcG9ydGVkXG4gICAgICogLSBgaW5jb25zaXN0ZW50UmVzb2x1dGlvbmA6IENvbmZsaWN0aW5nIGNvbnRhaW5lciBhbmQgc3RyZWFtIHJlc29sdXRpb25zXG4gICAgICogLSBgcHJvYmxlbWF0aWNBdWRpb0NvZGVjYDogQW4gYXVkaW8gY29kZWMgdGhhdCBpcyBrbm93biB0byBjYXVzZSBwcm9ibGVtcyB3YXMgdXNlZFxuICAgICAqIC0gYHByb2JsZW1hdGljVmlkZW9Db2RlY2A6IEEgdmlkZW8gY29kZWMgdGhhdCBpcyBrbm93biB0byBjYXVzZSBwcm9ibGVtcyB3YXMgdXNlZFxuICAgICAqIC0gYHVua25vd25BdWRpb0NvZGVjYDogVW5yZWNvZ25pemVkIGF1ZGlvIGNvZGVjLCB0cmFuc2NvZGluZyBpcyBsaWtlbHkgdG8gZmFpbFxuICAgICAqIC0gYHVua25vd25Db250YWluZXJgOiBVbnJlY29nbml6ZWQgZmlsZSBmb3JtYXQsIHRyYW5zY29kaW5nIGlzIGxpa2VseSB0byBmYWlsXG4gICAgICogLSBgdW5rbm93blZpZGVvQ29kZWNgOiBVbnJlY29nbml6ZWQgdmlkZW8gY29kZWMsIHRyYW5zY29kaW5nIGlzIGxpa2VseSB0byBmYWlsXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdWdnZXN0aW9ucy5wcm9jZXNzaW5nV2FybmluZ3NbXSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJvY2Vzc2luZ1dhcm5pbmdzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Ygc3VnZ2VzdGlvbnMgdGhhdCBtYXkgaW1wcm92ZSBZb3VUdWJlJ3MgYWJpbGl0eSB0byBwcm9jZXNzIHRoZSB2aWRlb1xuICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIGBub25TdHJlYW1hYmxlTW92YDogVGhlIE1QNCBmaWxlIGlzIG5vdCBzdHJlYW1hYmxlLCB3aGljaCB3aWxsIHNsb3cgZG93biB0aGUgcHJvY2Vzc2luZ1xuICAgICAqIC0gYHNlbmRCZXN0UXVhbGl0eVZpZGVvYDogUHJvYmFibHkgYSBiZXR0ZXIgcXVhbGl0eSBvZiB0aGUgdmlkZW8gZXhpc3RzXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNzdWdnZXN0aW9ucy5wcm9jZXNzaW5nSGludHNbXSBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgcHJvY2Vzc2luZ0hpbnRzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Yga2V5d29yZCB0YWdzIHRoYXQgY291bGQgYmUgYWRkZWQgdG8gdGhlIHZpZGVvJ3MgbWV0YWRhdGEgdG8gaW5jcmVhc2UgdGhlIGNoYW5jZXNcbiAgICAgKiB0aGF0IHVzZXJzIHdpbGwgZmluZCB5b3VyIHZpZGVvIHdoZW4gc2VhcmNoaW5nIG9yIGJyb3dzaW5nIG9uIFlvdVR1YmVcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N1Z2dlc3Rpb25zLnRhZ1N1Z2dlc3Rpb25zW10gZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHRhZ1N1Z2dlc3Rpb25zPzogTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VTdWdnZXN0aW9uVGFnU3VnZ2VzdGlvbltdO1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHZpZGVvIGVkaXRpbmcgc3VnZ2VzdGlvbnMgdGhhdCBtaWdodCBpbXByb3ZlIHRoZSB2aWRlbyBxdWFsaXR5L3BsYXliYWNrXG4gICAgICogZXhwZXJpZW5jZSBvZiB0aGUgdXBsb2FkZWQgdmlkZW9cbiAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBgYXVkaW9RdWlldEF1ZGlvU3dhcGA6IFRoZSBhdWRpbyB0cmFjayBhcHBlYXJzIHNpbGVudCBhbmQgY291bGQgYmUgc3dhcHBlZCB3aXRoIGEgYmV0dGVyIHF1YWxpdHkgb25lXG4gICAgICogLSBgdmlkZW9BdXRvTGV2ZWxzYDogUGljdHVyZSBicmlnaHRuZXNzIGxldmVscyBzZWVtIG9mZiBhbmQgY291bGQgYmUgY29ycmVjdGVkXG4gICAgICogLSBgdmlkZW9Dcm9wYDogTWFyZ2lucyAobWF0dGVzKSBkZXRlY3RlZCBhcm91bmQgdGhlIHBpY3R1cmUgY291bGQgYmUgY3JvcHBlZFxuICAgICAqIC0gYHZpZGVvU3RhYmlsaXplYDogVGhlIHZpZGVvIGFwcGVhcnMgc2hha3kgYW5kIGNvdWxkIGJlIHN0YWJpbGl6ZWRcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI3N1Z2dlc3Rpb25zLnByb2Nlc3NpbmdIaW50c1tdIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBlZGl0b3JTdWdnZXN0aW9ucz86IHN0cmluZ1tdO1xuICB9O1xuICAvKipcbiAgICogQ29udGFpbnMgbWV0YWRhdGEgYWJvdXQgYSBsaXZlIHZpZGVvIGJyb2FkY2FzdFxuICAgKiBOb3RlOiBUaGlzIHdpbGwgYmUgcHJlc2VudCBpZiB0aGUgdmlkZW8gaXMgYW4gdXBjb21pbmcsIGxpdmUgb3IgY29tcGxldGVkIGxpdmUgYnJvYWRjYXN0XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2xpdmVTdHJlYW1pbmdEZXRhaWxzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGxpdmVTdHJlYW1pbmdEZXRhaWxzPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHRoYXQgdGhlIGJyb2FkY2FzdCBhY3R1YWxseSBzdGFydGVkIGluIElTTyA4NjAxIGZvcm1hdFxuICAgICAqIE5vdGU6IFRoaXMgdmFsdWUgd2lsbCBub3QgYmUgYXZhaWxhYmxlIHVudGlsIHRoZSBicm9hZGNhc3QgYmVnaW5zXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcyNsaXZlU3RyZWFtaW5nRGV0YWlscy5hY3R1YWxTdGFydFRpbWUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGFjdHVhbFN0YXJ0VGltZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSB0aGF0IHRoZSBicm9hZGNhc3QgYWN0dWFsbHkgZW5kZWQgaW4gSVNPIDg2MDEgZm9ybWF0XG4gICAgICogTm90ZTogVGhpcyB2YWx1ZSB3aWxsIG5vdCBiZSBhdmFpbGFibGUgdW50aWwgdGhlIGJyb2FkY2FzdCBiZWdpbnNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2xpdmVTdHJlYW1pbmdEZXRhaWxzLmFjdHVhbEVuZFRpbWUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGFjdHVhbEVuZFRpbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgdGhhdCB0aGUgYnJvYWRjYXN0IGlzIHNjaGVkdWxlZCB0byBiZWdpbiBpbiBJU08gODYwMSBmb3JtYXRcbiAgICAgKiBOb3RlOiBUaGlzIHZhbHVlIHdpbGwgbm90IGJlIGF2YWlsYWJsZSB1bnRpbCB0aGUgYnJvYWRjYXN0IGJlZ2luc1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbGl2ZVN0cmVhbWluZ0RldGFpbHMuc2NoZWR1bGVkU3RhcnRUaW1lIGZvciBtb3JlIGluZm9cbiAgICAgKi9cbiAgICBzY2hlZHVsZWRTdGFydFRpbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgdGhhdCB0aGUgYnJvYWRjYXN0IGlzIHNjaGVkdWxlZCB0byBlbmQgaW4gSVNPIDg2MDEgZm9ybWF0XG4gICAgICogTm90ZTogVGhpcyB2YWx1ZSB3aWxsIG5vdCBiZSBhdmFpbGFibGUgdW50aWwgdGhlIGJyb2FkY2FzdCBiZWdpbnNcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2xpdmVTdHJlYW1pbmdEZXRhaWxzLnNjaGVkdWxlZEVuZFRpbWUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHNjaGVkdWxlZEVuZFRpbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB2aWV3ZXJzIGN1cnJlbnRseSB3YXRjaGluZyB0aGUgYnJvYWRjYXN0XG4gICAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBhbmQgaXRzIHZhbHVlIHdpbGwgYmUgcHJlc2VudCBpZiB0aGUgYnJvYWRjYXN0IGhhcyBjdXJyZW50IHZpZXdlcnNcbiAgICAgKiBhbmQgdGhlIGJyb2FkY2FzdCBvd25lciBoYXMgbm90IGhpZGRlbiB0aGUgdmlld2NvdW50IGZvciB0aGUgdmlkZW9cbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zI2xpdmVTdHJlYW1pbmdEZXRhaWxzLnNjaGVkdWxlZEVuZFRpbWUgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIGNvbmN1cnJlbnRWaWV3ZXJzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSBsaXZlIGNoYXQgYXR0YWNoZWQgdG8gdGhpcyB2aWRlb1xuICAgICAqIE5vdGU6IFRoaXMgZmllbGQgaXMgZmlsbGVkIG9ubHkgaWYgdGhlIHZpZGVvIGlzIGEgY3VycmVudGx5IGxpdmUgYnJvYWRjYXN0IHRoYXQgaGFzIGxpdmUgY2hhdFxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MjbGl2ZVN0cmVhbWluZ0RldGFpbHMuYWN0aXZlTGl2ZUNoYXRJZCBmb3IgbW9yZSBpbmZvXG4gICAgICovXG4gICAgYWN0aXZlTGl2ZUNoYXRJZD86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIENvbnRhaW5zIHRyYW5zbGF0aW9ucyBvZiB0aGUgdmlkZW8ncyBtZXRhZGF0YVxuICAgKi9cbiAgbG9jYWxpemF0aW9ucz86IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlTG9jYWxpemF0aW9ucztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zSW5zZXJ0T3B0cyBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNPcHRzIHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIFlvdVR1YmUgc2hvdWxkIGF1dG9tYXRpY2FsbHkgZW5oYW5jZSB0aGUgdmlkZW8ncyBsaWdodGluZyBhbmQgY29sb3IuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2luc2VydCNhdXRvTGV2ZWxzIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGF1dG9MZXZlbHM/OiBib29sZWFuO1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgWW91VHViZSBzaG91bGQgc2VuZCBhIG5vdGlmaWNhdGlvbiBhYm91dCB0aGUgbmV3IHZpZGVvIHRvIHVzZXJzIHdob1xuICAgKiBzdWJzY3JpYmUgdG8gdGhlIHZpZGVvJ3MgY2hhbm5lbFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9pbnNlcnQjbm90aWZ5U3Vic2NyaWJlcnMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgbm90aWZ5U3Vic2NyaWJlcnM/OiBib29sZWFuO1xuICAvKipcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgb3B0aW9uYWwuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGNhbiBvbmx5IGJlIHVzZWQgaW4gYSBwcm9wZXJseSBhdXRob3JpemVkIHJlcXVlc3QuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGludGVuZGVkIGZvciBZb3VUdWJlIGNvbnRlbnQgcGFydG5lcnMuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2luc2VydCNvbkJlaGFsZk9mQ29udGVudE93bmVyIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG9uQmVoYWxmT2ZDb250ZW50T3duZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBvcHRpb25hbC5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgY2FuIG9ubHkgYmUgdXNlZCBpbiBhIHByb3Blcmx5IGF1dGhvcml6ZWQgcmVxdWVzdC5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvaW5zZXJ0I29uQmVoYWxmT2ZDb250ZW50T3duZXJDaGFubmVsIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG9uQmVoYWxmT2ZDb250ZW50T3duZXJDaGFubmVsPzogc3RyaW5nO1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgWW91VHViZSBzaG91bGQgYWRqdXN0IHRoZSB2aWRlbyB0byByZW1vdmUgc2hha3kgY2FtZXJhIG1vdGlvbnNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvaW5zZXJ0I3N0YWJpbGl6ZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBzdGFiaWxpemU/OiBib29sZWFuO1xufVxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW0gZXh0ZW5kcyBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZSB7IH1cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdCBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNSZXNvdXJjZSB7XG4gIC8qKlxuICAgKiBUaGUgdG9rZW4gdGhhdCBjYW4gYmUgcGFzc2VkIHZpYSB0aGUgYHBhZ2VUb2tlbmAgcGFyYW1ldGVyIHRvIHJldHJpZXZlIHRoZSBuZXh0IHBhZ2VcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNuZXh0UGFnZVRva2VuIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG5leHRQYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdG9rZW4gdGhhdCBjYW4gYmUgcGFzc2VkIHZpYSB0aGUgYHBhZ2VUb2tlbmAgcGFyYW1ldGVyIHRvIHJldHJpZXZlIHRoZSBwcmV2aW91cyBwYWdlXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjcHJldlBhZ2VUb2tlbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwcmV2UGFnZVRva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogQ29udGFpbnMgcGFnaW5nIGluZm8gZm9yIHRoZSByZXN1bHRzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjcGFnZUluZm8gZnJvciBtb3JlIGluZm9cbiAgICovXG4gIHBhZ2VJbmZvPzoge1xuICAgIC8qKlxuICAgICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgcmVzdWx0c1xuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNwYWdlSW5mby50b3RhbFJlc3VsdHMgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHRvdGFsUmVzdWx0cz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHJlc3VsdHMgaW5jbHVkZWQgcGVyIHBhZ2VcbiAgICAgKlxuICAgICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjcGFnZUluZm8ucmVzdWx0c1BlclBhZ2UgZm9yIG1vcmUgaW5mb1xuICAgICAqL1xuICAgIHJlc3VsdHNQZXJQYWdlPzogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICogQSBsaXN0IG9mIHZpZGVvcyB0aGF0IG1hdGNoIHRoZSByZXF1ZXN0IGNyaXRlcmlhXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjaXRlbXNbXSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpdGVtcz86IE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlW107XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUF1ZGlvU3RyZWFtfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1BdWRpb1N0cmVhbSBleHRlbmRzIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlQXVkaW9TdHJlYW0geyB9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUxvY2FsaXphdGlvbn0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtTG9jYWxpemF0aW9uIGV4dGVuZHMgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VMb2NhbGl6YXRpb24geyB9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUxvY2FsaXphdGlvbnN9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbUxvY2FsaXphdGlvbnMgZXh0ZW5kcyBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZUxvY2FsaXphdGlvbnMgeyB9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbH0gaW5zdGVhZFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0xpc3RSZXN1bHRJdGVtVGh1bWJuYWlsIGV4dGVuZHMgTmd4WXRkQXBpVmlkZW9zUmVzb3VyY2VUaHVtYm5haWwgeyB9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbHN9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NMaXN0UmVzdWx0SXRlbVRodW1ibmFpbHMgZXh0ZW5kcyBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVRodW1ibmFpbHMgeyB9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVN1Z2dlc3Rpb25UYWdTdWdnZXN0aW9ufSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1TdWdnZXN0aW9uVGFnU3VnZ2VzdGlvbiBleHRlbmRzIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlU3VnZ2VzdGlvblRhZ1N1Z2dlc3Rpb24geyB9XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NSZXNvdXJjZVZpZGVvU3RyZWFtfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdFJlc3VsdEl0ZW1WaWRlb1N0cmVhbSBleHRlbmRzIE5neFl0ZEFwaVZpZGVvc1Jlc291cmNlVmlkZW9TdHJlYW0geyB9XG5cbi8qKlxuICogT3B0aW9ucyBmb3Ige0BsaW5rIE5neFl0ZEFwaVZpZGVvc1NlcnZpY2UjZGVsZXRlfVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0RlbGV0ZU9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlTdGFuZGFyZE9wdHMge1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBZb3VUdWJlIHZpZGVvIElEIGZvciB0aGUgcmVzb3VyY2UgdGhhdCBpcyBiZWluZyBkZWxldGVkXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2RlbGV0ZSNpZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpZDogc3RyaW5nO1xuICAvKipcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgb3B0aW9uYWwuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGNhbiBvbmx5IGJlIHVzZWQgaW4gYSBwcm9wZXJseSBhdXRob3JpemVkIHJlcXVlc3QuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGludGVuZGVkIGZvciBZb3VUdWJlIGNvbnRlbnQgcGFydG5lcnMuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2RlbGV0ZSNvbkJlaGFsZk9mQ29udGVudE93bmVyIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG9uQmVoYWxmT2ZDb250ZW50T3duZXI/OiBzdHJpbmc7XG59XG4vKipcbiAqIE9wdGlvbnMgZm9yIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NTZXJ2aWNlI2dldFJhdGluZ31cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdPcHRzIGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY09wdHMge1xuICAvKipcbiAgICogU3BlY2lmaWVzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgdGhlIFlvdVR1YmUgdmlkZW8gSUQocykgZm9yIHJldHJpZXZpbmcgcmF0aW5nIGRhdGFcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvZ2V0UmF0aW5nI2lkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBvcHRpb25hbC5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgY2FuIG9ubHkgYmUgdXNlZCBpbiBhIHByb3Blcmx5IGF1dGhvcml6ZWQgcmVxdWVzdC5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgaW50ZW5kZWQgZm9yIFlvdVR1YmUgY29udGVudCBwYXJ0bmVycy5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvZ2V0UmF0aW5nI29uQmVoYWxmT2ZDb250ZW50T3duZXIgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgb25CZWhhbGZPZkNvbnRlbnRPd25lcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NHZXRSYXRpbmdJdGVtIHtcbiAgLyoqXG4gICAqIFRoZSBJRCB0aGF0IFlvdVR1YmUgdXNlcyB0byB0byB1bmlxdWVseSBpZGVudGlmeSB0aGUgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvZ2V0UmF0aW5nI2l0ZW1zW10udmlkZW9JZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0lkPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHJhdGluZyB0aGF0IHRoZSBhdXRob3JpemVkIHVzZXIgZ2F2ZSB0byB0aGUgdmlkZW9cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvZ2V0UmF0aW5nI2l0ZW1zW10ucmF0aW5nIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHJhdGluZz86ICdkaXNsaWtlJyB8ICdsaWtlJyB8ICdub25lJyB8ICd1bnNwZWNpZmllZCc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvc0dldFJhdGluZ1Jlc3VsdCBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNSZXNvdXJjZSB7XG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgcmF0aW5ncyB0aGF0IG1hdGNoIHRoZSByZXF1ZXN0IGNyaXRlcmlhXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2dldFJhdGluZyNpdGVtc1tdIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGl0ZW1zPzogTmd4WXRkQXBpVmlkZW9zR2V0UmF0aW5nSXRlbVtdO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHtAbGluayBOZ3hZdGRBcGlWaWRlb3NTZXJ2aWNlI2xpc3R9XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zTGlzdE9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljT3B0cyB7XG4gIC8qKlxuICAgKiBJZGVudGlmaWVzIHRoZSBjaGFydCB0aGF0IHNob3VsZCBiZSByZXRyaWV2ZWQuXG4gICAqIEFjY2VwdGFibGUgdmFsdWVzOlxuICAgKiAtIGBtb3N0UG9wdWxhcmA6IFJldHVybiB0aGUgbW9zdCBwb3B1bGFyIHZpZGVvcyBmb3IgdGhlIHNwZWNpZmllZCBjb250ZW50IHJlZ2lvbiBhbmQgdmlkZW8gY2F0ZWdvcnkuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGEgZmlsdGVyIGFuZCBvbmx5IG9uZSBmaWx0ZXIgaXMgYWxsb3dlZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I2NoYXJ0IGZvciBtb3JlIGluZm8uXG4gICAqL1xuICBjaGFydD86ICdtb3N0UG9wdWxhcic7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiB0aGUgWW91VHViZSB2aWRlbyBJRChzKSBmb3IgdGhlIHJlc291cmNlKHMpIHRoYXQgYXJlIGJlaW5nIHJldHJpZXZlZC5cbiAgICogSW4gYSB2aWRlbyByZXNvdXJjZSwgdGhlIGBpZGAgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSB2aWRlbydzIElELlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBhIGZpbHRlciBhbmQgb25seSBvbmUgZmlsdGVyIGlzIGFsbG93ZWRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNpZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBpZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgQVBJIHRvIHJldHVybiB2aWRlb3MgdGhhdCBhcmUgbGlrZWQgb3IgZGlzbGlrZWQgYnkgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgKiBBY2NlcHRhYmxlIHZhbHVlczpcbiAgICogLSBgZGlzbGlrZWA6IFJldHVybnMgb25seSB2aWRlb3MgdGhhdCBhcmUgZGlzbGlrZWQgYnkgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgKiAtIGBsaWtlYDogUmV0dXJucyBvbmx5IHZpZGVvcyB0aGF0IGFyZSBsaWtlZCBieSB0aGUgYXV0aGVudGljYXRlZCB1c2VyXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGNhbiBvbmx5IGJlIHVzZWQgaW4gYSBwcm9wZXJseSBhdXRob3JpemVkIHJlcXVlc3QuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGEgZmlsdGVyIGFuZCBvbmx5IG9uZSBmaWx0ZXIgaXMgYWxsb3dlZFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I215UmF0aW5nIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG15UmF0aW5nPzogJ2Rpc2xpa2UnIHwgJ2xpa2UnO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBBUEkgdG8gcmV0dXJuIGxvY2FsaXplZCByZXNvdXJjZSBtZXRhZGF0YSBmb3IgYSBzcGVjaWZpYyBsYW5ndWFnZSB0aGF0IHRoZSBZb3VUdWJlIHdlYnNpdGUgc3VwcG9ydHMuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjaGwgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaGw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG1heGltdW0gaGVpZ2h0IG9mIHRoZSBlbWJlZGRlZCBZb3VUdWJlIHBsYXllciByZXR1cm5lZCBpbiB0aGUgYHBsYXllci5lbWJlZEh0bWxgIHByb3BlcnR5LlxuICAgKiBUaGlzIHBhcmFtZXRlciBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IGEgaGVpZ2h0IGFwcHJvcHJpYXRlIGZvciB5b3VyIGFwcCdzIGxheW91dC5cbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNtYXhIZWlnaHQgZm9yIG1vcmUgaW5mb1xuICAgKiBOb3RlOiBJZiB0aGUgYG1heFdpZHRoYCBwcm9wZXJ0eSBpcyBhbHNvIHNwZWNpZmllZCwgdGhlIHBsYXllciBtYXkgYmUgc2hvcnRlclxuICAgKiB0aGFuIHRoZSBgbWF4SGVpZ2h0YCBpbiBvcmRlciB0byBub3QgdmlvbGF0ZSB0aGUgbWF4aW11bSB3aWR0aC5cbiAgICogQWNjZXB0YWJsZSB2YWx1ZXMgYXJlIDcyIHRvIDgxOTIsIGluY2x1c2l2ZS5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNtYXhIZWlnaHQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgbWF4SGVpZ2h0PzogbnVtYmVyO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtYXhpbXVtIHJlc3VsdHMgdGhhdCBzaG91bGQgYmUgcmV0dXJuZWQuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIHRvIGJlIHVzZWQgZm9yIHRoZSBgbXlSYXRpbmdgIHBhcmFtZXRlciwgYnV0IHNob3VsZCBub3RcbiAgICogYmUgdXNlZCB3aXRoIHRoZSBgaWRgIHBhcmFtZXRlci5cbiAgICogQWNjZXB0YWJsZSB2YWx1ZXM6IDEgdG8gNTAsIGluY2x1c2l2ZS4gNSBpcyB0aGUgZGVmYXVsdCBudW1iZXIuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjbWF4UmVzdWx0cyBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBtYXhSZXN1bHRzPzogbnVtYmVyO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBlbWJlZGRlZCBZb3VUdWJlIHBsYXllciByZXR1cm5lZCBpbiB0aGUgYHBsYXllci5lbWJlZEh0bWxgIHByb3BlcnR5LlxuICAgKiBUaGlzIHBhcmFtZXRlciBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IGEgd2lkdGggYXBwcm9wcmlhdGUgZm9yIHlvdXIgYXBwJ3MgbGF5b3V0LlxuICAgKiBOb3RlOiBJZiB0aGUgYG1heEhlaWdodGAgcHJvcGVydHkgaXMgYWxzbyBzcGVjaWZpZWQsIHRoZSBwbGF5ZXIgbWF5IGJlIHNob3J0ZXJcbiAgICogdGhhbiB0aGUgYG1heFdpZHRoYCBpbiBvcmRlciB0byBub3QgdmlvbGF0ZSB0aGUgbWF4aW11bSB3aWR0aC5cbiAgICogQWNjZXB0YWJsZSB2YWx1ZXMgYXJlIDcyIHRvIDgxOTIsIGluY2x1c2l2ZS5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNtYXhXaWR0aGZvciBtb3JlIGluZm9cbiAgICovXG4gIG1heFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIHJlcXVlc3QncyBhdXRob3JpemF0aW9uIGNyZWRlbnRpYWxzIGlkZW50aWZ5IGEgWW91VHViZSBDTVMgdXNlciB3aG8gaXNcbiAgICogYWN0aW5nIG9uIGJlaGFsZiBvZiB0aGUgY29udGVudCBvd25lciBzcGVjaWZpZWQgaW4gdGhlIHBhcmFtZXRlciB2YWx1ZS5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvbGlzdCNvbkJlaGFsZk9mQ29udGVudE93bmVyIGZvciBtb3JlIGluZm9cbiAgICovXG4gIG9uQmVoYWxmT2ZDb250ZW50T3duZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJZGVudGlmaWVzIGEgc3BlY2lmaWMgcGFnZSBpbiB0aGUgcmVzdWx0IHNldCB0aGF0IHNob3VsZCBiZSByZXR1cm5lZC5cbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBgbXlSYXRpbmdgIHBhcmFtZXRlciwgYnV0IGlzIG5vdCB0byBiZSB1c2VkXG4gICAqIHdpdGggdGhlIGBpZGAgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9saXN0I3BhZ2VUb2tlbiBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBwYWdlVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUZWxscyB0aGUgQVBJIHRvIHNlbGVjdCBhIHZpZGVvIGNoYXJ0IGF2YWlsYWJsZSBpbiB0aGUgc3BlY2lmaWMgcmVnaW9uLlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyB0byBvbmx5IGJlIHVzZWQgd2l0aCB0aGUgYGNoYXJ0YCBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjcmVnaW9uQ29kZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICByZWdpb25Db2RlPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhpcyBwcm9wZXJ0eSBpZGVudGlmaWVzIHRoZSB2aWRlbyBjYXRlZ29yeSBmb3Igd2hpY2ggdGhlIHZpZGVvIHNob3VsZCBiZSByZXRyaWV2ZWQuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIHRvIG9ubHkgYmUgdXNlZCB3aXRoIHRoZSBgY2hhcnRgIHBhcmFtZXRlci5cbiAgICogQnkgZGVmYXVsdCwgY2hhcnRzIGFyZSBub3QgcmVzdHJpY3RlZCB0byBhIHBhcnRpY3VsYXIgY2F0ZWdvcnkuXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL2xpc3QjcmVnaW9uQ29kZSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB2aWRlb0NhdGVnb3J5QnlJZD86IHN0cmluZztcbn1cbi8qKlxuICogT3B0aW9ucyBmb3Ige0BsaW5rIE5neFl0ZEFwaVZpZGVvc1NlcnZpY2UjcmF0ZX1cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSYXRlT3B0cyBleHRlbmRzIE5neFl0ZEFwaVN0YW5kYXJkT3B0cyB7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIFlvdVR1YmUgdmlkZW8gSUQgdGhhdCBpcyBiZWluZyByYXRlZCBvciBoYXZpbmcgaXRzIHJhdGluZyByZW1vdmVkXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL3JhdGUjaWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgcmF0aW5nIHRvIHJlY29yZFxuICAgKiBBY2NlcHRhYmxlIHZhbHVlczpcbiAgICogLSBgZGlzbGlrZWA6IFJlY29yZHMgdGhhdCB0aGUgYXV0aGVudGljYXRlZCB1c2VyIGRpc2xpa2VkIHRoZSB2aWRlb1xuICAgKiAtIGBsaWtlYDogUmVjb3JkcyB0aGF0IHRoZSBhdXRoZW50aWNhdGVkIHVzZXIgbGlrZWQgdGhlIHZpZGVvXG4gICAqIC0gYG5vbmVgOiBSZW1vdmVzIGFueSByYXRpbmcgdGhhdCB0aGUgYXV0aGVudGljYXRlZCB1c2VyIHByZXZpb3VzbHkgc2V0IGZvciB0aGUgdmlkZW9cbiAgICovXG4gIHJhdGluZzogJ2Rpc2xpa2UnIHwgJ2xpa2UnIHwgJ25vbmUnO1xufVxuLyoqXG4gKiBPcHRpb25zIGZvciB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zU2VydmljZSNyZXBvcnRBYnVzZX1cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZU9wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlTdGFuZGFyZE9wdHMge1xuICAvKipcbiAgICogTm90ZTogVGhpcyBwYXJhbWV0ZXIgaXMgb3B0aW9uYWwuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGNhbiBvbmx5IGJlIHVzZWQgaW4gYSBwcm9wZXJseSBhdXRob3JpemVkIHJlcXVlc3QuXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIGludGVuZGVkIGZvciBZb3VUdWJlIGNvbnRlbnQgcGFydG5lcnMuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvdmlkZW9zL3JlcG9ydEFidXNlI29uQmVoYWxmT2ZDb250ZW50T3duZXIgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgb25CZWhhbGZPZkNvbnRlbnRPd25lcj86IHN0cmluZztcbn1cbi8qKlxuICogT3B0aW9ucyBmb3IgdGhlIHJlcXVlc3QgYm9keSBvZiB7QGxpbmsgTmd4WXRkQXBpVmlkZW9zU2VydmljZSNyZXBvcnRBYnVzZX1cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlWaWRlb3NSZXBvcnRBYnVzZUJvZHkge1xuICAvKipcbiAgICogVGhlIHZpZGVvIHRoYXQgaXMgYmVpbmcgcmVwb3J0ZWQgZm9yIGFidXNpdmUgY29udGVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9yZXBvcnRBYnVzZSN2aWRlb0lkIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHZpZGVvSWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgcmVhc29uIHRoYXQgdGhlIHZpZGVvIGlzIGJlaW5nIHJlcG9ydGVkIGZvciBjb250YWluaW5nIGFidXNpdmUgY29udGVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy9yZXBvcnRBYnVzZSNyZWFzb25JZCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICByZWFzb25JZDogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBzZWNvbmRhcnkgcmVhc29uIHRoYXQgdGhlIHZpZGVvIGlzIGJlaW5nIHJlcG9ydGVkIGZvciBjb250YWluaW5nIGFidXNpdmUgY29udGVudFxuICAgKlxuICAgKiBTZWUgemh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvcmVwb3J0QWJ1c2Ujc2Vjb25kYXJ5UmVhc29uSWQgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgc2Vjb25kYXJ5UmVhc29uSWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBQcm92aWRlcyBhbnkgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0aGF0IHRoZSByZXBvcnRlciB3YW50cyB0byBhZGRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy92aWRlb3MvcmVwb3J0QWJ1c2UjY29tbWVudHMgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgY29tbWVudHM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJZGVudGlmaWVzIGEgbGFuZ3VhZ2Ugc3Bva2VuIGJ5IHRoZSByZXBvcnRlclxuICAgKi9cbiAgbGFuZ3VhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9zVXBkYXRlT3B0cyBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNPcHRzIHtcbiAgLyoqXG4gICAqIE5vdGU6IFRoaXMgcGFyYW1ldGVyIGlzIG9wdGlvbmFsLlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSB1c2VkIGluIGEgcHJvcGVybHkgYXV0aG9yaXplZCByZXF1ZXN0LlxuICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyBpbnRlbmRlZCBmb3IgWW91VHViZSBjb250ZW50IHBhcnRuZXJzLlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3ZpZGVvcy91cGRhdGUjb25CZWhhbGZPZkNvbnRlbnRPd25lciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBvbkJlaGFsZk9mQ29udGVudE93bmVyPzogc3RyaW5nO1xufVxuIl19