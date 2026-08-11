"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const partnerIconImages = [
  "https://investera.s3.us-east-2.amazonaws.com/image_1004_1786433598852_23e7.png",
  "https://investera.s3.us-east-2.amazonaws.com/image_1005_1786433598852_7a7c.png",
  "https://investera.s3.us-east-2.amazonaws.com/image_1006_1786433598852_ofcl.png",
  "https://investera.s3.us-east-2.amazonaws.com/image_1007_1786433598852_2mpl.png",
  "https://investera.s3.us-east-2.amazonaws.com/Investera_Deck_2026_1_1786433598852_k0rx.png",
  "https://investera.s3.us-east-2.amazonaws.com/Investera_Deck_2026_3_1786433598852_z3vk.png",
  "https://investera.s3.us-east-2.amazonaws.com/Investera_Deck_2026_4_1786433598852_rgat.png",
  "https://investera.s3.us-east-2.amazonaws.com/Investera_Deck_2026_6_1786433598852_c7zg.png",
  "https://investera.s3.us-east-2.amazonaws.com/Frame_2147255953_1786433598852_7msk.png",
  "https://investera.s3.us-east-2.amazonaws.com/image_1003_1786433598852_p3sv.png",
  "https://investera.s3.us-east-2.amazonaws.com/Investera_Deck_2026_7_1786433637842_6h1j.png",
];

function IconTile({ src, index }: { src: string; index: number }) {
  return (
    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2 sm:h-[80px] sm:w-[80px]">
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
  const marqueeLogos = [...partnerIconImages, ...partnerIconImages];

  return (
    <section
      id="connectivity"
      className="relative overflow-hidden bg-[#020817] py-24 lg:py-32"
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
        className="pointer-events-none absolute left-1/2 top-[38%] h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(40,90,180,0.22)_0%,transparent_68%)]"
      />

      <div className="relative z-[1] mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-[720px] flex-col items-center text-center"
        >
          <h2 className="text-[40px] font-normal leading-tight text-white">
            Our <span className="font-bold">Technology Partners</span>
          </h2>

          <p className="mt-5 max-w-[560px] text-[16px] leading-[1.3] text-[#94A3B8]">
            Integrate Investera with leading technology, market data, document,
            and business platforms to create a connected investment management
            ecosystem.
          </p>

          <Link
            href="#partners"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/35 bg-transparent px-6 py-2.5 text-[14px] font-medium text-white transition-colors hover:border-white hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
          className="relative mt-14 lg:mt-16"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#020817] to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#020817] to-transparent sm:w-16" />

          <div className="connectivity-marquee overflow-hidden">
            <div className="connectivity-marquee-track flex w-max gap-3 sm:gap-4">
              {marqueeLogos.map((src, i) => (
                <IconTile key={`${src}-${i}`} src={src} index={i % partnerIconImages.length} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .connectivity-marquee-track {
          animation: connectivity-marquee 28s linear infinite;
        }

        .connectivity-marquee:hover .connectivity-marquee-track {
          animation-play-state: paused;
        }

        @keyframes connectivity-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
