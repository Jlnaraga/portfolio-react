import React from 'react'
import "./Portfolio.css"

import wanderlist from '../../assets/screenshots/wanderlist-project.png'
import findAFriend from '../../assets/screenshots/find_a_friend.png'
import myPulse from '../../assets/screenshots/ehr-mypulse.herokuapp.com_.png'
const Portfolio = () => {
return (
  <section id="portfolio">
          <h1 className="headings">PORTFOLIO</h1>
          <div className="gallery">
              <a href="https://kayhancock.github.io/Wanderlist/">
                <img src={wanderlist} alt="" />
              </a>
              <a href="https://fathomless-gorge-22203.herokuapp.com/" alt="">
                <img src={findAFriend} alt="" />
              </a>
              <a href="https://ehr-mypulse.herokuapp.com/" alt="">
                <img src={myPulse} alt="" />
              </a>
          </div>
      </section>
  
)
}

export default Portfolio