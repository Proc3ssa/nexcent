import React from 'react'
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";


const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="logo" />
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/features'>Features</a></li>
                <li><a href='/community'>Community</a></li>
                <li><a href='/blog'>Blog</a></li>
                <li><a href='/pricing'>Pricing</a></li>
                <li className='active'><a href='/register'>Register Now<IoIosArrowRoundForward  style={{color:'white'}}/></a></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Header
