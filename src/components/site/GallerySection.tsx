import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { GALLERY } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GallerySection({ showHeading = true }: { showHeading?: boolean }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % GALLERY.length)), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <section id="gallery" className="py-24 md:py-36">
      <div className="container-x">
        {showHeading && (
          <SectionHeading
            eyebrow="Галерея"
            title={
              <>
                Результат, который <br className="hidden md:block" />
                <span className="text-primary">говорит сам за себя</span>
              </>
            }
            aside={
              <Button asChild variant="line" size="pill">
                <Link to="/gallery">Смотреть все</Link>
              </Button>
            }
            className="mb-16 md:mb-20"
          />
        )}

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[260px] md:grid-cols-3">
          {GALLERY.map((item, i) => (
            <Reveal key={item.alt} delay={(i % 3) * 100} className={cn("h-full", item.span)}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block h-full w-full overflow-hidden bg-graphite"
                aria-label={`Открыть фото: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/30" />
                <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center bg-primary text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="animate-in fade-in fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фото"
          onClick={close}
        >
          <img
            src={GALLERY[active].src}
            alt={GALLERY[active].alt}
            className="animate-in zoom-in-95 max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 w-full max-w-xl -translate-x-1/2 px-4 text-center text-sm text-foreground/70">
            {GALLERY[active].alt} · {active + 1} / {GALLERY.length}
          </p>
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Закрыть"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-border bg-background/50 text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-border bg-background/50 text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Следующее фото"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
