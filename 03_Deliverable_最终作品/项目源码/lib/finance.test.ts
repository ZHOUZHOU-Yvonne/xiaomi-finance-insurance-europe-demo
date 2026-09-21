import { describe, expect, it } from "vitest";
import { calculateBalloon, calculateLease } from "./finance";

describe("illustrative finance calculations", () => {
  it("returns a stable balloon final payment", () => {
    const result = calculateBalloon({ vehiclePrice: 119900, deposit: 20000, term: 48, annualMileage: 10000 });
    expect(result.finalPayment).toBe(47960);
    expect(result.assumedDeposit).toBe(20000);
    expect(result.monthlyPayment).toBeGreaterThan(900);
    expect(result.monthlyPayment).toBeLessThan(1800);
  });

  it("increases operating lease cost for higher mileage", () => {
    const low = calculateLease({ vehiclePrice: 119900, deposit: 12000, term: 48, annualMileage: 10000 });
    const high = calculateLease({ vehiclePrice: 119900, deposit: 12000, term: 48, annualMileage: 20000 });
    expect(high.monthlyPayment).toBeGreaterThan(low.monthlyPayment);
  });

  it("caps the illustrative deposit by product", () => {
    const balloon = calculateBalloon({ vehiclePrice: 119900, deposit: 100000, term: 36, annualMileage: 10000 });
    const lease = calculateLease({ vehiclePrice: 119900, deposit: 100000, term: 36, annualMileage: 10000 });
    expect(balloon.assumedDeposit).toBe(47960);
    expect(lease.assumedDeposit).toBe(29975);
  });
});
