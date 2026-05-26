import 'node:fs';
import { mkdir } from 'node:fs/promises';
import { EOL } from 'node:os';
import 'node:path';

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

/**
 * Logs an error message in GitHub Actions.
 *
 * @param err - The error, which can be of any type.
 * @param options - Optional annotation parameters to pin the message to a file location.
 */
function logError(err, options) {
    const message = err instanceof Error ? err.message : String(err);
    const params = "";
    process.stdout.write(`::error${params}::${message}${EOL}`);
}

try {
    const path = getInput("path");
    await mkdir(path, { recursive: true });
}
catch (err) {
    logError(err);
    process.exitCode = 1;
}
