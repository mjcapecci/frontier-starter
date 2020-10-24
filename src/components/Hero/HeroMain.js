import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Logo from "../ImagesPreload/logo"
import useWindowSize from "../../utils/useWindowSize"

const HeroMain = () => {
  const width = useWindowSize().width

  const breakPoint = () => {
    switch (true) {
      case width >= 1920:
        return "400px"
      case width >= 1050:
        return "400px"
      case width >= 650:
        return "400px"
      default:
        return "350px"
    }
  }

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
          <Logo width={breakPoint()} />
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
