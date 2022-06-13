import React, {useContext } from "react";
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'
import YourLists from '../ProfilePage/YourLists'
import './ViewGroceryListPage.css'
import { Context } from '../../Context'
import { useLocation } from "react-router-dom";

const ViewGroceryListPage = () => {
  const { name } = useContext(Context)
  const { date } = useContext(Context)
  const { items } = useContext(Context)
  const location = useLocation();

  return (
    <div className='view-list'>
      <Header />
      <h1>Your List</h1>

      <div className='list-container'>

        <div className='container-left'>
          <div className='list-inputs'>
            <div className='grocery-name'>
              <p>Name: {location.state.name}</p>
            </div>

            <div className='grocery-date'>
              <p>Date: {location.state.date}</p>
            </div>
            <p>Items:</p>
            <div className='view-list-items'>
                <label className='view-items'>
                  <input 
                    type='checkbox'/>
                <p>{location.state.item1}</p>
                </label>
                <label className='view-items'>
                  <input 
                    type='checkbox'/>
                <p>{location.state.item2}</p>
                </label>
                <label className='view-items'>
                  <input 
                    type='checkbox'/>
                <p>{location.state.item3}</p>
                </label>
                <label className='view-items'>
                  <input 
                    type='checkbox'/>
                <p>{location.state.item4}</p>
                </label>
                <label className='view-items'>
                  <input 
                    type='checkbox'/>
                <p>{location.state.item5}</p>
                </label>
            </div>

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

