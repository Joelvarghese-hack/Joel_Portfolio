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
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const quoteHref = pathname === "/" ? "#quote-section" : "/#quote-section";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/75 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="flex items-center gap-x-4 px-5 py-3 md:gap-x-6 md:px-8"
      >
        <Link href="/" aria-label="Bitlane Relocations, home" className="rounded-md">
          <LogoLockup />
        </Link>

        <div className="ml-4 hidden items-center gap-x-6 text-sm font-medium text-paper/75 md:flex lg:ml-10">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap transition-colors hover:text-amber-pulse ${
                pathname === link.href ? "text-paper" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3 md:gap-5">
          <a
            href="tel:+16137701638"
            className="hidden whitespace-nowrap text-sm font-semibold text-paper/85 transition-colors hover:text-amber-pulse md:inline"
          >
            (613) 770-1638
          </a>
          <a
            href="tel:+16137701638"
            aria-label="Call (613) 770-1638"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-amber-pulse hover:text-amber-pulse md:hidden"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
              <path
                d="M3 2.5h2.6l1.2 3-1.6 1.2a9.6 9.6 0 0 0 4.1 4.1l1.2-1.6 3 1.2v2.6c0 .6-.5 1-1 1C7 14 2 9 2 3.5c0-.5.4-1 1-1Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <Link
            href={quoteHref}
            className="whitespace-nowrap rounded-full bg-velocity-red px-4 py-2 text-xs font-bold text-paper transition-colors hover:bg-crimson-shadow md:px-5 md:text-sm"
          >
            Get Quote
          </Link>
        </div>
      </nav>

      <nav
        aria-label="Pages"
        className="flex items-center gap-x-5 overflow-x-auto px-5 pb-2 text-xs font-medium text-paper/75 md:hidden"
      >
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`whitespace-nowrap transition-colors hover:text-amber-pulse ${
              pathname === link.href ? "text-paper" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
