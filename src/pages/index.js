import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Parallax from "../components/parallax"
import Banner from "../components/banner"
import Main from "../components/main"
import Bicentenary from "../components/home/bicentenary"
import Centenary from "../components/home/centenary"
import HomeFeature from "../components/home/homefeature"
import CommunityFeature from "../components/home/communityFeature"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import AbdulbahaFeature from "../components/home/abdulbahafeature"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Bahá’ís of Trinidad and Tobago" />
      <Parallax>
        <Banner
          title="The Centenary of the Ascension of ‘Abdu’l-Baha"
          blurb="Commemorating the centenary of ‘Abdu’l-Baha's Ascension and the strength of the Covenant"
        >
          <AniLink fade to="/centenary" className="btn-white btn-small">
            Read more
          </AniLink>
        </Banner>
      </Parallax>
      <Main>
        <Centenary />
        <HomeFeature />
        <CommunityFeature activities={data.activities.edges} />
        <AbdulbahaFeature />
        <Bicentenary />
      </Main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    activities: allMdx(sort: { fields: frontmatter___order, order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
