import React from "react"
import styled from "styled-components"

const TheGateAlbum = ({ className }) => {
  return (
    <section className={className}>
      <p className="info">
        <span className="highlight">The Gate</span> - An album commemorating the
        Bicentenary of the Birth of The Báb depicting some significant events in
        His Lifetime, is streaming on Soundcloud.{" "}
        <span className="date">Released on 28 October 2019</span>.
      </p>
      <iframe
        width="100%"
        height="500"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        title="Soundcloud album"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/910796515&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </section>
  )
}

export default styled(TheGateAlbum)`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;

  .highlight {
    color: var(--primaryDark);
    font-weight: bold;
  }

  .date {
    font-weight: 300;
    color: var(--primaryLight);
    font-size: 0.9rem;
  }
`
