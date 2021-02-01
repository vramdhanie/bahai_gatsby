import React, { useEffect, useState } from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Parallax = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query {
      homeBg: file(relativePath: { eq: "shrine/shrine_05.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const [transform, setTransform] = useState("")

  useEffect(() => {
    function resetTransform() {
      const windowScrollTop =
        typeof window !== "undefined" && window.pageYOffset / 3
      setTransform(`translate3d(0, ${windowScrollTop}px, 0)`)
    }

    resetTransform()
    window.addEventListener("scroll", resetTransform)

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", resetTransform)
    }
  })

  return (
    <BackgroundImage
      className={className}
      fluid={data.homeBg.childImageSharp.fluid}
      style={{ transform }}
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(Parallax)`
  height: 90vh;
  max-height: 1000px;
  overflow: hidden;
  position: relative;
  background-position: center center;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  small {
    height: 380px;
  }
`
