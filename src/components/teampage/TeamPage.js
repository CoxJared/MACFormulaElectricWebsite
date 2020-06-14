import React, { Component } from 'react'
import Header from '../header/Header';
import TeamShowcase from './teamshowcase/TeamShowcase';
import PhotoSlide from '../photoslide/PhotoSlide';

import './TeamPage.css'

import openHousePhoto from './../../img/hatch/open-house.jpeg';
import Footer from '../footer/Footer';

export class TeamPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="team-page-container">
        <Header />
        <TeamShowcase />
        {/* <div className="team-photo-container">
          <img className="team-photo" src={teamPhoto}></img>
        </div> */}
        <PhotoSlide 
                    img={openHousePhoto}
                    title="Recruitment Events"
                    text="Open houses and Info sessions are held at the beginning of the school year for anyone interested to come and learn about the team.  These events are a great way to come out and see if this is a team you may be interested in joining!"/>
        <Footer />
      </div>
    )
  }
}

export default TeamPage
