import React from 'react'
import irasolo from '../../assets/images/IRA-SOLO.jpg'
import "./About.css"

const About = () => {
  return (
    <section id="about" >
      <h1 className="headings">About me</h1>
      <div id="pic">
          <img src={irasolo} alt="" />
          <div id="intro">
              <h2>JOVY IRA NARAGA</h2>
              <p>I am a mom who studied to become a software developer.
              I have two kids and 4 pet birds.   

              
              </p>
          </div>
      </div>
    </section>
  )
}

export default About
