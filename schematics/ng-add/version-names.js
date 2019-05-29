"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** The version of the library that is shipped with the schematics */
exports.ngxYtdApiVersion = loadPackageVersionGracefully('ngx-ytd-api');
/** The version of the ngx-simple-http dependency that is shipped with the schematics */
exports.ngxSimpleHttpVersion = loadPackageVersionGracefully('ngx-simple-http', '1.0.0');
/**
 * Loads the full version from the given Angular package gracefully.
 * @param packageName The Angular package name to load
 * @param defaultVersion The default version to load if the version does not exist
 * @returns A version or `null`
 **/
function loadPackageVersionGracefully(packageName, defaultVersion) {
    try {
        return require(`${packageName}/package.json`).version;
    }
    catch (_a) {
        if (defaultVersion) {
            return defaultVersion;
        }
        return null;
    }
}
//# sourceMappingURL=version-names.js.map