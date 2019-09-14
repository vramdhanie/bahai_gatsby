import React from "react"
import styled from "styled-components"
import Title from "../title"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const getImage = graphql`
  query homeImage {
    fluid: file(relativePath: { eq: "baha_shrine_01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HomeFeature = ({ className }) => {
  const {
    fluid: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getImage)
  return (
    <div className={className}>
      <Title title="Bahá’u’lláh" subtitle="" />
      <div className="feature-center">
        <article className="feature-img">
          <Img fluid={fluid} alt="Shrine of Bahá’u’lláh" />
        </article>
        <article className="feature-info">
          <h4>The Glory of God</h4>
          <p>
            Bahá’u’lláh—the “Glory of God”—is the Promised One foretold by the
            Báb and all of the Divine Messengers of the past. Bahá’u’lláh
            delivered a new Revelation from God to humanity. Thousands of
            verses, letters and books flowed from His pen. In His Writings, He
            outlined a framework for the development of a global civilization
            which takes into account both the spiritual and material dimensions
            of human life. For this, He endured 40 years of imprisonment,
            torture and exile.
          </p>
          <AniLink fade to="/bahaullah" className="btn-white">
            Read more
          </AniLink>
        </article>
      </div>
    </div>
  )
}

export default styled(HomeFeature)`
  font-weight: 300;
  padding: 4rem 0;
  .feature-center {
    width: 80vw;
    margin: 0 auto;
  }
  .feature-img {
    margin: 3rem 0;
  }
  .feature-info {
    margin-top: 3rem;
  }
  .feature-img {
    position: relative;
  }

  .feature-img img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
  }
  .feature-img div {
    box-shadow: var(--lightShadow);
  }
  .feature-info h4 {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--secondary);
    text-shadow: 1px 1px 2px var(--secondaryDark);
  }

  border-bottom: solid 2px rgba(219, 132, 10, 0.2);
  margin-bottom: 10px;

  background: #5aa0ae;

  @media screen and (min-width: 768px) {
    .feature-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: center;
      margin-top: 3rem;
    }

    .feature-img,
    .feature-info {
      margin: 0;
    }
    .feature-img img {
      max-height: 500px;
    }
    .img-container {
      max-height: 500px;
    }
    .feature-info p {
      width: 80%;
    }
  }
  @media screen and (min-width: 992px) {
    .img-container::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid var(--primaryColor);
      box-sizing: border-box;
      top: -16px;
      left: -16px;
      z-index: -1;
    }
  }

  @media screen and (min-width: 1200px) {
    .feature-center {
      width: 95vw;
      max-width: 1170px;
    }
  }
`
