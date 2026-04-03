export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="py-6 sm:py-8">
        <p className="mx-auto max-w-6xl px-4 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} RevSquared
        </p>
      </div>
    </footer>
  );
}
