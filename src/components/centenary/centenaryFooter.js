import React from "react"
import styled from "styled-components"

const CentenaryFooter = ({ className }) => {
  return (
    <section className={className}>
      <div className="follow_link">
        <a href="https://www.bahai.org/abdul-baha/" className="btn-primary">
          Explore the life of ‘Abdu’l‑Bahá
        </a>
      </div>
      <blockquote>
        The most vital duty, in this day, is to purify your characters, to
        correct your manners, and improve your conduct. The beloved of the
        Merciful must show forth such character and conduct among His creatures,
        that the fragrance of their holiness may be shed upon the whole world,
        and may quicken the dead, inasmuch as the purpose of the Manifestation
        of God and the dawning of the limitless lights of the Invisible is to
        educate the souls of men, and refine the character of every living
        man—so that blessed individuals, who have freed themselves from the murk
        of the animal world, shall rise up with those qualities which are the
        adornings of the reality of man.
        <div className="author">‘Abdu’l‑Bahá</div>
      </blockquote>
    </section>
  )
}

export default styled(CentenaryFooter)`
  padding: 1rem;
  font-weight: 300;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;

  .follow_link {
    text-align: center;
  }
`
