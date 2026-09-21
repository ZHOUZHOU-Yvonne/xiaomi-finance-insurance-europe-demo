# Xiaomi Financial Services Europe Demo — Design Specification

## 1. Objective

Create a polished, public-facing English website demo for Xiaomi Auto financial and insurance services in Europe. The experience must be credible enough for leadership review and future production-site discussion while remaining clearly identifiable as a demo wherever figures or contact details are illustrative.

The website has three long-form routes:

- `/financial-services` — European brand-level financial services overview
- `/finance` — Germany consumer finance landing page
- `/insurance` — Germany motor insurance landing page

The site uses Xiaomi SU7 Ultra as the sole hero vehicle. It follows Xiaomi Auto's bright, minimal visual language: large vehicle imagery, generous white space, short headlines, restrained motion, white/light-grey surfaces, black typography, and Xiaomi orange for primary actions.

## 2. Source Inputs

Content and structure are derived from:

- Feishu document “德国主机厂官网金融产品页面方案”, revision 4002
- Xiaomi Auto official website
- Xiaomi Europe purchase-flow demo
- Xiaomi delivery-flow demo
- Current Toyota Europe and Toyota Germany finance/insurance landing-page patterns
- Confirmed product parameters supplied for this demo

The Feishu research establishes the following design priorities:

- Clear product education before conversion
- Separate explanations for balloon finance and operating lease
- Transparent presentation of deposit, monthly payment, term, mileage, final payment, and possible fees
- Product comparison and guided selection
- Customer journey from configuration to application, signing, delivery, and contract management
- Strong FAQ coverage across the full contract lifecycle
- Insurance education for liability, partial comprehensive, and comprehensive coverage
- EV-specific coverage themes: battery, high-voltage system, and charging scenarios
- A post-purchase claims and roadside-assistance area, following Toyota's mature lifecycle pattern
- Cross-navigation between vehicle, finance, insurance, service, customer portal, and support
- Partner identity, regulated-provider roles, terms, exclusions, privacy, complaints, and legal disclosures

## 3. Confirmed Product Decisions

### Finance

- Products: Balloon Finance and Operating Lease
- Available terms: 36, 48, and 60 months
- Vehicle: Xiaomi SU7 Ultra
- Financing provider: Santander
- The relationship is presented as formally confirmed, not proposed
- The page includes an interactive illustrative calculator

### Insurance

- Products: Basis, Komfort, and Premium
- Insurance provider and underwriter: Allianz
- The relationship is presented as formally confirmed, not proposed
- Allianz is referenced in text only; no partner logo is used
- Allianz calls to action link directly to the official Allianz Germany motor-insurance destination

### Contact details

Use invented, visibly demo-only Xiaomi contact information:

- `+49 800 946 0000`
- `financialservices-demo@xiaomi.com`

Display “Demo contact details” adjacent to these values.

## 4. Shared Experience

### Navigation

Shared sticky navigation contains:

- Xiaomi Auto wordmark treatment
- Financial Services
- Financing
- Insurance
- Support
- Primary action: `Explore your options`

The active route is visually indicated. Mobile navigation is keyboard accessible and touch friendly.

### Footer

Shared footer contains:

- Financing
- Insurance
- Customer support
- Legal notice
- Privacy
- Cookies
- Product information
- Demo contact details
- Santander and Allianz relationship statements
- Demo and legal-review disclaimer

### Cross-route behavior

- Every route links to the other two routes
- Finance links to insurance and service protection
- Insurance links to finance
- The European page links to both product pages
- Calls to configure a vehicle may use a clearly labeled demo action or point to the supplied purchase-flow demo

## 5. Route Design

### 5.1 European Financial Services Overview

Purpose: establish Xiaomi Financial Services Europe as a simple, connected mobility-services experience and direct users to German finance and insurance products.

Sections:

1. Full-viewport SU7 Ultra hero
   - Headline: `Xiaomi Financial Services Europe`
   - Proposition: `Simple choices. Clear protection. More freedom to move.`
   - Actions: `Explore financing` and `Explore insurance`
2. Brand promise
   - Explain that Xiaomi connects vehicle discovery, finance, insurance, delivery, and ownership support
