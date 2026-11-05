import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-3", className)} aria-label="APEX DETAILING — на главную">
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <path d="M16 3 L30 29 H22.5 L16 16.5 L9.5 29 H2 Z" className="fill-primary transition-transform" />
        <path d="M16 21 L19 27 H13 Z" className="fill-foreground" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.12em] text-foreground">APEX</span>
        <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.5em] text-muted-foreground">
          DETAILING
        </span>
      </span>
    </Link>
  );
}
