import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Home from './components';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Navbar />
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" src="https://drive.google.com/file/d/1IpIh8hEJy-IuiTbPDASb-8-GKltqxh_x/view" />
        {/* <Route exact path="/contact" component={Contact} /> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;