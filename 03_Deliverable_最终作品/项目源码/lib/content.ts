export type FaqItem = { question: string; answer: string };

export const partnerCopy = {
  finance: "Financing provided by Santander.",
  insurance: "Insurance provided and underwritten by Allianz.",
  legal:
    "Product details and legal entity roles shown in this demo remain subject to final legal approval.",
} as const;

export const financeFaqs: FaqItem[] = [
  {
    question: "How does Xiaomi Balloon Finance work?",
    answer:
      "Choose your vehicle, deposit, term and final payment. After Santander completes a credit assessment, you sign the agreement and make fixed monthly payments followed by the agreed final payment.",
  },
  {
    question: "Why can the monthly payment be lower?",
    answer:
      "A larger part of the vehicle price is deferred to the end of the agreement. This reduces regular monthly payments, while increasing the amount due as the final payment.",
  },
  {
    question: "What affects my monthly and final payments?",
    answer:
      "Vehicle price, deposit, term, annual mileage, interest rate and the selected final payment all affect the quotation. Only a formal Santander offer is binding.",
  },
  {
    question: "What can I do at the end of Balloon Finance?",
    answer:
      "You can pay the final amount and keep the vehicle. Refinancing or changing to another vehicle may also be available, subject to the products and approval offered at that time.",
  },
  {
    question: "Can I settle or change the agreement early?",
    answer:
      "You can request an early settlement or contract change. Availability and any charges depend on the signed agreement and Santander's assessment.",
  },
  {
    question: "How does an Operating Lease work?",
    answer:
      "You pay for the agreed use of the vehicle rather than purchasing it. Your term, annual mileage and initial payment shape the monthly rental, and the vehicle is normally returned at the end.",
  },
  {
    question: "What happens if I exceed the agreed mileage?",
    answer:
      "Actual mileage is checked when the vehicle is returned. Additional kilometres and any allowance for lower mileage are handled according to the final lease agreement.",
  },
  {
    question: "How is wear and damage assessed?",
    answer:
      "Normal wear is distinguished from chargeable damage using the return standard in your agreement. Missing items, accident damage or wear beyond that standard may result in charges.",
  },
  {
    question: "Do I need comprehensive insurance for a leased vehicle?",
    answer:
      "German motor liability insurance is mandatory, and the lease agreement may require comprehensive cover. Review the final insurance and lease conditions before signing.",
  },
  {
    question: "What if my finance application is declined?",
    answer:
      "Credit decisions are made by Santander. You may choose another payment method or contact Xiaomi Financial Services for guidance; approval is never guaranteed.",
  },
];

export const insuranceFaqs: FaqItem[] = [
  {
    question: "What is the difference between liability, partial and comprehensive cover?",
    answer:
      "Liability covers damage you cause to others. Partial comprehensive typically adds selected risks such as theft, glass and weather. Comprehensive can also cover accidental damage to your own vehicle, subject to the policy.",
  },
  {
    question: "What EV-specific protection may be included?",
    answer:
      "Depending on the selected policy, protection may address the high-voltage battery, charging cable, wallbox-related events and recovery after an electrical incident. Final cover is defined by Allianz policy wording.",
  },
  {
    question: "What is an eVB number?",
    answer:
      "The elektronische Versicherungsbestätigung is the electronic proof of motor insurance used when registering a vehicle in Germany.",
  },
  {
    question: "What determines my premium?",
    answer:
      "Typical factors include driver profile, location, annual mileage, claims-free class, vehicle, selected cover and deductible. Allianz provides the binding quotation.",
  },
  {
    question: "What is an SF class?",
    answer:
      "Schadenfreiheitsklasse reflects claim-free driving history and can influence liability and comprehensive premiums in Germany.",
  },
  {
    question: "How do I report an accident?",
    answer:
      "Use Allianz's claims channel and have your policy number, registration, incident location, photos and any police record ready. Emergency services should always be contacted first when required.",
  },
  {
    question: "Can I travel elsewhere in Europe?",
    answer:
      "Geographic cover and assistance vary by policy and destination. Check your insurance certificate and Allianz policy conditions before travelling.",
  },
  {
    question: "Must repairs use an approved workshop?",
    answer:
      "Repair-network requirements depend on the selected product. The final policy states whether an approved repairer must be used and which parts standards apply.",
  },
  {
    question: "How can I change or cancel my policy?",
    answer:
      "Contact Allianz for changes to drivers, address, payment details, vehicle or cancellation. Notice periods and rights are defined in the policy documents.",
  },
];

export const principles = [
  ["01", "Simple", "Clear language and guided choices replace unnecessary financial complexity."],
  ["02", "Transparent", "Providers, payment structures and the next step are visible from the start."],
  ["03", "Local", "Products are shaped around each market's customers, regulation and ownership habits."],
  ["04", "Digital", "Finance and insurance connect naturally with configuration, purchase and delivery."],
] as const;

