import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Logo from "./logo"

const Header = ({ className, siteTitle }) => (
  <header className={className}>
    <div className="logo">
      <Link to="/" className="siteNameLink">
        <Logo />
      </Link>
      <h1 className="siteName">
        <Link to="/" className="siteNameLink">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default styled(Header)`
  position: absolute;
  z-index: 1000;
  padding: 10px;

  .siteName {
    font-size: 1.2rem;
    text-shadow: 00 2px 1px rgba(0, 0, 0, 0.4);
    padding-left: 5px;
  }

  .siteNameLink {
    color: white;
    text-decoration: none;
  }

  .logo {
    display: flex;
    align-items: center;
  }
`
