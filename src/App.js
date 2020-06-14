import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import CarsPage from './components/carspage/CarsPage';
import TeamPage from './components/teampage/TeamPage';
import SponsorsPage from './components/sponsorspage/SponsorsPage';
import ContactPage from './components/contactpage/ContactPage';


function App() {
  return (
    
    <Router>
      <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/>
        <div className="app">
            <Route exact path="/" 
                component={HomePage} />
            <Route exact path="/design"
              component={CarsPage} />
              <Route exact path="/team"
              component={TeamPage} />
            <Route exact path="/sponsors"
              component={SponsorsPage} />
              <Route exact path="/contact"
              component={ContactPage} />
        </div>
    </Router>
  );
}

export default App;
