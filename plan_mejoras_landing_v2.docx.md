

**PLAN DE MEJORAS — LANDING PAGE SDD**

dariosaldano.com.ar/sdd-ingenieria-alto-escala

**Ajustes Listos para Implementar**

Versión 2 · Marzo 2026

| Este documento entrega el copy y las estructuras listas para copiar en cada sección de la landing. No requiere interpretación adicional: cada bloque indica qué reemplazar, por qué y con qué texto exacto. Los marcadores \[COMPLETAR\] señalan los únicos datos que deben ser llenados por Darío. |
| :---- |

| RESUMEN DE GAPS Y CAMBIOS |
| :---- |

| 1 | Prueba social — Cero validación externa BLOQUEADOR · Reformular experiencia MercadoLibre \+ testimonios |
| :---: | :---- |

| 2 | Claims exagerados — métricas sin contexto CREDIBILIDAD · Anclar números al origen real |
| :---: | :---- |

| 3 | Sin precio — ROI incalculable antes de la llamada CONVERSIÓN · Opción B \+ costo real de hacerlo interno |
| :---: | :---- |

| 4 | Propuesta técnica habilita la competencia interna RETENCIÓN · Reducir detalle \+ agregar sección make-vs-buy |
| :---: | :---- |

| 5 | Garantía que protege al consultor, no al cliente CONFIANZA · Reformular con riesgo del lado correcto \+ 6 semanas |
| :---: | :---- |

| 6 | Engagement de 8 semanas con carga excesiva para el equipo ADOPCIÓN · Reducir a 6 semanas, máx 1 hora diaria de interrupción |
| :---: | :---- |

| GAP 1 · PRUEBA SOCIAL |
| :---- |

## **Contexto del cambio**

No hay clientes externos de SDD todavía. La experiencia real es: 8 devs backend en Go sobre microservicios con arquitectura hexagonal en Mercado Libre, llegando al 100% de adopción de IA con 70% de código generado y 40% menos tiempo de entrega. Sin SDD formal — con vibe coding y adopción metodológica propia. Eso es lo que hay que comunicar: el origen honesto de la metodología, no un caso de consultoría que no ocurrió.

| Principio que guía estos cambios: la experiencia de MercadoLibre no se presenta como consultoría previa. Se presenta como el problema real que dio origen a SDD. Esa diferencia es la que no rompe la credibilidad cuando el cliente hace la pregunta correcta. |
| :---- |

## **PASO 1 — Nuevo copy: origen de SDD (reemplaza el párrafo del CTA final)**

| TEXTO ACTUAL A REEMPLAZAR:"Lideré la adopción de IA generativa en un equipo de alta exigencia hasta el 100% de adopción, con 70% de código generado por IA y reducción del 40% en tiempo de entrega. El objetivo siempre fue el 90%+. Ese proceso, adaptado a tu stack y tu equipo, es lo que implementamos." |
| :---- |

| TEXTO NUEVO — LISTO PARA IMPLEMENTAR:SDD nació de un problema concreto: liderar un equipo de 8 devs backend sobre múltiples microservicios con arquitectura hexagonal en Go, con la exigencia de llegar al 100% de adopción de IA y un mínimo de 70% de código generado — sin una metodología formal que lo hiciera posible.Llegamos al objetivo. No con un sistema. Con prueba y error, vibe coding, y muchos rechazos de PR antes de encontrar el orden correcto. La pregunta que me quedó después de eso fue la que generó SDD: ¿cuánto tiempo y cuántos ciclos de corrección se ahorra un equipo cuando especifica antes de ejecutar?Eso es lo que viene a instalar este engagement en tu equipo. |
| :---- |

## **PASO 2 — Testimonios de MercadoLibre para agregar en la landing**

Agregar una sección 'Quién validó este liderazgo' con los siguientes testimonios reales del período en Mercado Libre. Se recomiendan los tres primeros por ser los más específicos sobre capacidades técnicas y de gestión relevantes para el perfil SDD.

| "En Darío encontré a una persona enfocada en dar soluciones. Un líder de gestión que adquirió mucho conocimiento del producto y un background técnico que le empodera y lo enfoca a resultados. Le gusta documentar, dejar traza de su trabajo, convirtiéndose en referente natural de su entorno." — Project Leader, Mercado Libre  ·  Trabajó con Darío en el mismo equipo  ·  4 feb 2026 |
| :---- |

