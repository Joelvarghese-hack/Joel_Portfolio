import Link from "next/link";
import LogoLockup from "@/components/nav/LogoLockup";
import Marquee from "@/components/ui/Marquee";
import { QUOTE_EMAIL } from "@/lib/formSubmit";

const SERVICES = [
  "Residential moving",
  "Long-distance moving",
  "Office relocations",
  "Packing services",
  "Furniture assembly",
  "Storage solutions",
  "Same-day moves",
  "Local Kingston moves",
];

const CITIES = [
  "Kingston ON",
  "Toronto ON",
  "Ottawa ON",
  "Montréal QC",
  "Belleville ON",
  "Brockville ON",
];

const COMPANY = [
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/coverage", label: "Coverage" },
  { href: "/contact", label: "Contact" },
  { href: "/#quote", label: "Get a quote" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Marquee />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <LogoLockup onDark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Stress-free relocations across Ontario. Based in Kingston since 2022.
            Licensed and insured.
          </p>
          <a
            href="#quote"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-green px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-green-deep"
          >
            Get a free quote
          </a>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-lime">Services</p>
          <ul className="mt-4 grid gap-2.5 text-sm text-white/65">
            {SERVICES.map((s) => (
              <li key={s}>
                <Link href="/services" className="transition-colors hover:text-white">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-lime">Service area</p>
          <ul className="mt-4 grid gap-2.5 text-sm text-white/65">
            {CITIES.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-lime">Company</p>
          <ul className="mt-4 grid gap-2.5 text-sm text-white/65">
            {COMPANY.map((c) => (
              <li key={c.href + c.label}>
                <Link href={c.href} className="transition-colors hover:text-white">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-2 text-sm">
            <a href="tel:+16137701638" className="font-bold text-white hover:text-green-lime">
              (613) 770-1638
            </a>
            <a href={`mailto:${QUOTE_EMAIL}`} className="break-all text-white/65 hover:text-white">
              {QUOTE_EMAIL}
            </a>
            <span className="text-white/50">Kingston, Ontario, Canada</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Bitlane Relocations. All rights reserved.</p>
          <p>Mon to Sat, 8am to 7pm EST</p>
        </div>
      </div>
    </footer>
  );
}
