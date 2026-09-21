import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders overview, finance and insurance on the canonical page", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Xiaomi Financial Services Europe/);
  assert.match(html, /Simple choices\. Clear protection\. More freedom to move\./);
  assert.match(html, /Balloon Finance/);
  assert.match(html, /Operating Lease/);
  assert.match(html, /36(?:<!-- -->)? months/);
  assert.match(html, /Illustrative, non-binding demo calculation/);
  assert.match(html, /Basis/);
  assert.match(html, /Komfort/);
  assert.match(html, /Premium/);
  assert.match(html, /Financing provided by Santander\./);
  assert.match(html, /Insurance provided and underwritten by Allianz\./);
  assert.match(html, /https:\/\/www\.allianz\.de\/auto\/kfz-versicherung\//);
  assert.equal(html.match(/id="support"/g)?.length, 1);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Building your site/);
});

for (const [pathname, destination] of [
  ["/financial-services", "/#financial-services"],
  ["/finance", "/#finance"],
  ["/insurance", "/#insurance"],
]) {
  test(`${pathname} redirects to ${destination}`, async () => {
    const response = await render(pathname);
    assert.ok([307, 308].includes(response.status));
    const location = new URL(response.headers.get("location"), "http://localhost");
    assert.equal(`${location.pathname}${location.hash}`, destination);
  });
}

test("uses demo-safe contact and legal wording", async () => {
  const response = await render("/");
  const html = await response.text();
  assert.match(html, /Demo contact details/);
  assert.match(html, /financialservices-demo@xiaomi\.com/);
  assert.match(html, /subject to final legal approval/);
});
