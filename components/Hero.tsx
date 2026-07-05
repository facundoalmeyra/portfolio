import Image from "next/image";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="px-5 pt-6 pb-2 sm:px-8" aria-labelledby="hero-heading">
      <div className="mb-6 flex items-center gap-3">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={48}
          height={48}
          priority
          className="h-12 w-12 rounded-full object-cover"
        />
        <p className="text-lg font-medium text-[#B4622E]">{profile.greeting}</p>
      </div>

      <div className="space-y-6 text-[1.6rem] font-semibold leading-[1.2] tracking-tight text-neutral-900 sm:text-[2.1rem]">
        <h1 id="hero-heading" className="inline">
          {profile.paragraphs[0]}
        </h1>
        {profile.paragraphs.slice(1).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}