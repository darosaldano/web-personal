import Link from 'next/link';
import { Metadata } from 'next';
import './sdd-landing.css';

export const metadata: Metadata = {
  title: 'SDD para ingeniería de alto escala · Darío Saldaño',
  description: 'Implementación de SDD + Sistema Multiagente para equipos de ingeniería de alta exigencia. El 90% de código generado con IA es posible.',
  openGraph: {
    title: 'SDD para ingeniería de alto escala · Darío Saldaño',
    description: 'El 90% de código generado con IA es posible. El 70% es solo el inicio.',
    url: 'https://dariosaldano.com.ar/sdd-ingenieria-alto-escala',
    siteName: 'Darío Saldaño',
    locale: 'es_AR',
    type: 'website',
  },
};

export default function SDDLandingPage() {
  return (
    <div className="sdd-landing-root">
      {/* ─── HERO ─── */}
      <div className="hero-sdd">
        <div className="hero-glow"></div>
        <div className="hero-glow-2"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hb-dot"></span>
            <span className="hb-text">N-TECH · SDD + Sistema Multiagente · Alta exigencia</span>
          </div>

          <h1 className="hero-h1">
            El 90% de código generado<br />
            con IA <span className="tq">es posible</span><span className="dim">.</span><br />
            El 70% es <span className="ox">solo el inicio.</span>
          </h1>

          <div className="hero-grid">
            <div>
              <p className="hero-sub">
                Tu equipo tiene la exigencia: <strong>70% mínimo de código generado con IA es el piso, no el techo.</strong> El objetivo real es llegar al 90%+, con uptime de 99%+ y respuesta menor a 200ms en entornos de 100k+ RPM. Las herramientas existen. El problema es que sin un sistema que estructure cómo se usan, el código generado introduce deuda técnica más rápido de lo que la IA lo escribe.
              </p>

              <div className="hero-metrics">
                <span className="hm-tag hmt-req">≥70% mínimo · 90%+ objetivo</span>
                <span className="hm-tag hmt-req">uptime 99%+</span>
                <span className="hm-tag hmt-req">&lt;200ms p99</span>
                <span className="hm-tag hmt-req">100k+ RPM</span>
                <span className="hm-tag hmt-req">coverage 95%+</span>
                <span className="hm-tag hmt-ok">SDD cierra la brecha</span>
                <span className="hm-tag hmt-n">Cursor · Windsurf · Claude · Gemini</span>
                <span className="hm-tag hmt-n">Agnóstico al lenguaje y al stack</span>
                <span className="hm-tag hmt-n">Hexagonal · Clean Arch · Design Patterns</span>
              </div>

              <div className="hero-ctas">
                <a className="btn-premium-p" href="/contacto?asunto=SDD Engineering">Hablar de mi equipo</a>
                <a className="btn-premium-g" href="#sistema" style={{marginLeft: '1rem'}}>Ver el sistema multiagente</a>
              </div>
            </div>

            <div className="hero-terminal">
              <div className="ht-bar">
                <div className="ht-dot ht-dot-r"></div>
                <div className="ht-dot ht-dot-y"></div>
                <div className="ht-dot ht-dot-g"></div>
                <div className="ht-title">sdd-agent-pipeline · Go service · hexagonal</div>
              </div>
              <div className="ht-body">
                <div className="ht-line"><span className="c-mu">// Agente Analista — spec generada</span></div>
                <div className="ht-line"><span className="c-tq">SPEC</span> <span className="c-wh">PaymentUseCase.ProcessRefund</span></div>
                <div className="ht-line"><span className="c-mu">  domain  : </span><span className="c-gr">payments.core</span></div>
                <div className="ht-line"><span className="c-mu">  pattern : </span><span className="c-oc">hexagonal · repository</span></div>
                <div className="ht-line"><span className="c-mu">  coverage: </span><span className="c-gr">≥90% unit + integration</span></div>
                <div className="ht-line"><span className="c-mu">  perf    : </span><span className="c-gr">p99 &lt;150ms · 100k RPM</span></div>
                <div className="ht-line"><span className="c-mu">  security: </span><span className="c-gr">OWASP · injection-free</span></div>
                <div className="ht-sep"></div>
                <div className="ht-line"><span className="c-mu">// Agente Ejecutor — generando código</span></div>
                <div className="ht-line"><span className="c-pu">func</span> <span className="c-tq">(uc *PaymentUseCase)</span> <span className="c-wh">ProcessRefund(</span></div>
                <div className="ht-line">  <span className="c-wh">ctx</span> <span className="c-oc">context.Context</span><span className="c-mu">,</span></div>
                <div className="ht-line">  <span className="c-wh">req</span> <span className="c-oc">RefundRequest</span><span className="c-mu">,</span></div>
                <div className="ht-line"><span className="c-wh">) (</span><span className="c-oc">*RefundResponse</span><span className="c-mu">,</span> <span className="c-oc">error</span><span className="c-wh">) {'{'}</span></div>
                <div className="ht-sep"></div>
                <div className="ht-line"><span className="c-mu">// Agente QA — validando</span></div>
                <div className="ht-line"><span className="c-gr">✓</span> <span className="c-mu">hexagonal boundaries · OK</span></div>
                <div className="ht-line"><span className="c-gr">✓</span> <span className="c-mu">unit coverage 94% · OK</span></div>
                <div className="ht-line"><span className="c-gr">✓</span> <span className="c-mu">no SQL injection vectors · OK</span></div>
                <div className="ht-line"><span className="c-gr">✓</span> <span className="c-mu">p99 benchmark 142ms · OK</span></div>
                <div className="ht-line"><span className="c-gr">✓</span> <span className="c-mu">PR ready · spec compliant</span> <span className="ht-cursor"></span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats-sdd">
          <div className="hs-item-sdd card-premium">
            <div className="hs-num tq">90%+</div>
            <div className="hs-label">objetivo real de código generado con IA. El 70% es el piso mínimo.</div>
          </div>
          <div className="hs-item-sdd card-premium">
            <div className="hs-num green">95%+</div>
            <div className="hs-label">cobertura de tests validada por el agente QA antes de cada PR</div>
          </div>
          <div className="hs-item-sdd card-premium">
            <div className="hs-num tq">99%+</div>
            <div className="hs-label">uptime alcanzable con arquitectura correcta y observabilidad integrada</div>
          </div>
          <div className="hs-item-sdd card-premium">
            <div className="hs-num green">&lt;200ms</div>
            <div className="hs-label">p99 de respuesta sostenible en 100k+ RPM con patrones de diseño correctos</div>
          </div>
          <div className="hs-item-sdd card-premium">
            <div className="hs-num tq">16+</div>
            <div className="hs-label">años en ingeniería de software en producción real a escala</div>
          </div>
        </div>
      </div>
      
      {/* ═══ LA BRECHA ═══ */}
      <section className="brecha">
        <div className="container-sdd">
          <div className="sec-eyebrow">el problema real</div>
          <h2 className="sec-h">La IA genera código rápido.<br /><em>El sistema sin estructura lo rompe igual.</em></h2>
          <div className="rule-sdd"></div>
          <p className="sec-lead">
            La mayoría de los equipos que no llegan al 70% no tienen un problema de herramientas.
            Tienen un problema de <strong>sistema</strong>: usan la IA como un autocomplete glorificado
            en lugar de como un ejecutor de especificaciones precisas. Y los que sí llegan al porcentaje mínimo
            acumulan deuda técnica que explota en producción. El 90% es posible cuando el sistema que rodea
            a la IA está diseñado para eso desde el principio.
          </p>

          <div className="brecha-grid">
            <div className="bg-cell card-premium">
              <div className="bgc-label bad">Sin SDD — patrón que falla <span>modo actual</span></div>
              <div className="bgc-items list-premium">
                <div className="bgc-item">
                  <span className="bgci-icon">⚡</span>
                  <div className="bgci-text">
                    <strong>El dev pide código sin spec</strong>
                    La IA genera algo que funciona en el happy path. Las edge cases, los contratos de la arquitectura hexagonal y los patrones de la base de código quedan a interpretación del modelo.
                  </div>
                </div>
                <div className="bgc-item">
                  <span className="bgci-icon">🔄</span>
                  <div className="bgci-text">
                    <strong>El reviewer rechaza el PR</strong>
                    La capa de dominio filtra hacia la infraestructura. No hay unit tests con cobertura adecuada. El naming no sigue la convención del repositorio. Vuelta a fojas cero.
                  </div>
                </div>
                <div className="bgc-item">
                  <span className="bgci-icon">🔥</span>
                  <div className="bgci-text">
                    <strong>Lo que llega a producción introduce latencia</strong>
                    Una query sin índice. Una llamada síncrona que debía ser async. Un retry sin backoff exponencial. La plataforma de observabilidad lo detecta. El incidente se abre. El equipo pierde el sprint.
                  </div>
                </div>
                <div className="bgc-item">
                  <span className="bgci-icon">📉</span>
                  <div className="bgci-text">
                    <strong>La métrica de IA no sube</strong>
                    El dev deja de usar IA para tareas complejas porque el rechazo tiene costo. El porcentaje se estanca en 30-40%. La exigencia persiste.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cell card-premium">
              <div className="bgc-label good">Con SDD + Multiagente — patrón que funciona <span>objetivo</span></div>
              <div className="bgc-items list-premium">
                <div className="bgc-item">
                  <span className="bgci-icon">📋</span>
                  <div className="bgci-text">
                    <strong>El agente de especificación genera la spec antes de ejecutar</strong>
                    Contratos de arquitectura, criterios de cobertura, restricciones de seguridad, benchmarks de performance. Todo definido antes de escribir una línea.
                  </div>
                </div>
                <div className="bgc-item">
                  <span className="bgci-icon">⚙️</span>
                  <div className="bgci-text">
                    <strong>El agente de generación construye contra la spec</strong>
                    Código que respeta la arquitectura hexagonal, el clean code del repositorio, los design patterns acordados y las restricciones de seguridad. Sin interpretación libre.
                  </div>
                </div>
                <div className="bgc-item">
                  <span className="bgci-icon">✅</span>
                  <div className="bgci-text">
                    <strong>El agente de validación verifica antes del PR</strong>
                    Cobertura de tests, análisis estático, benchmark de latencia, verificación de inyección de dependencias, ausencia de vectores OWASP comunes. El PR llega limpio al reviewer.
                  </div>
                </div>
                <div className="bgc-item">
                  <span className="bgci-icon">📈</span>
                  <div className="bgci-text">
                    <strong>El porcentaje sube porque el ciclo es confiable</strong>
                    El dev usa IA en tareas complejas because el sistema garantiza que el output va a cumplir los estándares. La adopción se vuelve hábito, no riesgo.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="brecha-stat card-premium">
            <div className="bst-num">&lt;30%</div>
            <div className="bst-text">
              <strong>Porcentaje de uso real de IA en equipos sin metodología estructurada.</strong>
              La herramienta está instalada. El modelo está disponible. El presupuesto se aprobó.
              Pero sin un sistema que defina cómo se genera, cómo se valida y cómo se integra el código producido por IA,
              el porcentaje no sube y la calidad no se mantiene. El 70% es el mínimo exigido.
              El 90% es donde el sistema empieza a mostrar su verdadero potencial.
              El problema no es acceso a la tecnología: es el sistema que la rodea.
            </div>
          </div>
        </div>
      </section>

      {/* SISTEMA MULTIAGENTE SEGO AQUI */}
      <section className="multiagente" id="sistema">
        <div className="container-sdd">
          <div className="sec-eyebrow">el sistema</div>
          <h2 className="sec-h">SDD + Sistema Multiagente<br /><em>para ingeniería de producción</em></h2>
          <div className="rule-sdd"></div>
          <p className="sec-lead">
            SDD (Specs Driven Development) invierte el orden: <strong>primero se especifica con precisión qué construir, cómo se verifica y cuándo está terminado. Recién entonces la IA ejecuta.</strong> Un ecosistema de agentes especializados —cuya cantidad y roles varían según la complejidad de cada tarea— reemplaza el ciclo especulativo de "generar, revisar, rechazar, regenerar" por un ciclo determinístico de "especificar, generar, validar, entregar". Cualquier miembro del equipo puede ejecutar el proceso completo, desde el análisis hasta el despliegue.
          </p>

          <div className="ma-layout">
            <div className="agent-stack">
              {/* Agentes... */}
              <div className="agent-card active card-premium">
                <div className="ac-header">
                  <span className="ac-num">AGENTE BASE · 01</span>
                  <span className="ac-name">Especificación</span>
                  <span className="ac-status acs-run">siempre presente</span>
                </div>
                <div className="ac-desc">
                  El primer agente de cualquier pipeline SDD. Recibe el requerimiento en lenguaje de negocio o técnico y produce un documento de especificación ejecutable antes de que cualquier otro agente escriba código. Sin esta especificación, el pipeline no arranca. Es el contrato que todos los agentes siguientes van a respetar.
                </div>
                <div className="ac-tags">
                  <span className="act">dominio · bounded context</span>
                  <span className="act">contratos de API</span>
                  <span className="act">acceptance criteria</span>
                  <span className="act">cobertura mínima requerida</span>
                  <span className="act">performance budget</span>
                  <span className="act">dependencias e interfaces</span>
                </div>
              </div>
              <div className="as-connector">↓ según complejidad: uno o más agentes intermedios ↓</div>
              <div className="agent-card active card-premium" style={{ border: '1px dashed rgba(25,191,191,0.2)', background: 'rgba(25,191,191,0.02)' }}>
                <div className="ac-header">
                  <span className="ac-num">AGENTES OPCIONALES</span>
                  <span className="ac-name">Según la complejidad de la tarea</span>
                  <span className="ac-status" style={{ background: 'rgba(194,137,42,0.1)', color: 'var(--ocre)' }}>se suman según necesidad</span>
                </div>
                <div className="ac-desc">
                  El pipeline escala verticalmente con la complejidad. Una tarea simple puede resolverse con 3 agentes. Una funcionalidad con integraciones externas, requisitos de seguridad específicos, lógica de despliegue propia o comportamiento complejo puede requerir 6, 7 u 8 agentes encadenados. El sistema se diseña para la tarea, no al revés.
                </div>
                <div className="ac-tags">
                  <span className="act">diseño de interfaz o contrato</span>
                  <span className="act">seguridad y análisis de vulnerabilidades</span>
                  <span className="act">conexiones externas e integraciones</span>
                  <span className="act">troubleshooting y diagnóstico</span>
                  <span className="act">preparación de despliegue</span>
                  <span className="act">documentación técnica</span>
                  <span className="act">revisión de performance</span>
                  <span className="act">análisis de logs y trazas</span>
                </div>
              </div>
              <div className="as-connector">↓ agente de ejecución ↓</div>
              <div className="agent-card active card-premium">
                <div className="ac-header">
                  <span className="ac-num">AGENTE BASE · 02</span>
                  <span className="ac-name">Generación de código</span>
                  <span className="ac-status acs-run">activo</span>
                </div>
                <div className="ac-desc">
                  Construye contra la especificación del primer agente y contra los outputs de cualquier agente intermedio que haya participado. El modelo de IA que ejecuta (Claude, Gemini u otro) recibe como input la spec completa: no interpreta libremente ni toma decisiones de diseño no acordadas. El lenguaje, el framework y las convenciones del repositorio están en la spec, no en el criterio del modelo.
                </div>
                <div className="ac-tags">
                  <span className="act">agnóstico al lenguaje</span>
                  <span className="act">agnóstico al framework</span>
                  <span className="act">respeta convenciones del repo</span>
                  <span className="act">Cursor / Windsurf / Antigravity</span>
                  <span className="act">MCP + librerías internas</span>
                  <span className="act">patrones de diseño según spec</span>
                </div>
              </div>
              <div className="as-connector">↓ validación ↓</div>
              <div className="agent-card active card-premium">
                <div className="ac-header">
                  <span className="ac-num">AGENTE BASE · 03</span>
                  <span className="ac-name">Validación de criterios</span>
                  <span className="ac-status acs-val">validando</span>
                </div>
                <div className="ac-desc">
                  Valida el código del agente de generación contra los criterios definidos en la especificación. El criterio central es objetivo: la cobertura de tests debe superar el 95%. Si algo no cumple, el ciclo vuelve al agente de generación con la discrepancia documentada. No hay subjetividad en la validación: o cumple los criterios o no los cumple.
                </div>
                <div className="ac-tags">
                  <span className="act">coverage ≥95%</span>
                  <span className="act">análisis estático</span>
                  <span className="act">boundary violations</span>
                  <span className="act">latency benchmark</span>
                  <span className="act">CI/CD pipeline agnóstico</span>
                  <span className="act">PR automated report</span>
                </div>
              </div>
              <div className="as-connector">──── PR listo para reviewer ────</div>
              <div className="agent-card output card-premium">
                <div className="ac-header">
                  <span className="ac-num">OUTPUT</span>
                  <span className="ac-name">PR listo para reviewer humano</span>
                  <span className="ac-status acs-out">entregado</span>
                </div>
                <div className="ac-desc">
                  El PR llega al reviewer humano con el código que cumple la spec, tests con cobertura verificada ≥95%, documentación del approach técnico y resultados del análisis del pipeline. El revisor evalúa decisiones de negocio y arquitectura, no corrige errores estructurales evitables. <strong>Cualquier miembro del equipo puede ejecutar este proceso completo: no hay agentes configurados por perfil.</strong>
                </div>
                <div className="ac-tags">
                  <span className="act">spec compliance report</span>
                  <span className="act">coverage ≥95% verificado</span>
                  <span className="act">performance results</span>
                  <span className="act">ticket vinculado</span>
                  <span className="act">review-ready</span>
                </div>
              </div>
            </div>

            <div className="ma-points">
              <div className="map-item">
                <div className="map-eyebrow">accesible para cualquier miembro del equipo</div>
                <div className="map-title">Un dev ejecuta el pipeline completo, de la spec al despliegue</div>
                <div className="map-desc">
                  No hay agentes configurados por perfil ni flujos distintos para seniors y juniors. <strong>El pipeline SDD es ejecutable por cualquier integrante del equipo: el sistema hace el trabajo pesado de validación.</strong> Lo que varía según la complejidad de la tarea no es quién ejecuta el pipeline, sino cuántos agentes intermedios participa entre la spec y el código. Una tarea simple activa 3 agentes. Una funcionalidad con integraciones externas, seguridad o lógica de despliegue compleja puede activar 6 u 8.
                </div>
              </div>
              <div className="map-item">
                <div className="map-eyebrow">por qué funciona</div>
                <div className="map-title">La calidad viene del sistema, no del modelo de IA</div>
                <div className="map-desc">
                  Cualquier modelo de IA —Claude, Gemini u otro— en un sistema sin estructura produce los mismos problemas: interpreta libremente, toma decisiones de arquitectura no acordadas, no cubre edge cases que no se le pidieron explícitamente. <strong>Con la spec del primer agente como input, el mismo modelo genera código que pasa la validación en el primer ciclo el 80%+ del tiempo.</strong> La diferencia no está en el modelo. Está en lo que le dás para trabajar.
                </div>
              </div>
              <div className="map-item">
                <div className="map-eyebrow">arquitectura y patrones</div>
                <div className="map-title">Las capas se respetan porque están en la spec, no en la memoria del dev</div>
                <div className="map-desc">
                  El problema más común con código generado por IA en proyectos con arquitectura definida es que el modelo mezcla capas o viola los contratos entre componentes. <strong>La spec del primer agente define los boundaries explícitamente —cualquiera sea la arquitectura del equipo— y el agente de validación verifica que no se cruzaron.</strong> No hay PRs rechazados por violaciones de contrato que el sistema podría haber detectado antes.
                </div>
              </div>
              <div className="map-item">
                <div className="map-eyebrow">seguridad</div>
                <div className="map-title">Los vectores de seguridad se verifican antes del merge, no después del incidente</div>
                <div className="map-desc">
                  En entornos con alto tráfico o datos sensibles de usuario, la seguridad no puede quedar para la revisión manual del reviewer. <strong>El agente de validación verifica —con las herramientas de análisis estático del stack del equipo— que el código no introduce vectores conocidos antes de que el PR llegue al reviewer humano.</strong> El reviewer humano se enfoca en las decisiones de arquitectura y negocio que sí requieren criterio.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESO ─── */}
      <section className="proceso">
        <div className="container-sdd">
          <div className="sec-eyebrow">implementación</div>
          <h2 className="sec-h">De cero a sistema operativo<br /><em>en el equipo en cuatro semanas.</em></h2>
          <div className="rule-sdd"></div>
          <p className="sec-lead">
            La adopción de SDD en un equipo no es una migración de herramientas. Es un cambio en el orden en que se hace el trabajo. El proceso está diseñado para que el equipo lo incorpore como hábito mientras sigue entregando, sin freezar sprints ni crear deuda de proceso.
          </p>

          <div className="timeline-premium mt-12">
            {[
              { num: '01', title: 'Auditoría', dur: 'Sem. 1', desc: 'Cómo usa IA el equipo hoy, dónde se rechazan PRs, dónde produce alucinaciones y errores que llegan a producción.' },
              { num: '02', title: 'Relevamiento', dur: 'Sem. 2', desc: 'Arquitectura, funcionalidades, stack, estructura de desarrollo, patrones y protocolos del equipo.' },
              { num: '03', title: 'Configuración', dur: 'Sem. 3', desc: 'Cursor / Windsurf / Antigravity con reglas del proyecto, MCPs, Skills y templates de spec por stack.', highlight: true },
              { num: '04', title: 'Piloto', dur: 'Sem. 4', desc: 'Ciclo completo en una tarea real del sprint. Iterar hasta que el pipeline pase en primer ciclo consistentemente.' },
              { num: '05', title: 'Adopción', dur: 'Sem. 5', desc: 'Capacitación del equipo completo. Cualquier miembro puede ejecutar el pipeline de principio a fin.' },
              { num: '06', title: 'Métricas', dur: 'Sem. 6–8', desc: 'Porcentaje de código IA por PR, tasa de primer-pass, tiempo de ciclo. Ajuste del sistema según datos reales.' }
            ].map((step, i) => (
              <div key={i} className={`timeline-step-premium ${step.highlight ? 'active' : ''}`}>
                <div className="timeline-marker-p">
                  <div className="timeline-dot-p">{step.num}</div>
                  <div className="timeline-line-p"></div>
                </div>
                <div className="timeline-content-premium card-premium">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                  <span className="step-tag">{step.dur}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="proc-details">
            <div className="pd-card">
              <div className="pd-step-mono">Etapa 01 — Auditoría del flujo actual · Sem. 1</div>
              <div className="pd-title">El sistema no se puede mejorar si no se sabe exactamente cómo funciona hoy</div>
              <div className="pd-body">
                La auditoría inicial mapea tres dimensiones: <strong>cómo usa IA el equipo hoy</strong> —qué hace bien, dónde el output no pasa el pipeline—, <strong>dónde se producen los rechazos de PR</strong> —violaciones de contrato, cobertura insuficiente, problemas de diseño, convenciones rotas— y <strong>dónde la IA produce alucinaciones o errores que llegan a producción</strong>. Este tercer punto es el más crítico: hay una diferencia entre código que el reviewer detecta y rechaza, y código que pasa el review y falla en producción. Con ese mapa completo, la configuración del sistema multiagente se ajusta exactamente a los gaps del equipo.
              </div>
              <div className="pd-deliverables">
                <span className="pd-del">mapa de uso actual de IA</span>
                <span className="pd-del">análisis de PRs rechazados</span>
                <span className="pd-del">registro de alucinaciones en producción</span>
                <span className="pd-del">gap report de calidad</span>
              </div>
            </div>

            <div className="pd-card dark">
              <div className="pd-step-mono">Etapa 02 — Relevamiento de funcionamiento y protocolos · Sem. 2</div>
              <div className="pd-title">Sin entender la arquitectura real del equipo, el sistema de agentes no puede respetar sus contratos</div>
              <div className="pd-body">
                El relevamiento cubre la arquitectura del sistema, las funcionalidades del dominio, el stack técnico, la estructura del repositorio, los patrones de diseño adoptados y los protocolos de desarrollo del equipo. <strong>Este relevamiento es el insumo principal para el agente de especificación: sin él, el agente genera specs genéricas que no respetan los contratos reales del sistema.</strong> Con él, las specs son precisas para ese repositorio, ese equipo y esa arquitectura. No es un relevamiento teórico: se trabaja sobre el código y la documentación real del equipo.
              </div>
              <div className="pd-deliverables">
                <span className="pd-del">mapa de arquitectura relevada</span>
                <span className="pd-del">inventario de patrones y protocolos</span>
                <span className="pd-del">contratos de interfaz documentados</span>
                <span className="pd-del">base para templates de spec</span>
              </div>
            </div>

            <div className="pd-card dark">
              <div className="pd-step-mono">Etapa 03 — Configuración de agentes y herramientas · Sem. 3</div>
              <div className="pd-title">El sistema se configura para el equipo, no el equipo para el sistema</div>
              <div className="pd-body">
                La configuración cubre: <strong>Cursor, Windsurf o Antigravity</strong> con las reglas del proyecto que incorporan los contratos del relevamiento anterior, <strong>MCP servers</strong> para las librerías internas del equipo —accesibles desde el entorno del dev sin exponer código propietario—, <strong>Skills</strong> para los patrones y protocolos más frecuentes del repositorio, y <strong>templates de spec por tipo de tarea</strong>: un endpoint de API tiene una spec distinta a un worker asincrónico, que tiene una spec distinta a un componente de UI. Cualquier miembro del equipo puede ejecutar el pipeline completo con esta configuración.
              </div>
              <div className="pd-deliverables">
                <span className="pd-del">IDE configurado con reglas del proyecto</span>
                <span className="pd-del">MCP servers activos</span>
                <span className="pd-del">Skills del equipo cargadas</span>
                <span className="pd-del">templates de spec por tipo de tarea</span>
                <span className="pd-del">pipeline de validación integrado</span>
              </div>
            </div>

            <div className="pd-card">
              <div className="pd-step-mono">Etapa 04 — Tarea real con SDD · Sem. 4</div>
              <div className="pd-title">El sistema se valida con código de producción real, no con ejercicios de demo</div>
              <div className="pd-body">
                Se toma una tarea del sprint actual del equipo y se ejecuta el ciclo completo: especificación, generación, validación, PR. El objetivo es que el pipeline de validación apruebe el código en el primer ciclo. Si no lo hace, se identifica dónde falla la cadena —en los templates de spec, en las reglas del IDE o en la configuración del pipeline de validación— y se corrige antes de extender el sistema al equipo completo. <strong>El piloto no se considera exitoso hasta que el pipeline pasa sin intervención manual en el primer ciclo para la tarea elegida.</strong>
              </div>
              <div className="pd-deliverables">
                <span className="pd-del">primera tarea entregada con SDD</span>
                <span className="pd-del">informe de ciclos del pipeline</span>
                <span className="pd-del">ajustes post-piloto documentados</span>
                <span className="pd-del">sistema listo para rollout</span>
              </div>
            </div>

            <div className="pd-card dark">
              <div className="pd-step-mono">Etapa 05 — Adopción en todo el equipo · Sem. 5</div>
              <div className="pd-title">Cualquier miembro del equipo debe poder ejecutar el pipeline completo, de la spec al despliegue</div>
              <div className="pd-body">
                La capacitación es práctica, no teórica. Cada integrante del equipo ejecuta el pipeline sobre una tarea real con el sistema ya configurado. No hay flujos distintos por perfil: <strong>un dev junior y un tech lead usan el mismo pipeline.</strong> Lo que cambia con la experiencia no es el proceso sino la calidad de los inputs al agente de especificación. La capacitación incluye: cómo formular el requerimiento para que el agente de especificación produzca una spec ejecutable, cómo leer y validar la spec antes de pasarla al agente de generación, y cómo interpretar los resultados del agente de validación.
              </div>
              <div className="pd-deliverables">
                <span className="pd-del">capacitación práctica del equipo</span>
                <span className="pd-del">playbook del pipeline por tipo de tarea</span>
                <span className="pd-del">guía de troubleshooting del sistema</span>
                <span className="pd-del">primer sprint con adopción completa</span>
              </div>
            </div>

            <div className="pd-card">
              <div className="pd-step-mono">Etapa 06 — Métricas y ajuste fino · Sem. 6 a 8</div>
              <div className="pd-title">El sistema se ajusta con datos del equipo real, no con intuición</div>
              <div className="pd-body">
                Las métricas que importan: <strong>porcentaje de código generado por IA por PR</strong> (¿el porcentaje sube consistentemente?), <strong>tasa de primer-pass en el pipeline de validación</strong> (¿el código pasa sin ciclos de corrección?), <strong>tiempo de ciclo por tipo de tarea</strong> (¿el sistema acelera donde debe acelerar?) y <strong>tasa de rechazos de PR por calidad estructural</strong> (¿está bajando?). Con esas métricas, el ajuste de los templates de spec, las reglas del IDE y la configuración del pipeline es empírico. Al final de la semana 8, el equipo tiene el sistema operativo, las métricas establecidas y la capacidad de mantenerlo sin soporte externo.
              </div>
              <div className="pd-deliverables">
                <span className="pd-del">dashboard de métricas del equipo</span>
                <span className="pd-del">baseline sem. 1 vs resultados sem. 8</span>
                <span className="pd-del">ajustes finales documentados</span>
                <span className="pd-del">plan de optimización continua</span>
                <span className="pd-del">sistema autónomo del equipo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AUDIENCIA ─── */}
      <section className="audiencia">
        <div className="container-sdd">
          <div className="sec-eyebrow">para quién</div>
          <h2 className="sec-h">Quién necesita esto<br /><em>y quién todavía no.</em></h2>
          <div className="rule-sdd"></div>

          <div className="aud-grid">
            <div className="aud-panel card-premium dark">
              <div className="aud-header si">// tiene sentido si</div>
              <div className="aud-items list-premium">
                <div className="aud-item">
                  <span className="aud-ic si">✓</span>
                  <span>Tu equipo tiene la exigencia de <strong>superar el 70% de código generado con IA</strong> y hoy está estancado entre 20% y 40% porque el flujo sin estructura produce demasiados rechazos o alucinaciones que llegan a producción.</span>
                </div>
                <div className="aud-item">
                  <span className="aud-ic si">✓</span>
                  <span>Llegás al porcentaje mínimo pero <strong>la calidad no acompaña</strong>: el código IA pasa el review en el happy path y falla en los casos borde, los timeouts o los contratos entre capas. El objetivo de 90% parece inalcanzable con calidad.</span>
                </div>
                <div className="aud-item">
                  <span className="aud-ic si">✓</span>
                  <span>Trabajás con <strong>arquitectura definida con contratos entre capas</strong> —hexagonal, clean architecture u otra— y el código generado por IA viola esos contratos de forma consistente en los PRs.</span>
                </div>
                <div className="aud-item">
                  <span className="aud-ic si">✓</span>
                  <span>Operás en entornos con <strong>100k+ RPM y uptime 99%+</strong> y necesitás que el sistema de generación de código sea tan riguroso como las exigencias de producción.</span>
                </div>
                <div className="aud-item">
                  <span className="aud-ic si">✓</span>
                  <span>Tenés <strong>observabilidad instalada</strong> pero el código nuevo no llega con los instrumentos necesarios porque no forman parte del contrato de generación. Lo corregís post-deploy.</span>
                </div>
                <div className="aud-item">
                  <span className="aud-ic si">✓</span>
                  <span>Querés que <strong>cualquier miembro del equipo</strong> —no solo los seniors— pueda ejecutar el pipeline completo de generación de código de calidad de producción, desde la spec hasta el despliegue.</span>
                </div>
              </div>
            </div>

            <div className="aud-panel">
              <div className="aud-header no">// no tiene sentido si</div>
              <div className="aud-items">
                <div className="aud-item">
                  <span className="aud-ic no">✕</span>
                  <span>Tu equipo <strong>no tiene una arquitectura definida</strong> con contratos claros entre componentes. SDD amplifica la calidad del proceso existente: si el proceso no existe, primero hay que diseñarlo.</span>
                </div>
                <div className="aud-item">
                  <span className="aud-ic no">✕</span>
                  <span>Ya superás consistentemente el <strong>90% de código generado con IA con cobertura 95%+ verificada</strong> y el pipeline de primer-pass es estable. En ese caso tenés el sistema resuelto.</span>
                </div>
                <div className="aud-item">
                  <span className="aud-ic no">✕</span>
                  <span>Buscás una <strong>solución de una sesión de capacitación</strong>. El engagement requiere auditoría, relevamiento, configuración, piloto y ajuste. El cambio de hábito toma 8 semanas reales, no una tarde.</span>
                </div>
                <div className="aud-item">
                  <span className="aud-ic no">✕</span>
                  <span>Tu equipo <strong>nunca instaló ni probó las herramientas de generación de código</strong> con IA. El punto de partida mínimo para implementar SDD es que el equipo haya experimentado con ellas, aunque sea informalmente.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GARANTÍA ─── */}
      <section className="garantia">
        <div className="container-sdd">
          <div className="sec-eyebrow">garantía</div>
          <h2 className="sec-h">Lo que se compromete<br /><em>y lo que no.</em></h2>
          <div className="rule-sdd"></div>

          <div className="gar-layout">
            <div className="gar-main-card card-premium">
              <div className="gar-badge">Garantía de adopción medible</div>
              <div className="gar-title">Si en la semana 6 el equipo no supera el 60% de código generado con IA con tasa de primer-pass en el pipeline de validación superior al 70%, continuamos el acompañamiento sin costo adicional hasta la semana 8.</div>
              <div className="gar-text">
                Esta garantía no es un número inventado. Es la consecuencia lógica de un sistema que fue validado primero en proyectos propios antes de implementarse en equipos de terceros. <strong>Si la auditoría fue correcta, el relevamiento fue completo y la configuración del sistema es precisa, los números se alcanzan en el plazo.</strong>
                <br /><br />
                Lo que esta garantía cubre: porcentaje de código AI-generated por PR, tasa de primer-pass en el pipeline de validación automatizado, y reducción medible de PRs rechazados por problemas de calidad estructural.
                <br /><br />
                Lo que no cubre: métricas de producción que dependen de factores externos al proceso de generación —inestabilidad de infraestructura, fallas de terceros, cambios de requerimientos de negocio en producción— ni equipos que no completan las etapas de auditoría y relevamiento con la profundidad necesaria.
              </div>
            </div>

            <div className="gar-points">
              <div className="gar-pt">
                <div className="gar-pt-icon">✓</div>
                <div>
                  <div className="gar-pt-title">Criterios definidos antes de empezar</div>
                  <div className="gar-pt-desc">El baseline se mide en la auditoría inicial. El objetivo se define antes del setup. No hay ambigüedad en qué significa éxito al final de las 8 semanas.</div>
                </div>
              </div>
              <div className="gar-pt">
                <div className="gar-pt-icon">✓</div>
                <div>
                  <div className="gar-pt-title">Piloto en código de producción real</div>
                  <div className="gar-pt-desc">El sistema se valida con una tarea real del sprint del equipo antes del rollout general. Si el piloto no cumple los criterios, no se avanza al rollout: se ajusta el sistema.</div>
                </div>
              </div>
              <div className="gar-pt">
                <div className="gar-pt-icon">✓</div>
                <div>
                  <div className="gar-pt-title">Configuración específica al stack real del equipo</div>
                  <div className="gar-pt-desc">No hay templates genéricos. La configuración del sistema multiagente usa las convenciones reales del repositorio, la arquitectura relevada y las herramientas existentes del equipo.</div>
                </div>
              </div>
              <div className="gar-pt">
                <div className="gar-pt-icon">✓</div>
                <div>
                  <div className="gar-pt-title">El sistema es autónomo al finalizar</div>
                  <div className="gar-pt-desc">Al terminar las 8 semanas, el equipo tiene los playbooks, las reglas de proyecto configuradas y las guías para operar y mantener el sistema sin depender de soporte externo.</div>
                </div>
              </div>
              <div className="gar-pt">
                <div className="gar-pt-icon">✓</div>
                <div>
                  <div className="gar-pt-title">Si la auditoría concluye que SDD no es la solución, lo decimos</div>
                  <div className="gar-pt-desc">Si el problema del equipo no es de metodología de generación sino de arquitectura base o de proceso de review, lo reportamos en la auditoría y no avanzamos al engagement completo.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="faq">
        <div className="container-sdd">
          <div className="sec-eyebrow">preguntas frecuentes</div>
          <h2 className="sec-h">Lo que se pregunta<br /><em>antes de la primera sesión.</em></h2>
          <div className="rule-sdd"></div>

          <div className="faq-list">
            <details>
              <summary>
                ¿SDD funciona con cualquier lenguaje o solo con ciertos stacks?
                <span className="fq-icon">+</span>
              </summary>
              <div className="fq-body">
                SDD es agnóstico al lenguaje y al stack. Lo que varía es la configuración del agente de especificación y del agente de validación según el contexto técnico del equipo. <strong>Un servicio con arquitectura hexagonal tiene una spec distinta a un componente de frontend, que tiene una spec distinta a un worker asincrónico.</strong> Los templates de spec, las reglas de análisis estático y los criterios de cobertura se configuran en la etapa de relevamiento y configuración, a partir de la arquitectura real del equipo, no de una plantilla genérica.
              </div>
            </details>

            <details>
              <summary>
                ¿Cuántos agentes tiene el sistema? ¿Es siempre 3?
                <span className="fq-icon">+</span>
              </summary>
              <div className="fq-body">
                El mínimo son 3 agentes —especificación, generación y validación— que cubren el caso base de cualquier tarea. Pero el sistema escala con la complejidad: <strong>una funcionalidad con integraciones externas, requisitos de seguridad específicos, lógica de despliegue propia o troubleshooting de comportamiento complejo puede requerir agentes adicionales</strong> para diseño de contratos, análisis de seguridad, preparación de despliegue, diagnóstico de dependencias externas y otros roles. El número de agentes no es fijo: se determina en la etapa de especificación de cada tarea.
              </div>
            </details>

            <details>
              <summary>
                ¿Cualquier dev puede ejecutar el pipeline completo o solo los seniors?
                <span className="fq-icon">+</span>
              </summary>
              <div className="fq-body">
                Cualquier miembro del equipo. No hay agentes configurados por perfil ni flujos distintos para juniors y seniors. <strong>Lo que cambia con la experiencia es la calidad de los inputs al agente de especificación, no el proceso en sí.</strong> Un dev con más contexto técnico va a formular el requerimiento con mayor precisión y la spec resultante va a ser más rica. Pero el pipeline completo —de la spec al despliegue— es ejecutable por cualquier integrante del equipo desde la semana 5.
              </div>
            </details>

            <details>
              <summary>
                ¿Cómo se integra con el proceso de review humano existente?
                <span className="fq-icon">+</span>
              </summary>
              <div className="fq-body">
                SDD no reemplaza el review humano: lo complementa. <strong>El reviewer recibe PRs que ya pasaron el pipeline de validación automatizado: cobertura ≥95% verificada, análisis estático limpio, benchmark de performance aprobado, contratos de arquitectura verificados.</strong> Eso libera al reviewer para enfocarse en decisiones que sí requieren criterio humano: coherencia con la visión del producto, trade-offs de arquitectura, comportamiento en casos de negocio no contemplados en los tests. El tiempo de review baja y su calidad sube.
              </div>
            </details>

            <details>
              <summary>
                ¿Qué pasa con el MCP y las librerías internas que no son públicas?
                <span className="fq-icon">+</span>
              </summary>
              <div className="fq-body">
                El setup del MCP server se hace sobre el entorno del equipo, sin que las librerías internas salgan del entorno corporativo. <strong>El agente de generación accede a la documentación y las interfaces de las librerías internas a través del MCP server configurado localmente.</strong> El proceso de configuración no requiere exponer código propietario a ningún servicio externo. Cursor, Windsurf y Antigravity funcionan con el MCP server corriendo en la máquina del dev o en el entorno de CI del equipo.
              </div>
            </details>

            <details>
              <summary>
                ¿Cuánto tiempo requiere del equipo durante las 8 semanas?
                <span className="fq-icon">+</span>
              </summary>
              <div className="fq-body">
                El engagement está diseñado para no interrumpir la entrega del equipo. <strong>La semana 1 (auditoría) requiere entre 3 y 5 horas del tech lead o referente técnico.</strong> La semana 2 (relevamiento) requiere sesiones de trabajo sobre el código y la documentación real: 2 a 3 horas. Las semanas 3 y 4 (configuración y piloto) requieren 1 a 2 horas por sesión, 2 veces por semana. La semana 5 (adopción) incluye sesiones prácticas de 90 minutos para el equipo completo. Las semanas 6 a 8 son de seguimiento y ajuste: revisiones semanales de 30 a 45 minutos.
              </div>
            </details>

            <details>
              <summary>
                ¿El sistema funciona igual si el equipo usa herramientas de observabilidad distintas?
                <span className="fq-icon">+</span>
              </summary>
              <div className="fq-body">
                Sí. El sistema es agnóstico a la plataforma de observabilidad. <strong>La spec define qué instrumentar —métricas, trazas, alertas— y el agente de generación implementa esos instrumentos usando las librerías y los patrones de la plataforma que el equipo ya usa.</strong> No se requiere cambiar de herramienta de observabilidad ni agregar dependencias nuevas. Si el equipo ya tiene APM configurado, la spec incluye cómo el código nuevo se integra a ese APM existente.
              </div>
            </details>

            <details>
              <summary>
                ¿Hay diferencia entre implementar esto para un dev individual y para un equipo completo?
                <span className="fq-icon">+</span>
              </summary>
              <div className="fq-body">
                Sí, hay dos modalidades. <strong>Para un dev o tech lead individual</strong> que quiere aplicar SDD en su flujo personal antes del rollout al equipo: el proceso se acota a 3 o 4 semanas, se enfoca en el stack que usa esa persona y produce las configuraciones y guías que luego puede propagar al equipo por su cuenta. <strong>Para el equipo completo</strong> (la modalidad estándar de 8 semanas): el proceso incluye la auditoría del flujo grupal, el relevamiento de arquitectura, la configuración de herramientas compartidas, la capacitación del equipo y las métricas de seguimiento. Si tenés dudas sobre cuál aplica a tu caso, la primera sesión de diagnóstico lo aclara.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-sdd" id="cta">
        <div className="cta-inner">
          <div>
            <div className="sec-eyebrow">próximo paso</div>
            <h2 className="cta-h2">
              30 minutos para saber<br />
              si <span className="tq">SDD es la solución</span><br />
              para tu equipo.
            </h2>
            <p className="cta-desc">
              En la primera sesión hacemos una auditoría rápida de tres puntos: dónde está hoy el porcentaje de uso de IA en el equipo, dónde se producen los rechazos de PR o las alucinaciones que llegan a producción, y qué tan definida está la arquitectura para que el sistema multiagente la pueda respetar. <strong>Con esos tres datos, confirmamos si SDD cierra la brecha o si el problema tiene otro origen.</strong> Si la conclusión es que no aplica, lo decimos en esa misma sesión y no hay siguiente paso.
            </p>
            <div className="cta-note">
              <span style={{ color: 'var(--turquesa)', fontSize: '14px' }}>→</span>
              <p className="cta-note-text">
                <strong>16 años en ingeniería de software en producción real a escala.</strong> Lideré la adopción de IA generativa en un equipo de alta exigencia hasta el 100% de adopción, con 70% de código generado por IA y reducción del 40% en tiempo de entrega. El objetivo siempre fue el 90%+. Ese proceso, adaptado a tu stack y tu equipo, es lo que implementamos.
              </p>
            </div>
          </div>

          <div className="cta-card card-premium">
            <div className="cta-card-header">
              <div className="cta-card-title">Primera sesión sin costo</div>
              <div className="cta-card-sub">30 min · Remoto · Sin compromiso</div>
            </div>
            <div className="cta-options">
              <Link className="co-opt" href="/contacto?asunto=SDD Engineering" style={{ borderColor: 'rgba(25,191,191,0.3)', background: 'rgba(25,191,191,0.05)' }}>
                <span className="co-icon">💬</span>
                <div className="co-info">
                  <span className="co-name" style={{ color: 'var(--turquesa)' }}>Hablar sobre mi equipo</span>
                  <span className="co-sub">dariosaldano.com.ar/contacto</span>
                </div>
                <span className="co-arr" style={{ color: 'var(--turquesa)', fontSize: '16px' }}>→</span>
              </Link>
            </div>
            <div className="cta-card-footer">Sin propuesta automática · Sin demo enlatada · Primera sesión sin costo</div>
          </div>
        </div>
      </section>

      {/* ─── STACK ─── */}
      <section className="stack">
        <div className="container-sdd">
          <div className="sec-eyebrow">integración técnica</div>
          <h2 className="sec-h">Todo tu stack existente.<br /><em>Sin reemplazar nada.</em></h2>
          <div className="rule-sdd"></div>
          <p className="sec-lead">
            SDD se integra al flujo de trabajo existente del equipo. No reemplaza las herramientas ni los procesos. <strong>Los potencia con la capa de especificación que hace que la IA genere código que pasa el proceso, no que lo trabe.</strong>
          </p>

          <div className="stack-grid">
            <div className="sg-cell">
              <div className="sgc-head">
                <div className="sgc-icon">⚡</div>
                <div>
                  <div className="sgc-title">IDE + Modelos IA</div>
                  <div className="sgc-sub">Agnóstico al proveedor</div>
                </div>
              </div>
              <div className="sgc-items">
                <div className="sgci"><strong>Cursor</strong> — agent mode con context del proyecto</div>
                <div className="sgci"><strong>Windsurf</strong> — Cascade para flujos multi-archivo</div>
                <div className="sgci"><strong>Antigravity</strong> — pipelines multiagente complejos</div>
                <div className="sgci"><strong>Claude / Gemini / GPT</strong> — cualquier modelo compatible</div>
                <div className="sgci">Reglas de proyecto en <code className="mono">.rules</code> con spec del equipo</div>
                <div className="sgci">MCP servers para librerías internas del repo</div>
              </div>
            </div>

            <div className="sg-cell">
              <div className="sgc-head">
                <div className="sgc-icon">🔧</div>
                <div>
                  <div className="sgc-title">Lenguajes y Arquitectura</div>
                  <div className="sgc-sub">Agnóstico al stack</div>
                </div>
              </div>
              <div className="sgc-items">
                <div className="sgci">SDD funciona con <strong>cualquier lenguaje</strong> que tenga herramientas de análisis estático</div>
                <div className="sgci">La spec define las convenciones: el modelo las respeta</div>
                <div className="sgci">Hexagonal · Clean Arch · CQRS · Event-driven · y otros</div>
                <div className="sgci">Los patrones de diseño van en la spec, no en el criterio del modelo</div>
                <div className="sgci">Monolito · Microservicios · Serverless · cualquier topología</div>
                <div className="sgci">El agente de generación adapta su output al contexto del repo</div>
              </div>
            </div>

            <div className="sg-cell">
              <div className="sgc-head">
                <div className="sgc-icon">📊</div>
                <div>
                  <div className="sgc-title">Observabilidad y CI/CD</div>
                  <div className="sgc-sub">Agnóstico a la plataforma</div>
                </div>
              </div>
              <div className="sgc-items">
                <div className="sgci">Cualquier plataforma de <strong>APM y trazado distribuido</strong></div>
                <div className="sgci">Cualquier sistema de <strong>dashboards y alertas</strong></div>
                <div className="sgci">GitHub Actions · GitLab CI · Jenkins · o el pipeline existente</div>
                <div className="sgci">La spec define qué instrumentar: el equipo usa su plataforma</div>
                <div className="sgci">Rollback policy y feature flags documentados en la spec de deploy</div>
                <div className="sgci">El agente de validación integra con el CI/CD existente del equipo</div>
              </div>
            </div>
          </div>

          <div className="code-block">
            <div className="cb-header">
              <div className="cb-filename">hexagonal_spec_example.go — agente de especificación · output</div>
              <div className="cb-lang">hexagonal · SDD spec · cualquier lenguaje</div>
            </div>
            <div className="cb-body">
              <span className="cm">// SDD Spec — generada por agente de especificación antes de ejecutar</span><br />
              <span className="cm">// Agente de generación lee esta spec. Agente de validación valida contra esta spec.</span><br />
              <span className="cm">// No hay otro contrato. Cualquier dev del equipo ejecuta este pipeline.</span><br /><br />
              <span className="cm">// Domain: payments.refund</span><br />
              <span className="cm">// UseCase: ProcessRefund</span><br />
              <span className="cm">// Pattern: hexagonal · port+adapter · repository</span><br /><br />
              <span className="cm">// ACCEPTANCE CRITERIA:</span><br />
              <span className="cm">// 1. RefundPort.Process nunca toca infra directamente → debe usar RefundRepository (interface)</span><br />
              <span className="cm">// 2. Coverage ≥ 95% incluyendo error paths y timeouts (unit + integration)</span><br />
              <span className="cm">// 3. p99 latency ≤ 150ms @ 100k RPM — medido con benchmark table-test</span><br />
              <span className="cm">// 4. No direct DB calls en domain layer — todos via repository interface</span><br />
              <span className="cm">// 5. ctx.Done() handled → no goroutine leaks en cancelación</span><br />
              <span className="cm">// 6. Structured logging con trace_id para correlación en plataforma de observabilidad</span><br />
              <span className="cm">// 7. Sin strings hardcodeados con datos financieros en logs</span><br /><br />
              <span className="kw">type</span> <span className="ty">RefundPort</span> <span className="kw">interface</span> {'{'}<br />
              &nbsp;&nbsp;<span className="fn">Process</span>(ctx <span className="ty">context.Context</span>, req <span className="ty">RefundRequest</span>) (<span className="op">*</span><span className="ty">RefundResponse</span>, <span className="ty">error</span>)<br />
              {'}'}<br /><br />
              <span className="kw">type</span> <span className="ty">RefundRepository</span> <span className="kw">interface</span> {'{'}  <span className="cm">// infra adapter — NUNCA importar impl aquí</span><br />
              &nbsp;&nbsp;<span className="fn">FindByID</span>(ctx <span className="ty">context.Context</span>, id <span className="ty">string</span>) (<span className="op">*</span><span className="ty">Payment</span>, <span className="ty">error</span>)<br />
              &nbsp;&nbsp;<span className="fn">UpdateStatus</span>(ctx <span className="ty">context.Context</span>, id <span className="ty">string</span>, status <span className="ty">PaymentStatus</span>) <span className="ty">error</span><br />
              {'}'}<br /><br />
              <span className="cm">// Agente de validación verificará:</span><br />
              <span className="cm">// ✓ ProcessRefund recibe RefundRepository por inyección, no instancia concrete</span><br />
              <span className="cm">// ✓ Coverage: go test -coverprofile → mínimo 95% en todas las capas</span><br />
              <span className="cm">// ✓ Análisis estático: zero warnings en herramienta del equipo</span><br />
              <span className="cm">// ✓ Benchmark: p99 ≤ 150ms bajo carga simulada</span><br />
              <span className="cm">// ✓ Observabilidad: span iniciado al entry, closed en defer</span><br />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MÉTRICAS ─── */}
      <section className="metricas" id="metricas">
        <div className="container-sdd">
          <div className="sec-eyebrow">cómo se cumplen las exigencias</div>
          <h2 className="sec-h">Cada métrica tiene<br /><em>un mecanismo concreto.</em></h2>
          <div className="rule-sdd"></div>
          <p className="sec-lead">
            Las exigencias de producción no se cumplen con buenas intenciones ni con prompts creativos. Se cumplen <strong>diseñando el sistema de generación de código para que produzca, por default, outputs que las cumplan.</strong> Esto es lo que SDD + multiagente hace de forma sistemática.
          </p>

          <div className="metrics-grid">
            <div className="mg-card">
              <div className="mgc-eyebrow">exigencia mínima · objetivo real</div>
              <div className="mgc-req">
                <div className="mgc-req-val tq">70% → 90%</div>
                <div className="mgc-req-label">código generado por IA</div>
              </div>
              <div className="mgc-title">El 70% es el piso. El 90% es donde el sistema empieza a mostrar su potencial real.</div>
              <div className="mgc-desc">
                El dev evita usar IA en tareas complejas cuando el ciclo de corrección es costoso. <strong>Con SDD, el costo de corrección baja porque el agente de especificación aclara qué construir antes de que el agente de generación lo construya.</strong> Cuando el PR pasa el pipeline en primer intento consistentemente, el dev adopta el flujo para todo y el porcentaje sube naturalmente, sin forzarlo.
              </div>
              <div className="mgc-how">
                <div className="mgc-how-label">cómo se logra</div>
                <div className="mgc-how-list">
                  <div className="mgc-how-item">Spec precisa elimina la interpretación libre del modelo</div>
                  <div className="mgc-how-item">IDE en agent mode con reglas del proyecto en el contexto</div>
                  <div className="mgc-how-item">Ciclo spec→generación→validación reduce rechazos a &lt;20% en semana 3</div>
                  <div className="mgc-how-item">El dev mide su ratio en cada PR — visible en los insights del repo</div>
                </div>
              </div>
            </div>

            <div className="mg-card">
              <div className="mgc-eyebrow">exigencia · calidad del código</div>
              <div className="mgc-req">
                <div className="mgc-req-val green">95%+</div>
                <div className="mgc-req-label">cobertura de tests</div>
              </div>
              <div className="mgc-title">El agente de validación verifica cobertura real antes de cada PR, no después del incidente.</div>
              <div className="mgc-desc">
                <strong>La cobertura nominal y la cobertura real son cosas distintas.</strong> Un 95% de coverage que incluye los error paths, los timeouts y las condiciones de borde es cualitativamente diferente a un 95% de coverage en el happy path. La spec define qué paths deben estar cubiertos. El agente de validación no acepta el PR si no los están.
              </div>
              <div className="mgc-how">
                <div className="mgc-how-label">cómo se logra</div>
                <div className="mgc-how-list">
                  <div className="mgc-how-item">Acceptance criteria en spec incluye paths de error y casos borde</div>
                  <div className="mgc-how-item">Agente de validación ejecuta análisis estático con tolerancia cero</div>
                  <div className="mgc-how-item">PR bloqueado si cobertura &lt;95% o si análisis reporta issues críticos</div>
                  <div className="mgc-how-item">Violaciones de contrato entre capas detectadas antes del merge</div>
                </div>
              </div>
            </div>

            <div className="mg-card">
              <div className="mgc-eyebrow">exigencia · disponibilidad</div>
              <div className="mgc-req">
                <div className="mgc-req-val green">99%+</div>
                <div className="mgc-req-label">uptime objetivo</div>
              </div>
              <div className="mgc-title">La disponibilidad se diseña en la spec, no se reza en el deploy.</div>
              <div className="mgc-desc">
                <strong>El uptime cae por timeouts sin circuit breaker, retries sin backoff, recursos que no se liberan y deploys sin fallback.</strong> La spec incluye todos los patrones de resiliencia requeridos para el servicio. El agente de validación verifica que el código los implementa correctamente, no solo que compile.
              </div>
              <div className="mgc-how">
                <div className="mgc-how-label">cómo se logra</div>
                <div className="mgc-how-list">
                  <div className="mgc-how-item">Spec incluye circuit breaker, retry policy y timeout por servicio</div>
                  <div className="mgc-how-item">Agente de validación verifica manejo de contexto y graceful shutdown</div>
                  <div className="mgc-how-item">SLO dashboards configurados en la spec de cada servicio</div>
                  <div className="mgc-how-item">Política de rollback documentada en el agente de despliegue si aplica</div>
                </div>
              </div>
            </div>

            <div className="mg-card">
              <div className="mgc-eyebrow">exigencia · performance</div>
              <div className="mgc-req">
                <div className="mgc-req-val tq">&lt;200ms</div>
                <div className="mgc-req-label">p99 · 100k+ RPM</div>
              </div>
              <div className="mgc-title">El benchmark no es una prueba final. Es un criterio de aceptación desde el principio.</div>
              <div className="mgc-desc">
                <strong>Un servicio que pasa la validación funcional pero introduce una query ineficiente, una llamada bloqueante o un lock contencioso puede destruir el p99 bajo carga real.</strong> La spec define el budget de latencia por operación. El agente de validación ejecuta el benchmark antes del merge, no después de que la plataforma de observabilidad reporta la degradación.
              </div>
              <div className="mgc-how">
                <div className="mgc-how-label">cómo se logra</div>
                <div className="mgc-how-list">
                  <div className="mgc-how-item">Performance budget por endpoint en spec (p50 / p95 / p99)</div>
                  <div className="mgc-how-item">Benchmarks generados por agente de generación, validados por agente QA</div>
                  <div className="mgc-how-item">Verificación de queries ineficientes y llamadas bloqueantes en análisis estático</div>
                  <div className="mgc-how-item">Distributed tracing activo desde primer deploy a staging</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
