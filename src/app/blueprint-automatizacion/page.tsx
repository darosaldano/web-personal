import Link from 'next/link';
import { Metadata } from 'next';
import './blueprint-landing.css';

export const metadata: Metadata = {
  title: "Diagnóstico de Automatización · Sabé qué cambiar antes de invertir · Darío Saldaño",
  description: "Antes de comprar cualquier sistema, conocé exactamente cuál es el problema real y su solución. Diagnóstico técnico para pymes y negocios del interior argentino.",
  keywords: ["automatización de procesos", "consultoría", "diagnóstico digital", "Darío Saldaño", "La Rioja", "Argentina", "interior", "NOA"],
  openGraph: {
    title: "Diagnóstico de Automatización · Darío Saldaño",
    description: "Sabé exactamente qué cambiar en tu negocio, con qué herramienta y cuánto te devuelve. Primera reunión sin costo.",
    images: ['/og-blueprint.png'],
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
            <span className="eb-label">Diagnóstico de Automatización</span>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Para dueños y gerentes de negocios en ciudades del interior que quieren saber, antes de gastar en tecnología, exactamente qué cambiar y cuánto les devuelve.
          </p>

          <h1>
            Antes de comprar<br />
            cualquier sistema,<br />
            conocé <span className="accent">exactamente</span><br />
            cuál es el problema real.<br />
          </h1>

          <p className="hero-sub">
            Un documento concreto con esto: qué proceso conviene cambiar primero, qué herramienta usaría, qué beneficios obtendrías y cuánto costaría implementarlo. Sin venderte nada que no necesitás.
          </p>

          <div className="hero-ctas">
            <Link href="/contacto?asunto=Diagnóstico Automatización" className="btn-premium-p">Agendá una reunión sin compromiso</Link>
            <Link href="#como-funciona" className="btn-premium-g" style={{marginLeft: '1rem'}}>Ver cómo funciona</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.5 }}>45 minutos. Sin costo. Te cuento cómo funciona y vemos si tiene sentido para tu negocio.</p>
        </div>

        <div className="hero-card-bp card-premium">
          <p className="hc-label">Lo que recibís</p>
          <p className="hc-title">Diagnóstico de Automatización — 6 secciones concretas</p>
          <ul className="hc-list list-premium">
            <li>Dónde perdés tiempo y plata hoy (proceso por proceso)</li>
            <li>Qué cambiar primero y por qué ese orden</li>
            <li>Qué herramienta usar, ajustada a tu presupuesto y equipo</li>
            <li>Cuánto cuesta implementarlo y qué resultado esperar</li>
            <li>Un documento que le podés dar a cualquier técnico para que lo implemente</li>
            <li>Los pasos concretos para empezar, en orden</li>
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
                <p style={{ fontSize: '1.05rem', color: '#DDD8D0', lineHeight: 1.75, marginBottom: '1.5rem', background: 'rgba(25,191,191,0.05)', padding: '1.25rem 1.5rem', borderLeft: '3px solid rgba(25,191,191,0.4)', borderRadius: '4px' }}>
                  Si cuando falta alguien del personal la operación se traba… si tenés información en planillas, en papel y en WhatsApp y nunca sabés cuál es la correcta… si cada tanto te preguntás en qué gasta tiempo tu personal y la respuesta no te cierra — esto es para vos.
                </p>
                <p>
                  La mayoría de los proyectos que fracasaron empezaron construyendo sin definir qué. Una bodega que invirtió en software de gestión y terminó usándolo para tres de las doce cosas que necesitaba. Una distribuidora que contrató desarrollo a medida y en ocho meses tenía la mitad del sistema.
                </p>
                <p style={{marginTop: '1.5rem'}}>
                  El problema no es la tecnología. Es la ambigüedad en el punto de partida. <strong>Cuando no sabés exactamente qué automatizar, cualquier herramienta te va a decepcionar.</strong>
                </p>
                <p style={{marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.65, fontStyle: 'italic'}}>
                  ¿No es el momento? Guardá esto para cuando baje la temporada. El diagnóstico se puede hacer en cualquier momento del año — vos elegís cuándo.
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
            el camino, no el <span className="accent">proveedor</span>.
          </h2>
          <div className="prose">
            <p>
              El Diagnóstico de Automatización no es un informe genérico. Es un documento concreto con el nivel de detalle suficiente para que cualquier técnico pueda implementar lo que se definió sin ambigüedades.
            </p>
          </div>

          <div className="propuesta-grid">
            <div className="bp-sections">
              {[
                { num: '01', title: 'Dónde perdés tiempo y plata hoy', desc: 'Proceso por proceso: qué se hace a mano, dónde se tarda más, qué pasa cuando alguien falta.' },
                { num: '02', title: 'Qué cambiar primero y en qué orden', desc: 'Ordenamos los procesos por impacto real versus costo de implementación.' },
                { num: '03', title: 'Qué herramienta usar', desc: 'La correcta para tu equipo, tu presupuesto y cómo funcíonate hoy.' },
                { num: '04', title: 'Cuánto cuesta y qué resultá esperar', desc: 'Números honestos: cuánto cuesta implementar, cuánto tiempo lleva y qué resultado esperar.' },
                { num: '05', title: 'Documento que cualquier técnico puede ejecutar', desc: 'Lo que le entregás a cualquier desarrollador. Funcional, detallado, sin ambigüedades.' },
                { num: '06', title: 'Los pasos para empezar', desc: 'Quién hace qué, en qué orden, con qué hitos. Una hoja de ruta completa.' },
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
                  <th className="hi">Diagnóstico (Darío Saldaño)</th>
                  <th>Agencia de software</th>
                  <th>Consultor genérico</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: 'Incentivo', b: 'Diagnóstico honesto (aunque el resultado sea: no hagás nada)', a: 'Implementar (contrato)', g: 'Facturar horas' },
                  { c: 'Lo que recibís', b: 'Documento concreto que cualquier técnico puede ejecutar', a: 'Propuesta de venta', g: 'Informe abstracto' },
                  { c: 'Contexto', b: '+16 años en Argentina real', a: 'Modelos estandarizados', g: 'Modelos teóricos' },
                  { c: 'Garantía', b: 'Si al final no tenés un plan útil, no te cobro nada. Sin letra chica.', a: 'Sobre implementación', g: 'Raramente existe' },
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
              <span className="sec-label">Primer paso</span>
              <h2 className="sec-title">
                Una reunión de 45 minutos<br />
                para saber si <span className="accent">tiene sentido</span>.
              </h2>
              <p className="prose" style={{color: '#DDD8D0'}}>
                Si en esa conversación no identificás al menos una cosa concreta para mejorar, te lo decimos sin vueltas.
              </p>
              <ul className="list-premium" style={{marginTop: '2rem'}}>
                <li>Primera reunión sin costo · 45 minutos · Sin compromiso</li>
                <li>Si al final del diagnóstico no tenés un plan útil y accionable, no te cobro nada. Sin letra chica.</li>
                <li>El diagnóstico completo parte desde $50.000 — en la primera reunión te doy el número exacto para tu caso.</li>
              </ul>
              <p style={{ marginTop: '2rem', fontSize: '0.85rem', opacity: 0.6 }}>
                ¿Estás pensando en comprar un sistema que ya existe? Bien. El diagnóstico te dice si ese sistema resuelve tu problema real o si vas a pagar por algo que vas a usar a medias.
              </p>
            </div>

            <div className="form-bp" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
              <Link href="/contacto?asunto=Diagnóstico Automatización" className="btn-premium-p" style={{width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '1.2rem 2rem'}}>
                Agendá una reunión sin compromiso →
              </Link>
              <p style={{marginTop: '1rem', fontSize: '0.8rem', opacity: 0.6, color: '#DDD8D0'}}>
                45 minutos. Sin costo. Sin presupuesto escondido.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
