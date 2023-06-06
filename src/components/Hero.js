import React from 'react'
import '../styles/Hero.css'
import { motion, variants } from 'framer-motion'


const pAni={
    offscreen:{y: 100, opacity: 0},
    onscreen:{y: 0,
      opacity: [0, 0.2, 0.5, 0.8, 1],
      transition: {type: 'spring',
      bounce: 0.2,
      delay: .5,
      duration: 2.5}
    }
  }

  const p2Ani={
    offscreen:{y: 100, opacity: 0},
    onscreen:{y: 0,
      opacity: [0, 0.2, 0.5, 0.8, 1],
      transition: {type: 'spring',
      bounce: 0.2,
      delay: .7,
      duration: 2.5}
    }
  }

const Hero = (props) => {

  return (
    <div className='hero'>
        <div className="hero-contain">
            <div className="hero-contain-top">
                <div className="hero-left">
                    <motion.div className="hero-contain-bottom-cover"
                        initial={'offscreen'}
                        whileInView={'onscreen'}
                        viewport={{once:true, amount:0.3}}
                        transition={{staggerChildren:0.5}}
                    >
                        <motion.p
                            variants={pAni}
                        >COSMIN PAINT & BODY REPAIR IN UNITED KINGDOM</motion.p>
                        <motion.h1 variants={p2Ani}>{props.head}</motion.h1>
                    </motion.div>
                </div>
                <div className="hero-right">
                    <div className="hero-right-img" 
                        style={{backgroundImage: `url(${props.background})`}}
                    ></div>
                </div>
            </div>
            <div className="hero-contain-bottom">
                <div className="hero-media-cover">
                    <motion.div className="hero-bottom-media"
                        initial={'offscreen'}
                        whileInView={'onscreen'}
                        viewport={{once:true, amount:0.3}}
                        transition={{staggerChildren:0.5}}
                    >
                        <motion.p variants={pAni}>MACCHINA AUTO REPAIR IN NEW YORK</motion.p>
                        <motion.h1 variants={p2Ani}>{props.head}</motion.h1>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero