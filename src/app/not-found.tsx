import type { Metadata } from "next";
import Link from "next/link";

import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Title from "@/components/title";

export const metadata: Metadata = {
  title: "404: Not found",
};

export default function NotFoundPage() {
  return (
    <>
      <Hero img="/images/lost.jpg">
        <Banner title="Search" blurb="for Truth" />
      </Hero>
      <Main>
        <div className="notfound">
          <Title title="NOT" subtitle="FOUND" />
          <p>Looks like the page you are looking for does not exist.</p>
          <Link href="/" className="btn-primary">
            Visit the Home Page
          </Link>
          <blockquote>
            Otherwise, this Servant regardeth Himself as utterly lost and
            non-existent, even before one of the beloved of God, how much less
            in the presence of His holy ones.
            <div className="author">-Baha&apos;u&apos;llah</div>
          </blockquote>
        </div>
      </Main>
    </>
  );
}
