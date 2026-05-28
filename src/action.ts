import { getInput } from "ghakit/io";
import { mkdir } from "node:fs/promises";

export async function mkdirAction() {
  const path = getInput("path");
  await mkdir(path, { recursive: true });
}
