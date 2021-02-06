import React from "react"
import styled from "styled-components"
import WhiteSection from "../whiteSection"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getImage = graphql`
  query abdulbaha {
    fluid: file(relativePath: { eq: "abdul-baha.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const CentenaryIntro = ({ className }) => {
  const {
    fluid: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getImage)
  return (
    <WhiteSection
      title="Centenary of"
      subtitle="the Ascension of ‘Abdu’l-Bahá"
      style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}
    >
      <div>
        <div className="image">
          <Img fluid={fluid} alt="‘Abdu’l-Bahá" />
        </div>
        <p className="caption">‘Abdu’l-Bahá (1844-1921)</p>
      </div>
      <div>
        <blockquote>
          The divine religions were founded for the purpose of unifying humanity
          and establishing universal peace. Any movement which brings about
          peace and agreement in human society is truly a divine movement; any
          reform which causes people to come together under the shelter of the
          same tabernacle is surely animated by heavenly motives.
          <div className="author">— ‘Abdu’l-Bahá</div>
        </blockquote>
      </div>
    </WhiteSection>
  )
}

export default styled(CentenaryIntro)`
  padding: 1rem;
  font-weight: 300;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;

  .image {
    width: 90%;
    margin: 0 auto;
  }

  .caption {
    text-align: center;
    font-size: 0.9rem;
  }
  @media screen and (min-width: 480px) {
    .image {
      width: 60%;
      max-width: 600px;
    }
  }
`