| "Me resultó muy valioso su interés por la innovación, especialmente su manejo de la IA, ayudándonos a entender cómo aprovechar estas herramientas en el día a día. Tiene facilidad para entender procesos complejos y estructurarlos de forma sencilla." — Project Leader, Mercado Libre  ·  Trabajó con Darío en el mismo equipo  ·  2 feb 2026 |
| :---- |

| "Darío se destacó por su sólido entendimiento del negocio, su versatilidad y su capacidad para liderar equipos en contextos regionales complejos. Impulsó y acompañó la implementación de nuevas features, asegurando entregas en tiempo y forma y alineadas con los objetivos del negocio." — Software Engineer, Mercado Libre  ·  Darío lo supervisaba  ·  2 feb 2026 |
| :---- |

| "Lo que más destaca de su gestión es su excepcional calidad humana. Es un estratega con un profundo conocimiento del negocio y una habilidad innata para la planificación y el control de actividades, asegurando siempre que los objetivos se cumplan sin perder de vista el bienestar del equipo." — Sr DevOps Engineer, Mercado Libre  ·  Darío lo supervisaba  ·  28 ene 2026 |
| :---- |

| "Dari fue un líder excepcional. Tiene una excelente lógica de negocio y un alto nivel técnico, lo que le permitía tomar muy buenas decisiones y guiar al equipo de forma clara y eficiente." — Desarrolladora Backend, Mercado Libre  ·  Darío lo supervisaba  ·  2 feb 2026 |
| :---- |

Nota de implementación: Los testimonios se ubican en la sección del CTA final, inmediatamente antes del botón de contacto. No en un carrusel. En texto plano, uno debajo del otro, con el nombre del rol, la empresa y la relación. El lector que llega al final de la página necesita validación humana, no otra métrica.

| GAP 2 · CLAIMS SIN CONTEXTO |
| :---- |

## **Contexto del cambio**

Las 4 métricas del hero (90%+, 95%+, 99%+, \<200ms) flotando sin anchor son ruido activo para el perfil técnico. El Senior las ignora. El Tech Lead las descarta como marketing. El problema no es el número: es que no tienen origen. La solución no es quitarlas: es anclarlas.

## **Hero — texto listo para reemplazar**

| TEXTO ACTUAL DEL HERO A REEMPLAZAR:"El 90% de código generado con IA es posible. El 70% es solo el inicio." |
| :---- |

| TEXTO NUEVO — LISTO PARA IMPLEMENTAR:El 70% de código generado con IA no es el techo. Es el piso donde el sistema empieza a mostrar su valor real.En un equipo de 8 devs backend sobre microservicios hexagonales en Go llegamos ahí con vibe coding. Sin especificación formal. Con ciclos de corrección que consumían el tiempo que la IA supuestamente ahorraba.SDD invierte el orden: primero la spec, después el código. Eso es lo que lleva el porcentaje del 70% al 90%+ sin acumular la deuda técnica que hace colapsar el primer número. |
| :---- |

## **Métricas del hero — reformulación con contexto**

Reemplazar los 4 KPIs sin contexto por un bloque de métricas ancladas. Formato sugerido para la landing:

| 70% → 90%+ | 95%+ | \<200ms p99 | 6 semanas |
| :---- | :---- | :---- | :---- |
| código IA. El 70% es el punto de partida donde el sistema empieza a diferenciarse del vibe coding. | cobertura de tests. Validada por el agente QA antes de cada PR, no después del incidente. | de respuesta sostenible. Definido como criterio de aceptación en la spec, no como meta de producción. | de 0 a sistema operativo. Con acompañamiento semanal y resultado entregado al cierre de cada semana. |

| GAP 3 · AUSENCIA DE PRECIO |
| :---- |

## **Contexto del cambio**

Se implementa la Opción B del documento anterior, potenciada: el comparador de costo incluye no solo las 4-6 semanas de implementación interna, sino también el tiempo previo de investigación y aprendizaje de la metodología y las herramientas. Un equipo que lo hace solo necesita primero aprender lo que el engagement ya trae incorporado.

## **Sección nueva — 'Lo que cuesta no resolver esto' (agregar antes del CTA)**

