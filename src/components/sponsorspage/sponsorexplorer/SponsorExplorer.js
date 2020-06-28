import React, { Component } from 'react'

import './SponsorExplorer.css'

import AltiumLogo from './../../../img/sponsor-logos/altium-logo.png';
import AmkLogo from './../../../img/sponsor-logos/amk-logo.svg';
import BenderLogo from './../../../img/sponsor-logos/bender-logo.jpg';
import CartesianLogo from './../../../img/sponsor-logos/cartesian-logo.png';
import CpaontarioLogo from './../../../img/sponsor-logos/cpaontario-logo.png'
import DiabLogo from './../../../img/sponsor-logos/diab-logo.jpeg';
import DspaceLogo from './../../../img/sponsor-logos/dspace_logo.png';
import EnlitenenergyServicesLogo from './../../../img/sponsor-logos/enlitenenergyservices-logo.png';
import FastenalLogo from './../../../img/sponsor-logos/fastenal-logo.png';
import Fmslogo from './../../../img/sponsor-logos/fms-logo.png';
import GeneralsealantsLogo from './../../../img/sponsor-logos/generalsealants-logo.png';
import LinimarLogo from './../../../img/sponsor-logos/linimar-logo.png';
import MathworksLogo from './../../../img/sponsor-logos/mathworks-logo.jpeg';
import MclarenengineeringLogo from './../../../img/sponsor-logos/mclarenengineering-logo.jpg';
import McmasterengineeringLogo from './../../../img/sponsor-logos/mcmasterengineering-logo.jpg';
import MesLogo from './../../../img/sponsor-logos/mes-logo.png';
import MscSoftwareLogo from './../../../img/sponsor-logos/mscsoftware-logo.png';
import OctopuzLogo from './../../../img/sponsor-logos/octopuz-logo.jpg'
import SolidworksLogo from './../../../img/sponsor-logos/solidworks-logo.svg';
import SamuelLogo from './../../../img/sponsor-logos/samuel-logo.png';
import TeLogo from './../../../img/sponsor-logos/teconnectivity-logo.png';
import TextremLogo from './../../../img/sponsor-logos/textreme-logo.jpg';
import ViGradeLogo from './../../../img/sponsor-logos/vigrade-logo.png';
import HoosierLogo from './../../../img/sponsor-logos/hoosier-logo.png';
import OshparkLogo from './../../../img/sponsor-logos/oshpark-logo.png';
import FaroLogo from './../../../img/sponsor-logos/faro-logo.png';
import redbulllogo from './../../../img/sponsor-logos/redbul-logo.png';
import electrometers from './../../../img/sponsor-logos/electro-meters-logo.png';
import cooplogo from './../../../img/sponsor-logos/mcm-eng-coop-career_stack-col.png';
import ecelogo from './../../../img/sponsor-logos/ECE Dept logo.png';
import mechlogo from './../../../img/sponsor-logos/LOGO-Mechanical Engineering.jpg';
import materialsLogo from './../../../img/sponsor-logos/mcmastermaterialseng.jpeg';
import haasLogo from './../../../img/sponsor-logos/hass-logo.png';

