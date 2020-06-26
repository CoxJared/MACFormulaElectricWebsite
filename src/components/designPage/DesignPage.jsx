import React, { Component } from 'react'
import MainShowcase from './mainshowcase/MainShowcase';

import './DesignPage.css';
import Header from '../header/Header';
import DesignShowcase from './designshowcase/DesignShowcase';

import Footer from '../footer/Footer';
import CrossView from './crossview/CrossView';

export class DesignPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      scrollPosition: 0
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillMount(){
    this.setState({height: window.innerHeight + 'px'});
  }

  render() {

      if(window.innerWidth > 1200){
        return (
          <div className="cars-container">
            <Header />
            <MainShowcase scrollPosition={this.state.scrollPosition}/>
            <CrossView />
            <DesignShowcase testfunction={this.test}/>
            
            <Footer />
          </div>
        )
      } else {
        return (
          <div className="cars-container">
            <Header />
            <div className="minimized-design-showcase">
              <div className="minimized-design-image-container">
                <div className="minimized-image-cut"></div>
                <div id="minimized-image-full"></div>
              </div>
              <h1 className="minimized-car-name">ZAPDOS</h1>
            </div>
              <div id="minimized-main-specs">
            <div id="minimized-spec">
              <h1 className="minimized-spec-title">Power</h1>
              <h2 className="minimized-spec-value">107hp<span>/80kW</span></h2>
            </div>
            <div id="minimized-spec">
              <h1 className="minimized-spec-title">Weight</h1>
              <h2 className="minimized-spec-value">220kg<span>/484lb</span></h2>
            </div>
            <div id="minimized-spec">
              <h1 className="minimized-spec-title">Capacity</h1>
              <h2 className="minimized-spec-value">6.6kWh<span></span></h2>
            </div>
            <div id="minimized-spec">
              <h1 className="minimized-spec-title">Drivetrain</h1>
              <h2 className="minimized-spec-value">AWD<span></span></h2>
            </div>
          </div>
            <CrossView />
            <Footer />
          </div>
        )
      }
  }
}

export default DesignPage
