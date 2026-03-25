'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
    { label: 'Inicio', href: '/#hero' },
    { label: 'Sobre Mí', href: '/#sobre-mi' },
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Blueprint ⚡', href: '/blueprint-automatizacion', special: true },
    { label: 'SDD ★', href: '/sdd-ingenieria-alto-escala', special: true },
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
                        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="20" height="20" rx="4" fill="#1ABFBF" opacity="0.9" />
                            <rect x="26" y="2" width="20" height="20" rx="4" fill="#2ABDD4" opacity="0.5" />
                            <rect x="2" y="26" width="20" height="20" rx="4" fill="#2ABDD4" opacity="0.5" />
                            <rect x="26" y="26" width="20" height="20" rx="4" fill="#1A3A7A" opacity="0.9" />
                            <line x1="14" y1="14" x2="34" y2="34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            <circle cx="34" cy="34" r="3" fill="white" />
                        </svg>
                        <div className="nav-logo-text">
                            <span className="nav-logo-name">Darío Saldaño</span>
                            <span className="nav-logo-title">Strategic Tech Consulting</span>
                        </div>
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
