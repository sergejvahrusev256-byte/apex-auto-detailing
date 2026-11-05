import { createFileRoute } from "@tanstack/react-router";
import gallery1 from "@/assets/gallery-1.jpg";
import { PageHero } from "@/components/site/PageHero";
import { GallerySection } from "@/components/site/GallerySection";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Галерея работ — APEX DETAILING" },
      {
        name: "description",
        content:
          "Фотографии автомобилей после полировки, нанесения керамики и химчистки салона в студии APEX DETAILING.",
      },
      { property: "og:title", content: "Галерея работ APEX DETAILING" },
      {
        property: "og:description",
        content: "Результаты нашей работы: суперкары, спорткары и премиальные автомобили.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Галерея"
        title="Наши работы"
        text="Каждый автомобиль — отдельная история. Здесь собраны проекты, которыми мы особенно гордимся."
        image={gallery1}
      />
      <GallerySection showHeading={false} />
      <CtaBand />
    </>
  );
}
