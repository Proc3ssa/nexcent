import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


const Images = ({image, text}) => {
  return (
    <div className='iimages'>
      <img src={image} alt="" />
      <div className="inimage">
        {text}
        <p style={{color:'#237D31'}}>Read more <IoIosArrowRoundForward /></p>
      </div>
    </div>
  )
}

export default Images
