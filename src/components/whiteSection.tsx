import type { CSSProperties, ReactNode } from "react";

import Title from "./title";

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export function WhiteSection({ title, subtitle, children, style }: SectionProps) {
  return (
    <section className="white-section" style={style}>
      <Title title={title} subtitle={subtitle} />
      <div className="feature-center">{children}</div>
    </section>
  );
}

export function ColourSection({ title, subtitle, children, style }: SectionProps) {
  return (
    <section className="colour-section" style={style}>
      <Title title={title} subtitle={subtitle} />
      <div className="feature-center">{children}</div>
    </section>
  );
}
