// ────────────────────────────────────────────────────────────────
// EDITA ESTE ARCHIVO CON TU INFO REAL. Todo el sitio lee de acá.
// ────────────────────────────────────────────────────────────────

export const profile = {
  name: "Facundo Almeyra",
  initials: "FA",
  greeting: "Hi! I'm Facundo Almeyra.",
  avatar: "/images/avatar.png",
paragraphs: [
    "Senior UX & Product Designer specialized in healthcare and medical devices, based in Switzerland.",
    "15+ years designing digital products in regulated environments — most recently at MindMaze, building experiences patients and clinicians can trust.",
  ],
  nav: [
    { label: "Work", href: "#work" },
    { label: "CV", href: "/cv.pdf" },
  ],
  social: {
    email: "mailto:facundo@almeyra.com",
    linkedin: "https://www.linkedin.com/in/facundoalmeyra/",
  },
  footerNote: "All rights reserved.",
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
    slug: "companion-design-system",
    title:
      "Designing Companion, the mobile app connecting patients and therapists across MindMaze's neurorehabilitation ecosystem",
    cta: "View case study",
    tags: ["Design System", "Healthcare", "Mobile", "Cross-platform"],
    mockup: "dashboard",
    accent: "mint",
  },
  {
    slug: "clinical-usability-testing",
    title:
      "Leading summative usability testing under IEC 62366 / MDR with patients and clinicians at CHUV Lausanne University Hospital",
    cta: "View case study",
    tags: ["Human Factors", "IEC 62366", "MDR", "Clinical Research"],
    mockup: "phones",
    accent: "sage",
  },
  {
    slug: "product-ecosystem-integration",
    title:
      "Unifying the therapist desktop platform and MindMotion GO into one consistent clinical experience",
    cta: "View case study",
    tags: ["Design Tokens", "Usability", "Accessibility", "Healthcare UX"],
    mockup: "forms",
    accent: "peach",
  },
];