# Xiaomi Financial Services Europe Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a polished English three-route Xiaomi Financial Services Europe website demo with a working finance calculator, insurance comparison, long-form content, and responsive accessible behavior.

**Architecture:** Use the Sites starter's app router with three route-level pages and a small shared component system. Keep product copy and comparison data in typed content modules, keep finance mathematics in a pure tested utility, and compose each long page from reusable editorial sections without introducing persistence or external APIs.

**Tech Stack:** Sites vinext starter, React, TypeScript, CSS, Lucide icons, Vitest for pure logic, production build validation, Sites hosting.

**Spec:** `docs/superpowers/specs/2026-09-03-xiaomi-financial-services-europe-design.md`

## Global Constraints

- Final page copy is English only.
- Use Xiaomi SU7 Ultra as the sole hero vehicle.
- Visual direction is bright, minimal, and automotive editorial: white/light grey, black typography, large imagery, restrained Xiaomi orange.
- Products are Balloon Finance and Operating Lease with 36, 48, and 60 month terms.
- Insurance tiers are Basis, Komfort, and Premium.
- Write `Financing provided by Santander.` as a confirmed relationship.
- Write `Insurance provided and underwritten by Allianz.` as a confirmed relationship.
- Use Santander and Allianz as text only; never use partner logos.
- Allianz calls to action link directly to the official Allianz Germany motor-insurance page.
- Do not invent binding rates, premiums, excesses, regulatory credentials, guaranteed approvals, or live availability outside Germany.
- Label illustrative calculations and invented contact details visibly.
- Support desktop, tablet, mobile, keyboard navigation, visible focus states, semantic landmarks, and reduced motion.
- Do not add persistence, authentication, user accounts, or external data integrations.

## File Structure

- `app/layout.tsx` — global metadata and shared site shell
- `app/page.tsx` — redirects or renders the European overview as the default entry
- `app/financial-services/page.tsx` — European overview route
- `app/finance/page.tsx` — Germany finance route
- `app/insurance/page.tsx` — Germany insurance route
- `app/globals.css` — tokens, shared layout, responsive behavior, motion, and accessibility
- `components/site-header.tsx` — responsive navigation and active route state
- `components/site-footer.tsx` — common legal, partner, and demo information
- `components/hero.tsx` — editorial hero with vehicle imagery and actions
- `components/editorial.tsx` — reusable section heading, feature grid, journey, and CTA primitives
- `components/faq.tsx` — accessible accordion
- `components/finance-calculator.tsx` — interactive calculator UI and result announcements
- `components/insurance-comparison.tsx` — responsive tier comparison
- `lib/content.ts` — typed route content, FAQs, comparisons, and partner copy
- `lib/finance.ts` — pure finance/lease calculation logic
- `lib/finance.test.ts` — deterministic calculation and validation tests
- `public/images/*` — approved SU7 Ultra and supporting imagery
- `public/og.png` — branded social preview image

---

### Task 1: Initialize the Site and Establish the Shared Shell

**Files:**
- Create/modify: `.openai/hosting.json`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Create: `components/site-header.tsx`
- Create: `components/site-footer.tsx`

**Interfaces:**
- Produces: `<SiteHeader />`, `<SiteFooter />`, shared CSS tokens, and default entry behavior used by all later route tasks.

- [ ] **Step 1: Initialize the Sites starter in the workspace**

Run the Sites initializer once at the workspace root and retain installation until complete. Inspect only `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, and `.openai/hosting.json` after creation.

- [ ] **Step 2: Create the shared navigation component**

Implement:

```tsx
export function SiteHeader() {
  const pathname = usePathname();
  const links = [
    { href: "/financial-services", label: "Financial Services" },
    { href: "/finance", label: "Financing" },
    { href: "/insurance", label: "Insurance" },
  ];
  // Render semantic nav, active aria-current, mobile toggle, Support anchor,
  // and primary Explore your options action.
}
```

- [ ] **Step 3: Create the shared footer**

Render route links, demo contact details, partner relationship copy, legal links, and the exact disclaimer:

```text
Product details and legal entity roles shown in this demo remain subject to final legal approval.
```

- [ ] **Step 4: Establish global tokens and accessibility behavior**

Define exact tokens for `--ink`, `--muted`, `--surface`, `--line`, `--orange`, content widths, radii, shadows, focus rings, responsive breakpoints, and a `prefers-reduced-motion` override.

- [ ] **Step 5: Replace starter metadata and default route**

Set title to `Xiaomi Financial Services Europe`, add the spec's description, remove starter preview markers, and make `/` render or redirect to `/financial-services`.

- [ ] **Step 6: Verify the shared shell**

Run the development build and request `/financial-services`. Expected: a non-error response, visible shared navigation/footer, no starter skeleton, and no runtime error.

- [ ] **Step 7: Commit the shared shell if Git is available**

```bash
git add .openai app components package.json package-lock.json
git commit -m "feat: establish Xiaomi financial services site shell"
```

If the workspace remains outside a Git repository, record that fact and continue without creating an unrelated repository.

### Task 2: Add Typed Content and Editorial Components

**Files:**
- Create: `lib/content.ts`
- Create: `components/hero.tsx`
- Create: `components/editorial.tsx`
- Create: `components/faq.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Produces: `FaqItem`, `Feature`, `JourneyStep`, `HeroProps`, `<Hero />`, `<SectionIntro />`, `<FeatureGrid />`, `<Journey />`, `<EditorialCta />`, and `<Faq />`.
- Consumes: shared CSS tokens and shell from Task 1.

