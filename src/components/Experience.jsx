import React from 'react'


const Experience = ({image, header, text}) => {
  return (
    <div className='experience'>
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

export default Experience
