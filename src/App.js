import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css';
import React from "react"
import { Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About me</Link>
          </li>
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="resume">Resume</Link>
          </li>
        </ul>
      </nav>
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
