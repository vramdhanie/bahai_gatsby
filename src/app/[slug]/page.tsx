import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Main from "@/components/main";
import { getActivityBySlug, getAllActivities } from "@/lib/activities";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllActivities().map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  return {
    title: activity ? `Community Building | ${activity.title}` : "Not found",
  };
}

export default async function ActivityPage({ params }: PageProps) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);

  if (!activity) {
    notFound();
  }

  return (
    <>
      <Hero img={activity.image}>
        <Banner title={activity.title} blurb={activity.blurb} />
      </Hero>
      <Main>
        <section className="activity-section">
          <Link className="link" href="/community">
            Back to Community Building
          </Link>

          <div className="content">
            <MDXRemote source={activity.body} />
          </div>
        </section>
      </Main>
    </>
  );
}
