import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'bad request' }, { status: 400 });
  }

  const name = String(payload.name ?? '').trim().slice(0, 200);
  const org = String(payload.org ?? '').trim().slice(0, 200);
  const email = String(payload.email ?? '').trim().slice(0, 200);
  const subject = String(payload.subject ?? '').trim().slice(0, 200);
  const message = String(payload.message ?? '').trim().slice(0, 5000);
  // Honeypot-free minimal validation; tighten with a rate limiter before launch.
  if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: 'invalid' }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!key || !to || !from) {
    // Not configured yet: log and accept, so the site works before Resend is wired.
    console.warn('[contact] Resend not configured — message not delivered:', { name, email, subject });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const { Resend } = await import('resend');
  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `[natais.ca] ${subject || 'Message'} — ${name}`,
    text: `Nom : ${name}\nOrganisation : ${org || '—'}\nCourriel : ${email}\nSujet : ${subject}\n\n${message}\n`,
  });

  if (error) {
    console.error('[contact] resend error', error);
    return NextResponse.json({ error: 'send failed' }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}
