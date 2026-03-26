import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import './software-medida-landing.css';

export const metadata: Metadata = {
  title: 'Software a medida desde cero · Sin código basura · Darío Saldaño',
  description: 'Desarrollo de software de gestión a medida con metodología SDD: especificación precisa antes de escribir una línea de código.',
  openGraph: {
    title: 'Software a medida desde cero · Darío Saldaño',
    description: 'Sistemas que funcionan exactamente como tu negocio. Sin sorpresas de alcance.',
    type: 'website',
  },
};

export default function SoftwareMedidaLanding() {
  return (
    <div className="software-medida-landing">
      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-dot"></span>
            N3 · Desarrollo a Medida
          </div>
          <h1>
            Un sistema que funciona como funciona <em>tu negocio.</em>
          </h1>
          <p className="hero-sub">
            No adaptás tu operación al software. El software se adapta a tu operación. Con especificaciones cerradas antes de empezar. Sin sorpresas de alcance.
          </p>
          <div className="hero-actions">
            <Link href="/contacto?asunto=Software a Medida" className="btn-premium-p">
              Hablar de mi sistema →
            </Link>
            <Link href="#sdd" className="btn-premium-g">
              Ver metodología SDD
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="compare-card card-premium">
            <div className="compare-header">
              <div className="compare-col-head bad">Lo que tenés hoy</div>
              <div className="compare-col-head good">Lo que entregamos</div>
            </div>
            <div className="compare-rows">
              {[ 
                { bad: 'Código que solo entiende quien lo escribió', good: 'Documentación que cualquier técnico puede leer' },
                { bad: 'El alcance creció y el precio también', good: 'Especificación cerrada antes de empezar' },
                { bad: 'No sabés si está bien hasta que lo usás', good: 'Criterios de aceptación definidos antes' },
                { bad: 'Dependés del proveedor para cada cambio', good: 'El sistema y el código son tuyos. Punto.' }
              ].map((row, i) => (
                <div key={i} className="compare-row">
                  <div className="compare-cell bad">{row.bad}</div>
                  <div className="compare-cell good">{row.good}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section bg-ink-2">
        <div className="container">
          <div className="section-label">El patrón que se repite</div>
          <h2 className="section-title">
            El peor proyecto de software<br />es el que queda a medias.
          </h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="prose prose-invert">
              <p className="text-lg text-smoke-l leading-relaxed mb-6">
                Arrancás con una agencia o un freelancer con buenas intenciones. A los tres meses tenés algo que corre, pero no es lo que pediste. Cuesta el doble de lo acordado. Las pantallas están, pero los flujos críticos de tu operación quedaron a mitad.
              </p>
              <p className="text-lg text-smoke-l leading-relaxed mb-6">
                Si ese desarrollador se va perdiste todo. No el acceso. El conocimiento acumulado en esa arquitectura que nadie más puede leer.
              </p>
              <div className="metric-strip mt-12 py-8 border-t border-white/10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-oxido">60%</div>
                  <div className="text-[10px] uppercase tracking-widest text-smoke-m mt-2">Del presupuesto se pierde en retrabajo sin SDD</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">0%</div>
                  <div className="text-[10px] uppercase tracking-widest text-smoke-m mt-2">Inconsistencias al entregar con especificación</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[ 
                { title: 'La ambigüedad que se paga al final', desc: '"Que funcione" no es una especificación. El conflicto llega en la entrega, no antes.' },
                { title: 'El código que nadie más puede tocar', desc: 'Sin documentación de arquitectura, el sistema es una caja negra. Escalar implica reescribir.' },
                { title: 'El scope que se expande sin control', desc: 'Los cambios de idea en medio del desarrollo multiplican el costo sin control.' },
                { title: 'La dependencia total', desc: 'Si para cambiar un botón necesitás llamar al proveedor, no tenés un sistema propio.' }
              ].map((item, i) => (
                <div key={i} className="friccion-item">
                  <h4 className="font-bold text-ghost-w mb-2 uppercase text-xs tracking-wider">{item.title}</h4>
                  <p className="text-sm text-smoke-m">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDD Section */}
      <section id="sdd" className="section">
        <div className="container">
          <div className="section-label">La metodología</div>
          <h2 className="section-title">
            Primero se define. Después se construye. <em>Sin excepciones.</em>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-lg text-smoke-l leading-relaxed mb-6">
                <strong>SDD — Specs Driven Development</strong> es la metodología con la que trabajo. Antes de escribir una sola línea de código, producimos un documento que responde con precisión qué construir, cómo verificarlo, y cuándo está terminado.
              </p>
              <p className="text-lg text-smoke-l mb-10">
                Es el mismo sistema que apliqué en los equipos de Mercado Libre para productos con millones de usuarios.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[ 
                  { label: 'Menos retrabajo', val: '60%' },
                  { label: 'Código bajo specs', val: '70%' },
                  { label: 'Velocidad entrega', val: '+40%' },
                  { label: 'Garantía Dominio', val: '100%' }
                ].map((m, i) => (
                  <div key={i} className="card-premium p-6 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">{m.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-smoke-m">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-premium p-8">
              <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-8">Qué incluye el servicio</h4>
              <ul className="list-premium">
                {[ 
                  { n: '01', t: 'Relevamiento del negocio', d: 'Entendemos antes de diseñar. Mapeamos procesos y excepciones.' },
                  { n: '02', t: 'Especificación SDD', d: 'Documento de arquitectura con criterios de aceptación firmados.' },
                  { n: '03', t: 'Desarrollo iterativo', d: 'Revisiones quincenales. Feedback real. Avances tangibles.' },
                  { n: '04', t: 'QA contra spec', d: 'Validación estricta contra lo definido. Sin ambigüedad.' },
                  { n: '05', t: 'Entrega y traspaso', d: 'Código, arquitectura y manuales son tuyos. Soberanía total.' }
                ].map((item, i) => (
                  <li key={i}>
                    <div>
                      <h5 className="font-bold text-ghost-w text-sm uppercase mb-1">{item.t}</h5>
                      <p className="text-xs text-smoke-m leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-ink-2">
        <div className="container">
          <div className="section-label">Cómo funciona</div>
          <h2 className="section-title">Cinco etapas. Un sistema que es tuyo.</h2>
          <p className="text-smoke-l mb-12">Duración estimada: <strong>8 a 16 semanas</strong> según complejidad.</p>
          <div className="timeline-premium">
            {[ 
              { n: '01', t: 'Relevamiento', d: 'Entendemos tu operación real.', s: 'Sem. 1-2' },
              { n: '02', t: 'Especificación', d: 'Arquitectura y criterios de aceptación.', s: 'Sem. 2-3' },
              { n: '03', t: 'Desarrollo', d: 'Ciclos de dos semanas con revisiones.', s: 'Sem. 4-12' },
              { n: '04', t: 'QA contra Spec', d: 'Validación estricta contra la definición.', s: 'Sem. 12-14' },
              { n: '05', t: 'Entrega', d: 'Código, documentación y traspaso total.', s: 'Sem. 15-16' }
            ].map((step, i) => (
              <div key={i} className="timeline-step-premium">
                <div className="timeline-marker-p">
                  <div className="timeline-dot-p">{step.n}</div>
                  <div className="timeline-line-p"></div>
                </div>
                <div className="timeline-content-premium card-premium">
                  <h4>{step.t}</h4>
                  <p>{step.d}</p>
                  <span className="step-tag">{step.s}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="section">
        <div className="container">
          <div className="section-label">Fit Honesto</div>
          <h2 className="section-title">Antes de hablar, chequeá si esto es para vos.</h2>
          <div className="audiencia-grid">
            <div className="audiencia-col">
              <div className="col-head si">✓ Para quién es</div>
              <div className="audiencia-item">
                <p className="text-sm text-smoke-l">Pymes y exportadoras que necesitan sistemas propios y soberanía técnica.</p>
              </div>
              <div className="audiencia-item">
                <p className="text-sm text-smoke-l">Negocios que ya intentaron comprar software y falló por falta de especificación.</p>
              </div>
              <div className="audiencia-item">
                <p className="text-sm text-smoke-l">Empresas que escalan y necesitan que el software no sea un cuello de botella.</p>
              </div>
            </div>
            <div className="audiencia-col">
              <div className="col-head no">✗ Para quién NO es</div>
              <div className="audiencia-item">
                <p className="text-sm text-smoke-l">Quienes buscan el costo más bajo sacrificando calidad y documentación.</p>
              </div>
              <div className="audiencia-item">
                <p className="text-sm text-smoke-l">Empresas que no pueden dedicar tiempo al relevamiento inicial de su proceso.</p>
              </div>
              <div className="audiencia-item">
                <p className="text-sm text-smoke-l">Negocios que solo necesitan una web estática o un e-commerce estándar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="section bg-ink-1 border-t border-white/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Empecemos a diseñar<br />tu soberanía técnica.</h2>
              <p className="text-smoke-l text-lg mb-8">
                Un sistema a medida es un activo para tu negocio. Construilo bien desde el primer día.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <span className="text-accent">✓</span>
                  <span className="text-smoke-m text-sm uppercase tracking-widest">Código 100% tuyo</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-accent">✓</span>
                  <span className="text-smoke-m text-sm uppercase tracking-widest">Documentación de Arquitectura</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-accent">✓</span>
                  <span className="text-smoke-m text-sm uppercase tracking-widest">Garantía por Criterio de Aceptación</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <Link href="/contacto?asunto=Software a Medida" className="btn-premium-p">
                Hablar de mi sistema →
              </Link>
              <p className="text-smoke-m text-xs mt-6 opacity-60">
                Respuesta en menos de 24 horas hábiles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
