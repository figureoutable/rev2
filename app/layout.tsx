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

export const metadata: Metadata = {
  title: "RevSquared — More pipeline. Less guesswork.",
  description:
    "Done-for-you cold email and direct mail outreach for B2B. We fill your pipeline; you close the deals.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
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
