import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'
import YourIngredients from './YourIngredients'
import YourLists from './YourLists'
import { Context } from '../../Context';
import React, { useContext, useEffect } from "react";
import './ProfilePage.css'

const ProfilePage = () => {

    const { regUsername, setRegUsername } = useContext(Context);

      
  return (
    <div className='profile-page'>
        <Header />
        <div>
            <h1>Welcome {regUsername}</h1>
        </div>

        <div className='user-container'>
            <div className='container-left'>
                <YourIngredients />
            </div>

            <div className='container-right'>
                <YourLists />
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default ProfilePage
