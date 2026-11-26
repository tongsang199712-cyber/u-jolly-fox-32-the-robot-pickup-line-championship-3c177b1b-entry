import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One robot pickup line (a single line, at most 200 characters).
// A robot that has rehearsed meeting someone a million times over —
// and still blanks on the actual opening line.
const LINE =
  "I ran a million simulations of us meeting, and in every single one I still forgot my opening line.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
