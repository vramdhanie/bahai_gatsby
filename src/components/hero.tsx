import type { ReactNode } from "react";

interface HeroProps {
  img: string;
  home?: boolean;
  children?: ReactNode;
}

export default function Hero({ img, home = false, children }: HeroProps) {
  const backgroundImage = home
    ? `linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7)), url(${img})`
    : `url(${img})`;
  return (
    <div
      className={home ? "hero hero--home" : "hero"}
      style={{ backgroundImage }}
    >
      {children}
    </div>
  );
}
