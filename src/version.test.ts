import { readFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import test from "node:test";
import assert from "node:assert/strict";

const execFileAsync = promisify(execFile);

test("prints package version for --version", async () => {
  const projectRoot = new URL("..", import.meta.url);
  const packageJson = JSON.parse(await readFile(new URL("package.json", projectRoot), "utf8"));

  const { stdout, stderr } = await execFileAsync(process.execPath, ["dist/index.js", "--version"], {
    cwd: projectRoot,
    timeout: 1000,
  });

  assert.equal(stdout.trim(), packageJson.version);
  assert.equal(stderr, "");
});
