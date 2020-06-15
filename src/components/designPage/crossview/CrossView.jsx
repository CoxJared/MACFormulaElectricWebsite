import React, { Component } from 'react'
import './CrossView.scss'

import crossView from './../../../img/renders/front-cut.png';

export class CrossView extends Component {
  componentDidMount() {
    window.addEventListener('scroll', function (event) {
      //TODO: fix these exceptions
      try{
        var bounding = document.querySelector('#cross-view-text-container').getBoundingClientRect();
        let halfHeight = 400
        if (
          bounding.top >= 0 &&
          bounding.bottom - halfHeight <= (window.innerHeight || document.documentElement.clientHeight) ) {  

            //Show Elements
            document.getElementById("cross-view-container").style.opacity=1;
            document.getElementById("cross-view-text-container").style.marginTop='100px';
            // document.getElementById("design-text-container").style.top=(0);
        }
      } catch{}
    })
  }

  render() {
    return (
      <div id="cross-view-container">
        <div id="cross-view-text-container">
          <h1 className="cross-view-title">Innovation</h1>
          <h2 className="cross-view-text">MAC Formula Electric prides itself for being on the cutting edge of motorsport technology by implementing techniques and design features which are rarely seen in anything other than premier racing series.  This includes features such as a carbon fibre monocoque, custom pcbs and torqu vectoring!</h2>
        </div>
        <img className="cross-view-image" src={crossView} />
      </div>
    )
  }
}

export default CrossView
