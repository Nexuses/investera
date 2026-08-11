import Link from "next/link";

const cards = [
  {
    title: "Private Investments",
    description:
      "Manage private equity, real estate, and other private assets with centralized tracking of valuations, cash flows, and performance.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M16 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 16 11Zm-8 0a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11Zm0 2c-2.8 0-8 1.4-8 4.2V20h8.2M16 13c-.5 0-1.1.05-1.7.14 1.7.9 2.7 2.1 2.7 3.86V20H24v-1.8C24 14.4 18.8 13 16 13Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Public Investments",
    description:
      "Monitor listed securities, market valuations, transactions, and portfolio performance through a unified investment view.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M20 7H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm0 3.2A3.2 3.2 0 0 1 16.8 14 3.2 3.2 0 0 1 20 16.8M4 16.8A3.2 3.2 0 0 1 7.2 14 3.2 3.2 0 0 1 4 10.2"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Cash Management",
    description:
      "Track cash positions, inflows, outflows, and investment-related transactions for better liquidity visibility and control.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2.5 14.9 8.4l6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.4l1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function BusinessDataSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-[720px] text-[40px] font-normal leading-[1.2] tracking-[-0.02em] text-[#111111]">
            Multi-Asset-Class
            <br />
            <span className="font-semibold text-[#143F73]">Investment Management</span>
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#discover"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-white px-7 py-3 text-[13px] font-semibold text-[#1a4570] ring-1 ring-[#1a4570]/25 transition-opacity hover:opacity-90"
            >
              Discover Now
            </Link>
            <Link
              href="#free"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#c4a035] px-7 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#b08f2e]"
            >
              Start for Free
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex items-start gap-4 rounded-[16px] border border-[#EAEAEA] bg-white px-5 py-5 sm:px-6"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2F6FE4] text-white">
                {card.icon}
              </span>
              <div>
                <h5 className="text-[22px] font-semibold leading-snug tracking-[-0.02em] text-[#111111]">
                  {card.title}
                </h5>
                <p className="mt-2 text-[16px] leading-[1.3] text-[#6B7280]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
