export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pb-16 pt-40 md:pb-24">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="bg-hero-overlay absolute inset-0" />
      <div className="bg-fade-bottom absolute inset-0" />
      <div className="container-x relative">
        <p className="eyebrow animate-rise flex items-center gap-4">
          <span className="h-px w-10 bg-primary" />
          {eyebrow}
        </p>
        <h1
          className="animate-rise mt-6 max-w-4xl font-display text-4xl font-bold uppercase leading-[1.05] text-foreground md:text-7xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        <p
          className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg"
          style={{ animationDelay: "240ms" }}
        >
          {text}
        </p>
      </div>
    </section>
  );
}
