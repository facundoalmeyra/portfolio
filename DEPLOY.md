# Cómo editar y deployar

## 1. Editar tu contenido real
Todo el texto/case studies están en un solo archivo:
`lib/data.ts`

Cambiá ahí: nombre, bio, tags, títulos de case study y tu foto
(reemplazá `public/images/avatar.png` por la tuya).

## 2. Probar localmente
```bash
npm install
npm run dev
```
Abrí http://localhost:3000

## 3. Subir a GitHub
```bash
git init
git add .
git commit -m "portfolio inicial"
gh repo create tu-portfolio --public --source=. --push
```

## 4. Deploy en Vercel
- Entrá a vercel.com → "Add New Project" → importá el repo de GitHub.
- Vercel detecta Next.js automáticamente, no necesitás config extra.
- Cada push a `main` redeploya solo.

## 5. Conectar Supabase (cuando quieras traer los case studies desde una DB)
- Creá el proyecto en supabase.com y una tabla `case_studies` con columnas
  similares a las de `CaseStudy` en `lib/data.ts`.
- Instalá `@supabase/supabase-js`.
- Reemplazá el array estático `caseStudies` en `lib/data.ts` por un fetch
  a Supabase (podés hacerlo directo en `app/page.tsx` como Server Component
  async, sin necesitar `useLoaded` para el loading falso — ahí sí vas a tener
  loading real mientras esperás la respuesta).
- Agregá las env vars `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  en Vercel (Project Settings → Environment Variables).

## Nota sobre fuentes
Por restricciones de red del entorno donde armé esto, dejé fuentes del
sistema (no Google Fonts) para que compile sin conexión. En Vercel sí vas a
tener internet, así que si querés una tipografía más particular, puedo
volver a activar `next/font/google` (ej. Manrope + Source Serif 4) sin
problema — avisame.

## SEO / IA
- `app/layout.tsx` tiene metadata completa + JSON-LD (schema.org Person).
- `public/robots.txt` permite explícitamente GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, etc.
- `app/sitemap.ts` genera sitemap.xml dinámico.
- Antes de ir a producción, actualizá `siteUrl` en `app/layout.tsx` y
  `app/sitemap.ts` con tu dominio real.
