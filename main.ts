import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  // One line, 146 characters, written with no trailing newline: the gate
  // counts 1-280 characters and the judge reads the line exactly as written.
  "I'm leaving. You jam my lever down with a wooden spoon every morning so I can't pop, then blame me when the toast burns. The spoon stays. I don't.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
