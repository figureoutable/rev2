import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-10 lg:px-8">
        <div className="flex justify-center">
          <Link
            className="font-script text-[2.35rem] leading-none text-ink transition-opacity hover:opacity-80 sm:text-[2.85rem]"
            href="/"
          >
            RevSquared
          </Link>
        </div>
      </div>
      <div className="border-t border-ink/10 py-4">
        <p className="mx-auto max-w-6xl px-4 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} RevSquared
        </p>
      </div>
    </footer>
  );
}
