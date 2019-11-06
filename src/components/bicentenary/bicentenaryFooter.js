import React from "react"
import styled from "styled-components"

const BicentenaryFooter = ({ className }) => {
  return (
    <section className={className}>
      <div className="follow_link">
        <a
          href="https://bicentenary.bahai.org/the-bab/"
          className="btn-primary"
        >
          See how the World Celebrated
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

export default styled(BicentenaryFooter)`
  padding: 1rem;
  font-weight: 300;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;

  .follow_link {
    text-align: center;
  }
`
