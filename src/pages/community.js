import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CommunityIntro from "../components/community/commmunityIntro"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Main from "../components/main"

const Community = ({ data }) => (
  <Layout>
    <SEO title="Community Building - What Bahá’ís do" />
    <Hero img={data.birthBg.childImageSharp.fluid}>
      <Banner
        title="Community Building"
        blurb="The work of the Bahá’ís"
      ></Banner>
    </Hero>
    <Main>
      <CommunityIntro />
    </Main>
  </Layout>
)

export const query = graphql`
  query {
    birthBg: file(relativePath: { eq: "junior_youth_02.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Community
