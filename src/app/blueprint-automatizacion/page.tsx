import Link from 'next/link';
import { Metadata } from 'next';
import './blueprint-landing.css';

export const metadata: Metadata = {
  title: "Blueprint de Automatización · Diagnóstico antes de invertir · Darío Saldaño",
  description: "Antes de contratar un equipo de desarrollo o una agencia, sabé exactamente qué automatizar, en qué orden y con qué presupuesto realista. Diagnóstico técnico para pymes y agroindustrias en Argentina.",
  keywords: ["automatización de procesos", "consultoría", "blueprint digital", "Darío Saldaño", "La Rioja", "Argentina"],
  openGraph: {
    title: "Blueprint de Automatización · Darío Saldaño",
    description: "Diagnóstico técnico estratégico que define qué automatizar primero, qué herramienta usar y qué retorno esperás.",
    images: ['/og-blueprint.png'], // Placeholder for OG image
  }
};

export default function BlueprintPage() {
  return (
    <div className="blueprint-root">
      {/* ─── HERO ─── */}
      <section className="hero-bp">
        <div className="hero-content-bp">
          <div className="hero-eyebrow">
            <span className="eb-badge">N°1 · Diagnóstico Estratégico</span>
            <span className="eb-label">Blueprint de Automatización</span>
          </div>

          <h1>
            Antes de gastar<br />
            un peso en software,<br />
            sabé <span className="accent">exactamente</span><br />
            qué construir.
          </h1>

          <p className="hero-sub">
            Un documento ejecutable que define qué automatizar primero, qué herramienta usar y qué retorno esperás. Sin venderte nada que no necesitás.
          </p>

          <div className="hero-ctas">
            <Link href="/contacto?asunto=Blueprint Automatización" className="btn-premium-p">Quiero mi Blueprint</Link>
            <Link href="#como-funciona" className="btn-premium-g" style={{marginLeft: '1rem'}}>Ver cómo funciona</Link>
          </div>
        </div>

        <div className="hero-card-bp card-premium">
          <p className="hc-label">El documento incluye</p>
          <p className="hc-title">Blueprint de Automatización — 6 secciones ejecutables</p>
          <ul className="hc-list list-premium">
            <li>Diagnóstico de fricción operativa: dónde perdés tiempo y dinero hoy</li>
            <li>Priorización por retorno: qué automatizar primero y por qué ese orden</li>
            <li>Recomendación de herramienta ajustada a tu contexto real</li>
            <li>Estimación realista de inversión y retorno esperado</li>
            <li>Especificaciones ejecutables por cualquier equipo técnico (SDD)</li>
            <li>Plan de acción y secuencia de implementación paso a paso</li>
          </ul>
          <p className="hero-card-footer" style={{marginTop: '1.5rem', opacity: 0.6, fontSize: '0.8rem'}}>
            Entrega en 2 semanas · Formato documento + sesión de revisión
          </p>
        </div>
      </section>

      {/* ─── EL PROBLEMA ─── */}
      <section id="el-problema">
        <div className="container">
          <div className="dolor-grid">
            <div>
              <span className="sec-label">El problema real</span>
              <h2 className="sec-title">
                La automatización no falla<br />
                por la <span className="accent">tecnología</span>.<br />
                Falla antes.
              </h2>
              <div className="prose">
                <p>
                  La mayoría de los proyectos que fracasaron empezaron construyendo sin definir qué. Una bodega que invirtió en software de gestión y terminó usándolo para tres de las doce cosas que necesitaba. Una distribuidora que contrató desarrollo a medida y en ocho meses tenía la mitad del sistema.
                </p>
                <p style={{marginTop: '1.5rem'}}>
                  El problema no es la tecnología. Es la ambigüedad en el punto de partida. <strong>Cuando no sabés exactamente qué automatizar, cualquier herramienta te va a decepcionar.</strong>
                </p>
                <p style={{marginTop: '1.5rem'}}>
                  En dieciséis años de proyectos reales vi repetirse el mismo patrón: <em>el costo más alto no es el software incorrecto, es el tiempo perdido después de comprarlo.</em>
                </p>
              </div>
            </div>

            <div className="friction-stack">
              <div className="friction-item card-premium">
                <p className="fi-title text-accent">El proceso crítico que nadie documentó</p>
                <p className="fi-desc">Existe en la cabeza de una sola persona. Si esa persona falta, el proceso se detiene.</p>
              </div>
              <div className="friction-item card-premium">
                <p className="fi-title text-accent">La herramienta equivocada para el problema correcto</p>
                <p className="fi-desc">Contrataste un CRM cuando lo que necesitabas era un flujo de aprobación o una app custom innecesaria.</p>
              </div>
              <div className="friction-item card-premium">
                <p className="fi-title text-accent">La inversión que nadie midió</p>
                <p className="fi-desc">Sabés cuánto costó el software. No sabés cuánto costó el tiempo de tu equipo aprendiendo a usarlo.</p>
              </div>
              <div className="friction-item card-premium">
                <p className="fi-title text-accent">El proveedor que quiere construir, no diagnosticar</p>
                <p className="fi-desc">Toda agencia tiene incentivo en implementar. La consultoría previa que debería protegerte casi nunca existe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LA PROPUESTA ─── */}
      <section id="que-incluye">
        <div className="container">
          <span className="sec-label">La propuesta</span>
          <h2 className="sec-title">
            Un diagnóstico que define<br />
            el mecanismo, no el <span className="accent">proveedor</span>.
          </h2>
          <div className="prose">
            <p>
              El Blueprint de Automatización no es un informe de consultoría genérico. Es un documento técnico con el nivel de especificación suficiente para que cualquier equipo pueda implementar lo que se definió sin ambigüedades (Metodología SDD).
            </p>
          </div>

          <div className="propuesta-grid">
            <div className="bp-sections">
              {[
                { num: '01', title: 'Diagnóstico de fricción operativa', desc: 'Mapeamos dónde se pierde tiempo y dinero hoy: procesos manuales, puntos de falla, cuellos de botella.' },
                { num: '02', title: 'Priorización por criterio de retorno', desc: 'Ordenamos los procesos por impacto medible versus costo de implementación.' },
                { num: '03', title: 'Recomendación de herramienta ajustada al contexto', desc: 'La correcta para tu equipo, tu presupuesto y tu nivel de madurez digital actual.' },
                { num: '04', title: 'Estimación realista de inversión y retorno', desc: 'Rangos honestos: cuánto cuesta implementar, cuánto tiempo lleva y qué resultado esperar.' },
                { num: '05', title: 'Especificaciones ejecutables (metodología SDD)', desc: 'El documento que le entregás a cualquier desarrollador. Funcional, técnico, sin ambigüedades.' },
                { num: '06', title: 'Plan de acción y secuencia de implementación', desc: 'Quién hace qué, en qué orden, con qué hitos. Una hoja de ruta completa.' },
              ].map((item) => (
                <div key={item.num} className="bp-sec-item">
                  <div className="bsi-num">{item.num}</div>
                  <div className="bsi-content">
                    <p className="bsi-title">{item.title}</p>
                    <p className="bsi-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bp-aside">
              <p style={{fontFamily: 'JetBrains Mono', fontSize: '0.7rem', opacity: 0.5, marginBottom: '1.5rem'}}>RESULTADOS REALES</p>
              <div className="aside-stat">
                <p className="as-num">60%</p>
                <p className="as-label">Reducción de retrabajo con especificaciones SDD</p>
              </div>
              <div className="aside-stat">
                <p className="as-num">40%</p>
                <p className="as-label">Reducción en tiempos de entrega con IA + SDD</p>
              </div>
              <div className="aside-stat">
                <p className="as-num">×9</p>
                <p className="as-label">Escala de gestión sin perder calidad operativa</p>
              </div>
              <div className="aside-stat">
                <p className="as-num">+16</p>
                <p className="as-label">Años de experiencia real liderando equipos IT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESO ─── */}
      <section id="como-funciona" style={{background: '#151C1F'}}>
        <div className="container">
          <span className="sec-label">Cómo funciona</span>
          <h2 className="sec-title">
            De la primera conversación<br />
            al documento <span className="accent">ejecutable</span>:<br />
            dos semanas.
          </h2>

          <div className="timeline-premium mt-12">
            {[
              { num: '01', title: 'Sesión de diagnóstico inicial', desc: '90 min remotos para entender el negocio y los puntos de dolor.' },
              { num: '02', title: 'Relevamiento en profundidad', desc: 'Sesiones con las personas que ejecutan los procesos reales.' },
              { num: '03', title: 'Análisis técnico y selección', desc: 'Trabajo interno de análisis estratégico y cruce de datos.' },
              { num: '04', title: 'Entrega y sesión de revisión', desc: 'Entrega del Blueprint completo y alineación final.' },
            ].map((step, i) => (
              <div key={i} className="timeline-step-premium">
                <div className="timeline-marker-p">
                  <div className="timeline-dot-p">{step.num}</div>
                  <div className="timeline-line-p"></div>
                </div>
                <div className="timeline-content-premium card-premium">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                  <span className="step-tag">Fase {step.num}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{marginTop: '4rem', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'}}>
            <p style={{fontSize: '1rem', color: '#DDD8D0'}}>
              <strong>Tiempo total: dos semanas.</strong> Dedicación del cliente: 4-6 horas.
            </p>
            <Link href="/contacto?asunto=Blueprint Automatización" className="btn-premium-p">Quiero empezar</Link>
          </div>
        </div>
      </section>

      {/* ─── AUDIENCIA ─── */}
      <section id="para-quien">
        <div className="container">
          <span className="sec-label">Fit real</span>
          <h2 className="sec-title">
            El Blueprint tiene sentido<br />
            en contextos <span className="accent">específicos</span>.
          </h2>
          <div className="aud-grid">
            <div className="aud-si">
              <h3 className="aud-col-title">Tiene sentido para vos si…</h3>
              <div className="aud-list">
                {[
                  "Tenés procesos manuales que consumen más de diez horas semanales.",
                  "Estás evaluando si contratar desarrolladores, agencias o usar SaaS.",
                  "Ya invertiste en software antes y no obtuviste el resultado esperado.",
                  "Liderás una pyme con operación real (agro, bodega, industria).",
                  "Operás en Argentina o LATAM y necesitás consejo real sobre el contexto local."
                ].map((item, idx) => (
                  <div key={idx} className="aud-item">
                    <span style={{color: '#1ABFBF'}}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="aud-no">
              <h3 className="aud-col-title">No tiene sentido si…</h3>
              <div className="aud-list">
                {[
                  "Ya sabés exactamente qué automatizar y con qué herramienta.",
                  "Estás en etapa de idea o startup sin operación real funcionando.",
                  "Buscás validación para una decisión que ya tomaste.",
                  "Querés una presentación general sobre IA sin vínculo con tu operación."
                ].map((item, idx) => (
                  <div key={idx} className="aud-item">
                    <span style={{opacity: 0.3}}>—</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPARATIVA ─── */}
      <section style={{background: '#151C1F'}}>
        <div className="container">
          <span className="sec-label">Comparativa</span>
          <h2 className="sec-title">Por qué esto y no otra cosa.</h2>
          <div className="comp-table-wrap">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Criterio</th>
                  <th className="hi">Blueprint (Darío Saldaño)</th>
                  <th>Agencia de software</th>
                  <th>Consultor genérico</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: 'Incentivo', b: 'Diagnóstico honesto (aunque sea NO)', a: 'Implementar (contrato)', g: 'Facturar horas' },
                  { c: 'Entregable', b: 'Documento técnico ejecutable SDD', a: 'Propuesta de venta', g: 'Informe abstracto' },
                  { c: 'Contexto', b: '+16 años en Argentina/LATAM real', a: 'Modelos estandarizados', g: 'Modelos teóricos' },
                  { c: 'Garantía', b: 'Si no hay claridad, no se cobra', a: 'Sobre implementación', g: 'Raramente existe' },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.c}</td>
                    <td className="good">{row.b}</td>
                    <td>{row.a}</td>
                    <td>{row.g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq">
        <div className="container" style={{maxWidth: '800px'}}>
          <span className="sec-label">Preguntas reales</span>
          <h2 className="sec-title">Lo que un prospecto inteligente pregunta.</h2>
          <div className="faq-bp">
            {[
              { q: '¿Esto garantiza que la automatización va a funcionar?', a: 'No. El Blueprint define el mapa correcto, pero la ejecución depende de quién conduzca.' },
              { q: '¿Puedo usar el Blueprint con cualquier desarrollador?', a: 'Sí, está escrito en metodología SDD para ser ejecutable por cualquier equipo técnico.' },
              { q: '¿Qué pasa si el diagnóstico concluye que no debería automatizar?', a: 'Te lo decimos sin vueltas. Es lo más valioso: evitar una inversión incorrecta.' },
              { q: '¿Cuánto tiempo me requiere a mí durante el proceso?', a: 'Entre 4 y 6 horas totales distribuidas en dos semanas. El resto es trabajo nuestro.' },
            ].map((faq, idx) => (
              <div key={idx} className="faq-item-bp">
                <details>
                  <summary className="faq-q-bp">{faq.q}</summary>
                  <p className="faq-a-bp">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section id="cta" className="cta-section-bp" style={{background: 'linear-gradient(135deg, #0E1416 0%, #1A3A7A 100%)'}}>
        <div className="container">
          <div className="cta-bp">
            <div>
              <span className="sec-label">Contacto</span>
              <h2 className="sec-title">
                En 30 minutos<br />
                identificamos si tiene<br />
                sentido <span className="accent">seguir</span>.
              </h2>
              <p className="prose" style={{color: '#DDD8D0'}}>
                Si en la primera conversación no identificamos al menos un proceso crítico que valga la pena mapear, te lo decimos sin vueltas.
              </p>
              <ul style={{marginTop: '2rem', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#8E9A9E', fontSize: '0.9rem'}}>
                <li><span style={{color: '#1ABFBF'}}>●</span> Primera conversación sin costo</li>
                <li><span style={{color: '#1ABFBF'}}>●</span> Garantía de claridad total</li>
                <li><span style={{color: '#1ABFBF'}}>●</span> Documento ejecutable propio</li>
              </ul>
            </div>

            <div className="form-bp" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
              <Link href="/contacto?asunto=Blueprint Automatización" className="btn-premium-p" style={{padding: '1.5rem 3rem', fontSize: '1.2rem', width: '100%'}}>
                Quiero mapear mi proceso crítico →
              </Link>
              <p style={{marginTop: '1.5rem', fontSize: '0.8rem', opacity: 0.6, color: '#DDD8D0'}}>
                Respuesta en menos de 24 horas hábiles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
