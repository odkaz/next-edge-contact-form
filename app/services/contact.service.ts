import { ContactForm } from "@/app/schemas/contact-schema";
import { resend } from "@/app/lib/resend";
export const contactService = {
  sendContactEmail: async (data: ContactForm) => {
    const res = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      subject: "New contact form submission",
      text: JSON.stringify(data, null, 2),
    });

    console.log(res);
  },
};
