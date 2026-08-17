import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const cards = [
  {
    badge: "PV",
    badgeLabel: "Private investments",
    word: "Private.",
    categories: "Equity · Real Estate · Funds",
    title: "Every private holding, tracked to the cent",
    description:
      "Manage private equity, real estate and other private assets with centralised tracking of valuations, cash flows and performance.",
    theme: "private" as const,
  },
  {
    badge: "PB",
    badgeLabel: "Public investments",
    word: "Public.",
    categories: "Listed · Fixed Income · Funds",
    title: "Listed positions, valued as the market moves",
    description:
      "Monitor listed securities, market valuations, transactions and portfolio performance through a unified investment view.",
    theme: "public" as const,
  },
  {
    badge: "CM",
    badgeLabel: "Cash management",
    word: "Cash.",
    categories: "Inflows · Outflows · Liquidity",
    title: "Liquidity you can see coming",
    description:
      "Track cash positions, inflows, outflows and investment-related transactions for better liquidity visibility and control.",
    theme: "cash" as const,
  },
];

function VisualPanel({
  theme,
  badge,
  badgeLabel,
  word,
  categories,
}: (typeof cards)[number]) {
  const badgeColor =
    theme === "private"
      ? "bg-[#C4A035]"
      : theme === "public"
        ? "bg-[#2F6FE4]"
        : "bg-[#22C55E]";
  const badgeText =
    theme === "private" ? "text-[#5C4A32]" : "text-white";
  const badgeWrap =
    theme === "private" ? "bg-white/70" : "bg-black/30";
  const wordColor = theme === "private" ? "text-[#4A3728]" : "text-white";
  const catColor =
    theme === "private"
      ? "text-[#C4A035]"
      : theme === "public"
        ? "text-[#93C5FD]"
        : "text-white/75";

  return (
    <div
      className={`relative flex h-[220px] flex-col overflow-hidden px-5 py-5 sm:h-[240px] sm:px-6 ${
        theme === "private" ? "bg-[#EFE6D6]" : ""
      } ${theme === "public" ? "bg-[#0B2A5B]" : ""}`}
    >
      {theme === "public" ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(100deg, transparent 0 16px, rgba(147,197,253,0.16) 16px 20px), linear-gradient(180deg, #1A4A8C 0%, #0B2A5B 60%, #071E42 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 top-4 h-44 w-44 rounded-full bg-[#3B82F6]/30 blur-2xl"
          />
        </>
      ) : null}
      {theme === "cash" ? (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80')",
            }}
          />
          <div aria-hidden className="absolute inset-0 bg-[#0c2d57]/55" />
        </>
      ) : null}

      <span
        className={`relative z-[1] inline-flex w-fit items-center gap-2 rounded-full py-1 pl-1 pr-3 backdrop-blur-sm ${badgeWrap}`}
      >
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ${badgeColor}`}
        >
          {badge}
        </span>
        <span className={`text-[12px] font-medium ${badgeText}`}>{badgeLabel}</span>
      </span>

      <p
        className={`relative z-[1] flex flex-1 items-center justify-center text-center font-[Georgia,Times,'Times_New_Roman',serif] text-[40px] font-bold leading-none tracking-[-0.03em] sm:text-[44px] ${wordColor}`}
      >
        {word}
      </p>

      <p
        className={`relative z-[1] text-center text-[11px] font-semibold uppercase tracking-[0.14em] ${catColor}`}
      >
        {categories}
      </p>
    </div>
  );
}

export default function BusinessDataSection() {
  return (
    <section className="bg-[#F6F7F9] py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {cards.map((card, index) => (
            <FadeIn key={card.badgeLabel} delay={index * 0.1} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_12px_32px_rgba(12,45,87,0.08)]">
                <VisualPanel {...card} />
                <div className="flex flex-1 flex-col px-6 pb-6 pt-6 sm:px-7 sm:pb-7">
                  <h3 className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0c2d57]">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-[#4B5563]">
                    {card.description}
                  </p>
                  <Link
                    href="/book-a-demo"
                    className="mt-6 inline-flex h-[48px] w-full items-center justify-center rounded-full bg-[#0c2d57] text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Start for free
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
