# Xiaomi Financial Services Europe Single-page Merge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the three separate introduction pages with one canonical long-form page while preserving all three legacy URLs as anchor redirects.

**Architecture:** Compose three focused server-rendered section components into `app/page.tsx`. Keep interactive finance and insurance components unchanged, replace route pages with redirects, and use one-page anchor navigation in the shared header.

**Tech Stack:** TypeScript, React, Vinext/Next-compatible App Router, Vitest, Node test runner, Sites hosting.

**Spec:** `docs/superpowers/specs/2026-09-11-single-page-merge-design.md`

## Global Constraints

- `/` is the canonical public URL.
- Preserve every substantive section from the overview, financing and insurance pages.
- Preserve confirmed Santander and Allianz service wording and direct Allianz links.
- `/financial-services`, `/finance` and `/insurance` must redirect to their corresponding root-page anchors.
- Every published update must also produce a fresh desktop ZIP from the same committed source revision.

---

### Task 1: Define merged-page and legacy-route behavior with tests

**Files:**
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: compiled worker `dist/server/index.js` through `render(pathname)`.
- Produces: assertions for canonical content and legacy route redirects.

- [ ] **Step 1: Replace separate-page expectations with a failing canonical-page test**

```js
test("renders overview, finance and insurance on the canonical page", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const copy of [
    "Xiaomi Financial Services Europe",
    "Balloon Finance",
    "Operating Lease",
    "Basis",
    "Komfort",
    "Premium",
    "Financing provided by Santander.",
    "Insurance provided and underwritten by Allianz.",
  ]) assert.match(html, new RegExp(copy.replace(/[.]/g, "\\.")));
});
```

- [ ] **Step 2: Add failing redirect tests**

```js
for (const [pathname, destination] of [
  ["/financial-services", "/#financial-services"],
  ["/finance", "/#finance"],
  ["/insurance", "/#insurance"],
]) {
  test(`${pathname} redirects to ${destination}`, async () => {
    const response = await render(pathname);
    assert.ok([307, 308].includes(response.status));
    assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname + new URL(response.headers.get("location"), "http://localhost").hash, destination);
  });
}
```

- [ ] **Step 3: Run the current build and rendered tests to verify the new expectations fail**

Run: `npm run build && node --test tests/rendered-html.test.mjs`
Expected: FAIL because `/` does not yet contain all three products and legacy routes still return page content.

- [ ] **Step 4: Commit the red tests together with Task 2 implementation after they pass**

The tests intentionally remain uncommitted until the implementation completes the same behavior slice.

### Task 2: Build the canonical long page and redirect legacy routes

**Files:**
- Create: `components/sections/financial-services-section.tsx`
- Create: `components/sections/finance-section.tsx`
- Create: `components/sections/insurance-section.tsx`
- Modify: `app/page.tsx`
- Modify: `app/financial-services/page.tsx`
- Modify: `app/finance/page.tsx`
- Modify: `app/insurance/page.tsx`
- Modify: `components/site-header.tsx`
- Modify: `app/globals.css`
- Test: `tests/rendered-html.test.mjs`

**Interfaces:**
- Produces: `FinancialServicesSection()`, `FinanceSection()` and `InsuranceSection()` React server components.
- Produces: DOM anchors `financial-services`, `finance`, `insurance`, `finance-calculator`, `insurance-cover` and `support`.
- Consumes: `FinanceCalculator`, `InsuranceComparison`, `Faq`, `Hero`, and copy exports from `lib/content.ts`.

- [ ] **Step 1: Extract each route's substantive content into a focused section component**

```diff
- export default function FinancePage() {
-   return <>
+ export function FinanceSection() {
+   return <section id="finance" className="page-chapter">

-   </>;
+   </section>;
  }
```

Move every JSX child between the current fragment boundaries without rewriting its copy or interactive components. Apply the same rename-and-wrapper transformation to the current financial-services and insurance page bodies using IDs `financial-services` and `insurance`. Remove only the overview closing CTA, the finance-to-insurance service banner, the insurance-to-finance service banner and the finance contact panel; retain the insurance contact panel as the single consolidated support section and add `id="support"` to it.

- [ ] **Step 2: Compose the canonical page in the agreed order**

```tsx
export default function HomePage() {
  return (
    <>
      <FinancialServicesSection />
      <FinanceSection />
      <InsuranceSection />
    </>
  );
}
```

End the insurance section with the single consolidated support panel.

- [ ] **Step 3: Replace legacy route pages with redirects**

```tsx
import { redirect } from "next/navigation";

export default function FinancePage() {
  redirect("/#finance");
}
```

Repeat with `/#financial-services` and `/#insurance` for the other route files.

- [ ] **Step 4: Change the shared header and internal actions to root-page anchors**

```ts
const links = [
  { href: "/#financial-services", label: "Financial Services" },
  { href: "/#finance", label: "Financing" },
  { href: "/#insurance", label: "Insurance" },
];
```

The header brand links to `/`; support links to `/#support`.

- [ ] **Step 5: Add chapter spacing and anchor offsets**

```css
.page-chapter { scroll-margin-top: 5rem; }
.page-chapter + .page-chapter { border-top: 1px solid var(--line); }
```

Preserve the existing responsive visual language and calculator/comparison behavior.

- [ ] **Step 6: Run the full test suite**

Run: `npm test`
Expected: all Vitest tests, production build and rendered-page tests pass.

- [ ] **Step 7: Commit the page merge**

```bash
git add app components tests
git commit -m "feat: merge financial services into one page"
```

### Task 3: Publish and synchronize the local project package

**Files:**
- Update generated artifact: `outputs/Xiaomi-Financial-Services-Europe-Demo-2026-09-11.zip`

**Interfaces:**
- Consumes: the tested and committed repository HEAD.
- Produces: one public canonical URL and a desktop ZIP from the same source revision.

- [ ] **Step 1: Re-run verification on the exact committed source**

Run: `npm test && git status --short`
Expected: all tests pass and only ignored/generated artifacts are absent from status.

- [ ] **Step 2: Publish the committed source as a new Sites version**

Package the production build with the Sites helper, save a version using the exact pushed commit SHA, deploy it to the site's existing public access, and wait for status `succeeded`.

- [ ] **Step 3: Verify the public page without authentication**

Request `https://xiaomi-financial-services-europe-demo.zhouyajiezzz.chatgpt.site/` without credentials.
Expected: HTTP 200.

- [ ] **Step 4: Generate the synchronized source archive**

```bash
git archive --format=zip \
  --prefix="Xiaomi-Financial-Services-Europe-Demo/" \
  --output="outputs/Xiaomi-Financial-Services-Europe-Demo-2026-09-11.zip" \
  HEAD
```

- [ ] **Step 5: Validate and copy the archive to the desktop**

```bash
unzip -t outputs/Xiaomi-Financial-Services-Europe-Demo-2026-09-11.zip
cp outputs/Xiaomi-Financial-Services-Europe-Demo-2026-09-11.zip /Users/zhouzhou/Desktop/
shasum -a 256 outputs/Xiaomi-Financial-Services-Europe-Demo-2026-09-11.zip /Users/zhouzhou/Desktop/Xiaomi-Financial-Services-Europe-Demo-2026-09-11.zip
```

Expected: no archive errors and matching SHA-256 values.
