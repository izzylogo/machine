import React from 'react'
import '../styles/Home.css'
import logo from '../assets/macchina.svg'
import {AiFillPhone} from 'react-icons/ai'
import {FaPhone} from 'react-icons/fa'
import {FaQuoteLeft} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import logos from '../assets/certificate-01.svg'
import servpic from '../assets/service1.webp'
import { testimonial } from '../constants'

const Home = () => {
  return (
    <div className='home'>
      {/* Hero Section */}
      <div className="home-contain">
        <div className="home-top">
          <div className="home-intro">
            <div className="home-left">
              <h2>KEEPING YOU ON THE ROAD WITH SERVICE YOU CAN TRUST</h2>
              <button>EXPLORE OUR SERVICES</button>
            </div>
            <div className="home-right"></div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
          <hr/>
          <div className="home-info">
            <FaPhone size={30}/>
            <h4>CALL US NOW 715.387.5006</h4>
            <p>Feel free to call us.</p>
          </div>
          <hr />
          <div className="home-info">
            <FaPhone size={30}/>
            <h4>CALL US NOW 715.387.5006</h4>
            <p>Feel free to call us.</p>
          </div>
          <hr />
          <div className="home-info">
            <FaPhone size={30}/>
            <h4>CALL US NOW 715.387.5006</h4>
            <p>Feel free to call us.</p>
          </div>
          <hr/>
        </div>
      {/* section 2 */}


      <div className='home-section2'>
        <div className="section2-top">
          <div className="section2-left">
            <h2>WE UNDERSTAND HOW IMPORTANT IT IS TO FIND THE RIGHT AUTO SERVICE</h2>
            <p>Car repairs and maintenance can be expensive and no one wants to have pay to repair damage caused by shoddy repair service. When you bring your car into our auto shop, you won’t have to worry because our staff is comprised of ASE certified technicians who are committed to making sure you have a safe dependable car.</p>
            <div>MORE ABOUT US</div>
          </div>
          <div className="section2-right">
            <h5>WE ARE CERTIFICATED:</h5>
            <div className="cert-logo">
              <div className="cert-cover">
                <img src={logos} alt='Logos o certificate'/>
              </div>
              <div className="cert-cover">
                <img src={logos} alt='Logos o certificate'/>
              </div>
              <div className="cert-cover">
                <img src={logos} alt='Logos o certificate'/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our servives home */}
      <div className="home-section3">
        <div className="section3-contain">
          <h2>OUR SERVICES</h2> <br />
          <p>VIEW ALL SERVICES</p>
          <div className="section3-grid">
            <div className="grid-con">
              <img src={servpic} alt="" />
              <p>Diagnostic</p>
            </div>
            <div className="grid-con">
              <img src={servpic} alt="" />
              <p>Diagnostic</p>
            </div>
            <div className="grid-con">
              <img src={servpic} alt="" />
              <p>Diagnostic</p>
            </div>
          </div>

        </div>
      </div>

      {/* Testimonials */}
      <div className="home-section4">
        <div className="section4-contain">
          <div className="section4-top">
            <h2>100% APPROVED BY CUSTOMERS</h2>
            <div className="testimonal-cards">
              {testimonial.map((test) => (
                <div className="card">
                  <FaQuoteLeft fontSize={50} color='red' className='quotation'/>
                  <br />
                  <p>{test.detail}</p>
                  <br />
                  <hr />
                  <h4>{test.name}</h4>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>

      {/* appointment */}
      <div className="home-section5">
        <div className="section5-contain">
          <div className="section5-top">
            <h2>GET <span>FREE</span> APPOINTMENT</h2>
            <form action="">
              <div className="form-top">
                <div className="form-name field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id='name'/>
                </div>
                <div className="form-phone field">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id='phone' />
                </div>
                <div className="form-email field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id='email' />
                </div>
              </div>
              <div className="form-middle">
                <div className="form-vehicle field">
                  <label htmlFor="vehicle">Vehicle Make/Model and Year</label>
                  <input type="text" id='vehicle'/>
                </div>
                <div className="form-photo field">
                  <label htmlFor="photo">Attach photo or Video</label>
                  <input type="file" id='photo' />
                </div>
                <div className="form-time-cover">
                  <div className="form-date field">
                    <label htmlFor="date">Select Date</label>
                    <input type="date" id='date'/>
                  </div>
                  <div className="form-time field">
                    <label htmlFor="time">Select Time</label>
                    <input type="time" id='time' />
                  </div>
                </div>
              </div>
              <div className="form-last">
                <div className="form-desc field">
                  <label htmlFor="desc">Case Description</label>
                  <textarea name="" id="desc" rows="2"></textarea>
                </div>
              </div>
            </form>
            <button>send <BsArrowRight className='rightarrow'/></button>
          </div>
        </div>
      </div>

      {/* top footer */}
      <div className="home-section6">
        <div className="section6-contain">
          <div className="section6-top">
            <div className="sec6-left">
              <img src={logo} alt="macchinalogo" />
              <br />
              <h4>715 387 5006</h4>
              <h4 id='h4'>GET DIRECTION</h4>
              <ol>
                <li>FAQ</li>
                <li>REVIEWS</li>
                <li>CONTACT</li>
              </ol>
            </div>
            <div className="sec6-right">
              <h6>NEW YORK, 1286 RUUMU MANOR <br /> <span>SERVICE@EMAIL.COM</span></h6>
              <h6>MON – FRI: 8:30 AM – 6:00 PM <br />SAT: 8:30 AM – 2:00 PM</h6>
            </div>
          </div>
          <div className="section6-bottom">
            <div className="sec6bot-left">
              <h6>© 2023 AUTO-SERVICE THEME BY VAMTAM THEMES</h6>
            </div>
            <div className="sec6bot-right">
              <div className="sec-link">
                <BsFacebook className='facebook' fontSize={10}/>
                <span>FACEBOOK</span>
              </div>
              <div className="sec-link">
                <BsFacebook className='facebook' fontSize={10}/>
                <span>FACEBOOK</span>
              </div>
              <div className="sec-link">
                <BsFacebook className='facebook' fontSize={10}/>
                <span>FACEBOOK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home