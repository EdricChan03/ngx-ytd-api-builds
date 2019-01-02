"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
exports.__esModule = true;
/** The version of the library that is shipped with the schematics */
exports.ngxYtdApiVersion = loadPackageVersionGracefully('ngx-ytd-api');
/** The version of the ngx-simple-http dependency that is shipped with the schematics */
exports.ngxSimpleHttpVersion = loadPackageVersionGracefully('ngx-simple-http');
/**
 * Loads the full version from the given Angular package gracefully.
 * @param packageName The Angular package name to load
 **/
function loadPackageVersionGracefully(packageName) {
    try {
        return require(packageName + "/package.json").version;
    }
    catch (_a) {
        return null;
    }
}
//# sourceMappingURL=version-names.js.map