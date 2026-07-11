import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-heading font-semibold text-sm sm:text-base transition-colors duration-200";

  const styles =
    variant === "primary"
      ? "bg-accent-primary text-bg-primary hover:bg-accent-secondary"
      : "border border-border text-text-primary hover:border-accent-primary hover:text-accent-primary";

  const combined = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combined}>
      {children}
    </button>
  );
}