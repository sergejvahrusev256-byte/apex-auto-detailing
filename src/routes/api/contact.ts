
import { createFileRoute } from "@tanstack/react-router";
import { contactSchema } from "@/lib/contact-schema";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;

        try {
          body = await request.json();
        } catch {
          return Response.json(
            { error: "Некорректный запрос" },
            { status: 400 },
          );
        }

        const result = contactSchema.safeParse(body);

        if (!result.success) {
          return Response.json(
            { error: "Проверьте правильность заполнения формы" },
            { status: 400 },
          );
        }

        const env = (globalThis as any).process?.env;

        const token = env?.TELEGRAM_BOT_TOKEN;
        const chatId = env?.TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
          return Response.json(
            { error: "Сервер не настроен" },
            { status: 500 },
          );
        }

        const { name, phone, message } = result.data;

        const text =
          `🚗 Новая заявка APEX DETAILING\n\n` +
          `👤 Имя: ${name}\n` +
          `📞 Телефон: ${phone}\n` +
          `💬 Сообщение: ${message || "Не указано"}`;

        try {
          const telegramResponse = await fetch(
            `https://api.telegram.org/bot${token}/sendMessage`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id: chatId,
                text,
              }),
            },
          );

          const telegramResult = await telegramResponse.json();

          if (!telegramResponse.ok || !telegramResult.ok) {
            return Response.json(
              { error: "Не удалось отправить заявку" },
              { status: 502 },
            );
          }

          return Response.json({ success: true });
        } catch {
          return Response.json(
            { error: "Ошибка соединения с Telegram" },
            { status: 502 },
          );
        }
      },
    },
  },
});