3. Financing and insurance gateway
   - Two large editorial cards rather than dashboard widgets
4. Four principles
   - Simple, Transparent, Local, Digital
5. Customer journey
   - Discover → Configure → Finance → Insure → Apply → Delivery → Ownership support
6. European market presence
   - Germany shown as the initial product market in this demo
   - Other markets described as phased expansion, without claiming live availability
7. Partner ecosystem
   - Xiaomi Auto, Santander, Allianz, and local market teams described by role using text only
8. Country/service entry and final CTA
9. Legal and availability notes

### 5.2 Germany Finance Page

Purpose: help German consumers understand and compare two ways to drive a Xiaomi SU7 Ultra, then continue to a quote or configuration journey.

Sections:

1. Hero
   - Headline focused on flexible ways to drive a Xiaomi
   - SU7 Ultra image
   - `Explore financing` and `Estimate your monthly payment`
   - `Financing provided by Santander`
2. Core benefits
   - One connected journey
   - Transparent costs
   - Adjustable plan structure
   - Convenient contract management
3. Product introduction
   - Balloon Finance
   - Operating Lease
4. Product comparison
   - Ownership intent, deposit, monthly structure, final payment, mileage, end-of-term outcome, residual-value exposure, and typical user profile
5. Interactive calculator
   - Product toggle
   - SU7 Ultra illustrative vehicle price
   - Deposit
   - 36/48/60-month term
   - Annual mileage
   - Live monthly payment
   - Balloon final payment or operating-lease structure
   - Assumptions displayed next to results
   - Persistent “Illustrative, non-binding demo calculation” label
6. Application journey
   - Configure, select plan, adjust terms, submit, credit assessment, sign, take delivery, manage contract
7. End-of-term choices and responsibilities
   - Balloon repayment/refinancing/vehicle change explanations
   - Lease return, mileage, wear, insurance, and servicing explanations
8. Added services
   - Insurance, EV protection, warranty, roadside assistance, tyres/service packages
9. Conversion cards
   - Personal quote, vehicle configuration, available vehicles, advisor/support
10. Full FAQ
   - Separate Balloon Finance and Operating Lease groups
11. Customer support and portal
12. Santander provider disclosure and legal footer

Calculator figures must be deterministic and plausible for demonstration, but not presented as an offer. No claim of guaranteed approval is allowed.

### 5.3 Germany Insurance Page

Purpose: make the three insurance tiers easy to compare, highlight EV-specific protection, and direct users to Allianz for a formal quotation.

Sections:

1. Hero
   - Headline focused on protection designed around the Xiaomi SU7 Ultra
   - `Compare cover` and `Get a quote from Allianz`
   - `Insurance provided and underwritten by Allianz`
2. Six core benefits
   - EV protection
   - Clear cover levels
   - Digital quote and policy journey
   - 24/7 claims and roadside support
   - Approved repair support
   - Transparent provider and policy information
3. Tier cards
   - Basis
   - Komfort, visually marked `Recommended`
   - Premium
4. Detailed comparison
   - Liability
   - Partial/full comprehensive coverage
   - Theft, glass, weather, animal damage
   - Battery/high-voltage and charging-related protection
   - Roadside assistance
   - European travel
   - New-vehicle protection
   - Driver protection
   - Repair network and deductible visibility
5. Quote and eVB journey
   - Enter vehicle/driver data, annual mileage and SF class
   - Select coverage
   - Continue to Allianz
   - Obtain policy and eVB according to Allianz's live flow
6. Claims and assistance hub
   - Online claim, 24-hour help, roadside assistance, towing, approved repair booking, overseas claim guidance
   - Preparation checklist: policy number, registration, location, images, and police report where applicable
7. Scenario storytelling
   - Urban accident, charging/battery incident, and European road trip
8. Finance cross-sell
9. Full FAQ grouped by product, pricing, claims, and policy changes
10. Documents and support links
11. Allianz provider/underwriter disclosure and legal footer

## 6. Content Rules

