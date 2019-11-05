import React from "react"
import styled from "styled-components"

const TheGateAlbum = ({ className }) => {
  return (
    <section className={className}>
      <iframe
        width="100%"
        height="500"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/910796515&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </section>
  )
}

export default styled(TheGateAlbum)``
