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
            document.getElementById("competition-text-container").style.top="200px";
            document.getElementById("competition-image").style.left="-50px";
        }
      }catch(err){
        console.log(err)}
    })

    return (
      <div id="competition-showcase-container">
        <img id = "competition-image" src={hybridTilt}></img>
        <div className="gradient-container"/>
        <div id="competition-text-container">
          <h1 className="competition-title">Competition</h1>
          <h1 className="competition-text">Teams compete in a number of different events; from design, cost and dynamic events such as autocross and endurance.</h1>
        </div>
        
      </div>
    )
  }
}

export default CompetitionShowcase
