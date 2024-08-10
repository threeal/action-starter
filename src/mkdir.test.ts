import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { mkdirRecursive } from "./mkdir.js";

it("should create a directory recursively", async () => {
  if (fs.existsSync(path.join(os.tmpdir(), "path"))) {
    fs.rmdirSync(path.join(os.tmpdir(), "path"), { recursive: true });
  }

  mkdirRecursive(path.join(os.tmpdir(), "path/to/new/directory"));
  fs.existsSync(path.join(os.tmpdir(), "path/to/new/directory"));
});
