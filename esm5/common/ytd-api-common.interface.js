/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Standard parameters
 * @record
 */
export function NgxYtdApiStandardParams() { }
if (false) {
    /**
     * Whether to pass the access token with a query parameter instead of the `Authorization` HTTP header
     * - Default value: `false`
     * - Note: This value is an unofficial standard query parameter and is
     * only used for conditionally setting the `access_token` query parameter for an API endpoint.
     * @type {?|undefined}
     */
    NgxYtdApiStandardParams.prototype.accessTokenUsesParam;
    /**
     * The access token from Google's OAuth 2.0 API
     *
     * This is to be passed to the `Authorization` HTTP header
     * @type {?|undefined}
     */
    NgxYtdApiStandardParams.prototype.accessToken;
    /**
     * The callback function.
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/standard_parameters#callback)
     * @type {?|undefined}
     */
    NgxYtdApiStandardParams.prototype.callback;
    /**
     * Specifies which fields to return
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/standard_parameters#fields)
     * @type {?|undefined}
     */
    NgxYtdApiStandardParams.prototype.fields;
    /**
     * The API key for accessing the API
     * - Note: This is **required** unless you're using an OAuth 2.0 token
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/standard_parameters#key)
     * @type {?|undefined}
     */
    NgxYtdApiStandardParams.prototype.key;
    /**
     * Whether to return the response with line breaks & indentations
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/standard_parameters#prettyPrint)
     * @type {?|undefined}
     */
    NgxYtdApiStandardParams.prototype.prettyPrint;
    /**
     * Gives the ability to enforce per-user quotas from a server-side application even
     * in cases when the user's IP address is unknown.
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/standard_parameters#quotaUser)
     * @type {?|undefined}
     */
    NgxYtdApiStandardParams.prototype.quotaUser;
    /**
     * Gives the ability to enforce per-user quotas when calling the API from a server-side
     * application.
     * @see [Developer docs](https://developers.google.com/youtube/v3/docs/standard_parameters#userIp)
     * @type {?|undefined}
     */
    NgxYtdApiStandardParams.prototype.userIp;
}
/**
 * @deprecated Use {\@link NgxYtdApiStandardParams}
 * @record
 */
export function NgxYtdApiStandardOpts() { }
/**
 * Standard query parameters with the `part` parameter that most YouTube Data v3 API endpoints use
 * @record
 */
export function NgxYtdApiStandardWithPartParams() { }
if (false) {
    /**
     * Parts of the result to show
     * Defaults to `snippet,id`
     * @type {?|undefined}
     */
    NgxYtdApiStandardWithPartParams.prototype.part;
}
/**
 * @deprecated Use {\@link NgxYtdApiStandardWithPartParams}
 * @record
 */
export function NgxYtdApiGenericOpts() { }
/**
 * A generic resource interface that `ngx-ytd-api`'s interfaces extend from
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
 * A generic response interface that `ngx-ytd-api`'s interfaces extend from as the return type
 * @record
 */
