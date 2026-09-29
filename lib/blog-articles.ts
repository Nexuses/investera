export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  intro: string;
  sections: ArticleSection[];
  takeaway: string;
};

// Draft copy for launch. Replace with final editorial content when available.
export const articles: Record<string, Article> = {
  "family-offices-mena-challenges": {
    intro:
      "Family offices across the Middle East and North Africa have grown from discreet stewards of founder wealth into institutional investors with global mandates. That shift brings new complexity: more asset classes, more entities, more stakeholders and far higher expectations for reporting and governance.",
    sections: [
      {
        heading: "A more diversified, more complex portfolio",
        paragraphs: [
          "Many regional family offices began with concentrated holdings in real estate and the family's operating businesses. Today their portfolios typically span listed equities, fixed income, private equity, venture capital, funds and international property, often held across several legal entities and jurisdictions.",
          "Each new asset class adds its own data formats, valuation cycles and counterparties. Without a single system of record, teams spend more time reconciling spreadsheets than analysing performance.",
        ],
      },
      {
        heading: "Reporting that keeps pace with the family",
        paragraphs: [
          "Principals and next-generation family members want a consolidated, accurate picture of their wealth, and they want it on demand rather than at quarter end. Producing that view manually across custodians, fund administrators and private holdings is slow and error-prone.",
        ],
        bullets: [
          "Consolidating positions held across multiple entities and currencies",
          "Tracking capital calls, distributions and commitments for private investments",
          "Presenting performance consistently, from IRR and TVPI to time-weighted returns",
        ],
      },
      {
        heading: "Governance as the office professionalises",
        paragraphs: [
          "As family offices hire investment professionals and open their decisions to wider scrutiny, informal approval processes no longer suffice. Clear investment committees, documented approvals and role-based access to sensitive information are becoming standard.",
          "Succession adds urgency. Structured records of why decisions were made, and who approved them, help preserve institutional knowledge from one generation to the next.",
        ],
      },
      {
        heading: "Where technology helps",
        paragraphs: [
          "A connected investment management platform gives the office one place to hold portfolio data, documents, approvals and reports. Automating the routine work of consolidation and reporting frees the team to focus on allocation decisions and relationships.",
        ],
      },
    ],
    takeaway:
      "The family offices best placed for the next decade are treating data and governance as core infrastructure, not back-office afterthoughts.",
  },
  "digital-assets-in-fintech": {
    intro:
      "Digital assets have moved from the fringes of finance into mainstream conversation. Tokenised securities, digital representations of real-world assets and regulated custody services are drawing the attention of banks, asset managers and family offices alike.",
    sections: [
      {
        heading: "From speculation to infrastructure",
        paragraphs: [
          "The most significant developments are not in speculative tokens but in the infrastructure beneath them. Tokenisation promises faster settlement, fractional ownership and greater transparency for assets such as private credit, funds and real estate.",
          "Regulators across the Gulf have introduced dedicated frameworks for virtual assets, giving institutional investors clearer rules on licensing, custody and conduct.",
        ],
      },
      {
        heading: "New opportunities for investors",
        paragraphs: [
          "For investment teams, digital assets can widen access to asset classes that were previously illiquid or had high minimum ticket sizes. Programmable features can also automate income distributions and corporate actions.",
        ],
        bullets: [
          "Fractional access to private markets and real estate",
          "Near real-time settlement and transfer",
          "Transparent ownership records",
        ],
      },
      {
        heading: "New risks to manage",
        paragraphs: [
          "The same innovation introduces new operational and regulatory risks: custody and key management, valuation of thinly traded instruments, counterparty exposure and evolving compliance obligations.",
          "Investors need to understand how each digital holding fits within their overall allocation and risk limits, rather than managing it in isolation.",
        ],
      },
      {
        heading: "Bringing digital holdings into one view",
        paragraphs: [
          "As portfolios blend traditional and digital assets, a consolidated view becomes essential. Tracking digital positions alongside equities, funds and private investments allows teams to report performance and exposure consistently and apply the same governance controls.",
        ],
      },
    ],
    takeaway:
      "Digital assets are becoming part of the institutional toolkit. The investors who benefit most will be those who integrate them into disciplined, well-governed portfolio management.",
  },
  "proptech-disruptive-force-real-estate": {
    intro:
      "Real estate has long been one of the least digitised asset classes. PropTech, the application of technology to how property is bought, managed and valued, is changing that, and the effects are reaching owners, operators and investors across the region.",
    sections: [
      {
        heading: "Data is reshaping decisions",
        paragraphs: [
          "Better data on occupancy, rents, operating costs and market transactions is giving investors a clearer picture of asset performance. Decisions that once relied on periodic valuations and broker opinions can now draw on continuous, granular information.",
        ],
      },
      {
        heading: "Automation across the asset lifecycle",
        paragraphs: [
          "From digital leasing and tenant portals to smart building systems and automated rent collection, PropTech is reducing manual effort at every stage of ownership. For portfolio owners, that means more reliable income data and fewer surprises.",
        ],
        bullets: [
          "Digital leasing and tenant management",
          "Smart building monitoring and predictive maintenance",
          "Automated collections and service charge reconciliation",
        ],
      },
      {
        heading: "Smarter insight for investors",
        paragraphs: [
          "For investment teams holding property alongside other assets, the challenge is bringing property-level data into the wider portfolio picture. Valuations, cash flows and debt positions need to sit next to listed and private holdings so that allocation and risk can be assessed as a whole.",
          "Analytics and AI tools are beginning to help identify trends, flag underperforming assets and model scenarios across a real estate book.",
        ],
      },
      {
        heading: "What this means for portfolio managers",
        paragraphs: [
          "Investors who connect their real estate data to a central investment platform gain faster reporting, clearer oversight of income and valuations, and a stronger basis for acquisition and disposal decisions.",
        ],
      },
    ],
    takeaway:
      "PropTech is turning real estate into a data-rich asset class. The advantage goes to investors who can connect that data to the rest of their portfolio.",
  },
};
