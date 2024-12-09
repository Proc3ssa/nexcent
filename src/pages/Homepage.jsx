import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Clients from '../components/Clients'
import Community from '../components/Community'
import Experience from '../components/Experience'
import Reinvent from '../components/Reinvent'

const Homepage = () => {
  return (
    <div className='home'>
      <Header />
      <Body />
      <Clients />
      <Community />
      <Experience />
      <Reinvent />
    </div>
  )
}

export default Homepage
