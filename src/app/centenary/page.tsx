import type { Metadata } from "next";

import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Title from "@/components/title";
import { WhiteSection } from "@/components/whiteSection";

export const metadata: Metadata = {
  title: "The Centenary of the Ascension of ‘Abdu’l‑Bahá",
};

function CentenaryIntro() {
  return (
    <WhiteSection
      title="Centenary of"
      subtitle="the Ascension of ‘Abdu’l-Bahá"
      style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}
    >
      <div>
        <div className="image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/abdul-baha.jpg" alt="‘Abdu’l-Bahá" loading="lazy" />
        </div>
        <p className="caption">‘Abdu’l-Bahá (1844-1921)</p>
      </div>
      <div>
        <blockquote>
          The divine religions were founded for the purpose of unifying
          humanity and establishing universal peace. Any movement which brings
          about peace and agreement in human society is truly a divine
          movement; any reform which causes people to come together under the
          shelter of the same tabernacle is surely animated by heavenly
          motives.
          <div className="author">— ‘Abdu’l-Bahá</div>
        </blockquote>
      </div>
    </WhiteSection>
  );
}

function CentenaryFooter() {
  return (
    <section className="intro-section">
      <div className="follow_link">
        <a href="https://www.bahai.org/abdul-baha/" className="btn-primary">
          Explore the life of ‘Abdu’l‑Bahá
        </a>
      </div>
      <blockquote>
        The most vital duty, in this day, is to purify your characters, to
        correct your manners, and improve your conduct. The beloved of the
        Merciful must show forth such character and conduct among His
        creatures, that the fragrance of their holiness may be shed upon the
        whole world, and may quicken the dead, inasmuch as the purpose of the
        Manifestation of God and the dawning of the limitless lights of the
        Invisible is to educate the souls of men, and refine the character of
        every living man—so that blessed individuals, who have freed themselves
        from the murk of the animal world, shall rise up with those qualities
        which are the adornings of the reality of man.
        <div className="author">‘Abdu’l‑Bahá</div>
      </blockquote>
    </section>
  );
}

export default function CentenaryPage() {
  return (
    <>
      <Hero img="/images/shrine/shrine_05.jpg">
        <Banner title="Centenary of" blurb="the Ascension of ‘Abdu’l‑Bahá" />
      </Hero>
      <Main className="centenary-main">
        <CentenaryIntro />

        <section className="colourSection">
          <Title title="The Events" subtitle="of this year" />
          <article className="feature-info">
            <div className="banner-center">
              <h4>How Trinidad and Tobago Remembers ‘Abdu’l‑Bahá</h4>
              <p>
                Throughout the year from Ridvan (April 21) 2021 to Ridvan 2022
                a series of special occasions will be marked by the Bahá’ís of
                the world. Trinidad and Tobago will be joining the rest of the
                world with commemorative events.
              </p>
              <p>
                Details of these special occasions will be posted here as the
                year unfolds.
              </p>
            </div>
          </article>
        </section>
        <section className="banner">
          <Title title="‘Abdu’l-Baha" subtitle="The Centre of the Covenant" />
          <div className="banner-center">
            ‘Abdu’l‑Bahá was appointed by Baha&apos;u&apos;llah as the only
            authorized interpreter of His writings, the perfect exemplar of the
            Faith&apos;s spirit and teachings and as the Centre of His mighty
            Covenant.
          </div>
        </section>
        <section className="colourSection">
          <Title title="His Will" subtitle="and Testament" />
          <article className="feature-info">
            <div className="banner-center">
              <h4>The Significance of His Will and Testament</h4>
              <blockquote className="oncolor">
                We are conscious that the coming year will also mark a century
                since His Will and Testament—that “momentous”, “historic”,
                “immortal” Document—“called into being, outlined the features
                and set in motion the processes” of the Administrative Order,
                “the very pattern of that divine civilization which the
                almighty Law of Bahá’u’lláh is designed to establish upon
                earth”. This “unique” and “divinely-conceived” Order, this
                “mighty administrative structure”, had been fashioned by its
                Architect to perpetuate the Covenant and channel the spiritual
                powers of the Cause.
                <div className="author">The Universal House of Justice</div>
              </blockquote>

              <blockquote className="oncolor">
                O ye beloved of the Lord! In this sacred Dispensation, conflict
                and contention are in no wise permitted. Every aggressor
                deprives himself of God’s grace.
                <div className="author">
                  The Will and Testament of ‘Abdu’l‑Bahá
                </div>
              </blockquote>
            </div>
          </article>
        </section>
        <CentenaryFooter />
      </Main>
    </>
  );
}
