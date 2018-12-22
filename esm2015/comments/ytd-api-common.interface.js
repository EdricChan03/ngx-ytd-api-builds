/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tb24uaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvY29tbWVudHMvIiwic291cmNlcyI6WyJ5dGQtYXBpLWNvbW1vbi5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSwyQ0FtQ0M7Ozs7Ozs7SUE5QkMsNENBQXFCOzs7OztJQUlyQix5Q0FBa0I7Ozs7OztJQUtsQix1Q0FBZ0I7Ozs7O0lBSWhCLG9DQUFhOzs7OztJQUliLDRDQUFzQjs7Ozs7OztJQU10QiwwQ0FBbUI7Ozs7Ozs7SUFNbkIsdUNBQWdCOzs7Ozs7QUFLbEIsMENBTUM7Ozs7Ozs7SUFEQyxvQ0FBYzs7Ozs7QUFFaEIsOENBU0M7Ozs7OztJQUxDLHdDQUFjOzs7OztJQUlkLHdDQUFjOzs7Ozs7QUFNaEIsNENBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN0YW5kYXJkIHBhcmFtZXRlcnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTdGFuZGFyZE9wdHMge1xuICAvKipcbiAgICogVGhlIGFjY2VzcyB0b2tlbiBmcm9tIEdvb2dsZSdzIE9BdXRoIDIuMCBBUElcbiAgICogVGhpcyBpcyB0byBiZSBwYXNzZWQgdG8gdGhlIGBBdXRob3JpemF0aW9uYCBIVFRQIGhlYWRlclxuICAgKi9cbiAgYWNjZXNzVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqL1xuICBjYWxsYmFjaz86IHN0cmluZztcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB3aGljaCBmaWVsZHMgdG8gcmV0dXJuXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2dldHRpbmctc3RhcnRlZCNwYXJ0aWFsIGZvciBtb3JlIGluZm9cbiAgICovXG4gIGZpZWxkcz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBBUEkga2V5IGZvciBhY2Nlc3NpbmcgdGhlIEFQSVxuICAgKi9cbiAga2V5Pzogc3RyaW5nO1xuICAvKipcbiAgICogV2hldGhlciB0byByZXR1cm4gdGhlIHJlc3BvbnNlIHdpdGggbGluZSBicmVha3MgJiBpbmRlbnRhdGlvbnNcbiAgICovXG4gIHByZXR0eVByaW50PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEdpdmVzIHRoZSBhYmlsaXR5IHRvIGVuZm9yY2UgcGVyLXVzZXIgcXVvdGFzIGZyb20gYSBzZXJ2ZXItc2lkZSBhcHBsaWNhdGlvbiBldmVuXG4gICAqIGluIGNhc2VzIHdoZW4gdGhlIHVzZXIncyBJUCBhZGRyZXNzIGlzIHVua25vd24uXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc3RhbmRhcmRfcGFyYW1ldGVycyNxdW90YVVzZXIgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgcXVvdGFVc2VyPzogc3RyaW5nO1xuICAvKipcbiAgICogR2l2ZXMgdGhlIGFiaWxpdHkgdG8gZW5mb3JjZSBwZXItdXNlciBxdW90YXMgd2hlbiBjYWxsaW5nIHRoZSBBUEkgZnJvbSBhIHNlcnZlci1zaWRlXG4gICAqIGFwcGxpY2F0aW9uLlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3N0YW5kYXJkX3BhcmFtZXRlcnMjdXNlcklwIGZvciBtb3JlIGluZm9cbiAgICovXG4gIHVzZXJJcD86IHN0cmluZztcbn1cbi8qKlxuKiBHZW5lcmljIG9wdGlvbnNcbiovXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUdlbmVyaWNPcHRzIGV4dGVuZHMgTmd4WXRkQXBpU3RhbmRhcmRPcHRzIHtcbiAgLyoqXG4gICAqIFBhcnRzIG9mIHRoZSByZXN1bHQgdG8gc2hvd1xuICAgKiBEZWZhdWx0cyB0byBgc25pcHBldCxpZGBcbiAgICovXG4gIHBhcnQ/OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUdlbmVyaWNSZXNvdXJjZSB7XG4gIC8qKlxuICAgKiBUaGUgRVRhZyBvZiB0aGUgcmVxdWVzdFxuICAgKi9cbiAgZXRhZz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBBUEkncyByZXNvdXJjZSB0eXBlXG4gICAqL1xuICBraW5kPzogc3RyaW5nO1xufVxuLyoqXG4qIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpR2VuZXJpY1Jlc291cmNlfSBpbnN0ZWFkXG4qL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY1Jlc291cmNlIHtcbn1cbiJdfQ==