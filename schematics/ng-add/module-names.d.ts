/**
 * Interface used for an Angular Module from the `ngx-ytd-api` library
 */
export interface ModuleName {
    /**
     * The name of the module as a literal string
     */
    name: string;
    /**
     * The API type of the module
     */
    type: string;
    /**
     * The full module path to import the module from
     */
    importFrom: string;
}
/**
 * An array of module names
 */
export declare const moduleNames: ModuleName[];
