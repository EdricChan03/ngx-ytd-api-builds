import { InjectionToken } from '@angular/core';
import { NgxYtdApiStandardParams } from './ytd-api-common.interface';
/** Injection token that can be used to specify the standard query parameters for all API endpoints. */
export declare const NGX_YTD_API_DEFAULT_STANDARD_PARAMS: InjectionToken<NgxYtdApiStandardParams>;
/**
 * Injection token that can be used to specify the standard query parameters for all API endpoints.
 * @deprecated Use {@link NGX_YTD_API_DEFAULT_STANDARD_PARAMS}
 */
export declare const NGX_YTD_API_DEFAULT_STANDARD_OPTIONS: InjectionToken<NgxYtdApiStandardParams>;
