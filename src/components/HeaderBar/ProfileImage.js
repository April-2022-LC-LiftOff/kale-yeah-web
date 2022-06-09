import './ProfileImage.css'
import React, {useContext } from "react";
const Cabbage = require('../../images/cabbagehead.png')
import { Context } from '../../Context';
import { useState } from 'react';

import CreateModal2 from './CreateModal2';


const ProfileImage = (props) => {

  const {regUsername, setRegUsername} = useContext(Context);

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    if (showModal === false) {
        setShowModal(true)
    } else setShowModal(false)
}

  return (
    <div className='profile-container'>
      <p><a href={`/profile/${regUsername}`}>{regUsername}</a></p>
      <div onClick={showModalHandler}>
        <img src={Cabbage} className='profile-image' alt='This is a profile picture' />
      </div>
        {/* both these need to link back to profile page */}
        {showModal && <CreateModal2 closeModal = {setShowModal}/>}
    </div>
  )
}

export default ProfileImage
