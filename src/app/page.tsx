import Link from 'next/link';
import Image from 'next/image';
import Timeline from '@/components/Timeline';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/blog';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero" id="hero">
        <div className="container">
          <span className="kicker">
            Consultor Estratégico · Tecnología &amp; Liderazgo · Chilecito, Argentina
          </span>
          <h1 className="headline">
            Lidero proyectos<br />
            <span className="accent">que generan impacto</span><br />
          </h1>
          <p className="sub">
            Ayudo a dueños de empresas, líderes y desarrolladores en LATAM a construir equipos de software
            que entregan resultados reales, sin el caos que normalmente los frena.
            Mi Formula: SDD + IA + Liderazgo con Propósito.
          </p>
          <div className="hero-buttons">
            <Link href="/contacto" prefetch={false} className="btn btn-p">Hablemos de tu proyecto →</Link>
            <Link href="/#servicios" prefetch={false} className="btn btn-g">Ver mis servicios</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="number">+17</div>
              <div className="label">Años en la industria</div>
            </div>
            <div className="hero-stat">
              <div className="number electric">R$1.8B</div>
              <div className="label">Captados en Mercadopago</div>
            </div>
            <div className="hero-stat">
              <div className="number gold">+20</div>
              <div className="label">Proyectos entregados</div>
            </div>
            <div className="hero-stat">
              <div className="number mint">+10</div>
              <div className="label">Lideres Formados</div>
            </div>
            <div className="hero-stat">
              <div className="number">-40%</div>
              <div className="label">Tiempo Optimizado</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOBRE MÍ ═══ */}
      <section id="sobre-mi">
        <div className="container">
          <div className="section-label">Sobre Mí</div>
          <h2 className="section-title">La persona detrás del <span>sistema</span></h2>
          <div className="about-grid">
            <div className="about-image">
              <Image
                src="/dario-saldano.jpg"
                alt="Darío Saldaño - Strategic Tech Consulting"
                width={500}
                height={380}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                priority
              />
            </div>
            <div className="about-text">
              <p>
                <span className="about-highlight">
                  Diciembre de 2003, Córdoba.
                </span> Tenía catorce años y mi atención estaba clavada en una mesa de pirotecnia, trazando mis primeros cálculos de costos a lápiz. Mi propósito no era solo vender, sino conquistar mi autonomía y construir valor real. Pronto entendí que el éxito exigía agilidad: reinvertir ganancias y reponer el stock sin excedentes. Sin saberlo, ya estaba aplicando en la calle lecciones clave sobre el escalamiento de sistemas, midiendo resultados e iterando sobre la marcha.
              </p>
              <p>
                Esa experiencia me dejó mucho más que pequeñas ganancias y aprendizaje. Aquella mesa en el barrio terminó convirtiéndose en el código fuente de mi carrera profesional; fue la chispa que fusionó para siempre mi vocación por el emprendimiento y el liderazgo.
              </p>
              <p>
                Hoy, tras más de 16 años de trayectoria en la industria del software, aplico esa misma resiliencia estratégica para escalar equipos, desarrollar productos y liderar ecosistemas tecnológicos con propósito. Al explorar a continuación mi experiencia y mis servicios, no solo encontrarás el resumen de mi carrera; te llevarás una certeza absoluta: no hace falta estar en el centro para generar un impacto a gran escala, hace falta propósito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <Timeline />

      {/* ═══ SERVICIOS ═══ */}
      <section id="servicios" style={{ background: 'var(--ink-2)' }}>
        <div className="container">
          <div className="section-label">Servicios</div>
          <h2 className="section-title">Pilares para <span>resultados reales</span></h2>
          <p className="section-subtitle">
            Cada servicio diseñado para resolver problemas reales de empresas, emprendedores, líderes y desarrolladores que
            necesitan escalar su tecnología sin perder el control.
          </p>
          <div className="card-grid">

            {/* Service 2 — Blueprint */}
            <Link href="/blueprint-automatizacion" className="svc-card special-card">
              <div className="svc-icon electric">⚡</div>
              <div className="svc-title">Blueprint de Automatización</div>
              <p className="svc-desc">
                Diagnóstico técnico-estratégico antes de invertir en software. Mapeamos tus procesos críticos, definimos el stack correcto y estimamos el ROI real en solo dos semanas.
              </p>
              <ul className="svc-list">
                <li>Diagnóstico de fricción</li>
                <li>Priorización por retorno</li>
                <li>Especificaciones SDD</li>
              </ul>
              <div className="svc-cta" style={{ color: 'var(--electric-l)' }}>
                Ver Diagnóstico <span>→</span>
              </div>
            </Link>

            {/* Service 3 — SDD Engineering */}
            <Link href="/sdd-ingenieria-alto-escala" className="svc-card special-card">
              <div className="svc-icon">★</div>
              <div className="svc-title">SDD Ingeniería de Alto Escala</div>
              <p className="svc-desc">
                Desarrollo de software de alta complejidad para proyectos que no pueden fallar. Arquitectura resiliente, equipos de alto rendimiento y metodología orientada a especificaciones.
              </p>
              <ul className="svc-list">
                <li>Sistemas Críticos</li>
                <li>Escalamiento Masivo</li>
                <li>Auditoría de Arquitectura</li>
              </ul>
              <div className="svc-cta" style={{ color: 'var(--electric-l)' }}>
                Conocer SDD Engineering <span>→</span>
              </div>
            </Link>

            {/* Service 4 — Agentes IA */}
            <Link href="/agentes-ia-negocio" className="svc-card special-card">
              <div className="svc-icon electric">🤖</div>
              <div className="svc-title">Agentes de IA para tu Negocio</div>
              <p className="svc-desc">
                Sistemas que no solo responden, sino que trabajan. Atendé procesos críticos 24/7 sin intervención manual: desde pedidos hasta reportes gerenciales automáticos.
              </p>
              <ul className="svc-list">
                <li>Mapeo de Procesos</li>
                <li>Integración 24/7</li>
                <li>Entrenamiento de Dominio</li>
              </ul>
              <div className="svc-cta" style={{ color: 'var(--electric-l)' }}>
                Ver Agentes <span>→</span>
              </div>
            </Link>

            {/* Service 5 — Software a Medida */}
            <Link href="/software-a-medida" className="svc-card">
              <div className="svc-icon">🛠️</div>
              <div className="svc-title">Software a Medida desde Cero</div>
              <p className="svc-desc">
                Sistemas que funcionan exactamente como tu negocio, sin código basura ni dependencia total del proveedor. Desarrollo bajo metodología SDD para asegurar soberanía técnica.
              </p>
              <ul className="svc-list">
                <li>Sistemas de Gestión Custom</li>
                <li>Arquitectura para Escalar</li>
                <li>Documentación Técnica Real</li>
              </ul>
              <div className="svc-cta">
                Ver Desarrollo <span>→</span>
              </div>
            </Link>

            {/* Service 1 — SDD + IA para Equipos */}
            <Link href="/implementacion-ia-equipos" className="svc-card special-card">
              <div className="svc-icon gold">📐</div>
              <div className="svc-title">SDD + IA para Equipos de Desarrollo</div>
              <p className="svc-desc">
                El problema más costoso en el desarrollo de software es construir lo incorrecto por no haber especificado correctamente. Esta metodología invierte el orden habitual: Primero se especifica con precisión, luego la IA genera el código base y el equipo valida y refina. Menos retrabajo, más velocidad, adopción de IA sin caos.
              </p>
              <ul className="svc-list">
                <li>Formación en SDD</li>
                <li>Templates y flujos de trabajo</li>
                <li>Adopción de IA Generativa</li>
              </ul>
              <div className="svc-cta" style={{ color: 'var(--gold-l)' }}>
                Ver Metodología <span>→</span>
              </div>
            </Link>

            {/* Service 6 — Liderazgo con Propósito */}
            <div className="svc-card">
              <div className="svc-icon mint">🤝</div>
              <div className="svc-title">Liderazgo con Propósito</div>
              <p className="svc-desc">
                Programas para líderes y aspirantes a líderes que quieren construir equipos de alto rendimiento con cultura sólida y valores claros. El liderazgo transformacional construye equipos que funcionan cuando el líder no está, y ese es el único tipo de equipo que escala de verdad
              </p>
              <ul className="svc-list">
                <li>Formación de nuevos Líderes</li>
                <li>Coaching Individual</li>
                <li>Estructura de carrera técnica</li>
              </ul>
              <div className="svc-cta" style={{ color: 'var(--mint-l)' }}>
                Explorar servicio <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SDD FEATURE ═══ */}
      <section id="sdd" className="sdd-section">
        <div className="container">
          <div className="section-label">Metodología</div>
          <h2 className="section-title">
            SDD: <span>Specs Driven Development</span>
          </h2>
          <div className="sdd-grid">
            <div>
              <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
                El método que convierte <strong style={{ color: 'var(--gold-l)' }}>
                  incertidumbre</strong> en rentabilidad.
              </p>
              <p style={{ color: 'var(--gray-2)', fontSize: '.88rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                SDD es la metodología para equipos IT que necesitan escalar sin
                perder el control. Parte de una premisa simple: si los specs están mal,
                todo lo que sigue está mal. SDD ataca la raíz del problema.
              </p>
              <div style={{ display: 'flex', gap: '.9rem', flexWrap: 'wrap' }}>
                <Link href="/contacto" prefetch={false} className="btn btn-p">Conocer la metodología →</Link>
                <Link href="/#proyectos" prefetch={false} className="btn btn-g">Ver casos de éxito</Link>
              </div>
            </div>
            <div className="sdd-diagram">

              <div className="sdd-node">
                <div className="sdd-node__icon">⬡</div>
                <div className="sdd-node__body">
                  <div className="sdd-node__stage">Etapa 0</div>
                  <div className="sdd-node__title">Timón Estratégico</div>
                  <div className="sdd-node__desc">Principios no negociables, estándares de calidad y arquitectura base antes de iniciar.</div>
                </div>
                <div className="sdd-node__doc">Base</div>
              </div>

              <div className="sdd-arrow"></div>

              <div className="sdd-node">
                <div className="sdd-node__icon">◈</div>
                <div className="sdd-node__body">
                  <div className="sdd-node__stage">Nivel 1 · Intención</div>
                  <div className="sdd-node__title">Documento de Requerimientos</div>
                  <div className="sdd-node__desc">¿Qué necesitamos y por qué? Historias de usuario y criterios de aceptación medibles.</div>
                </div>
                <div className="sdd-node__doc">Reqs</div>
              </div>

              <div className="sdd-arrow"></div>

              <div className="sdd-node">
                <div className="sdd-node__icon">◇</div>
                <div className="sdd-node__body">
                  <div className="sdd-node__stage">Nivel 2 · Diseño</div>
                  <div className="sdd-node__title">Plan de Implementación</div>
                  <div className="sdd-node__desc">¿Cómo lo construiremos? Arquitectura de la solución vinculada a cada requerimiento.</div>
                </div>
                <div className="sdd-node__doc">Plan</div>
              </div>

              <div className="sdd-arrow"></div>

              <div className="sdd-node">
                <div className="sdd-node__icon">◉</div>
                <div className="sdd-node__body">
                  <div className="sdd-node__stage">Nivel 3 · Tareas</div>
                  <div className="sdd-node__title">Hoja de Ruta</div>
                  <div className="sdd-node__desc">¿Quién hace qué y en qué orden? Acciones atómicas con dependencias para humanos e IAs.</div>
                </div>
                <div className="sdd-node__doc">Ruta</div>
              </div>

              <div className="sdd-arrow"></div>

              <div className="sdd-node">
                <div className="sdd-node__icon">◆</div>
                <div className="sdd-node__body">
                  <div className="sdd-node__stage">Nivel 4 · Resultado</div>
                  <div className="sdd-node__title">Entregable Validado</div>
                  <div className="sdd-node__desc">Código final validado estrictamente contra los criterios del Nivel 1.</div>
                </div>
                <div className="sdd-node__doc">Output</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROYECTOS ═══ */}
      <section id="proyectos" style={{ background: 'var(--ink-2)' }}>
        <div className="container">
          <div className="section-label">Proyectos</div>
          <h2 className="section-title">Resultados que <span>hablan solos</span></h2>
          <p className="section-subtitle">
            Portfolio con métricas reales. Sin promesas vacías — datos concretos.
          </p>
          <div className="card-grid">
            {/* Project 1 — Fintech Brasil */}
            <div className="prj-card">
              <div className="prj-header" style={{ background: 'linear-gradient(135deg, #0E1A2A, #162440)' }}>
                <div className="pattern" />
                <span className="badge badge-e" style={{ position: 'relative', zIndex: 1 }}>FinTech · Brasil</span>
                <div className="prj-metric-big">
                  <div className="num">R$1.800M</div>
                  <div className="lbl">Captación en inversiones</div>
                </div>
              </div>
              <div className="prj-body">
                <div className="prj-title">Escalamiento Fintech: +1M de usuarios</div>
                <p className="prj-desc">Arquitectura y construcción de un producto de inversión masiva. Equipo internacional Argentina-Colombia-Brasil bajo metodologías ágiles.</p>
                <div className="prj-metrics">
                  <div className="prj-m"><div className="val">+1M</div><div className="key">Usuarios</div></div>
                  <div className="prj-m"><div className="val">3 países</div><div className="key">Equipo</div></div>
                  <div className="prj-m"><div className="val">&lt;1 año</div><div className="key">Time to Market</div></div>
                </div>
                <div className="prj-tags">
                  <span className="prj-tag">Arquitectura</span>
                  <span className="prj-tag">Agile</span>
                  <span className="prj-tag">LATAM</span>
                </div>
              </div>
            </div>

            {/* Project 2 — SDD + IA */}
            <div className="prj-card">
              <div className="prj-header" style={{ background: 'linear-gradient(135deg, #0B1820, #0D2240)' }}>
                <div className="pattern" />
                <span className="badge badge-p" style={{ position: 'relative', zIndex: 1 }}>SDD + IA</span>
                <div className="prj-metric-big">
                  <div className="num">-40%</div>
                  <div className="lbl">Tiempos de entrega</div>
                </div>
              </div>
              <div className="prj-body">
                <div className="prj-title">Transformación SDD + IA Generativa</div>
                <p className="prj-desc">Transición a modelo de desarrollo &quot;Agent First&quot; con Cursor, Windsurf y modelos avanzados. 70% del código generado por IA, 100% de adopción del equipo.</p>
                <div className="prj-metrics">
                  <div className="prj-m"><div className="val">70%</div><div className="key">Código IA</div></div>
                  <div className="prj-m"><div className="val">100%</div><div className="key">Adopción</div></div>
                  <div className="prj-m"><div className="val">-40%</div><div className="key">Tiempos</div></div>
                </div>
                <div className="prj-tags">
                  <span className="prj-tag">SDD</span>
                  <span className="prj-tag">IA Generativa</span>
                  <span className="prj-tag">Agent First</span>
                </div>
              </div>
            </div>

            {/* Project 3 — Soberanía Regional */}
            <div className="prj-card">
              <div className="prj-header" style={{ background: 'linear-gradient(135deg, #0E1A28, #122240)' }}>
                <div className="pattern" />
                <span className="badge badge-m" style={{ position: 'relative', zIndex: 1 }}>Impacto Regional</span>
                <div className="prj-metric-big">
                  <div className="num">1ª oficina</div>
                  <div className="lbl">IT en La Rioja</div>
                </div>
              </div>
              <div className="prj-body">
                <div className="prj-title">Soberanía Regional: Oficina IT en Chilecito</div>
                <p className="prj-desc">Fundé la primera oficina de desarrollo de software en La Rioja. Triangulación Empresa-Universidad-Gobierno con programa de formación para 10 profesionales.</p>
                <div className="prj-metrics">
                  <div className="prj-m"><div className="val">10</div><div className="key">Profesionales</div></div>
                  <div className="prj-m"><div className="val">100%</div><div className="key">Sostenible</div></div>
                  <div className="prj-m"><div className="val">0→1</div><div className="key">Industria</div></div>
                </div>
                <div className="prj-tags">
                  <span className="prj-tag">Descentralización</span>
                  <span className="prj-tag">Formación</span>
                  <span className="prj-tag">Interior AR</span>
                </div>
              </div>
            </div>

            {/* Project 4 — Trazabilidad BigQuery */}
            <div className="prj-card">
              <div className="prj-header" style={{ background: 'linear-gradient(135deg, #0D1B28, #152540)' }}>
                <div className="pattern" />
                <span className="badge badge-e" style={{ position: 'relative', zIndex: 1 }}>Data · FinTech</span>
                <div className="prj-metric-big">
                  <div className="num">80%→1%</div>
                  <div className="lbl">Tasa de discrepancia</div>
                </div>
              </div>
              <div className="prj-body">
                <div className="prj-title">Trazabilidad Financiera en BigQuery</div>
                <p className="prj-desc">Resolución de crisis de inconsistencia de datos de 2 años para R$2.000M y +1M de usuarios. Modelos dbt + BigQuery con conciliación automatizada.</p>
                <div className="prj-metrics">
                  <div className="prj-m"><div className="val">R$2.000M</div><div className="key">Cartera</div></div>
                  <div className="prj-m"><div className="val">+1M</div><div className="key">Usuarios</div></div>
                  <div className="prj-m"><div className="val">99%</div><div className="key">Precisión</div></div>
                </div>
                <div className="prj-tags">
                  <span className="prj-tag">BigQuery</span>
                  <span className="prj-tag">dbt</span>
                  <span className="prj-tag">Data Engineering</span>
                </div>
              </div>
            </div>

            {/* Project 5 — Migración Legacy */}
            <div className="prj-card">
              <div className="prj-header" style={{ background: 'linear-gradient(135deg, #101828, #1A2840)' }}>
                <div className="pattern" />
                <span className="badge badge-p" style={{ position: 'relative', zIndex: 1 }}>Legacy · Cloud</span>
                <div className="prj-metric-big">
                  <div className="num">100%</div>
                  <div className="lbl">Cartera migrada</div>
                </div>
              </div>
              <div className="prj-body">
                <div className="prj-title">Migración Legacy a Plataforma Cloud</div>
                <p className="prj-desc">De ecosistema fragmentado con múltiples versiones a plataforma única y estandarizada para +10 entidades financieras. Sin interrumpir operación.</p>
                <div className="prj-metrics">
                  <div className="prj-m"><div className="val">+10</div><div className="key">Entidades</div></div>
                  <div className="prj-m"><div className="val">0%</div><div className="key">Downtime</div></div>
                  <div className="prj-m"><div className="val">100%</div><div className="key">Cloud</div></div>
                </div>
                <div className="prj-tags">
                  <span className="prj-tag">Low-Code</span>
                  <span className="prj-tag">Migración</span>
                  <span className="prj-tag">Finanzas</span>
                </div>
              </div>
            </div>

            {/* Project 6 — Resiliencia COVID */}
            <div className="prj-card">
              <div className="prj-header" style={{ background: 'linear-gradient(135deg, #0E1820, #0D2238)' }}>
                <div className="pattern" />
                <span className="badge badge-m" style={{ position: 'relative', zIndex: 1 }}>Gestión de Crisis</span>
                <div className="prj-metric-big">
                  <div className="num">100%</div>
                  <div className="lbl">Facturación preservada</div>
                </div>
              </div>
              <div className="prj-body">
                <div className="prj-title">Resiliencia Operativa en Pandemia</div>
                <p className="prj-desc">Transición a 100% remoto y digitalización de cobranzas para clientes financieros. Equipo de 12 personas con productividad y moral intactas.</p>
                <div className="prj-metrics">
                  <div className="prj-m"><div className="val">12</div><div className="key">Personas</div></div>
                  <div className="prj-m"><div className="val">100%</div><div className="key">Remoto</div></div>
                  <div className="prj-m"><div className="val">0%</div><div className="key">Pérdida</div></div>
                </div>
                <div className="prj-tags">
                  <span className="prj-tag">Crisis</span>
                  <span className="prj-tag">Liderazgo</span>
                  <span className="prj-tag">Remoto</span>
                </div>
              </div>
            </div>

            {/* Project 7 — Visualización de Activos */}
            <div className="prj-card">
              <div className="prj-header" style={{ background: 'linear-gradient(135deg, #0C1A2A, #142240)' }}>
                <div className="pattern" />
                <span className="badge badge-e" style={{ position: 'relative', zIndex: 1 }}>FinTech · UX</span>
                <div className="prj-metric-big">
                  <div className="num">+1M</div>
                  <div className="lbl">Usuarios beneficiados</div>
                </div>
              </div>
              <div className="prj-body">
                <div className="prj-title">Visualización de Activos Financieros</div>
                <p className="prj-desc">Herramienta para +1M de usuarios integrando fuentes heterogéneas. Arquitectura MongoDB (Time-series) + BigQuery con autocompletado de datos.</p>
                <div className="prj-metrics">
                  <div className="prj-m"><div className="val">2 años</div><div className="key">Datos saneados</div></div>
                  <div className="prj-m"><div className="val">100%</div><div className="key">Confiable</div></div>
                  <div className="prj-m"><div className="val">+Retención</div><div className="key">Clientes</div></div>
                </div>
                <div className="prj-tags">
                  <span className="prj-tag">MongoDB</span>
                  <span className="prj-tag">BigQuery</span>
                  <span className="prj-tag">Data</span>
                </div>
              </div>
            </div>

            {/* Project 8 — KMS Gestión del Conocimiento */}
            <div className="prj-card">
              <div className="prj-header" style={{ background: 'linear-gradient(135deg, #0E1B28, #162038)' }}>
                <div className="pattern" />
                <span className="badge badge-p" style={{ position: 'relative', zIndex: 1 }}>Procesos</span>
                <div className="prj-metric-big">
                  <div className="num">-30%</div>
                  <div className="lbl">Curva de aprendizaje</div>
                </div>
              </div>
              <div className="prj-body">
                <div className="prj-title">Sistema de Gestión del Conocimiento (KMS)</div>
                <p className="prj-desc">Implementación de KMS basado en Alfresco bajo estándares ISO. Eliminé la dependencia de &quot;héroes individuales&quot; y democraticé el saber técnico.</p>
                <div className="prj-metrics">
                  <div className="prj-m"><div className="val">3→2 meses</div><div className="key">Onboarding</div></div>
                  <div className="prj-m"><div className="val">ISO</div><div className="key">Estándar</div></div>
                  <div className="prj-m"><div className="val">+30%</div><div className="key">Mantenibilidad</div></div>
                </div>
                <div className="prj-tags">
                  <span className="prj-tag">Alfresco</span>
                  <span className="prj-tag">ISO</span>
                  <span className="prj-tag">Knowledge Mgmt</span>
                </div>
              </div>
            </div>

            {/* Project 9 — Liderazgo Retail */}
            <div className="prj-card">
              <div className="prj-header" style={{ background: 'linear-gradient(135deg, #12182A, #1A2038)' }}>
                <div className="pattern" />
                <span className="badge badge-m" style={{ position: 'relative', zIndex: 1 }}>Retail · Liderazgo</span>
                <div className="prj-metric-big">
                  <div className="num">100%</div>
                  <div className="lbl">Delegación autónoma</div>
                </div>
              </div>
              <div className="prj-body">
                <div className="prj-title">Liderazgo Transformacional en Retail</div>
                <p className="prj-desc">Adquisición de 2 unidades gastronómicas y transformación en activos 100% delegables. Documentación de procesos, formación de equipo de alto rendimiento.</p>
                <div className="prj-metrics">
                  <div className="prj-m"><div className="val">2</div><div className="key">Negocios</div></div>
                  <div className="prj-m"><div className="val">100%</div><div className="key">Autónomo</div></div>
                  <div className="prj-m"><div className="val">Venta</div><div className="key">Exit exitoso</div></div>
                </div>
                <div className="prj-tags">
                  <span className="prj-tag">Retail</span>
                  <span className="prj-tag">Procesos</span>
                  <span className="prj-tag">Delegación</span>
                </div>
              </div>
            </div>

            {/* Project 10 — SDD Loterías */}
            <div className="prj-card">
              <div className="prj-header" style={{ background: 'linear-gradient(135deg, #0E1A2A, #142238)' }}>
                <div className="pattern" />
                <span className="badge badge-p" style={{ position: 'relative', zIndex: 1 }}>SDD</span>
                <div className="prj-metric-big">
                  <div className="num">SDD</div>
                  <div className="lbl">Especificación integral</div>
                </div>
              </div>
              <div className="prj-body">
                <div className="prj-title">SDD para Gestión de Loterías</div>
                <p className="prj-desc">Relevamiento integral y especificaciones técnicas para software de agencias de lotería. Reglas de negocio, flujos de datos y casos de uso antes de una línea de código.</p>
                <div className="prj-metrics">
                  <div className="prj-m"><div className="val">100%</div><div className="key">Specs previos</div></div>
                  <div className="prj-m"><div className="val">0</div><div className="key">Desviaciones</div></div>
                  <div className="prj-m"><div className="val">Total</div><div className="key">Alineamiento</div></div>
                </div>
                <div className="prj-tags">
                  <span className="prj-tag">SDD</span>
                  <span className="prj-tag">Requerimientos</span>
                  <span className="prj-tag">Regulado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <Testimonials />

      {/* ═══ BLOG PREVIEW ═══ */}
      <section id="blog" style={{ background: 'var(--ink-2)' }}>
        <div className="container">
          <div className="section-label">Blog</div>
          <h2 className="section-title">Ideas que <span>construyen</span></h2>
          <p className="section-subtitle">
            Artículos sobre tecnología, liderazgo, SDD y cómo escalar equipos IT en LATAM.
          </p>
          {recentPosts.length > 0 ? (
            <div className="card-grid">
              {recentPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              color: 'var(--gray-3)',
              fontFamily: 'var(--font-code)',
              fontSize: '.82rem'
            }}>
              Próximamente: artículos sobre SDD, liderazgo IT e IA aplicada.
            </div>
          )}
          {recentPosts.length > 0 && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/blog" prefetch={false} className="btn btn-g">Ver todos los artículos →</Link>
            </div>
          )}
        </div>
      </section>

      {/* ═══ CTA CONTACTO ═══ */}
      <section className="contact-section" id="contacto-cta">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 1.75rem' }}>
          <h2 className="section-title" style={{ marginBottom: '.8rem' }}>
            ¿Tu equipo está <span>atascado</span>?
          </h2>
          <p style={{ color: 'var(--gray-2)', fontSize: '.95rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
            Hablemos sobre cómo convertir el caos en un sistema que funcione.
          </p>
          <div style={{ display: 'flex', gap: '.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contacto" prefetch={false} className="btn btn-p">Agendar una conversación →</Link>
            <Link href="/#servicios" prefetch={false} className="btn btn-g">Ver servicios</Link>
          </div>
        </div>
      </section>
    </>
  );
}
