import React, { Component } from 'react'

import garagePhoto from './../../../img/parts/amk-close.png';
import playButton from './../../../img/playButton.svg'

import './AboutUsVideo.css';


export class AboutUsVideo extends Component {
  render() {

    window.addEventListener('scroll', function (event) {
      try{
      var bounding = document.querySelector('.about-us-text').getBoundingClientRect();

        if (
          bounding.top >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) ) {  

            //Show Elements
            document.getElementById("about-us-container").style.opacity=(100);
            document.getElementById("about-us-photo").style.left='-10%';
            document.getElementById("about-us-photo").style.width='115%';
        }
      }catch{}
    })

    return (
      <div id="about-us-container" >
        <img id="about-us-photo"  src={garagePhoto}/>
        <div className="play-button-container">
        <img className="play-button" src={playButton}/>
        </div>
        <div className="about-us-text">
          <h2>Video</h2>
          <h1>What We Do</h1>
        </div>
      </div>
    )
  }
}

export default AboutUsVideo
