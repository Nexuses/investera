import Image from "next/image";

const logos = [
  { src: "/images/logos/logo-10.png", alt: "Mithaq Holding", width: 140, height: 56, blend: true },
  { src: "/images/logos/logo-08.png", alt: "Dimah Capital", width: 130, height: 48, blend: false },
  { src: "/images/logos/logo-09.png", alt: "Estate Renovations", width: 72, height: 56, blend: false },
  { src: "/images/logos/logo-02.png", alt: "LilyPeck", width: 150, height: 40, blend: true },
  { src: "/images/logos/logo-11.png", alt: "Awaser", width: 120, height: 44, blend: false },
  { src: "/images/logos/logo-01.png", alt: "Souk Management", width: 170, height: 44, blend: true },
  { src: "/images/logos/logo-07.png", alt: "Muscat Overseas Group", width: 110, height: 56, blend: false },
  { src: "/images/logos/logo-05.png", alt: "Al Kifah Holding", width: 150, height: 48, blend: true },
  { src: "/images/logos/logo-03.png", alt: "Emirates Consortium", width: 160, height: 48, blend: true },
  { src: "/images/logos/logo-04.png", alt: "Al Nasser Holdings", width: 170, height: 40, blend: true },
  { src: "/images/logos/logo-06.png", alt: "Murbiha", width: 130, height: 44, blend: true },
];

const HIDDEN_ON_DARK = new Set([
  "Mithaq Holding",
  "Dimah Capital",
  "Estate Renovations",
  "Awaser",
  "Muscat Overseas Group",
  "Al Nasser Holdings",
]);

function LogoItem({
  logo,
  variant,
}: {
  logo: (typeof logos)[number];
  variant: "light" | "dark";
}) {
  return (
    <div className="flex shrink-0 items-center justify-center px-8 lg:px-12">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={`h-10 w-auto max-w-none object-contain lg:h-11 ${
          variant === "dark"
            ? "brightness-0 invert"
            : logo.blend
              ? "mix-blend-screen"
              : ""
        }`}
        draggable={false}
      />
    </div>
  );
}

export default function LogoSlider({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const visibleLogos =
    variant === "dark"
      ? logos.filter((logo) => !HIDDEN_ON_DARK.has(logo.alt))
      : logos;

  return (
    <section
      className={`relative w-full overflow-hidden ${
        variant === "dark" ? "bg-[#0B101E]" : "bg-white"
      }`}
    >
      <div className="logo-slider-mask relative py-[35px] lg:py-[39px]">
        <div className="logo-slider-track flex w-max items-center">
          {[...visibleLogos, ...visibleLogos].map((logo, index) => (
            <LogoItem
              key={`${logo.alt}-${index}`}
              logo={logo}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
