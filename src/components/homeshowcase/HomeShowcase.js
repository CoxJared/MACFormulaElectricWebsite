import React, { Component } from 'react'
import './HomeShowcase.css';

import darkImage from './../../img/renders/red-front-new.png';
import lightImage from './../../img/renders/home-lit.png';
import arrow from './../../img/arrow.png'

export class HomeShowcase extends Component {

        constructor(props) {
            super(props)
            this.state ={
              leave:false
            }
          }
        
          componentDidMount() {
            window.scrollTo(0, 0)
        
            this.updateElements()
            this.moveArrow()
          } 
        
          updateElements() {
            setTimeout(
                function(){
            //text appear
            (document.getElementById("landing-title-container")).style.opacity="1";
            (document.getElementById("landing-title-container")).style.top="360px";
            (document.getElementById("landing-subtitle")).style.marginTop="0px";
            
            //image fade in
            (document.getElementById("landing-image-container")).style.opacity="1";
                }, 500)
          }
        
          moveArrow() { 
            setTimeout(
            function(){
              document.getElementById("enter-arrow").style.top="50px"
              document.getElementById("enter-arrow").style.opacity="1"
              setTimeout(
                  function(){
                      document.getElementById("enter-arrow").style.opacity="0"},1000);
                  },4000)
          }
        
          updateShowcase = () => {
            (document.getElementById("landing-image-dark")).style.opacity= 0;
            (document.getElementById("landing-title-container")).style.opacity= 0;
            (document.getElementById("landing-title-container")).style.top= '00px';
            (document.getElementById("landing-image-container")).style.width= '1550px';

            this.props.DidEnter()
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
            //if scroll down
            window.onscroll = () => {
              try{ //User can switch pages and this still attempts to find the IDs
                //updateShowcase
                if(window.pageYOffset > 90){
                  this.updateShowcase()
                }
                else{
                  (document.getElementById("landing-image-dark")).style.opacity= 1;
                  (document.getElementById("landing-title-container")).style.opacity="1";
                  (document.getElementById("landing-title-container")).style.top="360px";
                }
  
                //unfix page
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
        
            this.checkScrolling()

        
              
            return (
              <div className="landing-ether">
              <div id="landing-page-container">
                <div id="landing-image-container">
                  <img id="landing-image" src={lightImage} alt=""/>
                  <img id="landing-image-dark" src={darkImage} alt=""/>
                </div>
                <div id="landing-title-container">
                  <h1 className="landing-title">MAC Formula Electric</h1>
                  <h2 id="landing-subtitle">Inspiring a Culture of Innovation</h2>
                </div>
                <div className="enter-arrow-container" onClick={this.moveLanding}>
                  <img id="enter-arrow" src={arrow} alt=""></img>
                </div>
              </div>
              </div>
            )
          }
}

export default HomeShowcase
