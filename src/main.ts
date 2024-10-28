import { getInput, logError } from "gha-utils";
import { mkdirRecursive } from "./mkdir.js";

try {
  const path = getInput("path");
  mkdirRecursive(path);
} catch (err) {
  logError(err);
  process.exit(1);
}
