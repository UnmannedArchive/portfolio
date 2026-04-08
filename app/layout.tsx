import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joseph Solomon — Portfolio",
  description:
    "USC Marshall (B.S., AI minor; M.S. in Finance (PDP)). Co-founder of Lattice; roles at Mariner, Marshall Behavioral Lab, BlackGen, and 180 Degrees Consulting.",
  openGraph: {
    title: "Joseph Solomon — Portfolio",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-chrome-void font-sans antialiased text-stone-100`}
      >
        {children}
      </body>
    </html>
  );
}
