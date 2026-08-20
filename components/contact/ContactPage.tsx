"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";

type Slide = {
  titleLines: [string, string];
  image: string;
  imageAlt: string;
  imageClass?: string;
};

const slides: Slide[] = [
  {
    titleLines: ["Portfolio &", "Deal Management"],
    image: "/images/investera-pro/pipeline-dashboard.png",
    imageAlt: "Portfolio and deal management UI",
    imageClass: "object-contain object-bottom scale-[1.18] origin-bottom",
  },
  {
    titleLines: ["Reporting &", "Dashboards"],
    image: "https://investera.s3.us-east-2.amazonaws.com/Frame_2147255954_1786531327568_og22.png",
    imageAlt: "Reporting and dashboards UI",
    imageClass: "object-contain object-right-bottom",
  },
  {
    titleLines: ["Secure", "Document Management"],
    image: "/images/features/document-management.png",
    imageAlt: "Secure document management UI",
    imageClass: "object-contain object-bottom scale-[1.18] origin-bottom",
  },
  {
    titleLines: ["Workflow &", "Governance Controls"],
    image: "https://investera.s3.us-east-2.amazonaws.com/Frame_2147255955_1786531397931_jong.png",
    imageAlt: "Workflow and governance controls UI",
    imageClass: "object-contain object-bottom",
  },
];

const partnerLogos = [
  { src: "/images/logos/logo-02.png", alt: "LilyPeck", width: 100, height: 28 },
  { src: "/images/logos/logo-01.png", alt: "Souk Management", width: 110, height: 28 },
  { src: "/images/logos/logo-06.png", alt: "Murbiha", width: 90, height: 28 },
  { src: "/images/logos/logo-05.png", alt: "Al Kifah Holding", width: 100, height: 28 },
];

function SlideVisual({ slide }: { slide: Slide }) {
  return (
    <div className="relative mt-3 overflow-hidden rounded-[10px] bg-gradient-to-br from-[#dce8f5] via-[#e8f0f8] to-[#c5d9ec] px-1.5 pt-1.5 pb-0 sm:mt-4 sm:px-2 sm:pt-2 sm:pb-0">
      <div className="relative mx-auto h-[160px] w-full max-w-[280px] sm:h-[180px]">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          unoptimized
          className={`${slide.imageClass ?? "object-contain object-center"} drop-shadow-[0_12px_30px_rgba(20,63,115,0.2)]`}
        />
      </div>
    </div>
  );
}

function SlideCard({
  slide,
  isActive,
}: {
  slide: Slide;
  isActive: boolean;
}) {
  return (
    <div className="relative">
      <div
        className={`rounded-[12px] bg-white px-3.5 pb-3.5 pt-3.5 shadow-[0_12px_28px_rgba(0,0,0,0.14)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-4 sm:pb-4 sm:pt-4 ${
          isActive ? "scale-100" : "scale-[0.88]"
        }`}
      >
        <h2 className="text-left text-[15px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111] sm:text-[16px]">
          {slide.titleLines[0]}
          <br />
          {slide.titleLines[1]}
        </h2>
        <SlideVisual slide={slide} />
      </div>
      {!isActive && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[12px] bg-[#0a2a4d]/55"
          aria-hidden
        />
      )}
    </div>
  );
}

const LOOP = [...slides, ...slides, ...slides];
const SET_SIZE = slides.length;

