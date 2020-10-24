import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ width }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{ width: width }}
      alt="Northwest Indiana Decking Authority"
    />
  )
}

export default Image