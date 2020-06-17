import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './TeamLink.css';

export class TeamLink extends Component {
  render() {

      //checking if the design container is inside viewport, whenever scroll happens
      //TODO: fix these exceptions
      var className= `.${this.props.name}`
      
      window.addEventListener('scroll', function (event) {
        try{
          
          console.log(className)
          var bounding = document.querySelector(className).getBoundingClientRect();

          let halfHeight = 200
          if (
            bounding.top >= 0 &&
            bounding.bottom - halfHeight <= (window.innerHeight || document.documentElement.clientHeight) ) {  
  
              //Show Elements
              document.getElementById("photoslide-container-2").style.opacity=(1);
              if(this.window.innerWidth > 15000){
              document.getElementById("description-container-2").style.top="30px";
              } else{
                document.getElementById("description-container-2").style.top="2vw";
              }
          }
        }catch(err){
          console.log(err)}
      })

    return (
      <div id={`photoslide-container-2`}>
        <div className="white-line"><div></div></div>
        <div className={`photoslide-image-container-2 check-visible-2 ${this.props.name}`}>
          <img className= "photoslide-image-2" src={this.props.img} alt=""/>
        </div>
        <div id={`description-container-2`}>
          <h1 id="photoslide-title-2">{this.props.title}</h1>
          <p id="photoslide-description-2">
            {this.props.text}
          </p>
          <Link to="/team" style={{textDecoration:'none'}}>
            <div className="team-link-button">
            <h1 className="team-link-title">Explore</h1>
            <div className="team-link-white"/>
          </div>
          </Link>
        </div>
       
        
        <div className="white-line"><div></div></div>
      </div>
    )
  }
}

export default TeamLink
