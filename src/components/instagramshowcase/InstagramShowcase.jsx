import React, { Component } from 'react'

import './instagramShowcase.scss'

import post1 from './../../img/instagram/post1.png';
import post2 from './../../img/instagram/post2.JPG';
import post3 from './../../img/instagram/post3.png';

export class InstagramShowcase extends Component {
  constructor(props) {
    super(props)
  }

  showComponents() {
    document.getElementById("instagram-showcase-container").style.opacity="1";
  }

  moveUp() {
    document.getElementById("instagram-showcase-container").style.top="-100%";
    document.getElementById("instagram-showcase-container").style.opacity="0";
  }

  hideComponents(){
    document.getElementById("instagram-showcase-container").style.opacity="0";
  }


  componentDidUpdate() {
    if (this.props.show){
      this.showComponents();
    } else if(this.props.moveUp){
      this.moveUp();
    } else {
      this.hideComponents();
    }
  }

  render() {
   

    return (
      <div id="instagram-showcase-container">
        {/* <div className="instagram-showcase-post-co"> */}
          {/* <div className="instagram-showcase-post instagram-showcase-post-1">
          <img src={post3} className="instagram-showcase-image"></img>
          </div>
          <div className="instagram-showcase-post instagram-showcase-post-2">
          <img src={post2} className="instagram-showcase-image"></img>
          </div>
          <div className="instagram-showcase-post instagram-showcase-post-3">
          <img src={post1} className="instagram-showcase-image"></img>
          </div> */}
          {/* <h1>Who We Are</h1> */}
        </div>
        
      // </div>
    )
  }
}

export default InstagramShowcase
