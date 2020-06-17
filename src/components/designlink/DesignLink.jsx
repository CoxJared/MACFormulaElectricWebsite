import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './DesignLink.scss'

import crossView from './../../img/renders/design-link.png';
import Button from '../button/Button';

export class DesignLink extends Component {
  componentDidMount() {
    window.addEventListener('scroll', function (event) {
      //TODO: fix these exceptions
      try{
        var bounding = document.querySelector('#design-link-text-container').getBoundingClientRect();
        let halfHeight = 400
        if (
          bounding.top >= 0 &&
          bounding.bottom - halfHeight <= (window.innerHeight || document.documentElement.clientHeight) ) {  

            //Show Elements
            document.getElementById("design-link-container").style.opacity=1;
            this.document.getElementById("design-link-image").style.left='0px';

            if(this.window.innerWidth >1500){
              document.getElementById("design-link-text-container").style.marginTop='200px';
            } else {
              document.getElementById("design-link-text-container").style.marginTop='10vw';
            }
        }
      } catch{}
    })
  }
  render() {
    return (
      <div id="design-link-container">
        <div id="design-link-text-container">
          <h1 className="design-link-title">Design</h1>
          <h2 className="design-link-text">MAC Formula Electric prides itself for being on the cutting edge of motorsport technology by implementing techniques and design features which are rarely seen in anything other than premier racing series.  This includes features such as a carbon fibre monocoque, custom pcbs and torque vectoring!</h2>
          <Link to="/design" style={{textDecoration:'none'}}>
            <Button text="Explore"/>
          </Link>
        </div>
        <img id="design-link-image" src={crossView} />
      </div>
    )
  }
}

export default DesignLink
