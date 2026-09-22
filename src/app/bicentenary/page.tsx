import type { Metadata } from "next";

import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Title from "@/components/title";
import { ColourSection } from "@/components/whiteSection";

export const metadata: Metadata = {
  title: "Bicentenary of the birth of the Báb",
  description:
    "How Trinidad and Tobago celebrated the 200th anniversary of the birth of the Báb in October 2019.",
};

const KELLY_IMAGES = [
  "/images/bicentenary_kelly_children_01.jpg",
  "/images/bicentenary_kelly_children_02.jpg",
  "/images/bicentenary_kelly_children_03.jpg",
  "/images/bicentenary_kelly_children_04.jpg",
];

function BicentenaryIntro() {
  return (
    <section className="intro-section">
      <Title title="Bicentenary of" subtitle="the birth of the Báb" />
      <div className="image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/bicentenary_02.jpg" alt="Bicentenary Logo" loading="lazy" />
      </div>
      <p>
        On 29 AND 30 October 2019, across Trinidad and Tobago and in countless
        settings and places throughout the world, people celebrated the 200th
        Anniversary of the Birth of The Báb, whose revitalizing message
        prepared the way for the coming of Bahá’u’lláh, the founder of the
        Bahá’í Faith.
      </p>
      <p>Here are a few of the ways in which Trinidad and Tobago celebrated.</p>
    </section>
  );
}

function TheGateAlbum() {
  return (
    <section className="gate-album">
      <p className="info">
        <span className="highlight">The Gate</span> - An album commemorating
        the Bicentenary of the Birth of The Báb depicting some significant
        events in His Lifetime, is streaming on Soundcloud.{" "}
        <span className="date">Released on 28 October 2019</span>.
      </p>
      <iframe
        width="100%"
        height="500"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        title="Soundcloud album"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/910796515&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </section>
  );
}

function BicentenaryFooter() {
  return (
    <section className="intro-section">
      <div className="follow_link">
        <a
          href="https://bicentenary.bahai.org/the-bab/"
          className="btn-primary"
        >
          See how the World Celebrated
        </a>
      </div>
      <blockquote>
        Verily, we have believed in Thee and in Thy signs ere the dawn of Thy
        Manifestation, and in Thee are we all well assured. Verily, we have
        believed in Thee and in Thy signs after the fulfillment of Thy
        Manifestation, and in Thee do we all believe. Verily, we have believed
        in Thee and in Thy signs at the hour of Thy Manifestation and bear
        witness that through Thine injunction “Be Thou” all things have been
        created. Every Manifestation is but a revelation of Thine Own Self,
        with each of Whom we have truly appeared and we bow down in adoration
        before Thee. Thou hast been, O my Best-Beloved, and shalt ever be my
        witness throughout bygone times and in the days to come. Verily, Thou
        art the All-Powerful, the Ever-Faithful, the Omnipotent.
        <div className="author">The Báb</div>
      </blockquote>
    </section>
  );
}

export default function BicentenaryPage() {
  return (
    <>
      <Hero img="/images/bab_shrine_01.jpg">
        <Banner title="Bicentenary of" blurb="the Birth of The Báb" />
      </Hero>
      <Main className="bicentenary-main">
        <BicentenaryIntro />
        <TheGateAlbum />
        <ColourSection title="The Children" subtitle="of Kelly Village">
          <article className="feature-info">
            <h3>Learning about the new Dawn</h3>
            <p>
              The children of two children&apos;s classes of Kelly Village
              learned about the Báb during the weeks leading up to the
              bicentenary. They practiced prayers and songs and performed them
              for the entire community at the main event celebrating the
              bicentenary.
            </p>
          </article>
          <article className="image-group">
            {KELLY_IMAGES.map((image) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={image}
                src={image}
                alt="Children celebrate in Kelly"
                loading="lazy"
              />
            ))}
          </article>
        </ColourSection>
        <section className="banner">
          <Title title="Bicentenary" subtitle="Banner" />
          <div className="banner-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bicentenary_banner.png"
              alt="Banner celebrating the Báb"
              loading="lazy"
            />
          </div>
        </section>
        <BicentenaryFooter />
      </Main>
    </>
  );
}
