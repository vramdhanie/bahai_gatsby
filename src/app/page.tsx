import Link from "next/link";

import Banner from "@/components/banner";
import Card from "@/components/card";
import Main from "@/components/main";
import Parallax from "@/components/parallax";
import Title from "@/components/title";
import { getAllActivities } from "@/lib/activities";

function Centenary() {
  return (
    <div className="home-centenary">
      <Title title="‘Abdu’l-Bahá" subtitle="" />
      <div className="feature-center">
        <div className="image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/abdul-baha.jpg" alt="‘Abdu’l-Bahá" loading="lazy" />
          <p className="caption">‘Abdu’l-Bahá (1844-1921)</p>
        </div>
        <div className="text">
          <p className="blurb">
            From Ridvan (21 April) 2021 to Ridvan 2022 the Bahá’í world will be
            commemorating an &quot;infinitely poignant moment in the history of
            mankind&quot;, when the eldest son of Bahá’u’lláh, ‘Abdu’l-Bahá,
            passed away from this earthly plane and ascended to the Abha
            kingdom.
          </p>
          <blockquote>
            His passing took from the Bahá’ís of that era a Figure Who was the
            object of their ardent love and loyalty; to the faithful of this
            age, He remains without parallel: a perfect embodiment in word and
            deed of all that His Father taught, the One through Whom the
            Covenant of Bahá’u’lláh was “proclaimed, championed and vindicated”.
            <div className="author">The Universal House of Justice</div>
          </blockquote>
        </div>
      </div>
      <div className="control">
        <Link href="/centenary" className="btn-primary">
          Read more
        </Link>
      </div>
    </div>
  );
}

function HomeFeature() {
  return (
    <div className="home-feature">
      <Title title="Bahá’u’lláh" subtitle="" />
      <div className="feature-center">
        <article className="feature-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/baha_shrine_01.jpg"
            alt="Shrine of Bahá’u’lláh"
            loading="lazy"
          />
        </article>
        <article className="feature-info">
          <h3>The Glory of God</h3>
          <p>
            Bahá’u’lláh—the “Glory of God”—is the Promised One foretold by the
            Báb and all of the Divine Messengers of the past. Bahá’u’lláh
            delivered a new Revelation from God to humanity. Thousands of
            verses, letters and books flowed from His pen. In His Writings, He
            outlined a framework for the development of a global civilization
            which takes into account both the spiritual and material dimensions
            of human life. For this, He endured 40 years of imprisonment,
            torture and exile.
          </p>
          <Link href="/bahaullah" className="btn-white">
            Read more
          </Link>
        </article>
      </div>
    </div>
  );
}

function AbdulbahaFeature() {
  return (
    <section className="abdulbaha-feature">
      <Title title="Abdu'l-Baha" subtitle="The Centre of the Covenant" />
      <div className="feature-center">
        <article className="feature-info">
          <h3>The Master</h3>
          <p>
            In His Most Holy Book, Bahá’u’lláh established a covenant with His
            followers, enjoining them to turn, after His passing, to
            ‘Abdu’l-Bahá, Who He describes as “Him Whom God hath purposed, Who
            hath branched from this Ancient Root.” ‘Abdu’l-Bahá’s authority as
            the “Centre of the Covenant” was also established in other texts,
            including Bahá’u’lláh’s Will and Testament.
          </p>
          <Link href="/abdulbaha" className="btn-white">
            Read more
          </Link>
        </article>
        <article className="feature-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/shrine/shrine_04.jpg"
            alt="Shrine of Abdu'l-Baha"
            loading="lazy"
          />
        </article>
      </div>
    </section>
  );
}

function Bicentenary() {
  return (
    <div className="home-bicentenary">
      <div className="image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/bicentenary.png" alt="Bicentenary Logo" loading="lazy" />
      </div>
      <p>
        On 29 and 30 October 2019 the Baha&apos;is of Trinidad and Tobago will
        be joining the rest of the world to celebrate the 200th anniversary of
        The Báb.
      </p>
      <p>
        The Bahá’í Faith began with the mission entrusted by God to two Divine
        Manifestations—the Báb and Bahá’u’lláh.
      </p>
      <p>
        Born two centuries ago, in October 1819, the Báb announced that He was
        the bearer of a message destined to transform the life of humanity,
        which stood at the threshold of a new era. He called for a spiritual
        and moral reformation, to improve the position of women and the lot of
        the poor. He founded a distinct and independent religion, inspiring His
        followers to transform their lives and carry out great acts of heroism.
        The Báb’s mission was to prepare the way for Bahá’u’lláh.
      </p>
      <Link href="/bicentenary" className="btn-primary">
        Read more
      </Link>
    </div>
  );
}

export default function IndexPage() {
  const activities = getAllActivities();
  return (
    <>
      <Parallax>
        <Banner
          title="The Centenary of the Ascension of ‘Abdu’l-Baha"
          blurb="Commemorating the centenary of ‘Abdu’l-Baha's Ascension and the strength of the Covenant"
        >
          <Link href="/centenary" className="btn-white btn-small">
            Read more
          </Link>
        </Banner>
      </Parallax>
      <Main>
        <Centenary />
        <HomeFeature />
        <section className="community-feature">
          <Title title="Community" subtitle="Building" />
          <div className="feature-centre">
            {activities.map((activity) => (
              <Card activity={activity} key={activity.slug} />
            ))}
          </div>
        </section>
        <AbdulbahaFeature />
        <Bicentenary />
      </Main>
    </>
  );
}
