import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading, Soft } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Asymmetric editorial rhythm: wide / narrow, narrow / wide
const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export function ServicesSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className="py-24 md:py-40">
      <div className="container-x">
        {showHeading && (
          <SectionHeading
            index="01"
            eyebrow="Услуги"
            title={
              <>
                Искусство ухода <br className="hidden md:block" />
                <Soft>за автомобилем</Soft>
              </>
            }
            text="Четыре направления, в которых мы добиваемся безупречного результата. Каждая работа выполняется вручную и проходит многоступенчатый контроль качества."
            aside={
              <Button asChild variant="line" size="pill">
                <Link to="/services">Все услуги</Link>
              </Button>
            }
            className="mb-16 md:mb-24"
          />
        )}

        <div className="grid gap-5 md:grid-cols-12 md:gap-6">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.id}
              delay={(i % 2) * 140}
              as="article"
              className={cn("h-full", SPANS[i])}
            >
              <Link
                to="/contacts"
                hash="booking"
                className="group relative flex h-full flex-col overflow-hidden border border-border bg-graphite transition-[border-color,box-shadow] duration-700 hover:border-primary/35 hover:shadow-glow-soft focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                aria-label={`${s.title} — записаться`}
              >
                {/* Photo */}
                <Reveal
                  variant="mask"
                  className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[340px] md:flex-1"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1200}
                    height={912}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover brightness-[0.8] saturate-[0.75] group-hover:scale-[1.06] group-hover:brightness-100 group-hover:saturate-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent opacity-80" />
                  <span className="absolute left-5 top-5 font-display text-xs font-medium tracking-[0.2em] text-foreground/80 md:left-7 md:top-7">
                    {s.num} <span className="text-foreground/35">/ 04</span>
                  </span>
                  <span className="absolute right-5 top-5 border border-foreground/15 bg-background/40 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-foreground/80 backdrop-blur-md md:right-7 md:top-7">
                    {s.subtitle}
                  </span>
                </Reveal>

                {/* Content */}
                <div className="relative p-6 md:p-9">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="min-w-0 font-display text-xl font-medium uppercase leading-tight tracking-[-0.01em] text-foreground md:text-[1.7rem]">
                      {s.title}
                    </h3>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Description */}
                  <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-out can-hover:md:grid-rows-[0fr] can-hover:md:group-hover:grid-rows-[1fr] can-hover:md:group-focus-visible:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="max-w-lg pt-4 text-sm leading-[1.8] text-muted-foreground">
                        {s.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5 text-sm">
                    <span className="font-semibold text-foreground">
                      <span className="text-primary">{s.price}</span>
                    </span>
                    <span className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {s.duration}
                    </span>
                  </div>
                </div>

                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-700 group-hover:scale-x-100" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}