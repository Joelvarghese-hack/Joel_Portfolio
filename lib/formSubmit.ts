// TODO: replace with real email
export const QUOTE_EMAIL = "info@bitlane-relocations.ca";

const FIELD_ORDER = [
  "Full Name",
  "Phone",
  "Email",
  "Moving From",
  "Moving To",
  "Move Type",
  "Preferred Date",
  "Additional Notes",
] as const;

export function buildQuoteMailto(form: HTMLFormElement): string {
  const data = new FormData(form);
  const lines: string[] = ["New quote request from the Bitlane website.", ""];

  for (const field of FIELD_ORDER) {
    const raw = data.get(field);
    const value = typeof raw === "string" ? raw.trim() : "";
    if (value) {
      lines.push(`${field}: ${value}`);
    }
  }

  const name = data.get("Full Name");
  const subject =
    typeof name === "string" && name.trim()
      ? `Quote request from ${name.trim()}`
      : "Quote request";

  return `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export function submitQuoteForm(event: { preventDefault(): void; currentTarget: HTMLFormElement }): void {
  event.preventDefault();
  window.location.href = buildQuoteMailto(event.currentTarget);
}
