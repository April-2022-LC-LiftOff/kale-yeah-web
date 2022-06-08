import './ProfileImage.css'
import React, {useContext } from "react";
const Cabbage = require('../../images/cabbagehead.png')
import { Context } from '../../Context';

const ProfileImage = (props) => {

  const {regUsername, setRegUsername} = useContext(Context);

  return (
    <div className='profile-container'>
        <p><a href={`/profile/${regUsername}`}>{regUsername}</a></p>
        <img src={Cabbage} className='profile-image' alt='This is a profile picture' />

        {/* both these need to link back to profile page */}
    </div>
  )
}

export default ProfileImage
