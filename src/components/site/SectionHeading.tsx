import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  text,
  className,
  aside,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  text?: string;
  className?: string;
  aside?: ReactNode;
}) {
  return (
    <div className={cn("grid gap-10 md:grid-cols-12 md:items-end", className)}>
      <Reveal className="md:col-span-8">
        <p className="eyebrow flex items-center gap-4">
          {index && <span className="font-display text-[0.65rem] tracking-[0.2em] text-foreground/40">({index})</span>}
          <span className="h-px w-10 bg-primary" />
          {eyebrow}
        </p>
        <h2 className="mt-7 font-display text-[1.9rem] font-medium uppercase leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[3.4rem]">
          {title}
        </h2>
      </Reveal>
      {(text || aside) && (
        <Reveal delay={150} className="flex flex-col items-start gap-8 md:col-span-4 md:pb-2">
          {text && <p className="text-[0.95rem] leading-[1.8] text-muted-foreground">{text}</p>}
          {aside}
        </Reveal>
      )}
    </div>
  );
}

/** Secondary tone for the second half of a heading — keeps orange for true accents only. */
export function Soft({ children }: { children: ReactNode }) {
  return <span className="font-light text-foreground/45">{children}</span>;
}
