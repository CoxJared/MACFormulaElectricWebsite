import React, { Component } from 'react'
import MainShowcase from './mainshowcase/MainShowcase';

import './CarsPage.css';
import Header from '../header/Header';
import PhotoSlide from './photoslide/PhotoSlide';
import DesignShowcase from './designshowcase/DesignShowcase';

export class CarsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      scrollPosition: 0
    };
  }

  componentWillMount(){
    this.setState({height: window.innerHeight + 'px'});
  }

  render() {

    return (
      <div className="cars-container">
        <Header />
        <MainShowcase scrollPosition={this.state.scrollPosition}/>
        <PhotoSlide />
        <DesignShowcase testfunction={this.test}/>
      </div>
    )
  }
}

export default CarsPage
