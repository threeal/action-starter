import { EOL } from "node:os";
import { mkdir } from "node:fs/promises";
//#region node_modules/.pnpm/ghakit@1.0.0/node_modules/ghakit/dist/log.js
function formatAnnotationParams(options) {
	const params = Object.entries(options).filter(([, v]) => v !== void 0).map(([k, v]) => `${k}=${String(v)}`).join(",");
	return params ? ` ${params}` : "";
}
/**
* Logs an error message in GitHub Actions.
*
* @param err - The error, which can be of any type.
* @param options - Optional annotation parameters to pin the message to a file location.
*/
function logError(err, options) {
	const message = err instanceof Error ? err.message : String(err);
	const params = options ? formatAnnotationParams(options) : "";
	process.stdout.write(`::error${params}::${message}${EOL}`);
}
//#endregion
//#region node_modules/.pnpm/ghakit@1.0.0/node_modules/ghakit/dist/io.js
/**
* Retrieves the value of a GitHub Actions input.
*
* Input names are matched case-insensitively — `getInput("token")` and
* `getInput("TOKEN")` both read the same `INPUT_TOKEN` env var.
*
* @param name - The name of the GitHub Actions input.
* @returns The value of the GitHub Actions input, or an empty string if not set.
*/
function getInput(name) {
	return process.env[`INPUT_${name.toUpperCase()}`] ?? "";
}
//#endregion
//#region src/action.ts
async function mkdirAction() {
	const path = getInput("path");
	await mkdir(path, { recursive: true });
}
//#endregion
//#region src/main.ts
await mkdirAction().catch((err) => {
	logError(err);
	process.exitCode = 1;
});
//#endregion
export {};
