import React from 'react'
import airpod from '../assets/airpod.png'

const Airpod = () => {
  return (
    <div className='airpod'>
        <div className="img">
           <img src={image} alt="" />
        </div>
        <div className="texts">
            <h1>{header}</h1>
            <p>{text}</p>
            <button className='active'>Learn more</button>
        </div>
      
    </div>
  )
}

export default Airpod
