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

    return (
      <div className="cars-container">
        {/* <Header /> */}
        <MainShowcase scrollPosition={this.state.scrollPosition}/>
        <CrossView />
        <DesignShowcase testfunction={this.test}/>
        
        <Footer />
      </div>
    )
  }
}

export default DesignPage
