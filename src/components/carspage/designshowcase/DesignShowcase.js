import React, { Component } from 'react';
import arrow from './../../../img/arrow.png'

import generalRender from './../../../img/renders/top-view-5k.png';
import generalCartoon from './../../../img/renders/white-cartoon.JPG';

import chassisRender from './../../../img/renders/monocoque.png';
import batteryRender from './../../../img/renders/battery cross section (2).png';
import gearboxRender from './../../../img/renders/gearbox-exploded (1).png';

import './DesignShowcase.css';

export class DesignShowcase extends Component {

  constructor (props) {
    super(props);
    this.state = {
      position: 0.0,
      blank:""
    }
  }

  moveRight = () =>{
    let currentPosition = this.state.position - window.innerWidth;
    this.setState({position : currentPosition})
    document.getElementById("design-moving-container").style.left=(currentPosition+ "px");

  }

  moveLeft = () =>{
    let currentPosition = this.state.position +window.innerWidth;
    this.setState({position : currentPosition})
    document.getElementById("design-moving-container").style.left=(currentPosition + "px");
  }

  render() {

    //checking if the design container is inside viewport, whenever scroll happens
    window.addEventListener('scroll', function (event) {
      

      //TODO: fix these exceptions
      try{
        var bounding = document.querySelector('.design-container').getBoundingClientRect();
        let halfHeight = 400
        if (
          bounding.top >= 0 &&
          bounding.bottom - halfHeight <= (window.innerHeight || document.documentElement.clientHeight) ) {  

            //Show Elements
            document.getElementById("design-text-container").style.opacity=(100);
            document.getElementById("design-text-container").style.top=(0);
            this.document.getElementById("design-image").style.opacity=(100);
        }
      } catch{}
    })
  


    return (
      <div className="design-container">
        <div id="design-moving-container">

          <div className="design-page">
            <div id="design-text-container">
              <h2 className="design-text-car">MAC EV1</h2>
              <h1 className="design-text-title">General</h1>
              <p className="design-text-para">MAC Formula Electric prides itself for being on the cutting edge of motorsport technology by implementing techniques and design features which are rarely seen in anything other than premier racing series.</p>
            </div>
            <div className="design-image-container">
              <img className="design-image-cartoon" src={generalCartoon}></img>
              <img id="design-image" src={generalRender}></img>
            </div>
          </div>

          <div className="design-page">
            <div className="design-text-container">
              <h2 className="design-text-car">MAC EV1</h2>
              <h1 className="design-text-title">Chassis</h1>
              <p className="design-text-para">Our chassis centres around a Carbon Composite monocoque with a foam Core. This was achieved through a vacuum infusion process and oven cure. With multiple different carbon thicknesses, orientations and weaves we have produced a structurally sound and feather light base for our car. To ensure the reliability of our layup analysis, all of the various layups in the chassis have been 3-point bend tested and tested in shear.</p>
            </div>
            <div className="design-image-container">
              <img class="design-image" src={chassisRender}></img>
            </div>
          </div>

          <div className="design-page">
            <div className="design-text-container">
              <h2 className="design-text-car">MAC EV1</h2>
              <h1 className="design-text-title">Drivetrain</h1>
              <p className="design-text-para">This year, we developed our first high-voltage battery with three priorities: high specific-power, high specific-energy, and optimized weight. This design will be capable of providing the maximum power to the vehicle for the entirety of the endurance run. With a charge time of approximately 35 minutes, we are able to reduce the downtime between runs and improve our teams overall efficiency.</p>
            </div>
            <div className="design-image-container">
              <img class="design-image" src={gearboxRender}></img>
            </div>
          </div>

          <div className="design-page">
            <div className="design-text-container">
              <h2 className="design-text-car">MAC EV1</h2>
              <h1 className="design-text-title">Battery</h1>
              <p className="design-text-para">This year, we developed our first high-voltage battery with three priorities: high specific-power, high specific-energy, and optimized weight. This design will be capable of providing the maximum power to the vehicle for the entirety of the endurance run. With a charge time of approximately 35 minutes, we are able to reduce the downtime between runs and improve our teams overall efficiency.</p>
            </div>
            <div className="design-image-container">
              <img class="design-image" src={batteryRender}></img>
            </div>
          </div>
          


        </div>

        <div className="design-selector">
          <div className="design-selection-container">
            <h1 className="design-selection-name">
              General
            </h1>
            <div className="design-selection-bar"></div>
          </div>
          <div className="design-selection-container">
            <h1 className="design-selection-name">
              Chassis
            </h1>
            <div className="design-selection-bar"></div>
          </div>
          <div className="design-selection-container">
            <h1 className="design-selection-name">
              Battery
            </h1>
            <div className="design-selection-bar"></div>
          </div>
          <div className="design-selection-container">
            <h1 className="design-selection-name">
              Aerodynamics
            </h1>
            <div className="design-selection-bar"></div>
          </div>
          <div className="design-selection-container">
            <h1 className="design-selection-name">
              suspension
            </h1>
            <div className="design-selection-bar"></div>
          </div>
        </div>

        <div className="left-buttom" onClick={this.moveLeft.bind(this)}>
          <img className="left-arrow" src={arrow}></img>
        </div>
        <div className="right-buttom" onClick={this.moveRight.bind(this)}>
          <img className="right-arrow" src={arrow}></img>
        </div>
      </div>
    )
  }
}

export default DesignShowcase
