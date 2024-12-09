import React from 'react'
import Images from './Images'
import human from '../assets/human.png'
import laptop from '../assets/laptop.png'
import laptop2 from '../assets/laptop2.png'

const Caring = () => {
  return (
    <div className='caring'>
        <div className="top">
        <h1>Caring is the new marketing</h1>
        <p className='up'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, possimus dignissimos. Reprehenderit dicta recusandae, animi ratione commodi nihil error nisi?</p>
        </div>

        <div className="imageboxes">
            <Images image={human} text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, possimus dignissimos.'/>

            <Images image={laptop} text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, possimus dignissimos.'/>

            <Images image={laptop2} text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, possimus dignissimos.'/>
        </div>
      
    </div>
  )
}

export default Caring
