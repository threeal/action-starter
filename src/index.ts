import { error, getInput } from "gha-utils";
import { mkdirRecursive } from "./mkdir.js";

try {
  const path = getInput("path");
  mkdirRecursive(path);
} catch (err) {
  error(err);
  process.exit(1);
}
