"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoLockup from "@/components/nav/LogoLockup";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/coverage", label: "Coverage" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const quoteHref = pathname === "/" ? "#quote" : "/#quote";

  return (
    <header className="sticky top-0 z-50">
      {/* thin top bar */}
      <div className="hidden bg-ink text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <p className="text-white/70">Licensed and insured. Serving Kingston and across Ontario.</p>
          <div className="flex items-center gap-5">
            <span className="text-white/70">Mon to Sat, 8am to 7pm EST</span>
            <a href="tel:+16137701638" className="font-semibold text-green-lime hover:text-white">
              (613) 770-1638
            </a>
          </div>
        </div>
      </div>

      <nav
        aria-label="Primary"
        className={`border-b transition-shadow ${
          scrolled ? "border-cloud shadow-sm" : "border-transparent"
        } bg-paper/95 backdrop-blur`}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 md:px-6">
          <Link href="/" aria-label="Bitlane Relocations, home" className="rounded-md">
            <LogoLockup />
          </Link>

          <div className="ml-6 hidden items-center gap-7 text-sm font-semibold text-ink/75 lg:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-green-deep ${
                  pathname === link.href ? "text-green-deep" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="tel:+16137701638"
              className="hidden text-sm font-bold text-ink hover:text-green-deep sm:inline"
            >
              (613) 770-1638
            </a>
            <Link
              href={quoteHref}
              className="rounded-full bg-green px-4 py-2.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-green-deep md:px-5 md:text-sm"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* mobile link row */}
        <div className="flex items-center gap-5 overflow-x-auto px-5 pb-2 text-xs font-semibold text-ink/70 lg:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap hover:text-green-deep ${
                pathname === link.href ? "text-green-deep" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
