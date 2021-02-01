import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Card = ({ className, activity, excerpt }) => {
  const { title, slug } = activity
  const img = activity.image.childImageSharp.fluid
  return (
    <article className={className}>
      <div className="image">
        <Image fluid={img} />
      </div>
      <div className="info">
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <Link to={slug} className="link">
          read more
        </Link>
      </div>
    </article>
  )
}

export default styled(Card)`
  margin-bottom: 2rem;
  margin-left: 2px;
  margin-right: 2px;
  background: #ffffff;
  padding: 1rem;
  text-align: center;
  border-bottom: solid 2px rgba(219, 132, 10, 0.2);
  display: flex;
  flex-direction: column;
  align-self: stretch;
  .image {
    flex: 1;
  }
  .info {
    flex: 3;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
  }
  .info h2 {
    font-size: 30px;
    text-transform: capitalize;
    margin-bottom: 10px;
  }
  .info h6 {
    color: var(--primaryLight);
    text-transform: capitalize;
  }
  .info p {
    padding: 20px 0 30px 0;
    text-align: left;
    flex: 1;
  }
  .link {
    border: 1px solid var(--primaryDark);
    padding: 4px 8px;
    display: inline-block;
    color: var(--primaryDark);
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
  }
  .link:hover {
    background: var(--primaryDark);
    color: #ffffff;
  }
`
