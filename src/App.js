import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import CarsPage from './components/carspage/CarsPage';


function App() {
  return (
    
    <Router>
      <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/>
        <div className="app">
            <Route exact path="/" 
                component={HomePage} />
            <Route exact path="/cars"
              component={CarsPage} />
        </div>
    </Router>
  );
}

export default App;
