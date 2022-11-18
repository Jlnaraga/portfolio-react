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
            <br />
            <p>Full-Stack Web Developer leveraging a background in the retail industry leading to resilience, 
              the ability to connect easily with others, an unwavering calm demeanor in stressful situations, 
              dedication and loyalty, and a diligent work ethic. </p>
             
              <p> Experienced in developing applications and communicating with other team members about 
              decision making, time management, and problem solving together to ensure product delivery.
            </p>
        </div>
    </div>
  </section>
)
}

export default About
