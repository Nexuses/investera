"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const partnerIconImages = [
  "https://investera.s3.us-east-2.amazonaws.com/image_997_1787222106497_l78r.png",
  "https://investera.s3.us-east-2.amazonaws.com/image_998_1787222106497_u2uf.png",
  "https://investera.s3.us-east-2.amazonaws.com/image_999_1787222106497_vod8.png",
  "https://investera.s3.us-east-2.amazonaws.com/image_1000_1787222106497_dx0m.png",
  "https://investera.s3.us-east-2.amazonaws.com/image_1001_1787222106497_v71f.png",
];

function IconTile({ src, index }: { src: string; index: number }) {
  return (
    <div className="flex h-[120px] w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-white p-3 sm:h-[140px] sm:w-[140px] sm:p-3.5 lg:h-[160px] lg:w-[160px] lg:rounded-[26px] lg:p-4">
      <img
        src={src}
        alt={`Technology partner ${index + 1}`}
        loading="lazy"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export default function ConnectivitySection() {
  const marqueeLogos = [
    ...partnerIconImages,
    ...partnerIconImages,
    ...partnerIconImages,
    ...partnerIconImages,
  ];

  return (
    <section
      id="connectivity"
      className="relative overflow-hidden bg-[#020817] py-32 sm:py-40 lg:py-48"
    >
      {/* Vertical grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(100,140,200,0.07) 0, rgba(100,140,200,0.07) 1px, transparent 1px, transparent 80px)",
        }}
      />

      {/* Soft radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[42%] h-[640px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(40,90,180,0.22)_0%,transparent_68%)]"
      />

      <div className="relative z-[1] mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-[780px] flex-col items-center text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#3B82F6]/35 bg-[#0B1F4A] px-4 py-1.5 text-[13px] font-medium tracking-wide text-[#93C5FD]">
            Connectivity
          </span>

          <h2 className="mt-7 text-[40px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[48px] lg:text-[55px]">
            Our{" "}
            <span className="heading-accent">
              Technology Partners
            </span>
          </h2>

          <p className="mt-6 max-w-[620px] text-[16px] leading-[1.5] text-[#94A3B8] sm:text-[18px]">
            Integrate Investera with leading technology, market data, document,
            and business platforms to create a connected investment management
            ecosystem.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-7 py-3 text-[15px] font-medium text-white transition-colors hover:border-white hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Partner with Us
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="relative mt-20 lg:mt-28"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#020817] to-transparent sm:w-20 lg:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#020817] to-transparent sm:w-20 lg:w-28" />

          <div className="connectivity-marquee overflow-hidden">
            <div className="connectivity-marquee-track flex w-max gap-4 sm:gap-5">
              {marqueeLogos.map((src, i) => (
                <IconTile
                  key={`${src}-${i}`}
                  src={src}
                  index={i % partnerIconImages.length}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
