import React from "react"
import styled from "styled-components"
import Title from "./title"

const WhiteSection = ({ className, title, subtitle, children, style = {} }) => {
  return (
    <section className={className} style={style}>
      <Title title={title} subtitle={subtitle} />
      <div className="feature-center">{children}</div>
    </section>
  )
}

export default styled(WhiteSection)`
  font-weight: 300;
  padding: 4rem 0;

  .feature-center {
    width: 80%;
    margin: 0 auto;
    max-width: 800px;
  }

  border-bottom: solid 2px rgba(219, 132, 10, 0.2);
  background: var(--mainWhite);

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

  @media screen and (min-width: 768px) {
    .feature-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      grid-row-gap: 1rem;
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
