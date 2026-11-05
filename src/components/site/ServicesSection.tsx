import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";

export function ServicesSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="container-x">
        {showHeading && (
          <SectionHeading
            eyebrow="Услуги"
            title={
              <>
                Искусство ухода <br className="hidden md:block" />
                <span className="text-primary">за автомобилем</span>
              </>
            }
            text="Четыре направления, в которых мы добиваемся безупречного результата. Каждая работа выполняется вручную и проходит многоступенчатый контроль качества."
            aside={
              <Button asChild variant="line" size="pill">
                <Link to="/services">Все услуги</Link>
              </Button>
            }
            className="mb-16 md:mb-20"
          />
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 120} as="article">
              <Link
                to="/contacts"
                hash="booking"
                className="group relative block aspect-[4/5] overflow-hidden bg-graphite sm:aspect-[4/3]"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="bg-card-overlay absolute inset-0" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 md:p-8">
                  <span className="font-display text-sm font-semibold text-primary">{s.num}</span>
                  <span className="flex h-12 w-12 items-center justify-center border border-foreground/20 bg-background/30 text-foreground backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-foreground/60">
                    {s.subtitle}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold uppercase text-foreground md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/70">{s.description}</p>
                  <div className="mt-6 flex items-center gap-6 border-t border-foreground/15 pt-5 text-sm">
                    <span className="font-semibold text-primary">{s.price}</span>
                    <span className="flex items-center gap-2 text-foreground/60">
                      <Clock className="h-4 w-4" />
                      {s.duration}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
