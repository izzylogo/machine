import React from 'react'
import '../styles/Home.css'
import {AiFillPhone} from 'react-icons/ai'
import {FaPhone} from 'react-icons/fa'
import {FaQuoteLeft} from 'react-icons/fa'
import logos from '../assets/certificate-01.svg'
import servpic from '../assets/service1.webp'
import { testimonial } from '../constants'

const Home = () => {
  return (
    <div className='home'>
      {/* Hero Section */}
      <div className="home-contain">
        <div className="home-intro">
          <div className="home-left">
            <h2>KEEPING YOU ON THE ROAD WITH SERVICE YOU CAN TRUST</h2>
            <button>EXPLORE OUR SERVICES</button>
          </div>
          <div className="home-right"></div>
        </div>
        {/* <div className="hero-bottom">
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
        </div> */}
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
    </div>
  )
}

export default Home