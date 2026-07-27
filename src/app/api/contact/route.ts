import { NextResponse } from "next/server";

import { validateContact } from "@/lib/contact";

export const runtime = "nodejs";

/**
 * Receives quote requests from the contact form.
 *
 * TODO: WIRE UP ACTUAL DELIVERY BEFORE GOING LIVE.
 * Right now this route validates the submission and returns success — nothing
 * is emailed, stored or pushed to a CRM, so enquiries are NOT reaching anyone.
 * To finish it, add a transactional email provider (e.g. Resend, Postmark or
 * SendGrid) plus a CRM/webhook if required:
 *
 *   1. Add the provider SDK and set the API key in the environment
 *      (e.g. `RESEND_API_KEY`) — never commit credentials.
 *   2. Send the validated `values` below to info@one-roofing.com, and
 *      optionally send the customer an acknowledgement.
 *   3. Add spam protection (hCaptcha/Turnstile or a rate limiter keyed on IP)
 *      before this endpoint is publicly reachable.
 *   4. Return a 502-style error when delivery fails so the form can tell the
 *      customer to phone instead of silently swallowing the enquiry.
 */
export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not read the submitted form." },
      { status: 400 },
    );
  }

  const { values, errors, valid } = validateContact(payload);

  if (!valid) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please correct the highlighted fields and try again.",
        errors,
      },
      { status: 422 },
    );
  }

  // Until delivery is wired up, log the enquiry so it is at least visible in
  // server logs rather than disappearing entirely.
  console.info("[contact] validated enquiry received", {
    name: values.name,
    city: values.city,
    service: values.service,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      ok: true,
      message:
        "Thanks — your request has been received. We will be in touch shortly.",
    },
    { status: 200 },
  );
}

export async function GET() {
  return NextResponse.json(
    { ok: false, message: "Method not allowed. Submit the contact form with POST." },
    { status: 405, headers: { Allow: "POST" } },
  );
}
