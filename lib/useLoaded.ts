"use client";

import { useEffect, useState } from "react";

/**
 * Simula el tiempo de carga de datos reales (ej. fetch a Supabase).
 * Reemplazá el setTimeout por tu llamada real cuando migres el backend.
 */
export function useLoaded(delayMs = 900) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  return loaded;
}
