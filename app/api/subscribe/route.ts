import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const BREVO_LIST_ID = 6;
const FROM_EMAIL = "votreboosterdigital@outlook.com";
const FROM_NAME = "Mehdi — zeroabo.fr";

// ─── Ajoute le contact dans la liste Brevo ────────────────────────────────────

async function addContactToBrevo(email: string): Promise<void> {
  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      listIds: [BREVO_LIST_ID],
      updateEnabled: true, // met à jour si le contact existe déjà
      attributes: { SOURCE: "zeroabo.fr" },
    }),
  });

  if (!res.ok && res.status !== 204) {
    const err = await res.text();
    throw new Error(`Brevo contacts error ${res.status}: ${err}`);
  }
}

// ─── Envoie l'email de bienvenue avec la checklist ────────────────────────────

async function sendChecklistEmail(email: string): Promise<void> {
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email }],
      subject: "Ta checklist : 10 abonnements à remplacer cette semaine",
      htmlContent: checklistHtml(),
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Brevo smtp error ${res.status}: ${err}`);
  }
}

// ─── Template email ───────────────────────────────────────────────────────────

function checklistHtml(): string {
  const tools = [
    { replace: "Microsoft 365 / Google Workspace", with: "ONLYOFFICE", saving: 200 },
    { replace: "Adobe Acrobat Pro", with: "PDF-XChange Editor", saving: 250 },
    { replace: "Adobe Premiere Pro", with: "Movavi Video Suite", saving: 300 },
    { replace: "Norton / McAfee", with: "Bitdefender Premium Security", saving: 150 },
    { replace: "MindMeister", with: "XMind Pro", saving: 100 },
    { replace: "Adobe InDesign", with: "Affinity Publisher 2", saving: 360 },
    { replace: "Adobe Illustrator", with: "Affinity Designer 2", saving: 360 },
    { replace: "Procreate / Adobe Fresco", with: "Clip Studio Paint", saving: 400 },
    { replace: "Streamlabs Prime", with: "vMix", saving: 180 },
    { replace: "Motion.app / Fantastical", with: "FocusPlan", saving: 120 },
  ];

  const totalSavings = tools.reduce((sum, t) => sum + t.saving, 0);

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#020817;font-family:Inter,system-ui,sans-serif;color:#e2e8f0;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">

    <div style="margin-bottom:28px;">
      <span style="font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#38bdf8;">zeroabo.fr</span>
    </div>

    <h1 style="margin:0 0 8px;font-size:22px;font-weight:800;color:#f8fafc;line-height:1.3;">
      Ta checklist est là 👇
    </h1>
    <p style="margin:0 0 28px;font-size:15px;color:#94a3b8;line-height:1.6;">
      Les <strong style="color:#e2e8f0;">10 abonnements les plus faciles à remplacer</strong> — avec leur alternative en licence perpétuelle et les économies estimées.
    </p>

    <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
      <thead>
        <tr style="background:#0d1526;">
          <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#38bdf8;border-bottom:1px solid rgba(255,255,255,0.08);">#</th>
          <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#38bdf8;border-bottom:1px solid rgba(255,255,255,0.08);">Tu remplaces</th>
          <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#38bdf8;border-bottom:1px solid rgba(255,255,255,0.08);">Par</th>
          <th style="padding:10px 12px;text-align:right;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#38bdf8;border-bottom:1px solid rgba(255,255,255,0.08);">Économie</th>
        </tr>
      </thead>
      <tbody>
        ${tools.map((t, i) => `
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 12px;font-size:13px;color:#64748b;">${i + 1}</td>
          <td style="padding:10px 12px;font-size:13px;color:#94a3b8;">${t.replace}</td>
          <td style="padding:10px 12px;font-size:13px;font-weight:600;color:#e2e8f0;">${t.with}</td>
          <td style="padding:10px 12px;font-size:13px;font-weight:700;color:#10b981;text-align:right;">~${t.saving} €/an</td>
        </tr>`).join("")}
        <tr style="background:#0d1526;">
          <td colspan="3" style="padding:12px;font-size:13px;font-weight:700;color:#e2e8f0;">Total estimé</td>
          <td style="padding:12px;font-size:15px;font-weight:800;color:#10b981;text-align:right;">${totalSavings} €/an</td>
        </tr>
      </tbody>
    </table>

    <div style="background:#0d1526;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px 24px;margin-bottom:28px;">
      <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#38bdf8;text-transform:uppercase;letter-spacing:0.1em;">Comment ça marche</p>
      <p style="margin:0 0 8px;font-size:14px;color:#cbd5e1;">1. Choisis 1 ou 2 abonnements dans cette liste</p>
      <p style="margin:0 0 8px;font-size:14px;color:#cbd5e1;">2. Vérifie l'alternative sur <a href="https://zeroabo.fr" style="color:#38bdf8;">zeroabo.fr</a></p>
      <p style="margin:0;font-size:14px;color:#cbd5e1;">3. Résilie et libère ton budget — pour toujours</p>
    </div>

    <a href="https://zeroabo.fr" style="display:inline-block;background:#38bdf8;color:#020817;font-weight:700;font-size:14px;padding:12px 24px;border-radius:8px;text-decoration:none;margin-bottom:28px;">
      Voir toutes les alternatives →
    </a>

    <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
      Tu reçois cet email parce que tu as demandé la checklist sur zeroabo.fr.<br>
      Pour ne plus recevoir nos emails, réponds simplement "désinscription" à ce message.
    </p>

  </div>
</body>
</html>`;
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body as { email?: string };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Email invalide" }, { status: 400 });
    }

    const sanitized = email.trim().toLowerCase();

    // Brevo : ajout contact + envoi email en parallèle
    await Promise.all([
      addContactToBrevo(sanitized),
      sendChecklistEmail(sanitized),
    ]);

    // Succès — pas de log de l'email (données personnelles)

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[subscribe] Erreur Brevo:", error);
    return NextResponse.json({ success: false, error: "Erreur serveur" }, { status: 500 });
  }
}
