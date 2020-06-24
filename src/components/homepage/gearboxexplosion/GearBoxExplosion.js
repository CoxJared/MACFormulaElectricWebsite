import React, { Component } from 'react'
import { VideoScroll } from 'react-video-scroll'

import './GearBoxExplosion.css'

import explosionGif from './../../../img/test.mp4';

const setStyles = (wrapperEl, videoEl, playbackRate) => {
  wrapperEl.style.marginTop = '-100px'
  wrapperEl.style.marginBottom = '-100px'

}


export class GearBoxExplosion extends Component {

  componentDidMount() {
    setTimeout(() => {
      document.getElementById("zapdos-container").style.opacity=1;
    }, 500);
  }

  render() {

    window.onscroll = () => {
      let delay=200;

      try{
        var currentScrollPos = window.pageYOffset;
        if(currentScrollPos >=500){
          document.getElementById("zapdos-video-container").style.position="relative"
          document.getElementById("zapdos-video-container").style.top="500px"
        } else{
          document.getElementById("zapdos-video-container").style.position="fixed"
          document.getElementById("zapdos-video-container").style.top="0px";

          // document.getElementById("zapdos-video").style.width=(3500-currentScrollPos*3)+"px";
          // document.getElementById("zapdos-video").style.marginLeft=(-currentScrollPos/10)-50+"px";
          document.getElementById("zapdos-video").style.opacity=(400+currentScrollPos/10)+"%";
          // document.getElementById("zapdos-video").style.paddingTop=(50+currentScrollPos/5)+"px";

          document.getElementById("landing-title-container").style.opacity=100-(currentScrollPos*2)+"%";
          console.log("he")
        }

        if(currentScrollPos > 0){
          this.props.DidEnter()
          console.log("hi")
        }

      }catch{}
    }


    return (
      <div id="zapdos-container">
        <div id="landing-title-container">
          <h1 className="landing-title">MAC Formula Electric</h1>
          <h2 id="landing-subtitle">Inspiring a Culture of Innovation</h2>
        </div>
        
        <div id="zapdos-video-container">
        
        <VideoScroll
          onLoad = 
          {props =>
            setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
          }
          playbackRate={100}
          id="zapdos-video"
        >
        
        
        <video
          tabIndex="0"
          autobuffer="autobuffer"
          preload="preload"
          style={{ width: '100%', objectFit: 'contain' }}
          playsInline
          // id="zapdos-video"
        >
          <source type="video/mp4" src={explosionGif} />
        </video>
    </VideoScroll>
    
    </div>
      </div>
    )
  }
}

export default GearBoxExplosion
