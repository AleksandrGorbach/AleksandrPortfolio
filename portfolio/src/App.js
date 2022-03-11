import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import Resume from './Aleksandr_Gorbach_Resume';

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/portfolio" element={<Portfolio/>} />
        <Route exact path="/resume" src="Aleksandr_Gorbach_Resume" />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;