import type { ReactNode } from "react";

interface BannerProps {
  title: string;
  blurb?: string;
  children?: ReactNode;
}

export default function Banner({ title, blurb, children }: BannerProps) {
  return (
    <div className="hero-banner">
      <h1>{title}</h1>
      <p>{blurb}</p>
      {children}
    </div>
  );
}
