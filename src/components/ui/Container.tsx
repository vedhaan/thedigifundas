import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  wide?: boolean; // opt-in for the few sections that need to break past 1280px
};

export default function Container({ children, className = "", wide = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-8 lg:px-12 ${
        wide ? "max-w-[1600px]" : "max-w-[1280px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}