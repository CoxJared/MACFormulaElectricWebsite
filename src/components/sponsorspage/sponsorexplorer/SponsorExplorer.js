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
import GmLogo from './../../../img/sponsor-logos/gm-logo.png';
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

export class SponsorExplorer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      platinum: [
          {id: 0,
              name: 'Altium',
              websiteLink: 'https://www.altium.com/',
              img: AltiumLogo,
            description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
        color:"rgb(166,151,106)"},
          {id: 1,
              name: 'AMK',
              websiteLink: 'https://amk-group.com/en/content/formula_student_electric',
              img: AmkLogo,
              description:"AMK has developed the motor and inverter kit that we are using",
              color:"rgb(64,151,199)"},
          {id: 2,
              name: 'Dspace',
              websiteLink: 'https://www.dspace.com/en/inc/home.cfm',
              img: DspaceLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(22,70,145)"},
          {id: 0,
              name: 'General Motors',
              websiteLink: 'https://www.gm.ca/en/home.html',
              img: GmLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(46,86,153)"},
          {id: 5,
              name: 'Linamar',
              websiteLink: 'https://www.linamar.com/',
              img: LinimarLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(196,94,37)"},
          {id: 1,
              name: 'McMaster Engineering',
              websiteLink: 'https://www.eng.mcmaster.ca/',
              img: McmasterengineeringLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(94,22,51)"},
          {id: 0,
              name: 'Solidworks',
              websiteLink: 'https://www.solidworks.com/',
              img: SolidworksLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(209,73,67)"},
      ],
      gold: [
          {id: 0,
              name: 'Bender',
              websiteLink: 'https://www.bender-ca.com/',
              img: BenderLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(54,122,60)"},
          {id: 2,
              name: 'CpaOntario',
              websiteLink: 'https://www.cpaontario.ca/',
              img: CpaontarioLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(16,63,160)"},
          {id: 11,
              name: 'Faro',
              websiteLink: 'https://www.faro.com/',
              img: FaroLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(31,82,133)"},
          {id: 4,
              name: 'General Sealants',
              websiteLink: 'http://www.generalsealants.com/',
              img: GeneralsealantsLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(188,53,50)"},
          {id: 6,
              name: 'Mathworks',
              websiteLink: 'https://www.mathworks.com/',
              img: MathworksLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(36,91,142)"},
          {id: 7,
              name: 'Mclaren Engineering',
              websiteLink: 'https://www.mgmclaren.com/',
              img: MclarenengineeringLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(178,87,52)"},
              ,
          {id: 8,
              name: 'MES',
              websiteLink: 'http://www.macengsociety.ca/',
              img: MesLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(219,56,50)"},
          {id: 9,
              name: 'MSC Software',
              websiteLink: 'https://www.mscsoftware.com/',
              img: MscSoftwareLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(235,73,60)"},
          {id: 10,
              name: 'TE Connectivty',
              websiteLink: 'https://www.te.com/usa-en/home.html',
              img: TeLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(229,146,52)"},
          {id: 1,
              name: 'ViGrade',
              websiteLink: 'https://www.vi-grade.com/',
              img: ViGradeLogo,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(217,67,51)"},
          {id: 1,
              name: 'Electro Meters',
              websiteLink: 'http://www.electro-meters.com/',
              img: electrometers,
              description:"Industry leading PCB design software that empowers users to design boards without limits—from single PCB to multi-board systems; from low frequency to high-speed.",
              color:"rgb(33,81,161)"}
      ],
      silver: [
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
      software: [
          {id: 2,
              name: 'McMaster ECE',
              websiteLink: 'https://www.eng.mcmaster.ca/ece',
              img: ecelogo
          },
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
                  <div className="sponsor-flag-pole" style={{background:sponsor.color}}></div>
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
                  <div className="sponsor-flag-pole" style={{background:sponsor.color}}></div>
                  <div className="sponsor-flag" style={{background:sponsor.color}}>
                      <h1 className="sponsor-flag-text">Visit
                          </h1></div> 
                  </a>  
                  </> 
              ))}
            </div>
{/* 
            <h1 className="sponsor-type-heading"><span>Gold Sponsors</span></h1>
                <div className="sponsor-container gold">
                    {this.state.gold.map(sponsor => (
                        <>
                        <a className="sponsor" href={sponsor.websiteLink} target="_blank" rel="noopener noreferrer">
                        <img className="sponsors-logo" src={sponsor.img} alt="gold-sponsor"/>
                        <h1>{sponsor.name}</h1>    
                        </a>  
                        </> 
                    ))}

                </div>
                
                <h1 className="sponsor-type-heading"><span>Silver Sponsors</span></h1>
                <div className="sponsor-container silver">
                {this.state.silver.map(sponsor => (
                        <>
                        <a className="sponsor" href={sponsor.websiteLink} target="_blank" rel="noopener noreferrer">
                        <img className="sponsors-logo" src={sponsor.img} alt="silver-sponsor"/>
                        <h1>{sponsor.name}</h1>    
                        </a>  
                        </> 
                    ))}
                </div>
                <h1 className="sponsor-type-heading"><span>Bronze Sponsors</span></h1>
                <div className="sponsor-container software">
                    {this.state.software.map(sponsor => (
                        <>
                        <a className="sponsor" href={sponsor.websiteLink} target="_blank" rel="noopener noreferrer">
                        <img className="sponsors-logo" src={sponsor.img} alt="bronze-sponsor"/>
                        <h1>{sponsor.name}</h1>    
                        </a>  
                        </> 
                    ))}
                </div> */}
      </div>
    )
  }
}

export default SponsorExplorer
