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
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem', lineHeight: 1.6, fontStyle: 'italic' }}>
            ¿Ya te pasó pagar por un sistema que quedó a medias o que nadie terminó usando? Entonces sabés exactamente por qué este servicio funciona diferente.
          </p>
          <h1>
            Un sistema que funciona como funciona <em>tu negocio — especificado, acordado y entregado.</em>
          </h1>
          <p className="hero-sub">
            Antes de escribir una sola línea de código, acordamos exactamente qué va a hacer el sistema y qué no. Nada de sorpresas a mitad del proyecto. Nada de &ldquo;eso no estaba en el alcance&rdquo;.
          </p>
          <div className="hero-actions">
            <Link href="/contacto?asunto=Software a Medida" className="btn-premium-p">
              Hablar de mi sistema →
            </Link>
            <Link href="#sdd" className="btn-premium-g">
              Ver cómo trabajamos
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
              <div style={{ background: 'rgba(194,137,42,0.07)', padding: '1.25rem 1.5rem', borderLeft: '3px solid rgba(194,137,42,0.5)', borderRadius: '4px', marginBottom: '1.5rem' }}>
                <p className="text-smoke-l" style={{ fontSize: '0.95rem', lineHeight: 1.75 }}>
                  Si antes te prometieron un sistema a medida y quedó a medias, o pagaste por algo que nadie usó, o el programador desapareció — entiendo por qué esto genera desconfianza. <strong>Por eso trabajo diferente: todo queda por escrito antes de empezar, los avances son visibles cada 2 semanas, y si algo no cierra, lo sabemos a tiempo.</strong>
                </p>
              </div>
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
                <strong>Cómo funciona:</strong> antes de escribir una sola línea de código, producimos un documento que responde con precisión qué construir, cómo verificarlo, y cuándo está terminado. Eso se firma. Después empezamos.
              </p>
              <p className="text-lg text-smoke-l mb-10">
                Es el mismo sistema que apliqué en equipos técnicos de alta exigencia durante más de 16 años.
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
                  { n: '01', t: 'Entendemos tu negocio', d: '2 a 3 conversaciones para mapear cómo funciona tu operación real antes de proponer nada.' },
                  { n: '02', t: 'Acordamos en papel qué va a hacer el sistema', d: 'Antes de empezar, definimos exactamente qué construir. Firmamos ese acuerdo. Es la base de todo lo que sigue.' },
                  { n: '03', t: 'Construimos y te mostramos avances cada 2 semanas', d: 'Ciclos cortos con algo visible. No esperamos 3 meses para mostrártelo.' },
                  { n: '04', t: 'Probamos juntos hasta que funcione', d: 'Validación práctica contra lo que acordamos. Sin ambigüedad.' },
                  { n: '05', t: 'Entrega y traspaso total', d: 'El sistema está diseñado para que vos puedas operarlo. Tenés acceso completo a tus datos, tu historial y tu configuración.' }
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
          <h2 className="section-title">Cinco etapas. Un sistema que funciona como acordamos.</h2>
          <p className="text-smoke-l mb-4">Duración estimada: <strong>8 a 16 semanas</strong> según complejidad.</p>
          <p className="text-smoke-l mb-12" style={{ fontSize: '0.9rem', opacity: 0.7 }}>El pago está dividido en etapas: pagás cuando recibís algo, no antes. Si en algún momento querés pausar o revisar el rumbo, podemos hacerlo.</p>
          <div className="timeline-premium">
            {[
              { n: '01', t: 'Entendemos tu negocio', d: '2 a 3 conversaciones para mapear cómo funciona tu operación antes de proponer nada.', s: 'Sem. 1-2' },
              { n: '02', t: 'Acordamos qué va a hacer el sistema', d: 'Documento de qué construir, cómo verificarlo, y cuándo está listo. Esto se firma antes de empezar.', s: 'Sem. 2-3' },
              { n: '03', t: 'Construcción y avances cada 2 semanas', d: 'Ciclos cortos con algo visible. Feedback real en cada parada.', s: 'Sem. 4-12' },
              { n: '04', t: 'Probamos juntos', d: 'Validación práctica contra lo acordado. Si algo no cierra, lo vemos a tiempo.', s: 'Sem. 12-14' },
              { n: '05', t: 'Entrega completa', d: 'El sistema, acceso a tus datos y documentación. Operación autónoma desde el primer día.', s: 'Sem. 15-16' }
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

          {/* Nueva sección: antes de contratar */}
          <div className="card-premium" style={{ padding: '2rem', marginBottom: '4rem' }}>
            <h3 className="section-title" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Antes de construir algo a medida, vemos si ya existe.</h3>
            <p className="text-smoke-l" style={{ lineHeight: 1.75 }}>
              Antes de arrancar cualquier desarrollo, analizamos si hay un sistema ya existente que resuelva tu problema a mejor costo. Si lo hay, te lo recomiendo — aunque eso signifique no hacer nada a medida. <strong>El software a medida tiene sentido cuando los sistemas genéricos no terminan de cubrir cómo funciona tu operación.</strong> Si no es tu caso, lo sabemos en la primera conversación.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Empecemos con una primera<br />conversación sin costo.</h2>
              <p className="text-smoke-l text-lg mb-8">
                Un sistema a medida es un activo para tu negocio. Construílo bien desde el primer día.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <span className="text-accent">✓</span>
                  <span className="text-smoke-m text-sm">Contrato escrito desde el día uno</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-accent">✓</span>
                  <span className="text-smoke-m text-sm">Pagos por etapa: pagás cuando recibís algo, no antes</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-accent">✓</span>
                  <span className="text-smoke-m text-sm">60 días de correcciones post-entrega sin costo adicional</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <Link href="/contacto?asunto=Software a Medida" className="btn-premium-p">
                Hablar de mi sistema →
              </Link>
              <p className="text-smoke-m text-xs mt-4 opacity-60">
                Primera reunión sin costo. Sin presupuesto escondido.
              </p>
              <p className="text-smoke-m text-xs mt-3 opacity-50">
                ¿No es el momento? Escribíme igual. Acordamos cuándo arrancar — cuando tu operación lo permita.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}