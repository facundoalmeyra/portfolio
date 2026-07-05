import Link from "next/link";
import { profile } from "@/lib/data";

export function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
      <Link
        href="/"
        className="text-lg font-bold tracking-tight text-neutral-900"
        aria-label={`${profile.name} — inicio`}
      >
        {profile.initials}
      </Link>
      <nav className="flex items-center gap-5 text-sm text-neutral-700">
        {profile.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-neutral-900"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
