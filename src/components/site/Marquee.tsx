const WORDS = ["Полировка", "Керамика", "Химчистка", "Защита", "Детейлинг", "Блеск"];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden border-y border-border py-8 md:py-12" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center">
            {row.map((w, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span className="text-outline px-6 font-display text-5xl font-semibold uppercase tracking-[-0.02em] md:px-10 md:text-8xl">
                  {w}
                </span>
                <span className="h-2 w-2 rotate-45 bg-primary/80" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
