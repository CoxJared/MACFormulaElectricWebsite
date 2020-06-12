import React, { Component } from 'react'
import './CompetitionShowcase.css'

import hybridTilt from  './../../img/competition/hybrid-tilt-test.jpg'

export class CompetitionShowcase extends Component {
  render() {
    return (
      <div className="competition-showcase-container">
        <img id = "competition-image" src={hybridTilt}></img>
      </div>
    )
  }
}

export default CompetitionShowcase
