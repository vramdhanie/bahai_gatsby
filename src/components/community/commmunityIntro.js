import React from "react"
import styled from "styled-components"
import Title from "../title"

const CommmunityIntro = ({ className }) => {
  return (
    <section className={className}>
      <Title title="Community" subtitle="Building" />
      <p>
        Bahá’ís hail from all walks of life. Young and old, men and women alike,
        they live alongside others in every land and belong to every nation.
        They share a common goal of serving humanity and refining their
        inner-lives in accordance with the teachings of Bahá’u’lláh. The
        community to which they belong is one of learning and action, free from
        any sense of superiority or claim to exclusive understanding of truth.
        It is a community that strives to cultivate hope for the future of
        humanity, to foster purposeful effort, and to celebrate the endeavours
        of all those in the world who work to promote unity and alleviate human
        suffering.
      </p>

      <blockquote>
        “What are the requirements? Love for mankind, sincerity toward all,
        reflecting the oneness of the world of humanity, philanthropy, becoming
        enkindled with the fire of the love of God, attainment to the knowledge
        of God and that which is conducive to human welfare.”
        <div className="author">— ‘Abdu’l-Bahá</div>
      </blockquote>
    </section>
  )
}

export default styled(CommmunityIntro)`
  padding: 1rem;
  font-weight: 300;
`
