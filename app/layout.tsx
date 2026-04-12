import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
const serif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joseph Solomon",
  description:
    "USC Marshall (B.S., AI minor; M.S. in Finance (PDP)). Co-founder of Lattice; roles at Mariner, Marshall Behavioral Lab, BlackGen, and 180 Degrees Consulting.",
  openGraph: {
    title: "Joseph Solomon",
    description:
      "Work across Lattice, Mariner, and Marshall Behavioral Lab — AI, finance, and product.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sans.variable} ${mono.variable} ${serif.variable} min-h-dvh bg-chrome-void font-sans antialiased text-stone-100`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
