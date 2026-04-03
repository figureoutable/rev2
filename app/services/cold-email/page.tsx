import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BOOK_CALL_URL } from "@/lib/booking";
import { cn } from "@/lib/utils";

const included = [
  "Proprietary prospect data",
  "ICP refinement and segmentation",
  "Email copywriting and sequence strategy",
  "Mailbox setup, warmup, and deliverability",
  "Campaign management and optimisation",
  "Weekly reporting with reply quality insights",
] as const;

const steps = [
  {
    title: "Target",
    body: "We define your ideal buyer and build a focused segment list from our in-house data sources. The result is a prospect pool that fits your offer, not a recycled list.",
  },
  {
    title: "Write",
    body: "Our team drafts your outbound sequences from scratch based on your positioning, market, and proof points. We test hooks, CTAs, and structure before launch.",
  },
  {
    title: "Launch",
    body: "We set up sending infrastructure, warm domains, and run campaigns with inbox placement in mind. Every send is monitored to protect domain health and consistency.",
  },
  {
    title: "Optimise",
    body: "We review performance weekly, iterate messaging, and refine targeting based on real replies. Over time this compounds into higher quality conversations and booked calls.",
  },
] as const;

const faqs = [
  {
    q: "Won't this damage my domain?",
    a: "We use separate sending domains, fully warmed before launch.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see replies in the first two weeks.",
  },
  {
    q: "Do you write the emails?",
    a: "Yes, copywriting is fully included.",
  },
  {
    q: "What industries do you work with?",
    a: "Any B2B business with a considered sale.",
  },
  {
    q: "What makes your data different?",
    a: "Our prospect database is built in-house, not recycled lists.",
  },
] as const;

export const metadata: Metadata = {
  title: "Cold Email — RevSquared",
  description:
    "Outbound sequences managed end-to-end so you can build predictable pipeline with qualified conversations.",
};

export default function ColdEmailPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section className="border-b border-ink/10 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-coral">
            Outbound sequences
          </p>
          <h1 className="font-heading mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Cold Email
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-[1.8] text-muted-foreground sm:text-lg">
            We run fully managed cold email campaigns that turn targeted outbound
            into qualified pipeline conversations.
          </p>
          <div className="mt-8">
            <Link
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-sm bg-coral px-8",
                "text-xs font-semibold uppercase tracking-[0.18em] text-white",
                "transition-colors hover:bg-coral-hover"
              )}
              href={BOOK_CALL_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What&apos;s included
          </h2>
          <div className="mt-6 rounded-sm border-2 border-ink/12 bg-white p-7 sm:p-9">
            <ul className="grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-cream py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How it works
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {steps.map((step, idx) => (
              <article
                key={step.title}
                className="rounded-sm border-2 border-ink/12 bg-white p-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-coral">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading mt-3 text-2xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Who it&apos;s for
          </h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <div className="rounded-sm border-2 border-ink/12 bg-cream p-7">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                This is for you if
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>• You sell B2B with a considered buying process.</li>
                <li>• You want predictable pipeline, not one-off outbound tests.</li>
                <li>• You can handle qualified sales conversations consistently.</li>
              </ul>
            </div>
            <div className="rounded-sm border-2 border-ink/12 bg-cream p-7">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                This is not for you if
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>• You need results in days with no setup period.</li>
                <li>• You are only looking for cheap list volume.</li>
                <li>• You cannot follow up quickly on interested replies.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            FAQ
          </h2>
          <div className="mt-7 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-sm border-2 border-ink/12 bg-cream px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-ink">
                  <span>{faq.q}</span>
                  <span className="text-coral transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Ready to build a predictable outbound pipeline?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-[1.75] text-muted-foreground">
            Book a strategy call and we&apos;ll show you exactly how we&apos;d
            approach your market.
          </p>
          <div className="mt-7">
            <Link
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-sm bg-coral px-8",
                "text-xs font-semibold uppercase tracking-[0.18em] text-white",
                "transition-colors hover:bg-coral-hover"
              )}
              href={BOOK_CALL_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
