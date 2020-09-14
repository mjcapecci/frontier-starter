import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Logo from "../../images/logo.png"

const HeroMain = () => {
  const bgImageQuery = useStaticQuery(graphql`
    query bgImage {
      file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const bgImage = bgImageQuery.file.childImageSharp.fluid

  return (
    <StyledBackgroundImage
      Tag="section"
      className="hero"
      fluid={bgImage}
      preserveStackingContext={false}
      backgroundColor={`#111111`}
    >
      <div className="jumbotron jumbotron-fluid">
        <div className="hero-container">
          <img src={Logo} alt="" />
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </StyledBackgroundImage>
  )
}

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: fixed;
  &::before,
  &::after {
    filter: brightness(0.62);
  }
`

export default HeroMain
