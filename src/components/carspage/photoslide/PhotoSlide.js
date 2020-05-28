import React, { Component } from 'react'

import rileyInCar from './../../../img/hatch/riley-in-car.jpeg'

import './PhotoSlide.css';

export class PhotoSlide extends Component {
componentDidMount() {
  // window.onscroll = function() {}
}

  render() {

       //checking if the design container is inside viewport, whenever scroll happens
      //TODO: fix these exceptions
      
        window.addEventListener('scroll', function (event) {
          try{
          var bounding = document.querySelector('.check-visible').getBoundingClientRect();

            let halfHeight = 100
            if (
              bounding.top >= 0 &&
              bounding.bottom - halfHeight <= (window.innerHeight || document.documentElement.clientHeight) ) {  
    
                //Show Elements
                document.getElementById("photoslide-container").style.opacity=(100);
                document.getElementById("description-container").style.top=(0);
            }
          }catch{}
        })
      
    

    return (
      <div id='photoslide-container'>
        <div className="white-line"><div></div></div>
        <div id="description-container">
          <h1 id="photoslide-title">Innovation</h1>
          <p id="photoslide-description">
            MAC Formula Electric prides itself for being on the cutting edge of motorsport technology by implementing techniques and design features which are rarely seen in anything other than premier racing series.
          </p>
        </div>
        <div className="photoslide-image-container check-visible">
          <img className= "photoslide-image" src={rileyInCar} />
        </div>
        <div className="white-line"><div></div></div>
      </div>
    )
  }
}

export default PhotoSlide
