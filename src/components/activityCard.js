import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import classnames from "classnames"

const ActivityCard = ({ className, activity, excerpt, side }) => {
  const { title, slug, blurb } = activity
  const img = activity.image.childImageSharp.fluid
  return (
    <article className={classnames(className, side)}>
      <div className="image">
        <Image fluid={img} />
      </div>
      <div className="info">
        <div>
          <h2>{title}</h2>
          <p>{blurb}</p>
          <p>{excerpt}</p>
          <Link to={slug} className="btn-primary">
            read more
          </Link>
        </div>
      </div>
    </article>
  )
}

ActivityCard.defaultProps = {
  side: "left",
}

export default styled(ActivityCard)`
  width: 95%;
  margin: 0 auto;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  border-bottom: solid 2px rgba(164, 87, 0, 0.1);
  .image {
    flex: 1;
    width: 100%;
  }

  .image img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
  }
  .image div {
    box-shadow: var(--lightShadow);
  }

  .info {
    flex: 2;
    padding: 1rem 0;
    margin-top: 5px;
  }
  .info h2 {
    font-size: 30px;
    text-transform: capitalize;
    margin-bottom: 10px;
    color: var(--primaryDark);
  }
  .info p {
    padding: 20px 0 30px 0;
    text-align: left;
  }
  .left {
    flex-direction: column;
  }

  @media (min-width: 776px) {
    flex-direction: row;
    /* display: grid;
    grid-template-columns: 350px 1fr;
    */
    .info {
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
    }
    .image > div {
      height: 250px;
    }
  }
`
