import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getBannerImage = graphql`
  query bannerImage {
    fluid: file(relativePath: { eq: "bicentenary.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Bicentenary = ({ className }) => {
  const {
    fluid: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getBannerImage)
  return (
    <div className={className}>
      <div className="image">
        <Img fluid={fluid} alt="Bicentenary Logo" />
      </div>
      <p>
        On 29 and 30 October 2019 the Baha'is of Trinidad and Tobago will be
        joining the rest of the world to celebrate the 200th anniversary of The
        Báb.
      </p>

      <p>
        {" "}
        The Bahá’í Faith began with the mission entrusted by God to two Divine
        Manifestations—the Báb and Bahá’u’lláh.
      </p>

      <p>
        Born two centuries ago, in October 1819, the Báb announced that He was
        the bearer of a message destined to transform the life of humanity,
        which stood at the threshold of a new era. He called for a spiritual and
        moral reformation, to improve the position of women and the lot of the
        poor. He founded a distinct and independent religion, inspiring His
        followers to transform their lives and carry out great acts of heroism.
        The Báb’s mission was to prepare the way for Bahá’u’lláh.
      </p>
      <AniLink fade to="/bicentenary" className="btn-primary">
        Read more
      </AniLink>
    </div>
  )
}

export default styled(Bicentenary)`
  padding: 10px;
  font-weight: 300;
  border-bottom: solid 2px rgba(219, 132, 10, 0.2);
  width: 95%;
  max-width: 800px;
  margin: 0 auto;

  .image {
    width: 90%;
    margin: 0 auto;
  }

  @media screen and (min-width: 480px) {
    .image {
      width: 60%;
      max-width: 600px;
    }
  }
`
