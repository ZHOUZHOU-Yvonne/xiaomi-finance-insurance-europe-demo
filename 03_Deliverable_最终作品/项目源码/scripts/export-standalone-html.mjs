import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDir = join(
  root,
  "handoff",
  "03_Deliverable_最终作品",
  "本地HTML版本",
);

const filenames = {
  "financial-services": "01_欧洲金保介绍页.html",
  finance: "02_金融介绍页.html",
  insurance: "03_保险介绍页.html",
};

const pageTitles = {
  "financial-services": "Xiaomi Financial Services Europe",
  finance: "Xiaomi Auto Financing · Germany",
  insurance: "Xiaomi Auto Insurance · Germany",
};

async function renderCanonicalPage() {
  const workerUrl = pathToFileURL(join(root, "dist", "server", "index.js"));
  workerUrl.searchParams.set("offline-export", Date.now().toString());
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(`Unable to render the canonical page (${response.status}).`);
  }

  return response.text();
}

function extractChapter(html, id, nextId) {
  const marker = `<div id="${id}"`;
  const markerIndex = html.indexOf(marker);
  if (markerIndex < 5) throw new Error(`Chapter ${id} was not found.`);

  const start = html.lastIndexOf("<div", markerIndex);
  const end = nextId
    ? html.lastIndexOf("<div", html.indexOf(`<div id="${nextId}"`))
    : html.indexOf("</main>", start);

  if (start < 0 || end < 0) throw new Error(`Chapter ${id} could not be extracted.`);
  return html.slice(start, end);
}

function extractFooter(html) {
  const start = html.indexOf('<footer class="site-footer">');
  const end = html.indexOf("</footer>", start);
  if (start < 0 || end < 0) throw new Error("Site footer could not be extracted.");
  return html.slice(start, end + "</footer>".length);
}

function rewriteLocalLinks(html) {
  const replacements = new Map([
    ['href="/"', `href="${filenames["financial-services"]}"`],
    ['href="/#financial-services"', `href="${filenames["financial-services"]}"`],
    ['href="/#finance"', `href="${filenames.finance}"`],
    ['href="/#finance-products"', `href="${filenames.finance}#finance-products"`],
    ['href="/#finance-calculator"', `href="${filenames.finance}#finance-calculator"`],
    ['href="/#insurance"', `href="${filenames.insurance}"`],
    ['href="/#insurance-cover"', `href="${filenames.insurance}#insurance-cover"`],
    ['href="/#support"', `href="${filenames.insurance}#support"`],
    ['href="#contact"', `href="${filenames.insurance}#support"`],
  ]);

  let rewritten = html;
  for (const [from, to] of replacements) rewritten = rewritten.replaceAll(from, to);
  return rewritten;
}

function header(activeId) {
  const links = [
    ["financial-services", "Financial Services"],
    ["finance", "Financing"],
    ["insurance", "Insurance"],
  ];
  const nav = links
    .map(([id, label]) => {
      const current = id === activeId ? ' aria-current="page"' : "";
      return `<a href="${filenames[id]}"${current}>${label}</a>`;
    })
    .join("");

  return `<header class="site-header"><a href="${filenames["financial-services"]}" class="brand" aria-label="Xiaomi Auto Financial Services home"><span class="brand-mark" aria-hidden="true">mi</span><span>Xiaomi Auto</span></a><nav class="main-nav" aria-label="Primary navigation">${nav}</nav><a class="header-action" href="${filenames.insurance}#support">Support</a></header>`;
}

