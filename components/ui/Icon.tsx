import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

const PATHS: Record<string, JSX.Element> = {
  estimate: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12l9-9 9 9-9 9z" />
      <circle cx="9" cy="9" r="1.3" />
    </>
  ),
  sofa: (
    <>
      <path d="M4 11V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
      <path d="M3 11a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2 2 2 0 0 0-2 2H5a2 2 0 0 0-2-2Z" />
      <path d="M6 16v2M18 16v2" />
    </>
  ),
  box: (
    <>
      <path d="M3.5 8 12 4l8.5 4-8.5 4z" />
      <path d="M3.5 8v8.5L12 20.5l8.5-4V8" />
      <path d="M12 12v8.5" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v5M15 3v5" />
      <path d="M7 8h10v3a5 5 0 0 1-10 0z" />
      <path d="M12 16v5" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17.5" cy="17.5" r="1.6" />
    </>
  ),
  unpack: (
    <>
      <path d="M4 9V6h16v3" />
      <path d="M5 9h14v11H5z" />
      <path d="M9 9v3h6V9" />
    </>
  ),
  wrench: (
    <path d="M14.5 6.5a4 4 0 0 1 5-5l-2.5 2.5 1 2 2-1a4 4 0 0 1-5 5L8 17l-3 3-2-2 3-3z" />
  ),
  home: (
    <>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9h13v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  quote: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </>
  ),
  crew: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 6.5a3 3 0 0 1 0 5.5M21 20a6 6 0 0 0-4-5.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  star: (
    <path d="M12 3.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8-4.3-4.1 5.9-.8z" />
  ),
  layers: (
    <>
      <path d="M12 3 3 8l9 5 9-5z" />
      <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  check: <path d="M5 12.5 10 17l9-10" />,
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.5-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.5 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </>
  ),
  phone: (
    <path d="M5 3h3l1.5 5-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
};

export default function Icon({ name, ...props }: { name: keyof typeof PATHS } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      {PATHS[name]}
    </svg>
  );
}
