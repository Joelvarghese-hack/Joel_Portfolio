import type { Metadata } from "next";
import PageHero from "@/components/inner/PageHero";
import QuoteForm from "@/components/quote/QuoteForm";
import { QUOTE_EMAIL } from "@/lib/formSubmit";

export const metadata: Metadata = {
  title: "Contact | Bitlane Relocations",
  description:
    "Call, email, or send the quote form. Bitlane Relocations responds within a few hours, Mon to Sat, 8am to 7pm EST.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact"
        lede="Call, email, or send the form. We respond within a few hours."
      />
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-2xl">
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>
              <a
                href="tel:+16137701638"
                className="font-semibold text-paper transition-colors hover:text-amber-pulse"
              >
                (613) 770-1638
              </a>
            </li>
            <li>
              <a
                href={`mailto:${QUOTE_EMAIL}`}
                className="break-all font-semibold text-paper transition-colors hover:text-amber-pulse"
              >
                {QUOTE_EMAIL}
              </a>
            </li>
            <li className="text-paper/65">Mon to Sat, 8am to 7pm EST</li>
            <li className="text-paper/65">Kingston, Ontario, Canada</li>
          </ul>
          <div className="mt-10 rounded-2xl border border-paper/10 bg-[#15151B]/95 p-6 md:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
