import React, { Component } from 'react'
import Header from '../header/Header';
import ShowcaseLink from '../showcaselink/ShowcaseLink';

import './SponsorsPage.css'

import hybridInHatch from './../../img/hatch/hybrid-stand.jpg';
import sidePodshot from './../../img/parts/hybrid-side-pod.png';
import SponsorExplorer from './sponsorexplorer/SponsorExplorer';
import Footer from '../footer/Footer';

export class SponsorsPage extends Component {

componentDidMount() {
  setTimeout(function() {
    document.getElementById("sponsorship-top-showcase").style.opacity = 1;
    document.getElementById("sponsorship-top-showcase-text").style.top = "-90vh";
    document.getElementById("sponsorship-top-showcase-image").style.right = "50px";
  },500);
}

  render() {
    return (
      <div>
        <Header />
        <div id="sponsorship-top-showcase">
          <img id="sponsorship-top-showcase-image" src={hybridInHatch} alt=""></img>
          <div id="sponsorship-top-showcase-text">
            <h1>Sponsorship Opportunities</h1>
            <h2>MAC Formula Electric looks forward to the possibilty of a partnership with companies looking to contribute to student engineering competitions. We feel that the experience which our team members gain from the team make them very well rounded employees for future careers.</h2>
          </div>
        </div>
        <SponsorExplorer />
        <ShowcaseLink 
                        backgroundImage = {sidePodshot}
                        type = 'Link'
                        title = 'Sponsorship Package'
                        linkContainer =           
                            {<div className="sponsorship-package-container">
                                <div className="sponsorship-package-background"/>
                                <h1 className="sponsorship-package-title">open</h1>
                            </div>}
                    />
        <Footer />
      </div>
    )
  }
}

export default SponsorsPage
