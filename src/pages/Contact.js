import React from 'react'
import '../styles/Contact.css'
import {FaPhone} from 'react-icons/fa'
import { BsArrowRight, BsCalendarEvent, BsCarFrontFill } from 'react-icons/bs'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import background from '../assets/contactbackground.webp'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-contain">
        <Hero head='contact' background={background} />
        <div className="contact-info">
          <h2 className="info-head">Location & <br /> information</h2>
          <div className="contact-info-bottom">
            <hr />
            <div className="info">
              <div className="info-top">
                <FaPhone size={30}/>
                <h4>715.387.5006</h4>
              </div>
              <p>new york, 1286 ruumu manor <br /><span>service@email.com</span>.</p>
            </div>
            <hr />
            <div className="info">
              <div className="info-top">
                <BsCarFrontFill size={30}/>
                <h4>hours of operation</h4>
              </div>
              <p>MON – FRI: 8:30 AM – 6:00 PM <br /><span>SAT: 8:30 AM – 2:00 PM</span>.</p>
            </div>
            <hr />
            <div className="info">
              <div className="info-top">
                <BsCalendarEvent size={30}/>
                <h4>free appiontment</h4>
              </div>
              <button>get free appiontment   <BsArrowRight size={20}/></button>
            </div>
            <hr />  
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-form-contain">
            <h2>Contact <br /> form</h2>
            <div className="form-contain">
              <form action="">
                <div className="contact-form-top">  
                  <div className="contact-name input-cover">
                    <label htmlFor="name">Name</label>
                    <input type="text" />
                  </div>
                  <div className="contact-phone input-cover">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" />
                  </div>
                  <div className="contact-email input-cover">
                    <label htmlFor="email">Email</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="contact-form-bottom input-cover">
                  <label htmlFor="message">Message</label>
                  <textarea name="" id="message" cols="30"></textarea>
                  </div>
              </form>
              <button>send <BsArrowRight size={15} className='rightarrow'/></button>
            </div>
          </div>
        </div>
        <div className="last">
          <div className="last-contain">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact