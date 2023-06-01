import React from 'react'
import { BsFacebook, BsTwitter, BsYelp } from 'react-icons/bs'
import man from '../assets/footerimg.webp'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-contain">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="foot-red">
              <div className="bar"></div>
              <span>CAR REPAIRS AND MAINTENANCE</span>
            </div>
            <h2>CALL US NOW</h2>
            <h2>715-387-50</h2>
          </div>
          <div className="footer-top-right">
            <img src={man} alt="" />
          </div>
        <div className="line"></div>
        </div>
        <div className="footer-middle">
          <div className="middle-left">
            <h6>NEW YORK, 1286 RUUMU MANOR</h6>
            <h6>get direction</h6>
          </div>
          <div className="middle-center">
            <BsFacebook className='middle-icon'/>
            <BsTwitter className='middle-icon'/>
            <BsYelp className='middle-icon'/>
          </div>
          <div className="middle-right">
            <h6>MON – FRI: 8:30 AM – 6:00 PM</h6>
            <h6>SAT: 8:30 AM – 2:00 PM</h6>
          </div>
        </div>
        <div className="footer-last">
          <div className="last-left">
            <ul>
              <li>faq</li>
              <li>reviews</li>
              <li>cntact</li>
            </ul>
          </div>
          <div className="last-right">
            <h6>© 2023 AUTO-SERVICE THEME BY VAMTAM THEMES</h6>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer