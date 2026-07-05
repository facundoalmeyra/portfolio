import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-between px-5 py-8 text-sm text-neutral-500 sm:px-8">
      <p>
        © {year} {profile.name}. {profile.footerNote}
      </p>
      <div className="flex items-center gap-4">
        <a
          href={profile.social.email}
          aria-label="Enviar email"
          className="transition-colors hover:text-neutral-800"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="m4 7 8 6 8-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </a>
        <a
          href={profile.social.linkedin}
          aria-label="Ver LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-neutral-800"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7.5 10v6.5M7.5 7.5v.01M11.5 16.5V12c0-1.1.9-2 2-2s2 .9 2 2v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
