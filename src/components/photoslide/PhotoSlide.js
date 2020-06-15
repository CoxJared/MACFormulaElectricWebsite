import React, { Component } from 'react'

import './PhotoSlide.css';

export class PhotoSlide extends Component {
constructor(props) {
  super(props)
}

componentDidMount() {
  // window.onscroll = function() {}

    
}

  render() {

         //checking if the design container is inside viewport, whenever scroll happens
      //TODO: fix these exceptions
      var className= `.${this.props.name}`
      
      window.addEventListener('scroll', function (event) {
        try{
          
          console.log(className)
          var bounding = document.querySelector(className).getBoundingClientRect();

          let halfHeight = 100
          if (
            bounding.top >= 0 &&
            bounding.bottom - halfHeight <= (window.innerHeight || document.documentElement.clientHeight) ) {  
  
              //Show Elements
              document.getElementById("photoslide-container").style.opacity=(1);
              document.getElementById("description-container").style.top='-40px';
          }
        }catch(err){
          console.log(err)}
      })
    

    return (
      <div id={`photoslide-container`}>
        <div className="white-line"><div></div></div>
        <div id={`description-container`}>
          <h1 id="photoslide-title">{this.props.title}</h1>
          <p id="photoslide-description">
            {this.props.text}
          </p>
          {this.props.button}
        </div>
        <div className={`photoslide-image-container check-visible ${this.props.name}`}>
          <img className= "photoslide-image" src={this.props.img} alt=""/>
        </div>
        <div className="white-line"><div></div></div>
      </div>
    )
  }
}

export default PhotoSlide
