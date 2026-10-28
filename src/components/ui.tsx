import type { ReactNode } from "react";
import { externalLinkProps } from "../config/site";

/** Facebook "f" mark (Lucide no longer ships brand logos). */
export function FacebookIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.55V4.63A20.6 20.6 0 0 0 14.25 4.5c-2.24 0-3.78 1.37-3.78 3.89v2.17H7.94v2.94h2.53V21h3.03Z" />
    </svg>
  );
}

type Variant = "gold" | "light" | "outline-light" | "royal" | "outline-dark";

const variants: Record<Variant, string> = {
  gold: "bg-gold-400 text-navy-900 shadow-lg shadow-gold-500/20 hover:bg-gold-300",
  light: "bg-white text-navy-900 hover:bg-gold-200",
  "outline-light": "border border-white/30 bg-white/5 text-white hover:border-white/60 hover:bg-white/10",
  royal: "bg-royal-600 text-white shadow-lg shadow-royal-600/20 hover:bg-royal-500",
  "outline-dark": "border border-slate-300 bg-white text-navy-900 hover:border-navy-900",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

/** Link styled as a button. External links open in a new tab safely. */
export function ButtonLink({
  href,
  children,
  variant = "gold",
  external = false,
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? externalLinkProps : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

interface SectionHeadingProps {
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  center?: boolean;
  id?: string;
}

export function SectionHeading({ title, intro, dark = false, center = false, id }: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2
        id={id}
        className={`text-3xl leading-tight font-semibold sm:text-4xl ${dark ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-blue-100/80" : "text-slate-600"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

/** Decorative white die face. */
export function Die({ value, className = "" }: { value: 1 | 2 | 3 | 4 | 5 | 6; className?: string }) {
  const pips: Record<number, number[]> = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8],
  };
  return (
    <div
      aria-hidden="true"
      className={`grid grid-cols-3 grid-rows-3 place-items-center rounded-[22%] bg-gradient-to-br from-white to-slate-200 p-1.5 shadow-[0_10px_25px_-8px_rgb(0_0_0/0.5),inset_0_-4px_0_rgb(0_0_0/0.08)] ring-1 ring-white/70 ${className}`}
    >
      {Array.from({ length: 9 }, (_, i) => (
        <span
          key={i}
          className={`size-[70%] rounded-full ${pips[value].includes(i) ? "bg-navy-900" : "bg-transparent"}`}
        />
      ))}
    </div>
  );
}
