import Link from "next/link";

import type { Activity } from "@/lib/activities";

export default function Card({ activity }: { activity: Activity }) {
  const { title, slug, image, excerpt } = activity;
  return (
    <article className="card">
      <div className="image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <Link href={`/${slug}`} className="link">
          read more
        </Link>
      </div>
    </article>
  );
}
