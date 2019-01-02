"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
exports.__esModule = true;
/**
 * Sorts the keys of the given object.
 * @returns A new object instance with sorted keys
 */
function sortObjectByKeys(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) { return (result[key] = obj[key]) && result; }, {});
}
/** Adds a package to the package.json in the given host tree. */
function addPackageToPackageJson(host, pkg, version) {
    if (host.exists('package.json')) {
        // tslint:disable-next-line:no-non-null-assertion
        var sourceText = host.read('package.json').toString('utf-8');
        var json = JSON.parse(sourceText);
        if (!json.dependencies) {
            json.dependencies = {};
        }
        if (!json.dependencies[pkg]) {
            json.dependencies[pkg] = version;
            json.dependencies = sortObjectByKeys(json.dependencies);
        }
        host.overwrite('package.json', JSON.stringify(json, null, 2));
    }
    return host;
}
exports.addPackageToPackageJson = addPackageToPackageJson;
/** Gets the version of the specified package by looking at the package.json in the given tree. */
function getPackageVersionFromPackageJson(tree, name) {
    if (!tree.exists('package.json')) {
        return null;
    }
    // tslint:disable-next-line:no-non-null-assertion
    var packageJson = JSON.parse(tree.read('package.json').toString('utf8'));
    if (packageJson.dependencies && packageJson.dependencies[name]) {
        return packageJson.dependencies[name];
    }
    return null;
}
exports.getPackageVersionFromPackageJson = getPackageVersionFromPackageJson;
//# sourceMappingURL=package-config.js.map