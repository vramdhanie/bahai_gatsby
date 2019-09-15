import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import styled from "styled-components"

const Legal = ({ className }) => (
  <Layout>
    <SEO title="Legal" />
    <div className={className}>
      <header>
        <h1>Legal Information</h1>
      </header>
      <Main>
        <div className="statement">
          <h2>Copyright</h2>
          <p>
            All material on this website, including but not limited to, text,
            photographs, images, illustrations, maps, audio clips, and video
            clips (“Content”) is protected by copyrights, trademarks, and other
            intellectual property rights. The Bahá'í International Community
            retains full legal protection for its Content under all applicable
            national and international laws.
          </p>
          <h2>Privacy</h2>
          <p>
            Visitors to this Website are not tracked, except to produce
            aggregate statistical data which does not identify individual users.
            Where cookies are used to provide essential functionality, these are
            not used to track use of the website or to store
            personally-identifiable information. Steps have been taken to secure
            all information collected from unauthorized access, use or
            disclosure. Please note that this website may include links to
            websites with different privacy policies.{" "}
          </p>
          <h2>Terms of Use</h2>{" "}
          <p>
            You are welcome to access and use the Content of this website
            subject to the following conditions:
            <ul>
              <li>
                The Content may not be used in a way that misrepresents the
                intent of the original source.
              </li>
              <li>
                If you wish to use any Content, it must be accompanied by the
                following notice: “Copyright © Bahá'í International Community”
                together with attribution to this source where appropriate.
              </li>
              <li>
                Audio-Visual content including video clips, audio clips, maps
                and photographs may be cropped and edited for size. No other
                editing is permitted. Each user of the Audio-Visual content is
                given a limited, non-exclusive licence to use, reproduce,
                distribute, link and/or display this content provided the
                intent, character, nature or meaning of the content remains
                unaltered.
              </li>
              <li>
                Any use for a commercial purpose requires permission prior to
                use. For inquiries, please email termsofuse@bahai.org{" "}
              </li>

              <li>
                The Bahá’í International Community reserves the right to
                withdraw permission to use the Content at any time and for any
                use. In such circumstances, the use of the Content should cease
                immediately.
              </li>
              <li>
                The Bahá’í International Community does not endorse or take
                responsibility for third party uses of the Content. Further, the
                Bahá'í International Community will not be responsible or liable
                to any person or organization for any direct, incidental,
                consequential, indirect, or punitive damages that may result
                from access to or use of the Content.
              </li>
            </ul>
          </p>
          <p> These conditions may be revised at any time without notice. </p>
          <p>Last updated 15 September 2019.</p>
        </div>
      </Main>
    </div>
  </Layout>
)

export default styled(Legal)`
  header {
    min-height: 50vh;
    background: linear-gradient(rgba(90, 160, 174, 0.7), rgba(0, 69, 83, 0.7));
    opacity: 1 !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header h1 {
    color: var(--primaryDark);
    text-shadow: 0 0 4px rgba(90, 160, 174, 0.5);
  }

  .statement {
    width: 95%;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  .statement {
    font-weight: 300;
  }
`