- Final page copy is English only
- Use plain consumer language and explain technical terms in context
- Lead with use cases and customer outcomes
- Do not invent binding rates, premiums, excesses, approval criteria, regulatory registrations, or coverage limits
- Illustrative calculator values are allowed when prominently labeled
- Basis/Komfort/Premium feature allocation is presented as a demo structure pending final policy wording
- Do not imply guaranteed credit approval
- Do not imply that non-German markets are live
- Do not use Santander or Allianz logos
- The service relationship itself is written as confirmed

Formal relationship copy:

- `Financing provided by Santander.`
- `Insurance provided and underwritten by Allianz.`

Long-form legal copy may name Santander Consumer Bank AG and Allianz Versicherungs-AG. The exact Xiaomi intermediary/distributor legal role must not be invented. Include: `Product details and legal entity roles shown in this demo remain subject to final legal approval.`

## 7. Visual System

- Bright, minimal, premium automotive editorial design
- White and soft-grey foundation
- Near-black typography
- Xiaomi orange reserved for key actions and selected states
- Large SU7 Ultra imagery with generous crop and whitespace
- Subtle blue-grey only where it improves financial clarity
- Restrained warm safety accents on the insurance route
- Large headlines, short paragraphs, modular editorial sections
- Cards used selectively; avoid a generic analytics-dashboard appearance
- No glassmorphism, excessive gradients, neon effects, or dense banking UI
- Use CSS and a consistent icon library; do not create custom inline SVG illustrations
- Motion is subtle and respects `prefers-reduced-motion`

## 8. Interaction and Accessibility

- Responsive desktop, tablet, and mobile layouts
- Keyboard-accessible navigation, calculator, tabs/toggles, accordions, and links
- Visible focus states
- Sufficient color contrast
- Semantic headings and landmarks
- Descriptive alternative text for vehicle imagery
- FAQ accordions allow one or multiple open items without hiding essential legal information
- Calculator updates without page reload and announces material result changes accessibly
- Allianz actions open the official external destination directly
- External-link indicators and accessible labels identify the destination

## 9. Delivery and Acceptance Criteria

The deliverable is a deployable, shareable website with:

- Three working routes
- Consistent shared navigation and footer
- Complete long-form English content
- Xiaomi SU7 Ultra-focused imagery
- Interactive finance calculator
- Finance product comparison
- Insurance tier comparison
- Application, quote, delivery, claims, and support journeys
- Full FAQ coverage
- Direct Allianz external links
- Santander and Allianz confirmed relationship wording
- Responsive and accessible behavior
- Clear demo labeling for invented details and illustrative calculations
- A production build that completes successfully
- A published preview URL

## 10. Optimized Implementation Prompt

Build a polished, responsive three-route website demo titled “Xiaomi Financial Services Europe” using the complete requirements in this specification. Create `/financial-services`, `/finance`, and `/insurance` as long-form, public-facing English landing pages. Use Xiaomi SU7 Ultra as the sole hero vehicle and follow Xiaomi Auto's bright minimal design language: large automotive imagery, generous whitespace, black typography, light-grey surfaces, and restrained Xiaomi orange actions.

The European route must introduce the combined financial-services proposition, customer journey, European market rollout, and partner ecosystem. The Germany finance route must explain and compare Balloon Finance and Operating Lease for 36, 48, and 60 months, include a deterministic interactive illustrative calculator, application journey, lifecycle responsibilities, added services, conversion paths, support, and comprehensive FAQs. The Germany insurance route must present Basis, Komfort, and Premium, include an EV-focused coverage comparison, quote/eVB journey, claims and roadside-assistance hub, scenarios, support, and comprehensive FAQs.

Write `Financing provided by Santander` and `Insurance provided and underwritten by Allianz` as confirmed relationships. Use partner names as text only, never their logos. Allianz CTAs must link directly to the official Allianz Germany motor-insurance page. Use visibly fictional demo contact details. Do not invent binding rates, premiums, excesses, regulatory credentials, guaranteed approvals, or live availability outside Germany. Clearly label all illustrative calculations and unfinished product details. Ensure responsive layouts, keyboard accessibility, strong focus states, semantic structure, reduced-motion support, and a successful production build. Publish the completed demo and return its shareable URL.
