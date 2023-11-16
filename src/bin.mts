#!/usr/bin/env node

import { mkdirRecursive } from "./mkdir.mjs";

mkdirRecursive(process.argv[2]);
