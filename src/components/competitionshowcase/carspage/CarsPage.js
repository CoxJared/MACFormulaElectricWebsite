import React, { Component } from 'react'
import MainShowcase from './mainshowcase/MainShowcase';

import './CarsPage.css';
import Header from '../header/Header';
import PhotoSlide from '../photoslide/PhotoSlide';
import DesignShowcase from './designshowcase/DesignShowcase';

import rileyInCar from './../../img/hatch/riley-in-car.jpeg';

export class CarsPage extends Component {
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

    return (
      <div className="cars-container">
        <Header />
        <MainShowcase scrollPosition={this.state.scrollPosition}/>
        <PhotoSlide 
          img={rileyInCar}
          title='Innovation'
          text='MAC Formula Electric prides itself for being on the cutting edge of motorsport technology by implementing techniques and design features which are rarely seen in anything other than premier racing series.'
        />
        <DesignShowcase testfunction={this.test}/>
      </div>
    )
  }
}

export default CarsPage
