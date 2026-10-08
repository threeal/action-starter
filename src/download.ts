import { createWriteStream } from "node:fs";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

/**
 * Downloads a file from the given URL into the current working directory.
 *
 * The file is named after the last segment of the URL's path, overwriting any
 * existing file with the same name.
 * @param url - The URL of the file to download.
 * @returns The name of the downloaded file.
 */
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
