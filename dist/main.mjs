import { EOL } from "node:os";
import { mkdir } from "node:fs/promises";
//#region node_modules/.pnpm/ghakit@1.0.0/node_modules/ghakit/dist/log.js
function formatAnnotationParams(options) {
	const params = Object.entries(options).filter(([, v]) => v !== void 0).map(([k, v]) => `${k}=${String(v)}`).join(",");
	return params ? ` ${params}` : "";
}
function logError(err, options) {
	const message = err instanceof Error ? err.message : String(err);
	const params = options ? formatAnnotationParams(options) : "";
	process.stdout.write(`::error${params}::${message}${EOL}`);
}
//#endregion
//#region node_modules/.pnpm/ghakit@1.0.0/node_modules/ghakit/dist/io.js
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
