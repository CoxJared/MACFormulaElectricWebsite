import React, { Component } from 'react'
import { VideoScroll } from 'react-video-scroll'

import './GearBoxExplosion.css'

// import explosionGif from './../../../img/test.mp4';

const setStyles = (wrapperEl, videoEl, playbackRate) => {

  wrapperEl.style.marginTop = '-100px'
  wrapperEl.style.marginBottom = '-100px'

}

export class GearBoxExplosion extends Component {

  playVideo() {
    this.refs.vidRef.play();
  }
  render() {
    return (
      <div className="gearbox-explosion-container">
        <VideoScroll
          onLoad = 
          {props =>
            setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
          }
          playbackRate={300}
          className="gearbox-explosion-video"
        >
        
        <video
          tabIndex="0"
          autobuffer="autobuffer"
          preload="preload"
          style={{ width: '100%', objectFit: 'contain' }}
          playsInline
        >
          {/* <source type="video/mp4" src={explosionGif} /> */}
        </video>
    </VideoScroll>
      </div>
    )
  }
}

export default GearBoxExplosion
