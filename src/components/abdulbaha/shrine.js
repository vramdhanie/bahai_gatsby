import React from "react"
import styled from "styled-components"
import Title from "../title"
import Img from "gatsby-image"
const Shrine = ({ className, images }) => {
  return (
    <section className={className}>
      <Title title="The Shrine of" subtitle="Abdu'l-Baha" />
      <blockquote>
        <p>
          The close of the first century of the Formative Age is but two and a
          half years away. It will seal one hundred years of consecrated effort
          to consolidate and expand the foundation so sacrificially laid during
          the Faith’s Heroic Age. At that time the Bahá’í community will also
          mark the centenary of the Ascension of ‘Abdu’l-Bahá, that moment when
          the beloved Master was released from the confines of this world to
          rejoin His Father in the retreats of celestial glory. His funeral,
          which occurred the following day, was an event “the like of which
          Palestine had never seen”. At its conclusion, His mortal remains were
          laid to rest within a vault of the Mausoleum of the Báb. However, it
          was envisaged by Shoghi Effendi that this would be a temporary
          arrangement. A Shrine was to be erected, of a character befitting the
          unique station of ‘Abdu’l-Bahá, at the appropriate time.
        </p>
        <p>
          That time has come. The Bahá’í world is being summoned to build the
          edifice which will forever embosom those sacred remains. It is to be
          constructed in the vicinity of the Riḍván Garden, on land consecrated
          by the footsteps of the Blessed Beauty; the Shrine of ‘Abdu’l-Bahá
          will thus lie on the crescent traced between the Holy Shrines in ‘Akká
          and Haifa.
        </p>
        <div className="author">
          — The Universal House of Justice - Ridvan 2019
        </div>
      </blockquote>
      <div class="follow_link">
        <a href="https://news.bahai.org/story/1353/" class="btn-primary">
          Read more about the Shrine of Abdu'l-Baha.
        </a>
      </div>
      <div>
        {images.map((image, index) => (
          <div className="feature-img">
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt="Shrine of Bahá’u’lláh"
            />
          </div>
        ))}
      </div>
      <blockquote>
        The structure that is envisaged in the design seeks to honour 'Abdu'l-
        Baha's unique position as the Centre of the Covenant, and to reflect at
        once His lofty station and His humility. It creates a space of immense
        sacredness, to which pilgrims and visitors will be drawn for the purpose
        of prayer and meditation.
        <div className="author">
          — The Universal House of Justice - Department of the Secretariat
        </div>
      </blockquote>
    </section>
  )
}

export default styled(Shrine)`
  padding: 1rem;
  font-weight: 300;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;

  .follow_link {
    text-align: center;
  }
  .feature-img {
    margin: 3rem 0;
  }

  .feature-img {
    position: relative;
  }

  .feature-img img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
  }
  .feature-img div {
    box-shadow: var(--lightShadow);
  }
`
