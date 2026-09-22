import type { Metadata } from "next";

import ActivityCard from "@/components/activityCard";
import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Title from "@/components/title";
import { getAllActivities } from "@/lib/activities";

export const metadata: Metadata = {
  title: "Community Building - What Bahá’ís do",
  description:
    "The community-building work of the Bahá’ís of Trinidad and Tobago: children’s classes, junior youth groups, study circles, and devotional gatherings.",
};

function CommunityIntro() {
  return (
    <section className="intro-section">
      <Title title="Community" subtitle="Building" />
      <p>
        Bahá’ís hail from all walks of life. Young and old, men and women
        alike, they live alongside others in every land and belong to every
        nation. They share a common goal of serving humanity and refining
        their inner-lives in accordance with the teachings of Bahá’u’lláh. The
        community to which they belong is one of learning and action, free
        from any sense of superiority or claim to exclusive understanding of
        truth. It is a community that strives to cultivate hope for the future
        of humanity, to foster purposeful effort, and to celebrate the
        endeavours of all those in the world who work to promote unity and
        alleviate human suffering.
      </p>

      <blockquote>
        “What are the requirements? Love for mankind, sincerity toward all,
        reflecting the oneness of the world of humanity, philanthropy,
        becoming enkindled with the fire of the love of God, attainment to the
        knowledge of God and that which is conducive to human welfare.”
        <div className="author">— ‘Abdu’l-Bahá</div>
      </blockquote>
    </section>
  );
}

export default function CommunityPage() {
  const activities = getAllActivities();
  return (
    <>
      <Hero img="/images/junior_youth_02.jpg">
        <Banner title="Community Building" blurb="The work of the Bahá’ís" />
      </Hero>
      <Main>
        <CommunityIntro />
        <section className="activity-list">
          {activities.map((activity) => (
            <ActivityCard activity={activity} key={activity.slug} />
          ))}
        </section>
      </Main>
    </>
  );
}
