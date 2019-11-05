import React from "react"
import styled from "styled-components"
import Title from "../title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getImage = graphql`
  query image {
    fluid: file(relativePath: { eq: "bicentenary_02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BicentenaryIntro = ({ className }) => {
  const {
    fluid: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getImage)
  return (
    <section className={className}>
      <Title title="Bicentenary of" subtitle="the birth of the Báb" />
      <div className="image">
        <Img fluid={fluid} alt="Bicentenary Logo" />
      </div>
      <p>
        On 29 AND 30 October 2019, across Trinidad and Tobago and in countless
        settings and places throughout the world, people celebrated the 200th
        Anniversary of the Birth of The Báb, whose revitalizing message prepared
        the way for the coming of Bahá’u’lláh, the founder of the Bahá’í Faith.
      </p>
      <p>Here are a few of the ways in which Trinidad and Tobago celebrated.</p>
    </section>
  )
}

export default styled(BicentenaryIntro)`
  padding: 1rem;
  font-weight: 300;
  width: 80%;
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
