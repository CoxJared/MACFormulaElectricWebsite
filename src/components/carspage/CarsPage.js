import React, { Component } from 'react'
import MainShowcase from './mainshowcase/MainShowcase';

import './CarsPage.css';

export class CarsPage extends Component {
  render() {
    return (
      <div className="cars-container">
        <MainShowcase />
      </div>
    )
  }
}

export default CarsPage
