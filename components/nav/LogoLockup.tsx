/** Brand lockup: green truck mark plus wordmark. Works on light surfaces. */
export default function LogoLockup({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 44 44" className="h-9 w-9 shrink-0" aria-hidden="true" focusable="false">
        <rect x="1.5" y="1.5" width="41" height="41" rx="11" fill="#1FBF4B" />
        {/* box van mark in white */}
        <path d="M9 14h16v9H9z" fill="#fff" />
        <path d="M25 17h5.4l3.6 4.2V23H25z" fill="#fff" />
        <path d="M30 18.4h0.9l1.9 2.2H30z" fill="#1FBF4B" />
        <circle cx="15" cy="25.4" r="2.6" fill="#0C0A0A" stroke="#fff" strokeWidth="1.1" />
        <circle cx="29" cy="25.4" r="2.6" fill="#0C0A0A" stroke="#fff" strokeWidth="1.1" />
        <rect x="9" y="29.5" width="26" height="2" rx="1" fill="#fff" opacity="0.85" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.05rem] font-extrabold tracking-tight ${
            onDark ? "text-white" : "text-ink"
          }`}
        >
          Bitlane
        </span>
        <span
          className={`text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${
            onDark ? "text-green-lime" : "text-green-deep"
          }`}
        >
          Relocations
        </span>
      </span>
    </span>
  );
}
