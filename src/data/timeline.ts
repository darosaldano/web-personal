export interface TimelineItem {
    title: string;
    company: string;
    start: number;
    end: number;
    color: string;
    category?: string;
}

// Helper: month fraction (e.g. Jan=0, Aug=7/12≈0.58)
const m = (month: number) => (month - 1) / 12;

export const workExperience: TimelineItem[] = [
    // Emprendimientos
    { title: 'Pirotecnia', company: 'Córdoba', start: 2003 + m(11), end: 2004 + m(1), color: '#B84832', category: 'Emprendimiento' },
    { title: 'Servicio de Sonido e Iluminación + Electricidad Domiciliaria', company: 'Córdoba', start: 2005 + m(8), end: 2013 + m(8), color: '#B84832', category: 'Emprendimiento' },
    { title: 'Retail Alimentos Balanceados "Almapetcare"', company: 'Córdoba', start: 2016 + m(1), end: 2016 + m(9), color: '#B84832', category: 'Emprendimiento' },
    { title: 'Retail Pastelería Franceschini', company: 'Córdoba', start: 2023 + m(8), end: 2025 + m(6), color: '#B84832', category: 'Emprendimiento' },
    { title: 'Retail Drugstore El Misa', company: 'Chilecito', start: 2024 + m(5), end: 2026 + m(3), color: '#B84832', category: 'Emprendimiento' },

    // Experiencia laboral
    { title: 'Desarrollador Jr Oracle', company: '2GSOFT · Córdoba', start: 2006 + m(8), end: 2009 + m(8), color: '#1ABFBF', category: 'Rol técnico' },
    { title: 'Desarrollador Oracle SSr', company: 'Inthegra · Córdoba', start: 2010 + m(11), end: 2016 + m(8), color: '#1ABFBF', category: 'Rol técnico' },
    { title: 'Responsable de Área / Jefe de Desarrollo', company: 'Inthegra · Córdoba', start: 2016 + m(8), end: 2017 + m(3), color: '#1ABFBF', category: 'Liderazgo / Gestión' },
    { title: 'Product Manager · Team Leader · Gerente de Oficina', company: 'Inthegra · Chilecito', start: 2017 + m(3), end: 2022 + m(3), color: '#1ABFBF', category: 'Liderazgo / Gestión' },
    { title: 'Project Leader – Inversiones Brasil', company: 'MercadoPago', start: 2022 + m(3), end: 2026 + m(1), color: '#1ABFBF', category: 'Liderazgo / Gestión' },

    // Proyectos paralelos
    { title: 'Mejora Continua en PYME Textil Emcortex', company: 'Córdoba', start: 2010 + m(3), end: 2010 + m(6), color: '#B84832', category: 'Emprendimiento' },
    { title: 'Consultor de Emprendimientos – Red de Mentores', company: 'Red de Mentores', start: 2018 + m(2), end: 2018 + m(7), color: '#B84832', category: 'Emprendimiento' },
    { title: 'Presidente Rotaract Club Chilecito', company: 'Rotaract', start: 2018 + m(7), end: 2019 + m(6), color: '#B84832', category: 'Emprendimiento' },
];

export const educationExperience: TimelineItem[] = [
    { title: 'Ing. en Sistemas de Información', company: 'UTN Córdoba', start: 2008, end: 2010 + m(12), color: '#2ABDD4' },
    { title: 'Estrategias Para el Nuevo Liderazgo', company: 'AArEII', start: 2008, end: 2008 + m(12), color: '#9EB8C4' },
    { title: 'Project Management', company: 'Universidad de Buenos Aires (Online)', start: 2011, end: 2012 + m(12), color: '#9EB8C4' },
    { title: 'Formación en Liderazgo', company: 'Xinectia', start: 2011, end: 2012 + m(12), color: '#9EB8C4' },
    { title: 'Marketing, Ventas, Administración y Contabilidad', company: 'E-Learning', start: 2012, end: 2013 + m(12), color: '#9EB8C4' },
    { title: 'Gestión de Riesgos', company: 'Cámara Argentina de Comercio', start: 2013 + m(5), end: 2013 + m(8), color: '#9EB8C4' },
    { title: 'Gestión de Pymes', company: 'Cámara Argentina de Comercio', start: 2013 + m(7), end: 2013 + m(12), color: '#9EB8C4' },
    { title: 'Diplomatura en Gestión Gerencial', company: 'Universidad Católica de Córdoba', start: 2014, end: 2014 + m(12), color: '#2ABDD4' },
    { title: 'Diplomatura en Creación de Empresas', company: 'Universidad Nacional de Córdoba', start: 2015, end: 2015 + m(12), color: '#2ABDD4' },
    { title: 'Diplomatura en Dirección de Proyectos', company: 'Universidad Empresarial Siglo 21', start: 2015, end: 2015 + m(12), color: '#2ABDD4' },
    { title: 'Gestión y Desarrollo del Capital Humano', company: 'Universidad Blas Pascal', start: 2019, end: 2019 + m(12), color: '#9EB8C4' },
    { title: 'Certificación Scrum Master', company: 'UTN', start: 2021, end: 2021 + m(12), color: '#2ABDD4' },
    { title: 'Diplomatura en Coaching Financiera', company: 'Escuela de Coaching Ontológico Americano', start: 2024, end: 2024 + m(12), color: '#2ABDD4' },
    { title: 'Diplomatura en Dirección de Empresas', company: 'Universidad Nacional de Córdoba', start: 2024, end: 2024 + m(12), color: '#2ABDD4' },
    { title: 'Certificación Be Trainer', company: 'Mercadolibre', start: 2025, end: 2025 + m(6), color: '#2ABDD4' },
    { title: 'IA Generativa, Prompt Engineering, Agentes de IA', company: 'Gemini · GPT · Cursor · Windsurf', start: 2025, end: 2025 + m(12), color: '#2ABDD4' },
];

export const legendItems = [
    { color: '#1A3A7A', label: 'Rol técnico', type: 'solid' as const },
    { color: '#1ABFBF', label: 'Liderazgo / Gestión', type: 'solid' as const },
    { color: '#B84832', label: 'Emprendimiento', type: 'solid' as const },
    { color: '#C8832A', label: 'Proyecto paralelo', type: 'solid' as const },
    { color: '#C4989E', label: 'Liderazgo / Asesoría', type: 'solid' as const },
    { color: '#2ABDD4', label: 'Formación', type: 'outline' as const },
];
