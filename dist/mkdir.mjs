import fs from "fs";
/**
 * Creates a directory recursively.
 *
 * @param path - The path to the directory to create.
 */
export function mkdirRecursive(path) {
    fs.mkdirSync(path, { recursive: true });
}
//# sourceMappingURL=mkdir.mjs.map