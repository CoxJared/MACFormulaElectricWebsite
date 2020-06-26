import React, { Component } from 'react'

import './TeamMembers.css'

import jaredShot from './../../../img/team-members/jared.jpg';
import blaireShot from './../../../img/team-members/blaire.jpg';
import jessieShot from './../../../img/team-members/jessie.jpg';
import scottShot from './../../../img/team-members/scott.jpg';
import dylanShot from './../../../img/team-members/dylan.jpg';
import harjotshot from './../../../img/team-members/harjot.jpg';
import ashleyShot from './../../../img/team-members/ashley.jpeg';


export class TeamMembers extends Component {
  constructor() {
    super()
    this.state = {
      members:[
        {name:'Jessie Boudreau',
        photo:jessieShot,
        position:'Team Lead',
        linkedin:''},
        {name:'Blaire Pauli',
        photo:blaireShot,
        position:'Mechanical Lead'},
        
        {name:'Scott Suthland',
        photo:scottShot,
        position:'Electrical Lead'},
        {name:'Dylan Boudreau',
        photo:dylanShot,
        position:'Vehicle Dynamics Lead'},
        {name:'Harjot Nijjar',
        photo:harjotshot,
        position:'Controls Lead'},
        {name:'Ashley Majnaric',
        photo:ashleyShot,
        position:'Business Lead'},
        {name:'Jared Cox',
        photo:jaredShot,
        position:'Mechanical Lead',
      linkedin:'https://www.linkedin.com/in/jared-cox-110591149/'},
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
