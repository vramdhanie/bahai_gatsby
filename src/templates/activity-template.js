import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Main from "../components/main"

const ActivityTemplate = ({ data, className }) => {
  const { title, image, blurb } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={`Community Building | ${title}`} />
      <Hero img={img}>
        <Banner title={title} blurb={blurb}></Banner>
      </Hero>
      <Main>
        <section className={className}>
          <Link className="link" to="/community">
            Back to Community Building
          </Link>

          <div className="content">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </section>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query getActivity($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
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
      body
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default styled(ActivityTemplate)`
  width: 80%;
  margin: 4rem auto;
  max-width: 800px;
  padding: 2rem;
  background: var(--mainWhite);
  font-weight: 300;
  .link {
    border: 1px solid var(--primaryDark);
    padding: 4px 8px;
    display: inline-block;
    color: var(--primaryDark);
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    margin-bottom: 2rem;
  }
  .link:hover {
    background: var(--primaryDark);
    color: var(--secondaryLight);
  }
  .info {
    text-align: center;
  }
  .info h1 {
    letter-spacing: 5px;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    font-size: 48px;
  }
  .info h4 {
    letter-spacing: 5px;
    text-transform: capitalize;
    font-size: 14px;
    text-align: center;
    margin-bottom: 3rem;
  }
  .content {
    margin: 2rem 0;
  }
  .content h2 {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .content p {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  .articleImage span {
    display: block;
    max-width: 100% !important;
    margin: 2rem;
  }
`
