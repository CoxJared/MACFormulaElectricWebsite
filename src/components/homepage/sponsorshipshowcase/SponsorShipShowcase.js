import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import sidePodShot from './../../../img/parts/hybrid-side-pod.png';

export class SponsorShipShowcase extends Component {
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
            <img id="about-us-photo"  src={sidePodShot}/>
            <div className="play-button-container">
             <Link to="/sponsors">About</Link>

            </div>
            <div className="about-us-text">
              <h2>Video</h2>
              <h1>SponsorShips</h1>
            </div>
          </div>
        )
      }
}

export default SponsorShipShowcase
