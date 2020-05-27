import React, { Component } from 'react'
import  './HomePage.css';
import HomeShowcase from '../homeshowcase/HomeShowcase';
import Header from '../header/Header';

export class HomePage extends Component {
    render() {
        return (

            <div className="home-page-component">
                <Header/>
                <HomeShowcase/>
            </div>
        )
    }
}

export default HomePage
