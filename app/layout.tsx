import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bricolage = localFont({
  src: "../public/fonts/BricolageGrotesque-Variable.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Bitlane Relocations | Stress Free Moving Experience",
  description:
    "Moving, made simple. Relocations across Ontario, from Kingston to Toronto, Ottawa, and beyond. Upfront pricing, careful hands, zero stress.",
};

export const viewport: Viewport = {
  themeColor: "#0E0E10",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className="bg-ink font-sans text-paper antialiased">{children}</body>
    </html>
  );
}
