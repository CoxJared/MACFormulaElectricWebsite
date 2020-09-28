import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage.jsx';
import DesignPage from './components/designPage/DesignPage.jsx';
import TeamPage from './components/teampage/TeamPage.jsx';
import SponsorsPage from './components/sponsorspage/SponsorsPage.jsx';
import ContactPage from './components/contactpage/ContactPage.jsx';
import Recruitment from './components/recruitement/Recruitment';


function App() {
  return (

    <Router>
      <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet" />
      <div className="app">
        <Route exact path="/"
          component={HomePage} />
        <Route exact path="/design"
          component={DesignPage} />
        <Route exact path="/team"
          component={TeamPage} />
        <Route exact path="/sponsors"
          component={SponsorsPage} />
        <Route exact path="/contact"
          component={ContactPage} />
        <Route exact path="/recruitment"
          component={Recruitment} />
      </div>
    </Router>
  );
}

export default App;
