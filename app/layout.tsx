import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import ScrollTopButton from "@/components/scroll/ScrollTopButton";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import "./globals.css";

const hanken = localFont({
  src: "../public/fonts/HankenGrotesk-Variable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: "Bitlane Relocations | Full-Service Movers in Kingston, Ontario",
  description:
    "Comprehensive full-service movers. We handle every step of your move. Affordable moving and storage across Ontario, from Kingston to Toronto, Ottawa, and beyond.",
};

export const viewport: Viewport = {
  themeColor: "#1FBF4B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={hanken.variable}>
      <body className="bg-paper font-sans text-ink">
        <Nav />
        {children}
        <Footer />
        <ScrollTopButton />
        <SmoothScroll />
      </body>
    </html>
  );
}
