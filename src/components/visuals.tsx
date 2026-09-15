/**
 * Visuels de substitution générés en SVG.
 *
 * Le catalogue n'embarque pas encore les photos produits : ces compositions
 * déterministes (dérivées du slug) donnent une identité visuelle stable à
 * chaque fiche. Pour passer aux vraies photos, remplacer ces composants par
 * `next/image` — le reste du site n'a pas à changer.
 */

function hash(value: string): number {
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) % 100000;
  }
  return result;
}

const palettes = [
  ["#6d28d9", "#a78bfa"],
  ["#0f172a", "#475569"],
  ["#7c3aed", "#38bdf8"],
  ["#1e293b", "#7c3aed"],
  ["#312e81", "#818cf8"],
  ["#0b1120", "#94a3b8"],
];

export function ProductVisual({
  seed,
  label,
  className = "",
}: {
  seed: string;
  label: string;
  className?: string;
}) {
  const value = hash(seed);
  const [from, to] = palettes[value % palettes.length];
  const rotation = (value % 40) - 20;
  const gradientId = `grad-${value}`;

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-label={`Illustration : ${label}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <pattern
          id={`dots-${value}`}
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.1" fill="rgba(255,255,255,0.22)" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill={`url(#${gradientId})`} />
      <rect width="400" height="300" fill={`url(#dots-${value})`} />
      <g transform={`rotate(${rotation} 200 150)`} opacity="0.5">
        <rect
          x="120"
          y="70"
          width="160"
          height="160"
          rx="16"
          fill="none"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.5"
        />
        <rect
          x="150"
          y="100"
          width="100"
          height="100"
          rx="10"
          fill="rgba(255,255,255,0.12)"
        />
      </g>
      <g opacity="0.85">
        <rect x="0" y="252" width="400" height="6" fill="rgba(255,255,255,0.18)" />
        <rect
          x={20 + (value % 180)}
          y="252"
          width="120"
          height="6"
          fill="rgba(255,255,255,0.6)"
        />
      </g>
    </svg>
  );
}

export function PrinterVisual({
  seed,
  label,
  className = "",
}: {
  seed: string;
  label: string;
  className?: string;
}) {
  const value = hash(seed);
  const gradientId = `printer-${value}`;

  return (
    <svg
      viewBox="0 0 480 360"
      className={className}
      role="img"
      aria-label={`Illustration technique : ${label}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
      </defs>

      {/* Mur imprimé, en arrière-plan */}
      <rect
        x="40"
        y="30"
        width="400"
        height="250"
        rx="6"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.14)"
      />
      {[0, 1, 2, 3, 4].map((index) => (
        <rect
          key={index}
          x="70"
          y={62 + index * 42}
          width={90 + ((value + index * 37) % 220)}
          height="16"
          rx="3"
          fill="rgba(255,255,255,0.12)"
        />
      ))}

      {/* Colonne et tête d'impression */}
      <rect x="196" y="24" width="14" height="272" rx="5" fill={`url(#${gradientId})`} />
      <rect
        x="196"
        y="24"
        width="14"
        height="272"
        rx="5"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
      />
      <rect
        x="168"
        y={92 + (value % 90)}
        width="72"
        height="34"
        rx="7"
        fill="rgba(255,255,255,0.9)"
      />
      <rect
        x="182"
        y={100 + (value % 90)}
        width="44"
        height="6"
        rx="3"
        fill="#7c3aed"
      />

      {/* Base et roulettes */}
      <rect x="130" y="296" width="150" height="20" rx="8" fill="rgba(255,255,255,0.75)" />
      <circle cx="152" cy="324" r="9" fill="rgba(255,255,255,0.5)" />
      <circle cx="258" cy="324" r="9" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}
