import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Main from "../components/main"
import CentenaryIntro from "../components/centenary/centenaryIntro"
import CentenaryFooter from "../components/centenary/centenaryFooter"
import ColourSection from "../components/colourSection"
import styled from "styled-components"
import Title from "../components/title"

const Centenary = ({ data, className }) => (
  <Layout>
    <SEO title="The Centenary of the Ascension of ‘Abdu’l‑Bahá" />
    <Hero img={data.shrineBg.childImageSharp.fluid}>
      <Banner
        title="Centenary of"
        blurb="the Ascension of ‘Abdu’l‑Bahá"
      ></Banner>
    </Hero>
    <Main className={className}>
      <CentenaryIntro />

      <section className="colourSection">
        <Title title="The Events" subtitle="of this year" />
        <article className="feature-info">
          <div className="banner-center">
            <h4>How Trinidad and Tobago Remembers ‘Abdu’l‑Bahá</h4>
            <p>
              Throughout the year from Ridvan (April 21) 2021 to Ridvan 2022 a
              series of special occasions will be marked by the Bahá’ís of the
              world. Trinidad and Tobago will be joining the rest of the world
              with commemorative events.
            </p>
            <p>
              Details of these special occasions will be posted here as the year
              unfolds.
            </p>
          </div>
        </article>
      </section>
      <section className="banner">
        <Title title="‘Abdu’l-Baha" subtitle="The Centre of the Covenant" />
        <div className="banner-center">
          ‘Abdu’l‑Bahá was appointed by Baha'u'llah as the only authorized
          interpreter of His writings, the perfect exemplar of the Faith's
          spirit and teachings and as the Centre of His might Covenant.
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
              “immortal” Document—“called into being, outlined the features and
              set in motion the processes” of the Administrative Order, “the
              very pattern of that divine civilization which the almighty Law of
              Bahá’u’lláh is designed to establish upon earth”. This “unique”
              and “divinely-conceived” Order, this “mighty administrative
              structure”, had been fashioned by its Architect to perpetuate the
              Covenant and channel the spiritual powers of the Cause.
              <div className="author">The Universal House of Justice</div>
            </blockquote>

            <blockquote className="oncolor">
              O ye beloved of the Lord! In this sacred Dispensation, conflict
              and contention are in no wise permitted. Every aggressor deprives
              himself of God’s grace.
              <div className="author">
                The Will and Testament of ‘Abdu’l‑Bahá
              </div>
            </blockquote>
          </div>
        </article>
      </section>
      <CentenaryFooter />
    </Main>
  </Layout>
)

export const query = graphql`
  query {
    shrineBg: file(relativePath: { eq: "shrine/shrine_05.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default styled(Centenary)`
  .feature-info h4 {
    color: var(--mainWhite);
  }

  .colourSection {
    padding: 10px;
    background: var(--primaryLight);
  }

  .image-group img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
  }
  .image-group div {
    box-shadow: var(--lightShadow);
    margin-bottom: 0.5rem;
  }

  .banner {
    padding: 4rem 0;
  }
  .banner-center {
    width: 80%;
    margin: 0 auto;
    max-width: 800px;
  }

  .oncolor {
    color: var(--primaryText);
  }

  @media screen and (min-width: 992px) {
    .image-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      grid-row-gap: 1rem;
      align-items: center;
      margin-top: 3rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .banner-center {
      width: 90vw;
      max-width: 1170px;
    }
  }
`
