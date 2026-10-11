import { cn } from "@/lib/utils";
import { Link } from "react-router";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "pink";

const variants: Record<Variant, string> = {
  primary:
    "bg-sunshine text-ink shadow-[0_6px_0_0_#d89e00] hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_#d89e00] active:translate-y-1 active:shadow-[0_2px_0_0_#d89e00]",
  secondary:
    "bg-white text-ink border border-ink/15 shadow-[0_5px_0_0_rgba(42,31,45,0.08)] hover:-translate-y-0.5 hover:border-rose/40 hover:shadow-[0_7px_0_0_rgba(242,58,138,0.14)] active:translate-y-1 active:shadow-[0_2px_0_0_rgba(42,31,45,0.08)]",
  ghost:
    "bg-transparent text-ink border border-ink/15 hover:border-rose hover:bg-blush/40 active:translate-y-0.5",
  pink: "bg-rose text-white shadow-[0_6px_0_0_#b51a5e] hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_#b51a5e] active:translate-y-1 active:shadow-[0_2px_0_0_#b51a5e]",
};

export function FestButton({
  children,
  className,
  variant = "primary",
  href,
  to,
  type = "button",
  onClick,
  disabled,
  target,
  rel,
  pulse = false,
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  href?: string;
  to?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
  pulse?: boolean;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold tracking-tight transition-all duration-200 select-none sm:text-base",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    pulse && "fest-cta-pulse",
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
