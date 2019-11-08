import React from "react"
import styled from "styled-components"
import Logo from "../components/logo"
import { MdMailOutline, MdPhone } from "react-icons/md"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <section className="footer_top">
        <div className="identity">
          <Logo />
          <div className="bahai">The Bahá’í Faith</div>
          <address>
            <div className="email">
              <MdMailOutline /> nsabahaitt@gmail.com
            </div>
            <div className="phone">
              <MdPhone /> 1 (868) 625-5196
            </div>
            <div className="address">
              National Bahá’í Centre <br />
              3 Petra Street <br />
              Woodbrook <br />
              Port of Spain
            </div>
          </address>
        </div>
        <div className="footer-links">
          <div className="international">
            <a href="https://bahai.org" className="international_link">
              Bahai.org - The website of the worldwide Baha'i community
            </a>
          </div>
          <div className="links">
            <AniLink fade to="/bicentenary" className="footer-link-main">
              bicentenary
            </AniLink>

            <AniLink fade to="/bahaullah" className="footer-link-main">
              Bahá’u’lláh
            </AniLink>

            <AniLink fade to="/community" className="footer-link-main">
              Community Building
            </AniLink>

            <AniLink fade to="/abdulbaha" className="footer-link-main">
              Abdu'l-Baha
            </AniLink>
          </div>
          <div className="links_small">
            <AniLink fade to="/contact" className="footer-link-small">
              Contact
            </AniLink>
            <AniLink fade to="/legal" className="footer-link-small">
              Legal
            </AniLink>
            <AniLink fade to="/legal" className="footer-link-small">
              Privacy
            </AniLink>
          </div>
        </div>
      </section>
      <section className="faded">
        <div>© {new Date().getFullYear()} Bahá’ís of Trinidad and Tobago</div>
        <div>
          Built with
          <span className="gatsby">
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
          by
          <span className="vincent">
            <a href="https://vincentramdhanie.com">Vincent</a>
          </span>
        </div>
      </section>
    </footer>
  )
}

export default styled(Footer)`
  margin-top: 1rem;
  padding: 1rem;
  font-size: 0.9rem;
  font-weight: 300;

  .bahai {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: -1rem;
    font-weight: 400;
  }
  .faded {
    font-size: 0.5rem;
    display: flex;
    justify-content: space-between;
  }

  .gatsby,
  .vincent {
    padding: 2px;
  }
  .gatsby a,
  .vincent a,
  .gatsby a:visited,
  .vincent a:visited {
    text-decoration: none;
    color: var(--secondaryDark);
    font-weight: bold;
  }

  .gatsby a:hover,
  .vincent a:hover {
    color: var(--secondary);
  }
  .footer_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .footer-links {
    flex-grow: 2;
  }
  .identity {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .address {
    margin-top: 5px;
  }

  address {
    font-style: normal;
  }

  .links {
    text-align: center;
  }
  .links a {
    font-size: 0.8rem;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--primaryDark);
    margin: 0.5rem 1rem;
    letter-spacing: var(--mainSpacing);
    transition: var(--mainTransition);
    font-weight: bold;
  }

  .links a:hover {
    color: var(--secondaryDark);
  }

  .links_small {
    text-align: center;
  }

  .links_small a {
    font-size: 0.6rem;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--primaryDark);
    margin: 0.5rem 1rem;
    letter-spacing: var(--mainSpacing);
    transition: var(--mainTransition);
  }
  .links_small a:hover {
    color: var(--secondaryDark);
  }

  .international {
    text-align: center;
    padding: 1.5rem;
  }

  .international_link {
    font-weight: bold;
    text-decoration: none;
    color: var(--secondaryDark);
    padding: 0.5rem;
    box-shadow: 0 0 1px 1px rgba(164, 87, 0, 0.2);
    transition: var(--mainTransition);
  }

  .international_link:hover {
    color: var(--primaryDark);
  }

  @media (min-width: 776px) {
    .footer_top {
      flex-direction: row;
    }

    .links a {
      display: inline-block;
    }
    .bahai {
      font-size: 1.2rem;
      text-align: center;
    }
    .identity {
      min-width: 200px;
    }
  }
`
