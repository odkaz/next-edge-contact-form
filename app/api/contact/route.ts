import { contactSchema } from "@/app/schemas/contact-schema";
import { contactService } from "@/app/services/contact.service";

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
  const res = await contactService.sendContactEmail(data);
  console.log(res);
  return Response.json({
    success: true,
  });
}
