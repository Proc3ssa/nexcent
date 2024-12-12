import React from 'react'
import rafiki from '../assets/rafiki.png'
import Footer from '../components/Footer'


const Register = () => {
  return (
    <>
    <div className='register'>
      <h1>Register</h1>
      <div className="container">
        
        <div className="img">
           <img src={rafiki} alt="" />
        </div>
        <div className="input">
           <input type="text" name="" id="" placeholder='Enter name'/>
           <input type="email" name="" id="" placeholder='Enter email'/>
           <input type="tel" name="" id="" placeholder='Enter Phone number'/>
           <input type="password" name="" id="" placeholder='Set password'/>
           <input type="password" name="" id="" placeholder='Confirm password'/>
           <button>Register</button>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  )
}

export default Register
