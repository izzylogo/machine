import React from 'react'
import '../styles/Home.css'
import logo from '../assets/macchina.svg'
import {FaPhone} from 'react-icons/fa'
import {FaQuoteLeft} from 'react-icons/fa'
import {BsCalendar, BsFacebook, BsPlus} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import logos from '../assets/certificate-01.svg'
import { testimonial } from '../constants'
import {motion, variants} from 'framer-motion'
import { Link } from 'react-router-dom'
import video from '../assets/csmvideo.mp4'


const spanAni={
  offscreen:{y: 90, opacity: 0},
  onscreen:{y: 0,
    opacity: [0, 1],
    transition: {type: 'spring',
    bounce: 0.2,
    delay: 1,
    duration: 1.5}
  }
}

const h2Ani={
  offscreen:{y: -100, opacity: 0},
  onscreen:{y: 0,
    opacity: [0, 0.2, 0.5, 0.8, 1],
    transition: {type: 'spring',
    bounce: 0.2,
    delay: 0.5,
    duration: 1.5}
  }
}

const Home = () => {
  return (
    <div className='home'>
      {/* Hero Section */}
      <motion.div 
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{once:true, amount:0.3}}
        transition={{staggerChildren:0.5}}
      className="home-contain">
        <div className="home-top">
          <div className="home-intro">
            <div className="home-left">
              <motion.h2 variants={h2Ani}>KEEPING YOU ON THE ROAD WITH SERVICE YOU CAN TRUST</motion.h2>
              <motion.button  
                variants={spanAni}
              >EXPLORE OUR SERVICES <BsArrowRight fontSize={20} className='rightarrow'/></motion.button>
            </div>
            <div className="home-right"></div>
          </div>
        </div>
      </motion.div>

      <div className="hero-bottom">
          <hr/>
          <div className="home-info">
            <FaPhone size={30}/>
            <h4>CALL US NOW 07710 607 508</h4>
            <p>Feel free to call us.</p>
          </div>
          <hr />
          <div className="home-info second">
            <BsCalendar size={30}/>
            <h4>GET FREE APPIONTMENT</h4>
            <p>Feel Diagnosis & Brake Checks</p>
          </div>
          <hr />
          <div className="home-info">
            <MdLocationOn size={30}/>
            <h4>FIND US ON THE MAP</h4>
            <p>Newcastle, Unit 8 Rosevale Road</p>
          </div>
          <hr/>
        </div>
      {/* section 2 */}


      <div className='home-section2'>
        <motion.div className="section2-top"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once:true, amount:0.3}}
          transition={{staggerChildren:0.5}}
        >
          <motion.div className="section2-left" variants={spanAni}>
            <h2>WE UNDERSTAND HOW IMPORTANT IT IS TO FIND THE RIGHT AUTO SERVICE</h2>
            <p>Car repairs and maintenance can be expensive and no one wants to have pay to repair damage caused by shoddy repair service. When you bring your car into our auto shop, you won’t have to worry because our staff is comprised of ASE certified technicians who are committed to making sure you have a safe dependable car.</p>
            <div className='section2-left-bottom'>MORE ABOUT US</div>
          </motion.div>
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
        </motion.div>
      </div>


      <div className="ferrari">
        <div className="ferrari-cover">
          {/* this is the code for the video */}
          {/* <video autoPlay loop muted plays-inline>
            <source src={video} type='video/mp4'/>
          </video> */}
          <div className="ferrari-cover-details">
            <div className="ferrari-cover-det">
              <h4>01</h4>
              <p>1YR/12K WARRANTY <br /> PARTS AND LABOR</p>
            </div>
            <div className="ferrari-cover-det">
              <h4>02</h4>
              <p>FREE SHUTTLE <br /> SERVICE</p>
            </div>
            <div className="ferrari-cover-det">
              <h4>03</h4>
              <p>24H TOWING <br /> SERVICE</p>
            </div>
          </div>
        </div>
      </div>

      {/* our servives home */}
      <div className="home-section3">
        <div className="section3-contain">
          <motion.h2
            initial={{
              y: 50, 
              opacity: [0, 0.2, 0.5, 0.8, 1],
              transition: {type: 'spring',
              bounce: 0.2,
              delay: 1.1,
              duration: 2.5}
            }}
            whileInView={{  
              y: 0,
              opacity: [0, 0.2, 0.5, 0.8, 1],
              transition: {type: 'spring',
              bounce: 0.2,
              delay: 1.1,
              duration: 2.5} 
            }}
            viewport={{ once: true, amount: 0.4 }}
          >OUR SERVICES</motion.h2> <br />
          <motion.p
            initial={{ 
              y: 50, 
              opacity: [0, 0.2, 0.5, 0.8, 1],
              transition: {type: 'spring',
              bounce: 0.2,
              delay: 1.3,
              duration: 1}
            }}
            whileInView={{
              y: 0, 
              opacity: [0, 0.2, 0.5, 0.8, 1],
              transition: {type: 'spring',
              bounce: 0.2,
              delay: 1.3,
              duration: 1}
            }}
            viewport={{ once: true, amount: 0.4 }}
          >VIEW ALL SERVICES</motion.p>
          <div className="section3-grid">
            <div className="grid-contain">
              <div className="grid-con con1">
                <div className="grid-inner">
                  <Link to='/appiontment' className="plus-cover">
                    <BsPlus color='white'/>
                  </Link>
                  <h4>ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH</h4>
                </div>
              </div>
              <p>recovery</p>
            </div> 
            <div className="grid-contain">
              <div className="grid-con con2">
                <div className="grid-inner">
                  <Link to='/appiontment' className="plus-cover">
                    <BsPlus color='white'/>
                  </Link>
                  <h4>OUR TECHNICIANS ARE EXPERTS IN PROVIDING HIGH-QUALITY TIRE SERVICES</h4>
                </div>
              </div>
              <p>MOT</p>
            </div>
            <div className="grid-contain">
              <div className="grid-con con3">
                <div className="grid-inner">
                  <Link to='/appiontment' className="plus-cover">
                    <BsPlus color='white'/>
                  </Link>
                  <h4>WE USE STATE-OF-THE-ART SCAN TOOL EQUIPMENT TO PERFORM ENGINE DIAGNOSTICS</h4>
                </div>
              </div>
              <p>accident repairs</p>
            </div>
          </div>

        </div>
      </div>

      <div className="back-car">
        <Link to='/appiontment' className="back-car-circle">
          <h5>book an <br /> appiontment <BsArrowRight fontSize={30} className='rightarrow'/> </h5>
        </Link>
      </div>

      {/* Testimonials */}
      <div className="home-section4">
        <div className="section4-contain">
          <div className="section4-top">
            <motion.h2
              initial={{
                y: 50, 
                opacity: [0, 0.2, 0.5, 0.8, 1],
                transition: {type: 'spring',
                bounce: 0.2,
                delay: 1.3,
                duration: 1}
              }}
              whileInView={{
                y: 0, 
                opacity: [0, 0.2, 0.5, 0.8, 1],
                transition: {type: 'spring',
                bounce: 0.2,
                delay: 1.3,
                duration: 1}
              }}
            >100% APPROVED BY CUSTOMERS</motion.h2>
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
                  <input type="file" id='photo'  />
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
              <h4>07710 607 508</h4>
              <h4 id='h4'>GET DIRECTION</h4>
              <ol>
                <li>FAQ</li>
                <li>REVIEWS</li>
                <li>CONTACT</li>
              </ol>
            </div>
            <div className="sec6-right">
              <h6>Newcastle, Unit 8 Rosevale Road <br /> <span>cosminn.ursache@yahoo.co.</span></h6>
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