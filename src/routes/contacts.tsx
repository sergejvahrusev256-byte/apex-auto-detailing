import { createFileRoute } from "@tanstack/react-router";
import gallery4 from "@/assets/gallery-4.jpg";
import { PageHero } from "@/components/site/PageHero";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты и запись — APEX DETAILING" },
      {
        name: "description",
        content:
          "Запишитесь на детейлинг в студию APEX DETAILING. Телефон, адрес, часы работы и онлайн-заявка.",
      },
      { property: "og:title", content: "Контакты APEX DETAILING" },
      {
        property: "og:description",
        content: "Телефон, адрес и часы работы студии. Оставьте заявку онлайн.",
      },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Ждём вас в студии"
        text="Позвоните, напишите или оставьте заявку — подберём удобное время и ответим на любые вопросы."
        image={gallery4}
      />
      <ContactSection />
    </>
  );
}
