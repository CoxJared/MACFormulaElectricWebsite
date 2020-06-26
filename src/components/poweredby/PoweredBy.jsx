import React, { Component } from 'react'
import './PoweredBy.scss';
import { Link } from 'react-router-dom';

import gmLogo from './../../img/sponsor-logos/gm-logo.png';
import altiumLogo from './../../img/sponsor-logos/altium-logo.png';
import amkLogo from './../../img/sponsor-logos/amk-jpeg.png';
import dspaceLogo from './../../img/sponsor-logos/dspacesquare.png';
import linimarLogo from './../../img/sponsor-logos/linimar-logo.png';
import mcmasterLogo from './../../img/sponsor-logos/mcmastersquare.png';
import solidworksLogo from './../../img/sponsor-logos/solidworks-logo.svg';


let sponsors = [
  {logo:mcmasterLogo,
    link:"",
    color:"rgb(94,22,51)",
    id:1},
  {logo:gmLogo,
    link:"",
    color:"rgb(46,86,153)",
    id:2},
  {logo:altiumLogo,
    link:"",
    color:"rgb(166,151,106)",
    id:3},
  {logo:amkLogo,
    link:"",
    color:"rgb(64,151,199)",
    id:4},
  {logo:dspaceLogo,
    link:"",
    color:"rgb(22,70,145)",
    id:5},
  {logo:linimarLogo,
    link:"",
    color:"rgb(196,94,37)",
    id:6},

  {logo:solidworksLogo,
    link:"",
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
