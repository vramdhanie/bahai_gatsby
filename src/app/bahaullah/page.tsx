import type { Metadata } from "next";

import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Title from "@/components/title";

export const metadata: Metadata = {
  title: "Bahá’u’lláh - The Glory of God",
  description:
    "Bahá’u’lláh, the Glory of God, founder of the Bahá’í Faith, and the Covenant that has preserved the unity of the Faith.",
};

export default function BahaullahPage() {
  return (
    <>
      <Hero img="/images/baha_shrine_02.jpg">
        <Banner title="Bahá’u’lláh" blurb="The Glory of God" />
      </Hero>
      <Main>
        <section className="intro-section">
          <Title title="Bahá’u’lláh" subtitle="" />
          <p>
            The Bahá’í Faith began with the mission entrusted by God to two
            Divine Messengers—the Báb and Bahá’u’lláh. Today, the distinctive
            unity of the Faith They founded stems from explicit instructions
            given by Bahá’u’lláh that have assured the continuity of guidance
            following His passing. This line of succession, referred to as the
            Covenant, went from Bahá’u’lláh to His Son ‘Abdu’l-Bahá, and then
            from ‘Abdu’l-Bahá to His grandson, Shoghi Effendi, and the
            Universal House of Justice, ordained by Bahá’u’lláh. A Bahá’í
            accepts the divine authority of the Báb and Bahá’u’lláh and of
            these appointed successors.
          </p>
          <div className="follow_link">
            <a href="https://www.bahai.org/bahaullah/" className="btn-primary">
              Read more about the life of Bahá’u’lláh.
            </a>
          </div>
          <blockquote>
            Bahá’u’lláh has drawn the circle of unity, He has made a design for
            the uniting of all the peoples, and for the gathering of them all
            under the shelter of the tent of universal unity. This is the work
            of the Divine Bounty, and we must all strive with heart and soul
            until we have the reality of unity in our midst, and as we work, so
            will strength be given unto us.
            <div className="author">— ‘Abdu’l-Bahá</div>
          </blockquote>
        </section>
      </Main>
    </>
  );
}
