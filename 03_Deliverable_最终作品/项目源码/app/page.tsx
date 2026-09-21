import { FinanceSection } from "../components/sections/finance-section";
import { FinancialServicesSection } from "../components/sections/financial-services-section";
import { InsuranceSection } from "../components/sections/insurance-section";

export default function HomePage() {
  return <>
    <FinancialServicesSection />
    <FinanceSection />
    <InsuranceSection />
  </>;
}
