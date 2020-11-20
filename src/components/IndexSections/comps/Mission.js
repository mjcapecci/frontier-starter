import React from "react"
import { slideUp3 } from "../../../utils/animations"

const Mission = () => {
  return (
    <div className="mission-container">
      <p className="mission" {...slideUp3}>
        <strong>
          "Our mission is to connect the people of the NWI Region with the best
          decking contractors for the job at hand."
        </strong>
      </p>
    </div>
  )
}

export default Mission
