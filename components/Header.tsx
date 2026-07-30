import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Why Choose Investera", href: "#why-choose-investera" },
  { label: "Media", href: "#media" },
];

export default function Header() {
  return (
    <header className="relative z-20 w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-16 lg:py-5">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Investera"
            width={160}
            height={40}
            priority
            className="h-[32px] w-auto lg:h-[36px]"
          />
        </Link>

        <div className="hidden items-center gap-8 xl:flex xl:gap-10">
          <nav className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-[14px] font-normal text-[#4a5568] transition-colors hover:text-[#0c2d57] lg:text-[15px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#demo"
            className="shrink-0 rounded-full bg-[#c4a035] px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#b08f2e] lg:px-6 lg:py-2.5"
          >
            Request A Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
