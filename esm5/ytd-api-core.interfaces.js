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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb3JlLmludGVyZmFjZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteXRkLWFwaS8iLCJzb3VyY2VzIjpbInl0ZC1hcGktY29yZS5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsMkNBbUNDOzs7Ozs7O0lBOUJDLDRDQUFxQjs7Ozs7SUFJckIseUNBQWtCOzs7Ozs7SUFLbEIsdUNBQWdCOzs7OztJQUloQixvQ0FBYTs7Ozs7SUFJYiw0Q0FBc0I7Ozs7Ozs7SUFNdEIsMENBQW1COzs7Ozs7O0lBTW5CLHVDQUFnQjs7Ozs7O0FBS2xCLDBDQU1DOzs7Ozs7O0lBREMsb0NBQWM7Ozs7O0FBR2hCLDhDQVNDOzs7Ozs7SUFMQyx3Q0FBYzs7Ozs7SUFJZCx3Q0FBYzs7Ozs7O0FBT2hCLDRDQUEyRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3RhbmRhcmQgcGFyYW1ldGVyc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVN0YW5kYXJkT3B0cyB7XG4gIC8qKlxuICAgKiBUaGUgYWNjZXNzIHRva2VuIGZyb20gR29vZ2xlJ3MgT0F1dGggMi4wIEFQSVxuICAgKiBUaGlzIGlzIHRvIGJlIHBhc3NlZCB0byB0aGUgYEF1dGhvcml6YXRpb25gIEhUVFAgaGVhZGVyXG4gICAqL1xuICBhY2Nlc3NUb2tlbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICovXG4gIGNhbGxiYWNrPzogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHdoaWNoIGZpZWxkcyB0byByZXR1cm5cbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZ2V0dGluZy1zdGFydGVkI3BhcnRpYWwgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgZmllbGRzPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIEFQSSBrZXkgZm9yIGFjY2Vzc2luZyB0aGUgQVBJXG4gICAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJldHVybiB0aGUgcmVzcG9uc2Ugd2l0aCBsaW5lIGJyZWFrcyAmIGluZGVudGF0aW9uc1xuICAgKi9cbiAgcHJldHR5UHJpbnQ/OiBib29sZWFuO1xuICAvKipcbiAgICogR2l2ZXMgdGhlIGFiaWxpdHkgdG8gZW5mb3JjZSBwZXItdXNlciBxdW90YXMgZnJvbSBhIHNlcnZlci1zaWRlIGFwcGxpY2F0aW9uIGV2ZW5cbiAgICogaW4gY2FzZXMgd2hlbiB0aGUgdXNlcidzIElQIGFkZHJlc3MgaXMgdW5rbm93bi5cbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zdGFuZGFyZF9wYXJhbWV0ZXJzI3F1b3RhVXNlciBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBxdW90YVVzZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHaXZlcyB0aGUgYWJpbGl0eSB0byBlbmZvcmNlIHBlci11c2VyIHF1b3RhcyB3aGVuIGNhbGxpbmcgdGhlIEFQSSBmcm9tIGEgc2VydmVyLXNpZGVcbiAgICogYXBwbGljYXRpb24uXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc3RhbmRhcmRfcGFyYW1ldGVycyN1c2VySXAgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgdXNlcklwPzogc3RyaW5nO1xufVxuLyoqXG4gKiBHZW5lcmljIG9wdGlvbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlHZW5lcmljT3B0cyBleHRlbmRzIE5neFl0ZEFwaVN0YW5kYXJkT3B0cyB7XG4gIC8qKlxuICAgKiBQYXJ0cyBvZiB0aGUgcmVzdWx0IHRvIHNob3dcbiAgICogRGVmYXVsdHMgdG8gYHNuaXBwZXQsaWRgXG4gICAqL1xuICBwYXJ0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUdlbmVyaWNSZXNvdXJjZSB7XG4gIC8qKlxuICAgKiBUaGUgRVRhZyBvZiB0aGUgcmVxdWVzdFxuICAgKi9cbiAgZXRhZz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBBUEkncyByZXNvdXJjZSB0eXBlXG4gICAqL1xuICBraW5kPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTmd4WXRkQXBpR2VuZXJpY1Jlc291cmNlfSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpR2VuZXJpY1Jlc3VsdCBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNSZXNvdXJjZSB7fVxuIl19