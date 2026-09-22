"use client";

import { type ReactNode, useEffect, useState } from "react";

export default function Parallax({ children }: { children: ReactNode }) {
  const [transform, setTransform] = useState("");

  useEffect(() => {
    let frame = 0;
    function resetTransform() {
      frame = requestAnimationFrame(() =>
        setTransform(`translate3d(0, ${window.pageYOffset / 3}px, 0)`)
      );
    }

    resetTransform();
    window.addEventListener("scroll", resetTransform);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", resetTransform);
    };
  }, []);

  return (
    <div
      className="parallax"
      style={{
        backgroundImage: "url(/images/shrine/shrine_05.jpg)",
        transform,
      }}
    >
      {children}
    </div>
  );
}
