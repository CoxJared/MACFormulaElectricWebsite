import React, { Component } from 'react'

import './TeamMembers.css'

import jaredShot from './../../../img/team-members/jared.jpg';
import blaireShot from './../../../img/team-members/blaire.jpg';
import jessieShot from './../../../img/team-members/jessie.jpg';
import scottShot from './../../../img/team-members/scott.jpg';
import dylanShot from './../../../img/team-members/dylan.jpg';
import harjotshot from './../../../img/team-members/harjot.jpg';


export class TeamMembers extends Component {
  constructor() {
    super()
    this.state = {
      members:[
        {name:'Jessie Boudreau',
        photo:jessieShot,
        position:'Team Lead'},
        {name:'Scott Suthland',
        photo:scottShot,
        position:'Electrical Lead'},
        {name:'Jared Cox',
        photo:jaredShot,
        position:'Mechanical Lead'},
        {name:'Blaire Pauli',
        photo:blaireShot,
        position:'Mechanical Lead'},
        {name:'Dylan Boudreau',
        photo:dylanShot,
        position:'Mechanical Lead'},
        {name:'Harjot Nijjar',
        photo:harjotshot,
        position:'Controls Lead'},
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
              <img className="team-member-image" src={member.photo} />
            </div>
            <div className="team-member-text-container">
              <h1 className="team-member-name">{member.name}</h1>
              <h2 className="team-member-position">{member.position}</h2>
              <div className="team-member-linkedin-button">
                <h1 className="team-memebr-linkedin-name">in</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    )
  }
}

export default TeamMembers
