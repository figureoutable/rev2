"use client";

import { useEffect, useState } from "react";

import { MotionPrimaryLink } from "@/components/MotionPrimaryLink";
import { BOOK_CALL_URL } from "@/lib/booking";
import { cn } from "@/lib/utils";

const links = [{ href: "/#stats", label: "Results" }] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-ink/10 bg-cream/92 backdrop-blur-md"
            : "border-transparent bg-cream/70 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <a className="font-script text-2xl text-ink sm:text-[1.65rem]" href="/">
            RevSquared
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                className="text-sm text-ink/75 transition-colors hover:text-ink"
                href={l.href}
                key={l.href}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-6">
            <MotionPrimaryLink
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-sm bg-coral px-5",
                "text-[11px] font-semibold uppercase tracking-[0.2em] text-white",
                "transition-colors hover:bg-coral-hover"
              )}
              href={BOOK_CALL_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Book a call
            </MotionPrimaryLink>
          </div>
        </div>
      </header>
      <div aria-hidden className="h-[4.25rem]" />
    </>
  );
}
