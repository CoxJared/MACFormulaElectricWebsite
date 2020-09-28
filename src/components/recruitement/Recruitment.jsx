import React, { Component } from 'react';
import Header from '../header/Header';
import RecruitmentInfo from './recruitmentinfo/RecruitmentInfo';
import Footer from '../footer/Footer';
import './Recruitment.css';
import Positions from './positions/Positions';

import Position from './positions/position/Position';
import LoadingSpinner from '../loadingspinner/LoadingSpinner';

export class Recruitment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'positions',
            positionToshow: null,
            loadingElement: <LoadingSpinner />,
        };
    }
    // componentDidMount() {
    //     if (window.innerWidth < 1000) {
    //         alert('Please use application page through a larger device');
    //         history.push('/my-new-location')
    //     }
    // }

    updatePage = (newPage) => {
        this.setState({ page: newPage });
        window.scrollTo(0, 0);
    };

    updatePositionPage = (showPosition) => {
        this.setState({ positionToshow: showPosition });
        this.updatePage('position');
        console.log('yup');
        window.scrollTo(0, 0);
    };

    returnToListings = () => {
        console.log('yoooo');
        this.setState({ page: 'positions' });
        window.scrollTo(0, 0);
    };

    imageLoaded = () => {
        this.setState({
            loadingElement: <div />,
        });
    };

    render() {
        // if (this.state.page === "about") {
        //     return (
        //         <div >
        //             {/* {this.state.loadingElement} */}
        //             <Header
        //                 page="recruitment" />
        //             <div className="recruitment-page-container">
        //                 <RecruitmentInfo
        //                     updatePage={this.updatePage} />
        //             </div>
        //             <Footer />
        //         </div>
        //     )
        // }
        if (this.state.page === 'positions') {
            return (
                <div>
                    <Header page="recruitment" />
                    <div className="recruitment-page-container">
                        <RecruitmentInfo updatePage={this.updatePage} />
                        <Positions
                            updatePositionPage={this.updatePositionPage}
                        />
                    </div>
                    <Footer />
                </div>
            );
        } else {
            return (
                <div>
                    <Header page="recruitment" />
                    <div className="recruitment-page-container">
                        <Position
                            position={this.state.positionToshow}
                            className="position-full-container"
                            returnToListings={this.returnToListings}
                        />
                    </div>
                    <Footer />
                </div>
            );
        }
    }
}

export default Recruitment;
