import React from "react"
import styled from "styled-components"
import Title from "../title"
import Card from "../card"

const CommunityFeature = ({ className, activities }) => {
  return (
    <section className={className}>
      <Title title="Community" subtitle="Building" />
      <div className="feature-centre">
        {activities.map(({ node }, index) => (
          <Card
            activity={node.frontmatter}
            excerpt={node.excerpt}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

export default styled(CommunityFeature)`
  font-weight: 300;
  padding: 4rem 0;
  width: 80vw;
  margin: 0 auto;

  margin-bottom: 10px;
  background: #ffffff;

  feature-centre {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    .feature-centre {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: center;
      margin-top: 3rem;
    }
  }

  @media screen and (min-width: 992px) {
  }

  @media screen and (min-width: 1200px) {
    .feature-centre {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 2rem;
      width: 95%;
      max-width: 1170px;
    }
  }
`