- [ ] **Step 1: Define shared content types and exact relationship constants**

```ts
export type FaqItem = { question: string; answer: string };
export type Feature = { title: string; body: string; icon: string };
export type JourneyStep = { index: string; title: string; body: string };

export const partnerCopy = {
  finance: "Financing provided by Santander.",
  insurance: "Insurance provided and underwritten by Allianz.",
  legal: "Product details and legal entity roles shown in this demo remain subject to final legal approval.",
} as const;
```

- [ ] **Step 2: Add complete route content to `lib/content.ts`**

Encode all headings, benefit copy, journey steps, lifecycle explanations, conversion cards, and every FAQ specified in the design document. Keep page components free of long copy literals.

- [ ] **Step 3: Implement the shared hero**

```tsx
export type HeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  primary: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string };
  partnerLine?: string;
};
```

Render a semantic heading, short copy, action group, partner line, and responsive image without placing text over a low-contrast image region.

- [ ] **Step 4: Implement editorial primitives**

Build small focused components for section intros, feature grids, horizontal journeys, comparison summaries, and large CTAs. Use Lucide icons through a controlled icon-name map rather than custom SVG markup.

- [ ] **Step 5: Implement the accessible FAQ accordion**

Use native `<details>` and `<summary>` elements or correctly connected `button`/region semantics. Ensure questions remain readable without JavaScript and focus is visible.

- [ ] **Step 6: Verify component rendering**

Temporarily render representative hero, feature grid, journey, and FAQ content on `/financial-services`; run the build and confirm no type or runtime errors.

- [ ] **Step 7: Commit content primitives if Git is available**

```bash
git add lib/content.ts components app/globals.css
git commit -m "feat: add financial services editorial system"
```

### Task 3: Build the European Financial Services Route

**Files:**
- Create: `app/financial-services/page.tsx`
- Modify: `lib/content.ts`
- Modify: `app/globals.css`
- Add: `public/images/financial-services-hero.*`

**Interfaces:**
- Consumes: `<Hero />`, `<FeatureGrid />`, `<Journey />`, `<EditorialCta />`, `partnerCopy`, and European route content.
- Produces: complete `/financial-services` route and the first meaningful product-specific preview.

- [ ] **Step 1: Acquire and inspect suitable SU7 Ultra imagery**

Prefer official Xiaomi imagery from the supplied Xiaomi references. Store only assets needed for the three routes and record descriptive alt text.

- [ ] **Step 2: Compose the first meaningful preview slice**

Render the full hero, shared navigation, financing/insurance gateway, and first brand-promise section. Run the development server, request the exact local route, require a successful response, then open it once in Codex.

- [ ] **Step 3: Complete the route**

Add the four principles, customer journey, Germany-first market presence, text-only partner ecosystem, country/service CTA, and legal availability notes.

- [ ] **Step 4: Add responsive editorial behavior**

At narrow widths, stack gateway cards and journey steps, preserve image focal points, and keep primary actions at least 44px high.

- [ ] **Step 5: Verify the route**

Run a production build. Request `/financial-services` and `/`; expect successful responses and correct default entry behavior.

- [ ] **Step 6: Commit the European route if Git is available**

```bash
git add app/financial-services app/page.tsx lib/content.ts app/globals.css public/images
git commit -m "feat: add European financial services overview"
```

### Task 4: Implement and Test the Finance Calculator

**Files:**
- Create: `lib/finance.ts`
- Create: `lib/finance.test.ts`
- Create: `components/finance-calculator.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Produces: `calculateBalloon(input): BalloonResult`, `calculateLease(input): LeaseResult`, and `<FinanceCalculator />`.
- Consumes: terms `36 | 48 | 60`, annual mileage, vehicle price, and deposit.

- [ ] **Step 1: Write failing calculation tests**

```ts
import { describe, expect, it } from "vitest";
import { calculateBalloon, calculateLease } from "./finance";

