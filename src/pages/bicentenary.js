import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Main from "../components/main"
import BicentenaryIntro from "../components/bicentenary/bicentenaryIntro"
import TheGateAlbum from "../components/bicentenary/thegatealbum"
import BicentenaryFooter from "../components/bicentenary/bicentenaryFooter"
import ColourSection from "../components/colourSection"
import WhiteSection from "../components/whiteSection"
import Img from "gatsby-image"
import styled from "styled-components"
import Title from "../components/title"

const Bicentenary = ({ data, className }) => (
  <Layout>
    <SEO title="Bicentenary of the birth of the Báb" />
    <Hero img={data.birthBg.childImageSharp.fluid}>
      <Banner title="Bicentenary of" blurb="the Birth of The Báb"></Banner>
    </Hero>
    <Main className={className}>
      <BicentenaryIntro />
      <TheGateAlbum />
      <ColourSection title="The Children" subtitle="of Kelly Village">
        <article className="feature-info">
          <h4>Learning about the new Dawn</h4>
          <p>
            The children of two children's classes of Kelly Village learned
            about the Báb during the weeks leading up to the bicentenary. They
            practiced prayers and songs and performed them for the entire
            community at the main event celebrating the bicentenary.
          </p>
        </article>
        <article className="image-group">
          {data.children.edges.map(({ node }, i) => (
            <Img
              key={i}
              fluid={node.childImageSharp.fluid}
              alt="Children celebrate in Kelly"
            />
          ))}
        </article>
      </ColourSection>
      <section className="banner">
        <Title title="Bicentenary" subtitle="Banner" />
        <div className="banner-center">
          <Img
            fluid={data.banner.childImageSharp.fluid}
            alt="Banner celebrating the Báb"
          />
        </div>
      </section>
      <BicentenaryFooter />
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
    children: allFile(
      filter: { relativePath: { glob: "bicentenary_kelly_children*" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 90, maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    banner: file(relativePath: { eq: "bicentenary_banner.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default styled(Bicentenary)`
  .feature-info h4 {
    color: var(--mainWhite);
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
