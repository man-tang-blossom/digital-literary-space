import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = resolve(root, "web", "dist");
const target = resolve(root, "dist");
const hostingSource = resolve(root, "web", ".openai", "hosting.json");
const hostingTarget = resolve(target, ".openai", "hosting.json");

await rm(target, { recursive: true, force: true });
await cp(source, target, { recursive: true });
await mkdir(resolve(target, ".openai"), { recursive: true });
await cp(hostingSource, hostingTarget);
