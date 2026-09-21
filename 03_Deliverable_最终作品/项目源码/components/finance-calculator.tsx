"use client";

import { useState } from "react";
import { calculateBalloon, calculateLease } from "../lib/finance";

const euro = new Intl.NumberFormat("en-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export function FinanceCalculator() {
  const [product, setProduct] = useState<"balloon" | "lease">("balloon");
  const [deposit, setDeposit] = useState(20000);
  const [term, setTerm] = useState<36 | 48 | 60>(48);
  const [mileage, setMileage] = useState(10000);
  const input = { vehiclePrice: 119900, deposit, term, annualMileage: mileage };
  const result = product === "balloon" ? calculateBalloon(input) : calculateLease(input);
  return (
    <div className="calculator-shell">
      <div className="calculator-controls">
        <div className="segmented" aria-label="Finance product">
          <button className={product === "balloon" ? "active" : ""} onClick={() => setProduct("balloon")}>Balloon Finance</button>
          <button className={product === "lease" ? "active" : ""} onClick={() => setProduct("lease")}>Operating Lease</button>
        </div>
        <div className="vehicle-price"><span>Xiaomi SU7 Ultra</span><strong>{euro.format(119900)}</strong><small>Illustrative vehicle price</small></div>
        <label>Initial payment <strong>{euro.format(deposit)}</strong>
          <input type="range" min="0" max={product === "balloon" ? "47960" : "29975"} step="1000" value={deposit} onChange={(event) => setDeposit(Number(event.target.value))} />
        </label>
        <fieldset><legend>Agreement term</legend><div className="term-buttons">
          {([36, 48, 60] as const).map((value) => <button type="button" key={value} className={term === value ? "active" : ""} onClick={() => setTerm(value)}>{value} months</button>)}
        </div></fieldset>
        <label>Annual mileage <strong>{mileage.toLocaleString("en-DE")} km</strong>
          <input type="range" min="5000" max="25000" step="5000" value={mileage} onChange={(event) => setMileage(Number(event.target.value))} />
        </label>
      </div>
      <div className="calculator-result" aria-live="polite">
        <p className="eyebrow">Your illustration</p>
        <div className="monthly"><strong>{euro.format(result.monthlyPayment)}</strong><span>/ month</span></div>
        <dl>
          <div><dt>Initial payment</dt><dd>{euro.format(result.assumedDeposit)}</dd></div>
          <div><dt>Term</dt><dd>{term} months</dd></div>
          {result.finalPayment && <div><dt>Final payment</dt><dd>{euro.format(result.finalPayment)}</dd></div>}
          {result.residualValue && <div><dt>Illustrative residual</dt><dd>{euro.format(result.residualValue)}</dd></div>}
          {result.demoAnnualRate && <div><dt>Demo annual rate</dt><dd>{(result.demoAnnualRate * 100).toFixed(2)}%</dd></div>}
        </dl>
        <a className="button light" href="#contact">Request a personal quote</a>
        <p className="calculation-note"><strong>Illustrative, non-binding demo calculation.</strong> This is not a credit or lease offer. Santander provides the binding quotation after eligibility and credit assessment.</p>
      </div>
    </div>
  );
}
