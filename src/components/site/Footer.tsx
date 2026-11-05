import { Link } from "@tanstack/react-router";
import { Instagram, Send, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACTS, NAV_LINKS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="container-x py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Студия премиального детейлинга в Москве. Полировка, керамика и уход за автомобилями,
              к которым относятся с особым вниманием.
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Send, label: "Telegram" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Навигация</p>
            <ul className="mt-6 space-y-3">
              <li>
                <Link to="/" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  Главная
                </Link>
              </li>
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow">Контакты</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              <li>
                <a href={CONTACTS.phoneHref} className="transition-colors hover:text-primary">
                  {CONTACTS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACTS.email}`} className="transition-colors hover:text-primary">
                  {CONTACTS.email}
                </a>
              </li>
              <li>{CONTACTS.address}</li>
              {CONTACTS.hours.map((h) => (
                <li key={h.days} className="text-muted-foreground">
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} APEX DETAILING. Все права защищены.</p>
          <p className="tracking-[0.3em] uppercase">Совершенство в каждой детали</p>
        </div>
      </div>
    </footer>
  );
}