describe("illustrative finance calculations", () => {
  it("returns a stable balloon payment and final payment", () => {
    const result = calculateBalloon({ vehiclePrice: 119900, deposit: 20000, term: 48, annualMileage: 10000 });
    expect(result.finalPayment).toBe(47960);
    expect(result.monthlyPayment).toBeGreaterThan(900);
    expect(result.monthlyPayment).toBeLessThan(1800);
  });

  it("increases lease cost for higher annual mileage", () => {
    const low = calculateLease({ vehiclePrice: 119900, deposit: 12000, term: 48, annualMileage: 10000 });
    const high = calculateLease({ vehiclePrice: 119900, deposit: 12000, term: 48, annualMileage: 20000 });
    expect(high.monthlyPayment).toBeGreaterThan(low.monthlyPayment);
  });

  it("clamps a deposit above the allowed demo maximum", () => {
    const result = calculateBalloon({ vehiclePrice: 119900, deposit: 100000, term: 36, annualMileage: 10000 });
    expect(result.assumedDeposit).toBe(47960);
  });
});
```

- [ ] **Step 2: Run tests and confirm failure**

Run `npm test -- lib/finance.test.ts`. Expected: failure because the finance module does not exist.

- [ ] **Step 3: Implement deterministic demo formulas**

```ts
export type FinanceInput = {
  vehiclePrice: number;
  deposit: number;
  term: 36 | 48 | 60;
  annualMileage: number;
};

export function calculateBalloon(input: FinanceInput): BalloonResult {
  const assumedDeposit = Math.min(Math.max(input.deposit, 0), input.vehiclePrice * 0.4);
  const finalPayment = Math.round(input.vehiclePrice * 0.4);
  const principal = input.vehiclePrice - assumedDeposit;
  const demoAnnualRate = 0.0599;
  const monthlyRate = demoAnnualRate / 12;
  const financedForPayments = Math.max(principal - finalPayment / Math.pow(1 + monthlyRate, input.term), 0);
  const monthlyPayment = Math.round(financedForPayments * monthlyRate / (1 - Math.pow(1 + monthlyRate, -input.term)));
  return { assumedDeposit, finalPayment, monthlyPayment, demoAnnualRate };
}
```

Implement lease logic using a term-based residual assumption, mileage adjustment, deposit amortisation, and a fixed demo service factor. Return all assumptions for display.

- [ ] **Step 4: Run tests and confirm pass**

Run `npm test -- lib/finance.test.ts`. Expected: all three tests pass.

- [ ] **Step 5: Build the calculator UI**

Add product toggle, deposit range/input, term segmented control, mileage control, result summary, assumption disclosure, and `aria-live="polite"` on the main result.

- [ ] **Step 6: Verify production compilation**

Run the production build. Expected: no client/server boundary errors and no TypeScript errors.

- [ ] **Step 7: Commit calculator work if Git is available**

```bash
git add lib/finance.ts lib/finance.test.ts components/finance-calculator.tsx app/globals.css package.json package-lock.json
git commit -m "feat: add illustrative finance calculator"
```

### Task 5: Build the Germany Finance Route

**Files:**
- Create: `app/finance/page.tsx`
- Modify: `lib/content.ts`
- Modify: `app/globals.css`
- Add: `public/images/finance-hero.*`

**Interfaces:**
- Consumes: shared editorial components, `<FinanceCalculator />`, finance content, and `partnerCopy.finance`.
- Produces: complete `/finance` route.

- [ ] **Step 1: Compose hero and core benefit sections**

Use the SU7 Ultra, `Financing provided by Santander.`, two primary actions, and the four high-frequency benefits from the Feishu research.

- [ ] **Step 2: Add product education and comparison**

Explain Balloon Finance and Operating Lease in plain English, then compare ownership intent, payment shape, mileage, end-of-term outcome, residual risk, and suitability.

- [ ] **Step 3: Integrate the calculator**

Place the calculator after product comparison, ensure the calculator heading is linkable from the hero, and keep the non-binding label visible at all sizes.

- [ ] **Step 4: Add lifecycle, services, and conversion sections**

Render the application journey, end-of-term responsibilities, insurance/warranty/roadside links, configuration path, available-vehicle path, advisor path, and customer portal card.

- [ ] **Step 5: Add complete FAQs and support**

Include the Feishu balloon and operating-lease questions across application, monthly payments, final payment, mileage, wear, insurance, early termination, rejection, and contract changes. Show the invented contact details with `Demo contact details`.

- [ ] **Step 6: Verify the route**

Run the production build and request `/finance`. Expected: success, calculator visible, both product sections present, FAQ present, Santander relationship present, and no partner logo.

- [ ] **Step 7: Commit finance page if Git is available**

```bash
git add app/finance lib/content.ts app/globals.css public/images
git commit -m "feat: add Germany finance landing page"
```

### Task 6: Build the Insurance Comparison and Germany Insurance Route

**Files:**
- Create: `components/insurance-comparison.tsx`
- Create: `app/insurance/page.tsx`
- Modify: `lib/content.ts`
- Modify: `app/globals.css`
- Add: `public/images/insurance-hero.*`

**Interfaces:**
- Produces: `<InsuranceComparison />` and complete `/insurance` route.
- Consumes: shared editorial components, insurance content, and `partnerCopy.insurance`.

- [ ] **Step 1: Define complete insurance comparison data**

Create typed rows for liability, partial/full comprehensive, theft, glass, weather, animal damage, battery/high voltage, charging, roadside assistance, European travel, new-vehicle protection, driver protection, repair network, and deductible visibility. Use `Included`, `Optional`, or `See final policy wording`; do not invent numeric limits.

- [ ] **Step 2: Implement responsive comparison UI**

Desktop uses a semantic table. Mobile uses three accessible tier summaries without hiding row labels. Mark Komfort as `Recommended` visually and in accessible text.

- [ ] **Step 3: Compose insurance hero and benefits**

Use `Insurance provided and underwritten by Allianz.`, direct Allianz CTA, six research-backed benefits, and EV-specific messaging.

- [ ] **Step 4: Add tiers, comparison, and quote journey**

Render Basis/Komfort/Premium cards, detailed comparison, and the quote/eVB journey. Use the official Allianz Germany motor-insurance URL for every Allianz quote CTA.

- [ ] **Step 5: Add claims, scenarios, cross-sell, FAQs, and support**

Include the claims preparation checklist, 24-hour service concept, roadside/towing/repair/overseas guidance, three scenario stories, finance cross-link, all four FAQ groups, documents, invented contact details, and legal wording.

- [ ] **Step 6: Verify external destinations and route rendering**

Run the production build and request `/insurance`. Confirm Allianz links use `https://www.allianz.de/auto/kfz-versicherung/`, open directly, and no Allianz logo is present.