| TEXTO LISTO PARA IMPLEMENTAR:Antes de la primera sesión, el cálculo que hace cualquier Tech Lead es este: ¿lo hago interno o lo contrato?Si lo hacés internamente, el camino realista tiene tres fases:— 3 a 4 semanas de investigación: leer la documentación de Cursor en profundidad, testear configuraciones de reglas de proyecto, entender cómo funciona el agent mode con tu stack, y evaluar qué pipeline de validación tiene sentido para tu arquitectura. Ese tiempo sale del sprint o sale de alguien que trabaja de más.— 4 a 6 semanas de implementación y ajuste: configurar el sistema, correr el primer piloto, identificar dónde las specs son demasiado genéricas, ajustar los templates, volver a correr. Los errores de configuración más comunes son silenciosos: el sistema parece funcionar hasta que empezás a medir el primer-pass rate y los números no suben.Total: 7 a 10 semanas de un Senior dedicado parcialmente, más el costo de los ciclos de error que ya están documentados en el engagement.El engagement completo cuesta \[COMPLETAR: precio\]. Eso equivale aproximadamente a 3 semanas de trabajo dedicado de un Senior. Sin la curva de aprendizaje. Sin los errores que ya resolvimos. Y con el sistema instalado en 6 semanas en lugar de 10\. |
| :---- |

## **Nota de implementación**

\[COMPLETAR: precio del engagement\]. El rango sugerido para publicar es el fee equivalente a semanas de un Senior, no el número absoluto en USD. Ese framing hace la comparación directa sin que el número quede flotando sin contexto.

| GAP 4 · LA LANDING HABILITA LA COMPETENCIA INTERNA |
| :---- |

## **Contexto del cambio**

La propuesta técnica actual es tan detallada que un Tech Lead competente puede leer la landing y pensar 'entiendo el sistema, lo replico'. El objetivo no es ocultar la metodología. Es dejar de mostrar el manual de instrucciones y mostrar en cambio la curva de aprendizaje que costó recorrer. La diferencia entre el destino y el camino.

| Cambio clave: reducir el nivel de detalle operativo (cómo se configuran las reglas, cuántos agentes exactamente, qué hace cada uno paso a paso) y reemplazarlo por el qué y el por qué, no el cómo. El cómo vive en el engagement, no en la landing. |
| :---- |

## **Sección del sistema multiagente — qué recortar**

Las siguientes secciones contienen demasiado detalle operativo que habilita la replicación interna:

* La descripción paso a paso de cada agente con su output exacto (especificación, generación, validación) puede reducirse a: 'El sistema tiene tres momentos invariables: especificar antes de ejecutar, generar contra la spec, validar antes del PR. La cantidad de agentes intermedios entre esos tres momentos escala con la complejidad de la tarea.'

* El bloque de código hexagonal\_spec\_example.go puede mantenerse — demuestra el output. Lo que hay que sacar es la explicación línea por línea de cómo se configura el agente de especificación para producirlo.

* La descripción de las 6 etapas puede simplificarse: qué semana, qué resultado entregado, cuántas horas. Sin el detalle de qué herramientas se configuran ni cómo.

## **Sección nueva — 'Por qué no conviene hacerlo solo' (agregar después de la descripción del sistema)**

| TEXTO LISTO PARA IMPLEMENTAR:El sistema SDD no es un secreto. La lógica es pública: especificar antes de ejecutar, generar contra la spec, validar antes del PR. Cualquier equipo con un Senior motivado puede leerlo y decidir hacerlo interno.Lo que no está en la documentación de Cursor es esto:Los primeros templates de spec que generamos eran demasiado genéricos. El agente de generación los usaba para producir código que pasaba el análisis estático pero no los contratos de la arquitectura. Encontrar el nivel de granularidad correcto para que las specs sean ejecutables — ni tan abstractas que el modelo interprete libremente, ni tan detalladas que el proceso sea más lento que escribir el código a mano — tomó semanas de iteración con tipos de tareas reales.Eso está incorporado en el engagement. No como teoría. Como configuración específica para tu stack y tu arquitectura, validada en el piloto de la semana 4 antes del rollout.Si tenés un Senior con tiempo real disponible para investigar y absorber esa curva sin impactar el sprint, puede hacerlo. Si ese tiempo sale del equipo que está entregando, el costo es otro. |
| :---- |

| GAP 5 · GARANTÍA QUE PROTEGE AL CONSULTOR |
| :---- |

## **Contexto del cambio**

La garantía actual ('continuamos hasta semana 8 sin costo adicional') pone el riesgo del lado incorrecto: el consultor pone más tiempo, pero el equipo del cliente también. El costo real para el cliente no es el fee: es el tiempo de su gente. Se agrega además un check semanal con resultado entregado al cierre de cada semana, lo que convierte la garantía en un sistema de rendición de cuentas continua, no en una promesa final.

