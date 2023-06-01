import React from 'react'
import '../styles/Services.css'
import { FaPhone } from 'react-icons/fa'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div className='service'>
      <div className="service-contain">
        <div className="service-contain-first">
          <div className="service-first-left">
            <h2>WHEEL ALIGNMENT & TIRE INSTALLATION</h2>
            <p>A wheel alignment service is very important because it can expand the life of your tires. Even the smallest alignment issue can result in an uneven tire wear. Once your wheels are properly aligned, it’s smooth cruising ahead, saving you tire wear, fuel, and ultimately…money.</p>
            {/* <br /> */}
            <p>If you need help with your tire purchase, some to us! We can help you compare tire specifications and prices before you buy, to ensure you are getting the best new tires for your needs and budget.</p>
          </div>
          <div className="service-first-right">
            <FaPhone className='serv-icon'/>
            <div className="serv-first-det">
              <h6>715.387.5006</h6>
              <p>If you have any questions, feel free to call us or get free appoitment.</p>
              <button>get free appointment</button>
            </div>
          </div>
        </div>
        <div className="service-contain-second">
          <div className="service-contain-second-cover">
            <div className="serv-second-left">
              <h2>Tire <br /> balancing</h2>
              <div className="ser-sec-det">
                <p>Tire Balancing is important to increase the basic safety of your vehicle and extend the life of your tires. The certified technicians at our auto repair shop are here to help with all of your tire balancing and tire service needs.</p>
                <p>Tire balancing happens each time you replace your vehicle’s tires. Since tires wear depending on road problems and driving practices, uneven wear can be visible after the initial 1,000-2,000 miles of use. It’s important to check your tires balance every 4,000-6,000 miles. Our certified technicians can assist in determining if your tires need to be balanced and rotated based on mileage and wear.</p>
              </div>
            </div>
            <div className="serv-second-left">
              <h2>Tire rotation & <br /> inspection</h2>
              <div className="ser-sec-det">
                <p>Your vehicle’s weight is not distributed evenly to all four corners. If you leave all 4 tires just the way they are, some tires would eventually wear out faster than others. We know that a tire rotation is an essential part of making your tires last longer. The tire rotation process consists of moving your tires from front to back, moving them from one side of your vehicle to the other or a combination of both.</p>
                <p>Tires need to be checked on a regular basis for damage, such as stones, nails or other sharp objects that may have penetrated the tire. They also need to be checked for bulges, tears or cuts that might be the result of contact with road hazards. If you have doubts about the condition of your tires, it’s best to have them inspected by our technicians. Our auto repair shop is known for performing top-notch tire inspection services.</p>
              </div>
              <div className='serv-con'>contact us</div>
            </div>
          </div>
        <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Services