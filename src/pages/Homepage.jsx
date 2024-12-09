import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Clients from '../components/Clients'
import Community from '../components/Community'
import Experience from '../components/Experience'
import Reinvent from '../components/Reinvent'
import illustration from '../assets/rafiki.png'
import Airpod from '../components/Airpod'
import pana from '../assets/pana.png'

const Homepage = () => {
  return (
    <div className='home'>
      <Header />
      <Body />
      <Clients />
      <Community />
      <Experience image={illustration} header='The unseen of spending three years at Pixelgrade' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus tempore hic vero non at dolorum qui doloribus fugiat, placeat odio!'/> 
      <Reinvent />
      <Experience image={pana} header='How to design your footer like this' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni error rem eveniet aut atque perspiciatis facilis architecto animi veniam sint nulla provident, asperiores quibusdam ab officiis blanditiis maiores inventore!'/>

      <Airpod />
     
      
    </div>
  )
}

export default Homepage
