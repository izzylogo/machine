import React, { useState } from 'react'
import '../styles/Navbar.css'
import logo from '../assets/car-logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='navbar'>
        <div className="navbar-contain">
            <Link to='/'><img src={logo} alt="logo" /></Link>
            <div className="nav-list">
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/services'><li>Services</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>
            </div>
            {/* hamburger menu */}
            <div className="nav-media">
                <div className="nav-media-det">
                    <div id="hamburger"
                      onClick={() => setToggle(prev => !prev)}
                        // onClick={()=> setToggle(prev => !prev)}
                    >
                        <div id={toggle ? 'ones' : 'one'} ></div>
                        <div id={toggle ? 'twos' : 'two'}></div>
                        <div id={toggle ? 'threes' : 'three'}></div>
                    </div>
                </div>
            </div>
            <div className="media-cover">
              <div className={toggle ? "nav-media-show" : "nav-media-hide"}>
                  <ul className='list-contain'>
                      <Link onClick={() => setToggle(prevToggle => !prevToggle)}  to='/'><li>Home</li></Link>
                      <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='/about'><li>About</li></Link>
                      <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='/services'><li>Services</li></Link>
                      <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='/contact'><li>Contact</li></Link>
                  </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar