import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Clients from '../components/Clients'
import Community from '../components/Community'
import Experience from '../components/Experience'
const Homepage = () => {
  return (
    <div className='home'>
      <Header />
      <Body />
      <Clients />
      <Community />
      <Experience />
    </div>
  )
}

export default Homepage
