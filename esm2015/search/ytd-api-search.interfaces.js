/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFl0ZEFwaUdlbmVyaWNPcHRzLCBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IH0gZnJvbSAnLi4veXRkLWFwaS5pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hPcHRzIGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY09wdHMge1xuXHQvKipcblx0ICogVGhlIGNoYW5uZWwgSUQgdG8gc2VhcmNoIHZpZGVvcyBmcm9tXG5cdCAqL1xuXHRjaGFubmVsSWQ/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBNYXhpbXVtIHJlc3VsdHMgZm9yIHZpZGVvIHNlYXJjaGluZ1xuXHQgKi9cblx0bWF4UmVzdWx0cz86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpVmlkZW9TZWFyY2hPcHRzIGV4dGVuZHMgTmd4WXRkQXBpU2VhcmNoT3B0cyB7XG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRvIG1ha2UgdGhlIHZpZGVvIHJlc3VsdHMgYmUgZW1iZWRkYWJsZVxuXHQgKi9cblx0dmlkZW9FbWJlZGRhYmxlPzogYm9vbGVhbjtcblx0LyoqXG5cdCAqIFRoZSBjaGFubmVsIElEIHRvIHNlYXJjaCB2aWRlb3MgZnJvbVxuXHQgKi9cblx0Y2hhbm5lbElkPzogc3RyaW5nO1xufVxuXG4vLyBSZXN1bHQgaW50ZXJmYWNlc1xuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hSZXN1bHQgZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IHtcblx0LyoqXG5cdCAqIFRoZSBpZCBvYmplY3QgY29udGFpbnMgaW5mbyB3aGljaCBjYW4gYmUgdXNlZCBmb3IgdW5pcXVlbHkgaWRlbnRpZmluZyB0aGUgcmVzb3VyY2Vcblx0ICogU2VlIHRoZSBbZG9jdW1lbnRhdGlvbl17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNpZH0gZm9yIG1vcmUgaW5mb1xuXHQgKi9cblx0aWQ6IHtcblx0XHQvKipcblx0XHQgKiBUaGUgdHlwZSBvZiB0aGUgcmVzb3VyY2Vcblx0XHQgKi9cblx0XHRraW5kOiBzdHJpbmc7XG5cdFx0dmlkZW9JZD86IHN0cmluZztcblx0XHRjaGFubmVsSWQ/OiBzdHJpbmc7XG5cdFx0cGxheWxpc3RJZD86IHN0cmluZztcblx0fTtcblx0LyoqXG5cdCAqIFRoZSBgc25pcHBldGAgb2JqZWN0IGNvbnRhaW5zIGluZm8gb24gdGhlIHNlYXJjaCByZXN1bHRcblx0ICovXG5cdHNuaXBwZXQ6IHtcblx0XHQvKipcblx0XHQgKiBUaGUgY3JlYXRpb24gZGF0ZSBhbmQgdGltZSBvZiB0aGUgcmVzb3VyY2UuIFRoZSB2YWx1ZSBpcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDEgYChZWVlZLU1NLUREVGhoOm1tOnNzLnNaKWAgZm9ybWF0LlxuXHRcdCAqL1xuXHRcdHB1Ymxpc2hlZEF0OiBzdHJpbmcgfCBhbnk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGNoYW5uZWwncyBJRFxuXHRcdCAqL1xuXHRcdGNoYW5uZWxJZDogc3RyaW5nO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB0aXRsZSBvZiB0aGUgc2VhcmNoIHJlc3VsdFxuXHRcdCAqL1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0LyoqXG5cdFx0ICogQSBkZXNjcmlwdGlvbiBvZiB0aGUgc2VhcmNoIHJlc3VsdFxuXHRcdCAqL1xuXHRcdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cdFx0LyoqXG5cdFx0ICogQW4gb2JqZWN0IG9mIHRoZSB0aHVtYm5haWxzXG5cdFx0ICovXG5cdFx0dGh1bWJuYWlsczogYW55O1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB0aXRsZSBvZiB0aGUgY2hhbm5lbCB0aGF0IHB1Ymxpc2hlZCB0aGUgcmVzb3VyY2Vcblx0XHQgKi9cblx0XHRjaGFubmVsVGl0bGU6IHN0cmluZztcblx0XHQvKipcblx0XHQgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNzbmlwcGV0LmxpdmVCcm9hZGNhc3RDb250ZW50IGZvciBtb3JlIGluZm9cblx0XHQgKi9cblx0XHRsaXZlQnJvYWRjYXN0Q29udGVudD86ICd1cGNvbWluZycgfCAnbGl2ZScgfCAnbm9uZSc7XG5cdH07XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBOZ3hZdGRBcGlTZWFyY2hSZXN1bHRbXWAgaW5zdGVhZFxuICovXG5leHBvcnQgZGVjbGFyZSB0eXBlIE5neFl0ZEFwaVNlYXJjaFJlc3VsdHMgPSBOZ3hZdGRBcGlTZWFyY2hSZXN1bHRbXTtcbiJdfQ==