import { EOL } from 'os';
import 'fs';
import { mkdir } from 'fs/promises';
import 'path';

// node_modules/.pnpm/ghakit@1.0.0/node_modules/ghakit/dist/log.js
function logError(err, options) {
  const message = err instanceof Error ? err.message : String(err);
  const params = "";
  process.stdout.write(`::error${params}::${message}${EOL}`);
}
function getInput(name) {
  return process.env[`INPUT_${name.toUpperCase()}`] ?? "";
}
async function mkdirAction() {
  const path = getInput("path");
  await mkdir(path, { recursive: true });
}

// src/main.ts
await mkdirAction().catch((err) => {
  logError(err);
  process.exitCode = 1;
});
