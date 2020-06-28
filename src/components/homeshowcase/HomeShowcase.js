import React, { Component } from 'react'
import './HomeShowcase.css';

import darkImage from './../../img/renders/showcase-red.png';
import lightImage from './../../img/renders/showcase-light.png';
import arrow from './../../img/arrow.png'
import PoweredBy from '../poweredby/PoweredBy';
import InstagramShowcase from '../instagramshowcase/InstagramShowcase';

export class HomeShowcase extends Component {

        constructor(props) {
            super(props)
            this.state ={
              leave:false,
              entered:false,
              loaded:false
            }
          }
        
          componentDidMount() {
            window.scrollTo(0, 0)
            this.initialLoad()
          } 

          imageDidLoad() {
            if(!this.state.loaded) {
              this.setState({loaded: true})
            }
          }

          initialLoad() {
            this.updateElements()
            this.moveArrow()
          }
        
          updateElements() {
            setTimeout(
                function(){
                  try{
                    //text appear
                    (document.getElementById("landing-title-container")).style.opacity="1";
                    (document.getElementById("landing-title-container")).style.top="360px";
                    (document.getElementById("landing-subtitle")).style.marginTop="0px";
                    (document.getElementById("landing-image-container")).style.left= '0px';

                    //image fade in
                    (document.getElementById("landing-image-container")).style.opacity="1";
                  } catch {}
                }, 500)
          }
        
          moveArrow() { 
            setTimeout(
              function(){
                try {
                  document.getElementById("enter-arrow").style.top="50px"
                  document.getElementById("enter-arrow").style.opacity="1"
                  setTimeout(
                      function(){
                        try {
                          document.getElementById("enter-arrow").style.opacity="0";
                        } catch {}
                      },1000)
                    } catch {}
                },4000)
                
          }
        
          updateShowcase = () => {
            (document.getElementById("landing-image-dark")).style.opacity= 0;
            (document.getElementById("landing-title-container")).style.opacity= 0;
            (document.getElementById("landing-image-container")).style.marginTop="00px";



            if(window.innerWidth < 750 ){
              (document.getElementById("landing-title-container")).style.top= '-20vw';
            } else {
              (document.getElementById("landing-title-container")).style.top= '00px';
            }
            
            if(window.innerWidth > 1200){
              (document.getElementById("landing-image-container")).style.maxWidth="780px";
              (document.getElementById("landing-image-container")).style.left= '280px';
            } else {
              (document.getElementById("landing-image-container")).style.marginTop="5vw";
              (document.getElementById("landing-image-container")).style.maxWidth="60vw";
              (document.getElementById("landing-image-container")).style.left= '23vw';
              console.log('yep')
            }
            this.props.DidEnter()
            this.setState({entered:true})
          }

          unfixPage = () => {
            (document.getElementById("landing-page-container")).style.position= 'relative';
            (document.getElementById("landing-page-container")).style.top= '300px';

            this.props.didPassShowcase()
          }

          fixPage = () => {
            (document.getElementById("landing-page-container")).style.position= 'fixed';
            (document.getElementById("landing-page-container")).style.top= '0px';
          }

          checkScrolling = () => {
            window.onscroll = () => {
              try{ 
                if(window.pageYOffset > 90){
                  this.updateShowcase()
                }
                if(window.pageYOffset > 300){
                  this.unfixPage()
                }
                else{
                  this.fixPage()
                }
              }catch {}
            } 
          }
        
          render() {
            // if(this.state.loaded && !this.state.entered) {
            //   this.initialLoad();
            // }

            if(window.innerWidth > 750){
            this.checkScrolling()
            return (
              <div className="landing-ether">
                <div id="landing-page-container">
                  <div id="landing-image-container">
                    <img id="landing-image" src={lightImage} alt=""/>
                    <img id="landing-image-dark" src={darkImage} alt="" onLoad={this.imageDidLoad()}/>
                  </div>
                  <div id="landing-title-container">
                    <h1 className="landing-title">MAC Formula Electric</h1>
                    <h2 id="landing-subtitle">Inspiring a Culture of Innovation</h2>
                  </div>
                  <div className="enter-arrow-container" onClick={this.moveLanding}>
                    <img id="enter-arrow" src={arrow} alt=""></img>
                  </div>
                  <PoweredBy show={this.state.entered} moveup={this.props.didPassShowcase}/>
                <InstagramShowcase show={this.state.entered} moveup={this.props.didPassShowcase}/>
                </div>
              </div>
            )
            } else {
              return(
              <div className="landing-mobile">
                <img className="mobile-showcase-pic" src={darkImage} alt=""/>
                <div id="mobile-landing-title-container">
                    <h1 className="mobile-landing-title">MAC Formula Electric</h1>
                    <h2 id="mobile-landing-subtitle">Inspiring a Culture of Innovation</h2>
                  </div>
              </div>
              )}
        }
}

export default HomeShowcase
