import React from 'react'
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdCloseCircle } from 'react-icons/io';

const Header = () => {
  
  
  return (
    <nav>
    
    <input type="checkbox" id="check" />
   
    <label for="check" class="checkbtn">
      <GiHamburgerMenu  style={{color:'black'}}/>
    </label>
    
    <label class="logo"><img src={logo} alt="" /></label>
    
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Community</a></li>
      <li><a href="#">Blog</a></li>
      <li className='active'><a href="#" >Register <IoIosArrowRoundForward /></a></li>
    </ul>
  </nav>
  )
}

export default Header
