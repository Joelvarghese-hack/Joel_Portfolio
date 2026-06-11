import LogoLockup from "@/components/nav/LogoLockup";
import { QUOTE_EMAIL } from "@/lib/formSubmit";

const FOOTER_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "How It Works" },
  { href: "#area", label: "Service Area" },
  { href: "#quote", label: "Get a Quote" },
];

const FOOTER_CITIES = [
  "Kingston ON",
  "Toronto ON",
  "Ottawa ON",
  "Montréal QC",
  "Belleville ON",
  "Brockville ON",
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0C] px-6 py-14 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <LogoLockup />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/65">
            Stress-free relocations across Ontario. Based in Kingston since 2022.
          </p>
          <p className="mt-3 text-sm font-semibold text-paper/80">Licensed and Insured</p>
        </div>

        <ul className="grid content-start gap-3 text-sm">
          <li>
            <a
              href="tel:+16137701638"
              className="font-semibold text-paper/85 transition-colors hover:text-amber-pulse"
            >
              (613) 770-1638
            </a>
          </li>
          <li>
            <a
              href={`mailto:${QUOTE_EMAIL}`}
              className="break-all text-paper/85 transition-colors hover:text-amber-pulse"
            >
              {QUOTE_EMAIL}
            </a>
          </li>
          <li className="text-paper/65">Kingston, Ontario, Canada</li>
        </ul>

        <nav aria-label="Footer">
          <ul className="grid content-start gap-3 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  className="text-paper/85 transition-colors hover:text-amber-pulse"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-bold text-paper">Service Area</p>
          <ul className="mt-3 grid gap-2 text-sm text-paper/65">
            {FOOTER_CITIES.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl text-xs text-paper/45">
        © 2026 Bitlane Relocations. All rights reserved.
      </p>
    </footer>
  );
}