export function NgxYtdApiGenericResponse() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tb24uaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvY29tbW9uLyIsInNvdXJjZXMiOlsieXRkLWFwaS1jb21tb24uaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsNkNBK0NDOzs7Ozs7Ozs7SUF4Q0MsdURBQStCOzs7Ozs7O0lBTS9CLDhDQUFxQjs7Ozs7O0lBS3JCLDJDQUFrQjs7Ozs7O0lBS2xCLHlDQUFnQjs7Ozs7OztJQU1oQixzQ0FBYTs7Ozs7O0lBS2IsOENBQXNCOzs7Ozs7O0lBTXRCLDRDQUFtQjs7Ozs7OztJQU1uQix5Q0FBZ0I7Ozs7OztBQU1sQiwyQ0FBMEU7Ozs7O0FBSTFFLHFEQU1DOzs7Ozs7O0lBREMsK0NBQWM7Ozs7OztBQU1oQiwwQ0FBZ0Y7Ozs7O0FBS2hGLDhDQVNDOzs7Ozs7SUFMQyx3Q0FBYzs7Ozs7SUFJZCx3Q0FBYzs7Ozs7O0FBT2hCLDhDQUNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdGFuZGFyZCBwYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU3RhbmRhcmRQYXJhbXMge1xuICAvKipcbiAgICogV2hldGhlciB0byBwYXNzIHRoZSBhY2Nlc3MgdG9rZW4gd2l0aCBhIHF1ZXJ5IHBhcmFtZXRlciBpbnN0ZWFkIG9mIHRoZSBgQXV0aG9yaXphdGlvbmAgSFRUUCBoZWFkZXJcbiAgICogLSBEZWZhdWx0IHZhbHVlOiBgZmFsc2VgXG4gICAqIC0gTm90ZTogVGhpcyB2YWx1ZSBpcyBhbiB1bm9mZmljaWFsIHN0YW5kYXJkIHF1ZXJ5IHBhcmFtZXRlciBhbmQgaXNcbiAgICogb25seSB1c2VkIGZvciBjb25kaXRpb25hbGx5IHNldHRpbmcgdGhlIGBhY2Nlc3NfdG9rZW5gIHF1ZXJ5IHBhcmFtZXRlciBmb3IgYW4gQVBJIGVuZHBvaW50LlxuICAgKi9cbiAgYWNjZXNzVG9rZW5Vc2VzUGFyYW0/OiBib29sZWFuO1xuICAvKipcbiAgICogVGhlIGFjY2VzcyB0b2tlbiBmcm9tIEdvb2dsZSdzIE9BdXRoIDIuMCBBUElcbiAgICpcbiAgICogVGhpcyBpcyB0byBiZSBwYXNzZWQgdG8gdGhlIGBBdXRob3JpemF0aW9uYCBIVFRQIGhlYWRlclxuICAgKi9cbiAgYWNjZXNzVG9rZW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEBzZWUgW0RldmVsb3BlciBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc3RhbmRhcmRfcGFyYW1ldGVycyNjYWxsYmFjaylcbiAgICovXG4gIGNhbGxiYWNrPzogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHdoaWNoIGZpZWxkcyB0byByZXR1cm5cbiAgICogQHNlZSBbRGV2ZWxvcGVyIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zdGFuZGFyZF9wYXJhbWV0ZXJzI2ZpZWxkcylcbiAgICovXG4gIGZpZWxkcz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBBUEkga2V5IGZvciBhY2Nlc3NpbmcgdGhlIEFQSVxuICAgKiAtIE5vdGU6IFRoaXMgaXMgKipyZXF1aXJlZCoqIHVubGVzcyB5b3UncmUgdXNpbmcgYW4gT0F1dGggMi4wIHRva2VuXG4gICAqIEBzZWUgW0RldmVsb3BlciBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc3RhbmRhcmRfcGFyYW1ldGVycyNrZXkpXG4gICAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJldHVybiB0aGUgcmVzcG9uc2Ugd2l0aCBsaW5lIGJyZWFrcyAmIGluZGVudGF0aW9uc1xuICAgKiBAc2VlIFtEZXZlbG9wZXIgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3N0YW5kYXJkX3BhcmFtZXRlcnMjcHJldHR5UHJpbnQpXG4gICAqL1xuICBwcmV0dHlQcmludD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBHaXZlcyB0aGUgYWJpbGl0eSB0byBlbmZvcmNlIHBlci11c2VyIHF1b3RhcyBmcm9tIGEgc2VydmVyLXNpZGUgYXBwbGljYXRpb24gZXZlblxuICAgKiBpbiBjYXNlcyB3aGVuIHRoZSB1c2VyJ3MgSVAgYWRkcmVzcyBpcyB1bmtub3duLlxuICAgKiBAc2VlIFtEZXZlbG9wZXIgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3N0YW5kYXJkX3BhcmFtZXRlcnMjcXVvdGFVc2VyKVxuICAgKi9cbiAgcXVvdGFVc2VyPzogc3RyaW5nO1xuICAvKipcbiAgICogR2l2ZXMgdGhlIGFiaWxpdHkgdG8gZW5mb3JjZSBwZXItdXNlciBxdW90YXMgd2hlbiBjYWxsaW5nIHRoZSBBUEkgZnJvbSBhIHNlcnZlci1zaWRlXG4gICAqIGFwcGxpY2F0aW9uLlxuICAgKiBAc2VlIFtEZXZlbG9wZXIgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3N0YW5kYXJkX3BhcmFtZXRlcnMjdXNlcklwKVxuICAgKi9cbiAgdXNlcklwPzogc3RyaW5nO1xufVxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaVN0YW5kYXJkUGFyYW1zfVxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVN0YW5kYXJkT3B0cyBleHRlbmRzIE5neFl0ZEFwaVN0YW5kYXJkUGFyYW1zIHsgfVxuLyoqXG4gKiBTdGFuZGFyZCBxdWVyeSBwYXJhbWV0ZXJzIHdpdGggdGhlIGBwYXJ0YCBwYXJhbWV0ZXIgdGhhdCBtb3N0IFlvdVR1YmUgRGF0YSB2MyBBUEkgZW5kcG9pbnRzIHVzZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVN0YW5kYXJkV2l0aFBhcnRQYXJhbXMgZXh0ZW5kcyBOZ3hZdGRBcGlTdGFuZGFyZFBhcmFtcyB7XG4gIC8qKlxuICAgKiBQYXJ0cyBvZiB0aGUgcmVzdWx0IHRvIHNob3dcbiAgICogRGVmYXVsdHMgdG8gYHNuaXBwZXQsaWRgXG4gICAqL1xuICBwYXJ0Pzogc3RyaW5nO1xufVxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE5neFl0ZEFwaVN0YW5kYXJkV2l0aFBhcnRQYXJhbXN9XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpR2VuZXJpY09wdHMgZXh0ZW5kcyBOZ3hZdGRBcGlTdGFuZGFyZFdpdGhQYXJ0UGFyYW1zIHt9XG5cbi8qKlxuICogQSBnZW5lcmljIHJlc291cmNlIGludGVyZmFjZSB0aGF0IGBuZ3gteXRkLWFwaWAncyBpbnRlcmZhY2VzIGV4dGVuZCBmcm9tXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpR2VuZXJpY1Jlc291cmNlIHtcbiAgLyoqXG4gICAqIFRoZSBFVGFnIG9mIHRoZSByZXF1ZXN0XG4gICAqL1xuICBldGFnPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIEFQSSdzIHJlc291cmNlIHR5cGVcbiAgICovXG4gIGtpbmQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBnZW5lcmljIHJlc3BvbnNlIGludGVyZmFjZSB0aGF0IGBuZ3gteXRkLWFwaWAncyBpbnRlcmZhY2VzIGV4dGVuZCBmcm9tIGFzIHRoZSByZXR1cm4gdHlwZVxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaUdlbmVyaWNSZXNwb25zZSBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNSZXNvdXJjZSB7XG59XG4iXX0=