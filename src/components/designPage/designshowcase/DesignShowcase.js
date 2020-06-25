import React, { Component } from 'react';
import arrow from './../../../img/arrow.png'

import generalRender from './../../../img/renders/side-color.png';
import generalCartoon from './../../../img/renders/side-outine.JPG';

import chassisRender from './../../../img/renders/chass.png';
import batteryRender from './../../../img/renders/battery cross section (2).png';
import gearboxRender from './../../../img/renders/gearbox-exploded (1).png';
import electronicsRender from './../../../img/renders/electronics.png';
import suspensionRender from './../../../img/renders/susp.png';
import aerodynamicrender from './../../../img/renders/aero.png';

import './DesignShowcase.css';

const slides={
  'General':0,
  'Chassis':1,
  'Drivetrain':2,
  'Battery':3,
  'Suspension':4,
  'Electronics':5,
  'Aerodynamics':6,
}
export class DesignShowcase extends Component {

  constructor (props) {
    super(props);
    this.state = {
      position: 0,
      current:'General',
      slidePosition: 0,
      blank:"",
      info:[
        {
          title: 'Chassis',
          text: 'Our chassis centres around a Carbon Composite monocoque with a foam Core. This was achieved through a vacuum infusion process and oven cure. With multiple different carbon thicknesses, orientations and weaves we have produced a structurally sound and feather light base for our car. To ensure the reliability of our layup analysis, all of the various layups in the chassis have been 3-point bend tested and tested in shear.',
          image:chassisRender
        },{
          title: 'Drivetrain',
          text: 'This year, we developed our first high-voltage battery with three priorities: high specific-power, high specific-energy, and optimized weight. This design will be capable of providing the maximum power to the vehicle for the entirety of the endurance run. With a charge time of approximately 35 minutes, we are able to reduce the downtime between runs and improve our teams overall efficiency.',
          image:gearboxRender
        },{
          title: 'Battery',
          text: 'This year, we developed our high-voltage battery with three priorities: high specific-power, high specific-energy, and optimized weight. This design will be capable of providing the maximum power to the vehicle for the entirety of the endurance run. With a charge time of approximately 35 minutes, we are able to reduce the downtime between runs and improve our teams overall efficiency.',
          image:batteryRender
        },{
          title: 'Suspension',
          text: 'After analyzing tire test data, our team decided to use 10” Hoosier LCO tires because of their superior grip capabilities. A thorough analysis of tire test data allowed the team to determine the acceleration limits of the tires and use this to better understand the loads that the suspension will likely encounter. MAC Formula Electric chooses to use a pushrod style set up because of its lightweight and highly adjustable capabilities. Finally, we chose to incorporate highly adjustable dampers into the system because of their use of twin tube damping technology designed specifically for FSAE cars.',
          image:suspensionRender
        },{
          title: 'Electronics',
          text: 'The Electrical Control System for the vehicle consists of the following components: a MicroAutoBox II, a Raspberry Pi, four AMK Motor Controllers, an Accumulator Management System (AMS), and a Body Control Module (BCM), which is designed by the team. The four AMK Motor Controllers give independant control over each of the four in-hub motors, and allow for straight forward control over the vehicles CAN network. the Body Control Module is a custom designed 4 layer PCB, which houses two fully programmable microcontrollers, along with circuitry for cooling control, rule mandated safety circuits, sensor data processing, HV discharge circuit and TSAL.',
          image:electronicsRender
        },{
          title: 'Aerodynamics',
          text: 'The main objectives of the aero package is to minimize drag and maximize downforce (negative lift). Through multiple iterations and CFD analysis our current aero package was finalized. Comprising of a front and rear wing, side pods and an undertray the aero pack has been optimized to increase handling, resulting in peak performance. All components of the package were first molded in house and then manufactured with various carbon fibre layups to optimize weight savings are strength.',
          image:aerodynamicrender
        }
      ]
    }
  }

  moveRight = () =>{
    let position = this.state.slidePosition
    if(position < 6){
      this.setState({slidePosition: position + 1})
      document.getElementById("design-moving-container").style.left= -(position +1) * window.innerWidth + "px";
      console.log(this.state.info[position])
      let currentTitle = this.state.info[position].title
      this.setState({current:currentTitle})
    }  
  }

  moveLeft = () =>{
    let position = this.state.slidePosition
    if(position > 0){
      this.setState({slidePosition: position - 1})
      document.getElementById("design-moving-container").style.left= -(position -1) * window.innerWidth + "px";
      if(position - 1 === 0){
        this.setState({current:'General'})
      } else {
        let currentTitle = this.state.info[position-2].title
        this.setState({current:currentTitle})
      }
    }
  }

  updateOnClick(name) {
    try{
    let index = slides[name]
    console.log(index)
    this.setState({slidePosition: index})
    
      document.getElementById("design-moving-container").style.left= -(index) * window.innerWidth + "px";
      this.setState({current:name})
    } catch {}
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
            this.document.getElementById("design-image-cartoon").style.opacity=(0);
        }
      } catch{}
    })
  
    return (
      <div className="design-container">
        <div id="design-moving-container">

          <div className="design-page">
            <div id="design-text-container">
              <h2 className="design-text-car">Zapdos</h2>
              <h1 className="design-text-title">General</h1>
              <p className="design-text-para">MAC Formula Electric emphasizes composite-oriented packaging across the vehicle. Unique techniques are utilized to mount everything from carbon fiber enclosures to composite firewalls to ensure structural integrity and maximum weight savings.</p>
            </div>
            <div className="design-image-container">
              <img id="design-image-cartoon" src={generalCartoon} alt=""></img>
              <img id="design-image" src={generalRender} alt=""></img>
            </div>
          </div>

        {this.state.info.map(slide => (
          <div className="design-page">
          <div className="design-text-container">
            <h2 className="design-text-car">Zapdos</h2>
            <h1 className="design-text-title">{slide.title}</h1>
            <p className="design-text-para">{slide.text}</p>
          </div>
          <div className="design-image-container">
            <img className="design-image" src={slide.image} alt=""/>
          </div>
        </div>
        ))}
          
        </div>


        <div className="design-selector">
        <div className="design-selection-container" onClick={this.updateOnClick.bind(this,'General')}>
            <h1 className="design-selection-name">
              General
            </h1>
            <div className={`design-selection-bar ${this.state.current === 'General'?'selected-bar' :''}`}></div>
          </div>
          {this.state.info.map(position => (
            <div className={'design-selection-container'} onClick={this.updateOnClick.bind(this,position.title)}>
              <h1 className="design-selection-name">
                {position.title}
              </h1>
              <div className={`design-selection-bar ${position.title === this.state.current?'selected-bar' :''}`}></div>
            </div>
          ))}
        </div>

        <div className="left-buttom" onClick={this.moveLeft.bind(this)}>
          <img className="left-arrow" src={arrow} alt=""></img>
        </div>
        <div className="right-buttom" onClick={this.moveRight.bind(this)}>
          <img className="right-arrow" src={arrow} alt=""></img>
        </div>
      </div>
    )
  }
}

export default DesignShowcase
