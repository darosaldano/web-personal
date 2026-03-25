import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import './agentes-ia-landing.css';

export const metadata: Metadata = {
  title: 'Agentes IA para tu negocio · De ChatGPT a sistemas que trabajan solos · Darío Saldaño',
  description: 'Construimos agentes de inteligencia artificial que atienden, procesan, responden y ejecutan tareas dentro de tu negocio sin intervención manual.',
  openGraph: {
    title: 'Agentes IA para tu negocio · Darío Saldaño',
    description: 'Sistemas que conocen tu negocio and trabajan solos, todos los días.',
    type: 'website',
  },
};

export default function AIAgentsLanding() {
  return (
    <div className="agentes-ia-landing">
      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-dot"></span>
            N2 · Agentes de Inteligencia Artificial
          </div>
          <h1>
            Tu proceso más costoso funciona solo <em>mientras dormís.</em>
          </h1>
          <p className="hero-sub">
            Diseñamos e implementamos agentes de IA entrenados en tu operación. No herramientas genéricas: sistemas que conocen tu negocio y trabajan solos.
          </p>
          <div className="hero-actions">
            <Link href="/contacto?asunto=Agentes IA" className="btn-premium-p">
              Mapear mi proceso
            </Link>
            <Link href="#que-es" className="btn-premium-g">
              ¿Qué es un agente IA?
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="flow-diagram">
            <div className="section-label" style={{ fontSize: '0.6rem', marginBottom: '1.5rem' }}>Flujo de un Agente</div>
            <div className="flow-nodes">
              <div className="flow-node">
                <span className="node-icon">📥</span>
                <div>
                  <div className="node-title">Entrada</div>
                  <div className="node-desc">Mail, WhatsApp, CRM</div>
                </div>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-node" style={{ border: '1px solid var(--accent)' }}>
                <span className="node-icon">🤖</span>
                <div>
                  <div className="node-title">Agente IA</div>
                  <div className="node-desc">Interpreta y Decide</div>
                </div>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-node">
                <span className="node-icon">✅</span>
                <div>
                  <div className="node-title">Resultado</div>
                  <div className="node-desc">Tarea Resuelta 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="que-es" className="section bg-ink-2">
        <div className="container">
          <div className="section-label">El problema real</div>
          <h2 className="section-title">
            ChatGPT ya lo probaste.<br />No es eso lo que necesitás.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-smoke-l leading-relaxed mb-6">
                Casi todos los negocios ya "usan IA". Tienen acceso a ChatGPT, tal vez algún empleado redacta mails o resume documentos. El problema es que nadie conectó la IA a lo que realmente importa en tu negocio: los procesos que consumen tiempo y energía cada día.
              </p>
              <div className="space-y-4">
                {[ 
                  { title: 'Pedidos en bandeja de entrada', desc: 'Exportadoras que procesan 40 pedidos/semana a mano.', icon: '📋' },
                  { title: 'Datos fragmentados', desc: 'Información en planillas, papel y sistemas sin cruzar.', icon: '🗃️' },
                  { title: 'Atención demorada', desc: 'WhatsApp sin respuesta fuera de horario comercial.', icon: '💬' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-ghost-w text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-xs text-smoke-m">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card card-premium">
              <p className="text-accent font-mono text-xs mb-6 uppercase tracking-widest">El impacto real</p>
              <h3 className="text-2xl font-bold mb-6 text-ghost-w">Conectar la IA al proceso es la clave.</h3>
              <p className="text-smoke-l mb-8">No busques transformar todo. Buscamos el 30% del día que es puro trabajo repetitivo.</p>
              <div className="metric-strip">
                <div className="metric-item">
                  <div className="num">60%</div>
                  <div className="label">Menos retrabajo</div>
                </div>
                <div className="metric-item">
                  <div className="num">40%</div>
                  <div className="label">Más velocidad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="section">
        <div className="container">
          <div className="section-label">Casos de Uso</div>
          <h2 className="section-title">Qué procesos resuelve un agente</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Casos mapping... */}
            {[ 
              { rubro: 'Bodega / Exportadora', title: 'Pedidos entrantes', desc: 'Verifica stock, genera remito y responde al cliente.', icon: '🍷', result: '4h vs 3 días' },
              { rubro: 'Agroindustria', title: 'Partes de producción', desc: 'Consolida datos de turnos y genera reportes automáticos.', icon: '🏭', result: '2h manuales/turno eliminadas' },
              { rubro: 'Hotel / Turismo', title: 'Reservas WhatsApp', desc: 'Atiende, cotiza y confirma reservas 24/7.', icon: '🏨', result: 'Conversiones nocturnas ↑' },
              { rubro: 'Distribuidora', title: 'Soporte y Reclamos', desc: 'Categoriza, prioriza y resuelve casos estándar.', icon: '📦', result: '80% resolución auto' },
              { rubro: 'Salud', title: 'Gestión de Turnos', desc: 'Confirma, recuerda y reasigna cancelaciones.', icon: '🏥', result: '30% menos ausentismo' },
              { rubro: 'Cualquier Rubro', title: 'Reportes Automáticos', desc: 'Genera y distribuye informes sin pedido manual.', icon: '📊', result: '0h carga manual' }
            ].map((item, i) => (
              <div key={i} className="glass-card card-premium flex flex-col h-full">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="text-[10px] text-accent font-mono uppercase tracking-widest mb-2">{item.rubro}</div>
                <h4 className="font-bold text-lg mb-3 text-ghost-w">{item.title}</h4>
                <p className="text-sm text-smoke-m mb-6 flex-grow">{item.desc}</p>
                <div className="pt-4 border-t border-white/5 text-[10px] font-mono text-accent">
                  RESULTADO: {item.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="section bg-ink-2">
        <div className="container">
          <div className="section-label">Para quién es</div>
          <h2 className="section-title">Transparencia antes de empezar</h2>
          <div className="audiencia-grid">
            <div className="audiencia-col">
              <div className="col-head si">✓ Para quién es</div>
              <div className="audiencia-item">
                <p className="text-sm text-smoke-l">Negocios con tareas repetitivas de alta frecuencia (pedidos, datos, reportes).</p>
              </div>
              <div className="audiencia-item">
                <p className="text-sm text-smoke-l">Pymes y Agroindustrias que quieren escalar sin aumentar headcount.</p>
              </div>
              <div className="audiencia-item">
                <p className="text-sm text-smoke-l">Equipos que gastan 20%+ de su tiempo en procesos mecánicos.</p>
              </div>
            </div>
            <div className="audiencia-col">
              <div className="col-head no">✗ Para quién NO es</div>
              <div className="audiencia-item">
                <p className="text-sm text-smoke-l">Procesos que requieren criterio situacional humano único en cada paso.</p>
              </div>
              <div className="audiencia-item">
                <p className="text-sm text-smoke-l">Negocios sin ningún proceso definido. Antes de automatizar, hay que estructurar.</p>
              </div>
              <div className="audiencia-item">
                <p className="text-sm text-smoke-l">Empresas que buscan "magia" instantánea sin etapa de mapeo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Table */}
      <section className="section">
        <div className="container">
          <div className="section-label">Diferencial</div>
          <h2 className="section-title">No todos los agentes son iguales</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th className="text-xs uppercase tracking-widest text-smoke-m">Característica</th>
                  <th className="text-xs uppercase tracking-widest text-smoke-m">Implementación Estándar</th>
                  <th className="text-xs uppercase tracking-widest text-accent">Metodología SDD</th>
                </tr>
              </thead>
              <tbody>
                {[ 
                  { label: 'Definición', normal: 'Se ajusta durante el desarrollo.', premium: 'Criterios de aceptación antes del código.' },
                  { label: 'Garantía', normal: 'Basada en "buena voluntad".', premium: '100% casos de dominio garantizados.' },
                  { label: 'Integración', normal: 'Procesos se adaptan a la herramienta.', premium: 'El agente se adapta a tu sistema.' }
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="font-mono text-[10px] text-smoke-m">{row.label}</td>
                    <td className="text-sm text-smoke-l">{row.normal}</td>
                    <td className="text-sm col-premium">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="section bg-ink-1 border-t border-white/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Mapeemos tu primer agente hoy.</h2>
              <p className="text-smoke-l text-lg mb-8">
                El mapeo inicial es de una semana. En 60 días podés tener tu proceso más crítico funcionando solo.
              </p>
              <div className="flex gap-4">
                <div className="glass-card p-4 flex-grow text-center">
                  <div className="text-accent font-bold text-xl">4-8 sem</div>
                  <div className="text-[10px] text-smoke-m uppercase">Tiempo de entrega</div>
                </div>
                <div className="glass-card p-4 flex-grow text-center">
                  <div className="text-accent font-bold text-xl">100%</div>
                  <div className="text-[10px] text-smoke-m uppercase">Garantía de Dominio</div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <Link href="/contacto?asunto=Agentes IA" className="btn-premium-p py-6 px-12 text-xl">
                Solicitar Mapeo Inicial →
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
