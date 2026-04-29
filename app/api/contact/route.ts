import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/config";

let _resend: Resend | null = null;

function getResend(): Resend {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY is not set in environment variables.");
    }
    _resend = new Resend(key);
  }
  return _resend;
}

export async function POST(req: NextRequest) {
  try {
    const { prenom, nom, email, sujet, message } = await req.json();

    if (!prenom || !nom || !email || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const resend = getResend();

    await resend.emails.send({
      from: `${siteConfig.name} <noreply@trendora-market.com>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `[Contact] ${sujet ?? "Sans sujet"} — ${prenom} ${nom}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#7c3aed">Nouveau message — ${siteConfig.name}</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#6b7280;width:100px">Nom</td><td style="padding:6px 0;font-weight:600">${prenom} ${nom}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Sujet</td><td style="padding:6px 0">${sujet ?? "—"}</td></tr>
          </table>
          <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb"/>
          <p style="white-space:pre-wrap;color:#111827">${message}</p>
          <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb"/>
          <p style="color:#9ca3af;font-size:12px">Envoyé depuis le formulaire de contact de ${siteConfig.name}</p>
        </div>
      `,
    });

    // Email de confirmation à l'expéditeur
    await resend.emails.send({
      from: `${siteConfig.name} <noreply@trendora-market.com>`,
      to: email,
      subject: `Votre message a bien été reçu — ${siteConfig.name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#7c3aed">Bonjour ${prenom},</h2>
          <p>Nous avons bien reçu votre message et vous répondrons sous 24h ouvrées.</p>
          <blockquote style="border-left:3px solid #7c3aed;margin:16px 0;padding:8px 16px;color:#6b7280;font-style:italic">
            ${message.slice(0, 300)}${message.length > 300 ? "…" : ""}
          </blockquote>
          <p>À bientôt,<br/><strong>${siteConfig.name}</strong></p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb"/>
          <p style="color:#9ca3af;font-size:12px">${siteConfig.email}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
