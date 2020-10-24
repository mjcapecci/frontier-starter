import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRulerCombined, faFileInvoiceDollar, faHammer } from "@fortawesome/free-solid-svg-icons"
import { slideUp1, slideUp2, slideUp3 } from '../../../utils/animations'

const Cards = () => {
  return (
    <div className="card-grid-container">
      <h2>The Winning Formula</h2>
      <div className="card-grid container">
        <div className="card" {...slideUp1}>
          <h4>1. Design</h4>
          <FontAwesomeIcon icon={faRulerCombined} size="4x"/>
        </div>
        <div className="card" {...slideUp2}>
          <h4>2. Estimate</h4>
          <FontAwesomeIcon icon={faFileInvoiceDollar} size="4x"/>
        </div>
        <div className="card" {...slideUp3}>
          <h4>3. Build</h4>
          <FontAwesomeIcon icon={faHammer} size="4x"/>
        </div>
      </div>
    </div>
  )
}

export default Cards
