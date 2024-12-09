import React from 'react'
import Service from './Service'
import twopeople from '../assets/twopeople.png';
import wallet from '../assets/wallet.png';
import fuck from '../assets/fuck.png';
import hands2 from '../assets/hands2.png';

const Reinvent = () => {
  return (
    <div className='reinvent'>
      <div className='help'>
        <h2>Helping a local <span>business reinvent itself</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div className='services'>
        <Service image={twopeople} number='2,245,341' text='Members'/>

        <Service image={hands2} number='46,328' text='Chats'/>

        <Service image={fuck} number='828,867' text='Email Bookings'/>

        <Service image={wallet} number='1,926,436' text='Payments'/>
      </div>
    </div>
  )
}

export default Reinvent