## **Sección garantía — texto listo para reemplazar**

| TEXTO ACTUAL A REEMPLAZAR:"Si en la semana 6 el equipo no supera el 60% de código generado con IA con tasa de primer-pass en el pipeline de validación superior al 70%, continuamos el acompañamiento sin costo adicional hasta la semana 8." |
| :---- |

| TEXTO NUEVO — LISTO PARA IMPLEMENTAR:Cada semana del engagement cierra con un entregable concreto. No con un informe de avance: con algo que el equipo puede usar desde el lunes siguiente.Al cierre de cada semana:— Semana 1: mapa de uso actual de IA del equipo \+ lista de fricciones identificadas— Semana 2: arquitectura relevada \+ contratos documentados \+ base para los templates de spec— Semana 3: IDE configurado con reglas del proyecto \+ MCPs activos \+ templates de spec por tipo de tarea— Semana 4: primera tarea entregada con SDD \+ informe del piloto \+ sistema ajustado para rollout— Semana 5: equipo completo operando el pipeline \+ playbook del proceso— Semana 6: dashboard de métricas \+ baseline sem. 1 vs. resultados \+ sistema autónomo entregadoSi al cierre de la semana 4 (piloto) el pipeline no pasa los criterios de aceptación definidos al inicio, podés cancelar el engagement sin costo adicional a partir de ese punto. Si al cierre de la semana 6 el equipo no supera el 60% de código IA con primer-pass \>70%, el fee de cierre se reduce proporcionalmente a la diferencia.El riesgo de que el sistema no funcione es mío. El tiempo de tu equipo es tuyo. |
| :---- |

## **Qué agregar en los checkmarks de la sección garantía**

Reemplazar los 5 checkmarks actuales por estos:

| ✓ Entregable semanal | Cada semana cierra con algo concreto que el equipo puede usar, no con un reporte de estado. |
| :---- | :---- |

| ✓ Check-in semana 4 | Después del piloto, punto de decisión. Si el sistema no cumple los criterios definidos al inicio, cancelación sin costo desde ese punto. |
| :---- | :---- |

| ✓ Reducción de fee | Si al cierre de la semana 6 no se alcanzan los objetivos pactados, el fee final se reduce en proporción a la brecha. |
| :---- | :---- |

| ✓ Criterios definidos antes de empezar | El baseline se mide en la auditoría inicial. El objetivo se define en la semana 1, antes de cualquier configuración. |
| :---- | :---- |

| ✓ Sistema autónomo al cierre | Al terminar la semana 6, el equipo tiene el playbook, las reglas y las guías para operar sin depender de soporte externo. |
| :---- | :---- |

| GAP 6 · DURACIÓN Y CARGA DEL EQUIPO |
| :---- |

## **Contexto del cambio**

El engagement pasa de 8 semanas a 6 semanas. El criterio de diseño para la carga del equipo es: máximo 1 hora diaria de interrupción al sprint. El equipo sigue entregando en paralelo. El engagement se instala en los márgenes del trabajo real, no en el centro.

## **Nueva estructura de 6 semanas — texto listo para reemplazar**

Reemplazar la sección 'De cero a sistema operativo en cuatro semanas' (que actualmente tiene 6 etapas en 8 semanas) por:

| SEM. | ETAPA | QUÉ OCURRE | CARGA DEL EQUIPO |
| :---- | :---- | :---- | :---- |
| **1** | Auditoría | Mapeo de uso actual de IA, análisis de PRs rechazados, identificación de alucinaciones que llegaron a producción. Entregable: gap report. | 3–5 h totales del Tech Lead. Sin impacto en el sprint. |
| **2** | Relevamiento | Arquitectura, stack, patrones, protocolos del repo. Trabajo sobre código y documentación real. Entregable: arquitectura relevada \+ contratos documentados. | 2–3 h totales del Tech Lead \+ 1 h del equipo para revisión. |
| **3** | Configuración | IDE con reglas del proyecto, MCPs, Skills, templates de spec por tipo de tarea, pipeline de validación. Entregable: sistema configurado listo para piloto. | 2 sesiones de 45 min con el Tech Lead. El resto es trabajo propio del engagement. |
| **4** | Piloto | Ciclo completo sobre una tarea real del sprint: spec → generación → validación → PR. Iterar hasta primer-pass. Entregable: informe del piloto \+ sistema ajustado. PUNTO DE CANCELACIÓN: si el piloto no cumple los criterios, el engagement se detiene aquí sin costo adicional. | 1 dev \+ Tech Lead, máx. 1 h/día durante 5 días hábiles. |
| **5** | Adopción | Capacitación práctica del equipo completo. Cada persona ejecuta el pipeline sobre una tarea real con el sistema configurado. Entregable: playbook del proceso \+ guía de troubleshooting. | 1 sesión de 60 min por persona. Único día de carga concentrada del engagement. |
| **6** | Métricas y cierre | Dashboard de métricas, baseline sem. 1 vs. resultados, ajustes finales, plan de optimización continua. Entregable: sistema autónomo \+ documentación de mantenimiento. | Revisión semanal de 30 min. Sin otro impacto en el sprint. |

