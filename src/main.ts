import { getInput, logError } from "gha-utils";
import { mkdir } from "node:fs/promises";

try {
  const path = getInput("path");
  await mkdir(path, { recursive: true });
} catch (err) {
  logError(err);
  process.exitCode = 1;
}
