"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
exports.__esModule = true;
var tasks_1 = require("@angular-devkit/schematics/tasks");
var package_config_1 = require("./package-config");
var version_names_1 = require("./version-names");
/**
 * Schematic factory entry-point for the `ng-add` schematic. The ng-add schematic will be
 * automatically executed if developers run `ng add ngx-ytd-api`.
 */
function default_1(options) {
    return function (host, context) {
        // In order to align the library version with the other Angular dependencies,
        // we use tilde instead of caret. This is default for Angular dependencies in new CLI projects.
        context.logger.info('Adding the required dependencies to package.json...');
        if (context.debug) {
            context.logger.debug("Adding ngx-ytd-api of version range ~" + version_names_1.ngxYtdApiVersion + " as a dependency to the package.json file...");
        }
        package_config_1.addPackageToPackageJson(host, 'ngx-ytd-api', "~" + version_names_1.ngxYtdApiVersion);
        if (context.debug) {
            context.logger.debug("Adding ngx-simple-http of version range ~" + version_names_1.ngxSimpleHttpVersion + " as a dependency to the package.json file...");
        }
        package_config_1.addPackageToPackageJson(host, 'ngx-simple-http', "~" + version_names_1.ngxSimpleHttpVersion);
        context.logger.info('Installing dependencies...');
        var installTaskId = context.addTask(new tasks_1.NodePackageInstallTask());
        context.addTask(new tasks_1.RunSchematicTask('ng-add-setup-project', options), [installTaskId]);
    };
}
exports["default"] = default_1;
//# sourceMappingURL=index.js.map