import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Access Point", href: "#access-point" },
  { label: "Reward Point", href: "#reward-point" },
  { label: "Xpand Point", href: "#xpand-point" },
  { label: "News", href: "#news" },
];

export default function Header() {
  return (
    <header className="relative z-20 w-full bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-6 py-5 lg:px-16">
        <Link href="/" className="justify-self-start">
          <Image
            src="/images/logo.png"
            alt="Investera"
            width={160}
            height={40}
            priority
            className="h-[34px] w-auto lg:h-[38px]"
          />
        </Link>

        <nav className="hidden items-center justify-center gap-7 xl:flex xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-[14px] font-medium text-[#3d4f5f] transition-colors hover:text-navy lg:text-[15px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="justify-self-end">
          <Link
            href="#demo"
            className="inline-block rounded-full bg-[#c4a035] px-5 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#b08f2e] lg:px-6 lg:py-2.5 lg:text-[13px]"
          >
            Request A Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
