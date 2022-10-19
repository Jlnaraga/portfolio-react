import React from 'react'

import linkedIn from "../../assets/images/svg/linkedin-icon.svg"
import github from "../../assets/images/svg/github-icon.svg"

import "./Home.css"

const Home = () => {
  return (
    
        
        <section id="home">
            <div class="main">
                <h1 className="headings">I AM <br /> JOVY IRA NARAGA</h1>
                <button className="btn">
                    Hire me
                </button>
            </div>

            <div className="home_social">
                <a href="https://www.linkedin.com/in/jovy-ira-naraga-9b1534238/" className="home_social-icon">
                    <img src={linkedIn} alt=""/>
                </a>
                 <a href="https://github.com/Jlnaraga" className="home_social-icon">
                    <img src={github} alt=""/>
                </a> 
            </div>
        </section>
    )
}
export default Home
