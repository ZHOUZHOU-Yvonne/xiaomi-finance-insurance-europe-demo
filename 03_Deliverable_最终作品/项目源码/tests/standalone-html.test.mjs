import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const deliverableDir = new URL(
  "../handoff/03_Deliverable_最终作品/本地HTML版本/",
  import.meta.url,
);

const pages = [
  ["01_欧洲金保介绍页.html", "Xiaomi Financial Services Europe"],
  ["02_金融介绍页.html", "Balloon Finance"],
  ["03_保险介绍页.html", "Three levels. One clear decision."],
];

for (const [filename, expectedCopy] of pages) {
  test(`${filename} is a self-contained offline page`, async () => {
    const html = await readFile(new URL(filename, deliverableDir), "utf8");

    assert.match(html, /^<!doctype html>/i);
    assert.match(html, new RegExp(expectedCopy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(html, /<style>/);
    assert.match(html, /data:image\/png;base64,/);
    assert.doesNotMatch(html, /(?:href|src)=["']\/(?!\/)/);
    assert.doesNotMatch(html, /<script[^>]+src=/);
    assert.doesNotMatch(html, /<link[^>]+rel=["']stylesheet["']/);
  });
}

test("offline pages link to each other", async () => {
  const overview = await readFile(new URL(pages[0][0], deliverableDir), "utf8");
  assert.match(overview, /href="02_金融介绍页\.html"/);
  assert.match(overview, /href="03_保险介绍页\.html"/);
});

test("the offline finance calculator keeps its local interaction", async () => {
  const finance = await readFile(new URL(pages[1][0], deliverableDir), "utf8");
  assert.match(finance, /data-offline-calculator/);
  assert.match(finance, /function calculateBalloon/);
  assert.match(finance, /function calculateLease/);
});
