import React from "react"
import styled from "styled-components"
import Title from "../title"
const BahaIntro = ({ className }) => {
  return (
    <section className={className}>
      <Title title="Bahá’u’lláh" subtitle="" />
      <p>The Promised One foretold by all the Divine Messengers</p>
      <blockquote>
        Bahá’u’lláh has drawn the circle of unity, He has made a design for the
        uniting of all the peoples, and for the gathering of them all under the
        shelter of the tent of universal unity. This is the work of the Divine
        Bounty, and we must all strive with heart and soul until we have the
        reality of unity in our midst, and as we work, so will strength be given
        unto us.
        <div className="author">— ‘Abdu’l-Bahá</div>
      </blockquote>
    </section>
  )
}

export default styled(BahaIntro)`
  padding: 1rem;
  font-weight: 300;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`
