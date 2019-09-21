import React from "react"

import styled from "styled-components"
import Title from "../title"
const AbdulbahaIntro = ({ className }) => {
  return (
    <section className={className}>
      <Title title="Abdu'l-Baha" subtitle="The Centre of the Covenant" />
      <p>
        In His Most Holy Book, Bahá’u’lláh established a covenant with His
        followers, enjoining them to turn, after His passing, to ‘Abdu’l-Bahá,
        Who He describes as “Him Whom God hath purposed, Who hath branched from
        this Ancient Root.” ‘Abdu’l-Bahá’s authority as the “Centre of the
        Covenant” was also established in other texts, including Bahá’u’lláh’s
        Will and Testament.
      </p>
      <div class="follow_link">
        <a href="https://www.bahai.org/abdul-baha/" class="btn-primary">
          Read more about the life of Abdu'l-Baha.
        </a>
      </div>
      <blockquote>
        The divine religions were founded for the purpose of unifying humanity
        and establishing universal peace. Any movement which brings about peace
        and agreement in human society is truly a divine movement; any reform
        which causes people to come together under the shelter of the same
        tabernacle is surely animated by heavenly motives.
        <div className="author">— ‘Abdu’l-Bahá</div>
      </blockquote>
    </section>
  )
}

export default styled(AbdulbahaIntro)`
  padding: 1rem;
  font-weight: 300;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;

  .follow_link {
    text-align: center;
  }
`
