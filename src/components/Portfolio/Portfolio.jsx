import React from 'react'
import "./Portfolio.css"

import wanderlist from '../../assets/screenshots/wanderlist-project.png'
import findAFriend from '../../assets/screenshots/find_a_friend.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
            <h1 class="headings">PORTFOLIO</h1>
            <div class="gallery">
                <a href="https://kayhancock.github.io/Wanderlist/">
                  <img src={wanderlist} alt="" />
                </a>
                <a href="" alt="https://github.com/mmelan000/Blue-Barramundi.git">
                  <img src={findAFriend} alt="" />
                </a>
            </div>
        </section>
    
  )
}

export default Portfolio