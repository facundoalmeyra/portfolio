// ────────────────────────────────────────────────────────────────
// EDITA ESTE ARCHIVO CON TU INFO REAL. Todo el sitio lee de acá.
// ────────────────────────────────────────────────────────────────

export const profile = {
  name: "Tu Nombre",
  initials: "TN",
  greeting: "¡Hola! Soy Tu Nombre.",
  avatar: "/images/avatar.png",
  paragraphs: [
    "Diseñador/a de producto Sr. especializado en llevar ideas de 0 a 1 en salud digital y productos con IA.",
    "Lideré el lanzamiento de un producto que resolvió un problema real para cientos de usuarios, y ahora construyo agentes de IA que generan resultados de negocio medibles.",
    "Diseño de punta a punta, saltando entre Figma y agentes de código IA.",
  ],
  nav: [
    { label: "Trabajo", href: "#work" },
    { label: "CV", href: "/cv.pdf" },
  ],
  social: {
    email: "mailto:hola@tudominio.com",
    linkedin: "https://linkedin.com/in/tu-usuario",
  },
  footerNote: "Todos los derechos reservados.",
};

export type CaseStudy = {
  slug: string;
  title: string;
  cta: string;
  tags: string[];
  mockup: "dashboard" | "phones" | "forms";
  accent: "mint" | "sage" | "peach";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "agentic-workflow",
    title:
      "Rediseñando un panel de configuración heredado en un flujo agéntico de IA que logra adopción real",
    cta: "Ver caso de estudio",
    tags: ["IA Agéntica", "Automatización", "Flujo de trabajo", "Claude Code"],
    mockup: "dashboard",
    accent: "mint",
  },
  {
    slug: "digital-therapeutic",
    title:
      "Lanzando el primer producto digital autorizado que redujo síntomas en cientos de pacientes",
    cta: "Ver caso de estudio",
    tags: ["Salud digital", "Autorizado", "0 a 1", "Testing con usuarios"],
    mockup: "phones",
    accent: "sage",
  },
  {
    slug: "input-component",
    title:
      "Creando un componente de campo de entrada unificado que escala en todos los productos",
    cta: "Ver caso de estudio",
    tags: ["Design system", "Tokens", "Usabilidad", "Accesibilidad"],
    mockup: "forms",
    accent: "peach",
  },
];
