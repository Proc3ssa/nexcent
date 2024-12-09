import React from 'react'
import image from '../assets/airpod.png'
import rings from '../assets/rings.png';
import net from '../assets/net.png';
import ipsumlogo from '../assets/logoipsum.png';
import oj from '../assets/oj.png';
import spaceship from '../assets/spaceship.png';
import yingyang from '../assets/yingyang.png';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Airpod = () => {
  return (
    <div className='airpod'>
        <div className="img">
           <img src={image} alt="" />
        </div>
        <div className="texts">
            
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus illo natus quam sunt dignissimos repellendus beatae nesciunt modi magni dicta laboriosam sit odit, quod aliquam possimus ipsam? Aspernatur, labore!</p>
            <h3>Faisal Halid Dene</h3>
            <p className='up'>Long Life Holdings</p>
            <div className="images">
            <img src={yingyang} alt="" />
            <img src={spaceship} alt="" />
            <img src={oj} alt="" />
            <img src={ipsumlogo} alt="" />
            <img src={net} alt="" />
            
            
            <a href='/clients'><h3 style={{color: '#237D31'}}>Meet all clients <IoIosArrowRoundForward /></h3></a>
            
        </div>
        </div>
      
    </div>
  )
}

export default Airpod
