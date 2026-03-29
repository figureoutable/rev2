const logos = [
  "B2B SaaS",
  "Professional services",
  "Manufacturing",
  "Health tech",
] as const;

export default function SocialProofBar() {
  return (
    <section
      aria-label="Social proof"
      className="border-y border-ink/10 bg-sage/60 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-ink/75 sm:text-lg">
          Trusted by teams who need predictable pipeline—not another tool to babysit.
        </p>
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {logos.map((name) => (
            <li
              className="text-[10px] font-semibold uppercase tracking-[0.32em] text-ink/45"
              key={name}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