export class SponsorExplorer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      platinum: [

          {id: 1,
              name: 'AMK',
              websiteLink: 'https://amk-group.com/en/content/formula_student_electric',
              img: AmkLogo,
              description:"AMK is an industry leader in the electric drive technology, control technology, industrial automation engineering, and automotive areas. Having maximum flexibility in automation technology, AMK offers a sophisticated concept of variable combinable drive and control technology.",
              color:"rgb(64,151,199)"},
          {id: 2,
              name: 'Dspace',
              websiteLink: 'https://www.dspace.com/en/inc/home.cfm',
              img: DspaceLogo,
              description:"dSPACE’s leading software and hardware-based simulations ensure a vehicle’s drive system is energy-efficient, the intelligent assistance systems make driving more comfortable, and that the plane they are on is safely guided to its destination.",
              color:"rgb(22,70,145)"},
              {id: 1,
                name: 'Haas',
                websiteLink: 'https://www.haascnc.com/index.html',
                img: haasLogo,
                description:"Haas Automation is the largest machine tool builder in the western world, manufacturing a complete line of CNC vertical machining centers, horizontal machining centers, CNC lathes, and rotary products. To ensure accuracy, Haas manufactures all critical components in-house using dedicated state-of-the-art CNC machine tools.",
                color:"rgb(217,54,66)"},
          {id: 5,
              name: 'Linamar',
              websiteLink: 'https://www.linamar.com/',
              img: LinimarLogo,
              description:"A worldwide manufacturing company, Linamar is Canada's second-largest automobile parts manufacturer. Providing light vehicle, commercial truck, off-highway, energy and industrial OEM markets with powertrain system solutions.",
              color:"rgb(196,94,37)"},
          {id: 1,
              name: 'McMaster Engineering',
              websiteLink: 'https://www.eng.mcmaster.ca/',
              img: McmasterengineeringLogo,
              description:"The McMaster Faculty of Engineering is known for innovative educational programming and for its research and engagement with industry and community. Focusing on Problem-Based learning, the faculty builds strong foundations for undergraduate and graduate students.",
              color:"rgb(94,22,51)"},
            {id: 8,
            name: 'MES',
            websiteLink: 'http://www.macengsociety.ca/',
            img: MesLogo,
            description:"The McMaster Engineering Society fosters the development of well rounded undergraduate engineering students through accessible support of academics, athletics, and recreational and professional activities, while maintaining the integrity and unique traditions of the faculty society.",
            color:"rgb(219,56,50)"},

      ],
      gold: [
        {id: 0,
            name: 'Altium',
            websiteLink: 'https://www.altium.com/',
            img: AltiumLogo,
          description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
      color:"rgb(166,151,106)"},
          {id: 2,
              name: 'CpaOntario',
              websiteLink: 'https://www.cpaontario.ca/',
              img: CpaontarioLogo,
              description:"CPA Ontario supports members and students in their qualification and professional development in a wide range of senior positions in public accounting, business, finance, government, not-for-profits and academia. CPA Ontario protects the public interest ensuring the members meet the highest standards of expertise and the integrity of the profession.",
              color:"rgb(16,63,160)"},
            {id: 1,
            name: 'Electro Meters',
            websiteLink: 'http://www.electro-meters.com/',
            img: electrometers,
            description:"Electro-Meters is a major distributor of Test and Measurement, portable instruments as well as Analog and Digital Panel meters. Addressing needs of technical assistance in selecting a product, CSA approval, or designing a turnkey solution, Electro-meters provides the level of support from one of Canada’s leading organizations.",
            color:"rgb(33,81,161)"},
          {id: 11,
              name: 'Faro',
              websiteLink: 'https://www.faro.com/',
              img: FaroLogo,
              description:"FARO® is the world’s most trusted source for 3D measurement, imaging and realization technology. The company develops and manufactures leading edge solutions that enable high-precision 3D capture, measurement and analysis across a variety of industries including manufacturing, construction, engineering and public safety.",
              color:"rgb(31,82,133)"},
          {id: 4,
              name: 'General Sealants',
              websiteLink: 'http://www.generalsealants.com/',
              img: GeneralsealantsLogo,
              description:"General Sealants constantly push the limits of sealant and adhesive technology, designing new techniques in order to meet the world’s increasingly challenging requirements. As a prominent company, General Sealants drive the industry for pipeline, construction, aerospace/composite, telecommunication, automotive, and HVAC sealant areas.",
              color:"rgb(188,53,50)"},
          {id: 6,
              name: 'Mathworks',
              websiteLink: 'https://www.mathworks.com/',
              img: MathworksLogo,
              description:"MathWorks is an American corporation that specializes in mathematical computing software. Its major products include MATLAB and Simulink, which support data analysis and simulation. MathWorks provide an environment for technical computation, visualization, design, simulation, and implementation for innovative solutions.",
              color:"rgb(36,91,142)"},
          {id: 7,
              name: 'Mclaren Engineering',
              websiteLink: 'https://www.mgmclaren.com/',
              img: MclarenengineeringLogo,
              description:"McLaren Engineering Group provides innovative engineering solutions to ten technical divisions including Site/Civil, Geotechnical, Marine, Bridge/Highway/Rail, Surveying, Forensics, Entertainment, Structural, Facade Engineering, and Construction Engineering. McLaren Engineering Group offers unparalleled service using Applied Ingenuity.",
              color:"rgb(178,87,52)"},
          {id: 9,
              name: 'MSC Software',
              websiteLink: 'https://www.mscsoftware.com/',
              img: MscSoftwareLogo,
              description:"MSC Software develops simulation software technology that enables engineers to validate and optimize their designs using virtual prototypes. Customers in almost every part of manufacturing use the software to complement or replace the physical prototype “build and test” process that has traditionally been used in product design.",
              color:"rgb(235,73,60)"},
              {id: 0,
                name: 'Solidworks',
                websiteLink: 'https://www.solidworks.com/',
                img: SolidworksLogo,
                description:"SOLIDWORKS’ is a solid modelling computer-aided design (CAD) and computer-aided engineering (CAE) computer program. The program used by industry leaders provides integrated tools for every area of product development and management. Enabling enterprises to optimize processes from concepts to manufacturing.",
                color:"rgb(209,73,67)"},
          {id: 10,
              name: 'TE Connectivty',
              websiteLink: 'https://www.te.com/usa-en/home.html',
              img: TeLogo,
              description:"TE Connectivity partners with customers to produce highly engineered connectivity and sensing products that make a connected world possible. Specialized for harsh environments in a variety of industries, TE Connectivity enables companies to turn ideas into technology.",
              color:"rgb(229,146,52)"},
          {id: 1,
              name: 'ViGrade',
              websiteLink: 'https://www.vi-grade.com/',
              img: ViGradeLogo,
              description:"VI-grade is the leading provider of best-in-class software products and services for advanced applications in the field of system level simulation. Together with a network of selected partners, VI-grade also provides revolutionary turn-key solutions for static and dynamic driving simulation.",
              color:"rgb(217,67,51)"},

      ],
      silver: [
        {id: 0,
            name: 'Bender',
            websiteLink: 'https://www.bender-ca.com/',
            img: BenderLogo},
          {id: 1,
              name: 'Cartesian',
              websiteLink: 'https://www.cartesian.com/',
              img: CartesianLogo},
          {id: 3,
              name: 'Diab',
              websiteLink: 'https://www.diabgroup.com/',
              img: DiabLogo},
          {id: 4,
              name: 'EnLITen Energy Services',
              websiteLink: 'https://www.enliten.ca/',
              img: EnlitenenergyServicesLogo},
          {id: 3,
              name: 'Fastenal',
              websiteLink: 'https://www.fastenal.com/',
              img: FastenalLogo},
          {id: 5,
              name: 'FMS',
              websiteLink: 'https://www.fmsinc.com/',
              img: Fmslogo},
          {id: 9,
              name: 'Hoosier',
              websiteLink: 'https://www.hoosiertire.com/',
              img: HoosierLogo},  
          {id: 9,
              name: 'Coop and Career Services',
              websiteLink: 'https://www.eng.mcmaster.ca/co-op-career/co-op-program',
              img: cooplogo},  
          {id: 9,
              name: 'McMaster Mech. Eng.',
              websiteLink: 'https://www.eng.mcmaster.ca/mech',
              img: mechlogo},  
          {id: 6,
              name: 'OCTOPUZ inc.',
              websiteLink: 'https://octopuz.com/',
              img: OctopuzLogo},
          {id: 7,
              name: 'Samuel',
              websiteLink: 'https://www.samuel.com/',
              img: SamuelLogo},   
          {id: 8,
              name: 'Textreme',
              websiteLink: 'http://www.textreme.com/',
              img: TextremLogo},  
      ],
      bronze: [
          {id: 2,
              name: 'McMaster ECE',
              websiteLink: 'https://www.eng.mcmaster.ca/ece',
              img: ecelogo
          },
          {id: 2,
            name: 'McMaster Materials Eng',
            websiteLink: 'https://www.eng.mcmaster.ca/ece',
            img: materialsLogo
        }
    ],
    general: [
          {id: 2,
              name: 'Oshpark',
              websiteLink: 'https://oshpark.com/',
              img: OshparkLogo
          },
          {id: 2,
              name: 'Red Bull',
              websiteLink: 'https://www.redbull.com/ca-en/',
              img: redbulllogo
          },
      ]
  }
  }

  render() {
    return (
      <div className="sponsor-explorer-container">
        <h1 className="sponsor-type-heading"><span>Platinum Sponsors</span></h1>


          <div className="sponsor-container platinum">
              {this.state.platinum.map(sponsor => (
                  <>
                  <a className="sponsor" href={sponsor.websiteLink} target="_blank" rel="noopener noreferrer">
                  <img className="sponsors-logo" src={sponsor.img} alt="platinum-sponsor"/>
                  <div className="sponsors-text-container">
                    <h1>{sponsor.name}</h1>
                    <h2 className="sponsor-text-description">
                        {sponsor.description}
                    </h2>
                  </div>   
                  {/* <div className="sponsor-flag-pole" style={{background:sponsor.color}}></div> */}
                  <div className="sponsor-flag" style={{background:sponsor.color}}>
                      <h1 className="sponsor-flag-text">Visit
                          </h1></div> 
                  </a>  
                  </> 
              ))}
            </div>

            <h1 className="sponsor-type-heading"><span>Gold Sponsors</span></h1>
            <div className="sponsor-container gold">
              {this.state.gold.map(sponsor => (
                  <>
                  <a className="sponsor" href={sponsor.websiteLink} target="_blank" rel="noopener noreferrer">
                  <img className="sponsors-logo" src={sponsor.img} alt="platinum-sponsor"/>
                  <div className="sponsors-text-container">
                    <h1>{sponsor.name}</h1>
                    <h2 className="sponsor-text-description">
                        {sponsor.description}
                    </h2>
                  </div>   
                  {/* <div className="sponsor-flag-pole" style={{background:sponsor.color}}></div> */}
                  <div className="sponsor-flag" style={{background:sponsor.color}}>
                      <h1 className="sponsor-flag-text">Visit
                          </h1></div> 
                  </a>  
                  </> 
              ))}
            </div>

            <h1 className="sponsor-type-heading"><span>Silver Sponsors</span></h1>
            <div className="sponsor-container silver">
              {this.state.silver.map(sponsor => (
                  <>
                  <a className="sponsor" href={sponsor.websiteLink} target="_blank" rel="noopener noreferrer">
                  <img className="sponsors-logo" src={sponsor.img} alt="platinum-sponsor"/>
                  <div className="sponsors-text-container">
                    <h1>{sponsor.name}</h1>
                    <h2 className="sponsor-text-description">
                        {sponsor.description}
                    </h2>
                  </div>   
                  {/* <div className="sponsor-flag-pole" style={{background:sponsor.color}}></div> */}
                  <div className="sponsor-flag" style={{background:sponsor.color}}>
                      <h1 className="sponsor-flag-text">Visit
                          </h1></div> 
                  </a>  
                  </> 
              ))}
            </div>

            <h1 className="sponsor-type-heading"><span>Bronze Sponsors</span></h1>
            <div className="sponsor-container silver">
              {this.state.bronze.map(sponsor => (
                  <>
                  <a className="sponsor" href={sponsor.websiteLink} target="_blank" rel="noopener noreferrer">
                  <img className="sponsors-logo" src={sponsor.img} alt="platinum-sponsor"/>
                  <div className="sponsors-text-container">
                    <h1>{sponsor.name}</h1>
                    <h2 className="sponsor-text-description">
                        {sponsor.description}
                    </h2>
                  </div>   
                  {/* <div className="sponsor-flag-pole" style={{background:sponsor.color}}></div> */}
                  <div className="sponsor-flag" style={{background:sponsor.color}}>
                      <h1 className="sponsor-flag-text">Visit
                          </h1></div> 
                  </a>  
                  </> 
              ))}
            </div>

            <h1 className="sponsor-type-heading"><span>General Sponsors</span></h1>
            <div className="sponsor-container silver">
              {this.state.general.map(sponsor => (
                  <>
                  <a className="sponsor" href={sponsor.websiteLink} target="_blank" rel="noopener noreferrer">
                  <img className="sponsors-logo" src={sponsor.img} alt="platinum-sponsor"/>
                  <div className="sponsors-text-container">
                    <h1>{sponsor.name}</h1>
                    <h2 className="sponsor-text-description">
                        {sponsor.description}
                    </h2>
                  </div>   
                  {/* <div className="sponsor-flag-pole" style={{background:sponsor.color}}></div> */}
                  <div className="sponsor-flag" style={{background:sponsor.color}}>
                      <h1 className="sponsor-flag-text">Visit
                          </h1></div> 
                  </a>  
                  </> 
              ))}
            </div>

      </div>
    )
  }
}

export default SponsorExplorer