## **Copy de la sección — texto listo para reemplazar**

| TEXTO NUEVO PARA EL INTRO DE LA SECCIÓN — LISTO PARA IMPLEMENTAR:De cero a sistema operativo en 6 semanas. Sin freezar sprints.El engagement está diseñado para funcionar en los márgenes del trabajo real del equipo, no en el centro. La carga máxima es 1 hora diaria de interrupción al sprint, concentrada en las semanas del piloto y la adopción. El resto del tiempo, el trabajo es propio del engagement: configuración, relevamiento, documentación.Cada semana cierra con un entregable concreto. Si al finalizar la semana 4 el piloto no cumple los criterios definidos al inicio, el engagement se detiene y no hay fee de cierre. |
| :---- |

## **Preguntas frecuentes — ajuste del bloque de tiempo**

| PREGUNTA ACTUAL A REEMPLAZAR:"¿Cuánto tiempo requiere del equipo durante las 8 semanas?"RESPUESTA ACTUAL: La semana 1 requiere entre 3 y 5 horas del tech lead... La semana 5 incluye sesiones prácticas de 90 minutos para el equipo completo... |
| :---- |

| PREGUNTA Y RESPUESTA NUEVAS — LISTAS PARA IMPLEMENTAR:¿Cuánto tiempo requiere del equipo durante las 6 semanas?El criterio de diseño del engagement es claro: máximo 1 hora diaria de interrupción al sprint. En la práctica, la carga se distribuye así:Semanas 1 y 2 (auditoría y relevamiento): 3 a 5 horas totales del Tech Lead, distribuidas en la semana. Sin impacto en el sprint del equipo.Semana 3 (configuración): 2 sesiones de 45 minutos con el Tech Lead. El resto es trabajo propio del engagement.Semana 4 (piloto): 1 dev \+ el Tech Lead, máximo 1 hora por día durante los 5 días hábiles de la semana. Es la semana de mayor carga concentrada.Semana 5 (adopción): 1 sesión de 60 minutos por persona del equipo. Es el único momento en que todo el equipo se detiene al mismo tiempo. En un equipo de 8 personas, son 8 horas totales, coordinables en dos días.Semana 6 (métricas y cierre): revisión semanal de 30 minutos. Sin otro impacto en el sprint. |
| :---- |

| HOJA DE RUTA DE IMPLEMENTACIÓN |
| :---- |

## **Esta semana — cambios que no requieren esperar al primer cliente**

1. Reemplazar el párrafo del CTA final con el texto de Gap 1 Paso 1\.

2. Agregar los 5 testimonios de Mercado Libre antes del botón de contacto (Gap 1 Paso 2).

3. Reemplazar el headline del hero y el bloque de métricas con los textos de Gap 2\.

4. Agregar la sección 'Lo que cuesta no resolver esto' antes del CTA (Gap 3). Completar el precio.

5. Reducir el detalle operativo de la sección del sistema multiagente y agregar la sección 'Por qué no conviene hacerlo solo' (Gap 4).

6. Reemplazar la sección de garantía completa con el texto de Gap 5\.

7. Actualizar la sección de implementación de 8 a 6 semanas con la nueva tabla y el nuevo copy (Gap 6).

8. Actualizar la FAQ de tiempo del equipo con el texto de Gap 6\.

## **Con el primer cliente**

9. Publicar caso de estudio mínimo: industria, equipo, problema inicial, resultado medido, testimonio del Tech Lead o EM aunque sea anónimo.

10. Actualizar las métricas del hero con los datos reales del primer engagement.

Plan de mejoras generado sobre:

Landing page · dariosaldano.com.ar/sdd-ingenieria-alto-escala

Guía de Estilo y Voz · Resumen de Actividades Profesionales

Contexto directo de Darío Saldaño · Marzo 2026