import React from 'react'
import './ProfileImage.css'
const Sheila = require('../../images/sheila.jpg')

const ProfileImage = (props) => {
  return (
    <div className='profile-container'>
        <p>{props.user}</p>
        <img src={Sheila} className='profile-image' alt='This is a profile picture' />

        {/* both these need to link back to profile page */}
    </div>
  )
}

export default ProfileImage
