import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Footer } from "@/components/Footer";
import { caseStudies } from "@/lib/data";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col bg-[#FBF6EE]">
      <Header />
      <Hero />
      <main id="work" className="mt-10 flex flex-col gap-16 sm:mt-14 sm:gap-20">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.slug} study={study} delay={i * 150} />
        ))}
      </main>
      <div className="mt-16 sm:mt-20">
        <Footer />
      </div>
    </div>
  );
}
