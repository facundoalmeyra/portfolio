import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

const siteUrl = "https://tudominio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — Diseñador/a de Producto`,
  description: profile.paragraphs.join(" "),
  keywords: [
    "diseño de producto",
    "product designer",
    "UX",
    "UI",
    "salud digital",
    "IA",
    "0 a 1",
    profile.name,
  ],
  openGraph: {
    title: `${profile.name} — Diseñador/a de Producto`,
    description: profile.paragraphs[0],
    url: siteUrl,
    siteName: profile.name,
    images: [{ url: profile.avatar, width: 512, height: 512 }],
    locale: "es_ES",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — Diseñador/a de Producto`,
    description: profile.paragraphs[0],
    images: [profile.avatar],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Product Designer",
  url: siteUrl,
  image: `${siteUrl}${profile.avatar}`,
  description: profile.paragraphs.join(" "),
  sameAs: [profile.social.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
