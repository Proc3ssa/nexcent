import React from 'react'
import people from '../assets/people.png'
import building from '../assets/building.png'
import hands from '../assets/hands.png'

const Community = () => {
  return (
    <div className='community'>
      <h1>Manage your entire community in a single system</h1>
      <p>Who is nexcent suitable for?</p>

      <div className="members">
        <div className="member">
            <img src={people} alt="" />
            <h3>Membership Organizations</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo libero, pariatur fugit similique,</p>
        </div>
        <div className="member">
            <img src={building} alt="" />
        <h3>National Associations</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo libero, pariatur fugit similique,</p>
        </div>
        <div className="member">
            <img src={hands} alt="" />
        <h3>Clubs And Groups</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo libero, pariatur fugit similique,</p>
        </div>
      </div>
    </div>
  )
}

export default Community
