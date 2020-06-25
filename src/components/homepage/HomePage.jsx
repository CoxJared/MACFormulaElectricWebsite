import React, { Component } from 'react'
import  './HomePage.css';
import HomeShowcase from '../homeshowcase/HomeShowcase';
import Header from '../header/Header';
import PhotoSlide from '../photoslide/PhotoSlide';
import ShowcaseLink from '../showcaselink/ShowcaseLink';
import TeamLink from '../teamLink/TeamLink.jsx';


import noseShot from './../../img/competition/nose-shot.jpeg'
import amkBackground from './../../img/parts/amk-close.png';
import playButton from './../../img/playButton.svg'
import hyrbidTilt from './../../img/competition/hybrid-tilt-test.jpg'
import teamPhoto from './../../img/hatch/team-photo.png'
import sidePodshot from './../../img/parts/hybrid-side-pod.png';
import GearBoxExplosion from './gearboxexplosion/GearBoxExplosion';
import CompetitionShowcase from '../competitionshowcase/CompetitionShowcase';
import Footer from '../footer/Footer';
import Button from '../button/Button';
import InstagramPosts from '../instagramposts/InstagramPosts';
import DesignLink from '../designlink/DesignLink';


export class HomePage extends Component {
    constructor (props){
        super(props)

        this.state = {
            entered: false,
            // header:<div/>,
            header:<div />,
            pastedShowcase: true
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    DidEnter =  () => {
        console.log("yrd")
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
                  
                    setTimeout(
                        function(){
                            try{
                  document.getElementById("about-section-container").style.opacity=1;
                } catch{}
                        },800);
                
              }

            return (
                <div className="home-page-component">
                    {this.state.header}
                    <HomeShowcase 
                        DidEnter = {this.DidEnter}
                        didPassShowcase = {this.didPassShowcase}/>
                    <div id="about-section-container">
                        <h2 className="about-section-text">
                        <span>MAC Formula Electric</span> is a student run team  from McMaster University working to design and build a fully electric, formula style racecar
                        </h2>
                    </div>
                    <PhotoSlide 
                    img={noseShot}
                    title="Formula SAE Electric"
                    name="opening"
                    text="Formula SAE and Formula Student challenge students to build a single seat, open wheeled racecar to compete against other schools at annual international competitions. There are many areas of evaluation in these competitions including engineering design, business and cost as well as numerous dynamic events."
                    button = {
                        <a href={"https://www.sae.org/attend/student-events"} 
                        style={{ textDecoration:'none', paddingLeft:'50px'}}
                        target="_blank" rel="noopener noreferrer">
                        <Button text="Explore"/>
                        </a>}/> 
                    
                    <ShowcaseLink 
                        backgroundImage = {amkBackground}
                        type = 'Video'
                        title = 'About Us'
                        linkContainer =           
                            {<a href="https://www.youtube.com/watch?v=M89uLc4ShOY&t=1s" target="_blank">
                                <img className="play-button" src={playButton}/>
                            </a>}
                    />
                    <DesignLink />
                    
                    <TeamLink
                    img={teamPhoto}
                    name="team"
                    title="Team"
                    text="Every year, the team starts out by creating new goals. From there, a plan of action is formed, deadlines are established, and tasks are distributed between team members. Although Formula SAE is an engineering competition, the team requires more than just engineering students. As a result, a conscious effort is made to appeal to students with a variety of backgrounds, interests, and areas of study."/>
                    <CompetitionShowcase />
                    <InstagramPosts/>
                    <Footer />
                </div>
            )
        
    }
}

export default HomePage
