import React from 'react';
import { useNavigate } from 'react-router';
import { Context } from '../../Context';
import {useContext } from "react";
import "./HomeModal.css"
const Kale = require('../../images/kale-cut.png')


function CreateModal2({ closeModal }) {
  const {regUsername, setRegUsername} = useContext(Context);
    

    let navigate  = useNavigate();
  
    function handleClickProfile() {
      navigate(`/profile/${regUsername}`)
    }
  
    function handleClickLogout() {
      navigate('/')
    }
  
    return (
      <div className='modal'>
        <div className='kale-sm'><img src={Kale} alt="Kale" width='75px' height='100px'/></div>
        <div className='buttons'>

          <button onClick={handleClickProfile} className='home-btn'>
            Home
          </button>

          <button onClick={handleClickLogout} className='logout-btn'>
            Log out
          </button>

          <button className='close-btn2' onClick={() => closeModal(false)}>
            Close
          </button>
        </div>
      </div>
  
    )
}
  
  export default CreateModal2