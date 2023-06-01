import React from 'react'
import '../styles/Contact.css'
import {FaPhone} from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import Footer from '../components/Footer'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-contain">
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
                <FaPhone size={30}/>
                <h4>715.387.5006</h4>
              </div>
              <p>new york, 1286 ruumu manor <br /><span>service@email.com</span>.</p>
            </div>
            <hr />
            <div className="info">
              <div className="info-top">
                <FaPhone size={30}/>
                <h4>715.387.5006</h4>
              </div>
              <p>new york, 1286 ruumu manor <br /><span>service@email.com</span>.</p>
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
              <button>send <BsArrowRight className='rightarrow'/></button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact