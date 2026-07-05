function Phone({ x, dark }: { x: number; dark?: boolean }) {
  const bg = dark ? "#1F2A24" : "#EDE7DD";
  return (
    <g transform={`translate(${x}, 0)`}>
      <rect width="150" height="320" rx="22" fill={bg} />
      <rect x="10" y="10" width="130" height="300" rx="14" fill={dark ? "#243027" : "#F5F1E9"} />
      <rect x="24" y="30" width="60" height="8" rx="3" fill={dark ? "#9CA89E" : "#B9B2A3"} />
      <rect x="24" y="50" width="102" height="70" rx="8" fill={dark ? "#33463A" : "#DAD2C2"} />
      <rect x="24" y="130" width="102" height="10" rx="3" fill={dark ? "#4C6455" : "#C9C1AE"} />
      <rect x="24" y="148" width="70" height="8" rx="3" fill={dark ? "#4C6455" : "#C9C1AE"} />
      <rect x="24" y="176" width="102" height="46" rx="8" fill={dark ? "#33463A" : "#DAD2C2"} />
      <rect x="24" y="232" width="102" height="46" rx="8" fill={dark ? "#33463A" : "#DAD2C2"} />
    </g>
  );
}

export function PhonesMockup() {
  return (
    <svg
      viewBox="0 0 700 340"
      className="h-full w-full"
      role="img"
      aria-label="Vista previa de pantallas móviles de la app"
    >
      <rect width="700" height="340" rx="16" fill="#D9E3D6" />
      <g transform="translate(40, 10)">
        <Phone x={0} dark />
        <Phone x={170} />
        <Phone x={340} dark />
        <Phone x={510} />
      </g>
    </svg>
  );
}
