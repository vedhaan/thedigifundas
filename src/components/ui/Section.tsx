import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  bgSecondary?: boolean; // alternate background between sections for visual rhythm
};

export default function Section({ children, className = "", id, bgSecondary = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${
        bgSecondary ? "bg-bg-secondary" : "bg-bg-primary"
      } ${className}`}
    >
      {children}
    </section>
  );
}