import type { Metadata } from "next";

import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Title from "@/components/title";

export const metadata: Metadata = {
  title: "‘Abdu’l-Baha - The Centre of the Covenant",
};

const SHRINE_IMAGES = [
  "/images/shrine/shrine_01.jpg",
  "/images/shrine/shrine_02.jpg",
  "/images/shrine/shrine_03.jpg",
  "/images/shrine/shrine_04.jpg",
  "/images/shrine/shrine_05.jpg",
];

function AbdulbahaIntro() {
  return (
    <section className="intro-section">
      <Title title="Abdu'l-Baha" subtitle="The Centre of the Covenant" />
      <p>
        In His Most Holy Book, Bahá’u’lláh established a covenant with His
        followers, enjoining them to turn, after His passing, to ‘Abdu’l-Bahá,
        Who He describes as “Him Whom God hath purposed, Who hath branched from
        this Ancient Root.” ‘Abdu’l-Bahá’s authority as the “Centre of the
        Covenant” was also established in other texts, including Bahá’u’lláh’s
        Will and Testament.
      </p>
      <div className="follow_link">
        <a href="https://www.bahai.org/abdul-baha/" className="btn-primary">
          Read more about the life of Abdu&apos;l-Baha.
        </a>
      </div>
      <blockquote>
        The divine religions were founded for the purpose of unifying humanity
        and establishing universal peace. Any movement which brings about peace
        and agreement in human society is truly a divine movement; any reform
        which causes people to come together under the shelter of the same
        tabernacle is surely animated by heavenly motives.
        <div className="author">— ‘Abdu’l-Bahá</div>
      </blockquote>
    </section>
  );
}

function Shrine() {
  return (
    <section className="intro-section">
      <Title title="The Shrine of" subtitle="Abdu'l-Baha" />
      <blockquote>
        <p>
          The close of the first century of the Formative Age is but two and a
          half years away. It will seal one hundred years of consecrated effort
          to consolidate and expand the foundation so sacrificially laid during
          the Faith’s Heroic Age. At that time the Bahá’í community will also
          mark the centenary of the Ascension of ‘Abdu’l-Bahá, that moment when
          the beloved Master was released from the confines of this world to
          rejoin His Father in the retreats of celestial glory. His funeral,
          which occurred the following day, was an event “the like of which
          Palestine had never seen”. At its conclusion, His mortal remains were
          laid to rest within a vault of the Mausoleum of the Báb. However, it
          was envisaged by Shoghi Effendi that this would be a temporary
          arrangement. A Shrine was to be erected, of a character befitting the
          unique station of ‘Abdu’l-Bahá, at the appropriate time.
        </p>
        <p>
          That time has come. The Bahá’í world is being summoned to build the
          edifice which will forever embosom those sacred remains. It is to be
          constructed in the vicinity of the Riḍván Garden, on land consecrated
          by the footsteps of the Blessed Beauty; the Shrine of ‘Abdu’l-Bahá
          will thus lie on the crescent traced between the Holy Shrines in
          ‘Akká and Haifa.
        </p>
        <div className="author">
          — The Universal House of Justice - Ridvan 2019
        </div>
      </blockquote>
      <div className="follow_link">
        <a href="https://news.bahai.org/story/1353/" className="btn-primary">
          Read more about the Shrine of ‘Abdu’l-Bahá.
        </a>
      </div>
      <div>
        {SHRINE_IMAGES.map((image) => (
          <div className="feature-img" key={image}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="Shrine of Bahá’u’lláh" />
          </div>
        ))}
      </div>
      <blockquote>
        The structure that is envisaged in the design seeks to honour
        ‘Abdu’l-Bahá&apos;s unique position as the Centre of the Covenant, and
        to reflect at once His lofty station and His humility. It creates a
        space of immense sacredness, to which pilgrims and visitors will be
        drawn for the purpose of prayer and meditation.
        <div className="author">
          — The Universal House of Justice - Department of the Secretariat
        </div>
      </blockquote>
    </section>
  );
}

export default function AbdulbahaPage() {
  return (
    <>
      <Hero img="/images/master_house_01.jpg">
        <Banner title="‘Abdu’l-Baha" blurb="The Centre of the Covenant" />
      </Hero>
      <Main>
        <AbdulbahaIntro />
        <Shrine />
      </Main>
    </>
  );
}
