import React from 'react'
import './Footer.css'
import facebookpic from '../../assets/images/svg/facebook-icon.svg'
import igpic from '../../assets/images/svg/instragram-icon.svg'
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
        </div>
        <p>&#169; 2022 copyright all right reserved</p>
    </footer>
          
    </div>
  )
}

export default Footer