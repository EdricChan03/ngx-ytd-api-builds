/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Standard parameters
 * @record
 */
export function NgxYtdApiStandardOpts() { }
if (false) {
    /**
     * The access token from Google's OAuth 2.0 API
     * This is to be passed to the `Authorization` HTTP header
     * @type {?|undefined}
     */
    NgxYtdApiStandardOpts.prototype.accessToken;
    /**
     * The callback function.
     * @type {?|undefined}
     */
    NgxYtdApiStandardOpts.prototype.callback;
    /**
     * Specifies which fields to return
     * See https://developers.google.com/youtube/v3/getting-started#partial for more info
     * @type {?|undefined}
     */
    NgxYtdApiStandardOpts.prototype.fields;
    /**
     * The API key for accessing the API
     * @type {?|undefined}
     */
    NgxYtdApiStandardOpts.prototype.key;
    /**
     * Whether to return the response with line breaks & indentations
     * @type {?|undefined}
     */
    NgxYtdApiStandardOpts.prototype.prettyPrint;
    /**
     * Gives the ability to enforce per-user quotas from a server-side application even
     * in cases when the user's IP address is unknown.
     * See https://developers.google.com/youtube/v3/docs/standard_parameters#quotaUser for more info
     * @type {?|undefined}
     */
    NgxYtdApiStandardOpts.prototype.quotaUser;
    /**
     * Gives the ability to enforce per-user quotas when calling the API from a server-side
     * application.
     * See https://developers.google.com/youtube/v3/docs/standard_parameters#userIp for more info
     * @type {?|undefined}
     */
    NgxYtdApiStandardOpts.prototype.userIp;
}
/**
 * Generic options
 * @record
 */
export function NgxYtdApiGenericOpts() { }
if (false) {
    /**
     * Parts of the result to show
     * Defaults to `snippet,id`
     * @type {?|undefined}
     */
    NgxYtdApiGenericOpts.prototype.part;
}
/**
 * @record
 */
export function NgxYtdApiGenericResource() { }
if (false) {
    /**
     * The ETag of the request
     * @type {?|undefined}
     */
    NgxYtdApiGenericResource.prototype.etag;
    /**
     * The API's resource type
     * @type {?|undefined}
     */
    NgxYtdApiGenericResource.prototype.kind;
}
/**
 * @deprecated Use {\@link NgxYtdApiGenericResource} instead
 * @record
 */
export function NgxYtdApiGenericResult() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb3JlLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteXRkLWFwaS8iLCJzb3VyY2VzIjpbImNvcmUveXRkLWFwaS1jb3JlLmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSwyQ0FtQ0M7Ozs7Ozs7SUE5QkMsNENBQXFCOzs7OztJQUlyQix5Q0FBa0I7Ozs7OztJQUtsQix1Q0FBZ0I7Ozs7O0lBSWhCLG9DQUFhOzs7OztJQUliLDRDQUFzQjs7Ozs7OztJQU10QiwwQ0FBbUI7Ozs7Ozs7SUFNbkIsdUNBQWdCOzs7Ozs7QUFLbEIsMENBTUM7Ozs7Ozs7SUFEQyxvQ0FBYzs7Ozs7QUFHaEIsOENBU0M7Ozs7OztJQUxDLHdDQUFjOzs7OztJQUlkLHdDQUFjOzs7Ozs7QUFPaEIsNENBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdGFuZGFyZCBwYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU3RhbmRhcmRPcHRzIHtcbiAgLyoqXG4gICAqIFRoZSBhY2Nlc3MgdG9rZW4gZnJvbSBHb29nbGUncyBPQXV0aCAyLjAgQVBJXG4gICAqIFRoaXMgaXMgdG8gYmUgcGFzc2VkIHRvIHRoZSBgQXV0aG9yaXphdGlvbmAgSFRUUCBoZWFkZXJcbiAgICovXG4gIGFjY2Vzc1Rva2VuPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgY2FsbGJhY2s/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgd2hpY2ggZmllbGRzIHRvIHJldHVyblxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9nZXR0aW5nLXN0YXJ0ZWQjcGFydGlhbCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBmaWVsZHM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgQVBJIGtleSBmb3IgYWNjZXNzaW5nIHRoZSBBUElcbiAgICovXG4gIGtleT86IHN0cmluZztcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmV0dXJuIHRoZSByZXNwb25zZSB3aXRoIGxpbmUgYnJlYWtzICYgaW5kZW50YXRpb25zXG4gICAqL1xuICBwcmV0dHlQcmludD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBHaXZlcyB0aGUgYWJpbGl0eSB0byBlbmZvcmNlIHBlci11c2VyIHF1b3RhcyBmcm9tIGEgc2VydmVyLXNpZGUgYXBwbGljYXRpb24gZXZlblxuICAgKiBpbiBjYXNlcyB3aGVuIHRoZSB1c2VyJ3MgSVAgYWRkcmVzcyBpcyB1bmtub3duLlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3N0YW5kYXJkX3BhcmFtZXRlcnMjcXVvdGFVc2VyIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHF1b3RhVXNlcj86IHN0cmluZztcbiAgLyoqXG4gICAqIEdpdmVzIHRoZSBhYmlsaXR5IHRvIGVuZm9yY2UgcGVyLXVzZXIgcXVvdGFzIHdoZW4gY2FsbGluZyB0aGUgQVBJIGZyb20gYSBzZXJ2ZXItc2lkZVxuICAgKiBhcHBsaWNhdGlvbi5cbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zdGFuZGFyZF9wYXJhbWV0ZXJzI3VzZXJJcCBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICB1c2VySXA/OiBzdHJpbmc7XG59XG4vKipcbiAqIEdlbmVyaWMgb3B0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUdlbmVyaWNPcHRzIGV4dGVuZHMgTmd4WXRkQXBpU3RhbmRhcmRPcHRzIHtcbiAgLyoqXG4gICAqIFBhcnRzIG9mIHRoZSByZXN1bHQgdG8gc2hvd1xuICAgKiBEZWZhdWx0cyB0byBgc25pcHBldCxpZGBcbiAgICovXG4gIHBhcnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpR2VuZXJpY1Jlc291cmNlIHtcbiAgLyoqXG4gICAqIFRoZSBFVGFnIG9mIHRoZSByZXF1ZXN0XG4gICAqL1xuICBldGFnPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIEFQSSdzIHJlc291cmNlIHR5cGVcbiAgICovXG4gIGtpbmQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBOZ3hZdGRBcGlHZW5lcmljUmVzb3VyY2V9IGluc3RlYWRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY1Jlc291cmNlIHt9XG4iXX0=