- [ ] **Step 7: Commit insurance page if Git is available**

```bash
git add app/insurance components/insurance-comparison.tsx lib/content.ts app/globals.css public/images
git commit -m "feat: add Germany insurance landing page"
```

### Task 7: Social Preview, Final Validation, and Publishing

**Files:**
- Add: `public/og.png`
- Modify: `app/layout.tsx`
- Modify as needed: all route and style files touched above

**Interfaces:**
- Consumes: completed site from Tasks 1–6.
- Produces: validated production build, social metadata, saved version, and deployed Sites URL.

- [ ] **Step 1: Create and inspect one branded social preview**

Generate a single landscape card with exact title `Xiaomi Financial Services Europe` and supporting line `Simple choices. Clear protection. More freedom to move.` Match the white, black, grey, and orange site system. Inspect text accuracy before use.

- [ ] **Step 2: Wire site-wide metadata**

Set Open Graph and X title, description, and `/og.png` metadata in `app/layout.tsx`, using the trusted deployment origin when available.

- [ ] **Step 3: Run automated verification**

Run:

```bash
npm test
npm run build
```

Expected: all finance tests pass and production build exits successfully.

- [ ] **Step 4: Verify all routes without visual browser inspection**

Request `/`, `/financial-services`, `/finance`, and `/insurance` from the active local server. Expected: HTTP success for every route with no runtime exception.

- [ ] **Step 5: Check required copy mechanically**

Search source files and confirm exact presence of:

```text
Financing provided by Santander.
Insurance provided and underwritten by Allianz.
Illustrative, non-binding demo calculation
Demo contact details
```

Confirm partner logo assets are absent.

- [ ] **Step 6: Check accessibility and responsive rules mechanically**

Confirm semantic headings, landmarks, alt text, native or ARIA-correct accordions, visible focus styles, `aria-live` calculator output, 44px touch targets, and reduced-motion CSS.

- [ ] **Step 7: Save and deploy through Sites**

Read `.openai/hosting.json`, reuse its project ID if present, push the exact validated source state, save a version, deploy that saved version, and inspect status until terminal.

- [ ] **Step 8: Final handoff**

Return the deployed URL as the primary deliverable. Mention that all three routes, calculator, comparisons, direct Allianz link, responsive behavior, and production build were verified. Stop the retained local server after publishing completes.

