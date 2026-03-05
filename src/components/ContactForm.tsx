'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            company: formData.get('company') as string,
            message: formData.get('message') as string,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
                form.reset();
            } else {
                const result = await res.json();
                setErrorMessage(result.error || 'Error al enviar el mensaje.');
                setStatus('error');
            }
        } catch {
            setErrorMessage('Error de conexión. Intentá de nuevo.');
            setStatus('error');
        }
    }

    return (
        <form onSubmit={handleSubmit} id="contact-form">
            <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre completo</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Tu nombre"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="tu@email.com"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="company" className="form-label">Empresa (opcional)</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-input"
                    placeholder="Tu empresa"
                />
            </div>
            <div className="form-group">
                <label htmlFor="message" className="form-label">¿En qué puedo ayudarte?</label>
                <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Contame sobre tu proyecto o desafío..."
                    required
                />
            </div>
            <button
                type="submit"
                className="btn btn-p"
                disabled={status === 'sending'}
                style={{ width: '100%', justifyContent: 'center' }}
            >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje →'}
            </button>

            {status === 'success' && (
                <div className="form-status success">
                    ✓ Mensaje enviado correctamente. Te responderé a la brevedad.
                </div>
            )}
            {status === 'error' && (
                <div className="form-status error">
                    ✗ {errorMessage}
                </div>
            )}
        </form>
    );
}
