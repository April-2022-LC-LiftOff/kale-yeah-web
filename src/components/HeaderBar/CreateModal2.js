import React from 'react';
import { useNavigate } from 'react-router';
import './CreateModal2.css'
import { Context } from '../../Context';
import {useContext } from "react";
import  * as  SiIconName from "react-icons/si";


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
        <p id ='router-icon'> <SiIconName.SiReactrouter size={50}/></p>
        <div className='buttons'>
          <table>
            <tbody>
              <tr>
                <button onClick={handleClickProfile} className='home-btn'>
                  Home
                </button>
              </tr>
              <tr>
                <button onClick={handleClickLogout} className='logout-btn'>
                  Log out
                </button>
              </tr>
              <tr>
                {/* <button onClick={() => closeModal(false)}>
                  Close
                </button> */}
              </tr>
            </tbody>
          </table>
          
          
        </div>
      </div>
  
    )
}

  
  export default CreateModal2