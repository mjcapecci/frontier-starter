import React from 'react'
import About1 from '../../ImagesPreload/about1'
import About2 from '../../ImagesPreload/about2'
import {flipLeft1, flipRight2} from '../../../utils/animations'

const About = () => {
  return (
    <div className="container">
      <h2>Who Are We?</h2>
        <div className="about-us-grid">
          <div className="card about-us-card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad doloremque aut molestiae at. Possimus voluptatibus earum quod et culpa, eum eveniet, nesciunt corrupti est sed minima perferendis? Dolore quas beatae aperiam ipsa voluptates sint commodi repellat, modi neque id ducimus! Dolores nisi maxime quas accusamus nobis dolorum commodi voluptates!</p>
          </div>
          <div className="card about-us-card" {...flipRight2}>
            <About1 width={450}/>
          </div>
          <div className="card about-us-card" {...flipLeft1}>
            <About2 width={450}/>
          </div>
          <div className="card about-us-card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad doloremque aut molestiae at. Possimus voluptatibus earum quod et culpa, eum eveniet, nesciunt corrupti est sed minima perferendis? Dolore quas beatae aperiam ipsa voluptates sint commodi repellat, modi neque id ducimus! Dolores nisi maxime quas accusamus nobis dolorum commodi voluptates!</p>
          </div>
        </div>
    </div>
  )
}

export default About
