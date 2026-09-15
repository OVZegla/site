import { NextResponse } from "next/server";
import { getPrinter, printers } from "@/lib/data/printers";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

interface QuotePayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  printer: string;
  projectType: string;
  volume: string;
  timeline: string;
  message: string;
  consent: boolean;
  /** Champ piège : rempli uniquement par les robots. */
  website?: string;
}

function readString(source: Record<string, unknown>, key: string, max = 2000): string {
  const value = source[key];
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validate(payload: Record<string, unknown>): {
  data?: QuotePayload;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  const data: QuotePayload = {
    name: readString(payload, "name", 120),
    company: readString(payload, "company", 160),
    email: readString(payload, "email", 200),
    phone: readString(payload, "phone", 40),
    printer: readString(payload, "printer", 60),
    projectType: readString(payload, "projectType", 120),
    volume: readString(payload, "volume", 120),
    timeline: readString(payload, "timeline", 120),
    message: readString(payload, "message", 4000),
    consent: payload.consent === true,
    website: readString(payload, "website", 200),
  };

  if (data.name.length < 2) errors.name = "Indiquez votre nom.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
    errors.email = "Indiquez une adresse e-mail valide.";
  }
  if (data.phone.replace(/\D/g, "").length < 9) {
    errors.phone = "Indiquez un numéro de téléphone joignable.";
  }
  if (data.printer && data.printer !== "indecis" && !getPrinter(data.printer)) {
    errors.printer = "Ce modèle n'existe pas.";
  }
  if (!data.consent) {
    errors.consent = "Merci d'accepter que nous vous recontactions.";
  }

  return Object.keys(errors).length > 0 ? { errors } : { data, errors };
}

async function notify(data: QuotePayload): Promise<void> {
  const recipient = process.env.QUOTE_NOTIFICATION_EMAIL ?? siteConfig.email;
  const printer = getPrinter(data.printer);

  const body = [
    `Nouvelle demande de devis — ${siteConfig.name}`,
    "",
    `Nom             : ${data.name}`,
    `Société         : ${data.company || "—"}`,
    `E-mail          : ${data.email}`,
    `Téléphone       : ${data.phone}`,
    `Modèle visé     : ${printer?.name ?? "Non déterminé / à conseiller"}`,
    `Type de projet  : ${data.projectType || "—"}`,
    `Volume estimé   : ${data.volume || "—"}`,
    `Échéance        : ${data.timeline || "—"}`,
    "",
    "Message :",
    data.message || "—",
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Sans fournisseur d'e-mail configuré, la demande est tracée dans les logs
    // de la plateforme d'hébergement. Renseigner RESEND_API_KEY pour l'envoi réel.
    console.info(`[devis] à transmettre à ${recipient}\n${body}`);
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Site ${siteConfig.name} <no-reply@${new URL(siteConfig.url).hostname}>`,
      to: [recipient],
      reply_to: data.email,
      subject: `Devis ${printer?.name ?? "à qualifier"} — ${data.name}${
        data.company ? ` (${data.company})` : ""
      }`,
      text: body,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend a répondu ${response.status}`);
  }
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (typeof payload !== "object" || payload === null) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { data, errors } = validate(payload as Record<string, unknown>);
  if (!data) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // Honeypot : on répond succès pour ne pas renseigner le robot.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    await notify(data);
  } catch (error) {
    console.error("[devis] envoi de la notification échoué", error);
    return NextResponse.json(
      {
        error: `Impossible d'enregistrer votre demande. Contactez-nous directement au ${siteConfig.phone}.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, models: printers.length });
}
