import React, { Component } from 'react'

import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="contact-us-button">
        <div className="contact-us-white-background"></div>
          <h1 className="contact-us-title">Contact Us</h1>
        </div>
        <div className="footer-white-line"></div>
        <div className="footer-social-media-container">
          <div className="social-media-name-container">
            <h1 className="social-media-name">formula@mcmaster.ca</h1>
          </div>
          <div className="social-media-item">
          <a className="social-media-name" href="https://twitter.com/macformula" target="_blank" rel="noopener noreferrer">Instagram</a>
          <div className="social-media-underline"/>
          </div>
          <div className="social-media-item">
          <a className="social-media-name" href="https://twitter.com/macformula" target="_blank" rel="noopener noreferrer">Facebook</a>
          <div className="social-media-underline"/>
          </div>
          <div className="social-media-item">
          <a className="social-media-name" href="https://twitter.com/macformula" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <div className="social-media-underline"/>
          </div>
          <div className="social-media-item">
          <a className="social-media-name" href="https://twitter.com/macformula" target="_blank" rel="noopener noreferrer">Twitter</a>
          <div className="social-media-underline"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
