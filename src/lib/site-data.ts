import servicePaint from "@/assets/service-paint.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceFull from "@/assets/service-full.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import aboutStudio from "@/assets/about-studio.jpg";

export const NAV_LINKS = [
  { to: "/services", label: "Услуги" },
  { to: "/about", label: "О студии" },
  { to: "/gallery", label: "Галерея" },
  { to: "/contacts", label: "Контакты" },
] as const;

export const CONTACTS = {
  phone: "+7 (495) 123-45-67",
  phoneHref: "tel:+74951234567",
  email: "hello@apex-detailing.ru",
  address: "Москва, ул. Автозаводская, 18, стр. 2",
  hours: [
    { days: "Пн — Пт", time: "09:00 — 21:00" },
    { days: "Сб — Вс", time: "10:00 — 19:00" },
  ],
};

export const SERVICES = [
  {
    id: "paint",
    num: "01",
    title: "Полировка кузова",
    subtitle: "Восстановление ЛКП",
    description:
      "Многоэтапная абразивная полировка удаляет голограммы, царапины и окисление. Возвращаем лаку глубину цвета и зеркальный блеск.",
    price: "от 25 000 ₽",
    duration: "2–3 дня",
    image: servicePaint,
  },
  {
    id: "ceramic",
    num: "02",
    title: "Керамическое покрытие",
    subtitle: "Защита до 5 лет",
    description:
      "Профессиональная керамика 9H создаёт твёрдый гидрофобный слой, который защищает от реагентов, ультрафиолета и мелких повреждений.",
    price: "от 45 000 ₽",
    duration: "2–4 дня",
    image: serviceCeramic,
  },
  {
    id: "interior",
    num: "03",
    title: "Химчистка салона",
    subtitle: "Интерьер как новый",
    description:
      "Глубокая очистка и уход за кожей, алькантарой, пластиком и тканью. Удаляем пятна и запахи, наносим защитные составы.",
    price: "от 18 000 ₽",
    duration: "1–2 дня",
    image: serviceInterior,
  },
  {
    id: "full",
    num: "04",
    title: "Комплексный детейлинг",
    subtitle: "Максимальный результат",
    description:
      "Полная программа для кузова, салона, дисков и моторного отсека. Автомобиль покидает студию в состоянии лучше заводского.",
    price: "от 85 000 ₽",
    duration: "4–6 дней",
    image: serviceFull,
  },
];

export const GALLERY = [
  { src: gallery1, alt: "Графитовый суперкар после полировки, вид сбоку", span: "md:col-span-2" },
  { src: gallery2, alt: "Чёрный кованый диск с оранжевым суппортом после мойки", span: "md:row-span-2" },
  { src: serviceCeramic, alt: "Гидрофобный эффект керамического покрытия", span: "" },
  { src: gallery3, alt: "Тёмно-зелёное купе с зеркальным лаком в студии", span: "md:row-span-2" },
  { src: servicePaint, alt: "Мастер выполняет полировку капота", span: "" },
  { src: gallery4, alt: "Оранжевый суперкар после комплексного детейлинга", span: "md:col-span-2" },
  { src: serviceInterior, alt: "Кожаный салон после химчистки", span: "" },
];

export const ABOUT_IMAGE = aboutStudio;

export const STATS = [
  { value: "1 200+", label: "автомобилей" },
  { value: "9", label: "лет опыта" },
  { value: "5 лет", label: "гарантия на керамику" },
  { value: "100%", label: "ручная работа" },
];

export const VALUES = [
  {
    title: "Качество",
    text: "Работаем только с премиальными составами Gyeon, Koch-Chemie и Rupes. Каждый этап проходит контроль под профессиональным светом.",
  },
  {
    title: "Точность",
    text: "Замеряем толщину ЛКП на каждой детали и подбираем режим полировки индивидуально — без риска и компромиссов.",
  },
  {
    title: "Внимание к деталям",
    text: "Швы, эмблемы, проёмы дверей, решётки радиатора — мы доводим до идеала даже то, что обычно никто не замечает.",
  },
];
