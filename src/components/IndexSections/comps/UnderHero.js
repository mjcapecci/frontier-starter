import React from "react"
import UnderHeroImg from '../../ImagesPreload/underHero'
import {slideUp3} from '../../../utils/animations'

const UnderHero = () => {
  return (
    <section className="container under-hero">
      <div className="under-hero-text" {...slideUp3}>
        <h2>Build the deck you've always wanted.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt esse harum nam, reiciendis assumenda ducimus est dolor deserunt facilis, in maiores molestiae provident repudiandae. Laborum, nobis. Repellat iusto optio repellendus provident amet esse porro maiores ducimus libero sunt temporibus vel molestiae aliquam, nihil magni vero eum corporis! Consequuntur, voluptates. Saepe, eos. Est harum veniam maxime sed nobis expedita. Nostrum dignissimos blanditiis sint a perferendis voluptates, recusandae consequuntur laudantium voluptas porro officia provident quos eos obcaecati.</p>
      </div>
      <div className="under-hero-img">
        <UnderHeroImg width={640}/>
      </div>
    </section>
  )
}

export default UnderHero
