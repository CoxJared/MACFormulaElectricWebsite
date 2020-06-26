import React, { Component } from 'react'

import './ContactPage.css'
import Header from '../header/Header';

import hatchGarage from './../../img/hatch/garage.jpeg'
import Email from './email/Email';
import Footer from '../footer/Footer';

export class ContactPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    setTimeout(function() {
      document.getElementById('contact-showcase').style.opacity = 1
    },100)
  }

  render() {

    return (
      <div className="contact-page-container">
        <Header/>
        <div id="contact-showcase">
          <img id="contact-image" src={hatchGarage} alt=""/>
          <h1 className="contact-title">Contact Us</h1>
          <div className="contact-showcase-gradient"></div>
          <div className="contact-text-container">
            <div className="contact-email-container">
              <h1 className="contact-email">formula@mcmaster.ca</h1>
            </div>
            <div className="contact-social-media-container">

              <div className="social-media-row">
                <h1 className="social-media-title">Instagram: <span>macformulaelectric</span></h1>
                <div className="social-media-white-underline"/>
              </div>

              <div className="social-media-row">
                <h1 className="social-media-title">Facebook: <span>macformula</span></h1>
                <div className="social-media-white-underline"/>
              </div>

              <div className="social-media-row">
                <h1 className="social-media-title">LinkedIn: <span>MAC Formula Electric</span></h1>
                <div className="social-media-white-underline"/>
              </div>

              <div className="social-media-row">
                <h1 className="social-media-title">Twitter: <span>MACFormula</span></h1>
                <div className="social-media-white-underline"/>
              </div>

            </div>
            
          </div>

        </div>
        <Email />
        <Footer/>
      </div>
    )
  }
}

export default ContactPage