import { describe, expect, it } from "vitest";
import { contactSchema } from "./contact-schema";

describe("contactSchema", () => {
  it("accepts a valid Russian phone with name", () => {
    expect(contactSchema.safeParse({ name: "Алексей", phone: "+7 (999) 123-45-67", message: "" }).success).toBe(true);
  });

  it("rejects a phone with fewer than 10 digits", () => {
    expect(contactSchema.safeParse({ name: "Алексей", phone: "12345", message: "" }).success).toBe(false);
  });

  it("rejects a phone with letters", () => {
    expect(contactSchema.safeParse({ name: "Алексей", phone: "+7 999 abc 45 67", message: "" }).success).toBe(false);
  });

  it("rejects an empty name", () => {
    expect(contactSchema.safeParse({ name: " ", phone: "+79991234567", message: "" }).success).toBe(false);
  });
});
