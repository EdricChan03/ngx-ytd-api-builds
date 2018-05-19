/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generic options
 * @record
 */
export function NgxYtdApiGenericOpts() { }
function NgxYtdApiGenericOpts_tsickle_Closure_declarations() {
    /**
     * The API key.
     * \@todo Add support for adding an API key via `forRoot` or `providers`
     * @type {?}
     */
    NgxYtdApiGenericOpts.prototype.apiKey;
}
/**
 * @record
 */
export function NgxYtdApiSearchOpts() { }
function NgxYtdApiSearchOpts_tsickle_Closure_declarations() {
    /**
     * The channel ID to search videos from
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.channelId;
    /**
     * Maximum results for video searching
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.maxResults;
}
/**
 * @record
 */
export function NgxYtdApiVideoSearchOpts() { }
function NgxYtdApiVideoSearchOpts_tsickle_Closure_declarations() {
    /**
     * Whether to make the video results be embeddable
     * @type {?|undefined}
     */
    NgxYtdApiVideoSearchOpts.prototype.videoEmbeddable;
    /**
     * The channel ID to search videos from
     * @type {?|undefined}
     */
    NgxYtdApiVideoSearchOpts.prototype.channelId;
}
/**
 * @record
 */
export function NgxYtdApiGenericResult() { }
function NgxYtdApiGenericResult_tsickle_Closure_declarations() {
    /**
     * The API's resource type
     * @type {?}
     */
    NgxYtdApiGenericResult.prototype.kind;
    /**
     * The ETag of the request
     * @type {?}
     */
    NgxYtdApiGenericResult.prototype.etag;
}
/**
 * @record
 */
export function NgxYtdApiSearchResult() { }
function NgxYtdApiSearchResult_tsickle_Closure_declarations() {
    /**
     * The id object contains info which can be used for uniquely identifing the resource
     * See the [documentation]{\@link https://developers.google.com/youtube/v3/docs/search#id} for more info
     * @type {?}
     */
    NgxYtdApiSearchResult.prototype.id;
    /**
     * The `snippet` object contains info on the search result
     * @type {?}
     */
    NgxYtdApiSearchResult.prototype.snippet;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS5pbnRlcmZhY2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJ5dGQtYXBpLmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2VuZXJpYyBvcHRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpR2VuZXJpY09wdHMge1xuXHQvKipcblx0ICogVGhlIEFQSSBrZXkuXG5cdCAqIEB0b2RvIEFkZCBzdXBwb3J0IGZvciBhZGRpbmcgYW4gQVBJIGtleSB2aWEgYGZvclJvb3RgIG9yIGBwcm92aWRlcnNgXG5cdCAqL1xuXHRhcGlLZXk6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoT3B0cyBleHRlbmRzIE5neFl0ZEFwaUdlbmVyaWNPcHRzIHtcblx0LyoqXG5cdCAqIFRoZSBjaGFubmVsIElEIHRvIHNlYXJjaCB2aWRlb3MgZnJvbVxuXHQgKi9cblx0Y2hhbm5lbElkPzogc3RyaW5nO1xuXHQvKipcblx0ICogTWF4aW11bSByZXN1bHRzIGZvciB2aWRlbyBzZWFyY2hpbmdcblx0ICovXG5cdG1heFJlc3VsdHM/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvU2VhcmNoT3B0cyBleHRlbmRzIE5neFl0ZEFwaVNlYXJjaE9wdHMge1xuXHQvKipcblx0ICogV2hldGhlciB0byBtYWtlIHRoZSB2aWRlbyByZXN1bHRzIGJlIGVtYmVkZGFibGVcblx0ICovXG5cdHZpZGVvRW1iZWRkYWJsZT86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBUaGUgY2hhbm5lbCBJRCB0byBzZWFyY2ggdmlkZW9zIGZyb21cblx0ICovXG5cdGNoYW5uZWxJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IHtcblx0LyoqXG5cdCAqIFRoZSBBUEkncyByZXNvdXJjZSB0eXBlXG5cdCAqL1xuXHRraW5kOiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBUaGUgRVRhZyBvZiB0aGUgcmVxdWVzdFxuXHQgKi9cblx0ZXRhZzogc3RyaW5nO1xufVxuLy8gUmVzdWx0IGludGVyZmFjZXNcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoUmVzdWx0IGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY1Jlc3VsdCB7XG5cdC8qKlxuXHQgKiBUaGUgaWQgb2JqZWN0IGNvbnRhaW5zIGluZm8gd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHVuaXF1ZWx5IGlkZW50aWZpbmcgdGhlIHJlc291cmNlXG5cdCAqIFNlZSB0aGUgW2RvY3VtZW50YXRpb25de0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjaWR9IGZvciBtb3JlIGluZm9cblx0ICovXG5cdGlkOiB7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHR5cGUgb2YgdGhlIHJlc291cmNlXG5cdFx0ICovXG5cdFx0a2luZDogc3RyaW5nO1xuXHRcdHZpZGVvSWQ/OiBzdHJpbmc7XG5cdFx0Y2hhbm5lbElkPzogc3RyaW5nO1xuXHRcdHBsYXlsaXN0SWQ/OiBzdHJpbmc7XG5cdH07XG5cdC8qKlxuXHQgKiBUaGUgYHNuaXBwZXRgIG9iamVjdCBjb250YWlucyBpbmZvIG9uIHRoZSBzZWFyY2ggcmVzdWx0XG5cdCAqL1xuXHRzbmlwcGV0OiB7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGNyZWF0aW9uIGRhdGUgYW5kIHRpbWUgb2YgdGhlIHJlc291cmNlLiBUaGUgdmFsdWUgaXMgc3BlY2lmaWVkIGluIElTTyA4NjAxIGAoWVlZWS1NTS1ERFRoaDptbTpzcy5zWilgIGZvcm1hdC5cblx0XHQgKi9cblx0XHRwdWJsaXNoZWRBdDogc3RyaW5nIHwgYW55O1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBjaGFubmVsJ3MgSURcblx0XHQgKi9cblx0XHRjaGFubmVsSWQ6IHN0cmluZztcblx0XHQvKipcblx0XHQgKiBUaGUgdGl0bGUgb2YgdGhlIHNlYXJjaCByZXN1bHRcblx0XHQgKi9cblx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdC8qKlxuXHRcdCAqIEEgZGVzY3JpcHRpb24gb2YgdGhlIHNlYXJjaCByZXN1bHRcblx0XHQgKi9cblx0XHRkZXNjcmlwdGlvbjogc3RyaW5nO1xuXHRcdC8qKlxuXHRcdCAqIEFuIG9iamVjdCBvZiB0aGUgdGh1bWJuYWlsc1xuXHRcdCAqL1xuXHRcdHRodW1ibmFpbHM6IGFueTtcblx0XHQvKipcblx0XHQgKiBUaGUgdGl0bGUgb2YgdGhlIGNoYW5uZWwgdGhhdCBwdWJsaXNoZWQgdGhlIHJlc291cmNlXG5cdFx0ICovXG5cdFx0Y2hhbm5lbFRpdGxlOiBzdHJpbmc7XG5cdFx0LyoqXG5cdFx0ICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gjc25pcHBldC5saXZlQnJvYWRjYXN0Q29udGVudCBmb3IgbW9yZSBpbmZvXG5cdFx0ICovXG5cdFx0bGl2ZUJyb2FkY2FzdENvbnRlbnQ/OiAndXBjb21pbmcnIHwgJ2xpdmUnIHwgJ25vbmUnO1xuXHR9O1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgTmd4WXRkQXBpU2VhcmNoUmVzdWx0W11gIGluc3RlYWRcbiAqL1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBOZ3hZdGRBcGlTZWFyY2hSZXN1bHRzID0gTmd4WXRkQXBpU2VhcmNoUmVzdWx0W107XG4iXX0=