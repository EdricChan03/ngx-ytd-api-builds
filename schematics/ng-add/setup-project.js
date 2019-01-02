"use strict";
// This file contains the code used for the schematic run after running `ng add ngx-ytd-api`
exports.__esModule = true;
function default_1(options) {
    return addModules(options);
}
exports["default"] = default_1;
/**
 * Adds the neccessary API modules to the main app's `app.module.ts` file
 * @param options The list of options specified via the schematic
 */
function addModules(options) {
    return function (_host, context) {
        if (options.skipSetup) {
            if (context.debug) {
                return context.logger.debug('Skipping setup as the --skipSetup flag has been specified.');
            }
            else {
                return;
            }
        }
        if (options.importModules) {
            return context.logger.debug(JSON.stringify(options.importModules));
        }
    };
}
//# sourceMappingURL=setup-project.js.map