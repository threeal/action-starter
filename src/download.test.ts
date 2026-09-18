import { createHash } from "node:crypto";
import { readFile, rm } from "node:fs/promises";
import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { downloadFile } from "./download.js";

describe("downloadFile", { concurrent: true }, () => {
  beforeAll(async () => {
    process.chdir(import.meta.dirname);
    await rm("UNLICENSE", { force: true });
  });

  afterAll(() => rm("UNLICENSE", { force: true }));

  test("download a file", async () => {
    const path = await downloadFile("https://unlicense.org/UNLICENSE");
    expect(path).toBe("UNLICENSE");

    const content = await readFile(path);
    expect(createHash("sha256").update(content).digest("hex")).toBe(
      "b5065838cbac452dfc855ba6e6e031481ad2c68406f70d21ead9321374653e6c",
    );
  });

  test("throw an error for a missing file", async () => {
    await expect(
      downloadFile("https://unlicense.org/does-not-exist"),
    ).rejects.toThrow("404 Not Found");
  });

  test("throw an error for a response with no body", async () => {
    await expect(
      downloadFile("https://www.google.com/generate_204"),
    ).rejects.toThrow("response has no body");
  });
});
