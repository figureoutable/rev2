import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What exactly does RevSquared do?",
    answer:
      "We run outbound lead generation for B2B: cold email, direct mail, and email marketing. We book qualified meetings with prospects who match your ideal customer profile. You take it from there.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients see first replies within about two weeks after go-live. Stronger, pipeline-ready conversations usually build over the first 30 days as we optimise targeting and messaging.",
  },
  {
    question: "Who do you work with?",
    answer:
      "We work with B2B companies that have a clear target market and an offer ready for cold traffic. If you're not sure whether you're a fit, just reach out and we'll tell you straight.",
  },
  {
    question: "How is this different from hiring a salesperson?",
    answer:
      "No salary, benefits, or ramp time. Instead of one hire building pipeline over months, you get a dedicated outbound programme live in days, with reporting you can actually use.",
  },
  {
    question: "What does it cost?",
    answer:
      "It depends on volume and which channels we run. Book a call and we'll scope something that fits your budget and goals. No surprises.",
  },
] as const;

export default function FaqSection() {
  return (
    <section
      className="scroll-mt-24 border-t border-ink/10 bg-white py-10 sm:py-14"
      id="faq"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-balance text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 border-t border-ink/10">
          {FAQ_ITEMS.map((item) => (
            <details
              className="group border-b border-ink/10"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="font-heading text-lg font-semibold leading-snug text-ink sm:text-xl">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-coral transition-transform duration-200 group-open:rotate-180"
                  strokeWidth={2}
                />
              </summary>
              <p className="pb-5 text-base leading-[1.75] text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
