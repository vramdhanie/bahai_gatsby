import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Main from "../components/main"
import { graphql } from "gatsby"
import AbdulbahaIntro from "../components/abdulbaha/abdulbahaintro"
import Shrine from "../components/abdulbaha/shrine"

const Abdulbaha = ({ className, data }) => {
  return (
    <Layout>
      <SEO title="Abdu'l-Baha - The Centre of the Covenant" />
      <Hero img={data.abdulbahaBg.childImageSharp.fluid}>
        <Banner title="Abdu'l-Baha" blurb="The Centre of the Covenant"></Banner>
      </Hero>
      <Main>
        <AbdulbahaIntro />
        <Shrine images={data.shrine.edges} />
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query {
    abdulbahaBg: file(relativePath: { eq: "master_house_01.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    shrine: allFile(filter: { relativeDirectory: { eq: "shrine" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
export default styled(Abdulbaha)``
