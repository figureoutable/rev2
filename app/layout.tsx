import type { Metadata } from "next";
import { Caveat, Inter, Playfair_Display } from "next/font/google";

import PageTransition from "@/components/PageTransition";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

/** Resolves relative metadata URLs on Vercel (favicon / OG need an absolute base in production). */
function siteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3001";
}

// Favicon + Apple touch icon: `app/icon.png`, `app/apple-icon.png` (Next.js file convention).
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: "RevSquared — Pay for Performance · Lead Generation",
  description:
    "Done-for-you cold email and direct mail outreach for B2B. We fill your pipeline; you close the deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, playfair.variable, caveat.variable)}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen bg-cream selection:bg-coral/20 selection:text-ink"
        )}
      >
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
