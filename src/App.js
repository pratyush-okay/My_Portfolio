import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './components/Header/Header';
import About from "./Pages/About/About"
import Projects from "./Pages/Projects/Projects"
import AnimatedCursor from "react-animated-cursor"

import './App.css';

function App() {
  return (
    <Router>
       <div className="App">
       <AnimatedCursor />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </div>
    </Router>
   
    
  );
}

export default App;
