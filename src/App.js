import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './components/Navbar';
import TopComponent from './components/TopComponent';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div>
      <Navbar />
      <TopComponent />
      <AboutUs />
    </div>
  );
}

export default App;
