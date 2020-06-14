import React, { Component } from 'react';

import './PhotoSlide2.css';

export class PhotoSlide2 extends Component {
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
              document.getElementById("description-container-2").style.top="30px";
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
        </div>
        
        <div className="white-line"><div></div></div>
      </div>
    )
  }
}

export default PhotoSlide2
