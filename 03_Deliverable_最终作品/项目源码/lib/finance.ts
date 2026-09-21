export type FinanceInput = {
  vehiclePrice: number;
  deposit: number;
  term: 36 | 48 | 60;
  annualMileage: number;
};

export type FinanceResult = {
  assumedDeposit: number;
  monthlyPayment: number;
  finalPayment?: number;
  demoAnnualRate?: number;
  residualValue?: number;
};

export function calculateBalloon(input: FinanceInput): FinanceResult {
  const assumedDeposit = Math.min(Math.max(input.deposit, 0), input.vehiclePrice * 0.4);
  const finalPayment = Math.round(input.vehiclePrice * 0.4);
  const monthlyRate = 0.0599 / 12;
  const principal = input.vehiclePrice - assumedDeposit;
  const paymentPrincipal = Math.max(
    principal - finalPayment / Math.pow(1 + monthlyRate, input.term),
    0,
  );
  const monthlyPayment = Math.round(
    (paymentPrincipal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -input.term)),
  );
  return { assumedDeposit, monthlyPayment, finalPayment, demoAnnualRate: 0.0599 };
}

export function calculateLease(input: FinanceInput): FinanceResult {
  const assumedDeposit = Math.min(Math.max(input.deposit, 0), input.vehiclePrice * 0.25);
  const residualRate = input.term === 36 ? 0.58 : input.term === 48 ? 0.49 : 0.41;
  const residualValue = Math.round(input.vehiclePrice * residualRate);
  const mileageFactor = Math.max(input.annualMileage - 10000, 0) / 10000;
  const usageCost = input.vehiclePrice - residualValue - assumedDeposit;
  const monthlyPayment = Math.round(
    usageCost / input.term + input.vehiclePrice * 0.0014 + mileageFactor * 92,
  );
  return { assumedDeposit, monthlyPayment, residualValue };
}

