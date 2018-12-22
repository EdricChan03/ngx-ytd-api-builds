/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SimpleHttpService } from 'ngx-simple-http';
import { HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "ngx-simple-http";
export class NgxYtdApiCommentsService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        /**
         * The API URL for the Comments API of the YouTube Data v3 API
         */
        this.ngxYtdCommentsApiUrl = 'https://www.googleapis.com/youtube/v3/comments';
    }
    // Handler for HTTP requests
    /**
     * @private
     * @template B, P, R
     * @param {?} apiEndpoint
     * @param {?} opts
     * @param {?=} body
     * @param {?=} httpType
     * @return {?}
     */
    _httpHandler(apiEndpoint, opts, body = null, httpType) {
        /** @type {?} */
        let headers;
        if ('accessToken' in opts && typeof opts['accessToken'] !== undefined && opts['accessToken'] !== null) {
            headers = new HttpHeaders()
                .set('Authorization', `Bearer ${opts['accessToken']}`);
        }
        switch (httpType) {
            case 'delete':
                if (headers) {
                    return this.http.createHttpDelete(apiEndpoint, opts, headers);
                }
                else {
                    return this.http.createHttpDelete(apiEndpoint, opts);
                }
            case 'get':
                if (headers) {
                    return this.http.createHttpGet(apiEndpoint, opts, headers);
                }
                else {
                    return this.http.createHttpGet(apiEndpoint, opts);
                }
            case 'post':
                if (headers) {
                    if (body) {
                        return this.http.createHttpPost(apiEndpoint, opts, body, headers);
                    }
                    else {
                        return this.http.createHttpPost(apiEndpoint, opts, null, headers);
                    }
                }
                else {
                    if (body) {
                        return this.http.createHttpPost(apiEndpoint, opts, body);
                    }
                    else {
                        return this.http.createHttpPost(apiEndpoint, opts, null);
                    }
                }
            case 'put':
                if (headers) {
                    if (body) {
                        return this.http.createHttpPut(apiEndpoint, opts, body, headers);
                    }
                    else {
                        return this.http.createHttpPut(apiEndpoint, opts, null, headers);
                    }
                }
                else {
                    if (body) {
                        return this.http.createHttpPut(apiEndpoint, opts, body);
                    }
                    else {
                        return this.http.createHttpPut(apiEndpoint, opts, null);
                    }
                }
        }
    }
    /**
     * Deletes a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the deletion as an `Observable`
     */
    delete(opts) {
        return this._httpHandler(this.ngxYtdCommentsApiUrl, opts, null, 'delete');
    }
    /**
     * Creates a reply to an existing comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
     * @param {?} body The API body
     * @param {?} opts Options for the API
     * @return {?} Results of the creation as an `Observable`
     */
    insert(body, opts) {
        return this._httpHandler(this.ngxYtdCommentsApiUrl, opts, body, 'post');
    }
    /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the request as an `Observable`
     */
    list(opts) {
        return this._httpHandler(this.ngxYtdCommentsApiUrl, opts, null, 'get');
    }
    /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the request as an `Observable`
     */
    markAsSpam(opts) {
        return this._httpHandler(`${this.ngxYtdCommentsApiUrl}/markAsSpam`, opts, null, 'post');
    }
    /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param {?} opts Options for the API
     * @return {?} Results of the request as an `Observable`
     */
    setModerationStatus(opts) {
        return this._httpHandler(`${this.ngxYtdCommentsApiUrl}/setModerationStatus`, opts, null, 'post');
    }
    /**
     * Modifies a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/update for more info
     * @param {?} body The API body
     * @param {?} opts Options for the API
     * @return {?} Results of the update as an `Observable`
     */
    update(body, opts) {
        return this._httpHandler(this.ngxYtdCommentsApiUrl, opts, body, 'put');
    }
}
NgxYtdApiCommentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxYtdApiCommentsService.ctorParameters = () => [
    { type: SimpleHttpService }
];
/** @nocollapse */ NgxYtdApiCommentsService.ngInjectableDef = i0.defineInjectable({ factory: function NgxYtdApiCommentsService_Factory() { return new NgxYtdApiCommentsService(i0.inject(i1.SimpleHttpService)); }, token: NgxYtdApiCommentsService, providedIn: "root" });
if (false) {
    /**
     * The API URL for the Comments API of the YouTube Data v3 API
     * @type {?}
     */
    NgxYtdApiCommentsService.prototype.ngxYtdCommentsApiUrl;
    /**
     * @type {?}
     * @private
     */
    NgxYtdApiCommentsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1jb21tZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXl0ZC1hcGkvY29tbWVudHMvIiwic291cmNlcyI6WyJ5dGQtYXBpLWNvbW1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFZcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFLbkQsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUNuQyxZQUNVLElBQXVCO1FBQXZCLFNBQUksR0FBSixJQUFJLENBQW1COzs7O1FBS3hCLHlCQUFvQixHQUFHLGdEQUFnRCxDQUFDO0lBSjdFLENBQUM7Ozs7Ozs7Ozs7O0lBTUcsWUFBWSxDQUNsQixXQUFtQixFQUNuQixJQUFPLEVBQ1AsT0FBVSxJQUFJLEVBQ2QsUUFBMkM7O1lBRXZDLE9BQW9CO1FBQ3hCLElBQUksYUFBYSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNyRyxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7aUJBQ3hCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxRQUFRO2dCQUNYLElBQUksT0FBTyxFQUFFO29CQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBTyxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUNyRTtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQU8sV0FBVyxFQUFFLElB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QUNKLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBU0QsTUFBTSxDQUFDLElBQStCLEVBQUUsSUFBaUM7UUFDdkUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUN0QixJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOzs7WUE3SkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBaEJRLGlCQUFpQjs7Ozs7Ozs7SUF3QnhCLHdEQUFpRjs7Ozs7SUFML0Usd0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2ltcGxlSHR0cFNlcnZpY2UgfSBmcm9tICduZ3gtc2ltcGxlLWh0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgTmd4WXRkQXBpQ29tbWVudHNEZWxldGVPcHRzLFxuICBOZ3hZdGRBcGlDb21tZW50c0luc2VydE9wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzTGlzdE9wdHMsXG4gIE5neFl0ZEFwaUNvbW1lbnRzTGlzdFJlc3VsdCxcbiAgTmd4WXRkQXBpQ29tbWVudHNNYXJrQXNTcGFtT3B0cyxcbiAgTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSxcbiAgTmd4WXRkQXBpQ29tbWVudHNTZXRNb2RlcmF0aW9uU3RhdHVzT3B0cyxcbiAgTmd4WXRkQXBpQ29tbWVudHNVcGRhdGVPcHRzXG59IGZyb20gJy4veXRkLWFwaS1jb21tZW50cy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaUNvbW1lbnRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogU2ltcGxlSHR0cFNlcnZpY2VcbiAgKSB7IH1cbiAgLyoqXG4gICAqIFRoZSBBUEkgVVJMIGZvciB0aGUgQ29tbWVudHMgQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRDb21tZW50c0FwaVVybCA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL2NvbW1lbnRzJztcbiAgLy8gSGFuZGxlciBmb3IgSFRUUCByZXF1ZXN0c1xuICBwcml2YXRlIF9odHRwSGFuZGxlcjxCIGV4dGVuZHMgYW55LCBQIGV4dGVuZHMgYW55LCBSIGV4dGVuZHMgYW55PihcbiAgICBhcGlFbmRwb2ludDogc3RyaW5nLFxuICAgIG9wdHM6IFAsXG4gICAgYm9keTogQiA9IG51bGwsXG4gICAgaHR0cFR5cGU6ICdkZWxldGUnIHwgJ2dldCcgfCAncG9zdCcgfCAncHV0J1xuICApOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gICAgaWYgKCdhY2Nlc3NUb2tlbicgaW4gb3B0cyAmJiB0eXBlb2Ygb3B0c1snYWNjZXNzVG9rZW4nXSAhPT0gdW5kZWZpbmVkICYmIG9wdHNbJ2FjY2Vzc1Rva2VuJ10gIT09IG51bGwpIHtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke29wdHNbJ2FjY2Vzc1Rva2VuJ119YCk7XG4gICAgfVxuICAgIHN3aXRjaCAoaHR0cFR5cGUpIHtcbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwRGVsZXRlPFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBoZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBEZWxldGU8UCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICBjYXNlICdnZXQnOlxuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cEdldDxQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgaGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5jcmVhdGVIdHRwR2V0PFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAncG9zdCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHksIGhlYWRlcnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsLCBoZWFkZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFBvc3Q8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQb3N0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBvcHRzLCBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ3B1dCc6XG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgYm9keSwgaGVhZGVycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuY3JlYXRlSHR0cFB1dDxCLCBQLCBSPihhcGlFbmRwb2ludCwgb3B0cywgbnVsbCwgaGVhZGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIGJvZHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmNyZWF0ZUh0dHBQdXQ8QiwgUCwgUj4oYXBpRW5kcG9pbnQsIG9wdHMsIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogRGVsZXRlcyBhIGNvbW1lbnRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9kZWxldGUgZm9yIG1vcmUgaW5mb1xuICAgKiBAcGFyYW0gb3B0cyBPcHRpb25zIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgZGVsZXRpb24gYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBkZWxldGUob3B0czogTmd4WXRkQXBpQ29tbWVudHNEZWxldGVPcHRzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cEhhbmRsZXI8YW55LCBOZ3hZdGRBcGlDb21tZW50c0RlbGV0ZU9wdHMsIGFueT4oXG4gICAgICB0aGlzLm5neFl0ZENvbW1lbnRzQXBpVXJsLFxuICAgICAgb3B0cyxcbiAgICAgIG51bGwsXG4gICAgICAnZGVsZXRlJ1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSByZXBseSB0byBhbiBleGlzdGluZyBjb21tZW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvaW5zZXJ0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEFQSSBib2R5XG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSBjcmVhdGlvbiBhcyBhbiBgT2JzZXJ2YWJsZWBcbiAgICovXG4gIGluc2VydChib2R5OiBOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlLCBvcHRzOiBOZ3hZdGRBcGlDb21tZW50c0luc2VydE9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwSGFuZGxlcjxOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlLCBOZ3hZdGRBcGlDb21tZW50c0luc2VydE9wdHMsIGFueT4oXG4gICAgICB0aGlzLm5neFl0ZENvbW1lbnRzQXBpVXJsLFxuICAgICAgb3B0cyxcbiAgICAgIGJvZHksXG4gICAgICAncG9zdCdcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgY29tbWVudHNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9saXN0IGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIHJlcXVlc3QgYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBsaXN0KG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzTGlzdE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaUNvbW1lbnRzTGlzdFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwSGFuZGxlcjxhbnksIE5neFl0ZEFwaUNvbW1lbnRzTGlzdE9wdHMsIE5neFl0ZEFwaUNvbW1lbnRzTGlzdFJlc3VsdD4oXG4gICAgICB0aGlzLm5neFl0ZENvbW1lbnRzQXBpVXJsLFxuICAgICAgb3B0cyxcbiAgICAgIG51bGwsXG4gICAgICAnZ2V0J1xuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIEZsYWdzIG9uZSBvciBtb3JlIGNvbW1lbnRzIGFzIHNwYW1cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9tYXJrQXNTcGFtIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIHJlcXVlc3QgYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBtYXJrQXNTcGFtKG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzTWFya0FzU3BhbU9wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwSGFuZGxlcjxhbnksIE5neFl0ZEFwaUNvbW1lbnRzTWFya0FzU3BhbU9wdHMsIGFueT4oXG4gICAgICBgJHt0aGlzLm5neFl0ZENvbW1lbnRzQXBpVXJsfS9tYXJrQXNTcGFtYCxcbiAgICAgIG9wdHMsXG4gICAgICBudWxsLFxuICAgICAgJ3Bvc3QnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyB0aGUgbW9kZXJhdGlvbiBzdGF0dXMgb2Ygb25lIG9yIG1vcmUgY29tbWVudHNcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9jb21tZW50cy9zZXRNb2RlcmF0aW9uU3RhdHVzIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3IgdGhlIEFQSVxuICAgKiBAcmV0dXJuIFJlc3VsdHMgb2YgdGhlIHJlcXVlc3QgYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICBzZXRNb2RlcmF0aW9uU3RhdHVzKG9wdHM6IE5neFl0ZEFwaUNvbW1lbnRzU2V0TW9kZXJhdGlvblN0YXR1c09wdHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwSGFuZGxlcjxhbnksIE5neFl0ZEFwaUNvbW1lbnRzU2V0TW9kZXJhdGlvblN0YXR1c09wdHMsIGFueT4oXG4gICAgICBgJHt0aGlzLm5neFl0ZENvbW1lbnRzQXBpVXJsfS9zZXRNb2RlcmF0aW9uU3RhdHVzYCxcbiAgICAgIG9wdHMsXG4gICAgICBudWxsLFxuICAgICAgJ3Bvc3QnXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogTW9kaWZpZXMgYSBjb21tZW50XG4gICAqXG4gICAqIFNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3MvY29tbWVudHMvdXBkYXRlIGZvciBtb3JlIGluZm9cbiAgICogQHBhcmFtIGJvZHkgVGhlIEFQSSBib2R5XG4gICAqIEBwYXJhbSBvcHRzIE9wdGlvbnMgZm9yIHRoZSBBUElcbiAgICogQHJldHVybiBSZXN1bHRzIG9mIHRoZSB1cGRhdGUgYXMgYW4gYE9ic2VydmFibGVgXG4gICAqL1xuICB1cGRhdGUoYm9keTogTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZSwgb3B0czogTmd4WXRkQXBpQ29tbWVudHNVcGRhdGVPcHRzKTogT2JzZXJ2YWJsZTxOZ3hZdGRBcGlDb21tZW50c1Jlc291cmNlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBIYW5kbGVyPE5neFl0ZEFwaUNvbW1lbnRzUmVzb3VyY2UsIE5neFl0ZEFwaUNvbW1lbnRzVXBkYXRlT3B0cywgTmd4WXRkQXBpQ29tbWVudHNSZXNvdXJjZT4oXG4gICAgICB0aGlzLm5neFl0ZENvbW1lbnRzQXBpVXJsLFxuICAgICAgb3B0cyxcbiAgICAgIGJvZHksXG4gICAgICAncHV0J1xuICAgICk7XG4gIH1cbn1cbiJdfQ==