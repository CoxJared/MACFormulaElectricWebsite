import React, { Component } from 'react'
import './PoweredBy.scss';
import { Link } from 'react-router-dom';

import haasLogo from './../../img/sponsor-logos/hass-logo.png';
import mesLogo from './../../img/sponsor-logos/mes-logo.png';
import amkLogo from './../../img/sponsor-logos/amk-jpeg.png';
import dspaceLogo from './../../img/sponsor-logos/dspacesquare.png';
import linimarLogo from './../../img/sponsor-logos/linimar-logo.png';
import mcmasterLogo from './../../img/sponsor-logos/mcmastersquare.png';
import solidworksLogo from './../../img/sponsor-logos/solidworks-logo.svg';


let sponsors = [
  {logo:mcmasterLogo,
    link:"https://www.eng.mcmaster.ca/",
    color:"rgb(94,22,51)",
    id:1},
  {logo:haasLogo,
    link:"https://www.haascnc.com/index.html",
    color:"rgb(46,86,153)",
    id:2},

  {logo:amkLogo,
    link:"https://amk-group.com/en/content/formula_student_electric",
    color:"rgb(64,151,199)",
    id:3},
  {logo:mesLogo,
    link:"http://www.macengsociety.ca/",
    color:"rgb(166,151,106)",
    id:4},
  {logo:linimarLogo,
    link:"https://www.linamar.com/",
    color:"rgb(196,94,37)",
    id:5},
  {logo:dspaceLogo,
    link:"https://www.dspace.com/en/inc/home.cfm",
    color:"rgb(22,70,145)",
    id:6},
  {logo:solidworksLogo,
    link:"https://www.solidworks.com/",
    color:"rgb(209,73,67)",
    id:7},
]


export class PoweredBy extends Component {

  showComponents() {
    setTimeout(() => {
      document.getElementById("powered-by-container").style.opacity=.7;
      // document.getElementById("powered-by-container").style.width='500px';
      for (let i = 1; i < 8; i++){
        setTimeout(() => {
          try{
          document.getElementById(`powered-by-sponsor-${i}`).style.opacity='1';
          }catch{}
        },300 * i);    
      }
    }, 500);
  }
  hideComponents() {
    document.getElementById("powered-by-container").style.opacity=0;
  }

  componentDidUpdate(){
    if(this.props.show) {
      this.showComponents();
    } else{
      this.hideComponents();
    }
  }

  render() {
    return (
      <div id="powered-by-container">
        <div className="powered-by-sponsors-container">
        <h1 className="powered-by-title">Powered By 
        
          <span className="powered-by-view-all">
            <Link to="/sponsors" style={{textDecoration:'none'}}>
              <h1 id="view-all-text">View All</h1>
            </Link>
          </span>
        </h1>
        
          {sponsors.map(sponsor => (
            <a id={`powered-by-sponsor-${sponsor.id}`} href={sponsor.link} target="_blank" rel="noopener noreferrer"
              style={{borderColor:sponsor.color,
              // boxShadow:`2px 3px 3px ${sponsor.color}`
              }}>
              <img className="powered-by-sponsor-image" src={sponsor.logo} alt=""/>
            </a>
            ))}
            
        </div>

      </div>
    )
  }
}

export default PoweredBy
