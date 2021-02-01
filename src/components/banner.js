import React from "react"
import styled from "styled-components"

const Banner = ({ className, title, blurb, children }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{blurb}</p>
      {children}
    </div>
  )
}

export default styled(Banner)`
  text-align: center;
  letter-spacing: var(--mainSpacing);
  color: var(--primaryText);
  text-shadow: 0 0 8px black;
  background: rgba(0, 0, 0, 0.5);
  padding-bottom: 10px;
  box-shadow: 0 0 6px 6px rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 2.3rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
    padding: 0 1rem;
    letter-spacing: 6px;
  }
  p {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    text-transform: uppercase;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.4rem;
    }
    p {
      width: 70%;
    }
  }
`
