import React, { Component } from 'react'
import './PoweredBy.scss';

import gmLogo from './../../img/sponsor-logos/gm-logo.png';
import altiumLogo from './../../img/sponsor-logos/altium-logo.png';
import amkLogo from './../../img/sponsor-logos/amk-jpeg.png';
import dspaceLogo from './../../img/sponsor-logos/dspacesquare.png';
import linimarLogo from './../../img/sponsor-logos/linimar-logo.png';
import mcmasterLogo from './../../img/sponsor-logos/mcmastersquare.png';
import solidworksLogo from './../../img/sponsor-logos/solidworks-logo.jpg';


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
]


export class PoweredBy extends Component {
  render() {
    return (
      <div className="powered-by-container">
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
