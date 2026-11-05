import { createFileRoute } from "@tanstack/react-router";
import servicePaint from "@/assets/service-paint.jpg";
import { PageHero } from "@/components/site/PageHero";
import { ServicesSection } from "@/components/site/ServicesSection";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Услуги и цены — APEX DETAILING" },
      {
        name: "description",
        content:
          "Полировка кузова, керамическое покрытие, химчистка салона и комплексный детейлинг. Цены и сроки работ в студии APEX DETAILING.",
      },
      { property: "og:title", content: "Услуги детейлинга — APEX DETAILING" },
      {
        property: "og:description",
        content: "Полировка, керамика, химчистка салона и комплексный детейлинг премиум-класса.",
      },
    ],
  }),
  component: ServicesPage,
});

const STEPS = [
  { title: "Осмотр и диагностика", text: "Замеряем толщину ЛКП, фиксируем дефекты под инспекционным светом и согласуем программу работ." },
  { title: "Подготовка", text: "Двухфазная мойка, деконтаминация, очистка битума и металлических вкраплений, глина." },
  { title: "Основные работы", text: "Полировка, нанесение покрытий или химчистка — строго по технологии производителя составов." },
  { title: "Контроль и выдача", text: "Финальная проверка под разными источниками света, рекомендации по уходу и гарантийный сертификат." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Услуги"
        title="Безупречность — это процесс"
        text="Каждая услуга — отдельная технология, отточенная на сотнях автомобилей. Выберите направление или доверьтесь нам в комплексе."
        image={servicePaint}
      />
      <ServicesSection showHeading={false} />

      <section className="bg-graphite py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="Как мы работаем"
            title={
              <>
                Четыре этапа <span className="text-primary">к идеалу</span>
              </>
            }
            className="mb-16"
          />
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="bg-graphite p-8 md:p-10">
                <span className="font-display text-5xl font-bold text-primary/90">0{i + 1}</span>
                <h3 className="mt-8 font-display text-lg font-semibold uppercase text-foreground">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
