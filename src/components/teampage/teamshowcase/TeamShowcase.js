import React, { Component } from 'react'
import './TeamShowcase.css';

import computerLabPhoto from './../../../img/school/computer-lab.png';

export class TeamShowcase extends Component {
  render() {
    return (
      <div className="team-showcase-container">
        <img className="team-showcase-image" src={computerLabPhoto} alt=""/>
        <div className="team-showcase-text-container">
          <h1 className="team-showcase-text">JOIN US</h1>
          <h2 className="team-showcase-blurb">If you are a student at Mcmaster University wanting to learn the ins and outs of high performance motorsports, then come join a group of like-minded individuals trying to push the boundaries of electric vehicle technology.</h2>
        </div>
      </div>
    )
  }
}

export default TeamShowcase
