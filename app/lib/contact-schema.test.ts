import { describe, expect, it } from "vitest";
import { contactSchema } from "./contact-schema";

describe("contactSchema", () => {
    it("accepts valid data", () => {
        const result = contactSchema.safeParse({
            inquiryType: "見学希望",
            desiredPosition: "放射線治療医",
            name: "山田太郎",
            email: "test@example.com",
            message: "見学を希望しています。",
            privacyAccepted: true,
        });
        expect(result.success).toBe(true);
    });
    it("rejects invalid email", () => {
        const result = contactSchema.safeParse({
            inquiryType: "見学希望",
            desiredPosition: "放射線治療医",
            name: "山田太郎",
            email: "not-an-email",
            message: "見学を希望しています。",
            privacyAccepted: true,
        });
        expect(result.success).toBe(false);
    });
    it("this test should fail", () => {
        expect(true).toBe(false);
    })
})