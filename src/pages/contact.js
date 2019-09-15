import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Form from "../components/contact/form"
import Main from "../components/main"

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <Hero img={data.contactBg.childImageSharp.fluid}>
      <Banner title="Contact Us" blurb=""></Banner>
    </Hero>
    <Main>
      <Form />
    </Main>
  </Layout>
)

export default Contact

export const query = graphql`
  query {
    contactBg: file(relativePath: { eq: "arc_01.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
