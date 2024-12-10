import React from 'react'
import logo from '../assets/Logof.png'
import sociallink from '../assets/sociallinks.png'

const Footer = () => {
  return (
    <footer>
        <div className="in">
      <div className='c1'>

         <div className="in2">
        <img src={logo} alt="logo" />
        <p>copyright &copy; 2024 Faisal front-end</p>
        <div className='socialmedia'>
            <img src={sociallink} alt="" />
        </div>

        </div>
      </div>

      <div className='c2'>
        <div className='small'>
            <p><b>Comapny</b></p>
            <p></p>
            <p>About us</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>Pricing</p>
            <p>Other links</p>
        </div>
        <div className='small'><p><b>Support</b></p>
        <p></p>
            <p>Help center</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>Pricing</p>
            <p>Other links</p></div>
      </div>

      <div className='c3'>
        <b>Stay up to date</b><p></p>
        <input type="email" name="" id="" placeholder='your email address'/>
      </div>

      </div>
    </footer>
  )
}

export default Footer
