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
        settings and places throughout the world, people will celebrate the
        200th Anniversary of the Birth of The Báb, whose revitalizing message
        prepared the way for the coming of Bahá’u’lláh, the founder of the
        Bahá’í Faith.
      </p>
      <p>
        Stay tuned to this page for information about the celebrations happening
        in your community.
      </p>
      <div class="follow_link">
        <a href="https://bicentenary.bahai.org/the-bab/" class="btn-primary">
          See how the World Celebrates
        </a>
      </div>
      <blockquote>
        Verily, we have believed in Thee and in Thy signs ere the dawn of Thy
        Manifestation, and in Thee are we all well assured. Verily, we have
        believed in Thee and in Thy signs after the fulfillment of Thy
        Manifestation, and in Thee do we all believe. Verily, we have believed
        in Thee and in Thy signs at the hour of Thy Manifestation and bear
        witness that through Thine injunction “Be Thou” all things have been
        created. Every Manifestation is but a revelation of Thine Own Self, with
        each of Whom we have truly appeared and we bow down in adoration before
        Thee. Thou hast been, O my Best-Beloved, and shalt ever be my witness
        throughout bygone times and in the days to come. Verily, Thou art the
        All-Powerful, the Ever-Faithful, the Omnipotent.
        <div className="author">The Báb</div>
      </blockquote>
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

  .follow_link {
    text-align: center;
  }
`
