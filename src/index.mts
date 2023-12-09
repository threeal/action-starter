import core from "@actions/core";
import { mkdirRecursive } from "./mkdir.mjs";

async function main() {
  const path = core.getInput("path", { required: true });
  mkdirRecursive(path);
}

main().catch((err) => core.setFailed(err));
