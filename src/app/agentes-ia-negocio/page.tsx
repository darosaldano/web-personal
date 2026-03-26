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
            N2 · Asistente Digital Automático
          </div>
          <h1>
            Tu proceso más costoso, <em>resuelto sin supervisión tuya.</em>
          </h1>
          <p className="hero-sub">
            Diseñamos e implementamos asistentes digitales entrenados en tu operación. No "bots" genéricos que responden mal, sino sistemas que conectan tus herramientas y ejecutan tareas repetitivas por vos.
          </p>
          <div className="hero-actions">
            <Link href="/contacto?asunto=Asistente Digital" className="btn-premium-p">
              Delegar un proceso →
            </Link>
            <Link href="#que-es" className="btn-premium-g">
              ¿Por qué no es ChatGPT?
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
            ChatGPT ya lo probaste.<br />Y te diste cuenta de que no sirve para correr un negocio.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-smoke-l leading-relaxed mb-6">
                Todos hablan de IA. Pero si alguna vez intentaste usar un "bot" para atender clientes o procesar datos, seguro terminaste pidiendo disculpas por errores absurdos o perdiendo más tiempo corrigiéndolo que haciéndolo a mano. <strong>Las herramientas genéricas no sirven para operaciones específicas.</strong>
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
              <p className="text-accent font-mono text-xs mb-6 uppercase tracking-widest">Control Absoluto</p>
              <h3 className="text-2xl font-bold mb-4 text-ghost-w">No cruzás los dedos. Lo auditás todo.</h3>
              <p className="text-smoke-l mb-6">
                El miedo más grande a delegar en un software es perder el control. Por eso construimos tableros de comando donde ves todo lo que el Asistente Digital hace, paso a paso.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-center">
                  <span className="text-accent">✓</span>
                  <span className="text-smoke-m text-sm">Registro de cada decisión tomada</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-accent">✓</span>
                  <span className="text-smoke-m text-sm">Alertas humanas si algo sale del patrón</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-accent">✓</span>
                  <span className="text-smoke-m text-sm">Botón de pausa inmediato</span>
                </li>
              </ul>
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
          <h2 className="section-title">Garantías de Ejecución</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th className="text-xs uppercase tracking-widest text-smoke-m">Característica</th>
                  <th className="text-xs uppercase tracking-widest text-smoke-m">Suscripciones Genéricas</th>
                  <th className="text-xs uppercase tracking-widest text-accent">Asistente Propio Analizado</th>
                </tr>
              </thead>
              <tbody>
                {[ 
                  { label: 'Propiedad', normal: 'Alquilás la capacidad mensual.', premium: 'El sistema es tuyo, en tu infraestructura.' },
                  { label: 'Integración', normal: 'Conectas a lo que permite la API genérica.', premium: 'Conectamos directo a tu ERP/CRM local.' },
                  { label: 'Privacidad', normal: 'Entrenás modelos de terceros con tus datos.', premium: 'Tus datos nunca salen de tu entorno protegido.' }
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
              <h2 className="section-title mb-6">Empecemos por el proceso<br />más repetitivo que tengas.</h2>
              <p className="text-smoke-l text-lg mb-8">
                Desarrollo desde USD $1,500 (único pago).
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-4 items-center">
                  <span className="text-accent">✓</span>
                  <span className="text-smoke-m text-sm">Entregado en 3 a 5 semanas</span>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-accent">✓</span>
                  <span className="text-smoke-m text-sm">Garantía de funcionamiento por escrito</span>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-accent">✓</span>
                  <span className="text-smoke-m text-sm">Sistema alojado bajo tu titularidad</span>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <Link href="/contacto?asunto=Asistente Digital" className="btn-premium-p">
                Agendar llamada de diagnóstico →
              </Link>
              <p className="text-smoke-m text-xs mt-6 opacity-60">
                Llamada de 20 minutos. Si la IA no sirve para tu problema, te lo digo directo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
