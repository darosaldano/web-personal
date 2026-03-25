import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import './ia-equipos-landing.css';

export const metadata: Metadata = {
  title: 'Implementación de IA en equipos · Del entusiasmo al hábito productivo · Darío Saldaño',
  description: 'Lideramos la adopción de IA generativa en tu equipo: herramientas, flujos de trabajo, cambio de mentalidad. De 0% a uso cotidiano con resultados medibles.',
  openGraph: {
    title: 'Implementación de IA en equipos · Darío Saldaño',
    description: 'Lideramos la adopción de IA generativa en tu equipo con resultados medibles.',
    type: 'website',
  },
};

export default function IATeamsLanding() {
  return (
    <div className="ia-equipos-landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">
            <span className="hero-dot"></span>
            N6 · Adopción de IA Generativa
          </div>
          <h1>
            Tu equipo sabe que existe la IA. Todavía no <em>trabaja con ella.</em>
          </h1>
          <p className="hero-sub">
            Diseñamos e implementamos el proceso de adopción real: herramientas, flujos, mentalidad. No un taller de ChatGPT. Un cambio que se sostiene.
          </p>
          <div className="hero-cta-group">
            <Link href="#contacto" className="btn-primary">
              Evaluar mi equipo
            </Link>
            <Link href="#proceso" className="btn-ghost">
              Ver el proceso
            </Link>
          </div>
        </div>
      </section>

      {/* Stat Band */}
      <div className="stat-band">
        <div className="container">
          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Adopción sostenida</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">40%</div>
              <div className="stat-label">Menos tiempo de entrega</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">60%</div>
              <div className="stat-label">Menos retrabajo</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">30d</div>
              <div className="stat-label">Acompañamiento post</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <section className="section bg-ink-2">
        <div className="container">
          <div className="section-label">El problema real</div>
          <h2 className="section-title">
            La IA no falla por falta de herramientas.<br />Falla por falta de sistema.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-smoke-l leading-relaxed mb-6">
                Hay un patrón que se repite con una regularidad casi cómica. Un líder o un gerente escucha hablar de ChatGPT, de Copilot, de Gemini, y decide que su equipo tiene que empezar a usar IA. Compran las licencias, organizan una presentación interna, quizás contratan un taller de medio día. Durante dos semanas, hay entusiasmo genuino. Después, silencio.
              </p>
              <p className="text-lg text-smoke-l leading-relaxed mb-8">
                El problema no fue la herramienta. Fue que nadie definió qué significa "usar bien" la IA en ese contexto específico. Sin eso, la IA queda como un juguete caro. El ROI es cero y la frustración es alta.
              </p>
              <div className="space-y-6">
                <div className="border-l-2 border-oxido pl-6">
                  <h4 className="font-bold text-ghost-w mb-1">El estándar de calidad no existe</h4>
                  <p className="text-smoke-m text-sm">Sin criterios claros, el código o el texto generado por IA entra al flujo sin revisión sistemática. El resultado es ruido, no velocidad.</p>
                </div>
                <div className="border-l-2 border-oxido pl-6">
                  <h4 className="font-bold text-ghost-w mb-1">Cada uno la usa diferente —o no la usa</h4>
                  <p className="text-smoke-m text-sm">La adopción desigual crea inconsistencias dentro del mismo equipo. La brecha se agranda.</p>
                </div>
                <div className="border-l-2 border-oxido pl-6">
                  <h4 className="font-bold text-ghost-w mb-1">No hay mapa de qué tareas tiene sentido automatizar</h4>
                  <p className="text-smoke-m text-sm">La gente intenta usar IA para todo o para nada. Sin un diagnóstico previo, se pierden los quick wins.</p>
                </div>
              </div>
            </div>
            <div className="glass-card bg-ink-3">
              <p className="text-accent text-xs tracking-widest uppercase mb-8">Ciclo de abandono silencioso</p>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-content">
                    <h4>Semana 1 — Entusiasmo</h4>
                    <p className="text-sm text-smoke-m">El equipo prueba la herramienta. Hay sorpresa y curiosidad genuinas.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot opacity-50"></div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-content">
                    <h4>Semana 2–3 — Dispersión</h4>
                    <p className="text-sm text-smoke-m">Sin guía de uso, cada persona improvisa. Los resultados son inconsistentes.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot opacity-20"></div>
                  </div>
                  <div className="timeline-content">
                    <h4>Mes 2 — Abandono silencioso</h4>
                    <p className="text-sm text-smoke-m">El uso cae sin que nadie lo anuncie. La licencia sigue activa. El ROI es invisible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Section */}
      <section className="section">
        <div className="container">
          <div className="section-label">La propuesta</div>
          <h2 className="section-title">
            No implementamos herramientas.<br />Implementamos arquitectura de trabajo.
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-smoke-l text-lg leading-relaxed mb-6">
                En 2025, el equipo de desarrollo que lideré en Mercado Libre pasó de usar IA como herramienta de consulta ocasional a generar el 70% de su código bajo criterios de calidad definidos, con una reducción del 40% en los tiempos de entrega.
              </p>
              <p className="text-smoke-l text-lg leading-relaxed mb-8">
                Primero definimos qué significa "usar bien" la IA en ese contexto. Luego entrenamos al equipo en ese estándar específico. Luego medimos. Ese proceso es exactamente lo que implementamos.
              </p>
              <Link href="#contacto" className="btn-primary">
                Evaluar mi equipo →
              </Link>
            </div>
            <div className="glass-card border-accent/20 p-8">
              <p className="text-accent text-xs tracking-widest uppercase mb-6">Caso real · Mercado Libre · 2024–2025</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="metric">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-xs text-smoke-m uppercase mt-1">Adopción sostenida</div>
                </div>
                <div className="metric">
                  <div className="text-3xl font-bold text-accent">70%</div>
                  <div className="text-xs text-smoke-m uppercase mt-1">Código generado por IA</div>
                </div>
                <div className="metric">
                  <div className="text-3xl font-bold text-oxido">-40%</div>
                  <div className="text-xs text-smoke-m uppercase mt-1">Tiempo de entrega</div>
                </div>
                <div className="metric">
                  <div className="text-3xl font-bold text-accent">-60%</div>
                  <div className="text-xs text-smoke-m uppercase mt-1">Menos retrabajo</div>
                </div>
              </div>
              <p className="mt-8 pt-8 border-t border-white/5 text-sm italic text-smoke-m">
                "Partimos de un equipo que usaba la IA con curiosidad pero sin sistema. En tres meses teníamos un equipo que trabaja diferente."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section bg-ink-2">
        <div className="container">
          <div className="section-label">Qué incluye el servicio</div>
          <h2 className="section-title">Lo que entregamos al final del proceso</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              { num: '01', title: 'Diagnóstico de equipo', desc: 'Identificamos qué tareas tienen el mayor potencial de automatización en tu contexto específico.' },
              { num: '02', title: 'Selección de herramientas', desc: 'ChatGPT, Claude, Cursor, Windsurf. La recomendación surge del diagnóstico, no de la moda.' },
              { num: '03', title: 'Guía de prompts y flujos', desc: 'Documento vivo con los prompts y flujos que funcionan para las tareas de tu equipo.' },
              { num: '04', title: 'Implementación con métricas', desc: 'La adopción se mide desde el día uno. Definimos indicadores claros y los revisamos semanalmente.' },
              { num: '05', title: 'Acompañamiento post (30d)', desc: 'Estamos disponibles durante los primeros 30 días para resolver dudas y consolidar el hábito.' },
              { num: '+', title: 'Garantía de adopción', desc: 'Si no alcanzan el 80% de uso cotidiano, el acompañamiento se extiende sin costo.', highlight: true }
            ].map((item, i) => (
              <div key={i} className={`glass-card ${item.highlight ? 'border-accent/30 bg-accent/5' : ''}`}>
                <div className="text-accent font-mono text-sm mb-4">{item.num}</div>
                <h4 className="font-bold text-lg mb-2 text-ghost-w">{item.title}</h4>
                <p className="text-sm text-smoke-m leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" id="proceso">
        <div className="container">
          <div className="section-label">Cómo funciona</div>
          <h2 className="section-title">Cuatro pasos entre el diagnóstico y el hábito consolidado</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[ 
              { step: '01', time: 'Semana 1', title: 'Diagnóstico', desc: 'Analizamos el flujo de trabajo actual y las tareas con mayor potencial.' },
              { step: '02', time: 'Semana 2-3', title: 'Diseño Estándar', desc: 'Definimos qué herramientas, prompts y criterios de revisión usaremos.' },
              { step: '03', time: 'Semana 3-5', title: 'Implementación', desc: 'Entrenamos al equipo en el estándar. Medimos y ajustamos semana a semana.' },
              { step: '04', time: 'Días 31-60', title: 'Consolidación', desc: '30 días de acompañamiento post. Documentamos aprendizajes para la autonomía.' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-accent/10 absolute -top-10 -left-4 select-none">{item.step}</div>
                <div className="text-accent font-mono text-[10px] tracking-widest uppercase mb-2">{item.time}</div>
                <h4 className="font-bold text-ghost-w mb-3">{item.title}</h4>
                <p className="text-sm text-smoke-m leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-ink-2">
        <div className="container">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Lo que un líder inteligente pregunta</h2>
          <div className="max-w-3xl">
            {[ 
              { q: '¿Qué pasa si mi equipo ya hizo un taller y no funcionó?', a: 'El taller no falló por el equipo. Falló porque un taller solo no cambia hábitos. Falta el estándar de uso y el acompañamiento posterior.' },
              { q: '¿Funciona para equipos que no son de tecnología?', a: 'Sí. Aplica a cualquier equipo con trabajo cognitivo: redacción, análisis de datos, atención al cliente, administración.' },
              { q: '¿Cómo se mide el 80% de adopción de la garantía?', a: 'Definimos tareas objetivo. Al final de los 30 días, medimos el uso regular del equipo en esas tareas específicas.' }
            ].map((item, i) => (
              <div key={i} className="faq-item">
                <div className="faq-question text-ghost-w">
                  <span>{item.q}</span>
                  <span className="text-accent text-xl">+</span>
                </div>
                <div className="faq-answer">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-ink-1 border-t border-white/5" id="contacto">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">¿Tu equipo está listo para el siguiente nivel?</h2>
              <p className="text-smoke-l text-lg mb-8">
                No contrates un curso genérico. Implementemos un sistema que se sostenga solo.
              </p>
              <div className="text-accent font-mono text-sm tracking-widest uppercase">
                Garantía de adopción por contrato
              </div>
            </div>
            <div className="glass-card p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase text-smoke-m mb-2">Nombre</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase text-smoke-m mb-2">Email corporativo</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase text-smoke-m mb-2">Tamaño del equipo</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent outline-none">
                    <option>1-5 personas</option>
                    <option>6-15 personas</option>
                    <option>+15 personas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase text-smoke-m mb-2">Mensaje</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent outline-none h-32"></textarea>
                </div>
                <button className="btn-primary w-full mt-4">Evaluar mi equipo →</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
