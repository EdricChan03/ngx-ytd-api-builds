/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxYtdApiCoreService } from 'ngx-ytd-api/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/ytd-api-core.service";
var NgxYtdApiCommentsService = /** @class */ (function () {
    function NgxYtdApiCommentsService(core) {
        this.core = core;
    }
    /**
     * Deletes a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
     * @param opts Options for the API
     * @return Results of the deletion as an `Observable`
     */
    /**
     * Deletes a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the deletion as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.delete = /**
     * Deletes a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the deletion as an `Observable`
     */
    function (opts) {
        return this.core.createHttpDelete(this.core.ngxYtdCommentsApiUrl, opts);
    };
    /**
     * Creates a reply to an existing comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
     * @param body The API body
     * @param opts Options for the API
     * @return Results of the creation as an `Observable`
     */
    /**
     * Creates a reply to an existing comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
     * @param {?} body The API body
     * @param {?} opts Options for the API
     * @return {?} Results of the creation as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.insert = /**
     * Creates a reply to an existing comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
     * @param {?} body The API body
     * @param {?} opts Options for the API
     * @return {?} Results of the creation as an `Observable`
     */
    function (body, opts) {
        return this.core.createHttpPost(this.core.ngxYtdCommentsApiUrl, opts, body);
    };
    /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param opts Options for the API
     * @return Results of the search as an `Observable`
     */
    /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the search as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.list = /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the search as an `Observable`
     */
    function (opts) {
        return this.core.createHttpGet(this.core.ngxYtdCommentsApiUrl, opts);
    };
    /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param opts Options for the API
     * @return Results of the search as an `Observable`
     */
    /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the search as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.markAsSpam = /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the search as an `Observable`
     */
    function (opts) {
        return this.core.createHttpPost(this.core.ngxYtdCommentsApiUrl + "/markAsSpam", opts);
    };
    /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param opts Options for the API
     * @return Results of the search as an `Observable`
     */
    /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the search as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.setModerationStatus = /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the search as an `Observable`
     */
    function (opts) {
        return this.core.createHttpPost(this.core.ngxYtdCommentsApiUrl + "/setModerationStatus", opts);
    };
    /**
     * Modifies a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/update for more info
     * @param body The API body
     * @param opts Options for the API
     * @return Results of the update as an `Observable`
     */
    /**
     * Modifies a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/update for more info
     * @param {?} body The API body
     * @param {?} opts Options for the API
     * @return {?} Results of the update as an `Observable`
     */
    NgxYtdApiCommentsService.prototype.update = /**
     * Modifies a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/update for more info
     * @param {?} body The API body
     * @param {?} opts Options for the API
     * @return {?} Results of the update as an `Observable`
     */
    function (body, opts) {
        return this.core.createHttpPut(this.core.ngxYtdCommentsApiUrl, opts, body);
    };
    NgxYtdApiCommentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxYtdApiCommentsService.ctorParameters = function () { return [
        { type: NgxYtdApiCoreService }
    ]; };
    /** @nocollapse */ NgxYtdApiCommentsService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiCommentsService_Factory() { return new NgxYtdApiCommentsService(i0.inject(i1.NgxYtdApiCoreService)); }, token: NgxYtdApiCommentsService, providedIn: "root" });
    return NgxYtdApiCommentsService;
}());
export { NgxYtdApiCommentsService };
if (false) {
    /** @type {?} */
    NgxYtdApiCommentsService.prototype.core;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvIiwic291cmNlcyI6WyJjb21tZW50cy95dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQWF4RDtJQUlFLGtDQUNVLElBQTBCO1FBQTFCLFNBQUksR0FBSixJQUFJLENBQXNCO0lBQ2hDLENBQUM7SUFDTDs7Ozs7O09BTUc7Ozs7Ozs7O0lBQ0gseUNBQU07Ozs7Ozs7SUFBTixVQUFPLElBQWlDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBOEIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRzs7Ozs7Ozs7O0lBQ0gseUNBQU07Ozs7Ozs7O0lBQU4sVUFBTyxJQUErQixFQUFFLElBQWlDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQzlCLElBQUksRUFDSixJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7SUFDRDs7Ozs7O09BTUc7Ozs7Ozs7O0lBQ0gsdUNBQUk7Ozs7Ozs7SUFBSixVQUFLLElBQStCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQXlELElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0gsQ0FBQztJQUNEOzs7Ozs7T0FNRzs7Ozs7Ozs7SUFDSCw2Q0FBVTs7Ozs7OztJQUFWLFVBQVcsSUFBcUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsZ0JBQWEsRUFDOUMsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7OztPQU1HOzs7Ozs7OztJQUNILHNEQUFtQjs7Ozs7OztJQUFuQixVQUFvQixJQUE4QztRQUNoRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQix5QkFBc0IsRUFDdkQsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRzs7Ozs7Ozs7O0lBQ0gseUNBQU07Ozs7Ozs7O0lBQU4sVUFBTyxJQUErQixFQUFFLElBQWlDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQzlCLElBQUksRUFDSixJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7O2dCQWxGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWZRLG9CQUFvQjs7O21DQUQ3QjtDQWlHQyxBQW5GRCxJQW1GQztTQWhGWSx3QkFBd0I7OztJQUVqQyx3Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlDb3JlU2VydmljZSB9IGZyb20gJ25neC15dGQtYXBpL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgTmd4WXRkQXBpQ29tbWVudHNEZWxldGVPcHRzLFxuICBOZ3hZdGRBcGlDb21tZW50c0luc2VydE9wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzTGlzdE9wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzTGlzdFJlc3VsdCxcbiAgTmd4WXRkQXBpQ29tbWVudHNNYXJrQXNTcGFtT3B0cyxcbiAgTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSxcbiAgTmd4WXRkQXBpQ29tbWVudHNTZXRNb2RlcmF0aW9uU3RhdHVzT3B0cyxcbiAgTmd4WXRkQXBpQ29tbWVudHNVcGRhdGVPcHRzXG59IGZyb20gJy4veXRkLWFwaS1jb21tZW50cy5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlDb21tZW50c1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmU6IE5neFl0ZEFwaUNvcmVTZXJ2aWNlXG4gICkgeyB9XG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY29tbWVudFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9kb2NzL2NvbW1lbnRzL2RlbGV0ZSBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBkZWxldGlvbiBhcyBhbiBgT2JzZXJ2YWJsZWBcbiAgICovXG4gIGRlbGV0ZShvcHRzOiBOZ3hZdGRBcGlDb21tZW50c0RlbGV0ZU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cERlbGV0ZTxOZ3hZdGRBcGlDb21tZW50c0RlbGV0ZU9wdHM+KHRoaXMuY29yZS5uZ3hZdGRDb21tZW50c0FwaVVybCwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSByZXBseSB0byBhbiBleGlzdGluZyBjb21tZW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvaW5zZXJ0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEFQSSBib2R5XG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBjcmVhdGlvbiBhcyBhbiBgT2JzZXJ2YWJsZWBcbiAgICovXG4gIGluc2VydChib2R5OiBOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlLCBvcHRzOiBOZ3hZdGRBcGlDb21tZW50c0luc2VydE9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cFBvc3Q8Tmd4WXRkQXBpQ29tbWVudHNJbnNlcnRPcHRzLCBOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlPihcbiAgICAgIHRoaXMuY29yZS5uZ3hZdGRDb21tZW50c0FwaVVybCxcbiAgICAgIG9wdHMsXG4gICAgICBib2R5XG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogUmV0cmlldmVzIGNvbW1lbnRzXG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvbGlzdCBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzTGlzdE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaUNvbW1lbnRzTGlzdFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmNvcmUuY3JlYXRlSHR0cEdldDxOZ3hZdGRBcGlDb21tZW50c0xpc3RSZXN1bHQsIE5neFl0ZEFwaUNvbW1lbnRzTGlzdE9wdHM+KHRoaXMuY29yZS5uZ3hZdGRDb21tZW50c0FwaVVybCwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIEZsYWdzIG9uZSBvciBtb3JlIGNvbW1lbnRzIGFzIHNwYW1cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9tYXJrQXNTcGFtIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhbiBgT2JzZXJ2YWJsZWBcbiAgICovXG4gIG1hcmtBc1NwYW0ob3B0czogTmd4WXRkQXBpQ29tbWVudHNNYXJrQXNTcGFtT3B0cyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5jcmVhdGVIdHRwUG9zdDxOZ3hZdGRBcGlDb21tZW50c01hcmtBc1NwYW1PcHRzLCBudWxsPihcbiAgICAgIGAke3RoaXMuY29yZS5uZ3hZdGRDb21tZW50c0FwaVVybH0vbWFya0FzU3BhbWAsXG4gICAgICBvcHRzXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyB0aGUgbW9kZXJhdGlvbiBzdGF0dXMgb2Ygb25lIG9yIG1vcmUgY29tbWVudHNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9zZXRNb2RlcmF0aW9uU3RhdHVzIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhbiBgT2JzZXJ2YWJsZWBcbiAgICovXG4gIHNldE1vZGVyYXRpb25TdGF0dXMob3B0czogTmd4WXRkQXBpQ29tbWVudHNTZXRNb2RlcmF0aW9uU3RhdHVzT3B0cyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5jcmVhdGVIdHRwUG9zdDxOZ3hZdGRBcGlDb21tZW50c1NldE1vZGVyYXRpb25TdGF0dXNPcHRzLCBudWxsPihcbiAgICAgIGAke3RoaXMuY29yZS5uZ3hZdGRDb21tZW50c0FwaVVybH0vc2V0TW9kZXJhdGlvblN0YXR1c2AsXG4gICAgICBvcHRzXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogTW9kaWZpZXMgYSBjb21tZW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvdXBkYXRlIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEFQSSBib2R5XG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSB1cGRhdGUgYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICB1cGRhdGUoYm9keTogTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSwgb3B0czogTmd4WXRkQXBpQ29tbWVudHNVcGRhdGVPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5jcmVhdGVIdHRwUHV0PE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UsIE5neFl0ZEFwaUNvbW1lbnRzVXBkYXRlT3B0cywgTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZT4oXG4gICAgICB0aGlzLmNvcmUubmd4WXRkQ29tbWVudHNBcGlVcmwsXG4gICAgICBvcHRzLFxuICAgICAgYm9keVxuICAgICk7XG4gIH1cbn1cbiJdfQ==