import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div>
                        <div className="footer-brand">
                            Darío Saldaño<span>.</span>
                        </div>
                        <div className="footer-tagline">
                            Consultoría Estratégica en Tecnología · Chilecito, Argentina
                        </div>
                    </div>
                    <div className="footer-links">
                        <Link href="/#sobre-mi" className="footer-link">Sobre Mí</Link>
                        <Link href="/#servicios" className="footer-link">Servicios</Link>
                        <Link href="/#sdd" className="footer-link">SDD</Link>
                        <Link href="/blog" className="footer-link">Blog</Link>
                        <Link href="/contacto" className="footer-link">Contacto</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Darío Saldaño. Todos los derechos reservados.</span>
                    <span>Desde Chilecito, La Rioja · Para el mundo</span>
                </div>
            </div>
        </footer>
    );
}
