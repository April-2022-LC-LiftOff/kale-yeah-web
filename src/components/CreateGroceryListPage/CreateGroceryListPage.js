import React from 'react'
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'

import './CreateGroceryListPage.css'

const CreateGroceryListPage = () => {
  return (
    <div className='create-list'>
      <Header />
      <h1>Create Grocery List</h1>

      <div className='list-inputs'>
          <div className='name'>
            <p>Name:</p>
            <input 
            type='text'/>
          </div>

          <div className='date'>
            <p>Date:</p>
            <input 
            type='text'/>
          </div>

          <div className='items'><p>Items:</p></div>
          
          
      </div>


    <Footer />
    </div>
  )
}

export default CreateGroceryListPage
