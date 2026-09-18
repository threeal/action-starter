import { createWriteStream } from "node:fs";
import { appendFile } from "node:fs/promises";
import { EOL } from "node:os";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
//#region node_modules/.pnpm/ghakit@1.0.0/node_modules/ghakit/dist/vars.js
function getGitHubOutput() {
	return process.env.GITHUB_OUTPUT ?? "";
}
//#endregion
//#region node_modules/.pnpm/ghakit@1.0.0/node_modules/ghakit/dist/io.js
function getInput(name) {
	return process.env[`INPUT_${name.toUpperCase()}`] ?? "";
}
async function setOutput(name, value) {
	await appendFile(getGitHubOutput(), `${name}=${value}${EOL}`);
}
//#endregion
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
//#region src/download.ts
async function downloadFile(url) {
	const response = await fetch(url);
	if (!response.ok) throw new Error(`Failed to download ${url}: ${String(response.status)} ${response.statusText}`);
	if (!response.body) throw new Error(`Failed to download ${url}: response has no body`);
	const { pathname } = new URL(url);
	const fileName = pathname.slice(pathname.lastIndexOf("/") + 1);
	await pipeline(Readable.fromWeb(response.body), createWriteStream(fileName));
	return fileName;
}
//#endregion
//#region src/main.ts
try {
	await setOutput("path", await downloadFile(getInput("url")));
} catch (err) {
	logError(err);
	process.exitCode = 1;
}
//#endregion
export {};
