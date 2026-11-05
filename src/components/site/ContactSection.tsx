import { useState, type FormEvent } from "react";
import { Clock, MapPin, Phone, Mail, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { CONTACTS } from "@/lib/site-data";
import { contactSchema } from "@/lib/contact-schema";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

const fieldClass =
  "peer w-full border-0 border-b border-input bg-transparent px-0 pb-3 pt-7 text-base text-foreground outline-none transition-colors placeholder:text-transparent focus:border-primary";
const labelClass =
  "pointer-events-none absolute left-0 top-7 text-sm text-muted-foreground transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.25em] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.25em]";

export function ContactSection() {
  const [values, setValues] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const errs: Errors = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof Errors;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setValues({ name: "", phone: "", message: "" });
      toast.success("Заявка отправлена", {
        description: "Менеджер свяжется с вами в течение 15 минут.",
      });
    }, 700);
  };

  const info = [
    { Icon: Phone, label: "Телефон", value: CONTACTS.phone, href: CONTACTS.phoneHref },
    { Icon: Mail, label: "E-mail", value: CONTACTS.email, href: `mailto:${CONTACTS.email}` },
    { Icon: MapPin, label: "Адрес", value: CONTACTS.address },
  ];

  return (
    <section id="booking" className="relative scroll-mt-20 py-24 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-4">
              <span className="h-px w-10 bg-primary" />
              Контакты
            </p>
            <h2 className="mt-6 font-display text-3xl font-semibold uppercase leading-[1.1] text-foreground md:text-5xl">
              Запишитесь <br />
              <span className="text-primary">на детейлинг</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Оставьте заявку — мы перезвоним, ответим на вопросы и подберём удобное время. Осмотр
              автомобиля и консультация бесплатны.
            </p>
          </Reveal>

          <ul className="mt-12 space-y-px bg-border">
            {info.map(({ Icon, label, value, href }, i) => (
              <Reveal as="li" key={label} delay={i * 80} className="flex items-start gap-5 bg-background py-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="mt-1 block text-lg font-semibold text-foreground transition-colors hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
                  )}
                </div>
              </Reveal>
            ))}
            <Reveal as="li" delay={240} className="flex items-start gap-5 bg-background py-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border text-primary">
                <Clock className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Часы работы</p>
                {CONTACTS.hours.map((h) => (
                  <p key={h.days} className="mt-1 flex justify-between gap-6 text-lg font-semibold text-foreground sm:justify-start">
                    <span className="w-24 text-muted-foreground">{h.days}</span>
                    {h.time}
                  </p>
                ))}
              </div>
            </Reveal>
          </ul>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <div className="relative border border-border bg-graphite p-8 md:p-14">
            <span className="absolute -right-px -top-px h-16 w-16 border-r-2 border-t-2 border-primary" aria-hidden="true" />
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center">
                <span className="flex h-16 w-16 items-center justify-center bg-primary text-primary-foreground shadow-glow">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="mt-8 font-display text-2xl font-semibold uppercase text-foreground md:text-3xl">
                  Спасибо за заявку!
                </h3>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Наш менеджер свяжется с вами в течение 15 минут в рабочее время, чтобы уточнить
                  детали и подобрать удобную дату.
                </p>
                <Button variant="line" size="pill" className="mt-10" onClick={() => setSent(false)}>
                  Отправить ещё одну
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-10">
                <div>
                  <h3 className="font-display text-xl font-semibold uppercase text-foreground md:text-2xl">
                    Онлайн-заявка
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">Ответим в течение 15 минут</p>
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                  <Field error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      maxLength={60}
                      placeholder="Имя"
                      value={values.name}
                      onChange={update("name")}
                      className={cn(fieldClass, errors.name && "border-destructive")}
                      aria-invalid={!!errors.name}
                    />
                    <label htmlFor="name" className={labelClass}>
                      Ваше имя
                    </label>
                  </Field>
                  <Field error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={25}
                      placeholder="Телефон"
                      value={values.phone}
                      onChange={update("phone")}
                      className={cn(fieldClass, errors.phone && "border-destructive")}
                      aria-invalid={!!errors.phone}
                    />
                    <label htmlFor="phone" className={labelClass}>
                      Телефон
                    </label>
                  </Field>
                </div>

                <Field error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    placeholder="Сообщение"
                    value={values.message}
                    onChange={update("message")}
                    className={cn(fieldClass, "resize-none", errors.message && "border-destructive")}
                  />
                  <label htmlFor="message" className={labelClass}>
                    Марка автомобиля и интересующая услуга
                  </label>
                </Field>

                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                  </p>
                  <Button type="submit" variant="hero" size="xl" disabled={loading} className="group">
                    {loading ? "Отправляем…" : "Отправить заявку"}
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ children, error }: { children: React.ReactNode; error?: string | undefined }) {
  return (
    <div>
      <div className="relative">{children}</div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
