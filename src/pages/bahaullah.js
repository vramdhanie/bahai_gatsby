import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Main from "../components/main"
import BahaIntro from "../components/bahaullah/bahaIntro"

const Bahaullah = ({ data }) => (
  <Layout>
    <SEO title="Bahá’u’lláh - The Glory of God" />
    <Hero img={data.birthBg.childImageSharp.fluid}>
      <Banner title="Bahá’u’lláh" blurb="The Glory of God"></Banner>
    </Hero>
    <Main>
      <BahaIntro />
    </Main>
  </Layout>
)

export const query = graphql`
  query {
    birthBg: file(relativePath: { eq: "baha_shrine_02.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Bahaullah
