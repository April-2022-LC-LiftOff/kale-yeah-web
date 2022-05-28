import React from 'react'
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'
import YourLists from '../ProfilePage/YourLists'
import './ViewGroceryListPage.css'

const ViewGroceryListPage = () => {
  return (
    <div className='view-list'>
    <Header />
    <h1>Your List</h1>

    <div className='list-container'>
      
      <div className='container-left'>
        <div className='list-inputs'>
          <div className='name'>
            <p>Name: Grocery List Name Here</p>
          </div>

          <div className='date'>
            <p>Date: 06-02-22</p>
          </div>

          <div className='items'><p>Items:</p></div>
        </div>
      </div>

      <div className='container-right'>
        <YourLists />
      </div>



    </div>



    


    <Footer /> 
    </div>
  )
}

export default ViewGroceryListPage

