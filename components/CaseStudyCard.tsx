"use client";

import Link from "next/link";
import { Skeleton } from "./Skeleton";
import { useLoaded } from "@/lib/useLoaded";
import { DashboardMockup } from "./mockups/DashboardMockup";
import { PhonesMockup } from "./mockups/PhonesMockup";
import { FormsMockup } from "./mockups/FormsMockup";
import type { CaseStudy } from "@/lib/data";

const accentBg: Record<CaseStudy["accent"], string> = {
  mint: "bg-[#DDECE5]",
  sage: "bg-[#D9E3D6]",
  peach: "bg-[#F3DCC4]",
};

const mockupMap: Record<CaseStudy["mockup"], React.ComponentType> = {
  dashboard: DashboardMockup,
  phones: PhonesMockup,
  forms: FormsMockup,
};

export function CaseStudyCard({
  study,
  delay = 0,
}: {
  study: CaseStudy;
  delay?: number;
}) {
  const loaded = useLoaded(700 + delay);
  const Mockup = mockupMap[study.mockup];

  return (
    <article className="px-5 sm:px-8" aria-busy={!loaded}>
      <div
        className={`aspect-[16/10] w-full overflow-hidden rounded-2xl ${accentBg[study.accent]}`}
      >
        {loaded ? (
          <Mockup />
        ) : (
          <Skeleton className="h-full w-full rounded-2xl !bg-black/10" />
        )}
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        {loaded ? (
          <h3 className="max-w-md text-lg font-semibold leading-snug text-neutral-900 sm:text-xl">
            {study.title}
          </h3>
        ) : (
          <div className="w-full max-w-md space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>
        )}

        {loaded ? (
          <Link
            href={`/casos/${study.slug}`}
            className="shrink-0 whitespace-nowrap rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            {study.cta}
          </Link>
        ) : (
          <Skeleton className="h-9 w-28 shrink-0 rounded-full" />
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {loaded
          ? study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600"
              >
                {tag}
              </span>
            ))
          : [0, 1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-6 w-20 rounded-full" />
            ))}
      </div>
    </article>
  );
}
