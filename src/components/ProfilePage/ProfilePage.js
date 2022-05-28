import React from 'react'
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'
import YourIngredients from './YourIngredients'
import YourLists from './YourLists'
import './ProfilePage.css'

const ProfilePage = () => {
  return (
    <div className='profile-page'>
        <Header />
        <div>
            <h1>Welcome aunt_sheila</h1>
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
