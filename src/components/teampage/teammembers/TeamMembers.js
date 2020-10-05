import React, { Component } from 'react'

import './TeamMembers.css'

import darakShot from './../../../img/team-members/dharak.jpg';
import blaireShot from './../../../img/team-members/blaire.jpg';
import scottShot from './../../../img/team-members/scott.jpg';
import dylanShot from './../../../img/team-members/dylan.jpg';
import ashleyShot from './../../../img/team-members/ashley.jpeg';


export class TeamMembers extends Component {
  constructor() {
    super()
    this.state = {
      members:[
        {name:'Blaire Pauli',
        photo:blaireShot,
        position:'Team Captain & Chief Mechanical Engineer',
        linkedin:'https://www.linkedin.com/in/blaire-pauli-735842155/'},
        {name:'Scott Suthland',
        photo:scottShot,
        position:'Team Captain & Chief Electrical Engineer',
        linkedin:'https://www.linkedin.com/in/suthes1/'},
        {name:'Ashley Majnaric',
        photo:ashleyShot,
        position:'Team Manager',
        linkedin:'https://www.linkedin.com/in/ashleymajnaric/'},
        {name:'Dharak Verma',
        photo:darakShot,
        position:'Engineering Manager',
        linkedin:'https://www.linkedin.com/in/vermad1/'},
        {name:'Dylan Boudreau',
        photo:dylanShot,
        position:'Engineering Manager',
        linkedin:"https://www.linkedin.com/in/dylan-boudreau/"},
        
      ]
    }
  }


  render() {
    return (
      <div className="">
        <h1 className="team-members-section-name">Leadership</h1>
      <div className="team-members-container">
        
        {this.state.members.map(member => (
          <div className="team-member-container">
            <div className="team-member-image-container">
              <img className="team-member-image" src={member.photo} alt=""/>
            </div>
            <div className="team-member-text-container">
              <h1 className="team-member-name">{member.name}</h1>
              <h2 className="team-member-position">{member.position}</h2>
              <a href={member.linkedin} style={{textDecoration:'none'}} target ="_blank" rel="noopener noreferrer">
              <div className="team-member-linkedin-button">
                <h1 className="team-memebr-linkedin-name">in</h1>
              </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    )
  }
}

export default TeamMembers
