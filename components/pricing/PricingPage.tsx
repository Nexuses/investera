"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import BusinessDataSection from "@/components/home2/BusinessDataSection";
import InvestorStoriesSection from "@/components/home2/InvestorStoriesSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import ConnectivitySection from "@/components/ConnectivitySection";
import InvestmentSolutionsSection from "@/components/InvestmentSolutionsSection";
import RegionalTrustSection from "@/components/home2/RegionalTrustSection";
import PricingTimelineSection from "@/components/pricing/PricingTimelineSection";

const HERO_DASHBOARD =
  "https://investera.s3.us-east-2.amazonaws.com/Mask_group-1_1787746826818_bu63.png";
const HERO_ALLOCATION =
  "https://investera.s3.us-east-2.amazonaws.com/Mask_group_1787746826820_5kdf.png";

const CheckIcon = () => (
  <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden className="mt-0.5 shrink-0">
    <circle cx="10" cy="10" r="9" fill="#CCA400" />
    <path
      d="m6.2 10.2 2.4 2.4 5.2-5.3"
      stroke="#020817"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const features = [
  {
    title: "Portfolio & Deal Management",
    description:
      "Manage investments and opportunities across the complete lifecycle, from screening to exit.",
    items: [
      "Private and listed holdings with full drill-down",
      "Configurable deal pipelines and stages",
      "Transactions, valuations and capital events",
      "Integrated CRM for leads, investors and onboarding",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2.8" y="6.6" width="18.4" height="13.2" rx="2.4" stroke="#2F6FE4" strokeWidth="1.6" />
        <path
          d="M8.4 6.4V5.2a2 2 0 0 1 2-2h3.2a2 2 0 0 1 2 2v1.2M2.8 12h18.4"
          stroke="#2F6FE4"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Reporting & Dashboards",
    description:
      "Turn investment data into clear, actionable performance insight for every audience.",
    items: [
      "Customisable consolidated KPI dashboards",
      "Public and private investment reporting",
      "TWR, IRR, Sharpe, DPI, TVPI and more",
      "Reconciliation and allocation reports",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3.4" width="18" height="17.2" rx="2.4" stroke="#2F6FE4" strokeWidth="1.6" />
        <path
          d="M7.2 16.4v-3.6M12 16.4V8.6M16.8 16.4v-5.8"
          stroke="#2F6FE4"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Secure Document Management",
    description:
      "Centralise and protect investment information in one controlled environment.",
    items: [
      "Encrypted, permissioned document repository",
      "Role-based access and user permissions",
      "Documents linked to deals, diligence and approvals",
      "E-signature workflows via DocuSign",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5.2 3.4h8.4l5.2 5.2v12a2 2 0 0 1-2 2H5.2a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2Z"
          stroke="#2F6FE4"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M13.4 3.6v5.2h5.2M7.4 13.4h8M7.4 17h5.4"
          stroke="#2F6FE4"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Workflow & Governance",
    description:
      "Build structured, controlled and transparent investment processes across the team.",
    items: [
      "Configurable approval workflows",
      "Maker-checker validation and review",
      "Due diligence tracking and sign-off",
      "Automated alerts, reminders and notifications",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="3.1" stroke="#2F6FE4" strokeWidth="1.6" />
        <path
          d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.9 1.9M16.6 16.6l1.9 1.9M18.5 5.5l-1.9 1.9M7.4 16.6l-1.9 1.9"
          stroke="#2F6FE4"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "AI Investment Intelligence",
    description: "Move from manual analysis to faster, data-driven decisions.",
    items: [
      "AI assistant for natural-language portfolio questions",
      "Smart OCR capture from statements and reports",
      "Market intelligence and benchmarking",
      "Automated summaries, alerts and portfolio updates",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M9 4.2a3 3 0 0 1 6 0v.7a3.2 3.2 0 0 1 2.6 4.6 3.2 3.2 0 0 1-.5 5.6 3 3 0 0 1-5.1 3 3 3 0 0 1-5.1-3 3.2 3.2 0 0 1-.5-5.6A3.2 3.2 0 0 1 9 4.9v-.7Z"
          stroke="#2F6FE4"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M12 8.4v9.4" stroke="#2F6FE4" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Market Data & Connectivity",
    description: "Connect Investera to the systems your operation already runs on.",
    items: [
      "Bloomberg market data for valuations and analysis",
      "SAP for financial operations and data management",
      "Multi-currency and FX handling",
      "Bulk import and structured data feeds",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="#2F6FE4" strokeWidth="1.6" />
        <path
          d="M3.2 12h17.6M12 3a14 14 0 0 1 0 18A14 14 0 0 1 12 3Z"
          stroke="#2F6FE4"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Why isn't the price on this page?",
    a: "Because any number we published would be wrong for most of the people reading it. A single-entity family office with four users and a diversified holding group consolidating twenty entities across five currencies are buying very different configurations of the same platform. Rather than post a figure hedged with footnotes, we size it properly once on a call that takes half an hour.",
  },
  {
    q: "Is this a sales pitch dressed up as a pricing call?",
    a: "No. Come with your asset classes, entity structure and user count, and you'll leave with an indicative range on the call itself and a written proposal within three working days. If Investera isn't the right fit for your operation, we'll say so on the call rather than after a six-week process.",
  },
  {
    q: "How is Investera licensed?",
    a: "An annual subscription covering the platform, your users and the modules you enable, with implementation quoted separately and upfront. Multi-year terms are available. There are no per-report, per-portfolio or per-transaction charges. Those are the things you should be doing more of, not paying more for.",
  },
  {
    q: "What does implementation involve?",
    a: "Data migration from your existing spreadsheets and systems, chart-of-accounts and asset-class mapping, workflow and approval configuration, user roles and permissions, integration setup, and team training. Scope and cost are set out line by line in the proposal before you commit.",
  },
  {
    q: "Can we start with part of the portfolio?",
    a: "Yes. Many clients begin with one asset class or one entity and extend across the group once the team is confident. Because pricing tracks users, entities and modules, the commitment scales with the rollout instead of running ahead of it.",
  },
  {
    q: "Who owns the data, and where does it live?",
    a: "You do. Investera runs on AWS with encrypted data management, role-based access and granular user permissions, and regional hosting is available on request. Your data is exportable at any point during the term and on exit.",
  },
  {
    q: "Do you work with organisations outside the GCC?",
    a: "Yes. Our clients are concentrated across the UAE, Saudi Arabia, Kuwait and Oman, with users further afield including Singapore. Multi-currency reporting and configurable governance frameworks are part of the standard platform.",
  },
];

const included = [
  "Consolidated multi-asset dashboards",
  "Unlimited portfolios and reports",
  "Role-based access & maker-checker controls",
  "Encrypted document repository",
  "Guided onboarding & data migration",
  "Named support contact & product updates",
  "AI assistant & mobile app access",
];

const quoteFactors = [
  {
    id: "people",
    title: "People & Access",
    body: "How many users need the platform, and in which roles: analysts, portfolio managers, finance, and investors with read-only portal access.",
  },
  {
    id: "portfolio",
    title: "Portfolio Complexity",
    body: "Which asset classes you hold, how many entities and portfolios you consolidate, and the currencies you report in.",
  },
  {
    id: "modules",
    title: "Modules & Integrations",
    body: "The capabilities you switch on: deal pipeline, CRM, AI intelligence, e-signature, plus any market data or ERP connections.",
  },
];

export default function PricingPage() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#020817] pb-16 pt-[140px] sm:pb-20 lg:pb-24 lg:pt-[160px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(100,140,200,0.07) 0, rgba(100,140,200,0.07) 1px, transparent 1px, transparent 80px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-10%] h-[640px] w-[900px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(40,90,180,0.22)_0%,transparent_68%)]"
        />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6 xl:gap-8">
            <div className="relative z-10 max-w-[640px]">
              <h1 className="text-[40px] font-normal leading-[1.12] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[60px]">
                <span className="block sm:hidden">
                  <span className="block">Pricing</span>
                  <span className="block">Built Around</span>
                  <span className="heading-accent block text-white">
                    Your Portfolio
                  </span>
                </span>
                <span className="hidden sm:block">
                  <span className="block">Pricing Built</span>
                  <span className="heading-accent block whitespace-nowrap text-white">
                    Around Your Portfolio
                  </span>
                </span>
              </h1>
              <p className="mt-5 max-w-[540px] text-[16px] leading-[1.3] text-white/80">
                Every investment operation is different: the asset classes you
                hold, the entities you report on, the people who need access. So
                we price Investera Pro the same way: to the shape of your
                business, not to a public list. One short call is all it takes
                to get a firm number.
              </p>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Link
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center rounded-full bg-[#CCA400] px-7 py-3 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
                >
                  Book a pricing call
                </Link>
                <a
                  href="#included"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
                >
                  See what&apos;s included
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-2.5 text-[13px] text-white/60">
                <span className="inline-flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path
                      d="M10 1.7 3 4.6v4.7c0 4.3 3 8.3 7 9.3 4-1 7-5 7-9.3V4.6L10 1.7Z"
                      stroke="#CCA400"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m7.2 9.9 2 2 3.6-3.7"
                      stroke="#CCA400"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Investment technology since 2018
                </span>
                <span className="inline-flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <circle cx="10" cy="10" r="8.2" stroke="#CCA400" strokeWidth="1.5" />
                    <path
                      d="m6.6 10.2 2.2 2.2 4.6-4.7"
                      stroke="#CCA400"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  No obligation, no sales pressure
                </span>
                <span className="inline-flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <rect x="3.5" y="8.6" width="13" height="9" rx="2" stroke="#CCA400" strokeWidth="1.5" />
                    <path
                      d="M6.8 8.5V6.3a3.2 3.2 0 1 1 6.4 0v2.2"
                      stroke="#CCA400"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Your data stays confidential
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] lg:mx-0 lg:max-w-[480px] lg:justify-self-end xl:max-w-[520px] lg:pr-4 xl:pr-6">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 48, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.95,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.12,
                  }}
                  className="relative z-[1]"
                >
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 4.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.1,
                    }}
                  >
                    <Image
                      src={HERO_DASHBOARD}
                      alt="Investera dashboard showing total assets under management and live trend"
                      width={1884}
                      height={1358}
                      priority
                      unoptimized
                      className="h-auto w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40, y: 28, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.38,
                  }}
                  className="absolute right-[-2%] top-[26%] z-[2] w-[64%] sm:right-[-4%] sm:top-[28%] sm:w-[60%] lg:right-[-6%] lg:w-[58%] xl:right-[-8%] xl:w-[56%]"
                >
                  <motion.div
                    animate={{ y: [0, -16, 0] }}
                    transition={{
                      duration: 5.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.4,
                    }}
                  >
                    <Image
                      src={HERO_ALLOCATION}
                      alt="Asset allocation breakdown with total AUM"
                      width={1205}
                      height={684}
                      priority
                      unoptimized
                      className="h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How pricing works */}
      <section id="quote" className="scroll-mt-[90px] bg-[#F4F4F4] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <FadeIn className="rounded-[28px] border border-[#E8E8E8] bg-white p-6 shadow-[0_16px_48px_rgba(12,45,87,0.06)] sm:rounded-[32px] sm:p-8 lg:p-10">
            <div className="max-w-[720px]">
              <h2 className="text-[32px] font-normal leading-tight tracking-[-0.02em] text-[#111111] sm:text-[40px]">
                Three Things Shape{" "}
                <span className="heading-accent text-[#0c2d57]">Your Quote</span>
              </h2>
              <p className="mt-4 max-w-[66ch] text-[16px] leading-[1.3] text-[#4B5563] sm:text-[18px]">
                We don&apos;t publish a price list because a five-person family
                office and a multi-entity holding group aren&apos;t buying the
                same platform. These are the only variables that move your
                number.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 lg:mt-10 lg:grid-cols-2 lg:gap-6">
              {/* Light card — all three factors */}
              <article className="flex flex-col rounded-[24px] border border-[#ECECEC] bg-[#F7F7F8] px-6 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-9">
                <div className="flex flex-col">
                  {quoteFactors.map((factor, index) => (
                    <div
                      key={factor.id}
                      className={`py-6 ${
                        index < quoteFactors.length - 1
                          ? "border-b border-[#E5E7EB]"
                          : ""
                      } ${index === 0 ? "pt-0" : ""} ${
                        index === quoteFactors.length - 1 ? "pb-0" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#E8F1FA] text-[13px] font-semibold text-[#17477F]">
                          {index + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-[20px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0c2d57] sm:text-[22px]">
                            {factor.title}
                          </h3>
                          <p className="mt-2 text-[16px] leading-[1.3] text-[#4B5563]">
                            {factor.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-[#D6E6F8] bg-[#E8F1FA] px-5 py-4 text-[15px] leading-[1.35] text-[#17477F]">
                  <strong className="font-semibold text-[#0c2d57]">
                    Implementation is scoped separately and quoted upfront.
                  </strong>{" "}
                  Data migration, chart-of-accounts mapping, workflow
                  configuration and team training are set out line by line
                  before you commit, so there is nothing to discover later.
                </div>
              </article>

              {/* Dark card — included */}
              <article className="relative flex min-h-[320px] flex-col overflow-hidden rounded-[24px] bg-[#020817] px-6 py-7 text-white sm:px-8 sm:py-8 lg:px-9 lg:py-9">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(100,140,200,0.07) 0, rgba(100,140,200,0.07) 1px, transparent 1px, transparent 80px)",
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-[20%] -top-[25%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(40,90,180,0.28)_0%,transparent_68%)]"
                />
                <div className="relative flex h-full flex-col">
                  <h2 className="text-[32px] font-normal leading-tight tracking-[-0.02em] sm:text-[40px]">
                    Included In{" "}
                    <span className="font-bold">Every Plan</span>
                  </h2>
                  <div
                    aria-hidden
                    className="mt-5 h-[3px] w-12 rounded-full bg-[#CCA400] sm:mt-6"
                  />
                  <p className="mt-5 max-w-[42ch] text-[16px] leading-[1.3] text-white/70 sm:mt-6">
                    Regardless of size, no capability is held back behind a
                    higher tier. Implementation is scoped separately and quoted
                    upfront.
                  </p>

                  <ul className="mt-5 grid gap-2.5">
                    {included.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-[16px] leading-[1.3] text-white/90"
                      >
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto space-y-1.5 pt-6 text-[13px] text-white/55">
                    <p>Since 2018 · proposal within 3 working days</p>
                    <p>30 minutes · a real answer, not a brochure</p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-[13px] font-medium text-white/80">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden
                      >
                        <circle cx="10" cy="10" r="8" fill="#CCA400" />
                        <path
                          d="m6.6 10.2 2.2 2.2 4.6-4.7"
                          stroke="#020817"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      No tier walls
                    </span>
                    <Link
                      href="/book-a-demo"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#CCA400] px-5 py-2.5 text-[13px] font-semibold text-white transition-transform hover:scale-[1.02]"
                    >
                      Book a pricing call
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Included features */}
      <section id="included" className="scroll-mt-[90px] bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <FadeIn className="mx-auto max-w-[820px] text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#CCA400]">
              The Platform
            </span>
            <h2 className="mt-3.5 text-[32px] font-normal leading-tight tracking-[-0.02em] text-[#111111] sm:text-[40px]">
              One Licence. The{" "}
              <span className="heading-accent text-[#0c2d57]">Whole Platform.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[66ch] text-[16px] leading-[1.3] text-[#4B5563] sm:text-[18px]">
              Investera Pro is sold as a complete investment management system,
              not a base product with the useful parts sold separately.
              Everything below is part of the platform your quote covers.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((f, i) => (
              <FadeIn
                key={f.title}
                delay={i * 0.05}
                className="flex flex-col rounded-[18px] border border-[#EEEEEE] bg-white px-6 py-7 shadow-[0_10px_28px_rgba(12,45,87,0.07)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(12,45,87,0.1)]"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[#E8F1FA]">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0c2d57]">
                  {f.title}
                </h3>
                <p className="mt-2 text-[16px] leading-[1.3] text-[#4B5563]">
                  {f.description}
                </p>
                <ul className="mt-4 grid gap-2 border-t border-[#E5E7EB] pt-4">
                  {f.items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-5 text-[16px] leading-[1.3] text-[#4B5563] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#CCA400]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Asset coverage (homepage multi-asset section) */}
      <BusinessDataSection />

      <WhoWeServeSection />
      <InvestorStoriesSection />

      <PricingTimelineSection />

      <InvestmentSolutionsSection />

      <ConnectivitySection />

      <RegionalTrustSection />

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-[90px] bg-[#F4F4F4] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <FadeIn className="mx-auto max-w-[820px] text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#CCA400]">
              Straight Answers
            </span>
            <h2 className="mt-3.5 text-[32px] font-normal leading-tight tracking-[-0.02em] text-[#111111] sm:text-[40px]">
              Questions We Get{" "}
              <span className="heading-accent text-[#0c2d57]">Before The Call</span>
            </h2>
          </FadeIn>

          <FadeIn className="mx-auto mt-10 max-w-[900px] space-y-2 sm:mt-12 sm:space-y-2.5">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className={`rounded-[22px] transition-shadow duration-300 ${
                    open
                      ? "bg-gradient-to-br from-[#2F6FE4] via-[#17477F] to-[#CCA400] p-[1.5px] shadow-[0_14px_36px_rgba(12,45,87,0.12)]"
                      : "bg-transparent"
                  }`}
                >
                  <div
                    className={`rounded-[20.5px] ${
                      open
                        ? "bg-white"
                        : "border border-[#DCEAF8] bg-[#E8F1FA]/55"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      className="flex w-full items-center gap-3.5 px-4 py-4 text-left sm:gap-4 sm:px-5 sm:py-[18px]"
                      aria-expanded={open}
                    >
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold ${
                          open
                            ? "bg-[#E8F1FA] text-[#17477F]"
                            : "bg-white text-[#0c2d57]"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="min-w-0 flex-1 text-[15px] font-semibold leading-[1.35] tracking-[-0.01em] text-[#0c2d57] sm:text-[16px]">
                        {faq.q}
                      </span>
                      <span
                        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                          open
                            ? "border border-[#2F6FE4] bg-white text-[#0c2d57]"
                            : "bg-[#0c2d57] text-white"
                        }`}
                        aria-hidden
                      >
                        {open ? (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M2.5 2.5l7 7M9.5 2.5l-7 7"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M6 2.2v7.6M2.2 6h7.6"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-5 pl-[60px] pr-14 text-[15px] leading-[1.45] text-[#4B5563] sm:px-5 sm:pb-6 sm:pl-[68px] sm:pr-16 sm:text-[16px] sm:leading-[1.4]">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#050B1F] py-[100px] lg:py-[140px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-[-10%] h-[70%] bg-[radial-gradient(ellipse_80%_55%_at_50%_85%,rgba(37,99,235,0.28)_0%,rgba(37,99,235,0.1)_40%,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-[1440px] px-6 text-center lg:px-16">
          <h2 className="text-[36px] font-normal leading-[1.12] tracking-[-0.03em] text-white sm:text-[48px] lg:text-[56px]">
            Get A Number You Can{" "}
            <span className="heading-accent text-white">Take To Your Board.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.45] text-white/80 sm:text-[18px]">
            Thirty minutes on your portfolio, your entities and your team, and a
            written proposal within three working days. No obligation either
            way.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <Link
              href="/book-a-demo"
              className="inline-flex items-center justify-center rounded-full bg-[#CCA400] px-7 py-3 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Book a pricing call
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[60] flex items-center justify-between gap-3 border-t border-white/10 bg-[#050B1F]/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
          stickyVisible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom))" }}
      >
        <span className="text-[13px] leading-[1.3] text-white/75">
          Pricing is scoped on a 30‑min call
        </span>
        <Link
          href="/book-a-demo"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#CCA400] px-5 py-2.5 text-[13px] font-semibold text-white"
        >
          Book a call
        </Link>
      </div>
    </>
  );
}
