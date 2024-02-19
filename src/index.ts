import * as core from "@actions/core";
import { mkdirRecursive } from "./mkdir.js";

async function main() {
  const path = core.getInput("path", { required: true });
  mkdirRecursive(path);
}

main().catch((err) => core.setFailed(err));
