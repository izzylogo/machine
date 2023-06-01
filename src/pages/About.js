import React from 'react'
import '../styles/About.css'
import logos from '../assets/about-logo.svg'
import man from '../assets/about-man.webp'
import { FaCarAlt } from 'react-icons/fa'
import {TbQuote} from 'react-icons/tb'
import Footer from '../components/Footer'



const About = () => {
  return (
    <div className='about'>
      <div className="about-contain">
        <div className="about-info">
          <h2>who we are</h2>
          <div className="about-info-details">
            <div className="about-info-left">
              <p>John Smith became the owner of Macchina on June 1st, 1989. Over the years, John has always stated that he did not choose auto repair as his profession, but it was more like vice versa.</p>
              <br />
              <p>Macchina offers top-quality auto repair and maintenance services to residents of Minneapolis and surrounding communities. We have a team of skilled and ASE-certified technicians who only use the latest diagnostic tools and equipment in the automotive industry. We are a NAPA Auto Care Center where our technicians receive ongoing training to deliver the highest quality of service possible. When you bring your car to us for a repair or maintenance service, we’ll treat you with respect and dignity. We won’t bother you with any unnecessary expenses.</p>
            </div>
            <div className="about-info-right">
              <div className="about-info-right-cover">
                <p>From transmission repair to oil changes, we’re here for all of your auto repair needs! Our shop is a full-service, auto repair facility that offers free Wi-Fi, complimentary drinks, and an exceptional customer service.</p>
                <br />
                <p>We are always willing to go the extra mile to educate our customers! We’ll even bring you out back to physically show you what’s going on with your vehicle.</p>
                <br />
                <p>Please come by and let us take care of all your car care needs. We’re here to help!</p>
              </div>
              <div className='about-info-right-bottom'>contact us</div>
            </div>
          </div>
        </div>
        <div className="about-certified">
          <h2>TEAM OF CERTIFIED <br /> TECHNICIANS</h2>
          <div className="about-certified-det">
            <p className="about-cert-left">
              We’re car people. That means you care about your car, and so do we. Our team of certified technicians will ensure you receive the best practices in the industry. Come and see for yourself. When you bring your car to us for maintenance or repair, we’ll treat you with respect and dignity. We won’t worry you with unnecessary expenses.
            </p>
            <div className="about-cert-logo">
              <div className="about-cert-logos">
                <div className="about-cert-cover">
                  <img src={logos} alt='Logos o certificate'/>
                </div>
                <div className="about-cert-cover">
                  <img src={logos} alt='Logos o certificate'/>
                </div>
                <div className="about-cert-cover">
                  <img src={logos} alt='Logos o certificate'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-quality">
          <div className="quality-contain">
            <div className="quality-words">
              <h1>quality</h1>
              <h2>why choose us</h2>
              <p>We at Macchina know your car is more than a tool that gets you from point A to point B, it’s your freedom. Your car lets you complete essential daily activities such as traveling to and from work, buying groceries, and picking up the children from school. You depend on it, so it’s important your car receives quality repairs and service. When you bring your car to Macchina, we make sure your car leaves trouble-free so you can have your freedom, and your peace of mind.</p>
            </div>
            <hr />
            <div className="quality-cards">
              <hr />
              <div className="quality-card">
                <FaCarAlt/>
                <h5>6,000+</h5>
                <p>Satisfied Clients</p>
              </div>
              <hr />
              <div className="quality-card">
                <FaCarAlt/>
                <h5>6,000+</h5>
                <p>Satisfied Clients</p>
              </div>
              <hr />
              <div className="quality-card">
                <FaCarAlt/>
                <h5>6,000+</h5>
                <p>Satisfied Clients</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="about-exp">
          <div className="about-exp-cover">
            <div className="about-exp-top">
              <h2>years of experience</h2>
              <p>We have been in the towing business over 40 years in New York location and you do not remain in organization that long unless you supply your clients with acceptable services over and over once again. Our expert tow truck operators will get here on the scene and supply you with high quality and reputable towing services to assist relieve the tension of this extremely stressful circumstance.</p>
            </div>
            <div className="about-exp-bottom">
              <img src={man} alt="Man screw" />
              <div className="about-exp-bot-left">
                <TbQuote color='red' className='quo'/>
                <h3>EXPERT SERVICE WHEN YOU NEED IT. WE'LL BE THERE FOR YOU IN TIME. WE'LL TOW YOUR CAR, FIX IT AND GET YOU BACK ON THE ROAD. THIS IS OUR GUARANTEE TO YOU.</h3>
                <button>get free appiontment</button>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default About