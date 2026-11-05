import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  className,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  className?: string;
  aside?: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-8 md:flex-row md:items-end md:justify-between", className)}>
      <Reveal className="max-w-3xl">
        <p className="eyebrow flex items-center gap-4">
          <span className="h-px w-10 bg-primary" />
          {eyebrow}
        </p>
        <h2 className="mt-6 font-display text-3xl font-semibold uppercase leading-[1.1] text-foreground md:text-5xl">
          {title}
        </h2>
        {text && <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{text}</p>}
      </Reveal>
      {aside && <Reveal delay={150}>{aside}</Reveal>}
    </div>
  );
}
