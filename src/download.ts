import { createWriteStream } from "node:fs";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

export async function downloadFile(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Failed to download ${url}: ${String(response.status)} ${response.statusText}`,
    );
  }

  if (!response.body) {
    throw new Error(`Failed to download ${url}: response has no body`);
  }

  const { pathname } = new URL(url);
  const fileName = pathname.slice(pathname.lastIndexOf("/") + 1);

  await pipeline(Readable.fromWeb(response.body), createWriteStream(fileName));
  return fileName;
}
