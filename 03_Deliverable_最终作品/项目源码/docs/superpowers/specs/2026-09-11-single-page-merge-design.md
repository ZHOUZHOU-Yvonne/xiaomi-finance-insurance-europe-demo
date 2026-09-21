# Xiaomi Financial Services Europe — Single-page Merge Design

## Goal

Merge the existing European financial-services overview, Germany financing page and Germany insurance page into one continuous English landing page. The public root URL becomes the only link users need to share, while the three existing URLs remain valid for backward compatibility.

## Canonical page and navigation

- `/` is the canonical public page.
- The page contains three major anchored sections in this order: Financial Services overview, Financing, Insurance.
- The persistent header links to `#financial-services`, `#finance` and `#insurance` on the same page.
- Calls to action between products use the same anchors instead of separate routes.
- Section IDs account for the sticky header so anchored content is not obscured.

## Legacy URL compatibility

- `/financial-services` redirects to `/#financial-services`.
- `/finance` redirects to `/#finance`.
- `/insurance` redirects to `/#insurance`.
- No existing externally shared URL becomes a dead link.

## Content structure

The merged page preserves the substance of all three current pages while reducing duplicate transitions and calls to action:

1. Xiaomi Financial Services Europe hero and connected-journey overview.
2. European service principles, customer journey, Germany launch-market context and partner roles.
3. Germany financing section with Balloon Finance, Operating Lease, comparison, calculator, process, end-of-term guidance and finance FAQs.
4. Germany insurance section with Basis, Komfort, Premium, cover comparison, Allianz quote journey, claims guidance, scenarios and insurance FAQs.
5. One consolidated support and closing section.

Santander and Allianz relationships retain their existing confirmed-service wording. Allianz quote and claims actions continue to open the corresponding Allianz pages directly.

## Local and hosted outputs

- The local project source is the source of truth.
- The hosted Site is published from the same tested source revision.
- After every requested update, a fresh dated ZIP archive is generated from that revision and copied to the desktop.
- Dependencies and generated build caches are excluded from the ZIP; lockfiles, source, images, tests and hosting metadata are included.

## Validation

- Unit tests continue to cover finance calculations.
- Rendered-page tests verify that `/` contains the overview, finance and insurance content.
- Route tests verify that each legacy URL redirects to the correct root-page anchor.
- The production build must complete before deployment.
- After deployment, the public root URL must return a successful anonymous response.

