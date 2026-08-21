import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/main.ts"],
  outputOptions: {
    comments: false,
  },
});
