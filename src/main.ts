import { getInput, setOutput } from "ghakit/io";
import { logError } from "ghakit/log";
import { downloadFile } from "./download.js";

try {
  const path = await downloadFile(getInput("url"));
  await setOutput("path", path);
} catch (err) {
  logError(err);
  process.exitCode = 1;
}
