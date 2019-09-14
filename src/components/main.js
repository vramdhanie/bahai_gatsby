import React from "react"
import styled from "styled-components"

const Main = ({ className, children }) => {
  return <main className={className}>{children}</main>
}

export default styled(Main)`
  margin: -60px 15px 0px;
  background: #ffffff;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  position: relative;
  z-index: 1;
  flex-grow: 2;

  @media (min-width: 768px) {
    margin: -60px 30px 0px;
  }
`
