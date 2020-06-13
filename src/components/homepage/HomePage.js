import React, { Component } from 'react'
import  './HomePage.css';
import HomeShowcase from '../homeshowcase/HomeShowcase';
import Header from '../header/Header';
import PhotoSlide from '../photoslide/PhotoSlide';
import ShowcaseLink from '../showcaselink/ShowcaseLink';
import PhotoSlide2 from '../photoslide2/PhotoSlide2';


import noseShot from './../../img/competition/nose-shot.jpeg'
import amkBackground from './../../img/parts/amk-close.png';
import playButton from './../../img/playButton.svg'
import hyrbidTilt from './../../img/competition/hybrid-tilt-test.jpg'
import teamPhoto from './../../img/hatch/team-photo.png'
import sidePodshot from './../../img/parts/hybrid-side-pod.png';
import GearBoxExplosion from './gearboxexplosion/GearBoxExplosion';
import CompetitionShowcase from '../competitionshowcase/CompetitionShowcase';
import Footer from '../footer/Footer';


export class HomePage extends Component {
    constructor (props){
        super(props)

        this.state = {
            entered: false,
            header:<div/>,
            pastedShowcase: false
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
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
                        <h2 className="about-section-text">
                        <span>MAC Formula Electric</span> is a student run team working to design and build a fully electric, formula style racecar
                        </h2>
                    </div>
                    
                    <PhotoSlide 
                    img={noseShot}
                    title="Formula SAE Electric"
                    name="opening"
                    text="Formula SAE and Formula Student challenge students to build a single seat, open wheeled racecar to compete against other schools at annual international competitions. There are many areas of evaluation in these competitions including engineering design, business and cost as well as numerous dynamic events."/>
                    <ShowcaseLink 
                        backgroundImage = {amkBackground}
                        type = 'Video'
                        title = 'About Us'
                        linkContainer =           
                            {<a href="https://www.youtube.com/watch?v=M89uLc4ShOY&t=1s" target="_blank">
                                <img className="play-button" src={playButton}/>
                            </a>}
                    />
                    <PhotoSlide2
                    img={teamPhoto}
                    name="team"
                    title="Our Team"
                    text="Every year, the team starts out by creating new goals. From there, a plan of action is formed, deadlines are established, and tasks are distributed between team members. Although Formula SAE is an engineering competition, the team requires more than just engineering students. As a result, a conscious effort is made to appeal to students with a variety of backgrounds, interests, and areas of study."/>
                    <CompetitionShowcase />
                    <Footer />
                </div>
            )
        
    }
}

export default HomePage
