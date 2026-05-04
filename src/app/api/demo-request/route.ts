import { NextRequest, NextResponse } from "next/server";

interface DemoRequestBody {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  screens?: string;
  message?: string;
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 500);
}

export async function POST(request: NextRequest) {
  let body: DemoRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const company = sanitize(body.company);
  const phone = sanitize(body.phone);
  const screens = sanitize(body.screens);
  const message = sanitize(body.message);

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 422 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 422 });
  }

  // Placeholder: forward to CRM / email service
  const payload = { name, email, company, phone, screens, message, timestamp: new Date().toISOString() };
  console.log("Demo request received:", payload);

  return NextResponse.json(
    { success: true, message: "Demo request received. We'll be in touch within 1 business day." },
    { status: 201 }
  );
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
