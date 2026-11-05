import { Link } from "@tanstack/react-router";
import { ABOUT_IMAGE, STATS, VALUES } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

export function AboutSection({ showLink = true }: { showLink?: boolean }) {
  return (
    <section id="about" className="grain relative overflow-hidden bg-graphite py-24 md:py-36">
      <div className="container-x relative grid gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={ABOUT_IMAGE}
              alt="Интерьер студии APEX DETAILING"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden border border-border bg-background p-8 md:block lg:-right-10">
            <p className="font-display text-5xl font-bold text-primary">9</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              лет безупречной <br /> работы
            </p>
          </div>
          <span className="absolute -left-3 -top-3 h-20 w-20 border-l-2 border-t-2 border-primary" aria-hidden="true" />
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow flex items-center gap-4">
              <span className="h-px w-10 bg-primary" />О студии
            </p>
            <h2 className="mt-6 font-display text-3xl font-semibold uppercase leading-[1.1] text-foreground md:text-5xl">
              Мы не моем машины. <br />
              <span className="text-primary">Мы создаём идеал.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              APEX DETAILING — студия, где автомобиль получает столько внимания, сколько он
              заслуживает. С 2017 года мы работаем с премиальными и спортивными машинами, доверяя
              результат только опыту мастеров, профессиональному свету и проверенным составам.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px bg-border sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 120} className="bg-graphite p-6 sm:pr-8">
                <span className="font-display text-xs text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-semibold uppercase text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{s.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>

          {showLink && (
            <Reveal className="mt-12">
              <Button asChild variant="line" size="pill">
                <Link to="/about">Подробнее о студии</Link>
              </Button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
