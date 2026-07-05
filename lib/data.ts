// ────────────────────────────────────────────────────────────────
// EDITA ESTE ARCHIVO CON TU INFO REAL. Todo el sitio lee de acá.
// ────────────────────────────────────────────────────────────────
import { supabase } from "./supabase";

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
  image_url?: string | null;
};

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const { data, error } = await supabase
    .from("case_studies")
    .select("slug, title, cta, tags, mockup, accent, image_url")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching case studies:", error.message);
    return [];
  }

  return data as CaseStudy[];
}