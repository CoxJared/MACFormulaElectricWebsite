import React, { Component } from 'react';
import './Position.css';
import { thisTypeAnnotation } from '@babel/types';
import Button from '../../../button/Button';

let formheight = document.body.offsetWidth > 800 ? '1000px' : '800px';

let scrollValue = document.body.offsetWidth > 800 ? 620 : 360;
export class Position extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationOpened: false,
        };
    }

    componentDidMount() {
        window.scrollTo(0, scrollValue);
    }

    openApplication = () => {
        this.setState({ applicationOpened: true });
        window.scrollTo(0, scrollValue);
    };
    closeApplication = () => {
        this.setState({ applicationOpened: false });
    };

    exitApplication = () => {
        console.log('yeeeep');
        this.props.returnToListings();
    };

    render() {
        if (!this.state.applicationOpened) {
            return (
                <div className="position-posting-container">
                    <h1 className="position-posting-name">
                        {this.props.position.name}
                    </h1>

                    <div className="position-posting-applynow-container">
                        {/* {this.props.position.applyLink === '#' ? (
                            <a
                                className="position-posting-applynowi-disabled"
                                href=""
                            >
                                Closed
                            </a>
                        ) : ( */}
                        <a
                            href={this.props.position.applyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className="position-posting-applynow"
                                // onClick={this.openApplication}
                            >
                                Apply Now
                            </button>
                        </a>

                        {/* )} */}
                    </div>
                    <h2 className="position-posting-date">
                        Closes:{' '}
                        <span style={{ color: '#c22' }}>
                            {this.props.position.openings}
                        </span>{' '}
                    </h2>
                    <h1
                        className="position-back-button"
                        onClick={this.exitApplication}
                    >
                        back to positions
                    </h1>

                    <h1 className="position-posting-heading">Description</h1>
                    {this.props.position.description.map((para) => (
                        <>
                            <p className="position-posting-description">
                                <span className="position-posting-description-bold">
                                    {para.head}
                                </span>
                                {para.body}
                            </p>
                        </>
                    ))}
                    {this.props.position.lists.map((list) => (
                        <>
                            <h1 className="position-posting-heading">
                                {list.name}
                            </h1>
                            <ul className="position-posting-list">
                                {list.text.map((responsibility) => (
                                    <li className="position-poosting-item">
                                        {responsibility}
                                    </li>
                                ))}
                            </ul>
                        </>
                    ))}
                </div>
            );
        } else {
            return (
                <div className="application-container">
                    <div className="back-to-position-container">
                        <a
                            className="back-to-position-button"
                            onClick={this.closeApplication}
                        >
                            Back To Position
                        </a>
                    </div>
                    <div className="survey-container">
                        <iframe
                            width="640px"
                            height={formheight}
                            src={this.props.position.applyLink}
                            frameborder="0"
                            marginwidth="0"
                            marginheight="0"
                            style={{
                                border: 'none',
                                width: '100%',
                                maxWidth: '100%',
                                maxHeight: '100vh',
                            }}
                            allowfullscreen
                            webkitallowfullscreen
                            mozallowfullscreen
                            msallowfullscreen
                        >
                            {' '}
                        </iframe>
                    </div>
                </div>
            );
        }
    }
}

export default Position;
