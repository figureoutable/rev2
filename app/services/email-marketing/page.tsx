import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const included = [
  "Audience segmentation and lifecycle mapping",
  "Campaign calendar and messaging strategy",
  "Email copywriting and layout design",
  "A/B testing for subject lines and content",
  "List hygiene and deliverability monitoring",
  "Performance reporting and optimisation cadence",
] as const;

const steps = [
  {
    title: "Strategy",
    body: "We audit your current list and map key audience segments to clear campaign goals. Every send is planned against lifecycle stage and business priorities.",
  },
  {
    title: "Write and Design",
    body: "We create conversion-focused copy and on-brand email layouts for each segment. Messaging is built to feel relevant, timely, and easy to act on.",
  },
  {
    title: "Test and Send",
    body: "We run structured tests on subject lines, content, and calls to action before scaling winners. Sends are managed for deliverability and consistency.",
  },
  {
    title: "Optimise",
    body: "We review results each cycle, identify what moved engagement and revenue, and iterate accordingly. This turns your list into a compounding growth channel.",
  },
] as const;

const faqs = [
  {
    q: "Do you manage our campaign calendar?",
    a: "Yes, we build and manage the full calendar so your sends stay consistent and strategic.",
  },
  {
    q: "Can you work with our existing templates?",
    a: "Absolutely, we can improve your current templates or build new ones where needed.",
  },
  {
    q: "How do you approach segmentation?",
    a: "We segment by lifecycle stage, engagement, and commercial relevance to keep messaging targeted.",
  },
  {
    q: "What does optimisation actually include?",
    a: "We test, analyse, and refine subject lines, copy, design, and send timing on an ongoing basis.",
  },
  {
    q: "Is this only for ecommerce?",
    a: "No, we support B2B and service-led businesses with considered buying journeys.",
  },
] as const;

export const metadata: Metadata = {
  title: "Email Marketing — RevSquared",
  description:
    "Done-for-you email marketing focused on segmentation, conversion, and consistent list-driven pipeline growth.",
};

export default function EmailMarketingPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section className="border-b border-ink/10 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-coral">
            Done For You
          </p>
          <h1 className="font-heading mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Email Marketing
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-[1.8] text-muted-foreground sm:text-lg">
            We run your email marketing end to end so your list drives steady
            engagement, revenue, and pipeline.
          </p>
          <div className="mt-8">
            <Link
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-sm bg-coral px-8",
                "text-xs font-semibold uppercase tracking-[0.18em] text-white",
                "transition-colors hover:bg-coral-hover"
              )}
              href="/#book-a-call"
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
                <li>• You have a meaningful list but inconsistent results.</li>
                <li>• You want strategic sends, not one-off blasts.</li>
                <li>• You need a team to own execution and optimisation.</li>
              </ul>
            </div>
            <div className="rounded-sm border-2 border-ink/12 bg-cream p-7">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                This is not for you if
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>• You only want occasional ad-hoc campaigns.</li>
                <li>• You are not open to segmentation and testing.</li>
                <li>• You have no capacity to handle inbound demand.</li>
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
            Ready to turn your list into a growth channel?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-[1.75] text-muted-foreground">
            Book a call and we&apos;ll map your next campaigns around segment,
            message, and measurable outcomes.
          </p>
          <div className="mt-7">
            <Link
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-sm bg-coral px-8",
                "text-xs font-semibold uppercase tracking-[0.18em] text-white",
                "transition-colors hover:bg-coral-hover"
              )}
              href="/#book-a-call"
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
