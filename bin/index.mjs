import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("fs");
;// CONCATENATED MODULE: ./dist/mkdir.mjs

/**
 * Creates a directory recursively.
 *
 * @param path - The path to the directory to create.
 */
function mkdirRecursive(path) {
    external_fs_namespaceObject.mkdirSync(path, { recursive: true });
}
//# sourceMappingURL=mkdir.mjs.map
;// CONCATENATED MODULE: ./dist/bin.mjs

mkdirRecursive(process.argv[2]);
//# sourceMappingURL=bin.mjs.map
