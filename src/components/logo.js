import React from "react"
import logo from "../images/favicon.svg"
import styled from "styled-components"
const Logo = ({ className }) => {
  return (
    <div className={className}>
      <img src={logo} alt="Nine pointed star" />
    </div>
  )
}

export default styled(Logo)`
  img {
    width: 75px;
  }
`
