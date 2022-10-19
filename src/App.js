import React from "react"
import { Routes, Route } from "react-router-dom"

import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="Portfolio" element={<Portfolio />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="resume" element={<Resume />}></Route>
        </Routes>
      </div>
    </div>
  )
}
    
export default App;
