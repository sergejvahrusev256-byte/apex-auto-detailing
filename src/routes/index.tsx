import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Gem, Timer } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import { Button } from "@/components/ui/button";
import { ServicesSection } from "@/components/site/ServicesSection";
import { AboutSection } from "@/components/site/AboutSection";
import { GallerySection } from "@/components/site/GallerySection";
import { ContactSection } from "@/components/site/ContactSection";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "APEX DETAILING — премиальный детейлинг автомобилей в Москве" },
      {
        name: "description",
        content:
          "Студия APEX DETAILING: полировка кузова, керамическое покрытие, химчистка салона и комплексный детейлинг. Совершенство в каждой детали.",
      },
      { property: "og:title", content: "APEX DETAILING — совершенство в каждой детали" },
      {
        property: "og:description",
        content: "Премиальный детейлинг: полировка, керамика, химчистка салона. Москва.",
      },
    ],
  }),
  component: Index,
});

const BENEFITS = [
  { Icon: Gem, title: "Премиальные составы", text: "Gyeon, Koch-Chemie, Rupes" },
  { Icon: ShieldCheck, title: "Гарантия результата", text: "До 5 лет на покрытия" },
  { Icon: Sparkles, title: "Ручная работа", text: "Без автоматических моек" },
  { Icon: Timer, title: "Точно в срок", text: "Фиксируем дату выдачи" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={heroCar}
          alt="Чёрный спорткар в студии APEX DETAILING"
          width={1920}
          height={1088}
          className="animate-hero-zoom absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="bg-fade-bottom absolute inset-0" />

        <div className="container-x relative pb-32 pt-32">
          <p className="eyebrow animate-rise flex items-center gap-4">
            <span className="animate-line-grow h-px w-12 bg-primary" />
            Студия детейлинга · Москва
          </p>
          <h1
            className="animate-rise mt-8 max-w-4xl font-display text-[2.6rem] font-bold uppercase leading-[1.02] text-foreground sm:text-6xl md:text-7xl xl:text-8xl"
            style={{ animationDelay: "150ms" }}
          >
            Совершенство <br />в каждой <span className="text-primary">детали.</span>
          </h1>
          <p
            className="animate-rise mt-8 max-w-lg text-base leading-relaxed text-foreground/75 md:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            Профессиональный детейлинг для тех, кто ценит безупречный вид автомобиля. Полировка,
            керамическая защита и уход за салоном на уровне мировых стандартов.
          </p>
          <div
            className="animate-rise mt-12 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "450ms" }}
          >
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/services">
                Смотреть услуги
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="line" size="xl">
              <Link to="/contacts" hash="booking">
                Записаться
              </Link>
            </Button>
          </div>
        </div>

        <a
          href="#benefits"
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-foreground/50 md:flex"
          aria-label="Прокрутить вниз"
        >
          <span className="flex h-10 w-6 justify-center rounded-full border border-foreground/30 pt-2">
            <span className="animate-scroll-dot h-2 w-1 rounded-full bg-primary" />
          </span>
          Листайте
        </a>
      </section>

      {/* Benefits strip */}
      <section id="benefits" className="border-y border-border bg-ink">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 90}
              className="flex flex-col gap-4 border-border py-10 pr-4 sm:flex-row sm:items-center lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
            >
              <Icon className="h-7 w-7 shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <CtaBand />
      <ContactSection />
    </>
  );
}
