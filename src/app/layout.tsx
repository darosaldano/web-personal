import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Darío Saldaño — Consultor Estratégico en Tecnología",
    template: "%s | Darío Saldaño",
  },
  description:
    "Ayudo a dueños de empresas y líderes IT en LATAM a construir equipos de software que entregan resultados reales, sin el caos que normalmente los frena. SDD + IA + Liderazgo con Propósito.",
  keywords: [
    "consultor IT Argentina",
    "Specs Driven Development",
    "consultoría tecnológica LATAM",
    "liderazgo equipos IT",
    "CTO fractional LATAM",
    "transformación digital pymes",
    "SDD metodología software",
    "consultor tecnológico Chilecito",
    "cómo escalar equipo de desarrollo",
    "IA para proyectos de software",
  ],
  authors: [{ name: "Darío Saldaño" }],
  creator: "Darío Saldaño",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://dariosaldano.com.ar",
    siteName: "Darío Saldaño",
    title: "Darío Saldaño — Consultor Estratégico en Tecnología",
    description:
      "Consultoría estratégica en tecnología y liderazgo con propósito. SDD + IA + Equipos de alto rendimiento.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darío Saldaño — Consultor Estratégico en Tecnología",
    description:
      "Consultoría estratégica en tecnología y liderazgo con propósito desde Chilecito, Argentina.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
