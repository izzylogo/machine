import React from 'react'
import Hero from '../components/Hero'
import background from '../assets/appiontment.webp'
import '../styles/Appiontment.css'
import { MdError } from 'react-icons/md'
import Footer from '../components/Footer'
import { BsArrowRight } from 'react-icons/bs'

const Appiontment = () => {
  return (
    <div className='appiontment'>
        <Hero head='Appiontment' background={background}/>
        <div className="appiontment-contain">
            <div className="appiontment-info">
                <form action="">
                    <h4>personal information</h4>
                    <div className="appiontment-inputs">
                        {/* <div className="appiont-name appiont-in">
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name'/>
                        </div>
                        <div className="appiont-phone appiont-in">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id='name'/>
                        </div>
                        <div className="appiont-email appiont-in">
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email'/>
                        </div> */}
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Phone' />
                        <input type="text" placeholder='Email' />
                    </div>
                    <br />
                    <h4>vehicle information</h4>
                    <div className="appiontment-inputs">
                        {/* <div className="appiont-name appiont-in">
                            <label htmlFor="make">Make</label>
                            <input type="text" id='make'/>
                        </div>
                        <div className="appiont-phone appiont-in">
                            <label htmlFor="model">Model</label>
                            <input type="text" id='model'/>
                        </div>
                        <div className="appiont-email appiont-in">
                            <label htmlFor="year">Year</label>
                            <input type="text" id='year'/>
                        </div> */}
                        <input type="text" placeholder='Make'/>
                        <input type="text" placeholder='Model'/>
                        <input type="text" placeholder='Year'/>
                    </div>
                    <div className="appiontment-photo">
                        <input type="file" placeholder='Attach photo or video'/>
                    </div>
                    <div className="appiontment-descrip">
                        <textarea  id="case" placeholder='Case description' cols="30" rows="2"></textarea>
                    </div>
                    <br />
                    <h4>choose date and time</h4>
                    <div className="appiontment-date">
                        <input type="text" placeholder='Select date' />
                        <input type="text" placeholder='Select time' />
                    </div>
                    <br />
                    <h4>special offer</h4>
                    <input type="text" placeholder='Select special offers' />
                </form>

                <div className="form-warn">
                    <MdError color='red' className='warn-icon'/> 
                    <p>Please note that the date and time you requested may not be available. We will contact you to confirm your actual appointment details.</p>
                </div>

                <button>Send <BsArrowRight/></button>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Appiontment