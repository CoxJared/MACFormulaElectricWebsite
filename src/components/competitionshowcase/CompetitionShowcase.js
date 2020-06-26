import React, { Component } from 'react'
import './CompetitionShowcase.css'

import hybridTilt from  './../../img/competition/hybrid-driving.jpg'

export class CompetitionShowcase extends Component {
  render() {

    //checking if the design container is inside viewport, whenever scroll happens
    //TODO: fix these exceptions
    
    window.addEventListener('scroll', function (event) {
      try{
        var bounding = document.querySelector("#competition-text-container").getBoundingClientRect();

        let halfHeight = 300
        if (
          bounding.top >= 0 &&
          bounding.bottom - halfHeight <= (window.innerHeight || document.documentElement.clientHeight) ) {  

            //Show Elements
            document.getElementById("competition-showcase-container").style.opacity=(1);
            document.getElementById("competition-image").style.left="-50px";
            if (this.window.innerWidth < 1600)
            {
              document.getElementById("competition-text-container").style.top="10vw";
            } else {
            document.getElementById("competition-text-container").style.top="150px";
            }
        }
      }catch(err){
        console.log(err)}
    })

    return (
      <div id="competition-showcase-container">
        <img id = "competition-image" src={hybridTilt} alt=""></img>
        <div className="gradient-container"/>
        <div id="competition-text-container">
          <h1 className="competition-title">Support</h1>
          <h1 className="competition-text">Since <span>MAC Formula Electric</span> is a non-profit student team, we require support from some very generous companies and institutions to achieve our goals and compete.</h1>
          <div className="sponsorship-button">
            <h1 className="sponsorship-button-text">
              Sponsorships
            </h1>
            <div className="sponsorship-button-white"></div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default CompetitionShowcase
