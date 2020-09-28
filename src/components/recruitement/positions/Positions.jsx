import React, { Component } from 'react';

import './Positions.css';

export class Positions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionsListed: 'all',
            positions: [
                {
                    type: ['mechanical'],
                    name: 'Aerodynamics & Cooling',
                    description: [
                        {
                            body:
                                'Learn the fundamentals of aerodynamics, the study of airflow around the car and how it affects performance. Learn computer modelling and fluid simulations in addition to manufacturing composite components.',
                        },
                        {
                            head: 'Design:',
                            body:
                                ' CAD (Computer Aided Design), FEA (Finite Element Analysis)',
                        },
                        {
                            head: 'Simulation:',
                            body:
                                ' Run simulations using CFD (Computational Fluid Dynamics) to optimize performance',
                        },
                        {
                            head: 'Manufacturing:',
                            body:
                                ' Create Moulds and layup carbon composites to create components through a vacuum infusion process',
                        },
                    ],
                    lists: [
                        {
                            name: 'Responsibilities',
                            text: [
                                'Create CAD(Computer Aided Design) Models of the aerodynamic components of the car',
                                'Run Fluid Simulations, analyze and communicate the results',
                                'Create components out of Carbon Fibre Composites through a vacuum infusion process',
                                'Create test plans to verify effectiveness of different components',
                                'Design and develop cooling systems for motors and inverters using CAD design, CFD modeling and Simulink',
                            ],
                        },
                        {
                            name: 'Skills Needed',
                            text: [
                                'The team needs people with different skill backgrounds so don’t be discouraged if you don’t have any relevant experience!',
                            ],
                        },
                    ],
                    openings: 'Oct 5, 2020',
                    applyLink:
                        'https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HclmcmkxBbnRNmow05I7ILTpUQTJCRlhaUEpGNlJaTUFCWFNWR1VFWkJMMy4u',
                },
                {
                    type: ['mechanical'],
                    name: 'Chassis',
                    description: [
                        {
                            body:
                                'The chassis is the primary structure of the car and supports all functional vehicle systems. Joining the chassis subteam means you can get experience in many different areas of engineering.  The chassis team is unique because it exposes you to the other systems of the car and how they all connect. ',
                        },
                        {
                            head: 'Designing:',
                            body: ' Using CAD, CAM and FEA ',
                        },
                        {
                            head: 'Manufacturing:',
                            body:
                                ' Executing composite processes and machining parts ',
                        },
                        {
                            head: 'Testing:',
                            body:
                                'Using a tensile machine and preparing custom test set-ups.',
                        },
                    ],
                    lists: [
                        {
                            name: 'Responsibilities',
                            text: [
                                'Design new chassis using CAD and FEA  ',
                                'Make ergonomic considerations related to the seat, pedals and steering wheel ',
                                'Perform 3-point bend tests and shear tests on carbon fibre samples  ',
                                'Create moulds for creating composite components  ',
                                'Work with other subteams to assure cohesion with other components of the car  ',
                                'Prepare important documents for competition  ',
                                'Seek sponsorships from companies  ',
                                'Use hand tools and welding ',
                            ],
                        },
                    ],
                    openings: 'Oct 5, 2020',
                    applyLink:
                        'https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HclmcmkxBbnRNmow05I7ILTpUQTNHWVRMNUs5WVk5WDBNUVhDNkNMUEdPRC4u',
                },
                {
                    type: ['mechanical'],
                    name: 'Software, Embedded and Controls  ',
                    description: [
                        {
                            body:
                                'As a member of the Software & Embedded Systems team, you will be responsible for delivering high quality embedded C code running on the processors at the heart of our MAC EV II all-electric vehicle. You will be working alongside like-minded members on projects that utilize industry-level embedded hardware and software programs.  As a Software & Embedded Systems member, you’ll get experience with: ',
                        },
                        {
                            head:
                                '-Interfacing with microcontroller hardware features such as timers, PWMs, DACs, and ADCs :',
                            body: '',
                        },
                        {
                            head: '-C/C++ programming and python scripting ',
                            body: '',
                        },
                        {
                            head:
                                '-Communication protocols such as SPI, I2C, UART, and CAN ',
                            body: '',
                        },
                        {
                            head: '-Breadboard prototyping ',
                            body: '',
                        },
                        {
                            head:
                                '-Debugging and testing software/hardware using microcontroller debuggers, multimeters, logic analyzers, and oscilloscopes ',
                            body: '',
                        },
                        {
                            head:
                                'The vehicle control system is responsible for actuating and monitoring the status of the car. More specifically, the control system is responsible for implementing algorithms to optimize the vehicle cooling system, improving vehicle efficiency, improving vehicle dynamics, and running diagnostics while the vehicle is in operation. As a Controls Developer, you’ll get experience with: ',
                            body: '',
                        },
                        {
                            head: '-MATLAB and Simulink',
                            body: '',
                        },
                        {
                            head:
                                '-Modeling and simulating physical components and systems',
                            body: '',
                        },
                        {
                            head:
                                '-Implementing mathematical algorithms and feed-back controllers ',
                            body: '',
                        },
                        {
                            head: '-Vehicle diagnostics and telemetry ',
                            body: '',
                        },
                        {
                            head:
                                '-Communication protocols such as SPI, I2C, UART, and CAN ',
                            body: '',
                        },
                    ],
                    lists: [
                        {
                            name: 'Responsibilities: Software',
                            text: [
                                'Deliver high-quality C code in a real-time embedded environment ',
                                'Specify, design, and implement functionality and behaviors of embedded subsystems ',
                                'Design the software architecture and firmware implementation on hardware through integration and robust testing methodologies ',
                                'Hands-on hardware bring-up, system debugging and code optimization ',
                                'Make performance and optimization trade-offs to meet product requirements ',
                            ],
                        },
                        {
                            name: 'Responsibilities: Vehicle Controls',
                            text: [
                                'Developing control systems using block-diagrams  ',
                                'Testing and validating the controls by creating unit tests  ',
                                'Data acquisition and vehicle diagnostics  ',
                            ],
                        },
                        {
                            name: 'Skills Needed',
                            text: [
                                'A great attitude. If you give up easily, please do not apply. As members of this team we need to have strong mindsets and positive attitudes before all else. If you give up easily, please do not apply. As members of Software & Embedded Systems we need to have strong mindsets and positive attitudes before all else. ',
                            ],
                        },
                    ],
                    openings: 'Oct 5, 2020',
                    applyLink:
                        'https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HclmcmkxBbnRNmow05I7ILTpUQkI4RFJSMFVNRktVWFVWUlAzQlpERkVHMC4u',
                },
                {
                    type: ['mechanical'],
                    name: 'Electrical',
                    description: [
                        {
                            body:
                                'The electrical systems in the car control all aspects of the vehicles operation, including low voltage and high voltage devices, microcontrollers, CAN bus, power electronics, and more. ',
                        },
                        {
                            body:
                                'Joining the electrical subteam means you can get experience with: ',
                        },
                        {
                            head: 'Circuit Design: ',
                            body:
                                'Using circuit simulation software, and Altium Designer for schematics',
                        },
                        {
                            head: 'HV Battery Design: ',
                            body:
                                'Design and manufacture a high voltage battery to power the vehicle',
                        },
                        {
                            head: 'PCB Layout:',
                            body:
                                'Implementing circuitry onto PCBs for use for test purposes or for in the vehicle (Using Altium Designer)',
                        },
                        {
                            head: 'Wiring:',
                            body:
                                'Learning to cut, strip, and crimp wiring for assembly of low voltage wiring harness and HV powertrain components. ',
                        },
                        {
                            head: 'Assembly:',
                            body:
                                'Assembling PCBs by soldering on various through hole and surface mount components. Building HV battery pack using carbon fiber and Kevlar composites.',
                        },
                        {
                            head: 'ECAD:',
                            body:
                                'Generate schematics for devices to denote connectivity, and route wires for various systems in the full CAD model of the car, using SolidWorks',
                        },
                        {
                            head: 'Testing:',
                            body:
                                'using oscilloscope, function generators, multimeters, and power supplies to optimize circuits during design phase and testing PCBs prior to any use in the vehicle. Testing of wiring harness for continuity, comparing sensor outputs to that specified on datasheets, and much more',
                        },
                    ],
                    lists: [
                        {
                            name: 'Responsibilities ',
                            text: [
                                'Designing new and improved circuits for vehicle operation that work more reliably',
                                'Designing lower power circuits that are more efficient and optimized for their specific application  ',
                                'Optimizing PCB layouts for space constraints and heat dissipation  ',
                                'Helping to prepare important documents for competition submissions  ',
                                'Testing current PCBs and finding ways to improve current systems  ',
                                'Researching any electronics related items that you may find useful for the vehicle  ',
                                'Assembling and testing new PCBs ',
                            ],
                        },
                    ],
                    openings: 'Oct 5, 2020',
                    applyLink:
                        'https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HclmcmkxBbnRNmow05I7ILTpUMjBaVkcwWktaWkNHTjAwM0VVOTE2WFNYMy4u',
                },

                {
                    type: ['mechanical'],
                    name: 'Suspension',
                    description: [
                        {
                            body:
                                'Learn about the dynamic vehicle subsystems including suspension, drivetrain, steering, and brakes. Learn how to design, simulate, CAD, and manufacture parts for the car. First-hand experience in learning all that goes into making a race car fast! ',
                        },
                        {
                            head: 'Design and Analysis:',
                            body:
                                'CAD (Computer Aided Design), FEA (Finite Element Analysis), MATLAB ',
                        },
                        {
                            head: 'Simulation: ',
                            body:
                                'Using simulation software such as Optimum Kinematics and VI-grade',
                        },
                        {
                            head: 'Manufacturing:',
                            body:
                                'Machining, welding, painting and powder coating of any vehicle dynamics components as well as other systems occasionally ',
                        },
                    ],
                    lists: [
                        {
                            name: 'Responsibilities ',
                            text: [
                                'Simulate and CAD (Computer Aided Design) parts for any of the vehicle dynamics subsystem  ',
                                'Manufacturing parts out of steel, aluminum and composite materials using machining and fabrication tools such as the mill, lathe, MIG/TIG welders and more!  ',
                                'Testing and tuning the vehicle dynamics sub-systems in the field and relating it to our simulation data  ',
                                'Managing designs as well as paperwork including documentation needed for competition and part drawings ',
                            ],
                        },
                    ],
                    openings: 'Oct 5, 2020',
                    applyLink:
                        'https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HclmcmkxBbnRNmow05I7ILTpUNFJKTDhQTjBUNzNVMloxVkxYQkJYSjVIUC4u',
                },
                {
                    type: ['mechanical'],
                    name: 'Business',
                    description: [
                        {
                            body:
                                'The Business Team will be responsible for managing financial records for the team and developing a marketing plan to gain sponsors and maintain an active online presence. They will also be responsible for implementing strategies to cut down on costs and make recommendations to streamline project management. You will be responsible for building and leading all phases of the sponsorship & marketing program. This involves creating a marketing plan for the sponsor program to meet or exceed the overall business objectives. Additionally, this role also requires the candidate to create a business case presentation for competition, forecasts for budgeting, and cash flow reports.',
                        },
                    ],
                    lists: [
                        {
                            name: 'Duties Include',
                            text: [
                                'Establishing the team’s goals and objectives  ',
                                'Developing the business case presentation for competition  ',
                                'Assisting in the preparation of budgets and financial records  ',
                                'Managing records, receipts and reconciling daily, monthly, and yearly transactions  ',
                                'Being a key point of contact for other departments on financial and accounting matters',
                                'Managing all sponsorship activities. Responsible for sponsor prospecting, proposal customization and presentation, contract revision and servicing, sponsor follow-up and support, and representing the team at industry functions',
                                'Developing and implementing sponsorship plans for increasing revenues in a cost-effective manner. Target objectives include increasing sponsorship sales and creating sponsorship products and licensing deals to meet or exceed the overall business objectives.  ',
                                'Overseeing social media accounts’ design (e.g. Facebook timeline cover, profile pictures and blog layout)',
                                'Suggesting and implementing new features to develop brand awareness, like promotions and competitions  ',
                            ],
                        },
                        {
                            name: 'What you will learn',
                            text: [
                                'How to fully take control of an organization’s books  ',
                                'Client relationship management skills  ',
                                'How to create a budget and try to allocate money to ensure the project is financially stable  ',
                                'How to write effective business proposals  ',
                                'Social media management  ',
                            ],
                        },
                        {
                            name: 'Beneficial Qualifications:',
                            text: [
                                'Experience with bookkeeping  ',
                                'Strong organization skills  ',
                                'Event sponsorship experience is a plus!  ',
                                'A positive, ego-free attitude and willingness to work creatively on new ideas.  ',
                                'Ability to develop effective working relationships with teammates and partners. ',
                            ],
                        },
                    ],
                    openings: 'Oct 5, 2020',
                    applyLink:
                        'https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HclmcmkxBbnRNmow05I7ILTpUMDVaN0FTNksxQk42M1M3UVcwOTBPWldVMi4u',
                },
                {
                    type: ['mechanical'],
                    name: 'Web Developer',
                    description: [
                        {
                            body:
                                'The team is looking for someone with relevant experience who is creative, enthusiastic and ready to learn, to take over all activities related to the team website, created with React.js. This includes updating the website with new content, such as renders, photos, design descriptions, team member info, sponsors, recruitment info and more. ',
                        },
                    ],
                    lists: [
                        {
                            name: 'Responsibilities ',
                            text: [
                                'Learn how to use React.js ',
                                'Update the website with new information as mentioned above ',
                                'Integrate recruitment applications onto the website ',
                            ],
                        },
                    ],
                    openings: 'Oct 5, 2020',
                    applyLink:
                        'https://forms.office.com/Pages/ResponsePage.aspx?id=B2M3RCm0rUKMJSjNSW9HclmcmkxBbnRNmow05I7ILTpURE4ySVNGV044STc1MkJNUzRJSzJENlpYTS4u',
                },
            ],
        };
    }

    updatePositions = (newPositions) => {
        this.setState({ positionsListed: newPositions });
    };

    updatePositionsVisible = (newPositions) => {
        this.setState({ positionsListed: newPositions });
    };

    render() {
        const visiblePosition = this.state.positions.filter(
            (position) =>
                position.type.includes(this.state.positionsListed) ||
                this.state.positionsListed === 'all'
        );

        const positions = (
            <div className="positions-section-container">
                <div className="positions-container">
                    {visiblePosition.map((position) => (
                        <div
                            className={`position-container ${
                                position.applyLink === '#' ? 'closed' : 'open'
                            }`}
                        >
                            <div
                                className="position"
                                onClick={this.props.updatePositionPage.bind(
                                    this,
                                    position
                                )}
                            >
                                <div className="position-title-container">
                                    <h1 className="position-title">
                                        {position.name}
                                    </h1>
                                </div>
                                <div className="position-openings-container">
                                    <h2 className="position-opening-title">
                                        Closes:{' '}
                                    </h2>
                                    <h1 className="position-openings">
                                        {position.openings}
                                    </h1>
                                </div>
                                <div className="position-description-container">
                                    <p className="position-description">
                                        {' '}
                                        {position.description[0].body.length >
                                        300
                                            ? position.description[0].body
                                                  .split('')
                                                  .slice(0, 300)
                                                  .join('') + '...'
                                            : position.description[0].body}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );

        return (
            <div>
                {/* <PositionSelector updatePosition={this.updatePositions} positions={this.state.positionsListed}/> */}
                {positions}
            </div>
        );
    }
}

export default Positions;
