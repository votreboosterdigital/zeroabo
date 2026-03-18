import { NextRequest, NextResponse } from "next/server";

// In-memory storage for collected emails (resets on server restart)
const collectedEmails: { email: string; date: string }[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body as { email?: string };

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Email invalide" },
        { status: 400 }
      );
    }

    const sanitized = email.trim().toLowerCase();
    collectedEmails.push({ email: sanitized, date: new Date().toISOString() });

    console.log(`[subscribe] Nouvel email collecté : ${sanitized}`);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
