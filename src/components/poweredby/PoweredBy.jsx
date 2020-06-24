import React, { Component } from 'react'
import './PoweredBy.scss';

import gmLogo from './../../img/sponsor-logos/gm-logo.png';
import altiumLogo from './../../img/sponsor-logos/altium-logo.png';
import amkLogo from './../../img/sponsor-logos/amk-jpeg.png';
import dspaceLogo from './../../img/sponsor-logos/dspacesquare.png';
import linimarLogo from './../../img/sponsor-logos/linimar-logo.png';
import mcmasterLogo from './../../img/sponsor-logos/mcmastersquare.png';
import solidworksLogo from './../../img/sponsor-logos/solidworks-logo.svg';
import benderLogo from './../../img/sponsor-logos/bender-logo.jpg';
import cpaLogo from './../../img/sponsor-logos/cpaontario-logo.png';
import faroLogo from './../../img/sponsor-logos/faro-logo.png';
import generalSealants from './../../img/sponsor-logos/generalsealants-logo.png';
import mathworksLogo from './../../img/sponsor-logos/mathworks-logo.jpeg';
import mclarenEngineeringLogo from './../../img/sponsor-logos/mclarenengineering-logo.jpg';
import mesLogo from './../../img/sponsor-logos/mes-logo.png';
import mscLogo from './../../img/sponsor-logos/mscsoftware-logo.png'; 
import TeConnectivityLogo from './../../img/sponsor-logos/teconnectivity-logo.png';
import vigradeLogo from './../../img/sponsor-logos/vigrade-logo.png';
import electroMeters from './../../img/sponsor-logos/electro-meters-logo.png';


let sponsors = [
  {logo:gmLogo,
    link:"",
    color:"rgb(46,86,153)"},
  {logo:altiumLogo,
    link:"",
    color:"rgb(166,151,106)"},
  {logo:amkLogo,
    link:"",
    color:"rgb(64,151,199)"},
  {logo:dspaceLogo,
    link:"",
    color:"rgb(22,70,145)"},
  {logo:linimarLogo,
    link:"",
    color:"rgb(196,94,37)"},
  {logo:mcmasterLogo,
    link:"",
    color:"rgb(94,22,51)"},
  {logo:solidworksLogo,
    link:"",
    color:"rgb(209,73,67)"},
  // {logo:benderLogo,
  //   link:"",
  // color:"rgb(54,122,60)"},
  // {logo:cpaLogo,
  //   link:"",
  //   color:"rgb(16,63,160)"},
  // {logo:faroLogo,
  //   link:"",
  //   color:"rgb(31,82,133)"},
  // {logo:generalSealants,
  //   link:"",
  //   color:"rgb(188,53,50)"},
  // {logo:mathworksLogo,
  //   link:"",
  //   color:"rgb(36,91,142)"},
  // {logo:mclarenEngineeringLogo,
  //   link:"",
  //   color:"rgb(178,87,52)"},
  // {logo:mesLogo,
  //   link:"",
  //   color:"rgb(219,56,50)"},
  // {logo:mscLogo,
  //   link:"",
  //   color:"rgb(235,73,60)"},
  // {logo:TeConnectivityLogo,
  //   link:"",
  //   color:"rgb(229,146,52)"},
  // {logo:vigradeLogo,
  //   link:"",
  //   color:"rgb(217,67,51)"},
  // {logo:electroMeters,
  //   link:"",
  //   color:"rgb(33,81,161)"},
]


export class PoweredBy extends Component {
  constructor(props) {
    super(props)
  }

  showComponents() {
    document.getElementById("powered-by-container").style.opacity=.7;
  }
  render() {
    if(this.props.show) {
      this.showComponents()
    }
    return (
      <div id="powered-by-container">
        <h1 className="powered-by-title">Powered By</h1>
        <div className="powered-by-sponsors-container">
          {sponsors.map(sponsor => (
            <a className="powered-by-sponsor" href={sponsor.link} target="_blank" rel="noopener noreferrer"
              style={{borderColor:sponsor.color}}>
              <img className="powered-by-sponsor-image" src={sponsor.logo}/>
            </a>
            ))}
        </div>
      </div>
    )
  }
}

export default PoweredBy
