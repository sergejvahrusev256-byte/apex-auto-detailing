import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-y border-border">
      <img
        src={heroCar}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-right opacity-40"
      />
      <div className="bg-hero-overlay absolute inset-0" />
      <div className="container-x relative py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Бесплатный осмотр</p>
          <h2 className="mt-6 font-display text-3xl font-semibold uppercase leading-[1.1] text-foreground md:text-5xl">
            Ваш автомобиль заслуживает <span className="text-primary">большего</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Приезжайте на диагностику ЛКП — мы оценим состояние кузова и предложим оптимальную
            программу ухода.
          </p>
          <Button asChild variant="hero" size="xl" className="mt-10">
            <Link to="/contacts" hash="booking">
              Записаться
              <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
