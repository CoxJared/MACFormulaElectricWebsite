import React, { Component } from 'react'
import  './HomePage.css';
import HomeShowcase from '../homeshowcase/HomeShowcase';
import Header from '../header/Header';

import noseShot from './../../img/competition/nose-shot.jpeg';
import PhotoSlide from '../photoslide/PhotoSlide';
import PhotoShowcase from './aboutusvideo/AboutUsVideo';


export class HomePage extends Component {
    constructor (props){
        super(props)

        this.state = {
            entered: false,
            header:<div/>,
            pastedShowcase: false
        }
    }

    DidEnter =  () => {
        this.setState({
            entered: true,
            header:<Header></Header>
        })
    }

    didPassShowcase = () => {
        this.setState({
            pastedShowcase: true
        })
    }

    

    render() {
            
            if(this.state.pastedShowcase)
                {  
                  //Show Elements
                  try{
                    setTimeout(
                        function(){
                  document.getElementById("about-section-container").style.opacity=1;
                        },800);
                } catch{}
              }

            return (
                <div className="home-page-component">
                    {this.state.header}
                    <HomeShowcase 
                    DidEnter = {this.DidEnter}
                    didPassShowcase = {this.didPassShowcase}/>
                    <div id="about-section-container">
                        <h2 classname="about-section-text">
                        <span>MAC Formula Electric</span> is a student run team working to design and build a fully electric, formula style racecar
                        </h2>
                    </div>
                    
                    <PhotoSlide 
                    img={noseShot}
                    title="Formula SAE Electric"
                    text="Formula SAE and Formula Student challenge students to build a single seat, open wheeled racecar to compete against other schools at annual international competitions. There are many areas of evaluation in these competitions including engineering design, business and cost as well as numerous dynamic events."/>

                    {/* <div className="youtube-container">
                     
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/M89uLc4ShOY?modestbranding=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                    </div> */}
                    <PhotoShowcase/>
                    
                </div>
            )
        
    }
}

export default HomePage
