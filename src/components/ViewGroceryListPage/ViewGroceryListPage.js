import React, {useContext } from "react";
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'
import YourLists from '../ProfilePage/YourLists'
import './ViewGroceryListPage.css'
import { Context } from '../../Context'

const ViewGroceryListPage = () => {
  const {name} = useContext(Context)
  const {date} = useContext(Context)

  return (
    <div className='view-list'>
    <Header />
    <h1>Your List</h1>

    <div className='list-container'>
      
      <div className='container-left'>
        <div className='list-inputs'>
          <div className='name'>
            <p>Name: {name}</p>
          </div>

          <div className='date'>
            <p>Date: {date}</p>
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

