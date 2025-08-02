import { getInput, logError } from "gha-utils";
import fsPromises from "node:fs/promises";

try {
  const path = getInput("path");
  await fsPromises.mkdir(path, { recursive: true });
} catch (err) {
  logError(err);
  process.exitCode = 1;
}
