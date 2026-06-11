import LogoLockup from "@/components/nav/LogoLockup";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "How It Works" },
  { href: "#area", label: "Area" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/75 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center gap-x-6 gap-y-1 px-5 py-3 md:px-8"
      >
        <a
          href="#hero"
          aria-label="Bitlane Relocations, back to start"
          className="rounded-md"
        >
          <LogoLockup />
        </a>

        <div className="order-3 flex w-full items-center gap-x-5 overflow-x-auto pb-1 text-xs font-medium text-paper/75 md:order-none md:ml-6 md:w-auto md:gap-x-6 md:pb-0 md:text-sm lg:ml-10">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-amber-pulse"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3 md:gap-5">
          <a
            href="tel:+16137701638"
            className="whitespace-nowrap text-xs font-semibold text-paper/85 transition-colors hover:text-amber-pulse md:text-sm"
          >
            (613) 770-1638
          </a>
          <a
            href="#quote"
            className="whitespace-nowrap rounded-full bg-velocity-red px-4 py-2 text-xs font-bold text-paper transition-colors hover:bg-crimson-shadow md:px-5 md:text-sm"
          >
            Get Quote
          </a>
        </div>
      </nav>
    </header>
  );
}
