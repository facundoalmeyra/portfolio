import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getCaseStudies, profile } from "@/lib/data";

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudies = await getCaseStudies();
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — ${profile.name}`,
    description: study.title,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudies = await getCaseStudies();
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col bg-[#FBF6EE] px-5 py-8 sm:px-8">
      <Link href="/" className="mb-8 text-sm text-neutral-500 hover:text-neutral-800">
        ← Volver
      </Link>
      <h1 className="text-2xl font-semibold leading-snug text-neutral-900 sm:text-3xl">
        {study.title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-8 max-w-xl text-neutral-600">
        Contenido detallado de este caso de estudio próximamente. Reemplazá
        este bloque con el proceso, decisiones de diseño y resultados reales
        del proyecto.
      </p>
    </div>
  );
}