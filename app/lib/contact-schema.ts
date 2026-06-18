import { z } from "zod";

export const contactSchema = z.object({
  inquiryType: z.string().min(1),
  desiredPosition: z.string().min(1),

  name: z.string().min(1),
  furigana: z.string().optional(),

  email: z.email(),
  phone: z.string().optional(),

  affiliation: z.string().optional(),
  currentStatus: z.string().optional(),

  message: z.string().min(10),

  privacyAccepted: z.literal(true),
});