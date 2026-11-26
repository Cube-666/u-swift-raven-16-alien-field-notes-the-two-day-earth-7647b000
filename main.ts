// Alien Field Notes: The Two Day Earth Review
// Writes one original line — an alien tourist's review of planet Earth —
// to entry.txt in the output directory. The line is plain text, a single
// line, and stays within the 200-character gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Lovely blue planet, but the locals built a machine that knows everything and use it to argue with strangers. Four stars — the snacks were outstanding.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const text = LINE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (!text.trim()) {
  throw new Error("entry must not be only whitespace");
}

writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`Wrote ${text.length} characters to entry.txt`);
