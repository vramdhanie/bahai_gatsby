import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Title from "../title"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const getImage = graphql`
  query shrine {
    fluid: file(relativePath: { eq: "shrine/shrine_04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const AbdulbahaFeature = ({ className }) => {
  const {
    fluid: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getImage)
  return (
    <section className={className}>
      <Title title="Abdu'l-Baha" subtitle="The Centre of the Covenant" />
      <div className="feature-center">
        <article className="feature-info">
          <h4>The Master</h4>
          <p>
            In His Most Holy Book, Bahá’u’lláh established a covenant with His
            followers, enjoining them to turn, after His passing, to
            ‘Abdu’l-Bahá, Who He describes as “Him Whom God hath purposed, Who
            hath branched from this Ancient Root.” ‘Abdu’l-Bahá’s authority as
            the “Centre of the Covenant” was also established in other texts,
            including Bahá’u’lláh’s Will and Testament.
          </p>
          <AniLink fade to="/abdulbaha" className="btn-white">
            Read more
          </AniLink>
        </article>
        <article className="feature-img">
          <Img fluid={fluid} alt="Shrine of Abdu'l-Baha" />
        </article>
      </div>
    </section>
  )
}

export default styled(AbdulbahaFeature)`
  font-weight: 300;
  padding: 4rem 0;

  .feature-center {
    width: 80%;
    margin: 0 auto;
    max-width: 800px;
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
    color: var(--mainWhite);
    text-shadow: 1px 1px 2px var(--primaryDark);
  }

  border-bottom: solid 2px rgba(219, 132, 10, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
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
      width: 90vw;
      max-width: 1170px;
    }
  }
`
