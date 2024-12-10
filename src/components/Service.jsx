import React from 'react'

const Service = ({image, number, text}) => {
  return (
    <div className='service'>
        <div className='image'>
            <img src={image} alt="" />
        </div>
        <div className='texts'>
            
            <p>{text}</p>
        </div>
      
    </div>
  )
}

export default Service
