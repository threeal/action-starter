import { access, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { afterAll, beforeEach, expect, it, vi } from "vitest";

vi.mock("gha-utils");

const tmpDir = path.resolve(import.meta.dirname, ".main.test.tmp");

beforeEach(async () => {
  await rm(tmpDir, { recursive: true, force: true });
  await mkdir(tmpDir);
  process.exitCode = undefined;
  vi.resetModules();
});

afterAll(() => rm(tmpDir, { recursive: true, force: true }));

it("should create a directory recursively", async () => {
  const { getInput } = await import("gha-utils");
  vi.mocked(getInput).mockReturnValue(path.join(tmpDir, "new/directory"));

  await import("./main.js");

  await access(path.join(tmpDir, "new/directory"));
  expect(process.exitCode).toBeUndefined();
});

it("should fail to create a directory because a file already exists", async () => {
  await writeFile(path.join(tmpDir, "file"), "");

  const { getInput } = await import("gha-utils");
  vi.mocked(getInput).mockReturnValue(path.join(tmpDir, "file/child"));

  await import("./main.js");

  expect(process.exitCode).toBe(1);
});
