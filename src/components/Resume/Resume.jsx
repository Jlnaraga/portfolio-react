import React from 'react'
import "./Resume.css"
import html5 from "../../assets/images/svg/html5-icon.svg"
import css3 from "../../assets/images/svg/css3-icon.svg"
import react from "../../assets/images/svg/React-icon.svg.png"
import js from "../../assets/images/svg/js-icon.svg"
import mongodb from "../../assets/images/svg/mongodb.png"
import mysql from "../../assets/images/svg/mysql.png"
import graphql from "../../assets/images/svg/graphql.png"
import git from "../../assets/images/svg/git.png"
import nodejs from "../../assets/images/svg/node-js.svg"


const Resume = () => {
  return (
    <section className="skills section" id="skills">
    <h2 className="section-title">Skills</h2>

    <div className="skills_container bd-grid">          
        <div>
            <h2 className="skills_subtitle">Profesional Skills</h2>
            <p className="skills_text">The following are the skills that I have gained throughout the course of the bootcamp.</p>
            <div className="skills_data">
                <div className="skills_names">
                    <img src={react} alt=""/>
                    <span className="skills_name">REACT</span>
                </div>
                <div className="skills_bar skills_react">
                    
                </div>
                <div>
                    <span className="skills_percentage">80%</span>
                </div>
            </div>
            <div className="skills_data">
                <div className="skills_names">
                    <img src={html5} alt=""/>
                    <span className="skills_name">HTML5</span>
                </div>
                <div className="skills_bar skills_html">

                </div>
                <div>
                    <span className="skills_percentage">100%</span>
                </div>
            </div>
            <div className="skills_data">
                <div className="skills_names">
                    <img src={css3} alt=""/>
                    <span className="skills_name">CSS3</span>
                </div>
                <div className="skills_bar skills_css">
                    
                </div>
                <div>
                    <span className="skills_percentage">100%</span>
                </div>
            </div>
            <div className="skills_data">
                <div className="skills_names">
                    <img src={js} alt=""/>
                    <span className="skills_name">JAVASCRIPT</span>
                </div>
                <div className="skills_bar skills_js">
                    
                </div>
                <div>
                    <span className="skills_percentage">60%</span>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_names">
                    <img src={nodejs} alt=""/>
                    <span className="skills_name">NODE JS</span>
                </div>
                <div className="skills_bar skills_nodejs">
                    
                </div>
                <div>
                    <span className="skills_percentage">60%</span>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_names">
                    <img src={mysql} alt=""/>
                    <span className="skills_name">MySQL</span>
                </div>
                <div className="skills_bar skills_mysql">    
                </div>
                <div>
                    <span className="skills_percentage">70%</span>
                </div>
              </div>
              <div className="skills_data">
                  <div className="skills_names">
                  <img src={mongodb} alt=""/>
                    <span className="skills_name">MongoDB</span>
                </div>
                <div className="skills_bar skills_mongodb">

                </div>
                <div>
                    <span className="skills_percentage">70%</span>
                </div>
              </div>
              <div className="skills_data">
                  <div className="skills_names">
                  <img src={graphql} alt=""/>
                    <span className="skills_name">GraphQL</span>
                </div>
                <div className="skills_bar skills_graphql">

                </div>
                <div>
                    <span className="skills_percentage">80%</span>
                </div>
              </div>
              <div className="skills_data">
                  <div className="skills_names">
                  <img src={git} alt=""/>
                    <span className="skills_name">Git</span>
                </div>
                <div className="skills_bar skills_git">

                </div>
                <div>
                    <span className="skills_percentage">80%</span>
                </div>
            </div>
        </div>
        
    </div>
</section>

  )
}

export default Resume