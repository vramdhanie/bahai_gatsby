import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Title from "../title"

const getBannerImage = graphql`
  query abdulbahaImage {
    fluid: file(relativePath: { eq: "abdul-baha.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Centenary = ({ className }) => {
  const {
    fluid: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getBannerImage)
  return (
    <div className={className}>
      <Title title="‘Abdu’l-Bahá" subtitle="" />
      <div className="feature-center">
        <div className="image">
          <Img fluid={fluid} alt="‘Abdu’l-Bahá" />
          <p className="caption">‘Abdu’l-Bahá (1844-1921)</p>
        </div>
        <div className="text">
          <p className="blurb">
            From Ridvan (21 April) 2021 to Ridvan 2022 the Bahá’í world will be
            commemorating an "infinitely poignant moment in the history of
            mankind", when the eldest son of Bahá’u’lláh, ‘Abdu’l-Bahá, passed
            away from this earthly plain and ascended to the Abha kingdom.
          </p>
          <blockquote>
            His passing took from the Bahá’ís of that era a Figure Who was the
            object of their ardent love and loyalty; to the faithful of this
            age, He remains without parallel: a perfect embodiment in word and
            deed of all that His Father taught, the One through Whom the
            Covenant of Bahá’u’lláh was “proclaimed, championed and vindicated”.
            <div className="author">The Universal House of Justice</div>
          </blockquote>
        </div>
      </div>
      <div className="control">
        <AniLink fade to="/centenary" className="btn-primary">
          Read more
        </AniLink>
      </div>
    </div>
  )
}

export default styled(Centenary)`
  padding: 10px;
  font-weight: 300;
  border-bottom: solid 2px rgba(219, 132, 10, 0.2);
  width: 95%;
  margin: 0 auto;

  .control {
    display: flex;
    justify-content: center;
  }

  .feature-center {
    width: 80%;
    margin: 0 auto;
    max-width: 800px;
    display: flex;
    flex-direction: column;
  }
  .blurb {
    margin-top: 10px;
  }

  .image {
    width: 90%;
    margin: 0 auto;
    flex: 1;
  }

  .text {
    flex: 1;
  }

  .caption {
    text-align: center;
    font-size: 0.9rem;
  }

  @media screen and (min-width: 600px) {
    .image {
      width: 60%;
      max-width: 400px;
    }

    .feature-center {
      flex-direction: row-reverse;
    }
  }

  @media screen and (min-width: 768px) {
    .feature-center {
      display: flex;
      align-items: center;
      margin-top: 3rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .feature-center {
      width: 90vw;
      max-width: 1170px;
    }
  }
`
