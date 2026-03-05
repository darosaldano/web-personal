'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
    { label: 'Inicio', href: '/#hero' },
    { label: 'Sobre Mí', href: '/#sobre-mi' },
    { label: 'Servicios', href: '/#servicios' },
    { label: 'SDD ★', href: '/#sdd', special: true },
    { label: 'Proyectos', href: '/#proyectos' },
    { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-inner">
                    <Link href="/" className="nav-logo">
                        Darío<span>.</span>
                    </Link>
                    <div className="nav-links">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`nav-link${item.special ? ' special' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <Link href="/contacto" className="nav-cta">
                        Hablemos →
                    </Link>
                    <button
                        className="hamburger"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Abrir menú"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
                <button
                    className="mobile-close"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Cerrar menú"
                >
                    ✕
                </button>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`nav-link${item.special ? ' special' : ''}`}
                        onClick={() => setMobileOpen(false)}
                    >
                        {item.label}
                    </Link>
                ))}
                <Link
                    href="/contacto"
                    className="nav-cta"
                    onClick={() => setMobileOpen(false)}
                >
                    Hablemos →
                </Link>
            </div>
        </>
    );
}
