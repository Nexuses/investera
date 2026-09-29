import { insights } from "@/components/insights-data";
import { faqs } from "@/components/pricing/pricing-faqs";
import { articles, articleText } from "@/lib/blog-articles";
import { DEFAULT_DESCRIPTION, SITE_URL } from "@/lib/seo";

// Plain-text site summaries for AI agents (https://llmstxt.org).
// Built from the same data as the pages so they stay in sync.

const url = (path: string) => `${SITE_URL}${path}`;

const pages = [
  ["Platform", "/platform", "Investera Pro features: dashboards, portfolio and deal management, documents, workflows, treasury exposure and AI insights."],
  ["Pricing", "/pricing", "How Investera Pro is priced and licensed, what is included, the booking process and FAQs."],
  ["Case Studies", "/case-study", "Client implementations in Kuwait and Saudi Arabia."],
  ["About Us", "/about-us", "Company overview, vision, mission, capabilities and team."],
  ["Book a Demo", "/book-a-demo", "Schedule a demo with the Investera team."],
  ["Contact", "/contact", "Email, phone, WhatsApp and office address in Abu Dhabi."],
];

const companyFacts = `## Company facts

- Name: Investera (legal entity: Investera Solutions Business Applications – Sole Proprietorship L.L.C.)
- Product: Investera Pro, an investment management platform
- Headquarters: 12th Floor, CI Tower, Abu Dhabi, United Arab Emirates
- Investment technology since 2018
- Clients: concentrated across the UAE, Saudi Arabia, Kuwait and Oman, with users further afield including Singapore
- Serves: family offices, private equity and VC firms, holding companies, portfolio managers, investment and fund managers
- Contact: info@investera.com, +971 2 309 3880`;

export function buildLlmsTxt() {
  return `# Investera

> ${DEFAULT_DESCRIPTION}

${companyFacts}

## Main pages

${pages.map(([name, path, desc]) => `- [${name}](${url(path)}): ${desc}`).join("\n")}

## Case studies

- [Dimah Capital (Kuwait)](${url("/case-study/dimah-capital")}): Investment Management System for a Shariah-compliant real estate investment manager.
- [Al Kifah Holding (Saudi Arabia)](${url("/case-study/al-kifah-holding")}): Portfolio Management System for a diversified holding group.

## Blog

${insights.map((i) => `- [${i.description}](${url(i.href)}): ${i.subtitle}`).join("\n")}

## Optional

- [Full content for AI agents](${url("/llms-full.txt")})
- [Privacy Policy](${url("/privacy-policy")})
- [Terms of Service](${url("/terms-of-service")})
`;
}

export function buildLlmsFullTxt() {
  const blog = insights
    .map((insight) => {
      const article = articles[insight.slug];
      if (!article) {
        return "";
      }
      return `### ${insight.description}\n\nURL: ${url(insight.href)}\nPublished: ${insight.datePublished}\n\n${articleText(article)}`;
    })
    .join("\n\n");

  return `# Investera – full content

> ${DEFAULT_DESCRIPTION}

${companyFacts}

## What Investera Pro does

Investera Pro is an end-to-end investment management platform that unifies portfolios, transactions, workflows, reporting and documents in one secure system.

- Dashboards & reporting: customisable dashboards, KPI tracking and performance reporting including IRR, TWR, DPI and TVPI analytics.
- Portfolio & deal management: holdings, deal pipelines, valuations, transactions, CRM and investor onboarding, from screening to exit.
- Secure document management: encrypted repository, role-based access, deal-linked approvals and e-signatures.
- Workflow & governance: approval workflows, maker-checker controls, due diligence tracking and automated alerts.
- AI investment intelligence: AI portfolio assistant, OCR data capture, market insights and alerts.
- Market data & connectivity: Bloomberg and SAP integration, multi-currency support, data imports and feeds.
- Asset classes: private investments (equity, real estate, funds), public investments (listed securities, fixed income, funds) and cash management.

More: ${url("/platform")}

## Pricing

Investera Pro is sold as a complete platform under an annual subscription, priced by users and access, portfolio complexity (asset classes, entities, currencies) and modules/integrations. Implementation is scoped separately and quoted upfront. No capability is held back behind a higher tier.

Process: a 30-minute working call, a written proposal within 3 working days, and an optional pilot on your own data at no cost.

### Pricing FAQ

${faqs.map((faq) => `**${faq.q}**\n${faq.a}`).join("\n\n")}

More: ${url("/pricing")}

## Case studies

### Dimah Capital (Kuwait)
Kuwait-based investment management company focused on Shariah-compliant international real estate. Investera implemented a centralised Investment Management System in 2019 covering multi-entity portfolio structure, consolidated reporting across asset classes, data migration, configurable workflows and access controls, on-premises installation and an investor mobile application.
URL: ${url("/case-study/dimah-capital")}

### Al Kifah Holding (Saudi Arabia)
Diversified holding group. Investera implemented its Portfolio Management System to centralise investment data, track portfolio performance, automate reporting and provide role-based governance controls.
URL: ${url("/case-study/al-kifah-holding")}

## Blog articles

${blog}

## Contact

- Email: info@investera.com
- Phone: +971 2 309 3880
- WhatsApp: +971 50 211 4603
- Book a demo: ${url("/book-a-demo")}
`;
}
