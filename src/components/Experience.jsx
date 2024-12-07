import React from 'react'
import illustration from '../assets/rafiki.png'

const Experience = () => {
  return (
    <div className='experience'>
        <div className="img">
           <img src={illustration} alt="" />
        </div>
        <div className="texts">
            <h1>The unseen of spending three years at Pixelgrade</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus tempore hic vero non at dolorum qui doloribus fugiat, placeat odio!</p>
            <button className='active'>Learn more</button>
        </div>
      
    </div>
  )
}

export default Experience
