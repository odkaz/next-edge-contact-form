import { contactSchema } from "@/app/lib/contact-schema";
import { resend } from "@/app/lib/resend";

export async function POST(request: Request) {
  const body = await request.json();

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      {
        success: false,
        errors: result.error.flatten(),
      },
      { status: 400 },
    );
  }

  const data = result.data;
  console.log(data);
  const res = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL!,
    to: process.env.CONTACT_TO_EMAIL!,
    subject: "New contact form submission",
    text: JSON.stringify(data, null, 2),
  });

  console.log(res);
  return Response.json({
    success: true,
  });
}
