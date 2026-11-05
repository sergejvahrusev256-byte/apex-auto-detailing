import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Укажите имя (минимум 2 символа)" })
    .max(60, { message: "Имя не длиннее 60 символов" }),
  phone: z
    .string()
    .trim()
    .max(25, { message: "Слишком длинный номер" })
    .refine((v) => /^[+\d\s()-]+$/.test(v), { message: "Номер может содержать только цифры, +, -, ( )" })
    .refine((v) => {
      const digits = v.replace(/\D/g, "").length;
      return digits >= 10 && digits <= 15;
    }, { message: "Введите корректный номер телефона" }),
  message: z
    .string()
    .trim()
    .max(1000, { message: "Сообщение не длиннее 1000 символов" })
    .optional()
    .or(z.literal("")),
});

export type ContactValues = z.infer<typeof contactSchema>;
