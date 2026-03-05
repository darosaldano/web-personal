'use client';

import { useState } from 'react';

const testimonials = [
    {
        quote: "Durante el tiempo que trabajamos en Mercado Libre, encontré en Darío un profesional excepcional con un marcado enfoque humano. Destaco su profundo conocimiento del negocio y la claridad con la que entiende sus dinámicas, así como su capacidad para gestionar y planificar en escenarios de alta presión.\n\nSu liderazgo permitió que el equipo alcanzara los objetivos trazados de manera organizada y efectiva, incluso en contextos desafiantes.\n\nSin duda, colaborar con él tuvo un impacto muy positivo en mi carrera profesional, ya que pude conocer de primera mano un estilo de liderazgo que motiva, acompaña y promueve el crecimiento continuo de las personas.",
        name: "Software Engineer",
        role: "Mercado Libre · Feb 2026",
    },
    {
        quote: "Le agradezco en verdad a la vida haber podido trabajar con personas tan buenas como tu. Me llevo mucho aprendizaje de tu parte y solamente agradecimiento tengo hacia ti.\n\nEspero que la vida nos permita volvernos a encontrar en un futuro Dari.\nUn abrazo muy grande y muchos Éxitos Dari",
        name: "Software Engineer",
        role: "Mercado Libre · Feb 2026",
    },
    {
        quote: "Darío se destaca por su excelente capacidad de gestión y priorización, asegurando un manejo ordenado y eficiente de los temas y de la carga de trabajo del equipo. Combina una gestión sólida con un involucramiento técnico real: domina las herramientas y prácticas del día a día, aporta soluciones concretas y acompaña activamente al equipo en el análisis y resolución de problemas.\n\nEn contextos de cambio y crecimiento, ha tenido un rol clave en el onboarding de nuevas personas, asegurando un proceso de integración ágil y con mínima fricción. Su acompañamiento resulta especialmente valioso en períodos de alta exigencia, con múltiples frentes abiertos y prioridades que evolucionan de forma continua.",
        name: "Team Lead & Sr. Backend Developer",
        role: "Mercado Libre · Feb 2026",
    },
    {
        quote: "En Darío encontré a una persona enfocada en dar soluciones. Un líder de gestión que adquirió mucho conocimiento del producto y un background técnico que le empodera y lo enfoca a resultados. Juntos pudimos sacar iniciativas generales y resolver asuntos del día a día satisfactoriamente. Le gusta documentar, dejar traza de su trabajo, convirtiéndose en referente natural de su entorno. Lo recomiendo muchísimo como líder y compañero.",
        name: "Project Leader",
        role: "Mercado Libre · Feb 2026",
    },
    {
        quote: "Como Líder de Proyectos, Darío aporta una visión clara y organizada. Tiene facilidad para entender procesos complejos y estructurarlos de forma sencilla. Me resultó muy valioso su interés por la innovación, especialmente su manejo de la IA, ayudándonos a entender cómo aprovechar estas herramientas en el día a día. Es una persona muy accesible y profesional, con quien da gusto compartir equipo.",
        name: "Project Leader",
        role: "Mercado Libre · Feb 2026",
    },
    {
        quote: "Tuve la oportunidad de trabajar con Darío Saldaño en Mercado Libre, donde fue mi líder para Argentina, México y Brasil. Darío se destacó por su sólido entendimiento del negocio, su versatilidad y su capacidad para liderar equipos en contextos regionales complejos. Además, impulsó y acompañó la implementación de nuevas features, asegurando entregas en tiempo y forma y alineadas con los objetivos del negocio. Es un líder altamente recomendable.",
        name: "Software Engineer",
        role: "Mercado Libre · Feb 2026",
    },
    {
        quote: "Tuve la oportunidad de trabajar con Dari como Project Leader y fue un líder excepcional. Siempre se destacó por su proactividad, disposición para ayudar y gran organización. Tiene una excelente lógica de negocio y un alto nivel técnico, lo que le permitía tomar muy buenas decisiones y guiar al equipo de forma clara y eficiente. Sin duda, trabajar con él fue una experiencia muy valiosa y lo recomiendo mucho.",
        name: "Software Engineer",
        role: "Mercado Libre · Feb 2026",
    },
    {
        quote: "Quería escribirte para agradecerte de verdad por todo lo que aprendí contigo. Fuiste un líder increíble y trabajar contigo fue una experiencia muy valiosa para mí.",
        name: "Software Engineer",
        role: "Mercado Libre · Ene 2026",
    },
    {
        quote: "Tuve el privilegio de reportar directamente a Darío durante nuestro tiempo en mercado libre y no puedo dejar de recomendar su liderazgo. Lo que más destaca de su gestión es su excepcional calidad humana; trata al equipo y a los aliados externos con el mismo nivel de empatía y profesionalismo.\n\nEs un estratega con un profundo conocimiento del negocio y una habilidad innata para la planificación y el control de actividades, asegurando siempre que los objetivos se cumplan sin perder de vista el bienestar del equipo. Su comunicación clara y transparente facilita el trabajo de todos. Sin duda, es un líder que inspira y aporta valor real a cualquier organización",
        name: "Sr. DevOps Engineer",
        role: "Mercado Libre · Ene 2026",
    },
    {
        quote: "Excelente profesional y líder. Siempre atento a las consultas y demandas de sus compañeros de trabajo. Destaco su capacidad de gestión y análisis para la resolución de problemas y consecución de los objetivos planteados, como así también para la definición de objetivos estratégicos. Considero que posee un gran conocimiento de tecnologías de desarrollo, como APEX y PL/SQL. Siempre predispuesto a ayudar y buscando su crecimiento profesional constantemente.",
        name: "Resp. de Calidad",
        role: "Inthegra · Mar 2022",
    },
    {
        quote: "Darío Saldaño un profesional que desempeña sus funciones con responsabilidad, integridad, respeto y empatía, tuve la oportunidad de formar parte de su equipo de trabajo en la industria del software, donde se desempeñaba como team líder. Entre sus competencias se reconoce una amplia capacidad de análisis, resolución de problemas, gestión de equipo y clientes, con amplia experiencia. Siempre contribuyó al equipo con sus conocimientos, valores e identificando fortalezas y áreas oportunidades para el desarrollo profesional/personal de cada compañero, orientado a cumplir con los objetivos de la empresa. Una excelente persona y Líder. Totalmente recomendable!",
        name: "Analista Desarrollador PL/SQL",
        role: "Inthegra · Mar 2022",
    },
    {
        quote: "Darío es una gran persona y líder que motiva a todos sus integrantes de equipo a siempre dar un paso más y no quedarse en su lugar de confort. Compañero, responsable y compartidor de conocimientos adquiridos. Busca aprender día a día y mejorar sus habilidades tanto sus competencias técnicas como sus competencias blandas.",
        name: "Ssr Adv. Oracle Apex Developer",
        role: "Inthegra · Mar 2022",
    },
    {
        quote: "Darío cuenta con todas las características de liderazgo y gestión necesarias para llevar adelante proyectos de desarrollo en al ámbito de APEX, PL/SQL y Forms de diferentes dimensiones. Cuenta con varios casos de éxito en implementaciones de software crediticio y financiero.\n\nComo persona y compañero excelente, siempre atento a las necesidades del equipo, contribuyendo a un ambiente laboral muy agradable y fomentando siempre entregas de calidad en cada proyecto.",
        name: "Ssr. Software Engineer & DBA",
        role: "Inthegra · Mar 2022",
    },
    {
        quote: "Dario es una persona muy responsable, siempre está predispuesto a ayudar, excelente compañero de equipo y un líder por naturaleza. Es una persona que no para de aprender día a dia y buscar soluciones a problemas diarios. También posee un amplio conocimiento en diversas tecnologías de desarrollo de software.",
        name: "Analista Desarrollador Ssr Adv.",
        role: "Inthegra · Mar 2022",
    },
    {
        quote: "Dario es una persona muy profesional, con gran capacidad de liderazgo y excelente compañero. Siempre facilitando a los demás en sus tareas y compartiendo conocimientos que resultan inherentes al área.\n\nGran capacidad de investigación e implementación de nuevas tecnologías",
        name: "Ssr. Software Engineer & DBA",
        role: "Inthegra · Oct 2015",
    },
    {
        quote: "Dario es una persona con mucha capacidad para adquirir nuevos conocimientos y aplicarlos en sus tareas. Muy predispuesto a nuevos desafíos.",
        name: "Socio Gerente",
        role: "2G Soft · Nov 2009",
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;
    const maxIndex = testimonials.length - itemsToShow;

    const next = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section id="testimonios" className="testimonials-section">
            <div className="container">
                <div className="section-label">Testimonios</div>
                <h2 className="section-title">Voces <span>reales.</span></h2>

                <div className="carousel-container" style={{ marginTop: 'var(--space-12, 3rem)' }}>
                    <button
                        className="carousel-btn prev-btn"
                        onClick={prev}
                        disabled={currentIndex === 0}
                        aria-label="Anterior"
                    >
                        ←
                    </button>

                    <div className="carousel-viewport">
                        <div
                            className="carousel-track"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                        >
                            {testimonials.map((t, index) => (
                                <div key={index} className="carousel-slide">
                                    <div className="card-testimonial">
                                        <div className="card-testimonial-quote">&quot;</div>
                                        <div className="card-testimonial-text" style={{ whiteSpace: 'pre-line' }}>{t.quote}</div>
                                        <div className="card-testimonial-author">
                                            <div className="card-testimonial-name">{t.name}</div>
                                            <div className="card-testimonial-role">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="carousel-btn next-btn"
                        onClick={next}
                        disabled={currentIndex >= maxIndex}
                        aria-label="Siguiente"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
