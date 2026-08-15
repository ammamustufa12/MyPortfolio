import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-black hover:bg-accent-strong shadow-[0_0_0_1px_rgba(94,234,212,0.35),0_10px_40px_rgba(45,212,191,0.18)]",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
  ghost: "bg-transparent text-white hover:bg-white/5",
  outline:
    "border border-accent/40 text-accent hover:bg-accent-soft hover:border-accent",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  external?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  href,
  external,
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none",
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-5 py-2.5 text-sm",
    size === "lg" && "px-7 py-3.5 text-base",
    variants[variant],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="link"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} data-cursor="link">
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} data-cursor="link" {...props}>
      {children}
    </button>
  );
}
