export function FormsMockup() {
  return (
    <svg
      viewBox="0 0 700 400"
      className="h-full w-full"
      role="img"
      aria-label="Vista previa de componentes de formulario y campos de entrada"
    >
      <rect width="700" height="400" rx="16" fill="#F3DCC4" />
      <rect x="24" y="24" width="204" height="150" rx="10" fill="#FFFFFF" stroke="#EAD9C4" />
      <rect x="40" y="40" width="90" height="8" rx="3" fill="#6B6255" />
      <rect x="40" y="60" width="172" height="26" rx="6" fill="none" stroke="#111827" strokeWidth="1.5" />

      <rect x="248" y="24" width="204" height="150" rx="10" fill="#FFFFFF" stroke="#EAD9C4" />
      <rect x="264" y="40" width="60" height="8" rx="3" fill="#6B6255" />
      <rect x="264" y="60" width="172" height="24" rx="6" fill="#F3F4F6" />
      <rect x="264" y="96" width="60" height="8" rx="3" fill="#B0413E" />
      <rect x="264" y="114" width="172" height="24" rx="6" fill="none" stroke="#B0413E" strokeWidth="1.5" />

      <rect x="472" y="24" width="204" height="220" rx="16" fill="#1F2A24" />
      <rect x="490" y="46" width="70" height="8" rx="3" fill="#9CA89E" />
      <rect x="490" y="70" width="168" height="10" rx="3" fill="#F5F1E9" />
      <rect x="490" y="120" width="168" height="24" rx="6" fill="#33463A" />

      <rect x="24" y="196" width="204" height="150" rx="10" fill="#FFFFFF" stroke="#EAD9C4" />
      <rect x="40" y="212" width="70" height="8" rx="3" fill="#6B6255" />
      <g>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x={40 + i * 28}
            y="232"
            width="22"
            height="28"
            rx="5"
            fill="#F3F4F6"
            stroke="#D1D5DB"
          />
        ))}
      </g>
      <rect x="40" y="280" width="172" height="24" rx="6" fill="#2952E3" />

      <rect x="248" y="196" width="204" height="150" rx="10" fill="#FFFFFF" stroke="#EAD9C4" />
      <rect x="264" y="212" width="90" height="8" rx="3" fill="#6B6255" />
      <rect x="264" y="232" width="172" height="24" rx="6" fill="#F3F4F6" />
    </svg>
  );
}
