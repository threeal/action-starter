import { logError } from "ghakit/log";
import { mkdirAction } from "./action.js";

await mkdirAction().catch((err: unknown) => {
  logError(err);
  process.exitCode = 1;
});
