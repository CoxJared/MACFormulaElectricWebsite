import React, { Component } from 'react'

import './ShowCaseLink.css';

export class ShowcaseLink extends Component {
  render() {

    window.addEventListener('scroll', function (event) {
      try{
      var bounding = document.querySelector('.showcase-link-text').getBoundingClientRect();

        if (
          bounding.top >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) ) {  

            //Show Elements
            document.getElementById("showcase-link-container").style.opacity=(100);
            document.getElementById("showcase-link-photo").style.left='-10%';
            document.getElementById("showcase-link-photo").style.width='115%';
        }
      }catch{}
    })

    return (
      <div id="showcase-link-container" >
        <img id="showcase-link-photo"  src={this.props.backgroundImage} alt=""/>

        <div className="showcase-link-linked-container">
          {this.props.linkContainer}
        </div>
        <div className="showcase-link-text">
          <h2>{this.props.type}</h2>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    )
  }
}

export default ShowcaseLink
