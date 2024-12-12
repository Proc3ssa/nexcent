import React from 'react'
import illustration from '../assets/Illustration.png'
import { useNavigate } from 'react-router-dom'

const Body = () => {
  const navigate = useNavigate();

  const register = () =>{
    navigate('/register')
  }
  return (
    <div className='body'>
        <div className="left">
            <h1>Lessons and insights 
            <span> from 8 years</span></h1>
            <p>Where to grow your business as a photographer on social media</p>
            <button className='register' onClick={register}>
                Register
            </button>
        </div>
        <div className="right">
            <img src={illustration} alt="illustration"  />
        </div>
      
    </div>
  )
}

export default Body