const calculatorScript = String.raw`
<script data-offline-calculator>
(() => {
  const root = document.querySelector(".calculator-shell");
  if (!root) return;
  const productButtons = [...root.querySelectorAll(".segmented button")];
  const termButtons = [...root.querySelectorAll(".term-buttons button")];
  const ranges = root.querySelectorAll('input[type="range"]');
  const depositInput = ranges[0];
  const mileageInput = ranges[1];
  const depositValue = depositInput.closest("label").querySelector("strong");
  const mileageValue = mileageInput.closest("label").querySelector("strong");
  const resultPanel = root.querySelector(".calculator-result");
  let product = "balloon";
  let term = 48;
  const vehiclePrice = 119900;
  const euro = new Intl.NumberFormat("en-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  function calculateBalloon(input) {
    const assumedDeposit = Math.min(Math.max(input.deposit, 0), input.vehiclePrice * 0.4);
    const finalPayment = Math.round(input.vehiclePrice * 0.4);
    const monthlyRate = 0.0599 / 12;
    const principal = input.vehiclePrice - assumedDeposit;
    const paymentPrincipal = Math.max(principal - finalPayment / Math.pow(1 + monthlyRate, input.term), 0);
    const monthlyPayment = Math.round((paymentPrincipal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -input.term)));
    return { assumedDeposit, monthlyPayment, finalPayment, demoAnnualRate: 0.0599 };
  }

  function calculateLease(input) {
    const assumedDeposit = Math.min(Math.max(input.deposit, 0), input.vehiclePrice * 0.25);
    const residualRate = input.term === 36 ? 0.58 : input.term === 48 ? 0.49 : 0.41;
    const residualValue = Math.round(input.vehiclePrice * residualRate);
    const mileageFactor = Math.max(input.annualMileage - 10000, 0) / 10000;
    const usageCost = input.vehiclePrice - residualValue - assumedDeposit;
    const monthlyPayment = Math.round(usageCost / input.term + input.vehiclePrice * 0.0014 + mileageFactor * 92);
    return { assumedDeposit, monthlyPayment, residualValue };
  }

  function update() {
    const deposit = Number(depositInput.value);
    const annualMileage = Number(mileageInput.value);
    const input = { vehiclePrice, deposit, term, annualMileage };
    const result = product === "balloon" ? calculateBalloon(input) : calculateLease(input);
    depositValue.textContent = euro.format(deposit);
    mileageValue.textContent = annualMileage.toLocaleString("en-DE") + " km";
    const extra = result.finalPayment
      ? '<div><dt>Final payment</dt><dd>' + euro.format(result.finalPayment) + '</dd></div><div><dt>Demo annual rate</dt><dd>' + (result.demoAnnualRate * 100).toFixed(2) + '%</dd></div>'
      : '<div><dt>Illustrative residual</dt><dd>' + euro.format(result.residualValue) + '</dd></div>';
    resultPanel.innerHTML = '<p class="eyebrow">Your illustration</p><div class="monthly"><strong>' + euro.format(result.monthlyPayment) + '</strong><span>/ month</span></div><dl><div><dt>Initial payment</dt><dd>' + euro.format(result.assumedDeposit) + '</dd></div><div><dt>Term</dt><dd>' + term + ' months</dd></div>' + extra + '</dl><a class="button light" href="${filenames.insurance}#support">Request a personal quote</a><p class="calculation-note"><strong>Illustrative, non-binding demo calculation.</strong> This is not a credit or lease offer. Santander provides the binding quotation after eligibility and credit assessment.</p>';
  }

  productButtons.forEach((button, index) => button.addEventListener("click", () => {
    product = index === 0 ? "balloon" : "lease";
    depositInput.max = product === "balloon" ? "47960" : "29975";
    if (Number(depositInput.value) > Number(depositInput.max)) depositInput.value = depositInput.max;
    productButtons.forEach((item, itemIndex) => item.classList.toggle("active", itemIndex === index));
    update();
  }));
  termButtons.forEach((button) => button.addEventListener("click", () => {
    term = Number.parseInt(button.textContent, 10);
    termButtons.forEach((item) => item.classList.toggle("active", item === button));
    update();
  }));
  depositInput.addEventListener("input", update);
  mileageInput.addEventListener("input", update);
  update();
})();
</script>`;

async function main() {
  const html = await renderCanonicalPage();
  const cssFiles = (await readdir(join(root, "dist", "client", "_next", "static", "css")))
    .filter((filename) => filename.endsWith(".css"));
  if (cssFiles.length !== 1) throw new Error(`Expected one compiled stylesheet, found ${cssFiles.length}.`);
  const css = await readFile(join(root, "dist", "client", "_next", "static", "css", cssFiles[0]), "utf8");
  const heroImage = await readFile(join(root, "public", "images", "order-success-bg.png"));
  const heroDataUrl = `data:image/png;base64,${heroImage.toString("base64")}`;
  const footer = rewriteLocalLinks(extractFooter(html));
  const chapters = {
    "financial-services": extractChapter(html, "financial-services", "finance"),
    finance: extractChapter(html, "finance", "insurance"),
    insurance: extractChapter(html, "insurance"),
  };

  await mkdir(outputDir, { recursive: true });
  for (const [id, chapter] of Object.entries(chapters)) {
    const content = rewriteLocalLinks(chapter).replace(
      /<img[^>]*alt="Yellow Xiaomi SU7 Ultra in a studio setting"[^>]*>/g,
      `<img src="${heroDataUrl}" alt="Yellow Xiaomi SU7 Ultra in a studio setting">`,
    );
    const script = id === "finance" ? calculatorScript : "";
    const document = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Offline presentation page for Xiaomi Financial Services Europe"><title>${pageTitles[id]}</title><style>${css}</style></head><body>${header(id)}<main>${content}</main>${footer}${script}</body></html>`;
    await writeFile(join(outputDir, filenames[id]), document, "utf8");
  }

  console.log(`Exported ${Object.keys(chapters).length} standalone HTML pages to ${outputDir}`);
}

await main();
