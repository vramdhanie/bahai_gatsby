import Link from "next/link";

import type { Activity } from "@/lib/activities";

export default function ActivityCard({ activity }: { activity: Activity }) {
  const { title, slug, image, blurb, excerpt } = activity;
  return (
    <article className="activity-card">
      <div className="image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="info">
        <div>
          <h2>{title}</h2>
          <p>{blurb}</p>
          <p>{excerpt}</p>
          <Link href={`/${slug}`} className="btn-primary">
            read more
          </Link>
        </div>
      </div>
    </article>
  );
}
