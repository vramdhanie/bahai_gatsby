import type { ReactNode } from "react";

interface MainProps {
  className?: string;
  children: ReactNode;
}

export default function Main({ className, children }: MainProps) {
  return (
    <section className={className ? `main-card ${className}` : "main-card"}>
      {children}
    </section>
  );
}
