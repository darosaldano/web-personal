import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Hablemos sobre cómo puedo ayudarte a escalar tu equipo de software y transformar tu operación tecnológica.',
};

export default function ContactPage() {
    return (
        <section className="contact-section" style={{ minHeight: '80vh' }}>
            <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
                <div className="section-label">Contacto</div>
                <h1 className="section-title" style={{ marginBottom: '.6rem' }}>
                    Hablemos de tu <span>proyecto</span>
                </h1>
                <p className="section-subtitle">
                    Contame sobre tu desafío. Te respondo personalmente dentro de las 24hs.
                </p>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>¿Por qué hablar conmigo?</h3>
                        <p>
                            No soy una agencia genérica. Soy un consultor que entiende los problemas
                            reales de los equipos IT porque los vivió. Cada conversación empieza con
                            escuchar tu situación — sin pitch de ventas.
                        </p>

                        <div className="contact-detail">
                            <div className="icon">📍</div>
                            <span>Chilecito, La Rioja, Argentina</span>
                        </div>
                        <div className="contact-detail">
                            <div className="icon">✉️</div>
                            <span>contacto@dariosaldano.com.ar</span>
                        </div>
                        <div className="contact-detail">
                            <div className="icon">🌐</div>
                            <span>Trabajo con clientes en toda LATAM</span>
                        </div>

                        <div className="info-box" style={{ marginTop: '2rem' }}>
                            <p>
                                <strong>Respuesta garantizada:</strong> Cada mensaje lo leo personalmente.
                                Si puedo ayudarte, te propongo una primera conversación gratuita de 30 minutos
                                para entender tu situación.
                            </p>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
