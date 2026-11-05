import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cinematic.jpg";
import { Button } from "@/components/ui/button";

const SPECS = [
  { value: "9H", label: "Твёрдость керамики" },
  { value: "5 лет", label: "Гарантия защиты" },
  { value: "1 200+", label: "Автомобилей" },
];

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  // Gentle parallax on the photograph
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        if (imgRef.current) imgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img
          src={heroImage}
          alt="Чёрный спорткар в дымке на мокром полу студии"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="animate-hero-zoom h-full w-full object-cover object-[72%_center] md:object-[65%_center]"
        />
      </div>
      <div className="bg-hero-mobile md:bg-hero-overlay absolute inset-0" />
      <div className="bg-vignette absolute inset-0" />
      <div className="bg-fade-bottom absolute inset-0" />
      <div className="grain absolute inset-0" aria-hidden="true" />

      {/* Vertical side mark */}
      <p
        className="animate-rise absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 origin-right text-[0.6rem] font-semibold uppercase tracking-[0.5em] text-foreground/35 xl:block"
        style={{ animationDelay: "900ms" }}
      >
        Est. 2017 — Москва
      </p>

      <div className="container-x relative flex flex-1 flex-col justify-end pb-10 pt-32 md:justify-center md:pb-0">
        <p className="eyebrow animate-rise flex items-center gap-4">
          <span className="animate-line-grow h-px w-12 bg-primary" />
          Студия детейлинга
        </p>

        <h1 className="mt-7 font-display text-[9vw] font-bold uppercase leading-[0.98] tracking-[-0.03em] text-foreground sm:text-6xl md:text-7xl xl:text-[6.6rem]">
          <span className="line-mask">
            <span style={{ animationDelay: "150ms" }}>Совершенство</span>
          </span>
          <span className="line-mask">
            <span className="font-extralight text-foreground/80" style={{ animationDelay: "280ms" }}>
              в каждой
            </span>
          </span>
          <span className="line-mask">
            <span style={{ animationDelay: "410ms" }}>
              детали<span className="text-primary">.</span>
            </span>
          </span>
        </h1>

        <p
          className="animate-rise mt-8 max-w-md text-[0.95rem] leading-[1.8] text-foreground/70 md:text-base"
          style={{ animationDelay: "650ms" }}
        >
          Профессиональный детейлинг для тех, кто ценит безупречный вид автомобиля. Полировка,
          керамическая защита и уход за салоном на уровне мировых стандартов.
        </p>

        <div
          className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: "800ms" }}
        >
          <Button asChild variant="hero" size="xl">
            <Link to="/services">
              Смотреть услуги
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="line" size="xl">
            <Link to="/contacts" hash="booking">
              Записаться
            </Link>
          </Button>
        </div>
      </div>

      {/* Spec bar */}
      <div className="container-x relative mt-12 md:mt-0">
        <div
          className="animate-rise grid grid-cols-3 border-t border-foreground/10 md:grid-cols-[repeat(3,minmax(0,12rem))_1fr]"
          style={{ animationDelay: "1000ms" }}
        >
          {SPECS.map((s) => (
            <div key={s.label} className="min-w-0 border-r border-foreground/10 py-5 pr-3 last-of-type:border-r-0 md:py-7 md:pr-6 md:last-of-type:border-r [&:not(:first-child)]:pl-3 md:[&:not(:first-child)]:pl-6">
              <p className="font-display text-lg font-semibold text-foreground md:text-2xl">{s.value}</p>
              <p className="mt-1 truncate text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground md:text-[0.65rem]">
                {s.label}
              </p>
            </div>
          ))}
          <a
            href="#benefits"
            className="group hidden items-center justify-end gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-foreground/45 transition-colors hover:text-foreground md:flex"
            aria-label="Прокрутить вниз"
          >
            Листайте
            <span className="flex h-10 w-6 justify-center rounded-full border border-foreground/25 pt-2 transition-colors group-hover:border-primary">
              <span className="animate-scroll-dot h-2 w-1 rounded-full bg-primary" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
