import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Clients from '../components/Clients'

const Homepage = () => {
  return (
    <div className='home'>
      <Header />
      <Body />
      <Clients />
    </div>
  )
}

export default Homepage
