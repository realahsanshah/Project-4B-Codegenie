import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './components/Navbar';
import TopComponent from './components/TopComponent';



function App() {
  return (
    <div>
      <Navbar />
      <TopComponent />
    </div>
  );
}

export default App;
