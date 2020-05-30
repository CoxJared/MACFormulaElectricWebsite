import React, { Component } from 'react'
import  './HomePage.css';
import HomeShowcase from '../homeshowcase/HomeShowcase';
import Header from '../header/Header';

import noseShot from './../../img/competition/nose-shot.jpeg';
import PhotoSlide from '../photoslide/PhotoSlide';

export class HomePage extends Component {
    constructor (props){
        super(props)

        this.state = {
            entered: false,
            header:<div />

        }
    }

    DidEnter =  () => {
        this.setState({
            entered: true,
            header:<Header></Header>
        })
    }

    render() {
            return (
                <div className="home-page-component">
                    {this.state.header}
                    <HomeShowcase DidEnter = {this.DidEnter}/>
                    <PhotoSlide 
                    img={noseShot}
                    title="Formula SAE Electric"
                    text="MAC Formula Electric is a student run team working to design and build a fully electric, formula style racecar."/>
                </div>
            )
        
    }
}

export default HomePage
