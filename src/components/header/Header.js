import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component{

    pageIsSelected(currentPage, checkPage)
    {
        return ""
    }

    componentDidMount () {
        (document.getElementById("header-container")).style.opacity=1;
    }
    

    render() {

        var headerClass = "static-header";

        var prevScrollpos = window.pageYOffset;
        


        if( document.body.offsetWidth>800){
            try{
            }catch{}

            headerClass = "header"
            window.onscroll = function() {
                try{
                var currentScrollPos = window.pageYOffset;

                if(window.pageYOffset > 90){
                    (document.getElementById("header")).style.backgroundColor="rgba(0,0,0,1)";
                } else {
                    (document.getElementById("header")).style.backgroundColor="rgba(0,0,0,0)";
                }


                if(prevScrollpos < (currentScrollPos +1) )
                {
                    console.log('hi');
                    if(currentScrollPos > 90)
                    {
                        (document.getElementById("header")).style.top="-90px";
                        
                    }
                    else{
                        
                    }
                }
                else{
                    (document.getElementById("header")).style.top="0" ;
                }
            }catch{}
            prevScrollpos = currentScrollPos;
            } 
        }
        if(document.body.offsetWidth < 800) {
            
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos < (currentScrollPos +1) ) {
                    document.getElementById("toggle").checked = false;
                    if(currentScrollPos > 90)
                    {
                        (document.getElementById("header-container")).style.top="-90px";
                    }
                    else{
                        (document.getElementById("header-container")).style.top="-".concat(currentScrollPos,"px");
                    }
                } else {
                    (document.getElementById("header-container")).style.top="0" ;
                }
                prevScrollpos = currentScrollPos;
            }
        }

        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/>
            <div id="header-container">
            <div className="tracker-backgound">
                <div id={`${headerClass}`}>
                    <div className="logo">
                    <Link className="logo-image" to="/">
                        {/* <img src={logoImage} className="logo-image" alt=""></img>  */}
                    </Link>
                    <Link className="logo-text" to="/">MAC FORMULA ELECTRIC</Link>
                    </div>

                    <input type="checkbox" id="toggle"></input>
                    <div className="hamburger"><div>
                    </div></div>
                    <ul className="nav-bar">               
                        <li className={`nav-bar-item ${this.pageIsSelected("about", this.props.page)}`}>
                             <Link to="/design">Design</Link>
                             <div className="white-hover-bar"></div>
                        </li> 
                        <li className={`nav-bar-item ${this.pageIsSelected("recruitment", this.props.page)}`}>
                            <Link to="/team">Team</Link>
                            <div className="white-hover-bar"></div>
                        </li>   
                        <li className={`nav-bar-item ${this.pageIsSelected("sponsors", this.props.page)}`}>
                            <Link to="/sponsors">Sponsors</Link>
                            <div className="white-hover-bar"></div>
                        </li> 

                        <li className={`nav-bar-item ${this.pageIsSelected("contact", this.props.page)}`}>
                            <Link to="/contact">Contact</Link>
                            <div className="white-hover-bar"></div>
                        </li>
                    </ul>
                </div>
                

                </div>
            </div>
            {document.body.offsetWidth > 800 ? <div /> : <div className="top-buffer"></div>}
            </div>
        );
    }
}



export default Header;