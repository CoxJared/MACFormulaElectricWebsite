import React, { Component } from 'react'
import MainShowcase from './mainshowcase/MainShowcase';

import './DesignPage.css';
import Header from '../header/Header';
import DesignShowcase from './designshowcase/DesignShowcase';

import Footer from '../footer/Footer';
import CrossView from './crossview/CrossView';

import chassisRender from './../../img/renders/chass.png';
import batteryRender from './../../img/renders/battery cross section (2).png';
import gearboxRender from './../../img/renders/gearbox-exploded (1).png';
import electronicsRender from './../../img/renders/electronics.png';
import suspensionRender from './../../img/renders/susp.png';
import aerodynamicrender from './../../img/renders/aero.png';

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


    //TODO fix these returns
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
      } else if ( window.innerWidth > 600){
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

            <div className="minimized-subteams">

              <div className="minimized-subteams-image-container">
                <img src={chassisRender} className="minimized-subteams-image" alt=""/>
              </div>
              <div className="minimized-subteams-text-container">
                <h1 className="minimized-subteam-name">
                  Chassis
                </h1>
                <h2 className="minimized-subteam-description">
                  Our chassis centres around a Carbon Composite monocoque with a foam Core. This was achieved through a vacuum infusion process and oven cure. With multiple different carbon thicknesses, orientations and weaves we have produced a structurally sound and feather light base for our car. To ensure the reliability of our layup analysis, all of the various layups in the chassis have been 3-point bend tested and tested in shear.
                </h2>
              </div>

              
              <div className="minimized-subteams-text-container">
                <h1 className="minimized-subteam-name">
                  Drivetrain
                </h1>
                <h2 className="minimized-subteam-description">
                  This year, we developed our first high-voltage battery with three priorities: high specific-power, high specific-energy, and optimized weight. This design will be capable of providing the maximum power to the vehicle for the entirety of the endurance run. With a charge time of approximately 35 minutes, we are able to reduce the downtime between runs and improve our teams overall efficiency.
                </h2>
              </div>
              <div className="minimized-subteams-image-container">
                <img src={gearboxRender} className="minimized-subteams-image" alt=""/>
              </div>

              <div className="minimized-subteams-image-container">
                <img src={batteryRender} className="minimized-subteams-image" alt=""/>
              </div>
              <div className="minimized-subteams-text-container">
                <h1 className="minimized-subteam-name">
                  Battery
                </h1>
                <h2 className="minimized-subteam-description">
                This year, we developed our high-voltage battery with three priorities: high specific-power, high specific-energy, and optimized weight. This design will be capable of providing the maximum power to the vehicle for the entirety of the endurance run. With a charge time of approximately 35 minutes, we are able to reduce the downtime between runs and improve our teams overall efficiency.
                </h2>
              </div>

              
              <div className="minimized-subteams-text-container">
                <h1 className="minimized-subteam-name">
                  Suspension
                </h1>
                <h2 className="minimized-subteam-description">
                After analyzing tire test data, our team decided to use 10” Hoosier LCO tires because of their superior grip capabilities. A thorough analysis of tire test data allowed the team to determine the acceleration limits of the tires and use this to better understand the loads that the suspension will likely encounter. MAC Formula Electric chooses to use a pushrod style set up because of its lightweight and highly adjustable capabilities. Finally, we chose to incorporate highly adjustable dampers into the system because of their use of twin tube damping technology designed specifically for FSAE cars.
                </h2>
              </div>
              <div className="minimized-subteams-image-container">
                <img src={suspensionRender} className="minimized-subteams-image" alt=""/>
              </div>

              <div className="minimized-subteams-image-container">
                <img src={electronicsRender} className="minimized-subteams-image" alt=""/>
              </div>
              <div className="minimized-subteams-text-container">
                <h1 className="minimized-subteam-name">
                  Electronics
                </h1>
                <h2 className="minimized-subteam-description">
                The Electrical Control System for the vehicle consists of the following components: a MicroAutoBox II, a Raspberry Pi, four AMK Motor Controllers, an Accumulator Management System (AMS), and a Body Control Module (BCM), which is designed by the team. The four AMK Motor Controllers give independant control over each of the four in-hub motors, and allow for straight forward control over the vehicles CAN network. the Body Control Module is a custom designed 4 layer PCB, which houses two fully programmable microcontrollers, along with circuitry for cooling control, rule mandated safety circuits, sensor data processing, HV discharge circuit and TSAL.
                </h2>
              </div>

              
              <div className="minimized-subteams-text-container">
                <h1 className="minimized-subteam-name">
                  Aerodynamics
                </h1>
                <h2 className="minimized-subteam-description">
                The main objectives of the aero package is to minimize drag and maximize downforce (negative lift). Through multiple iterations and CFD analysis our current aero package was finalized. Comprising of a front and rear wing, side pods and an undertray the aero pack has been optimized to increase handling, resulting in peak performance. All components of the package were first molded in house and then manufactured with various carbon fibre layups to optimize weight savings are strength.
                </h2>
              </div>
              <div className="minimized-subteams-image-container">
                <img src={aerodynamicrender} className="minimized-subteams-image" alt=""/>
              </div>


            </div>
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

            <div className="minimized-subteams">

              <div className="minimized-subteams-image-container">
                <img src={chassisRender} className="minimized-subteams-image" alt=""/>
              </div>
              <div className="minimized-subteams-text-container">
                <h1 className="minimized-subteam-name">
                  Chassis
                </h1>
                <h2 className="minimized-subteam-description">
                  Our chassis centres around a Carbon Composite monocoque with a foam Core. This was achieved through a vacuum infusion process and oven cure. With multiple different carbon thicknesses, orientations and weaves we have produced a structurally sound and feather light base for our car. To ensure the reliability of our layup analysis, all of the various layups in the chassis have been 3-point bend tested and tested in shear.
                </h2>
              </div>

              <div className="minimized-subteams-image-container">
                <img src={gearboxRender} className="minimized-subteams-image" alt=""/>
              </div>
              <div className="minimized-subteams-text-container">
                <h1 className="minimized-subteam-name">
                  Drivetrain
                </h1>
                <h2 className="minimized-subteam-description">
                  This year, we developed our first high-voltage battery with three priorities: high specific-power, high specific-energy, and optimized weight. This design will be capable of providing the maximum power to the vehicle for the entirety of the endurance run. With a charge time of approximately 35 minutes, we are able to reduce the downtime between runs and improve our teams overall efficiency.
                </h2>
              </div>
              

              <div className="minimized-subteams-image-container">
                <img src={batteryRender} className="minimized-subteams-image" alt=""/>
              </div>
              <div className="minimized-subteams-text-container">
                <h1 className="minimized-subteam-name">
                  Battery
                </h1>
                <h2 className="minimized-subteam-description">
                This year, we developed our high-voltage battery with three priorities: high specific-power, high specific-energy, and optimized weight. This design will be capable of providing the maximum power to the vehicle for the entirety of the endurance run. With a charge time of approximately 35 minutes, we are able to reduce the downtime between runs and improve our teams overall efficiency.
                </h2>
              </div>

              <div className="minimized-subteams-image-container">
                <img src={suspensionRender} className="minimized-subteams-image" alt=""/>
              </div>
              <div className="minimized-subteams-text-container">
                <h1 className="minimized-subteam-name">
                  Suspension
                </h1>
                <h2 className="minimized-subteam-description">
                After analyzing tire test data, our team decided to use 10” Hoosier LCO tires because of their superior grip capabilities. A thorough analysis of tire test data allowed the team to determine the acceleration limits of the tires and use this to better understand the loads that the suspension will likely encounter. MAC Formula Electric chooses to use a pushrod style set up because of its lightweight and highly adjustable capabilities. Finally, we chose to incorporate highly adjustable dampers into the system because of their use of twin tube damping technology designed specifically for FSAE cars.
                </h2>
              </div>
              

              <div className="minimized-subteams-image-container">
                <img src={electronicsRender} className="minimized-subteams-image" alt=""/>
              </div>
              <div className="minimized-subteams-text-container">
                <h1 className="minimized-subteam-name">
                  Electronics
                </h1>
                <h2 className="minimized-subteam-description">
                The Electrical Control System for the vehicle consists of the following components: a MicroAutoBox II, a Raspberry Pi, four AMK Motor Controllers, an Accumulator Management System (AMS), and a Body Control Module (BCM), which is designed by the team. The four AMK Motor Controllers give independant control over each of the four in-hub motors, and allow for straight forward control over the vehicles CAN network. the Body Control Module is a custom designed 4 layer PCB, which houses two fully programmable microcontrollers, along with circuitry for cooling control, rule mandated safety circuits, sensor data processing, HV discharge circuit and TSAL.
                </h2>
              </div>

              <div className="minimized-subteams-image-container">
                <img src={aerodynamicrender} className="minimized-subteams-image" alt=""/>
              </div>

              <div className="minimized-subteams-text-container">
                <h1 className="minimized-subteam-name">
                  Aerodynamics
                </h1>
                <h2 className="minimized-subteam-description">
                The main objectives of the aero package is to minimize drag and maximize downforce (negative lift). Through multiple iterations and CFD analysis our current aero package was finalized. Comprising of a front and rear wing, side pods and an undertray the aero pack has been optimized to increase handling, resulting in peak performance. All components of the package were first molded in house and then manufactured with various carbon fibre layups to optimize weight savings are strength.
                </h2>
              </div>
              

            </div>
            <Footer />
          </div>
        )
      }
  }
}

export default DesignPage
