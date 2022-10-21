import React from 'react'
import './Footer.css'
import facebookpic from '../../assets/images/svg/facebook-icon.svg'
import igpic from '../../assets/images/svg/instragram-icon.svg'
import linkedIn from "../../assets/images/svg/linkedin-icon.svg"
import github from "../../assets/images/svg/github-icon.svg"

const Footer = () => {
return (
    <div>
        {/* <!-- FOOTER --> */}
<footer className="footer">
    <p className="footer_title">Jovy Ira</p>
    <div className="footer_social">
        <a href="https://facebook.com/" className="footer_icon">
            <img src={facebookpic} alt=""/>
        </a>
        <a href="https://instagram.com/" className="footer_icon">
            <img src={igpic} alt=""/>
        </a>
    
            <a href="https://www.linkedin.com/in/jovy-ira-naraga-9b1534238/" className="home_social-icon">
                <img src={linkedIn} alt=""/>
            </a>
                <a href="https://github.com/Jlnaraga" className="home_social-icon">
                <img src={github} alt=""/>
            </a> 
        </div>

    <p>&#169; 2022 copyright all right reserved</p>
</footer>
        
</div>
)
}

export default Footer