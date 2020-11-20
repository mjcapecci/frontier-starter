import React from "react"
import UnderHeroImg from "../../ImagesPreload/underHero"
import useWindowSize from "../../../utils/useWindowSize"

const UnderHero = () => {
  const width = useWindowSize().width

  const breakPoint = () => {
    switch (true) {
      case width >= 1920:
        return "640px"
      case width >= 1000:
        return "100%"
      default:
        return "100%"
    }
  }

  return (
    <section className="pattern m-end-on-image">
      <div className="container under-hero  mp-1">
        <div className="under-hero-text">
          <h2>Find the right contractor.</h2>
          <p>
            Once you’ve made the decision to build or repair your deck, the next
            steps are always as follows: make a design, get an estimate, and
            hire a contractor.
          </p>
          <p>
            The problem? There is a lot of misinformation out there, and it’s
            difficult to pick the best contractors for your particular job.
            Ultimately, it's easy to spend too much money.
          </p>
          <p>
            That’s where we step in. All you have to do is provide us some
            detail about the job you need done, and we’ll make sure the most
            qualified decking contractor in Northwest Indiana is notified right
            away.
          </p>
        </div>
        <div className="under-hero-img">
          <UnderHeroImg width={breakPoint()} />
        </div>
      </div>
    </section>
  )
}

export default UnderHero
