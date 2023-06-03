import React from 'react'
import '../styles/Hero.css'
import background from '../assets/contactbackground.webp'

const Hero = (props) => {


  return (
    <div className='hero'>
        <div className="hero-contain">
            <div className="hero-contain-top">
                <div className="hero-left">
                    <div className="hero-contain-bottom-cover">
                        <p>MACCHINA AUTO REPAIR IN NEW YORK</p>
                        <h1 style={{color: props.color}}>{props.head}</h1>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-right-img" 
                        style={{backgroundImage: `url(${props.background})`}}
                    ></div>
                </div>
            </div>
            <div className="hero-contain-bottom">
                <div className="hero-media-cover">
                    <div className="hero-bottom-media">
                        <p>MACCHINA AUTO REPAIR IN NEW YORK</p>
                        <h1>contact</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero