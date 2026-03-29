export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6 lg:px-8">
        <span className="font-script text-2xl text-ink">RevSquared</span>
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          © {new Date().getFullYear()} RevSquared
        </p>
      </div>
    </footer>
  );
}
