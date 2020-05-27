import React, { Component } from 'react'
import './HomeShowcase.css';
import crosssectionrender from './../../img/renders/front-cross-section.png';

import {Link, animateScroll, scroll} from 'react-scroll'

export class HomeShowcase extends Component {
    render() {
        return (
            <div>
                <Link 
                activeClass="active"
                to="selection1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}/>
            <div className="showcase-container">
                {/* <div className="showcase-image-container">
                <img className='showcase-image' src={crosssectionrender}/>
                </div> */}
                <div className="showcase-title-container">
                    <h1 className="main-title">INSPIRING A CULTURE OF INNOVATION</h1>
                    <h1 className="sub-title">a multidisciplinary project that brings together the most passionate students to work towards a common goal.</h1>
                </div>
            </div>
            
            </div>
        )
    }
}

export default HomeShowcase
