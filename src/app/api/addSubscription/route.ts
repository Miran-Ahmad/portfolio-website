import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextResponse } from "next/server";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_API_SERVER!, // e.g. us1
});

type RequestBody = {
  email?: string;
};

export async function POST(request: Request) {
  let body: RequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { email } = body;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const res = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        status: "subscribed",
      },
    );

    return NextResponse.json({ res }, { status: 200 });
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "response" in error) {
      const mcError = error as {
        response?: {
          body?: {
            title?: string;
            detail?: string;
            status?: number;
          };
          status?: number;
        };
      };

      // ✅ Already subscribed
      if (mcError.response?.body?.title === "Member Exists") {
        return NextResponse.json(
          {
            message: "You are already subscribed to our newsletter.",
          },
          { status: 200 }, // or 409 if you prefer strict REST
        );
      }

      return NextResponse.json(
        {
          error:
            mcError.response?.body?.detail ?? "Mailchimp subscription failed",
        },
        { status: mcError.response?.status ?? 500 },
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
