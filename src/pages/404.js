import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import Title from "../components/title"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Banner from "../components/banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const NotFoundPage = ({ data, className }) => (
  <Layout>
    <SEO title="404: Not found" />
    <Hero img={data.lostBg.childImageSharp.fluid}>
      <Banner title="Search" blurb="for Truth"></Banner>
    </Hero>
    <Main>
      <div className={className}>
        <Title title="NOT" subtitle="FOUND" />
        <p>Looks like the page you are looking for does not exist.</p>
        <AniLink fade to="/" className="btn-primary">
          Visit the Home Page
        </AniLink>
        <blockquote>
          Otherwise, this Servant regardeth Himself as utterly lost and
          non-existent, even before one of the beloved of God, how much less in
          the presence of His holy ones.
          <div className="author">-Baha'u'llah</div>
        </blockquote>
      </div>
    </Main>
  </Layout>
)

export const query = graphql`
  query {
    lostBg: file(relativePath: { eq: "lost.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default styled(NotFoundPage)`
  padding: 20px;
  text-align: center;

  p {
    font-size: 1.3rem;
  }
  blockquote {
    margin: 0 auto;
    margin-top: 20px;

    max-width: 800px;
  }
`
