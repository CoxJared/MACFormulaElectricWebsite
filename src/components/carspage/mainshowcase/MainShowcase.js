import React, { Component } from 'react'

import fullimage from './../../../img/renders/front-full-2019.png'
import cutimage from './../../../img/renders/cut-away-render.png'

import './MainShowcase.css';

export class MainShowcase extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.initialLoad()
  }

  initialLoad() {
    
    setTimeout(function(){
      document.getElementById("static-scrolling-container").style.opacity=1
      document.getElementById("text-container").style.top='260px';

      setTimeout(function(){
        try{
        document.getElementById("text-container").style.transition='0s';
        } catch{}
      },2000);
    }, 100);
    
  }

  render() {
    window.onscroll = function() {
      let delay=300;

      try{
        var currentScrollPos = window.pageYOffset;

        //show car cross section
        document.getElementById("image-full").style.width=( 750 - (currentScrollPos-delay)/1 + "px");

        //move description up
        document.getElementById("text-container").style.top=( - currentScrollPos + 260 + "px");
        document.getElementById("text-container").style.opacity=(100-currentScrollPos/4 +"%");

        //cars specs move in and become visible
        document.getElementById("main-specs").style.width=( currentScrollPos - 100 + "px");
        document.getElementById("main-specs").style.opacity=( (currentScrollPos-delay)/5 + "%");


        // Lock and Unlock Scrolling depending on if showcase should be visible
        if (currentScrollPos > 1100) {
          document.getElementById("main-showcase-container").style.position ="absolute";
          document.getElementById("main-showcase-container").style.top ="1100px";
        }
        else{
          document.getElementById("main-showcase-container").style.position ="fixed";
          document.getElementById("main-showcase-container").style.top ="0";
        }

      }catch{}
      

    }

    return (
      <div id="static-scrolling-container">
        <div id="main-showcase-container">
          <div className="image-container">
            <div className="image-cut"></div>
            <div id="image-full"></div>
          </div>
          <div id="text-container">
            <h1 className="car-description-title">ZAPDOS</h1>
            <h1 className="car-description">The design focus of the car was built around the team strengths, which includes knowledge of analysis and manufacturing techniques for composites and experience with custom pcb design. The central team focus has always been to create our inaugural car at all costs in order to lay down a foundation to build off, and allow our team to have resilience towards any future challenges it may face</h1>
          </div>
          <div id="main-specs">
            <h2 className="car-name-header">MAC EV1</h2>
            <h1 className="specs-heading">Overview</h1>
            <div id="spec">
              <h1 className="spec-title">Power</h1>
              <h2 className="spec-value">200hp<span>/120kW</span></h2>
            </div>
            <div id="spec">
              <h1 className="spec-title">Weight</h1>
              <h2 className="spec-value">220kg<span>/484lb</span></h2>
            </div>
            <div id="spec">
              <h1 className="spec-title">Capacity</h1>
              <h2 className="spec-value">6.8 kWh<span></span></h2>
            </div>
            <div id="spec">
              <h1 className="spec-title">Drivetrain</h1>
              <h2 className="spec-value">AWD<span></span></h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainShowcase
