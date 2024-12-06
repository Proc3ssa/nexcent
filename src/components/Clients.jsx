import React from 'react'
import rings from '../assets/rings.png';
import net from '../assets/net.png';
import ipsumlogo from '../assets/logoipsum.png';
import oj from '../assets/oj.png';
import spaceship from '../assets/spaceship.png';
import yingyang from '../assets/yingyang.png';


const Clients = () => {
  return (
    <div className='clients'>
        <h1>Our Clients</h1>
        <p>We have been working wit some fortune 500+ clients</p>

        <div className="images">
            <img src={yingyang} alt="" />
            <img src={spaceship} alt="" />
            <img src={oj} alt="" />
            <img src={ipsumlogo} alt="" />
            <img src={net} alt="" />
            <img src={rings} alt="" />
            <img src={oj} alt="" />
            
        </div>
      
    </div>
  )
}

export default Clients
