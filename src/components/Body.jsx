import React from 'react'
import illustration from '../assets/Illustration.png'

const Body = () => {
  return (
    <div className='body'>
        <div className="left">
            <h1>Lessons and insights 
            <span> from 8 years</span></h1>
            <p>Where to grow your business as a photographer on social media</p>
            <button className='register'>
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
