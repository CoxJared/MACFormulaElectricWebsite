import React, { Component } from 'react'
import Header from '../header/Header';
import TeamShowcase from './teamshowcase/TeamShowcase';
import PhotoSlide from '../photoslide/PhotoSlide';

import './TeamPage.css'

import openHousePhoto from './../../img/hatch/open-house.jpeg';
import teamPhoto from './../../img/hatch/team-photo.png';

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
                    text="Although Formula SAE is an engineering competition, the team requires more than just engineering students. As a result, a conscious effort is made to appeal to students with a variety of backgrounds, interests, and areas of study. This ensures that we have the best people in the right roles."/>
      </div>
    )
  }
}

export default TeamPage
