import { jest } from "@jest/globals";

jest.unstable_mockModule("fs", () => ({
  default: {
    mkdirSync: jest.fn(),
  },
}));

it("should create a directory recursively", async () => {
  const fs = (await import("fs")).default;
  const { mkdirRecursive } = await import("./mkdir.js");

  mkdirRecursive("path/to/new/directory");

  expect(fs.mkdirSync).toHaveBeenCalledTimes(1);
  expect(fs.mkdirSync).toHaveBeenLastCalledWith("path/to/new/directory", {
    recursive: true,
  });
});
