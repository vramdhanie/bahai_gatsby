import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Parallax from "../components/parallax"
import Banner from "../components/banner"
import Main from "../components/main"
import Bicentenary from "../components/home/bicentenary"
import HomeFeature from "../components/home/homefeature"
import CommunityFeature from "../components/home/communityFeature"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Parallax>
        <Banner
          title="The Bicentenary of the Birth of the Báb"
          blurb="Celebrating the 200th anniversary of the Birth of the Báb, the one who foretold the coming of Bahá’u’lláh, the founder of the Baha'i Faith."
        />
        <AniLink fade to="/bicentenary" className="btn-white btn-small">
          Read more
        </AniLink>
      </Parallax>
      <Main>
        <Bicentenary />
        <HomeFeature />
        <CommunityFeature />
      </Main>
    </Layout>
  )
}

export default IndexPage
