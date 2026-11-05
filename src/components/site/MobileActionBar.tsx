import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { CONTACTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/** Sticky call / book bar for phones, shown after the first screen. */
export function MobileActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-3 backdrop-blur-xl transition-transform duration-500 lg:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
        <a
          href={CONTACTS.phoneHref}
          className="flex h-12 items-center justify-center gap-2 border border-border px-5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground active:scale-[0.97]"
          aria-label={`Позвонить ${CONTACTS.phone}`}
        >
          <Phone className="h-4 w-4 text-primary" />
          Позвонить
        </a>
        <Link
          to="/contacts"
          hash="booking"
          className="flex h-12 items-center justify-center bg-primary text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground active:scale-[0.97]"
        >
          Записаться
        </Link>
      </div>
    </div>
  );
}
