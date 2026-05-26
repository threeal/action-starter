import { getInput } from "ghakit/io";
import { logError } from "ghakit/log";
import { mkdir } from "node:fs/promises";

try {
  const path = getInput("path");
  await mkdir(path, { recursive: true });
} catch (err) {
  logError(err);
  process.exitCode = 1;
}
