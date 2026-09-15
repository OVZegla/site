import Link from "next/link";

export function Eyebrow({
  children,
  tone = "brand",
}: {
  children: React.ReactNode;
  /** `light` sur les fonds bleus ou sombres, où le bleu de marque disparaîtrait. */
  tone?: "brand" | "light";
}) {
  return (
    <p
      className={`font-display text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === "light" ? "text-brand-100" : "text-brand-600"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-balance font-display text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-600">
          {description}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "md" | "lg";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// Boutons du thème Harmony : angles vifs, police de titre, capitales espacées.
const variants = {
  primary: "border border-brand-600 bg-brand-600 text-white hover:bg-brand-800 hover:border-brand-800",
  secondary: "border border-brand-600 bg-transparent text-brand-600 hover:bg-brand-600 hover:text-white",
  ghost: "border border-transparent text-ink-700 hover:bg-ink-100 hover:text-brand-600",
  light: "border border-white bg-white text-brand-600 hover:bg-transparent hover:text-white",
} as const;

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
} as const;

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `btn-type inline-flex items-center justify-center gap-2 transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "uv" | "success" | "warning";
}) {
  const tones = {
    neutral: "bg-ink-100 text-ink-700",
    uv: "bg-brand-100 text-brand-700",
    success: "bg-emerald-50 text-emerald-700",
    warning: "bg-amber-50 text-amber-800",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-none px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export interface Crumb {
  href?: string;
  label: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm text-ink-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="transition hover:text-ink-900">
            Accueil
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <span aria-hidden="true" className="text-ink-300">
              /
            </span>
            {item.href ? (
              <Link href={item.href} className="transition hover:text-ink-900">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-ink-800" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function StockPill({ stock }: { stock: number }) {
  if (stock <= 0) {
    return <Badge tone="warning">Sur commande</Badge>;
  }
  if (stock < 10) {
    return <Badge tone="warning">Plus que {stock} en stock</Badge>;
  }
  return <Badge tone="success">En stock</Badge>;
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
