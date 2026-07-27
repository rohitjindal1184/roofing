import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[76rem] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Small uppercase label with a short orange rule, used above section headings. */
export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`eyebrow flex items-center gap-3 ${
        tone === "dark" ? "text-brand-400" : "text-brand-800"
      }`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-px w-8 ${
          tone === "dark" ? "bg-brand-400" : "bg-brand-800"
        }`}
      />
      {children}
    </p>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 border-2 px-6 py-3 font-display text-base font-semibold uppercase tracking-[0.08em] transition-colors duration-200 sm:px-7 sm:text-lg";

export const buttonStyles = {
  primary: `${buttonBase} border-brand-600 bg-brand-600 text-white hover:border-brand-700 hover:bg-brand-700`,
  onDark: `${buttonBase} border-white/40 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink-900`,
  onLight: `${buttonBase} border-ink-900 bg-transparent text-ink-900 hover:bg-ink-900 hover:text-white`,
} as const;

type ButtonLinkProps = {
  href: string;
  variant?: keyof typeof buttonStyles;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

/** Renders a next/link for internal routes and a plain anchor for tel:/mailto:. */
export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonLinkProps) {
  const classes = `${buttonStyles[variant]} ${className}`;
  const isExternal = /^(tel:|mailto:|https?:)/.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 ${className}`}
    >
      <path
        d="M3 10h13m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 ${className}`}
    >
      <path
        d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={`h-5 w-5 shrink-0 ${className}`}
    >
      <path
        d="m4 10.5 4 4 8-9"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
    </svg>
  );
}
