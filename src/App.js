import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import './App.css';
import React from "react"
import { Routes, Route, NavLink as Link } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" className={({ isActive }) => isActive? "active": ''} end>Home</Link>
          </li>
          <li>
            <Link to="about" className={({ isActive }) => isActive? "active": ''}>About</Link>
          </li>
          <li>
            <Link to="portfolio" className={({ isActive }) => isActive? "active": ''}>Portfolio</Link>
          </li>
          <li>
            <Link to="contact" className={({ isActive }) => isActive? "active": ''}>Contact</Link>
          </li>
          <li>
            <Link to="resume" className={({ isActive }) => isActive? "active": ''}>Resume</Link>
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
