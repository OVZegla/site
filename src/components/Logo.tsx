import Link from "next/link";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="SYMP'S — retour à l'accueil"
    >
      <span
        className="grid size-9 place-items-center rounded-none bg-brand-600 text-white transition-transform group-hover:scale-105"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" strokeWidth="2">
          <path d="M4 5h16v6H4z" stroke="currentColor" strokeLinejoin="round" />
          <path d="M7 11v8M17 11v8" stroke="currentColor" strokeLinecap="round" />
          <path
            d="M9 15h6"
            stroke="currentColor"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-semibold tracking-tight ${
            isLight ? "text-white" : "text-ink-900"
          }`}
        >
          SYMP&apos;S
        </span>
        <span
          className={`text-[0.625rem] font-medium uppercase tracking-[0.18em] ${
            isLight ? "text-ink-400" : "text-ink-500"
          }`}
        >
          Impression murale
        </span>
      </span>
    </Link>
  );
}
