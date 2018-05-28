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
    /**
     * The page token to navigate to
     * @type {?|undefined}
     */
    NgxYtdApiSearchOpts.prototype.pageToken;
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
     * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
     * @type {?|undefined}
     */
    NgxYtdApiSearchResult.prototype.nextPageToken;
    /**
     * The token that can be used as the value of the `pageToken` parameter to retrieve the previous page in the result set.
     * @type {?|undefined}
     */
    NgxYtdApiSearchResult.prototype.prevPageToken;
    /**
     * The region code used for the search query.
     * @type {?|undefined}
     */
    NgxYtdApiSearchResult.prototype.regionCode;
    /**
     * Paging info about the result
     * @type {?|undefined}
     */
    NgxYtdApiSearchResult.prototype.pagingInfo;
    /**
     * An array of results that match the criteria
     * @type {?|undefined}
     */
    NgxYtdApiSearchResult.prototype.items;
}
/**
 * @record
 */
export function NgxYtdApiSearchResultItem() { }
function NgxYtdApiSearchResultItem_tsickle_Closure_declarations() {
    /**
     * The id object contains info which can be used for uniquely identifing the resource
     * See the [documentation]{\@link https://developers.google.com/youtube/v3/docs/search#id} for more info
     * @type {?|undefined}
     */
    NgxYtdApiSearchResultItem.prototype.id;
    /**
     * The `snippet` object contains info on the search result
     * @type {?|undefined}
     */
    NgxYtdApiSearchResultItem.prototype.snippet;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpLyIsInNvdXJjZXMiOlsic2VhcmNoL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFl0ZEFwaUdlbmVyaWNPcHRzLCBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IH0gZnJvbSAnLi4veXRkLWFwaS5pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBOZ3hZdGRBcGlTZWFyY2hPcHRzIGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY09wdHMge1xuXHQvKipcblx0ICogVGhlIGNoYW5uZWwgSUQgdG8gc2VhcmNoIHZpZGVvcyBmcm9tXG5cdCAqL1xuXHRjaGFubmVsSWQ/OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBNYXhpbXVtIHJlc3VsdHMgZm9yIHZpZGVvIHNlYXJjaGluZ1xuXHQgKi9cblx0bWF4UmVzdWx0cz86IG51bWJlcjtcblx0LyoqXG5cdCAqIFRoZSBwYWdlIHRva2VuIHRvIG5hdmlnYXRlIHRvXG5cdCAqL1xuXHRwYWdlVG9rZW4/OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVZpZGVvU2VhcmNoT3B0cyBleHRlbmRzIE5neFl0ZEFwaVNlYXJjaE9wdHMge1xuXHQvKipcblx0ICogV2hldGhlciB0byBtYWtlIHRoZSB2aWRlbyByZXN1bHRzIGJlIGVtYmVkZGFibGVcblx0ICovXG5cdHZpZGVvRW1iZWRkYWJsZT86IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBUaGUgY2hhbm5lbCBJRCB0byBzZWFyY2ggdmlkZW9zIGZyb21cblx0ICovXG5cdGNoYW5uZWxJZD86IHN0cmluZztcbn1cblxuLy8gUmVzdWx0IGludGVyZmFjZXNcbmV4cG9ydCBpbnRlcmZhY2UgTmd4WXRkQXBpU2VhcmNoUmVzdWx0IGV4dGVuZHMgTmd4WXRkQXBpR2VuZXJpY1Jlc3VsdCB7XG5cdC8qKlxuXHQgKiBUaGUgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGBwYWdlVG9rZW5gIHBhcmFtZXRlciB0byByZXRyaWV2ZSB0aGUgbmV4dCBwYWdlIGluIHRoZSByZXN1bHQgc2V0LlxuXHQgKi9cblx0bmV4dFBhZ2VUb2tlbj86IHN0cmluZztcblx0LyoqXG5cdCAqIFRoZSB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBvZiB0aGUgYHBhZ2VUb2tlbmAgcGFyYW1ldGVyIHRvIHJldHJpZXZlIHRoZSBwcmV2aW91cyBwYWdlIGluIHRoZSByZXN1bHQgc2V0LlxuXHQgKi9cblx0cHJldlBhZ2VUb2tlbj86IHN0cmluZztcblx0LyoqXG5cdCAqIFRoZSByZWdpb24gY29kZSB1c2VkIGZvciB0aGUgc2VhcmNoIHF1ZXJ5LlxuXHQgKi9cblx0cmVnaW9uQ29kZT86IHN0cmluZztcblx0LyoqXG5cdCAqIFBhZ2luZyBpbmZvIGFib3V0IHRoZSByZXN1bHRcblx0ICovXG5cdHBhZ2luZ0luZm8/OiB7XG5cdFx0LyoqXG5cdFx0ICogVG90YWwgcmVzdWx0cy4gTm90ZSB0aGF0IHRoZSBtYXggdmFsdWUgaXMgYDEwMDAwMDBgIGFuZCBpcyBhcHByb3hpbWF0ZS5cblx0XHQgKi9cblx0XHR0b3RhbFJlc3VsdHM/OiBudW1iZXI7XG5cdFx0LyoqXG5cdFx0ICogTnVtYmVyIG9mIHJlc3VsdHMgaW5jbHVkZWQgaW4gcmVzcG9uc2Vcblx0XHQgKi9cblx0XHRyZXN1bHRzUGVyUGFnZT86IG51bWJlcjtcblx0fTtcblx0LyoqXG5cdCAqIEFuIGFycmF5IG9mIHJlc3VsdHMgdGhhdCBtYXRjaCB0aGUgY3JpdGVyaWFcblx0ICovXG5cdGl0ZW1zPzogTmd4WXRkQXBpU2VhcmNoUmVzdWx0SXRlbVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFl0ZEFwaVNlYXJjaFJlc3VsdEl0ZW0gZXh0ZW5kcyBOZ3hZdGRBcGlHZW5lcmljUmVzdWx0IHtcblx0LyoqXG5cdCAqIFRoZSBpZCBvYmplY3QgY29udGFpbnMgaW5mbyB3aGljaCBjYW4gYmUgdXNlZCBmb3IgdW5pcXVlbHkgaWRlbnRpZmluZyB0aGUgcmVzb3VyY2Vcblx0ICogU2VlIHRoZSBbZG9jdW1lbnRhdGlvbl17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNpZH0gZm9yIG1vcmUgaW5mb1xuXHQgKi9cblx0aWQ/OiB7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHR5cGUgb2YgdGhlIHJlc291cmNlXG5cdFx0ICovXG5cdFx0a2luZD86IHN0cmluZztcblx0XHR2aWRlb0lkPzogc3RyaW5nO1xuXHRcdGNoYW5uZWxJZD86IHN0cmluZztcblx0XHRwbGF5bGlzdElkPzogc3RyaW5nO1xuXHR9O1xuXHQvKipcblx0ICogVGhlIGBzbmlwcGV0YCBvYmplY3QgY29udGFpbnMgaW5mbyBvbiB0aGUgc2VhcmNoIHJlc3VsdFxuXHQgKi9cblx0c25pcHBldD86IHtcblx0XHQvKipcblx0XHQgKiBUaGUgY3JlYXRpb24gZGF0ZSBhbmQgdGltZSBvZiB0aGUgcmVzb3VyY2UuIFRoZSB2YWx1ZSBpcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDEgYChZWVlZLU1NLUREVGhoOm1tOnNzLnNaKWAgZm9ybWF0LlxuXHRcdCAqL1xuXHRcdHB1Ymxpc2hlZEF0Pzogc3RyaW5nIHwgYW55O1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBjaGFubmVsJ3MgSURcblx0XHQgKi9cblx0XHRjaGFubmVsSWQ/OiBzdHJpbmc7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHRpdGxlIG9mIHRoZSBzZWFyY2ggcmVzdWx0XG5cdFx0ICovXG5cdFx0dGl0bGU/OiBzdHJpbmc7XG5cdFx0LyoqXG5cdFx0ICogQSBkZXNjcmlwdGlvbiBvZiB0aGUgc2VhcmNoIHJlc3VsdFxuXHRcdCAqL1xuXHRcdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRcdC8qKlxuXHRcdCAqIEFuIG9iamVjdCBvZiB0aGUgdGh1bWJuYWlsc1xuXHRcdCAqL1xuXHRcdHRodW1ibmFpbHM/OiBhbnk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHRpdGxlIG9mIHRoZSBjaGFubmVsIHRoYXQgcHVibGlzaGVkIHRoZSByZXNvdXJjZVxuXHRcdCAqL1xuXHRcdGNoYW5uZWxUaXRsZT86IHN0cmluZztcblx0XHQvKipcblx0XHQgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL3NlYXJjaCNzbmlwcGV0LmxpdmVCcm9hZGNhc3RDb250ZW50IGZvciBtb3JlIGluZm9cblx0XHQgKi9cblx0XHRsaXZlQnJvYWRjYXN0Q29udGVudD86ICd1cGNvbWluZycgfCAnbGl2ZScgfCAnbm9uZSc7XG5cdH07XG59XG4iXX0=