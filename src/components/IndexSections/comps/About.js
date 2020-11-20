import React from "react"
import About1 from "../../ImagesPreload/about1"
import About2 from "../../ImagesPreload/about2"
import { flipLeft1, flipRight2 } from "../../../utils/animations"

const About = () => {
  return (
    <section className="pattern">
      <div className="container">
        <h2>About Our Partners</h2>
        <div className="about-us-grid">
          <div className="card about-us-card">
            <p>
              We are partnered with the leading decking contractors and
              suppliers in Northwest Indiana. No matter your price or budget, we
              can get you into a conversation with companies who will help you
              get the job done at the right price.
            </p>
          </div>
          <div className="card about-us-card mxl-hidden" {...flipRight2}>
            <About1 width={"100%"} />
          </div>
          <div className="card about-us-card" {...flipLeft1}>
            <About2 width={"100%"} />
          </div>
          <div className="card about-us-card">
            <p>
              Every step of the process is important. A smart design leads to a
              reasonable estimate and a quality deck. The professionals we
              partner with are vetted and have long histories of providing the
              results people are looking for.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
