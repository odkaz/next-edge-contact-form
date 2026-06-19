import { contactSchema } from "@/app/lib/contact-schema";

export async function POST(request: Request) {
  const body = await request.json();

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      {
        success: false,
        errors: result.error.flatten(),
      },
      { status: 400 }
    );
  }

  const data = result.data;
  console.log(data);

  return Response.json({
    success: true,
  });
}