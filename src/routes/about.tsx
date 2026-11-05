import { createFileRoute } from "@tanstack/react-router";
import aboutStudio from "@/assets/about-studio.jpg";
import { PageHero } from "@/components/site/PageHero";
import { AboutSection } from "@/components/site/AboutSection";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О студии — APEX DETAILING" },
      {
        name: "description",
        content:
          "APEX DETAILING — студия премиального детейлинга в Москве с 2017 года. Качество, точность и внимание к каждой детали.",
      },
      { property: "og:title", content: "О студии APEX DETAILING" },
      {
        property: "og:description",
        content: "Качество, точность и внимание к деталям — философия студии APEX DETAILING.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О студии"
        title="Страсть к идеальному блеску"
        text="Мы начинали как команда из трёх мастеров, влюблённых в автомобили. Сегодня APEX — студия, которой доверяют владельцы самых требовательных машин."
        image={aboutStudio}
      />
      <AboutSection showLink={false} />
      <CtaBand />
    </>
  );
}
