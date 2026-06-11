/**
 * Brand lockup in the four brand colors: red truck mark on black,
 * navy detailing, gold accents in the stripe.
 */
export default function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="24" cy="24" r="22" fill="#000000" />
        <circle cx="24" cy="24" r="22" fill="none" stroke="#E63946" strokeWidth="2.5" />
        {/* trailer */}
        <rect x="8.5" y="16.5" width="15" height="11.5" rx="1.2" fill="#1A2B4A" stroke="#E63946" strokeWidth="1.4" />
        {/* cab */}
        <path
          d="M25 19.5 H32.2 L36.2 24.2 V28 H25 Z"
          fill="#E63946"
        />
        {/* window */}
        <path d="M30.2 21 H32 L34.4 23.8 H30.2 Z" fill="#F5F1E8" />
        {/* wheels */}
        <circle cx="13.5" cy="30.5" r="2.6" fill="#000000" stroke="#F5F1E8" strokeWidth="1.1" />
        <circle cx="13.5" cy="30.5" r="0.9" fill="#C9A961" />
        <circle cx="20" cy="30.5" r="2.6" fill="#000000" stroke="#F5F1E8" strokeWidth="1.1" />
        <circle cx="20" cy="30.5" r="0.9" fill="#C9A961" />
        <circle cx="30.5" cy="30.5" r="2.6" fill="#000000" stroke="#F5F1E8" strokeWidth="1.1" />
        <circle cx="30.5" cy="30.5" r="0.9" fill="#C9A961" />
        {/* ground stripe */}
        <rect x="9" y="35" width="20" height="1.6" fill="#C9A961" />
        <rect x="29" y="35" width="8" height="1.6" fill="#E63946" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-base font-extrabold tracking-[0.22em] text-paper">
          BITLANE
        </span>
        <span className="mt-1 flex h-[3px] w-full" aria-hidden="true">
          <span className="w-2/5 bg-velocity-red" />
          <span className="w-1/5 bg-gold" />
          <span className="w-2/5 bg-velocity-red" />
        </span>
      </span>
    </span>
  );
}
