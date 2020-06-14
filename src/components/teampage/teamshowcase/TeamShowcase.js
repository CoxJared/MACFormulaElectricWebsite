import React, { Component } from 'react'
import './TeamShowcase.css';

import computerLabPhoto from './../../../img/school/computer-lab.png';

export class TeamShowcase extends Component {


  componentDidMount() {
    setTimeout(function() {
      document.getElementById("team-showcase-container").style.opacity = 1;
      document.getElementById("team-showcase-image").style.left=0;
      document.getElementById("team-showcase-text-container").style.top = "-55vh";
    },500);
  }
  render() {
    return (
      <div id="team-showcase-container">
        <img id="team-showcase-image" src={computerLabPhoto} alt=""/>
        <div id="team-showcase-text-container">
          <h1 className="team-showcase-text">JOIN US</h1>
          <h2 className="team-showcase-blurb">If you are a student at Mcmaster University wanting to learn the ins and outs of high performance motorsports, then come join a group of like-minded individuals trying to push the boundaries of electric vehicle technology.  Our appreciation to companies willing to support us is shown throw prominent logo placement on our vehicle and direct engagement with our team members.</h2>
        </div>
      </div>
    )
  }
}

export default TeamShowcase
