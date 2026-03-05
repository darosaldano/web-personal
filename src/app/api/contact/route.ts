import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// POST /api/contact — Procesar formulario de contacto
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message, company } = body;

        // Validación
        if (!name || !email || !message) {
            return Response.json(
                { error: 'Campos requeridos: name, email, message' },
                { status: 400 }
            );
        }

        // Validación de email básica
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return Response.json(
                { error: 'Email inválido' },
                { status: 400 }
            );
        }

        // Enviar email vía Resend
        const { error } = await resend.emails.send({
            from: 'Web Personal <onboarding@resend.dev>',
            to: 'daro.saldano@gmail.com',
            replyTo: email,
            subject: `Nuevo contacto web: ${name}${company ? ` — ${company}` : ''}`,
            html: `
                <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0D1117; color: #F2EDE8; padding: 32px; border-radius: 12px;">
                    <h2 style="color: #1ABFBF; margin-top: 0;">📧 Nuevo mensaje de contacto</h2>
                    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
                        <tr><td style="padding: 8px 0; color: #8E9A9E;">Nombre</td><td style="padding: 8px 0; color: #F2EDE8; font-weight: 600;">${name}</td></tr>
                        <tr><td style="padding: 8px 0; color: #8E9A9E;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1ABFBF;">${email}</a></td></tr>
                        ${company ? `<tr><td style="padding: 8px 0; color: #8E9A9E;">Empresa</td><td style="padding: 8px 0; color: #F2EDE8;">${company}</td></tr>` : ''}
                    </table>
                    <div style="background: #161B22; padding: 20px; border-radius: 8px; border-left: 3px solid #1ABFBF; margin-top: 16px;">
                        <p style="color: #8E9A9E; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Mensaje</p>
                        <p style="color: #F2EDE8; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                    <p style="color: #5E7A8A; font-size: 12px; margin-top: 24px; text-align: center;">
                        Enviado desde dariosaldano.com.ar · ${new Date().toLocaleDateString('es-AR', { dateStyle: 'long' })}
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Error Resend:', error);
            return Response.json(
                { error: 'Error al enviar el email' },
                { status: 500 }
            );
        }

        // También enviar a webhook si está configurado
        const n8nWebhookUrl = process.env.CONTACT_WEBHOOK_URL;
        if (n8nWebhookUrl) {
            try {
                await fetch(n8nWebhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name,
                        email,
                        company: company || '',
                        message,
                        timestamp: new Date().toISOString(),
                        source: 'dariosaldano.com.ar',
                    }),
                });
            } catch (webhookError) {
                console.error('Error al enviar a webhook:', webhookError);
            }
        }

        return Response.json({
            message: 'Mensaje recibido exitosamente. Te responderé a la brevedad.',
        });
    } catch (error) {
        return Response.json(
            { error: 'Error al procesar el mensaje', details: String(error) },
            { status: 500 }
        );
    }
}
