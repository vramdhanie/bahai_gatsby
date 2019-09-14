import React from "react"
import styled from "styled-components"
import Title from "../title"
const CommunityFeature = ({ className }) => {
  return (
    <section className={className}>
      <Title title="Community" subtitle="Building" />
    </section>
  )
}

export default styled(CommunityFeature)`
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

  margin-bottom: 10px;

  background: #ffffff;

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
