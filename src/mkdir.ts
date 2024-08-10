import fs from "node:fs";

/**
 * Creates a directory recursively.
 *
 * @param path - The path to the directory to create.
 */
export function mkdirRecursive(path: string): void {
  fs.mkdirSync(path, { recursive: true });
}
