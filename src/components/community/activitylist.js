import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import ActivityCard from "../activityCard"

const getActivities = graphql`
  query {
    activities: allMdx(sort: { fields: frontmatter___order, order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            blurb
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

const ActivityList = ({ className }) => {
  const {
    activities: { edges: activities },
  } = useStaticQuery(getActivities)

  return (
    <section className={className}>
      {activities.map(({ node }, index) => (
        <ActivityCard
          activity={node.frontmatter}
          excerpt={node.excerpt}
          key={index}
        />
      ))}
    </section>
  )
}

export default styled(ActivityList)`
  max-width: 800px;
  margin: 0 auto;
`
