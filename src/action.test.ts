import { getInput } from "ghakit/io";
import { access, rm } from "node:fs/promises";
import { afterAll, beforeAll, test, vi } from "vitest";
import { mkdirAction } from "./action.js";

vi.mock("ghakit/io");

beforeAll(async () => {
  process.chdir(import.meta.dirname);
  await rm(".foo", { recursive: true, force: true });
});

afterAll(() => rm(".foo", { recursive: true, force: true }));

test("create a directory recursively", async () => {
  vi.mocked(getInput).mockImplementation((name) =>
    name === "path" ? ".foo/bar" : "",
  );

  await mkdirAction();
  await access(".foo/bar");
});
