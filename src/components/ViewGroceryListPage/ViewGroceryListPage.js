import React, {useContext} from "react";
import Header from '../HeaderBar/Header'
import Footer from '../Navigation/Footer'
import YourLists from '../ProfilePage/YourLists'
import './ViewGroceryListPage.css'
import { Context } from '../../Context'

const ViewGroceryListPage = () => {

  const { name } = useContext(Context)
  const { date } = useContext(Context)
  const { items } = useContext(Context)

  window.localStorage.setItem('Name', name);
  window.localStorage.setItem('Date', date);

  return (
    <div className='view-list'>
      <Header />
      <h1>Your List</h1>

      <div className='list-container'>

        <div className='container-left'>
          <div className='list-inputs'>
            <div className='grocery-name'>
              <p>Name: {name}</p>
              
            </div>

            <div className='grocery-date'>
              <p>Date: {date}</p>
            </div>
            <p>Items:</p>
            <div className='view-list-items'>

              {items.map((item) => {
                return <label key={item.groceryId} className='view-items'>
                  <input 
                  type='checkbox'
               // onChange={() => {handleCheck(item.groceryId)}}
                 />
                <p>{item.name}</p>
                </label>
              })}
            </div>
          </div>

          {/* <div className="pantry-btn" id='pantry-btn'>
            <button>
             Add to Pantry
            </button>
          </div> */}

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

