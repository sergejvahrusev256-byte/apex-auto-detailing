import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { CONTACTS, NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className={cn("container-x flex items-center justify-between transition-all duration-500", scrolled ? "h-16" : "h-20 md:h-24")}>
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative text-xs font-semibold uppercase tracking-[0.2em] text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "!text-foreground" }}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-px w-full origin-left bg-primary transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={CONTACTS.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary xl:flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            {CONTACTS.phone}
          </a>
          <Button asChild variant="hero" size="pill" className="hidden sm:inline-flex">
            <Link to="/contacts" hash="booking">
              Записаться
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center border border-border text-foreground lg:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu — outside header so backdrop-filter doesn't trap fixed positioning */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-background transition-all duration-500 lg:hidden",
          scrolled ? "top-16" : "top-20 md:top-24",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav className="container-x flex h-full flex-col justify-between py-10" aria-label="Мобильная навигация">
          <ul className="space-y-2">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.to}
                className={cn("transition-all duration-500", open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              >
                <Link
                  to={link.to}
                  className="flex items-baseline gap-4 border-b border-border py-5 font-display text-3xl font-semibold text-foreground"
                  activeProps={{ className: "!text-primary" }}
                >
                  <span className="text-xs font-sans text-primary">0{i + 1}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <a href={CONTACTS.phoneHref} className="flex items-center gap-3 text-lg font-semibold text-foreground">
              <Phone className="h-5 w-5 text-primary" />
              {CONTACTS.phone}
            </a>
            <Button asChild variant="hero" size="xl" className="w-full">
              <Link to="/contacts" hash="booking">
                Записаться
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
