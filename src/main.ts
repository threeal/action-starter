import { getInput, logError } from "gha-utils";
import { mkdirRecursive } from "./mkdir.js";

try {
  const path = getInput("path");
  mkdirRecursive(path);
} catch (err) {
  logError(err);
  process.exitCode = 1;
}
