import React from "react"
import styled from "styled-components"
import Title from "../title"
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
    <section className={className}>
      <Title title="Centenary of" subtitle="the Ascension of ‘Abdu’l-Bahá" />
      <div className="image">
        <Img fluid={fluid} alt="‘Abdu’l-Bahá" />
      </div>
      <p className="caption">‘Abdu’l-Bahá (1844-1921)</p>
    </section>
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