function ContactCarousel() {
  const [activeSlide, setActiveSlide] = useState(SET_SIZE);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animate, setAnimate] = useState(true);

  const normalizedIndex = ((activeSlide % SET_SIZE) + SET_SIZE) % SET_SIZE;

  const goPrev = useCallback(() => {
    setAnimate(true);
    setActiveSlide((i) => i - 1);
  }, []);

  const goNext = useCallback(() => {
    setAnimate(true);
    setActiveSlide((i) => i + 1);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setAnimate(true);
    setActiveSlide(SET_SIZE + index);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(goNext, 5000);
    return () => window.clearInterval(timer);
  }, [isPlaying, goNext]);

  useEffect(() => {
    if (activeSlide >= SET_SIZE && activeSlide < SET_SIZE * 2) return;

    const timeout = window.setTimeout(() => {
      setAnimate(false);
      setActiveSlide((i) => {
        if (i < SET_SIZE) return i + SET_SIZE;
        if (i >= SET_SIZE * 2) return i - SET_SIZE;
        return i;
      });
    }, 520);

    return () => window.clearTimeout(timeout);
  }, [activeSlide]);

  useEffect(() => {
    if (!animate) {
      const id = window.requestAnimationFrame(() => setAnimate(true));
      return () => window.cancelAnimationFrame(id);
    }
  }, [animate]);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden px-1 sm:px-2">
        <div
          className={`flex items-center ${
            animate
              ? "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              : ""
          }`}
          style={{
            transform: `translateX(calc(50% - ${activeSlide * 56}% - 28% - ${activeSlide * 8}px))`,
          }}
        >
          {LOOP.map((slide, index) => (
            <div
              key={`${slide.imageAlt}-${index}`}
              className="w-[56%] shrink-0 px-1.5 sm:px-2"
            >
              <SlideCard slide={slide} isActive={index === activeSlide} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 text-white/90">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-80"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          className="flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-80"
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
              <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all ${
                i === normalizedIndex
                  ? "h-2.5 w-2.5 bg-white"
                  : "h-2 w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-80"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
    <div className="flex min-h-screen flex-col pt-[88px] lg:flex-row">
      <div
        className="relative flex min-h-[420px] w-full flex-col justify-between bg-[#050B1F] bg-cover bg-center bg-no-repeat px-6 py-10 sm:py-12 lg:min-h-[calc(100vh-88px)] lg:w-3/5 lg:pl-[max(4rem,calc((100vw-1440px)/2+4rem))] lg:pr-8 lg:py-14"
        style={{
          backgroundImage:
            "url('https://investera.s3.us-east-2.amazonaws.com/Platform_BG_1786612003256_5z5e.png')",
        }}
      >
        <div className="mb-8 w-full max-w-[720px] text-left lg:mb-10">
          <h1 className="text-[42px] font-normal leading-tight tracking-[-0.03em] text-white sm:text-[55px]">
            <span className="font-normal">Let&apos;s Transform the Way</span>
            <br />
            <span className="heading-accent">You Manage Investments</span>
          </h1>
          <p className="mt-4 text-[16px] leading-[1.3] text-white/80">
            Connect with our team to see how Investera can unify your
            portfolios, deals, documents, workflows, reporting, and insights on
            one secure platform, tailored to your investment needs.
          </p>
        </div>

        <div className="-ml-6 w-[calc(100%+1.5rem)] flex flex-1 flex-col items-center justify-center lg:-ml-[max(4rem,calc((100vw-1440px)/2+4rem))] lg:w-[calc(100%+max(4rem,calc((100vw-1440px)/2+4rem)))]">
          <ContactCarousel />
        </div>

        <div className="mt-10 text-center lg:mt-6">
          <p className="text-[13px] text-white/70">
            Trusted by leading investment organizations.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {partnerLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                unoptimized
                className="h-6 w-auto brightness-0 invert opacity-90 sm:h-7"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-88px)] w-full flex-col overflow-hidden bg-white lg:w-2/5">
        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-12 pt-8 sm:px-10">
          <div className="w-full max-w-[480px]">
            <div className="text-left">
              <h3 className="text-[34px] font-normal leading-tight tracking-[-0.02em] text-[#1a1a1a]">
                <span className="font-normal text-[#1a1a1a]">Speak With Our</span>
                <br />
                <span className="heading-accent text-[#0c2d57]">
                  Investment Technology Experts
                </span>
              </h3>
              <p className="mt-4 text-[16px] leading-[1.3] text-[#4B5563]">
                Complete the form, and our team will contact you to understand
                your investment operations and arrange a personalized platform
                demonstration.
              </p>
            </div>

            <form className="mt-8 space-y-4">
              <div>
                <label className="mb-1.5 block text-left text-[16px] font-medium leading-[1.3] text-[#1a1a1a]">
                  First Name <span className="text-[#DC2626]">*</span>
                </label>
                <input className="h-[42px] w-full border border-[#C9CDD3] px-3 text-[16px] leading-[1.3] text-[#1a1a1a] outline-none focus:border-[#0c2d57]" />
              </div>

              <div>
                <label className="mb-1.5 block text-left text-[16px] font-medium leading-[1.3] text-[#1a1a1a]">
                  Last Name <span className="text-[#DC2626]">*</span>
                </label>
                <input className="h-[42px] w-full border border-[#C9CDD3] px-3 text-[16px] leading-[1.3] text-[#1a1a1a] outline-none focus:border-[#0c2d57]" />
              </div>

              <div>
                <label className="mb-1.5 block text-left text-[16px] font-medium leading-[1.3] text-[#1a1a1a]">
                  Email <span className="text-[#DC2626]">*</span>
                </label>
                <input className="h-[42px] w-full border border-[#C9CDD3] px-3 text-[16px] leading-[1.3] text-[#1a1a1a] outline-none focus:border-[#0c2d57]" />
              </div>

              <div>
                <label className="mb-1.5 block text-left text-[16px] font-medium leading-[1.3] text-[#1a1a1a]">
                  Phone Number
                </label>
                <input className="h-[42px] w-full border border-[#C9CDD3] px-3 text-[16px] leading-[1.3] text-[#1a1a1a] outline-none focus:border-[#0c2d57]" />
              </div>

              <div>
                <label className="mb-1.5 block text-left text-[16px] font-medium leading-[1.3] text-[#1a1a1a]">
                  Message
                </label>
                <textarea className="min-h-[90px] w-full resize-y border border-[#C9CDD3] px-3 py-2 text-[16px] leading-[1.3] text-[#1a1a1a] outline-none focus:border-[#0c2d57]" />
              </div>

              <div className="flex w-full items-center justify-between border border-[#D1D5DB] px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 border border-[#4B5563]" />
                  <span className="text-[16px] leading-[1.3] text-[#1a1a1a]">I'm not a robot</span>
                </div>
                <div className="text-right text-[10px] text-[#6B7280]">
                  <div className="ml-auto h-7 w-7 rounded bg-[#E5E7EB]" />
                  reCAPTCHA
                </div>
              </div>

              <button
                type="submit"
                className="h-[48px] w-full rounded-[4px] px-4 text-[16px] font-medium leading-[1.3] text-white"
                style={{ backgroundColor: "#CCA400" }}
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>

    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <FadeIn>
        <h2 className="text-[40px] font-normal leading-tight tracking-[-0.02em]">
          <span className="font-normal text-[#1a1a1a]">Get in </span>
          <span className="heading-accent text-[#0c2d57]">Touch</span>
        </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          <a
            href="tel:+97123093880"
            className="flex flex-col items-center rounded-[10px] border border-[#0c2d57] bg-[#F8F9FB] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#0a2540] hover:bg-white hover:shadow-[0_12px_30px_rgba(12,45,87,0.12)]"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2F6FE4]">
              <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-white" aria-hidden>
                <path
                  d="M6.5 3.8h2.2c.4 0 .8.3.9.7l.8 2.3c.1.4 0 .8-.3 1.1L8.6 9.4c1.2 2.3 3.1 4.2 5.4 5.4l1.5-1.5c.3-.3.7-.4 1.1-.3l2.3.8c.4.1.7.5.7.9v2.2c0 .5-.4.9-.9.9C10.8 19.8 4.2 13.2 4.2 4.7c0-.5.4-.9.9-.9Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="mt-4 text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">Phone</p>
            <p className="mt-1 text-[16px] leading-[1.3] text-[#6B7280]">+971 2 309 3880</p>
          </a>

          <a
            href="mailto:info@investera.com"
            className="flex flex-col items-center rounded-[10px] border border-[#0c2d57] bg-[#F8F9FB] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#0a2540] hover:bg-white hover:shadow-[0_12px_30px_rgba(12,45,87,0.12)]"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2F6FE4]">
              <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-white" aria-hidden>
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
                <path
                  d="M4 7l8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="mt-4 text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">Email</p>
            <p className="mt-1 text-[16px] leading-[1.3] text-[#6B7280]">info@investera.com</p>
          </a>
        </div>
      </div>
    </section>

    <section className="bg-[#F7F8FA] py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
        <div>
          <h2 className="text-[40px] font-normal leading-tight tracking-[-0.02em]">
            <span className="heading-accent text-[#0c2d57]">Office</span>
          </h2>
          <p className="mt-4 max-w-[480px] text-[16px] leading-[1.3] text-[#4B5563]">
            Visit our headquarters or get in touch for the nearest location to
            your organization.
          </p>
          <div className="mt-6 h-px w-full bg-[#0c2d57]/40" />

          <div className="mt-8 flex gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center text-[#0c2d57]">
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
                <path
                  d="M4 20V8.5L12 4l8 4.5V20"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path d="M9 20v-7h6v7" stroke="currentColor" strokeWidth="1.7" />
                <path d="M4 20h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">Abu Dhabi</p>
              <p className="mt-2 text-[16px] leading-[1.3] text-[#6B7280]">
                12th Floor, CI Tower
                <br />
                Abu Dhabi, UAE
                <br />
                P.O. Box 112230
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center text-[#0c2d57]">
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
                <path
                  d="M12 8v4.2l2.5 1.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#111111]">Business Hours:</p>
              <p className="mt-2 text-[16px] leading-[1.3] text-[#6B7280]">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[12px] bg-white shadow-[0_12px_40px_rgba(12,45,87,0.10)]">
          <iframe
            title="Investera office, CI Tower, Abu Dhabi"
            src="https://maps.google.com/maps?q=CI%20Tower%20Abu%20Dhabi%20UAE&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-[360px] w-full border-0 sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
    </>
  );
}
