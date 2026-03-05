import { NextRequest } from 'next/server';

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

        // Opción 1: Enviar a webhook de n8n (si está configurado)
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
                // No falla la respuesta al usuario, el webhook es opcional
            }
        }

        // Opción 2: Email via SMTP/Resend (configurar cuando se tenga el servicio)
        // TODO: Integrar con Resend o servicio de email
        // Por ahora, loguea el contacto
        console.log('📧 Nuevo contacto:', {
            name,
            email,
            company,
            message: message.substring(0, 100) + '...',
            timestamp: new Date().toISOString(),
        });

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
