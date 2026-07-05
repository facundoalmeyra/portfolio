export function DashboardMockup() {
  return (
    <svg
      viewBox="0 0 700 420"
      className="h-full w-full"
      role="img"
      aria-label="Vista previa de panel de campaña con métricas y mensajes"
    >
      <rect width="700" height="420" rx="16" fill="#DDECE5" />
      <rect x="24" y="24" width="652" height="372" rx="10" fill="#FFFFFF" />
      {/* top bar */}
      <rect x="40" y="40" width="180" height="12" rx="4" fill="#1F2937" />
      <rect x="590" y="38" width="66" height="18" rx="6" fill="#F3F4F6" />
      {/* stats row */}
      <rect x="40" y="70" width="620" height="72" rx="10" fill="#111827" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${60 + i * 150}, 88)`}>
          <rect width="70" height="8" rx="3" fill="#9CA3AF" />
          <rect y="18" width="90" height="16" rx="4" fill="#F9FAFB" />
        </g>
      ))}
      {/* tabs */}
      <rect x="40" y="158" width="60" height="10" rx="3" fill="#111827" />
      <rect x="112" y="158" width="60" height="10" rx="3" fill="#D1D5DB" />
      <rect x="184" y="158" width="70" height="10" rx="3" fill="#D1D5DB" />
      {/* two message cards */}
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(${40 + i * 316}, 182)`}>
          <rect width="300" height="188" rx="10" fill="#F9FAFB" stroke="#E5E7EB" />
          <rect x="16" y="16" width="90" height="8" rx="3" fill="#6B7280" />
          <rect x="16" y="36" width="200" height="10" rx="3" fill="#111827" />
          <rect x="16" y="60" width="268" height="6" rx="3" fill="#D1D5DB" />
          <rect x="16" y="74" width="268" height="6" rx="3" fill="#D1D5DB" />
          <rect x="16" y="88" width="220" height="6" rx="3" fill="#D1D5DB" />
          <rect x="16" y="112" width="268" height="6" rx="3" fill="#E5E7EB" />
          <rect x="16" y="126" width="268" height="6" rx="3" fill="#E5E7EB" />
          <rect x="16" y="140" width="180" height="6" rx="3" fill="#E5E7EB" />
        </g>
      ))}
    </svg>
  );
}
