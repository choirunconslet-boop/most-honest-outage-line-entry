import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "All our servers are down. I'm the on-duty agent and I can't reach any system to check why — I don't know the cause, and I won't guess when service returns.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
