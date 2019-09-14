import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Main from "../components/main"

const Community = ({ data }) => (
  <Layout>
    <SEO title="Community Building - What Baha'is do" />
    <Hero img={data.birthBg.childImageSharp.fluid}>
      <Banner
        title="Community Building"
        blurb="The work of the Baha'is"
      ></Banner>
    </Hero>
    <Main>
      <Title title="Community" subtitle="Building" />
      <p>
        Bahá’ís hail from all walks of life. Young and old, men and women alike,
        they live alongside others in every land and belong to every nation.
        They share a common goal of serving humanity and refining their
        inner-lives in accordance with the teachings of Bahá’u’lláh. The
        community to which they belong is one of learning and action, free from
        any sense of superiority or claim to exclusive understanding of truth.
        It is a community that strives to cultivate hope for the future of
        humanity, to foster purposeful effort, and to celebrate the endeavours
        of all those in the world who work to promote unity and alleviate human
        suffering.
      </p>
      <Link to="/">Go back to the homepage</Link>
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
