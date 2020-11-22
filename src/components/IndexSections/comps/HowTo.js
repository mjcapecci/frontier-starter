import React from "react"
import { useStaticQuery } from "gatsby"
import { Bg } from "../../../utils/backgroundImage"
import { slideRight1 } from "../../../utils/animations"

const HowTo = () => {
  const bgImageQuery = useStaticQuery(graphql`
    query howToBg {
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
    <Bg
      fluid={bgImage}
      preserveStackingContext={false}
      backgroundColor={`#111111`}
    >
      <div className="how-to mp-1" id="how-to" {...slideRight1}>
        <h2>Get In Touch Today!</h2>
        <p>
          Leave us a detailed message via the contact form below, and we will
          forward your request to the company / contractor best fit to handle
          your request.
        </p>
      </div>
    </Bg>
  )
}

export default HowTo
