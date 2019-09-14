import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Main from "../components/main"
import BicentenaryIntro from "../components/bicentenary/bicentenaryIntro"

const Bicentenary = ({ data }) => (
  <Layout>
    <SEO title="Bicentenary of the birth of the Báb" />
    <Hero img={data.birthBg.childImageSharp.fluid}>
      <Banner title="Bicentenary of" blurb="the Birth of The Báb"></Banner>
    </Hero>
    <Main>
      <BicentenaryIntro />
    </Main>
  </Layout>
)

export const query = graphql`
  query {
    birthBg: file(relativePath: { eq: "bab_shrine_01.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Bicentenary
