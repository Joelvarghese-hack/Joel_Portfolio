"use client";

import { QUOTE_EMAIL, submitQuoteForm } from "@/lib/formSubmit";

const MOVE_TYPES = [
  "Residential",
  "Long-Distance",
  "Office",
  "Packing",
  "Storage",
  "Single-Item",
  "Other",
];

const INPUT_CLASS =
  "w-full rounded-lg border border-paper/15 bg-[#101014] px-3.5 py-2.5 text-sm text-paper placeholder:text-paper/35";

const LABEL_CLASS = "mb-1.5 block text-sm font-medium text-paper/80";

export default function QuoteForm() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-paper md:text-3xl">
        Get a free quote in under 2 minutes.
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-paper/65">
        Tell us where you&apos;re moving from and to, and we&apos;ll put together an
        upfront price. No surprises, no pressure.
      </p>
      <p className="mt-2 text-sm text-paper/65">
        Prefer to talk?{" "}
        <a
          href="tel:+16137701638"
          className="font-semibold text-amber-pulse transition-colors hover:text-paper"
        >
          (613) 770-1638
        </a>
        , Mon to Sat, 8am to 7pm EST.
      </p>

      {/* Works without JavaScript: the browser posts the fields as a plain
          text mail body. With JavaScript, submitQuoteForm builds a cleaner
          pre-formatted summary instead. */}
      <form
        action={`mailto:${QUOTE_EMAIL}`}
        method="POST"
        encType="text/plain"
        onSubmit={submitQuoteForm}
        className="mt-6"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="q-name" className={LABEL_CLASS}>
              Full Name
            </label>
            <input
              id="q-name"
              name="Full Name"
              type="text"
              required
              autoComplete="name"
              className={INPUT_CLASS}
            />
          </div>
          <div>
            <label htmlFor="q-phone" className={LABEL_CLASS}>
              Phone
            </label>
            <input
              id="q-phone"
              name="Phone"
              type="tel"
              required
              autoComplete="tel"
              className={INPUT_CLASS}
            />
          </div>
          <div>
            <label htmlFor="q-email" className={LABEL_CLASS}>
              Email
            </label>
            <input
              id="q-email"
              name="Email"
              type="email"
              required
              autoComplete="email"
              className={INPUT_CLASS}
            />
          </div>
          <div>
            <label htmlFor="q-type" className={LABEL_CLASS}>
              Move Type
            </label>
            <select id="q-type" name="Move Type" className={INPUT_CLASS}>
              {MOVE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="q-from" className={LABEL_CLASS}>
              Moving From
            </label>
            <input
              id="q-from"
              name="Moving From"
              type="text"
              required
              className={INPUT_CLASS}
            />
          </div>
          <div>
            <label htmlFor="q-to" className={LABEL_CLASS}>
              Moving To
            </label>
            <input id="q-to" name="Moving To" type="text" required className={INPUT_CLASS} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="q-date" className={LABEL_CLASS}>
              Preferred Date <span className="text-paper/45">(optional)</span>
            </label>
            <input id="q-date" name="Preferred Date" type="date" className={INPUT_CLASS} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="q-notes" className={LABEL_CLASS}>
              Additional Notes <span className="text-paper/45">(optional)</span>
            </label>
            <textarea
              id="q-notes"
              name="Additional Notes"
              rows={3}
              placeholder="Stairs, fragile items, piano, storage needs..."
              className={INPUT_CLASS}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 w-full rounded-full bg-velocity-red px-7 py-3.5 text-sm font-bold text-paper transition-colors hover:bg-crimson-shadow md:text-base"
        >
          Get My Free Quote
        </button>
        <p className="mt-3 text-center text-xs text-paper/55">
          No commitment required. We&apos;ll respond within a few hours.
        </p>
      </form>
    </div>
  );
}
